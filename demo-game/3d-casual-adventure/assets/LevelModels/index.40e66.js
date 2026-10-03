System.register("chunks:///_virtual/LevelModels",["./ZuanTouAnim.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/ZuanTouAnim.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,o,e,r,u;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,e=n._decorator,r=n.v3,u=n.Component}],execute:function(){var a;o._RF.push({},"a919fg2s1hM/YspTaRKTfaj","ZuanTouAnim",void 0);var s=e.ccclass;e.property,n("ZuanTouAnim",s("ZuanTouAnim")(a=function(n){function o(){for(var t,o=arguments.length,e=new Array(o),u=0;u<o;u++)e[u]=arguments[u];return(t=n.call.apply(n,[this].concat(e))||this)._spd=720,t._ang=r(),t}t(o,n);var e=o.prototype;return e.start=function(){},e.update=function(n){this._ang.z+=n*this._spd,this.node.eulerAngles=this._ang},o}(u))||a);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/LevelModels', 'chunks:///_virtual/LevelModels'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});