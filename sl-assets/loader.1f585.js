(function () {
  function loadScript(s, callback) {
    if (!s) return;
    if (typeof s === 'function') {
      s();
      if (callback) callback();
    } else if (typeof s === 'string') {
      var script = document.createElement('script');
      if (s.includes('import-map')) {
        script.type = 'systemjs-importmap';
      }
      script.src = s;
      script.onload = () => {
        if (callback) callback();
      };
      document.body.appendChild(script);
    }
  }

  async function loadGame() {
    // CẬP NHẬT STATIC DOMAIN CỦA BẠN TẠI ĐÂY
    // var STATIC_DOMAIN = 'https://static.your-cdn.com/';
    const STATIC_DOMAIN = window.location.origin + window.location.pathname + window.APP_VERSION;
    // tạo thẻ html
    var gameDiv = document.createElement('div');
    gameDiv.id = 'GameDiv';
    gameDiv.style = 'width: 100%; height: 100%';

    var ccContainer = document.createElement('div');
    ccContainer.id = 'Cocos3dGameContainer';
    ccContainer.style = 'width: 100%; height: 100%';

    var canvas = document.createElement('canvas');
    canvas.id = 'GameCanvas';
    canvas.style = 'width: 100%; height: 100%';
    canvas.setAttribute('oncontextmenu', 'event.preventDefault()');
    canvas.setAttribute('tabindex', '99');

    ccContainer.appendChild(canvas);
    gameDiv.appendChild(ccContainer);
    document.body.appendChild(gameDiv);

    var rewardAdDiv = document.createElement('div');
    rewardAdDiv.id = 'ZMA_Reward';
    document.body.appendChild(rewardAdDiv);
    var midgameAdDiv = document.createElement('div');
    midgameAdDiv.id = 'ZMA_Fullscreen';
    document.body.appendChild(midgameAdDiv);

    /** ------------------------------------------------- */

    var scripts = [
      STATIC_DOMAIN + '/src/polyfills.bundle.346e4.js',
      STATIC_DOMAIN + '/src/system.bundle.543e6.js',
      () => {
        setTimeout(() => {
          System.import(STATIC_DOMAIN + '/index.9e088.js').catch(function (err) {
            console.error('SystemJS error', err);
          });
        }, 100);
      },
      STATIC_DOMAIN + '/src/import-map.9c06b.json'
    ];

    // tải đồng bộ từng script
    let idx = 0;
    (function loadScriptSync(i) {
      loadScript(scripts[i], () => {
        loadScriptSync(++idx);
      });
    })(idx);
  }

  loadGame();
})();