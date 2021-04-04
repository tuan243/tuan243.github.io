window.__require=function t(e,o,r){function i(c,a){if(!o[c]){if(!e[c]){var l=c.split("/");if(l=l[l.length-1],!e[l]){var s="function"==typeof __require&&__require;if(!a&&s)return s(l,!0);if(n)return n(l,!0);throw new Error("Cannot find module '"+c+"'")}c=l}var h=o[c]={exports:{}};e[c][0].call(h.exports,function(t){return i(e[c][1][t]||t)},h,h.exports,t,e,o,r)}return o[c].exports}for(var n="function"==typeof __require&&__require,c=0;c<r.length;c++)i(r[c]);return i}({Game:[function(t,e,o){"use strict";cc._RF.push(e,"bd596Q9Ud5J6bcqQIUSqn3k","Game");var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=this&&this.__decorate||function(t,e,o,r){var i,n=arguments.length,c=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(n<3?i(c):n>3?i(e,o,c):i(e,o))||c);return n>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,l=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return i(e,t),e.prototype.start=function(){},n([l(cc.Label)],e.prototype,"label",void 0),n([l],e.prototype,"text",void 0),n([a],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],GridManager:[function(t,e,o){"use strict";cc._RF.push(e,"2ad2dX140lG975telFvLxHp","GridManager");var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=this&&this.__decorate||function(t,e,o,r){var i,n=arguments.length,c=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(n<3?i(c):n>3?i(e,o,c):i(e,o))||c);return n>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c,a=cc._decorator,l=a.ccclass,s=a.property;(function(t){t[t.Up=0]="Up",t[t.Down=1]="Down",t[t.Left=2]="Left",t[t.Right=3]="Right"})(c||(c={}));var h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tableSize=4,e.testNode=null,e.scoreLabel=null,e.bestLabel=null,e.loseScreen=null,e._score=0,e._best=0,e._startLocation=null,e._swipeThres=20,e._isSwipeEnd=!0,e._table=[],e._animTable=[],e._tileInitVal=2,e._tiles=[],e._canSwipe=!0,e._tileColors=[cc.color(238,228,218),cc.color(237,224,200),cc.color(242,177,121),cc.color(245,149,99),cc.color(246,124,96),cc.color(246,94,59),cc.color(237,207,115),cc.color(237,204,98),cc.color(237,200,80),cc.color(237,197,63),cc.color(237,294,45)],e}return i(e,t),e.prototype.addRandomTile=function(){for(var t=[],e=0;e<this.tableSize;e++)for(var o=0;o<this.tableSize;o++)0===this._table[e][o]&&t.push(e*this.tableSize+o);var r=t[Math.floor(Math.random()*t.length)];if(r){var i=Math.floor(r/this.tableSize),n=r%this.tableSize;this._table[i][n]=this._tileInitVal;var c=this._tiles[r];c.scale=0,cc.tween(c).to(.1,{scale:1}).start()}},e.prototype.moveGrid=function(t){var e=this;this._animTable=this._animTable.map(function(t){return t.map(function(){return 0})});for(var o=[],r=0;r<this.tableSize;r++){o.push([]);for(var i=0;i<this.tableSize;i++)o[r].push(0)}for(var n=0;n<this.tableSize;n++){var a=[];if(t===c.Left||t===c.Right)a=this._table[n];else for(i=0;i<this.tableSize;i++)a.push(this._table[i][n]);t!==c.Left&&t!==c.Up||a.reverse();for(var l=[],s=[],h=0;h<a.length;h++)l.push(0),s.push(0);for(r=a.length-1;r>=0;)for(i=r-1;i>=-1;){if(-1==i){r=-1;break}if(0!==a[i]){0!==a[r]?(a[i]===a[r]?(a[r]+=a[i],a[i]=0,l[i]=r-i,s[r]=1,this._score+=a[r]):r-1!=i&&(a[r-1]=a[i],a[i]=0,l[i]=r-i-1),r--):(a[r]+=a[i],a[i]=0,l[i]=r-i);break}i--}if(t!==c.Left&&t!==c.Up||(s.reverse(),a.reverse(),l.reverse()),t===c.Left||t===c.Right)this._animTable[n]=l,this._table[n]=a,o[n]=s;else for(var p=0;p<a.length;p++)this._table[p][n]=a[p],this._animTable[p][n]=l[p],o[p][n]=s[p]}this.scoreLabel.string=this._score.toString(),this._score>this._best&&(this._best=this._score,this.bestLabel.string=this._best.toString(),window.localStorage.setItem("best",this._best.toString()));var f=[];for(r=0;r<this.tableSize;r++){var _=function(e){var o=u._animTable[r][e];if(0===o)return"continue";var i=r*u.tableSize+e,n=0,a=0;switch(t){case c.Right:n=o;break;case c.Left:n=-o;break;case c.Up:a=o;break;case c.Down:a=-o}var l=u._tiles[i],s=l.position,h=l.zIndex;l.zIndex=-Math.abs(o),u._canSwipe=!1,f.push(cc.tween(l).to(.2,{position:cc.v3(l.x+n*(8+u._tiles[i].width),l.y+a*(8+u._tiles[i].height),0)}).call(function(){l.active=!1,l.position=s,l.zIndex=h}))},u=this;for(i=0;i<this.tableSize;i++)_(i)}for(r=0;r<f.length;r++)r===f.length-1&&f[r].call(function(){for(var t=0;t<e.tableSize;t++)for(var r=0;r<e.tableSize;r++)if(1===o[t][r]){var i,n=e._tiles[t*e.tableSize+r],c=Math.min(Math.round(Math.log2(e._table[t][r]))-1,e._tileColors.length-1);i=c>1?new cc.Color(249,246,242):new cc.Color(119,110,101),cc.tween(n.children[0]).parallel(cc.tween().to(.05,{scale:1.2}).to(.05,{scale:1}),cc.tween().to(.1,{color:e._tileColors[c]})).start(),cc.tween(n.children[0].children[0]).to(.1,{color:i}).start(),e.updateView()}e.addRandomTile(),e.updateView(),e.scheduleOnce(function(){e._canSwipe=!0,e.validMoves()||(console.log("thua roi"),e.loseScreen.opacity=0,e.loseScreen.active=!0,cc.tween(e.loseScreen).to(.5,{opacity:255}).start())},.1)}),f[r].start()},e.prototype.updateView=function(){for(var t=0;t<this.tableSize;t++)for(var e=0;e<this.tableSize;e++){var o=t*this.tableSize+e;if(0!=this._table[t][e]){this._tiles[o].children[0].children[0].getComponent(cc.Label).string=this._table[t][e];var r,i=Math.min(Math.round(Math.log2(this._table[t][e]))-1,this._tileColors.length-1);r=i>1?new cc.Color(249,246,242):new cc.Color(119,110,101),this._tiles[o].children[0].color=this._tileColors[i],this._tiles[o].children[0].children[0].color=r,this._tiles[o].active=!0}else this._tiles[o].active=!1}},e.prototype.validMoves=function(){for(var t=0;t<this._table.length;t++)for(var e=0;e<this._table.length;e++)if(0===this._table[t][e])return!0;for(t=0;t<this._table.length;t++)for(e=0;e<this._table.length-1;e++){if(this._table[t][e]===this._table[t][e+1])return!0;if(this._table[e][t]===this._table[e+1][t])return!0}return!1},e.prototype.onLoad=function(){var t=this;this.loseScreen.active=!1;var e=window.localStorage.getItem("best");e&&(this._best=e,this.bestLabel.string=e),this.node.children.forEach(function(e){e.active=!1,e.children[0].children[0].color=new cc.Color(119,110,101),t._tiles.push(e)});for(var o=0;o<this.tableSize;o++){this._table.push([]),this._animTable.push([]);for(var r=0;r<this.tableSize;r++)this._table[o].push(0),this._animTable[o].push(0)}this.node.on(cc.Node.EventType.TOUCH_START,function(e){t._startLocation=e.getStartLocation(),t._isSwipeEnd=!1}),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(e){if(!t._isSwipeEnd&&t._startLocation&&0!=t._canSwipe){var o=e.getLocation(),r=o.x-t._startLocation.x,i=o.y-t._startLocation.y;Math.abs(r)>Math.abs(i)?Math.abs(r)>t._swipeThres&&(r>0?t.moveGrid(c.Right):t.moveGrid(c.Left),t._isSwipeEnd=!0):Math.abs(i)>t._swipeThres&&(i>0?t.moveGrid(c.Up):t.moveGrid(c.Down),t._isSwipeEnd=!0)}}),this.node.on(cc.Node.EventType.TOUCH_END,function(){t._isSwipeEnd=!0}),this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(){t._isSwipeEnd=!0})},e.prototype.start=function(){this.addRandomTile(),this.addRandomTile(),this.updateView()},e.prototype.resetGame=function(){this._table=this._table.map(function(t){return t.map(function(){return 0})}),this.addRandomTile(),this.updateView(),this._score=0,this.scoreLabel.string=this._score.toString(),this.loseScreen.active=!1},n([s],e.prototype,"tableSize",void 0),n([s(cc.Node)],e.prototype,"testNode",void 0),n([s(cc.Label)],e.prototype,"scoreLabel",void 0),n([s(cc.Label)],e.prototype,"bestLabel",void 0),n([s(cc.Node)],e.prototype,"loseScreen",void 0),n([l],e)}(cc.Component);o.default=h,cc._RF.pop()},{}],Helloworld:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Helloworld");var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=this&&this.__decorate||function(t,e,o,r){var i,n=arguments.length,c=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(n<3?i(c):n>3?i(e,o,c):i(e,o))||c);return n>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,l=c.property,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return i(e,t),e.prototype.start=function(){},n([l(cc.Label)],e.prototype,"label",void 0),n([l],e.prototype,"text",void 0),n([a],e)}(cc.Component);o.default=s,cc._RF.pop()},{}]},{},["Game","GridManager","Helloworld"]);