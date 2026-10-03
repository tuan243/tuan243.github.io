System.register("chunks:///_virtual/AtkTrailCmp.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BasicComponet.ts","./GlobalPool.ts"],(function(t){var i,s,e,a,r,n,o,h,l,u,c;return{setters:[function(t){i=t.applyDecoratedDescriptor,s=t.inheritsLoose,e=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){r=t.cclegacy,n=t._decorator,o=t.MeshRenderer,h=t.Vec4,l=t.v4},function(t){u=t.BasicComponet},function(t){c=t.default}],execute:function(){var p,m,f,d,P,b,g,y,_,x,v;r._RF.push({},"d0aa1pxwFFJ+b2Hsxq1gtqZ","AtkTrailCmp",void 0);var F=n.ccclass,w=n.property;t("AtkTrailCmp",(p=F("AtkTrailCmp"),m=w(o),f=w(h),d=w(h),P=w(h),p((y=i((g=function(t){function i(){for(var i,s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return i=t.call.apply(t,[this].concat(r))||this,e(i,"msr",y,a(i)),e(i,"initParam",_,a(i)),e(i,"minParam",x,a(i)),e(i,"maxParam",v,a(i)),i.cur=l(),i.spd=.1,i.isFinish=!1,i._handle=0,i._pass=null,i}s(i,t);var r=i.prototype;return r.setData=function(t){this.node.setPosition(t.p),this.node.setScale(t.s),this.node.setRotation(t.r),this.spd=t.spd||.1,this.show()},r.reset=function(){this.setMat(this.maxParam)},r.show=function(){this.cur.set(this.minParam),this.setMat(this.cur),this.isFinish=!1},r.hide=function(){this.isFinish=!0,this.setMat(this.maxParam)},r.update=function(t){this.isFinish||(this.cur.equals(this.maxParam,.01)&&(this.isFinish=!0,this.cur.set(this.maxParam),c.put(this.node)),this.cur.lerp(this.maxParam,this.spd),this.setMat(this.cur))},r.setMat=function(t){if(!this._pass){var i=this.msr.getMaterialInstance(0);this._pass=i.passes[0],this._handle=this._pass.getHandle("tilingOffset")}this._pass.setUniform(this._handle,t)},i}(u)).prototype,"msr",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=i(g.prototype,"initParam",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return l(.5,1,0,0)}}),x=i(g.prototype,"minParam",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return l(.5,1,-.52,0)}}),v=i(g.prototype,"maxParam",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return l(.5,1,.49,0)}}),b=g))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/AutoPlayEffect.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BasicComponet.ts","./GlobalPool.ts"],(function(t){var e,n,i,o,r,c,a,u,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,c=t._decorator,a=t.ParticleSystem},function(t){u=t.BasicComponet},function(t){l=t.default}],execute:function(){var s,f,p;r._RF.push({},"2b97dYOu/JAiaAtm3cmACXO","AutoPlayEffect",void 0);var h=c.ccclass,d=c.property;t("AutoPlayEffect",h("AutoPlayEffect")((p=e((f=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r))||this,i(e,"hideTime",p,o(e)),e.curt=0,e}n(e,t);var r=e.prototype;return r.onEnable=function(){this.node.getComponentsInChildren(a).forEach((function(t){t.enabled&&t.play()})),this.curt=0},r.update=function(t){this.curt+=t,this.curt>this.hideTime&&l.put(this.node)},r.onDisable=function(){this.node.getComponentsInChildren(a).forEach((function(t){t.enabled&&t.stop()}))},e}(u)).prototype,"hideTime",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),s=f))||s);r._RF.pop()}}}));

System.register("chunks:///_virtual/Effect",["./AutoPlayEffect.ts","./AtkTrailCmp.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/Effect', 'chunks:///_virtual/Effect'); 
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