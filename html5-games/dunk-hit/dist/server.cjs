var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var leaderboardData = [
  { id: "1", playerName: "VnHoopKing \u{1F525}", score: 142, mode: "arcade", streak: 12, avatar: "\u{1F451}", country: "VN", timestamp: Date.now() - 36e5, ballSkinId: "fireball" },
  { id: "2", playerName: "DunkGod_26", score: 118, mode: "arcade", streak: 9, avatar: "\u26A1", country: "VN", timestamp: Date.now() - 72e5, ballSkinId: "lava" },
  { id: "3", playerName: "SlamMaster_Pro", score: 95, mode: "arcade", streak: 7, avatar: "\u{1F3C0}", country: "US", timestamp: Date.now() - 144e5, ballSkinId: "neon" },
  { id: "4", playerName: "HoopSniper_VN", score: 88, mode: "arcade", streak: 6, avatar: "\u{1F3AF}", country: "VN", timestamp: Date.now() - 288e5, ballSkinId: "golden" },
  { id: "5", playerName: "FlameShooter", score: 76, mode: "arcade", streak: 5, avatar: "\u{1F525}", country: "KR", timestamp: Date.now() - 864e5, ballSkinId: "galaxy" },
  { id: "6", playerName: "Basketballer_99", score: 64, mode: "arcade", streak: 4, avatar: "\u{1F42F}", country: "VN", timestamp: Date.now() - 12e7, ballSkinId: "standard" },
  // Shootout entries
  { id: "7", playerName: "SniperAim_VN", score: 32, mode: "shootout", streak: 8, avatar: "\u{1F3AF}", country: "VN", timestamp: Date.now() - 5e6, ballSkinId: "anime" },
  { id: "8", playerName: "ArcMaster", score: 28, mode: "shootout", streak: 6, avatar: "\u{1F4AB}", country: "JP", timestamp: Date.now() - 1e7, ballSkinId: "golden" },
  { id: "9", playerName: "SwishKing", score: 24, mode: "shootout", streak: 5, avatar: "\u{1F451}", country: "VN", timestamp: Date.now() - 15e6, ballSkinId: "fireball" },
  // Time Attack entries
  { id: "10", playerName: "SpeedDemon_3P", score: 58, mode: "time_attack", streak: 11, avatar: "\u26A1", country: "VN", timestamp: Date.now() - 4e6, ballSkinId: "fireball" },
  { id: "11", playerName: "RapidFire_VN", score: 49, mode: "time_attack", streak: 8, avatar: "\u{1F525}", country: "VN", timestamp: Date.now() - 8e6, ballSkinId: "neon" },
  { id: "12", playerName: "Clutch3Pointer", score: 42, mode: "time_attack", streak: 7, avatar: "\u{1F3C6}", country: "SG", timestamp: Date.now() - 18e6, ballSkinId: "standard" }
];
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", appName: "Dunk Hit - B\xF3ng R\u1ED5 R\u1EF1c L\u1EEDa" });
  });
  app.get("/api/leaderboard", (req, res) => {
    const mode = req.query.mode || "arcade";
    const limit = parseInt(req.query.limit || "20", 10);
    const filtered = leaderboardData.filter((item) => item.mode === mode).sort((a, b) => b.score - a.score).slice(0, limit);
    res.json({
      success: true,
      mode,
      leaderboard: filtered,
      totalEntries: leaderboardData.filter((item) => item.mode === mode).length
    });
  });
  app.post("/api/leaderboard", (req, res) => {
    const { playerName, score, mode, streak, avatar, country, ballSkinId } = req.body;
    if (!playerName || typeof score !== "number" || !mode) {
      return res.status(400).json({ success: false, message: "Invalid score submission data" });
    }
    const cleanName = String(playerName).trim().substring(0, 18) || "C\u1EA7u th\u1EE7 V\xF4 Danh";
    const cleanMode = ["arcade", "shootout", "time_attack"].includes(mode) ? mode : "arcade";
    const existingIndex = leaderboardData.findIndex(
      (item) => item.playerName.toLowerCase() === cleanName.toLowerCase() && item.mode === cleanMode
    );
    let isNewRecord = false;
    let entry;
    if (existingIndex !== -1) {
      if (score > leaderboardData[existingIndex].score) {
        leaderboardData[existingIndex].score = score;
        leaderboardData[existingIndex].streak = Math.max(leaderboardData[existingIndex].streak, streak || 0);
        leaderboardData[existingIndex].timestamp = Date.now();
        if (avatar) leaderboardData[existingIndex].avatar = avatar;
        if (ballSkinId) leaderboardData[existingIndex].ballSkinId = ballSkinId;
        isNewRecord = true;
      }
      entry = leaderboardData[existingIndex];
    } else {
      entry = {
        id: "lb_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
        playerName: cleanName,
        score: Math.max(0, score),
        mode: cleanMode,
        streak: streak || 0,
        avatar: avatar || "\u{1F3C0}",
        country: country || "VN",
        timestamp: Date.now(),
        ballSkinId: ballSkinId || "standard"
      };
      leaderboardData.push(entry);
      isNewRecord = true;
    }
    const modeLeaderboard = leaderboardData.filter((item) => item.mode === cleanMode).sort((a, b) => b.score - a.score);
    const rank = modeLeaderboard.findIndex((item) => item.id === entry.id) + 1;
    res.json({
      success: true,
      entry,
      rank,
      isNewRecord,
      message: isNewRecord ? "K\u1EF7 l\u1EE5c m\u1EDBi \u0111\xE3 \u0111\u01B0\u1EE3c l\u01B0u!" : "\u0110\xE3 c\u1EADp nh\u1EADt b\u1EA3ng x\u1EBFp h\u1EA1ng!"
    });
  });
  app.get("/api/leaderboard/my-rank", (req, res) => {
    const score = parseInt(req.query.score || "0", 10);
    const mode = req.query.mode || "arcade";
    const higherScores = leaderboardData.filter(
      (item) => item.mode === mode && item.score > score
    ).length;
    res.json({
      rank: higherScores + 1,
      totalPlayers: leaderboardData.filter((item) => item.mode === mode).length
    });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
