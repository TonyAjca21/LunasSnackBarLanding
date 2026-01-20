import{L as sl,_ as Sa,C as Va,r as yn,a as Ca,F as ba,b as zt,g as Ns,c as ka,d as Da,i as yr,p as Na,u as Oa,e as il,f as xa,h as Pt,j as ol,k as al,S as Ma,l as ul,m as cl,n as ll}from"./index-36fcbc82.B0c2nU56.js";var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ee,La;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function _(){}_.prototype=p.prototype,T.F=p.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(I,y,w){for(var g=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)g[wt-2]=arguments[wt];return p.prototype[y].apply(I,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,p,_){_||(_=0);const I=Array(16);if(typeof p=="string")for(var y=0;y<16;++y)I[y]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(y=0;y<16;++y)I[y]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=T.g[0],_=T.g[1],y=T.g[2];let w=T.g[3],g;g=p+(w^_&(y^w))+I[0]+3614090360&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+I[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+I[2]+606105819&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+I[3]+3250441966&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+I[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+I[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+I[6]+2821735955&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+I[7]+4249261313&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+I[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+I[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+I[10]+4294925233&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+I[11]+2304563134&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+I[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+I[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+I[14]+2792965006&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+I[15]+1236535329&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(y^w&(_^y))+I[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+I[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+I[11]+643717713&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+I[0]+3921069994&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+I[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+I[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+I[15]+3634488961&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+I[4]+3889429448&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+I[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+I[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+I[3]+4107603335&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+I[8]+1163531501&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+I[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+I[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+I[7]+1735328473&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+I[12]+2368359562&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(_^y^w)+I[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+I[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+I[11]+1839030562&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+I[14]+4259657740&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+I[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+I[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+I[7]+4139469664&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+I[10]+3200236656&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+I[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+I[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+I[3]+3572445317&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+I[6]+76029189&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+I[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+I[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+I[15]+530742520&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+I[2]+3299628645&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(y^(_|~w))+I[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+I[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+I[14]+2878612391&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+I[5]+4237533241&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+I[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+I[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+I[10]+4293915773&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+I[1]+2240044497&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+I[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+I[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+I[6]+2734768916&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+I[13]+1309151649&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+I[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+I[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+I[2]+718787259&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+y&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.v=function(T,p){p===void 0&&(p=T.length);const _=p-this.blockSize,I=this.C;let y=this.h,w=0;for(;w<p;){if(y==0)for(;w<=_;)i(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<p;)if(I[y++]=T.charCodeAt(w++),y==this.blockSize){i(this,I),y=0;break}}else for(;w<p;)if(I[y++]=T[w++],y==this.blockSize){i(this,I),y=0;break}}this.h=y,this.o+=p},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;p=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=p&255,p/=256;for(this.v(T),T=Array(16),p=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)T[p++]=this.g[_]>>>I&255;return T};function o(T,p){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=p(T)}function a(T,p){this.h=p;const _=[];let I=!0;for(let y=T.length-1;y>=0;y--){const w=T[y]|0;I&&w==p||(_[y]=w,I=!1)}this.g=_}var l={};function h(T){return-128<=T&&T<128?o(T,function(p){return new a([p|0],p<0?-1:0)}):new a([T|0],T<0?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return E;if(T<0)return C(f(-T));const p=[];let _=1;for(let I=0;T>=_;I++)p[I]=T/_|0,_*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return C(m(T.substring(1),p));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(p,8));let I=E;for(let w=0;w<T.length;w+=8){var y=Math.min(8,T.length-w);const g=parseInt(T.substring(w,w+y),p);y<8?(y=f(Math.pow(p,y)),I=I.j(y).add(f(g))):(I=I.j(_),I=I.add(f(g)))}return I}var E=h(0),R=h(1),V=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-C(this).m();let T=0,p=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);T+=(I>=0?I:4294967296+I)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(O(this))return"-"+C(this).toString(T);const p=f(Math.pow(T,6));var _=this;let I="";for(;;){const y=Q(_,p).g;_=z(_,y.j(p));let w=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=y,D(_))return w+I;for(;w.length<6;)w="0"+w;I=w+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(let p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=z(this,T),O(T)?-1:D(T)?0:1};function C(T){const p=T.g.length,_=[];for(let I=0;I<p;I++)_[I]=~T.g[I];return new a(_,~T.h).add(R)}n.abs=function(){return O(this)?C(this):this},n.add=function(T){const p=Math.max(this.g.length,T.g.length),_=[];let I=0;for(let y=0;y<=p;y++){let w=I+(this.i(y)&65535)+(T.i(y)&65535),g=(w>>>16)+(this.i(y)>>>16)+(T.i(y)>>>16);I=g>>>16,w&=65535,g&=65535,_[y]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(T,p){return T.add(C(p))}n.j=function(T){if(D(this)||D(T))return E;if(O(this))return O(T)?C(this).j(C(T)):C(C(this).j(T));if(O(T))return C(this.j(C(T)));if(this.l(V)<0&&T.l(V)<0)return f(this.m()*T.m());const p=this.g.length+T.g.length,_=[];for(var I=0;I<2*p;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let y=0;y<T.g.length;y++){const w=this.i(I)>>>16,g=this.i(I)&65535,wt=T.i(y)>>>16,fe=T.i(y)&65535;_[2*I+2*y]+=g*fe,$(_,2*I+2*y),_[2*I+2*y+1]+=w*fe,$(_,2*I+2*y+1),_[2*I+2*y+1]+=g*wt,$(_,2*I+2*y+1),_[2*I+2*y+2]+=w*wt,$(_,2*I+2*y+2)}for(T=0;T<p;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=p;T<2*p;T++)_[T]=0;return new a(_,0)};function $(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function q(T,p){this.g=T,this.h=p}function Q(T,p){if(D(p))throw Error("division by zero");if(D(T))return new q(E,E);if(O(T))return p=Q(C(T),p),new q(C(p.g),C(p.h));if(O(p))return p=Q(T,C(p)),new q(C(p.g),p.h);if(T.g.length>30){if(O(T)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,I=p;I.l(T)<=0;)_=at(_),I=at(I);var y=Z(_,1),w=Z(I,1);for(I=Z(I,2),_=Z(_,2);!D(I);){var g=w.add(I);g.l(T)<=0&&(y=y.add(_),w=g),I=Z(I,1),_=Z(_,1)}return p=z(T,y.j(p)),new q(y,p)}for(y=E;T.l(p)>=0;){for(_=Math.max(1,Math.floor(T.m()/p.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),w=f(_),g=w.j(p);O(g)||g.l(T)>0;)_-=I,w=f(_),g=w.j(p);D(w)&&(w=R),y=y.add(w),T=z(T,g)}return new q(y,T)}n.B=function(T){return Q(this,T).h},n.and=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)&T.i(I);return new a(_,this.h&T.h)},n.or=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)|T.i(I);return new a(_,this.h|T.h)},n.xor=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)^T.i(I);return new a(_,this.h^T.h)};function at(T){const p=T.g.length+1,_=[];for(let I=0;I<p;I++)_[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(_,T.h)}function Z(T,p){const _=p>>5;p%=32;const I=T.g.length-_,y=[];for(let w=0;w<I;w++)y[w]=p>0?T.i(w+_)>>>p|T.i(w+_+1)<<32-p:T.i(w+_);return new a(y,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,La=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,ee=a}).apply(typeof Ro<"u"?Ro:typeof self<"u"?self:typeof window<"u"?window:{});var Kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fa,cn,Ua,Zn,ps,qa,Ba,ja;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kn=="object"&&Kn];for(var u=0;u<s.length;++u){var c=s[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,u){if(u)t:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var A=s[d];if(!(A in c))break t;c=c[A]}s=s[s.length-1],d=c[s],u=u(d),u!=d&&u!=null&&t(c,s,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(u){var c=[],d;for(d in u)Object.prototype.hasOwnProperty.call(u,d)&&c.push([d,u[d]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(s){var u=typeof s;return u=="object"&&s!=null||u=="function"}function h(s,u,c){return s.call.apply(s.bind,arguments)}function f(s,u,c){return f=h,f.apply(null,arguments)}function m(s,u){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function E(s,u){function c(){}c.prototype=u.prototype,s.Z=u.prototype,s.prototype=new c,s.prototype.constructor=s,s.Ob=function(d,A,v){for(var b=Array(arguments.length-2),U=2;U<arguments.length;U++)b[U-2]=arguments[U];return u.prototype[A].apply(d,b)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function V(s){const u=s.length;if(u>0){const c=Array(u);for(let d=0;d<u;d++)c[d]=s[d];return c}return[]}function D(s,u){for(let d=1;d<arguments.length;d++){const A=arguments[d];var c=typeof A;if(c=c!="object"?c:A?Array.isArray(A)?"array":c:"null",c=="array"||c=="object"&&typeof A.length=="number"){c=s.length||0;const v=A.length||0;s.length=c+v;for(let b=0;b<v;b++)s[c+b]=A[b]}else s.push(A)}}class O{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function C(s){a.setTimeout(()=>{throw s},0)}function z(){var s=T;let u=null;return s.g&&(u=s.g,s.g=s.g.next,s.g||(s.h=null),u.next=null),u}class ${constructor(){this.h=this.g=null}add(u,c){const d=q.get();d.set(u,c),this.h?this.h.next=d:this.g=d,this.h=d}}var q=new O(()=>new Q,s=>s.reset());class Q{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let at,Z=!1,T=new $,p=()=>{const s=Promise.resolve(void 0);at=()=>{s.then(_)}};function _(){for(var s;s=z();){try{s.h.call(s.g)}catch(c){C(c)}var u=q;u.j(s),u.h<100&&(u.h++,s.next=u.g,u.g=s)}Z=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(s,u){this.type=s,this.g=this.target=u,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,u=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};a.addEventListener("test",c,u),a.removeEventListener("test",c,u)}catch{}return s})();function g(s){return/^[\s\xa0]*$/.test(s)}function wt(s,u){y.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,u)}E(wt,y),wt.prototype.init=function(s,u){const c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=u,u=s.relatedTarget,u||(c=="mouseover"?u=s.fromElement:c=="mouseout"&&(u=s.toElement)),this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&wt.Z.h.call(this)},wt.prototype.h=function(){wt.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var fe="closure_listenable_"+(Math.random()*1e6|0),Pc=0;function Sc(s,u,c,d,A){this.listener=s,this.proxy=null,this.src=u,this.type=c,this.capture=!!d,this.ha=A,this.key=++Pc,this.da=this.fa=!1}function kn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Dn(s,u,c){for(const d in s)u.call(c,s[d],d,s)}function Vc(s,u){for(const c in s)u.call(void 0,s[c],c,s)}function wi(s){const u={};for(const c in s)u[c]=s[c];return u}const vi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ri(s,u){let c,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(c in d)s[c]=d[c];for(let v=0;v<vi.length;v++)c=vi[v],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function Nn(s){this.src=s,this.g={},this.h=0}Nn.prototype.add=function(s,u,c,d,A){const v=s.toString();s=this.g[v],s||(s=this.g[v]=[],this.h++);const b=Ur(s,u,d,A);return b>-1?(u=s[b],c||(u.fa=!1)):(u=new Sc(u,this.src,v,!!d,A),u.fa=c,s.push(u)),u};function Fr(s,u){const c=u.type;if(c in s.g){var d=s.g[c],A=Array.prototype.indexOf.call(d,u,void 0),v;(v=A>=0)&&Array.prototype.splice.call(d,A,1),v&&(kn(u),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Ur(s,u,c,d){for(let A=0;A<s.length;++A){const v=s[A];if(!v.da&&v.listener==u&&v.capture==!!c&&v.ha==d)return A}return-1}var qr="closure_lm_"+(Math.random()*1e6|0),Br={};function Pi(s,u,c,d,A){if(Array.isArray(u)){for(let v=0;v<u.length;v++)Pi(s,u[v],c,d,A);return null}return c=Ci(c),s&&s[fe]?s.J(u,c,l(d)?!!d.capture:!1,A):Cc(s,u,c,!1,d,A)}function Cc(s,u,c,d,A,v){if(!u)throw Error("Invalid event type");const b=l(A)?!!A.capture:!!A;let U=zr(s);if(U||(s[qr]=U=new Nn(s)),c=U.add(u,c,d,b,v),c.proxy)return c;if(d=bc(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)w||(A=b),A===void 0&&(A=!1),s.addEventListener(u.toString(),d,A);else if(s.attachEvent)s.attachEvent(Vi(u.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function bc(){function s(c){return u.call(s.src,s.listener,c)}const u=kc;return s}function Si(s,u,c,d,A){if(Array.isArray(u))for(var v=0;v<u.length;v++)Si(s,u[v],c,d,A);else d=l(d)?!!d.capture:!!d,c=Ci(c),s&&s[fe]?(s=s.i,v=String(u).toString(),v in s.g&&(u=s.g[v],c=Ur(u,c,d,A),c>-1&&(kn(u[c]),Array.prototype.splice.call(u,c,1),u.length==0&&(delete s.g[v],s.h--)))):s&&(s=zr(s))&&(u=s.g[u.toString()],s=-1,u&&(s=Ur(u,c,d,A)),(c=s>-1?u[s]:null)&&jr(c))}function jr(s){if(typeof s!="number"&&s&&!s.da){var u=s.src;if(u&&u[fe])Fr(u.i,s);else{var c=s.type,d=s.proxy;u.removeEventListener?u.removeEventListener(c,d,s.capture):u.detachEvent?u.detachEvent(Vi(c),d):u.addListener&&u.removeListener&&u.removeListener(d),(c=zr(u))?(Fr(c,s),c.h==0&&(c.src=null,u[qr]=null)):kn(s)}}}function Vi(s){return s in Br?Br[s]:Br[s]="on"+s}function kc(s,u){if(s.da)s=!0;else{u=new wt(u,this);const c=s.listener,d=s.ha||s.src;s.fa&&jr(s),s=c.call(d,u)}return s}function zr(s){return s=s[qr],s instanceof Nn?s:null}var $r="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ci(s){return typeof s=="function"?s:(s[$r]||(s[$r]=function(u){return s.handleEvent(u)}),s[$r])}function gt(){I.call(this),this.i=new Nn(this),this.M=this,this.G=null}E(gt,I),gt.prototype[fe]=!0,gt.prototype.removeEventListener=function(s,u,c,d){Si(this,s,u,c,d)};function Et(s,u){var c,d=s.G;if(d)for(c=[];d;d=d.G)c.push(d);if(s=s.M,d=u.type||u,typeof u=="string")u=new y(u,s);else if(u instanceof y)u.target=u.target||s;else{var A=u;u=new y(d,s),Ri(u,A)}A=!0;let v,b;if(c)for(b=c.length-1;b>=0;b--)v=u.g=c[b],A=On(v,d,!0,u)&&A;if(v=u.g=s,A=On(v,d,!0,u)&&A,A=On(v,d,!1,u)&&A,c)for(b=0;b<c.length;b++)v=u.g=c[b],A=On(v,d,!1,u)&&A}gt.prototype.N=function(){if(gt.Z.N.call(this),this.i){var s=this.i;for(const u in s.g){const c=s.g[u];for(let d=0;d<c.length;d++)kn(c[d]);delete s.g[u],s.h--}}this.G=null},gt.prototype.J=function(s,u,c,d){return this.i.add(String(s),u,!1,c,d)},gt.prototype.K=function(s,u,c,d){return this.i.add(String(s),u,!0,c,d)};function On(s,u,c,d){if(u=s.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let v=0;v<u.length;++v){const b=u[v];if(b&&!b.da&&b.capture==c){const U=b.listener,ut=b.ha||b.src;b.fa&&Fr(s.i,b),A=U.call(ut,d)!==!1&&A}}return A&&!d.defaultPrevented}function Dc(s,u){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=f(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(s,u||0)}function bi(s){s.g=Dc(()=>{s.g=null,s.i&&(s.i=!1,bi(s))},s.l);const u=s.h;s.h=null,s.m.apply(null,u)}class Nc extends I{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:bi(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(s){I.call(this),this.h=s,this.g={}}E(Ge,I);var ki=[];function Di(s){Dn(s.g,function(u,c){this.g.hasOwnProperty(c)&&jr(u)},s),s.g={}}Ge.prototype.N=function(){Ge.Z.N.call(this),Di(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gr=a.JSON.stringify,Oc=a.JSON.parse,xc=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function Ni(){}function Oi(){}var Ke={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Kr(){y.call(this,"d")}E(Kr,y);function Qr(){y.call(this,"c")}E(Qr,y);var de={},xi=null;function xn(){return xi=xi||new gt}de.Ia="serverreachability";function Mi(s){y.call(this,de.Ia,s)}E(Mi,y);function Qe(s){const u=xn();Et(u,new Mi(u))}de.STAT_EVENT="statevent";function Li(s,u){y.call(this,de.STAT_EVENT,s),this.stat=u}E(Li,y);function It(s){const u=xn();Et(u,new Li(u,s))}de.Ja="timingevent";function Fi(s,u){y.call(this,de.Ja,s),this.size=u}E(Fi,y);function He(s,u){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},u)}function We(){this.g=!0}We.prototype.ua=function(){this.g=!1};function Mc(s,u,c,d,A,v){s.info(function(){if(s.g)if(v){var b="",U=v.split("&");for(let H=0;H<U.length;H++){var ut=U[H].split("=");if(ut.length>1){const ht=ut[0];ut=ut[1];const Ot=ht.split("_");b=Ot.length>=2&&Ot[1]=="type"?b+(ht+"="+ut+"&"):b+(ht+"=redacted&")}}}else b=null;else b=v;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+u+`
`+c+`
`+b})}function Lc(s,u,c,d,A,v,b){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+u+`
`+c+`
`+v+" "+b})}function Se(s,u,c,d){s.info(function(){return"XMLHTTP TEXT ("+u+"): "+Uc(s,c)+(d?" "+d:"")})}function Fc(s,u){s.info(function(){return"TIMEOUT: "+u})}We.prototype.info=function(){};function Uc(s,u){if(!s.g)return u;if(!u)return null;try{const v=JSON.parse(u);if(v){for(s=0;s<v.length;s++)if(Array.isArray(v[s])){var c=v[s];if(!(c.length<2)){var d=c[1];if(Array.isArray(d)&&!(d.length<1)){var A=d[0];if(A!="noop"&&A!="stop"&&A!="close")for(let b=1;b<d.length;b++)d[b]=""}}}}return Gr(v)}catch{return u}}var Mn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ui={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qi;function Hr(){}E(Hr,Ni),Hr.prototype.g=function(){return new XMLHttpRequest},qi=new Hr;function Xe(s){return encodeURIComponent(String(s))}function qc(s){var u=1;s=s.split(":");const c=[];for(;u>0&&s.length;)c.push(s.shift()),u--;return s.length&&c.push(s.join(":")),c}function Qt(s,u,c,d){this.j=s,this.i=u,this.l=c,this.S=d||1,this.V=new Ge(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Bi}function Bi(){this.i=null,this.g="",this.h=!1}var ji={},Wr={};function Xr(s,u,c){s.M=1,s.A=Fn(Nt(u)),s.u=c,s.R=!0,zi(s,null)}function zi(s,u){s.F=Date.now(),Ln(s),s.B=Nt(s.A);var c=s.B,d=s.S;Array.isArray(d)||(d=[String(d)]),no(c.i,"t",d),s.C=0,c=s.j.L,s.h=new Bi,s.g=Io(s.j,c?u:null,!s.u),s.P>0&&(s.O=new Nc(f(s.Y,s,s.g),s.P)),u=s.V,c=s.g,d=s.ba;var A="readystatechange";Array.isArray(A)||(A&&(ki[0]=A.toString()),A=ki);for(let v=0;v<A.length;v++){const b=Pi(c,A[v],d||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=s.J?wi(s.J):{},s.u?(s.v||(s.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,u)):(s.v="GET",s.g.ea(s.B,s.v,null,u)),Qe(),Mc(s.i,s.v,s.B,s.l,s.S,s.u)}Qt.prototype.ba=function(s){s=s.target;const u=this.O;u&&Xt(s)==3?u.j():this.Y(s)},Qt.prototype.Y=function(s){try{if(s==this.g)t:{const U=Xt(this.g),ut=this.g.ya(),H=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||co(this.g)))){this.K||U!=4||ut==7||(ut==8||H<=0?Qe(3):Qe(2)),Yr(this);var u=this.g.ca();this.X=u;var c=Bc(this);if(this.o=u==200,Lc(this.i,this.v,this.B,this.l,this.S,U,u),this.o){if(this.U&&!this.L){e:{if(this.g){var d,A=this.g;if((d=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(d)){var v=d;break e}}v=null}if(s=v)Se(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Jr(this,s);else{this.o=!1,this.m=3,It(12),me(this),Ye(this);break t}}if(this.R){s=!0;let ht;for(;!this.K&&this.C<c.length;)if(ht=jc(this,c),ht==Wr){U==4&&(this.m=4,It(14),s=!1),Se(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==ji){this.m=4,It(15),Se(this.i,this.l,c,"[Invalid Chunk]"),s=!1;break}else Se(this.i,this.l,ht,null),Jr(this,ht);if($i(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||c.length!=0||this.h.h||(this.m=1,It(16),s=!1),this.o=this.o&&s,!s)Se(this.i,this.l,c,"[Invalid Chunked Response]"),me(this),Ye(this);else if(c.length>0&&!this.W){this.W=!0;var b=this.j;b.g==this&&b.aa&&!b.P&&(b.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),os(b),b.P=!0,It(11))}}else Se(this.i,this.l,c,null),Jr(this,c);U==4&&me(this),this.o&&!this.K&&(U==4?_o(this.j,this):(this.o=!1,Ln(this)))}else nl(this.g),u==400&&c.indexOf("Unknown SID")>0?(this.m=3,It(12)):(this.m=0,It(13)),me(this),Ye(this)}}}catch{}finally{}};function Bc(s){if(!$i(s))return s.g.la();const u=co(s.g);if(u==="")return"";let c="";const d=u.length,A=Xt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return me(s),Ye(s),"";s.h.i=new a.TextDecoder}for(let v=0;v<d;v++)s.h.h=!0,c+=s.h.i.decode(u[v],{stream:!(A&&v==d-1)});return u.length=0,s.h.g+=c,s.C=0,s.h.g}function $i(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function jc(s,u){var c=s.C,d=u.indexOf(`
`,c);return d==-1?Wr:(c=Number(u.substring(c,d)),isNaN(c)?ji:(d+=1,d+c>u.length?Wr:(u=u.slice(d,d+c),s.C=d+c,u)))}Qt.prototype.cancel=function(){this.K=!0,me(this)};function Ln(s){s.T=Date.now()+s.H,Gi(s,s.H)}function Gi(s,u){if(s.D!=null)throw Error("WatchDog timer not null");s.D=He(f(s.aa,s),u)}function Yr(s){s.D&&(a.clearTimeout(s.D),s.D=null)}Qt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(Fc(this.i,this.B),this.M!=2&&(Qe(),It(17)),me(this),this.m=2,Ye(this)):Gi(this,this.T-s)};function Ye(s){s.j.I==0||s.K||_o(s.j,s)}function me(s){Yr(s);var u=s.O;u&&typeof u.dispose=="function"&&u.dispose(),s.O=null,Di(s.V),s.g&&(u=s.g,s.g=null,u.abort(),u.dispose())}function Jr(s,u){try{var c=s.j;if(c.I!=0&&(c.g==s||Zr(c.h,s))){if(!s.L&&Zr(c.h,s)&&c.I==3){try{var d=c.Ba.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<s.F)zn(c),Bn(c);else break t;is(c),It(18)}}else c.xa=A[1],0<c.xa-c.K&&A[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=He(f(c.Va,c),6e3));Hi(c.h)<=1&&c.ta&&(c.ta=void 0)}else ge(c,11)}else if((s.L||c.g==s)&&zn(c),!g(u))for(A=c.Ba.g.parse(u),u=0;u<A.length;u++){let H=A[u];const ht=H[0];if(!(ht<=c.K))if(c.K=ht,H=H[1],c.I==2)if(H[0]=="c"){c.M=H[1],c.ba=H[2];const Ot=H[3];Ot!=null&&(c.ka=Ot,c.j.info("VER="+c.ka));const _e=H[4];_e!=null&&(c.za=_e,c.j.info("SVER="+c.za));const Yt=H[5];Yt!=null&&typeof Yt=="number"&&Yt>0&&(d=1.5*Yt,c.O=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Jt=s.g;if(Jt){const Gn=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gn){var v=d.h;v.g||Gn.indexOf("spdy")==-1&&Gn.indexOf("quic")==-1&&Gn.indexOf("h2")==-1||(v.j=v.l,v.g=new Set,v.h&&(ts(v,v.h),v.h=null))}if(d.G){const as=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;as&&(d.wa=as,W(d.J,d.G,as))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-s.F,c.j.info("Handshake RTT: "+c.T+"ms")),d=c;var b=s;if(d.na=Eo(d,d.L?d.ba:null,d.W),b.L){Wi(d.h,b);var U=b,ut=d.O;ut&&(U.H=ut),U.D&&(Yr(U),Ln(U)),d.g=b}else po(d);c.i.length>0&&jn(c)}else H[0]!="stop"&&H[0]!="close"||ge(c,7);else c.I==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?ge(c,7):ss(c):H[0]!="noop"&&c.l&&c.l.qa(H),c.A=0)}}Qe(4)}catch{}}var zc=class{constructor(s,u){this.g=s,this.map=u}};function Ki(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Qi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Hi(s){return s.h?1:s.g?s.g.size:0}function Zr(s,u){return s.h?s.h==u:s.g?s.g.has(u):!1}function ts(s,u){s.g?s.g.add(u):s.h=u}function Wi(s,u){s.h&&s.h==u?s.h=null:s.g&&s.g.has(u)&&s.g.delete(u)}Ki.prototype.cancel=function(){if(this.i=Xi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Xi(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let u=s.i;for(const c of s.g.values())u=u.concat(c.G);return u}return V(s.i)}var Yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $c(s,u){if(s){s=s.split("&");for(let c=0;c<s.length;c++){const d=s[c].indexOf("=");let A,v=null;d>=0?(A=s[c].substring(0,d),v=s[c].substring(d+1)):A=s[c],u(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Ht(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;s instanceof Ht?(this.l=s.l,Je(this,s.j),this.o=s.o,this.g=s.g,Ze(this,s.u),this.h=s.h,es(this,ro(s.i)),this.m=s.m):s&&(u=String(s).match(Yi))?(this.l=!1,Je(this,u[1]||"",!0),this.o=tn(u[2]||""),this.g=tn(u[3]||"",!0),Ze(this,u[4]),this.h=tn(u[5]||"",!0),es(this,u[6]||"",!0),this.m=tn(u[7]||"")):(this.l=!1,this.i=new nn(null,this.l))}Ht.prototype.toString=function(){const s=[];var u=this.j;u&&s.push(en(u,Ji,!0),":");var c=this.g;return(c||u=="file")&&(s.push("//"),(u=this.o)&&s.push(en(u,Ji,!0),"@"),s.push(Xe(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&s.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(en(c,c.charAt(0)=="/"?Qc:Kc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",en(c,Wc)),s.join("")},Ht.prototype.resolve=function(s){const u=Nt(this);let c=!!s.j;c?Je(u,s.j):c=!!s.o,c?u.o=s.o:c=!!s.g,c?u.g=s.g:c=s.u!=null;var d=s.h;if(c)Ze(u,s.u);else if(c=!!s.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var A=u.h.lastIndexOf("/");A!=-1&&(d=u.h.slice(0,A+1)+d)}if(A=d,A==".."||A==".")d="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){d=A.lastIndexOf("/",0)==0,A=A.split("/");const v=[];for(let b=0;b<A.length;){const U=A[b++];U=="."?d&&b==A.length&&v.push(""):U==".."?((v.length>1||v.length==1&&v[0]!="")&&v.pop(),d&&b==A.length&&v.push("")):(v.push(U),d=!0)}d=v.join("/")}else d=A}return c?u.h=d:c=s.i.toString()!=="",c?es(u,ro(s.i)):c=!!s.m,c&&(u.m=s.m),u};function Nt(s){return new Ht(s)}function Je(s,u,c){s.j=c?tn(u,!0):u,s.j&&(s.j=s.j.replace(/:$/,""))}function Ze(s,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);s.u=u}else s.u=null}function es(s,u,c){u instanceof nn?(s.i=u,Xc(s.i,s.l)):(c||(u=en(u,Hc)),s.i=new nn(u,s.l))}function W(s,u,c){s.i.set(u,c)}function Fn(s){return W(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function tn(s,u){return s?u?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function en(s,u,c){return typeof s=="string"?(s=encodeURI(s).replace(u,Gc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Gc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ji=/[#\/\?@]/g,Kc=/[#\?:]/g,Qc=/[#\?]/g,Hc=/[#\?@]/g,Wc=/#/g;function nn(s,u){this.h=this.g=null,this.i=s||null,this.j=!!u}function pe(s){s.g||(s.g=new Map,s.h=0,s.i&&$c(s.i,function(u,c){s.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=nn.prototype,n.add=function(s,u){pe(this),this.i=null,s=Ve(this,s);let c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(u),this.h+=1,this};function Zi(s,u){pe(s),u=Ve(s,u),s.g.has(u)&&(s.i=null,s.h-=s.g.get(u).length,s.g.delete(u))}function to(s,u){return pe(s),u=Ve(s,u),s.g.has(u)}n.forEach=function(s,u){pe(this),this.g.forEach(function(c,d){c.forEach(function(A){s.call(u,A,d,this)},this)},this)};function eo(s,u){pe(s);let c=[];if(typeof u=="string")to(s,u)&&(c=c.concat(s.g.get(Ve(s,u))));else for(s=Array.from(s.g.values()),u=0;u<s.length;u++)c=c.concat(s[u]);return c}n.set=function(s,u){return pe(this),this.i=null,s=Ve(this,s),to(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[u]),this.h+=1,this},n.get=function(s,u){return s?(s=eo(this,s),s.length>0?String(s[0]):u):u};function no(s,u,c){Zi(s,u),c.length>0&&(s.i=null,s.g.set(Ve(s,u),V(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],u=Array.from(this.g.keys());for(let d=0;d<u.length;d++){var c=u[d];const A=Xe(c);c=eo(this,c);for(let v=0;v<c.length;v++){let b=A;c[v]!==""&&(b+="="+Xe(c[v])),s.push(b)}}return this.i=s.join("&")};function ro(s){const u=new nn;return u.i=s.i,s.g&&(u.g=new Map(s.g),u.h=s.h),u}function Ve(s,u){return u=String(u),s.j&&(u=u.toLowerCase()),u}function Xc(s,u){u&&!s.j&&(pe(s),s.i=null,s.g.forEach(function(c,d){const A=d.toLowerCase();d!=A&&(Zi(this,d),no(this,A,c))},s)),s.j=u}function Yc(s,u){const c=new We;if(a.Image){const d=new Image;d.onload=m(Wt,c,"TestLoadImage: loaded",!0,u,d),d.onerror=m(Wt,c,"TestLoadImage: error",!1,u,d),d.onabort=m(Wt,c,"TestLoadImage: abort",!1,u,d),d.ontimeout=m(Wt,c,"TestLoadImage: timeout",!1,u,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else u(!1)}function Jc(s,u){const c=new We,d=new AbortController,A=setTimeout(()=>{d.abort(),Wt(c,"TestPingServer: timeout",!1,u)},1e4);fetch(s,{signal:d.signal}).then(v=>{clearTimeout(A),v.ok?Wt(c,"TestPingServer: ok",!0,u):Wt(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Wt(c,"TestPingServer: error",!1,u)})}function Wt(s,u,c,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(c)}catch{}}function Zc(){this.g=new xc}function ns(s){this.i=s.Sb||null,this.h=s.ab||!1}E(ns,Ni),ns.prototype.g=function(){return new Un(this.i,this.h)};function Un(s,u){gt.call(this),this.H=s,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(Un,gt),n=Un.prototype,n.open=function(s,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=u,this.readyState=1,sn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(u.body=s),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,rn(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,sn(this)),this.g&&(this.readyState=3,sn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;so(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function so(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var u=s.value?s.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!s.done}))&&(this.response=this.responseText+=u)}s.done?rn(this):sn(this),this.readyState==3&&so(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,rn(this))},n.Na=function(s){this.g&&(this.response=s,rn(this))},n.ga=function(){this.g&&rn(this)};function rn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,sn(s)}n.setRequestHeader=function(s,u){this.A.append(s,u)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=u.next();return s.join(`\r
`)};function sn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function io(s){let u="";return Dn(s,function(c,d){u+=d,u+=":",u+=c,u+=`\r
`}),u}function rs(s,u,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=io(c),typeof s=="string"?c!=null&&Xe(c):W(s,u,c))}function tt(s){gt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(tt,gt);var tl=/^https?$/i,el=["POST","PUT"];n=tt.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,u,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);u=u?u.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qi.g(),this.g.onreadystatechange=R(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(s),!0),this.B=!1}catch(v){oo(this,v);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)c.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const v of d.keys())c.set(v,d.get(v));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(v=>v.toLowerCase()=="content-type"),A=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(el,u,void 0)>=0)||d||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[v,b]of c)this.g.setRequestHeader(v,b);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(v){oo(this,v)}};function oo(s,u){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=u,s.o=5,ao(s),qn(s)}function ao(s){s.A||(s.A=!0,Et(s,"complete"),Et(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,Et(this,"complete"),Et(this,"abort"),qn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qn(this,!0)),tt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?uo(this):this.Xa())},n.Xa=function(){uo(this)};function uo(s){if(s.h&&typeof o<"u"){if(s.v&&Xt(s)==4)setTimeout(s.Ca.bind(s),0);else if(Et(s,"readystatechange"),Xt(s)==4){s.h=!1;try{const v=s.ca();t:switch(v){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var d;if(d=v===0){let b=String(s.D).match(Yi)[1]||null;!b&&a.self&&a.self.location&&(b=a.self.location.protocol.slice(0,-1)),d=!tl.test(b?b.toLowerCase():"")}c=d}if(c)Et(s,"complete"),Et(s,"success");else{s.o=6;try{var A=Xt(s)>2?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.ca()+"]",ao(s)}}finally{qn(s)}}}}function qn(s,u){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const c=s.g;s.g=null,u||Et(s,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Xt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Xt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var u=this.g.responseText;return s&&u.indexOf(s)==0&&(u=u.substring(s.length)),Oc(u)}};function co(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function nl(s){const u={};s=(s.g&&Xt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(g(s[d]))continue;var c=qc(s[d]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const v=u[A]||[];u[A]=v,v.push(c)}Vc(u,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function on(s,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||u}function lo(s){this.za=0,this.i=[],this.j=new We,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=on("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=on("baseRetryDelayMs",5e3,s),this.Za=on("retryDelaySeedMs",1e4,s),this.Ta=on("forwardChannelMaxRetries",2,s),this.va=on("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Ki(s&&s.concurrentRequestLimit),this.Ba=new Zc,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=lo.prototype,n.ka=8,n.I=1,n.connect=function(s,u,c,d){It(0),this.W=s,this.H=u||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.J=Eo(this,null,this.W),jn(this)};function ss(s){if(ho(s),s.I==3){var u=s.V++,c=Nt(s.J);if(W(c,"SID",s.M),W(c,"RID",u),W(c,"TYPE","terminate"),an(s,c),u=new Qt(s,s.j,u),u.M=2,u.A=Fn(Nt(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!c&&a.Image&&(new Image().src=u.A,c=!0),c||(u.g=Io(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ln(u)}To(s)}function Bn(s){s.g&&(os(s),s.g.cancel(),s.g=null)}function ho(s){Bn(s),s.v&&(a.clearTimeout(s.v),s.v=null),zn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function jn(s){if(!Qi(s.h)&&!s.m){s.m=!0;var u=s.Ea;at||p(),Z||(at(),Z=!0),T.add(u,s),s.D=0}}function rl(s,u){return Hi(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=u.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=He(f(s.Ea,s,u),yo(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const A=new Qt(this,this.j,s);let v=this.o;if(this.U&&(v?(v=wi(v),Ri(v,this.U)):v=this.U),this.u!==null||this.R||(A.J=v,v=null),this.S)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,u>4096){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=mo(this,A,u),c=Nt(this.J),W(c,"RID",s),W(c,"CVER",22),this.G&&W(c,"X-HTTP-Session-Id",this.G),an(this,c),v&&(this.R?u="headers="+Xe(io(v))+"&"+u:this.u&&rs(c,this.u,v)),ts(this.h,A),this.Ra&&W(c,"TYPE","init"),this.S?(W(c,"$req",u),W(c,"SID","null"),A.U=!0,Xr(A,c,null)):Xr(A,c,u),this.I=2}}else this.I==3&&(s?fo(this,s):this.i.length==0||Qi(this.h)||fo(this))};function fo(s,u){var c;u?c=u.l:c=s.V++;const d=Nt(s.J);W(d,"SID",s.M),W(d,"RID",c),W(d,"AID",s.K),an(s,d),s.u&&s.o&&rs(d,s.u,s.o),c=new Qt(s,s.j,c,s.D+1),s.u===null&&(c.J=s.o),u&&(s.i=u.G.concat(s.i)),u=mo(s,c,1e3),c.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),ts(s.h,c),Xr(c,d,u)}function an(s,u){s.H&&Dn(s.H,function(c,d){W(u,d,c)}),s.l&&Dn({},function(c,d){W(u,d,c)})}function mo(s,u,c){c=Math.min(s.i.length,c);const d=s.l?f(s.l.Ka,s.l,s):null;t:{var A=s.i;let U=-1;for(;;){const ut=["count="+c];U==-1?c>0?(U=A[0].g,ut.push("ofs="+U)):U=0:ut.push("ofs="+U);let H=!0;for(let ht=0;ht<c;ht++){var v=A[ht].g;const Ot=A[ht].map;if(v-=U,v<0)U=Math.max(0,A[ht].g-100),H=!1;else try{v="req"+v+"_"||"";try{var b=Ot instanceof Map?Ot:Object.entries(Ot);for(const[_e,Yt]of b){let Jt=Yt;l(Yt)&&(Jt=Gr(Yt)),ut.push(v+_e+"="+encodeURIComponent(Jt))}}catch(_e){throw ut.push(v+"type="+encodeURIComponent("_badmap")),_e}}catch{d&&d(Ot)}}if(H){b=ut.join("&");break t}}b=void 0}return s=s.i.splice(0,c),u.G=s,b}function po(s){if(!s.g&&!s.v){s.Y=1;var u=s.Da;at||p(),Z||(at(),Z=!0),T.add(u,s),s.A=0}}function is(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=He(f(s.Da,s),yo(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,go(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=He(f(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,It(10),Bn(this),go(this))};function os(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function go(s){s.g=new Qt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var u=Nt(s.na);W(u,"RID","rpc"),W(u,"SID",s.M),W(u,"AID",s.K),W(u,"CI",s.F?"0":"1"),!s.F&&s.ia&&W(u,"TO",s.ia),W(u,"TYPE","xmlhttp"),an(s,u),s.u&&s.o&&rs(u,s.u,s.o),s.O&&(s.g.H=s.O);var c=s.g;s=s.ba,c.M=1,c.A=Fn(Nt(u)),c.u=null,c.R=!0,zi(c,s)}n.Va=function(){this.C!=null&&(this.C=null,Bn(this),is(this),It(19))};function zn(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function _o(s,u){var c=null;if(s.g==u){zn(s),os(s),s.g=null;var d=2}else if(Zr(s.h,u))c=u.G,Wi(s.h,u),d=1;else return;if(s.I!=0){if(u.o)if(d==1){c=u.u?u.u.length:0,u=Date.now()-u.F;var A=s.D;d=xn(),Et(d,new Fi(d,c)),jn(s)}else po(s);else if(A=u.m,A==3||A==0&&u.X>0||!(d==1&&rl(s,u)||d==2&&is(s)))switch(c&&c.length>0&&(u=s.h,u.i=u.i.concat(c)),A){case 1:ge(s,5);break;case 4:ge(s,10);break;case 3:ge(s,6);break;default:ge(s,2)}}}function yo(s,u){let c=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(c*=2),c*u}function ge(s,u){if(s.j.info("Error code "+u),u==2){var c=f(s.bb,s),d=s.Ua;const A=!d;d=new Ht(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Je(d,"https"),Fn(d),A?Yc(d.toString(),c):Jc(d.toString(),c)}else It(2);s.I=0,s.l&&s.l.pa(u),To(s),ho(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function To(s){if(s.I=0,s.ja=[],s.l){const u=Xi(s.h);(u.length!=0||s.i.length!=0)&&(D(s.ja,u),D(s.ja,s.i),s.h.i.length=0,V(s.i),s.i.length=0),s.l.oa()}}function Eo(s,u,c){var d=c instanceof Ht?Nt(c):new Ht(c);if(d.g!="")u&&(d.g=u+"."+d.g),Ze(d,d.u);else{var A=a.location;d=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const v=new Ht(null);d&&Je(v,d),u&&(v.g=u),A&&Ze(v,A),c&&(v.h=c),d=v}return c=s.G,u=s.wa,c&&u&&W(d,c,u),W(d,"VER",s.ka),an(s,d),d}function Io(s,u,c){if(u&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=s.Aa&&!s.ma?new tt(new ns({ab:c})):new tt(s.ma),u.Fa(s.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ao(){}n=Ao.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function $n(){}$n.prototype.g=function(s,u){return new St(s,u)};function St(s,u){gt.call(this),this.g=new lo(u),this.l=s,this.h=u&&u.messageUrlParams||null,s=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(s?s["X-WebChannel-Content-Type"]=u.messageContentType:s={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(s?s["X-WebChannel-Client-Profile"]=u.sa:s={"X-WebChannel-Client-Profile":u.sa}),this.g.U=s,(s=u&&u.Qb)&&!g(s)&&(this.g.u=s),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.G=u,s=this.h,s!==null&&u in s&&(s=this.h,u in s&&delete s[u])),this.j=new Ce(this)}E(St,gt),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){ss(this.g)},St.prototype.o=function(s){var u=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.v&&(c={},c.__data__=Gr(s),s=c);u.i.push(new zc(u.Ya++,s)),u.I==3&&jn(u)},St.prototype.N=function(){this.g.l=null,delete this.j,ss(this.g),delete this.g,St.Z.N.call(this)};function wo(s){Kr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var u=s.__sm__;if(u){t:{for(const c in u){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,u=u!==null&&s in u?u[s]:void 0),this.data=u}else this.data=s}E(wo,Kr);function vo(){Qr.call(this),this.status=1}E(vo,Qr);function Ce(s){this.g=s}E(Ce,Ao),Ce.prototype.ra=function(){Et(this.g,"a")},Ce.prototype.qa=function(s){Et(this.g,new wo(s))},Ce.prototype.pa=function(s){Et(this.g,new vo)},Ce.prototype.oa=function(){Et(this.g,"b")},$n.prototype.createWebChannel=$n.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,ja=function(){return new $n},Ba=function(){return xn()},qa=de,ps={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Mn.NO_ERROR=0,Mn.TIMEOUT=8,Mn.HTTP_ERROR=6,Zn=Mn,Ui.COMPLETE="complete",Ua=Ui,Oi.EventType=Ke,Ke.OPEN="a",Ke.CLOSE="b",Ke.ERROR="c",Ke.MESSAGE="d",gt.prototype.listen=gt.prototype.J,cn=Oi,tt.prototype.listenOnce=tt.prototype.K,tt.prototype.getLastError=tt.prototype.Ha,tt.prototype.getLastErrorCode=tt.prototype.ya,tt.prototype.getStatus=tt.prototype.ca,tt.prototype.getResponseJson=tt.prototype.La,tt.prototype.getResponseText=tt.prototype.la,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Fa,Fa=tt}).apply(typeof Kn<"u"?Kn:typeof self<"u"?self:typeof window<"u"?window:{});const Po="@firebase/firestore",So="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Be="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=new sl("@firebase/firestore");function be(){return Ae.logLevel}function k(n,...t){if(Ae.logLevel<=zt.DEBUG){const e=t.map(Os);Ae.debug(`Firestore (${Be}): ${n}`,...e)}}function Gt(n,...t){if(Ae.logLevel<=zt.ERROR){const e=t.map(Os);Ae.error(`Firestore (${Be}): ${n}`,...e)}}function xe(n,...t){if(Ae.logLevel<=zt.WARN){const e=t.map(Os);Ae.warn(`Firestore (${Be}): ${n}`,...e)}}function Os(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,za(n,r,e)}function za(n,t,e){let r=`FIRESTORE (${Be}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Gt(r),new Error(r)}function K(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||za(t,i,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ba{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(yt.UNAUTHENTICATED)))}shutdown(){}}class fl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class dl{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new $t,t.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},l=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new $t)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new $a(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new yt(t)}}class ml{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pl{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new ml(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Vo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gl{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ca(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Vo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Vo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=_l(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function gs(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return us(i)===us(o)?B(i,o):us(i)?1:-1}return B(n.length,t.length)}const yl=55296,Tl=57343;function us(n){const t=n.charCodeAt(0);return t>=yl&&t<=Tl}function Me(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co="__name__";class xt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return xt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof xt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=xt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=xt.isNumericId(t),i=xt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?xt.extractNumericId(t).compare(xt.extractNumericId(e)):gs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ee.fromString(t.substring(4,t.length-2))}}class X extends xt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const El=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends xt{construct(t,e,r){return new mt(t,e,r)}static isValidIdentifier(t){return El.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Co}static keyField(){return new mt([Co])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mt(e)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(X.fromString(t))}static fromName(t){return new x(X.fromString(t).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new X(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n,t,e){if(!e)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Il(n,t,e,r){if(t===!0&&r===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function bo(n){if(!x.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ko(n){if(x.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ka(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function kt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ms(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,t){const e={typeString:n};return t&&(e.value=t),e}function Rn(n,t){if(!Ka(n))throw new N(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=-62135596800,No=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*No);return new Y(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Do)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/No}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Rn(t,Y._jsonSchema))return new Y(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Do;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:it("string",Y._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new Y(0,0))}static max(){return new L(new Y(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=-1;function Al(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new Y(e+1,0):new Y(e,r));return new re(i,x.empty(),t)}function wl(n){return new re(n.readTime,n.key,Tn)}class re{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new re(L.min(),x.empty(),Tn)}static max(){return new re(L.max(),x.empty(),Tn)}}function vl(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Rl)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):P.reject(e)}static resolve(t){return new P(((e,r)=>{e(t)}))}static reject(t){return new P(((e,r)=>{r(t)}))}static waitFor(t){return new P(((e,r)=>{let i=0,o=0,a=!1;t.forEach((l=>{++i,l.next((()=>{++o,a&&o===i&&e()}),(h=>r(h)))})),a=!0,o===i&&e()}))}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next((i=>i?P.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new P(((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next((m=>{a[f]=m,++l,l===o&&r(a)}),(m=>i(m)))}}))}static doWhile(t,e){return new P(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function Sl(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ze(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Tr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=-1;function Er(n){return n==null}function ir(n){return n===0&&1/n==-1/0}function Vl(n){return typeof n=="number"&&Number.isInteger(n)&&!ir(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="";function Cl(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Oo(t)),t=bl(n.get(e),t);return Oo(t)}function bl(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case Qa:e+="";break;default:e+=o}}return e}function Oo(n){return n+Qa+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function le(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ha(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||dt.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qn(this.root,t,this.comparator,!0)}}class Qn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class dt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??dt.RED,this.left=i??dt.EMPTY,this.right=o??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new dt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mo(this.data.getIterator())}getIteratorFrom(t){return new Mo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class Mo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.fields=t,t.sort(mt.comparator)}static empty(){return new Vt([])}unionWith(t){let e=new lt(mt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Me(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Wa("Invalid base64 string: "+o):o}})(t);return new pt(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o})(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const kl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function se(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=kl.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ie(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="server_timestamp",Ya="__type__",Ja="__previous_value__",Za="__local_write_time__";function Fs(n){return(n?.mapValue?.fields||{})[Ya]?.stringValue===Xa}function Ir(n){const t=n.mapValue.fields[Ja];return Fs(t)?Ir(t):t}function En(n){const t=se(n.mapValue.fields[Za].timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,e,r,i,o,a,l,h,f,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const or="(default)";class In{constructor(t,e){this.projectId=t,this.database=e||or}static empty(){return new In("","")}get isDefaultDatabase(){return this.database===or}isEqual(t){return t instanceof In&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="__type__",Nl="__max__",Hn={mapValue:{}},eu="__vector__",ar="value";function oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fs(n)?4:xl(n)?9007199254740991:Ol(n)?10:11:M(28295,{value:n})}function Bt(n,t){if(n===t)return!0;const e=oe(n);if(e!==oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return En(n).isEqual(En(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=se(i.timestampValue),l=se(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return ie(i.bytesValue).isEqual(ie(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return rt(i.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(i.geoPointValue.longitude)===rt(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return rt(i.integerValue)===rt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=rt(i.doubleValue),l=rt(o.doubleValue);return a===l?ir(a)===ir(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return Me(n.arrayValue.values||[],t.arrayValue.values||[],Bt);case 10:case 11:return(function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(xo(a)!==xo(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Bt(a[h],l[h])))return!1;return!0})(n,t);default:return M(52216,{left:n})}}function An(n,t){return(n.values||[]).find((e=>Bt(e,t)))!==void 0}function Le(n,t){if(n===t)return 0;const e=oe(n),r=oe(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=rt(o.integerValue||o.doubleValue),h=rt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return Lo(n.timestampValue,t.timestampValue);case 4:return Lo(En(n),En(t));case 5:return gs(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=ie(o),h=ie(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const m=B(l[f],h[f]);if(m!==0)return m}return B(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=B(rt(o.latitude),rt(a.latitude));return l!==0?l:B(rt(o.longitude),rt(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Fo(n.arrayValue,t.arrayValue);case 10:return(function(o,a){const l=o.fields||{},h=a.fields||{},f=l[ar]?.arrayValue,m=h[ar]?.arrayValue,E=B(f?.values?.length||0,m?.values?.length||0);return E!==0?E:Fo(f,m)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Hn.mapValue&&a===Hn.mapValue)return 0;if(o===Hn.mapValue)return 1;if(a===Hn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const R=gs(h[E],m[E]);if(R!==0)return R;const V=Le(l[h[E]],f[m[E]]);if(V!==0)return V}return B(h.length,m.length)})(n.mapValue,t.mapValue);default:throw M(23264,{he:e})}}function Lo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=se(n),r=se(t),i=B(e.seconds,r.seconds);return i!==0?i:B(e.nanos,r.nanos)}function Fo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Le(e[i],r[i]);if(o)return o}return B(e.length,r.length)}function Fe(n){return _s(n)}function _s(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=se(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ie(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return x.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=_s(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${_s(e.fields[a])}`;return i+"}"})(n.mapValue):M(61005,{value:n})}function tr(n){switch(oe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ir(n);return t?16+tr(t):16;case 5:return 2*n.stringValue.length;case 6:return ie(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+tr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return le(r.fields,((o,a)=>{i+=o.length+tr(a)})),i})(n.mapValue);default:throw M(13486,{value:n})}}function ys(n){return!!n&&"integerValue"in n}function Us(n){return!!n&&"arrayValue"in n}function Uo(n){return!!n&&"nullValue"in n}function qo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function er(n){return!!n&&"mapValue"in n}function Ol(n){return(n?.mapValue?.fields||{})[tu]?.stringValue===eu}function dn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return le(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=dn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=dn(n.arrayValue.values[e]);return t}return{...n}}function xl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Nl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!er(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=dn(e)}setAll(t){let e=mt.emptyPath(),r={},i=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=dn(a):i.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());er(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];er(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){le(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new Rt(dn(this.value))}}function nu(n){const t=[];return le(n.fields,((e,r)=>{const i=new mt([e]);if(er(r)){const o=nu(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)})),new Vt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Tt(t,0,L.min(),L.min(),L.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,i){return new Tt(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new Tt(t,2,e,L.min(),L.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,L.min(),L.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e){this.position=t,this.inclusive=e}}function Bo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),e.key):r=Le(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function jo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Bt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ml(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{}class ct extends ru{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Fl(t,e,r):e==="array-contains"?new Bl(t,r):e==="in"?new jl(t,r):e==="not-in"?new zl(t,r):e==="array-contains-any"?new $l(t,r):new ct(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ul(t,r):new ql(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Le(e,this.value)):e!==null&&oe(this.value)===oe(e)&&this.matchesComparison(Le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends ru{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new jt(t,e)}matches(t){return su(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function su(n){return n.op==="and"}function iu(n){return Ll(n)&&su(n)}function Ll(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function Ts(n){if(n instanceof ct)return n.field.canonicalString()+n.op.toString()+Fe(n.value);if(iu(n))return n.filters.map((t=>Ts(t))).join(",");{const t=n.filters.map((e=>Ts(e))).join(",");return`${n.op}(${t})`}}function ou(n,t){return n instanceof ct?(function(r,i){return i instanceof ct&&r.op===i.op&&r.field.isEqual(i.field)&&Bt(r.value,i.value)})(n,t):n instanceof jt?(function(r,i){return i instanceof jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,a,l)=>o&&ou(a,i.filters[l])),!0):!1})(n,t):void M(19439)}function au(n){return n instanceof ct?(function(e){return`${e.field.canonicalString()} ${e.op} ${Fe(e.value)}`})(n):n instanceof jt?(function(e){return e.op.toString()+" {"+e.getFilters().map(au).join(" ,")+"}"})(n):"Filter"}class Fl extends ct{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ul extends ct{constructor(t,e){super(t,"in",e),this.keys=uu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ql extends ct{constructor(t,e){super(t,"not-in",e),this.keys=uu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function uu(n,t){return(t.arrayValue?.values||[]).map((e=>x.fromName(e.referenceValue)))}class Bl extends ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Us(e)&&An(e.arrayValue,this.value)}}class jl extends ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&An(this.value.arrayValue,e)}}class zl extends ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(An(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!An(this.value.arrayValue,e)}}class $l extends ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Us(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>An(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.Te=null}}function zo(n,t=null,e=[],r=[],i=null,o=null,a=null){return new Gl(n,t,e,r,i,o,a)}function qs(n){const t=F(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Ts(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Er(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Fe(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Fe(r))).join(",")),t.Te=e}return t.Te}function Bs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ml(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ou(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!jo(n.startAt,t.startAt)&&jo(n.endAt,t.endAt)}function Es(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Kl(n,t,e,r,i,o,a,l){return new Ar(n,t,e,r,i,o,a,l)}function wr(n){return new Ar(n)}function $o(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ql(n){return n.collectionGroup!==null}function mn(n){const t=F(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new lt(mt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new cr(o,r))})),e.has(mt.keyField().canonicalString())||t.Ie.push(new cr(mt.keyField(),r))}return t.Ie}function Lt(n){const t=F(n);return t.Ee||(t.Ee=Hl(t,mn(n))),t.Ee}function Hl(n,t){if(n.limitType==="F")return zo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new cr(i.field,o)}));const e=n.endAt?new ur(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ur(n.startAt.position,n.startAt.inclusive):null;return zo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Is(n,t,e){return new Ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function vr(n,t){return Bs(Lt(n),Lt(t))&&n.limitType===t.limitType}function cu(n){return`${qs(Lt(n))}|lt:${n.limitType}`}function ke(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>au(i))).join(", ")}]`),Er(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>Fe(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>Fe(i))).join(",")),`Target(${r})`})(Lt(n))}; limitType=${n.limitType})`}function Rr(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of mn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(a,l,h){const f=Bo(a,l,h);return a.inclusive?f<=0:f<0})(r.startAt,mn(r),i)||r.endAt&&!(function(a,l,h){const f=Bo(a,l,h);return a.inclusive?f>=0:f>0})(r.endAt,mn(r),i))})(n,t)}function Wl(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lu(n){return(t,e)=>{let r=!1;for(const i of mn(n)){const o=Xl(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Xl(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Le(h,f):M(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){le(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return Ha(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new J(x.comparator);function Kt(){return Yl}const hu=new J(x.comparator);function ln(...n){let t=hu;for(const e of n)t=t.insert(e.key,e);return t}function fu(n){let t=hu;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function ye(){return pn()}function du(){return pn()}function pn(){return new Re((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Jl=new J(x.comparator),Zl=new lt(x.comparator);function j(...n){let t=Zl;for(const e of n)t=t.add(e);return t}const th=new lt(B);function eh(){return th}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ir(t)?"-0":t}}function mu(n){return{integerValue:""+n}}function nh(n,t){return Vl(t)?mu(t):js(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this._=void 0}}function rh(n,t,e){return n instanceof lr?(function(i,o){const a={fields:{[Ya]:{stringValue:Xa},[Za]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Fs(o)&&(o=Ir(o)),o&&(a.fields[Ja]=o),{mapValue:a}})(e,t):n instanceof wn?gu(n,t):n instanceof vn?_u(n,t):(function(i,o){const a=pu(i,o),l=Go(a)+Go(i.Ae);return ys(a)&&ys(i.Ae)?mu(l):js(i.serializer,l)})(n,t)}function sh(n,t,e){return n instanceof wn?gu(n,t):n instanceof vn?_u(n,t):e}function pu(n,t){return n instanceof hr?(function(r){return ys(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class lr extends Pr{}class wn extends Pr{constructor(t){super(),this.elements=t}}function gu(n,t){const e=yu(t);for(const r of n.elements)e.some((i=>Bt(i,r)))||e.push(r);return{arrayValue:{values:e}}}class vn extends Pr{constructor(t){super(),this.elements=t}}function _u(n,t){let e=yu(t);for(const r of n.elements)e=e.filter((i=>!Bt(i,r)));return{arrayValue:{values:e}}}class hr extends Pr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Go(n){return rt(n.integerValue||n.doubleValue)}function yu(n){return Us(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ih(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof wn&&i instanceof wn||r instanceof vn&&i instanceof vn?Me(r.elements,i.elements,Bt):r instanceof hr&&i instanceof hr?Bt(r.Ae,i.Ae):r instanceof lr&&i instanceof lr})(n.transform,t.transform)}class oh{constructor(t,e){this.version=t,this.transformResults=e}}class Dt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Sr{}function Tu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new zs(n.key,Dt.none()):new Pn(n.key,n.data,Dt.none());{const e=n.data,r=Rt.empty();let i=new lt(mt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new he(n.key,r,new Vt(i.toArray()),Dt.none())}}function ah(n,t,e){n instanceof Pn?(function(i,o,a){const l=i.value.clone(),h=Qo(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof he?(function(i,o,a){if(!nr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Qo(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Eu(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function gn(n,t,e,r){return n instanceof Pn?(function(o,a,l,h){if(!nr(o.precondition,a))return l;const f=o.value.clone(),m=Ho(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,t,e,r):n instanceof he?(function(o,a,l,h){if(!nr(o.precondition,a))return l;const f=Ho(o.fieldTransforms,h,a),m=a.data;return m.setAll(Eu(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((E=>E.field)))})(n,t,e,r):(function(o,a,l){return nr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function uh(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=pu(r.transform,i||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(r.field,o))}return e||null}function Ko(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Me(r,i,((o,a)=>ih(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Pn extends Sr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class he extends Sr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Eu(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Qo(n,t,e){const r=new Map;K(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,sh(a,l,e[i]))}return r}function Ho(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,rh(o,a,t))}return r}class zs extends Sr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ch extends Sr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&ah(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=du();return this.mutations.forEach((i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const h=Tu(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),j())}isEqual(t){return this.batchId===t.batchId&&Me(this.mutations,t.mutations,((e,r)=>Ko(e,r)))&&Me(this.baseMutations,t.baseMutations,((e,r)=>Ko(e,r)))}}class $s{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){K(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return Jl})();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new $s(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,G;function dh(n){switch(n){case S.OK:return M(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function Iu(n){if(n===void 0)return Gt("GRPC error has no .code"),S.UNKNOWN;switch(n){case st.OK:return S.OK;case st.CANCELLED:return S.CANCELLED;case st.UNKNOWN:return S.UNKNOWN;case st.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case st.INTERNAL:return S.INTERNAL;case st.UNAVAILABLE:return S.UNAVAILABLE;case st.UNAUTHENTICATED:return S.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case st.NOT_FOUND:return S.NOT_FOUND;case st.ALREADY_EXISTS:return S.ALREADY_EXISTS;case st.PERMISSION_DENIED:return S.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case st.ABORTED:return S.ABORTED;case st.OUT_OF_RANGE:return S.OUT_OF_RANGE;case st.UNIMPLEMENTED:return S.UNIMPLEMENTED;case st.DATA_LOSS:return S.DATA_LOSS;default:return M(39323,{code:n})}}(G=st||(st={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new ee([4294967295,4294967295],0);function Wo(n){const t=mh().encode(n),e=new La;return e.update(t),new Uint8Array(e.digest())}function Xo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ee([e,r],0),new ee([i,o],0)]}class Gs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new hn(`Invalid padding: ${e}`);if(r<0)throw new hn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new hn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new hn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ee.fromNumber(this.ge)}ye(t,e,r){let i=t.add(e.multiply(ee.fromNumber(r)));return i.compare(ph)===1&&(i=new ee([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Wo(t),[r,i]=Xo(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Gs(o,i,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.ge===0)return;const e=Wo(t),[r,i]=Xo(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Sn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Vr(L.min(),i,new J(B),Kt(),j())}}class Sn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Sn(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(t,e,r,i){this.be=t,this.removedTargetIds=e,this.key=r,this.De=i}}class Au{constructor(t,e){this.targetId=t,this.Ce=e}}class wu{constructor(t,e,r=pt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Yo{constructor(){this.ve=0,this.Fe=Jo(),this.Me=pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=j(),e=j(),r=j();return this.Fe.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M(38017,{changeType:o})}})),new Sn(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Jo()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class gh{constructor(t){this.Ge=t,this.ze=new Map,this.je=Kt(),this.Je=Wn(),this.He=Wn(),this.Ye=new J(B)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:M(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,r=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(Es(o))if(r===0){const a=new x(o.path);this.et(e,a,Tt.newNoDocument(a,L.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const l=this.ut(t),h=l?this.ct(l,t,a):1;if(h!==0){this.it(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=ie(r).toUint8Array()}catch(h){if(h instanceof Wa)return xe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Gs(a,i,o)}catch(h){return xe(h instanceof hn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let i=0;return r.forEach((o=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const l=this.ot(a);if(l){if(o.current&&Es(l.target)){const h=new x(l.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Tt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.qe())}}));let r=j();this.He.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const i=new Vr(t,e,this.Ye,this.je,r);return this.je=Kt(),this.Je=Wn(),this.He=Wn(),this.Ye=new J(B),i}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Yo,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new lt(B),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new lt(B),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Yo),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Wn(){return new J(x.comparator)}function Jo(){return new J(x.comparator)}const _h={asc:"ASCENDING",desc:"DESCENDING"},yh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Th={and:"AND",or:"OR"};class Eh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function As(n,t){return n.useProto3Json||Er(t)?t:{value:t}}function fr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ih(n,t){return fr(n,t.toTimestamp())}function Ft(n){return K(!!n,49232),L.fromTimestamp((function(e){const r=se(e);return new Y(r.seconds,r.nanos)})(n))}function Ks(n,t){return ws(n,t).canonicalString()}function ws(n,t){const e=(function(i){return new X(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Ru(n){const t=X.fromString(n);return K(bu(t),10190,{key:t.toString()}),t}function vs(n,t){return Ks(n.databaseId,t.path)}function cs(n,t){const e=Ru(t);if(e.get(1)!==n.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(Su(e))}function Pu(n,t){return Ks(n.databaseId,t)}function Ah(n){const t=Ru(n);return t.length===4?X.emptyPath():Su(t)}function Rs(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Su(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Zo(n,t,e){return{name:vs(n,t),fields:e.value.mapValue.fields}}function wh(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(f,m){return f.useProto3Json?(K(m===void 0||typeof m=="string",58123),pt.fromBase64String(m||"")):(K(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),pt.fromUint8Array(m||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(f){const m=f.code===void 0?S.UNKNOWN:Iu(f.code);return new N(m,f.message||"")})(a);e=new wu(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=cs(n,r.document.name),o=Ft(r.document.updateTime),a=r.document.createTime?Ft(r.document.createTime):L.min(),l=new Rt({mapValue:{fields:r.document.fields}}),h=Tt.newFoundDocument(i,o,a,l),f=r.targetIds||[],m=r.removedTargetIds||[];e=new rr(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=cs(n,r.document),o=r.readTime?Ft(r.readTime):L.min(),a=Tt.newNoDocument(i,o),l=r.removedTargetIds||[];e=new rr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=cs(n,r.document),o=r.removedTargetIds||[];e=new rr([],o,i,null)}else{if(!("filter"in t))return M(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new fh(i,o),l=r.targetId;e=new Au(l,a)}}return e}function vh(n,t){let e;if(t instanceof Pn)e={update:Zo(n,t.key,t.value)};else if(t instanceof zs)e={delete:vs(n,t.key)};else if(t instanceof he)e={update:Zo(n,t.key,t.data),updateMask:Nh(t.fieldMask)};else{if(!(t instanceof ch))return M(16599,{Vt:t.type});e={verify:vs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof lr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof wn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof hr)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw M(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:Ih(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)})(n,t.precondition)),e}function Rh(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map((e=>(function(i,o){let a=i.updateTime?Ft(i.updateTime):Ft(o);return a.isEqual(L.min())&&(a=Ft(o)),new oh(a,i.transformResults||[])})(e,t)))):[]}function Ph(n,t){return{documents:[Pu(n,t.path)]}}function Sh(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Pu(n,i);const o=(function(f){if(f.length!==0)return Cu(jt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(f){if(f.length!==0)return f.map((m=>(function(R){return{field:De(R.field),direction:bh(R.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=As(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{ft:e,parent:i}}function Vh(n){let t=Ah(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){K(r===1,65062);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(E){const R=Vu(E);return R instanceof jt&&iu(R)?R.getFilters():[R]})(e.where));let a=[];e.orderBy&&(a=(function(E){return E.map((R=>(function(D){return new cr(Ne(D.field),(function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(R)))})(e.orderBy));let l=null;e.limit&&(l=(function(E){let R;return R=typeof E=="object"?E.value:E,Er(R)?null:R})(e.limit));let h=null;e.startAt&&(h=(function(E){const R=!!E.before,V=E.values||[];return new ur(V,R)})(e.startAt));let f=null;return e.endAt&&(f=(function(E){const R=!E.before,V=E.values||[];return new ur(V,R)})(e.endAt)),Kl(t,i,a,o,l,"F",h,f)}function Ch(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Vu(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ne(e.unaryFilter.field);return ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ne(e.unaryFilter.field);return ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ne(e.unaryFilter.field);return ct.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ne(e.unaryFilter.field);return ct.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ct.create(Ne(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return jt.create(e.compositeFilter.filters.map((r=>Vu(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(e.compositeFilter.op))})(n):M(30097,{filter:n})}function bh(n){return _h[n]}function kh(n){return yh[n]}function Dh(n){return Th[n]}function De(n){return{fieldPath:n.canonicalString()}}function Ne(n){return mt.fromServerFormat(n.fieldPath)}function Cu(n){return n instanceof ct?(function(e){if(e.op==="=="){if(qo(e.value))return{unaryFilter:{field:De(e.field),op:"IS_NAN"}};if(Uo(e.value))return{unaryFilter:{field:De(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qo(e.value))return{unaryFilter:{field:De(e.field),op:"IS_NOT_NAN"}};if(Uo(e.value))return{unaryFilter:{field:De(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:De(e.field),op:kh(e.op),value:e.value}}})(n):n instanceof jt?(function(e){const r=e.getFilters().map((i=>Cu(i)));return r.length===1?r[0]:{compositeFilter:{op:Dh(e.op),filters:r}}})(n):M(54877,{filter:n})}function Nh(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function bu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,e,r,i,o=L.min(),a=L.min(),l=pt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new te(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t){this.yt=t}}function xh(n){const t=Vh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Is(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.Cn=new Lh}addToCollectionParentIndex(t,e){return this.Cn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(re.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(re.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Lh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new lt(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new lt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ku=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(ku,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Ue(0)}static cr(){return new Ue(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="LruGarbageCollector",Fh=1048576;function na([n,t],[e,r]){const i=B(n,e);return i===0?B(t,r):i}class Uh{constructor(t){this.Ir=t,this.buffer=new lt(na),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();na(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class qh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){k(ea,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ze(e)?k(ea,"Ignoring IndexedDB error during garbage collection: ",e):await je(e)}await this.Vr(3e5)}))}}class Bh{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Tr.ce);const r=new Uh(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(ta)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ta):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,a,l,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),i=this.params.maximumSequenceNumbersToCollect):i=E,a=Date.now(),this.nthSequenceNumber(t,i)))).next((E=>(r=E,l=Date.now(),this.removeTargets(t,r,e)))).next((E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((E=>(f=Date.now(),be()<=zt.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${E} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:E}))))}}function jh(n,t){return new Bh(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.changes=new Re((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&gn(r.mutation,i,Vt.empty(),Y.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,j()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=j()){const i=ye();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let a=ln();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=ye();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,j())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,i){let o=Kt();const a=pn(),l=(function(){return pn()})();return e.forEach(((h,f)=>{const m=r.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof he)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),gn(m.mutation,f,m.mutation.getFieldMask(),Y.now())):a.set(f.key,Vt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((f,m)=>a.set(f,m))),e.forEach(((f,m)=>l.set(f,new $h(m,a.get(f)??null)))),l)))}recalculateAndSaveOverlays(t,e){const r=pn();let i=new J(((a,l)=>a-l)),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||Vt.empty();m=l.applyToLocalView(f,m),r.set(h,m);const E=(i.get(l.batchId)||j()).add(h);i=i.insert(l.batchId,E)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,m=h.value,E=du();m.forEach((R=>{if(!o.has(R)){const V=Tu(e.get(R),r.get(R));V!==null&&E.set(R,V),o=o.add(R)}})),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return P.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ql(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):P.resolve(ye());let l=Tn,h=o;return a.next((f=>P.forEach(f,((m,E)=>(l<E.largestBatchId&&(l=E.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next((R=>{h=h.insert(m,R)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,h,f,j()))).next((m=>({batchId:l,changes:fu(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next((r=>{let i=ln();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=ln();return this.indexManager.getCollectionParents(t,o).next((l=>P.forEach(l,(h=>{const f=(function(E,R){return new Ar(R,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next((m=>{m.forEach(((E,R)=>{a=a.insert(E,R)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((a=>{o.forEach(((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Tt.newInvalidDocument(m)))}));let l=ln();return a.forEach(((h,f)=>{const m=o.get(h);m!==void 0&&gn(m.mutation,f,Vt.empty(),Y.now()),Rr(e,f)&&(l=l.insert(h,f))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return P.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Ft(i.createTime)}})(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:xh(i.bundledQuery),readTime:Ft(i.readTime)}})(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.overlays=new J(x.comparator),this.qr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ye();return P.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),P.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const i=ye(),o=e.length+1,a=new x(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new J(((f,m)=>f-m));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=ye(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const l=ye(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>l.set(f,m))),!(l.size()>=i)););return P.resolve(l)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new hh(e,r));let o=this.qr.get(e);o===void 0&&(o=j(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.Qr=new lt(ft.$r),this.Ur=new lt(ft.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new ft(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new ft(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new x(new X([])),r=new ft(e,t),i=new ft(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new x(new X([])),r=new ft(e,t),i=new ft(e,t+1);let o=j();return this.Ur.forEachInRange([r,i],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ft(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ft{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return x.comparator(t.key,e.key)||B(t.Yr,e.Yr)}static Kr(t,e){return B(t.Yr,e.Yr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new lt(ft.$r)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new lh(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.Zr=this.Zr.add(new ft(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ls:this.tr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ft(e,0),i=new ft(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(a=>{const l=this.Xr(a.Yr);o.push(l)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(B);return e.forEach((i=>{const o=new ft(i,0),a=new ft(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(l=>{r=r.add(l.Yr)}))})),P.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new ft(new x(o),0);let l=new lt(B);return this.Zr.forEachWhile((h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(h.Yr)),!0)}),a),P.resolve(this.ti(l))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){K(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return P.forEach(e.mutations,(i=>{const o=new ft(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new ft(e,0),i=this.Zr.firstAfterOrEqual(r);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.ri=t,this.docs=(function(){return new J(x.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=Kt();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Tt.newInvalidDocument(i))})),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Kt();const a=e.path,l=new x(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||vl(wl(m),r)<=0||(i.has(m.key)||Rr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M(9500)}ii(t,e){return P.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Yh(this)}getSize(t){return P.resolve(this.size)}}class Yh extends zh{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),P.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t){this.persistence=t,this.si=new Re((e=>qs(e)),Bs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.oi=0,this._i=new Qs,this.targetCount=0,this.ai=Ue.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),P.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Ue(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.Pr(e),P.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)})),P.waitFor(o).next((()=>i))}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((a=>{o.push(i.markPotentiallyOrphaned(t,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,e){this.ui={},this.overlays={},this.ci=new Tr(0),this.li=!1,this.li=!0,this.hi=new Hh,this.referenceDelegate=t(this),this.Pi=new Jh(this),this.indexManager=new Mh,this.remoteDocumentCache=(function(i){return new Xh(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Oh(e),this.Ii=new Kh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Qh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new Wh(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const i=new Zh(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return P.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class Zh extends Pl{constructor(t){super(),this.currentSequenceNumber=t}}class Hs{constructor(t){this.persistence=t,this.Ri=new Qs,this.Vi=null}static mi(t){return new Hs(t)}get fi(){if(this.Vi)return this.Vi;throw M(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.fi,(r=>{const i=x.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,L.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return P.or([()=>P.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class dr{constructor(t,e){this.persistence=t,this.pi=new Re((r=>Cl(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=jh(this,e)}static mi(t,e){return new dr(t,e)}Ei(){}di(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return P.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?P.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(a=>this.br(t,a,e).next((l=>{l||(r++,o.removeEntry(a,L.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),P.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=tr(t.data.value)),e}br(t,e,r){return P.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return P.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ws(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ol()?8:Sl(al())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new tf;return this.Ss(t,e,a).next((l=>{if(o.result=l,this.Vs)return this.bs(t,e,a,l.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(be()<=zt.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),P.resolve()):(be()<=zt.DEBUG&&k("QueryEngine","Query:",ke(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(be()<=zt.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Lt(e))):P.resolve())}ys(t,e){if($o(e))return P.resolve(null);let r=Lt(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Is(e,null,"F"),r=Lt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=j(...o);return this.ps.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const f=this.Ds(e,l);return this.Cs(e,f,a,h.readTime)?this.ys(t,Is(e,null,"F")):this.vs(t,f,e,h)}))))})))))}ws(t,e,r,i){return $o(e)||i.isEqual(L.min())?P.resolve(null):this.ps.getDocuments(t,r).next((o=>{const a=this.Ds(e,o);return this.Cs(e,a,r,i)?P.resolve(null):(be()<=zt.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ke(e)),this.vs(t,a,e,Al(i,Tn)).next((l=>l)))}))}Ds(t,e){let r=new lt(lu(t));return e.forEach(((i,o)=>{Rr(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return be()<=zt.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",ke(e)),this.ps.getDocumentsMatchingQuery(t,e,re.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="LocalStore",nf=3e8;class rf{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new J(B),this.xs=new Re((o=>qs(o)),Bs),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Gh(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function sf(n,t,e,r){return new rf(n,t,e,r)}async function Nu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=j();for(const f of i){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){l.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next((f=>({Ls:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function of(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,f,m){const E=f.batch,R=E.keys();let V=P.resolve();return R.forEach((D=>{V=V.next((()=>m.getEntry(h,D))).next((O=>{const C=f.docVersions.get(D);K(C!==null,48541),O.version.compareTo(C)<0&&(E.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),m.addEntry(O)))}))})),V.next((()=>l.mutationQueue.removeMutationBatch(h,E)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=j();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function Ou(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function af(n,t){const e=F(n),r=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const l=[];t.targetChanges.forEach(((m,E)=>{const R=i.get(E);if(!R)return;l.push(e.Pi.removeMatchingKeys(o,m.removedDocuments,E).next((()=>e.Pi.addMatchingKeys(o,m.addedDocuments,E))));let V=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?V=V.withResumeToken(pt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(m.resumeToken,r)),i=i.insert(E,V),(function(O,C,z){return O.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=nf?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(R,V,m)&&l.push(e.Pi.updateTargetData(o,V))}));let h=Kt(),f=j();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),l.push(uf(o,a,t.documentUpdates).next((m=>{h=m.ks,f=m.qs}))),!r.isEqual(L.min())){const m=e.Pi.getLastRemoteSnapshotVersion(o).next((E=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(m)}return P.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,f))).next((()=>h))})).then((o=>(e.Ms=i,o)))}function uf(n,t,e){let r=j(),i=j();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=Kt();return e.forEach(((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):k(Xs,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)})),{ks:a,qs:i}}))}function cf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Ls),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function lf(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return e.Pi.getTargetData(r,t).next((o=>o?(i=o,P.resolve(i)):e.Pi.allocateTargetId(r).next((a=>(i=new te(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=e.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function Ps(n,t,e){const r=F(n),i=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!ze(a))throw a;k(Xs,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function ra(n,t,e){const r=F(n);let i=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,f,m){const E=F(h),R=E.xs.get(m);return R!==void 0?P.resolve(E.Ms.get(R)):E.Pi.getTargetData(f,m)})(r,a,Lt(t)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:j()))).next((l=>(hf(r,Wl(t),l),{documents:l,Qs:o})))))}function hf(n,t,e){let r=n.Os.get(t)||L.min();e.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class sa{constructor(){this.activeTargetIds=eh()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ff{constructor(){this.Mo=new sa,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new sa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="ConnectivityMonitor";class oa{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){k(ia,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){k(ia,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn=null;function Ss(){return Xn===null?Xn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Xn++,"0x"+Xn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="RestConnection",mf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pf{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===or?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const a=Ss(),l=this.zo(t,e.toUriEncodedString());k(ls,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:f}=new URL(l),m=yr(f);return this.Jo(t,l,h,r,m).then((E=>(k(ls,`Received RPC '${t}' ${a}: `,E),E)),(E=>{throw xe(ls,`RPC '${t}' ${a} failed with error: `,E,"url: ",l,"request:",r),E}))}Ho(t,e,r,i,o,a){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Be})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=mf[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class _f extends pf{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const a=Ss();return new Promise(((l,h)=>{const f=new Fa;f.setWithCredentials(!0),f.listenOnce(Ua.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Zn.NO_ERROR:const E=f.getResponseJson();k(_t,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(E)),l(E);break;case Zn.TIMEOUT:k(_t,`RPC '${t}' ${a} timed out`),h(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case Zn.HTTP_ERROR:const R=f.getStatus();if(k(_t,`RPC '${t}' ${a} failed with status:`,R,"response text:",f.getResponseText()),R>0){let V=f.getResponseJson();Array.isArray(V)&&(V=V[0]);const D=V?.error;if(D&&D.status&&D.message){const O=(function(z){const $=z.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf($)>=0?$:S.UNKNOWN})(D.status);h(new N(O,D.message))}else h(new N(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new N(S.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{k(_t,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(i);k(_t,`RPC '${t}' ${a} sending request:`,i),f.send(e,"POST",m,r,15)}))}T_(t,e,r){const i=Ss(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ja(),l=Ba(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");k(_t,`Creating RPC '${t}' stream ${i}: ${m}`,h);const E=a.createWebChannel(m,h);this.I_(E);let R=!1,V=!1;const D=new gf({Yo:C=>{V?k(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,C):(R||(k(_t,`Opening RPC '${t}' stream ${i} transport.`),E.open(),R=!0),k(_t,`RPC '${t}' stream ${i} sending:`,C),E.send(C))},Zo:()=>E.close()}),O=(C,z,$)=>{C.listen(z,(q=>{try{$(q)}catch(Q){setTimeout((()=>{throw Q}),0)}}))};return O(E,cn.EventType.OPEN,(()=>{V||(k(_t,`RPC '${t}' stream ${i} transport opened.`),D.o_())})),O(E,cn.EventType.CLOSE,(()=>{V||(V=!0,k(_t,`RPC '${t}' stream ${i} transport closed`),D.a_(),this.E_(E))})),O(E,cn.EventType.ERROR,(C=>{V||(V=!0,xe(_t,`RPC '${t}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),D.a_(new N(S.UNAVAILABLE,"The operation could not be completed")))})),O(E,cn.EventType.MESSAGE,(C=>{if(!V){const z=C.data[0];K(!!z,16349);const $=z,q=$?.error||$[0]?.error;if(q){k(_t,`RPC '${t}' stream ${i} received error:`,q);const Q=q.status;let at=(function(p){const _=st[p];if(_!==void 0)return Iu(_)})(Q),Z=q.message;at===void 0&&(at=S.INTERNAL,Z="Unknown error status: "+Q+" with message "+q.message),V=!0,D.a_(new N(at,Z)),E.close()}else k(_t,`RPC '${t}' stream ${i} received:`,z),D.u_(z)}})),O(l,qa.STAT_EVENT,(C=>{C.stat===ps.PROXY?k(_t,`RPC '${t}' stream ${i} detected buffering proxy`):C.stat===ps.NOPROXY&&k(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{D.__()}),0),D}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function hs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n){return new Eh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="PersistentStream";class Mu{constructor(t,e,r,i,o,a,l,h){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Gt(e.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new N(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return k(aa,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(k(aa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class yf extends Mu{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=wh(this.serializer,t),r=(function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Ft(a.readTime):L.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Rs(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=Es(h)?{documents:Ph(o,h)}:{query:Sh(o,h).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=vu(o,a.resumeToken);const f=As(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=fr(o,a.snapshotVersion.toTimestamp());const f=As(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,t);const r=Ch(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Rs(this.serializer),e.removeTarget=t,this.q_(e)}}class Tf extends Mu{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Rh(t.writeResults,t.commitTime),r=Ft(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Rs(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>vh(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{}class If extends Ef{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(t,ws(e,r),i,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(S.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(t,ws(e,r),i,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(S.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Af{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gt(e),this.aa=!1):k("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="RemoteStore";class wf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Pe(this)&&(k(we,"Restarting streams for network reachability change."),await(async function(h){const f=F(h);f.Ea.add(4),await Vn(f),f.Ra.set("Unknown"),f.Ea.delete(4),await br(f)})(this))}))})),this.Ra=new Af(r,i)}}async function br(n){if(Pe(n))for(const t of n.da)await t(!0)}async function Vn(n){for(const t of n.da)await t(!1)}function Lu(n,t){const e=F(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),ti(e)?Zs(e):$e(e).O_()&&Js(e,t))}function Ys(n,t){const e=F(n),r=$e(e);e.Ia.delete(t),r.O_()&&Fu(e,t),e.Ia.size===0&&(r.O_()?r.L_():Pe(e)&&e.Ra.set("Unknown"))}function Js(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}$e(n).Y_(t)}function Fu(n,t){n.Va.Ue(t),$e(n).Z_(t)}function Zs(n){n.Va=new gh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),$e(n).start(),n.Ra.ua()}function ti(n){return Pe(n)&&!$e(n).x_()&&n.Ia.size>0}function Pe(n){return F(n).Ea.size===0}function Uu(n){n.Va=void 0}async function vf(n){n.Ra.set("Online")}async function Rf(n){n.Ia.forEach(((t,e)=>{Js(n,t)}))}async function Pf(n,t){Uu(n),ti(n)?(n.Ra.ha(t),Zs(n)):n.Ra.set("Unknown")}async function Sf(n,t,e){if(n.Ra.set("Online"),t instanceof wu&&t.state===2&&t.cause)try{await(async function(i,o){const a=o.cause;for(const l of o.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ia.delete(l),i.Va.removeTarget(l))})(n,t)}catch(r){k(we,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await mr(n,r)}else if(t instanceof rr?n.Va.Ze(t):t instanceof Au?n.Va.st(t):n.Va.tt(t),!e.isEqual(L.min()))try{const r=await Ou(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const l=o.Va.Tt(a);return l.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(f);m&&o.Ia.set(f,m.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,f)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(pt.EMPTY_BYTE_STRING,m.snapshotVersion)),Fu(o,h);const E=new te(m.target,h,f,m.sequenceNumber);Js(o,E)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){k(we,"Failed to raise snapshot:",r),await mr(n,r)}}async function mr(n,t,e){if(!ze(t))throw t;n.Ea.add(1),await Vn(n),n.Ra.set("Offline"),e||(e=()=>Ou(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{k(we,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await br(n)}))}function qu(n,t){return t().catch((e=>mr(n,e,t)))}async function kr(n){const t=F(n),e=ae(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Ls;for(;Vf(t);)try{const i=await cf(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,Cf(t,i)}catch(i){await mr(t,i)}Bu(t)&&ju(t)}function Vf(n){return Pe(n)&&n.Ta.length<10}function Cf(n,t){n.Ta.push(t);const e=ae(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Bu(n){return Pe(n)&&!ae(n).x_()&&n.Ta.length>0}function ju(n){ae(n).start()}async function bf(n){ae(n).ra()}async function kf(n){const t=ae(n);for(const e of n.Ta)t.ea(e.mutations)}async function Df(n,t,e){const r=n.Ta.shift(),i=$s.from(r,t,e);await qu(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await kr(n)}async function Nf(n,t){t&&ae(n).X_&&await(async function(r,i){if((function(a){return dh(a)&&a!==S.ABORTED})(i.code)){const o=r.Ta.shift();ae(r).B_(),await qu(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await kr(r)}})(n,t),Bu(n)&&ju(n)}async function ua(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k(we,"RemoteStore received new credentials");const r=Pe(e);e.Ea.add(3),await Vn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await br(e)}async function Of(n,t){const e=F(n);t?(e.Ea.delete(2),await br(e)):t||(e.Ea.add(2),await Vn(e),e.Ra.set("Unknown"))}function $e(n){return n.ma||(n.ma=(function(e,r,i){const o=F(e);return o.sa(),new yf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:vf.bind(null,n),t_:Rf.bind(null,n),r_:Pf.bind(null,n),H_:Sf.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),ti(n)?Zs(n):n.Ra.set("Unknown")):(await n.ma.stop(),Uu(n))}))),n.ma}function ae(n){return n.fa||(n.fa=(function(e,r,i){const o=F(e);return o.sa(),new Tf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:bf.bind(null,n),r_:Nf.bind(null,n),ta:kf.bind(null,n),na:Df.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await kr(n)):(await n.fa.stop(),n.Ta.length>0&&(k(we,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new ei(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ni(n,t){if(Gt("AsyncQueue",`${t}: ${n}`),ze(n))return new N(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{static emptySet(t){return new Oe(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=ln(),this.sortedSet=new J(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Oe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Oe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.ga=new J(x.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):M(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class qe{constructor(t,e,r,i,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new qe(t,e,Oe.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class Mf{constructor(){this.queries=la(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=la(),o.forEach(((a,l)=>{for(const h of l.Sa)h.onError(r)}))})(this,new N(S.ABORTED,"Firestore shutting down"))}}function la(){return new Re((n=>cu(n)),vr)}async function ri(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(r=2):(o=new xf,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=ni(a,`Initialization of query '${ke(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&ii(e)}async function si(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Lf(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.Sa)l.Fa(i)&&(r=!0);a.wa=i}}r&&ii(e)}function Ff(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);r.queries.delete(t)}function ii(n){n.Ca.forEach((t=>{t.next()}))}var Vs,ha;(ha=Vs||(Vs={})).Ma="default",ha.Cache="cache";class oi{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new qe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Vs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this.key=t}}class $u{constructor(t){this.key=t}}class Uf{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=j(),this.mutatedKeys=j(),this.eu=lu(t),this.tu=new Oe(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new ca,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((m,E)=>{const R=i.get(m),V=Rr(this.query,E)?E:null,D=!!R&&this.mutatedKeys.has(R.key),O=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let C=!1;R&&V?R.data.isEqual(V.data)?D!==O&&(r.track({type:3,doc:V}),C=!0):this.su(R,V)||(r.track({type:2,doc:V}),C=!0,(h&&this.eu(V,h)>0||f&&this.eu(V,f)<0)&&(l=!0)):!R&&V?(r.track({type:0,doc:V}),C=!0):R&&!V&&(r.track({type:1,doc:R}),C=!0,(h||f)&&(l=!0)),C&&(V?(a=a.add(V),o=O?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((m,E)=>(function(V,D){const O=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Rt:C})}};return O(V)-O(D)})(m.type,E.type)||this.eu(m.doc,E.doc))),this.ou(r),i=i??!1;const l=e&&!i?this._u():[],h=this.Xa.size===0&&this.current&&!i?1:0,f=h!==this.Za;return this.Za=h,a.length!==0||f?{snapshot:new qe(this.query,t.tu,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ca,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=j(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new $u(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new zu(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=j();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return qe.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ai="SyncEngine";class qf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Bf{constructor(t){this.key=t,this.hu=!1}}class jf{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Re((l=>cu(l)),vr),this.Iu=new Map,this.Eu=new Set,this.du=new J(x.comparator),this.Au=new Map,this.Ru=new Qs,this.Vu={},this.mu=new Map,this.fu=Ue.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function zf(n,t,e=!0){const r=Xu(n);let i;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await Gu(r,t,e,!0),i}async function $f(n,t){const e=Xu(n);await Gu(e,t,!0,!1)}async function Gu(n,t,e,r){const i=await lf(n.localStore,Lt(t)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Gf(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Lu(n.remoteStore,i),l}async function Gf(n,t,e,r,i){n.pu=(E,R,V)=>(async function(O,C,z,$){let q=C.view.ru(z);q.Cs&&(q=await ra(O.localStore,C.query,!1).then((({documents:T})=>C.view.ru(T,q))));const Q=$&&$.targetChanges.get(C.targetId),at=$&&$.targetMismatches.get(C.targetId)!=null,Z=C.view.applyChanges(q,O.isPrimaryClient,Q,at);return da(O,C.targetId,Z.au),Z.snapshot})(n,E,R,V);const o=await ra(n.localStore,t,!0),a=new Uf(t,o.Qs),l=a.ru(o.documents),h=Sn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=a.applyChanges(l,n.isPrimaryClient,h);da(n,e,f.au);const m=new qf(t,e,a);return n.Tu.set(t,m),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),f.snapshot}async function Kf(n,t,e){const r=F(n),i=r.Tu.get(t),o=r.Iu.get(i.targetId);if(o.length>1)return r.Iu.set(i.targetId,o.filter((a=>!vr(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ps(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Ys(r.remoteStore,i.targetId),Cs(r,i.targetId)})).catch(je)):(Cs(r,i.targetId),await Ps(r.localStore,i.targetId,!0))}async function Qf(n,t){const e=F(n),r=e.Tu.get(t),i=e.Iu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ys(e.remoteStore,r.targetId))}async function Hf(n,t,e){const r=ed(n);try{const i=await(function(a,l){const h=F(a),f=Y.now(),m=l.reduce(((V,D)=>V.add(D.key)),j());let E,R;return h.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let D=Kt(),O=j();return h.Ns.getEntries(V,m).next((C=>{D=C,D.forEach(((z,$)=>{$.isValidDocument()||(O=O.add(z))}))})).next((()=>h.localDocuments.getOverlayedDocuments(V,D))).next((C=>{E=C;const z=[];for(const $ of l){const q=uh($,E.get($.key).overlayedDocument);q!=null&&z.push(new he($.key,q,nu(q.value.mapValue),Dt.exists(!0)))}return h.mutationQueue.addMutationBatch(V,f,z,l)})).next((C=>{R=C;const z=C.applyToLocalDocumentSet(E,O);return h.documentOverlayCache.saveOverlays(V,C.batchId,z)}))})).then((()=>({batchId:R.batchId,changes:fu(E)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(a,l,h){let f=a.Vu[a.currentUser.toKey()];f||(f=new J(B)),f=f.insert(l,h),a.Vu[a.currentUser.toKey()]=f})(r,i.batchId,e),await Cn(r,i.changes),await kr(r.remoteStore)}catch(i){const o=ni(i,"Failed to persist write");e.reject(o)}}async function Ku(n,t){const e=F(n);try{const r=await af(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const a=e.Au.get(o);a&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?K(a.hu,14607):i.removedDocuments.size>0&&(K(a.hu,42227),a.hu=!1))})),await Cn(e,r,t)}catch(r){await je(r)}}function fa(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const h=F(a);h.onlineState=l;let f=!1;h.queries.forEach(((m,E)=>{for(const R of E.Sa)R.va(l)&&(f=!0)})),f&&ii(h)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Wf(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Au.get(t),o=i&&i.key;if(o){let a=new J(x.comparator);a=a.insert(o,Tt.newNoDocument(o,L.min()));const l=j().add(o),h=new Vr(L.min(),new Map,new J(B),a,l);await Ku(r,h),r.du=r.du.remove(o),r.Au.delete(t),ui(r)}else await Ps(r.localStore,t,!1).then((()=>Cs(r,t,e))).catch(je)}async function Xf(n,t){const e=F(n),r=t.batch.batchId;try{const i=await of(e.localStore,t);Hu(e,r,null),Qu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Cn(e,i)}catch(i){await je(i)}}async function Yf(n,t,e){const r=F(n);try{const i=await(function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let m;return h.mutationQueue.lookupMutationBatch(f,l).next((E=>(K(E!==null,37113),m=E.keys(),h.mutationQueue.removeMutationBatch(f,E)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m))).next((()=>h.localDocuments.getDocuments(f,m)))}))})(r.localStore,t);Hu(r,t,e),Qu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Cn(r,i)}catch(i){await je(i)}}function Qu(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Hu(n,t,e){const r=F(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}function Cs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||Wu(n,r)}))}function Wu(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Ys(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),ui(n))}function da(n,t,e){for(const r of e)r instanceof zu?(n.Ru.addReference(r.key,t),Jf(n,r)):r instanceof $u?(k(ai,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||Wu(n,r.key)):M(19791,{wu:r})}function Jf(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(k(ai,"New document in limbo: "+e),n.Eu.add(r),ui(n))}function ui(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new x(X.fromString(t)),r=n.fu.next();n.Au.set(r,new Bf(e)),n.du=n.du.insert(e,r),Lu(n.remoteStore,new te(Lt(wr(e.path)),r,"TargetPurposeLimboResolution",Tr.ce))}}async function Cn(n,t,e){const r=F(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{a.push(r.pu(h,t,e).then((f=>{if((f||e)&&r.isPrimaryClient){const m=f?!f.fromCache:e?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(f){i.push(f);const m=Ws.As(h.targetId,f);o.push(m)}})))})),await Promise.all(a),r.Pu.H_(i),await(async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>P.forEach(f,(R=>P.forEach(R.Es,(V=>m.persistence.referenceDelegate.addReference(E,R.targetId,V))).next((()=>P.forEach(R.ds,(V=>m.persistence.referenceDelegate.removeReference(E,R.targetId,V)))))))))}catch(E){if(!ze(E))throw E;k(Xs,"Failed to update sequence numbers: "+E)}for(const E of f){const R=E.targetId;if(!E.fromCache){const V=m.Ms.get(R),D=V.snapshotVersion,O=V.withLastLimboFreeSnapshotVersion(D);m.Ms=m.Ms.insert(R,O)}}})(r.localStore,o))}async function Zf(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k(ai,"User change. New user:",t.toKey());const r=await Nu(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new N(S.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Cn(e,r.Ls)}}function td(n,t){const e=F(n),r=e.Au.get(t);if(r&&r.hu)return j().add(r.key);{let i=j();const o=e.Iu.get(t);if(!o)return i;for(const a of o){const l=e.Tu.get(a);i=i.unionWith(l.view.nu)}return i}}function Xu(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ku.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=td.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Wf.bind(null,t),t.Pu.H_=Lf.bind(null,t.eventManager),t.Pu.yu=Ff.bind(null,t.eventManager),t}function ed(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Yf.bind(null,t),t}class pr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Cr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return sf(this.persistence,new ef,t.initialUser,this.serializer)}Cu(t){return new Du(Hs.mi,this.serializer)}Du(t){return new ff}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pr.provider={build:()=>new pr};class nd extends pr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){K(this.persistence.referenceDelegate instanceof dr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qh(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Du((r=>dr.mi(r,e)),this.serializer)}}class bs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zf.bind(null,this.syncEngine),await Of(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Mf})()}createDatastore(t){const e=Cr(t.databaseInfo.databaseId),r=(function(o){return new _f(o)})(t.databaseInfo);return(function(o,a,l,h){return new If(o,a,l,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,a,l){return new wf(r,i,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>fa(this.syncEngine,e,0)),(function(){return oa.v()?new oa:new df})())}createSyncEngine(t,e){return(function(i,o,a,l,h,f,m){const E=new jf(i,o,a,l,h,f);return m&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=F(e);k(we,"RemoteStore shutting down."),r.Ea.add(5),await Vn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}bs.provider={build:()=>new bs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Gt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="FirestoreClient";class rd{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=xs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{k(ue,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(k(ue,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ni(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function fs(n,t){n.asyncQueue.verifyOperationInProgress(),k(ue,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Nu(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function ma(n,t){n.asyncQueue.verifyOperationInProgress();const e=await sd(n);k(ue,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>ua(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>ua(t.remoteStore,i))),n._onlineComponents=t}async function sd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(ue,"Using user provided OfflineComponentProvider");try{await fs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;xe("Error using user provided cache. Falling back to memory cache: "+e),await fs(n,new pr)}}else k(ue,"Using default OfflineComponentProvider"),await fs(n,new nd(void 0));return n._offlineComponents}async function Yu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(ue,"Using user provided OnlineComponentProvider"),await ma(n,n._uninitializedComponentsProvider._online)):(k(ue,"Using default OnlineComponentProvider"),await ma(n,new bs))),n._onlineComponents}function id(n){return Yu(n).then((t=>t.syncEngine))}async function gr(n){const t=await Yu(n),e=t.eventManager;return e.onListen=zf.bind(null,t.syncEngine),e.onUnlisten=Kf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=$f.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Qf.bind(null,t.syncEngine),e}function od(n,t,e={}){const r=new $t;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,f){const m=new ci({next:R=>{m.Nu(),a.enqueueAndForget((()=>si(o,E)));const V=R.docs.has(l);!V&&R.fromCache?f.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&R.fromCache&&h&&h.source==="server"?f.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),E=new oi(wr(l.path),m,{includeMetadataChanges:!0,qa:!0});return ri(o,E)})(await gr(n),n.asyncQueue,t,e,r))),r.promise}function ad(n,t,e={}){const r=new $t;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,f){const m=new ci({next:R=>{m.Nu(),a.enqueueAndForget((()=>si(o,E))),R.fromCache&&h.source==="server"?f.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),E=new oi(l,m,{includeMetadataChanges:!0,qa:!0});return ri(o,E)})(await gr(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="firestore.googleapis.com",ga=!0;class _a{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zu,this.ssl=ga}else this.host=t.host,this.ssl=t.ssl??ga;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ku;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Fh)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Il("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ju(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Dr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _a({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _a(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new hl;switch(r.type){case"firstParty":return new pl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=pa.get(e);r&&(k("ComponentProvider","Removing Datastore"),pa.delete(e),r.terminate())})(this),Promise.resolve()}}function ud(n,t,e,r={}){n=kt(n,Dr);const i=yr(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;i&&(Na(`https://${l}`),Oa("Firestore",!0)),o.host!==Zu&&o.host!==l&&xe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:i,emulatorOptions:r};if(!il(h,a)&&(n._setSettings(h),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=yt.MOCK_USER;else{f=xa(r.mockUserToken,n._app?.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new yt(E)}n._authCredentials=new fl(new $a(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new bn(this.firestore,t,this._query)}}class ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Rn(e,ot._jsonSchema))return new ot(t,r||null,new x(X.fromString(e.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:it("string",ot._jsonSchemaVersion),referencePath:it("string")};class ne extends bn{constructor(t,e,r){super(t,e,wr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new x(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function qm(n,t,...e){if(n=Pt(n),Ga("collection","path",t),n instanceof Dr){const r=X.fromString(t,...e);return ko(r),new ne(n,null,r)}{if(!(n instanceof ot||n instanceof ne))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return ko(r),new ne(n.firestore,null,r)}}function cd(n,t,...e){if(n=Pt(n),arguments.length===1&&(t=xs.newId()),Ga("doc","path",t),n instanceof Dr){const r=X.fromString(t,...e);return bo(r),new ot(n,null,new x(r))}{if(!(n instanceof ot||n instanceof ne))throw new N(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return bo(r),new ot(n.firestore,n instanceof ne?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="AsyncQueue";class Ta{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xu(this,"async_queue_retry"),this._c=()=>{const r=hs();r&&k(ya,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=hs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=hs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new $t;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!ze(t))throw t;k(ya,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Gt("INTERNAL UNHANDLED ERROR: ",Ea(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=ei.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&M(47125,{Pc:Ea(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Ea(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1})(n,["next","error","complete"])}class ce extends Dr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Ta,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ta(t),this._firestoreClient=void 0,await t}}}function ld(n,t){const e=typeof n=="object"?n:Ns(),r=typeof n=="string"?n:or,i=ka(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Da("firestore");o&&ud(i,...o)}return i}function Nr(n){if(n._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hd(n),n._firestoreClient}function hd(n){const t=n._freezeSettings(),e=(function(i,o,a,l){return new Dl(i,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Ju(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new rd(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bt(pt.fromBase64String(t))}catch(e){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new bt(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Rn(t,bt._jsonSchema))return bt.fromBase64String(t.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:it("string",bt._jsonSchemaVersion),bytes:it("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ut._jsonSchemaVersion}}static fromJSON(t){if(Rn(t,Ut._jsonSchema))return new Ut(t.latitude,t.longitude)}}Ut._jsonSchemaVersion="firestore/geoPoint/1.0",Ut._jsonSchema={type:it("string",Ut._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Rn(t,qt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new qt(t.vectorValues);throw new N(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qt._jsonSchemaVersion="firestore/vectorValue/1.0",qt._jsonSchema={type:it("string",qt._jsonSchemaVersion),vectorValues:it("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=/^__.*__$/;class dd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new he(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pn(t,this.data,e,this.fieldTransforms)}}class tc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new he(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ec(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ac:n})}}class hi{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new hi({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return _r(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(ec(this.Ac)&&fd.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class md{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Cr(t)}Cc(t,e,r,i=!1){return new hi({Ac:t,methodName:e,Dc:r,path:mt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nc(n){const t=n._freezeSettings(),e=Cr(n._databaseId);return new md(n._databaseId,!!t.ignoreUndefinedProperties,e)}function pd(n,t,e,r,i,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);fi("Data must be an object, but it was:",a,r);const l=rc(r,a);let h,f;if(o.merge)h=new Vt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const R=ks(t,E,e);if(!a.contains(R))throw new N(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);ic(m,R)||m.push(R)}h=new Vt(m),f=a.fieldTransforms.filter((E=>h.covers(E.field)))}else h=null,f=a.fieldTransforms;return new dd(new Rt(l),h,f)}class xr extends li{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof xr}}function gd(n,t,e,r){const i=n.Cc(1,t,e);fi("Data must be an object, but it was:",i,r);const o=[],a=Rt.empty();le(r,((h,f)=>{const m=di(t,h,e);f=Pt(f);const E=i.yc(m);if(f instanceof xr)o.push(m);else{const R=Mr(f,E);R!=null&&(o.push(m),a.set(m,R))}}));const l=new Vt(o);return new tc(a,l,i.fieldTransforms)}function _d(n,t,e,r,i,o){const a=n.Cc(1,t,e),l=[ks(t,r,e)],h=[i];if(o.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)l.push(ks(t,o[R])),h.push(o[R+1]);const f=[],m=Rt.empty();for(let R=l.length-1;R>=0;--R)if(!ic(f,l[R])){const V=l[R];let D=h[R];D=Pt(D);const O=a.yc(V);if(D instanceof xr)f.push(V);else{const C=Mr(D,O);C!=null&&(f.push(V),m.set(V,C))}}const E=new Vt(f);return new tc(m,E,a.fieldTransforms)}function Mr(n,t){if(sc(n=Pt(n)))return fi("Unsupported field value:",t,n),rc(n,t);if(n instanceof li)return(function(r,i){if(!ec(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const l of r){let h=Mr(l,i.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:fr(i.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fr(i.serializer,o)}}if(r instanceof Ut)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bt)return{bytesValue:vu(i.serializer,r._byteString)};if(r instanceof ot){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ks(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof qt)return(function(a,l){return{mapValue:{fields:{[tu]:{stringValue:eu},[ar]:{arrayValue:{values:a.toArray().map((f=>{if(typeof f!="number")throw l.Sc("VectorValues must only contain numeric values.");return js(l.serializer,f)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Ms(r)}`)})(n,t)}function rc(n,t){const e={};return Ha(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):le(n,((r,i)=>{const o=Mr(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function sc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Ut||n instanceof bt||n instanceof ot||n instanceof li||n instanceof qt)}function fi(n,t,e){if(!sc(e)||!Ka(e)){const r=Ms(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function ks(n,t,e){if((t=Pt(t))instanceof Or)return t._internalPath;if(typeof t=="string")return di(n,t);throw _r("Field path arguments must be of type string or ",n,!1,void 0,e)}const yd=new RegExp("[~\\*/\\[\\]]");function di(n,t,e){if(t.search(yd)>=0)throw _r(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Or(...t.split("."))._internalPath}catch{throw _r(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function _r(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new N(S.INVALID_ARGUMENT,l+n+h)}function ic(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Td(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ac("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Td extends oc{data(){return super.data()}}function ac(n,t){return typeof t=="string"?di(n,t):t instanceof Or?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ed{convertValue(t,e="none"){switch(oe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return le(t,((i,o)=>{r[i]=this.convertValue(o,e)})),r}convertVectorValue(t){const e=t.fields?.[ar].arrayValue?.values?.map((r=>rt(r.doubleValue)));return new qt(e)}convertGeoPoint(t){return new Ut(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ir(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(En(t));default:return null}}convertTimestamp(t){const e=se(t);return new Y(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);K(bu(r),9688,{name:t});const i=new In(r.get(1),r.get(3)),o=new x(r.popFirst(5));return i.isEqual(e)||Gt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class fn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Te extends oc{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ac("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Te._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Te._jsonSchemaVersion="firestore/documentSnapshot/1.0",Te._jsonSchema={type:it("string",Te._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class sr extends Te{data(t={}){return super.data(t)}}class Ee{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new fn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new sr(this._firestore,this._userDataWriter,r.key,r,new fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const h=new sr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new sr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new fn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:Ad(l.type),doc:h,oldIndex:f,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ee._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=xs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Ad(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n){n=kt(n,ot);const t=kt(n.firestore,ce);return od(Nr(t),n._key).then((e=>cc(t,n,e)))}Ee._jsonSchemaVersion="firestore/querySnapshot/1.0",Ee._jsonSchema={type:it("string",Ee._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};class mi extends Ed{constructor(t){super(),this.firestore=t}convertBytes(t){return new bt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,e)}}function jm(n){n=kt(n,bn);const t=kt(n.firestore,ce),e=Nr(t),r=new mi(t);return uc(n._query),ad(e,n._query).then((i=>new Ee(t,r,n,i)))}function zm(n,t,e,...r){n=kt(n,ot);const i=kt(n.firestore,ce),o=nc(i);let a;return a=typeof(t=Pt(t))=="string"||t instanceof Or?_d(o,"updateDoc",n._key,t,e,r):gd(o,"updateDoc",n._key,t),pi(i,[a.toMutation(n._key,Dt.exists(!0))])}function $m(n){return pi(kt(n.firestore,ce),[new zs(n._key,Dt.none())])}function Gm(n,t){const e=kt(n.firestore,ce),r=cd(n),i=Id(n.converter,t);return pi(e,[pd(nc(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then((()=>r))}function Km(n,...t){n=Pt(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Ia(t[r])||(e=t[r++]);const i={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Ia(t[r])){const h=t[r];t[r]=h.next?.bind(h),t[r+1]=h.error?.bind(h),t[r+2]=h.complete?.bind(h)}let o,a,l;if(n instanceof ot)a=kt(n.firestore,ce),l=wr(n._key.path),o={next:h=>{t[r]&&t[r](cc(a,n,h))},error:t[r+1],complete:t[r+2]};else{const h=kt(n,bn);a=kt(h.firestore,ce),l=h._query;const f=new mi(a);o={next:m=>{t[r]&&t[r](new Ee(a,f,h,m))},error:t[r+1],complete:t[r+2]},uc(n._query)}return(function(f,m,E,R){const V=new ci(R),D=new oi(m,V,E);return f.asyncQueue.enqueueAndForget((async()=>ri(await gr(f),D))),()=>{V.Nu(),f.asyncQueue.enqueueAndForget((async()=>si(await gr(f),D)))}})(Nr(a),l,i,o)}function pi(n,t){return(function(r,i){const o=new $t;return r.asyncQueue.enqueueAndForget((async()=>Hf(await id(r),i,o))),o.promise})(Nr(n),t)}function cc(n,t,e){const r=e.docs.get(t._key),i=new mi(n);return new Te(n,i,t._key,r,new fn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Be=i})(Ma),Sa(new Va("firestore",((r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new ce(new dl(r.getProvider("auth-internal")),new gl(a,r.getProvider("app-check-internal")),(function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new In(f.options.projectId,m)})(a,i),a);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),yn(Po,So,t),yn(Po,So,"esm2020")})();var wd="firebase",vd="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(wd,vd,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="firebasestorage.googleapis.com",hc="storageBucket",Rd=120*1e3,Pd=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends ba{constructor(t,e,r=0){super(ds(t),`Firebase Storage: ${e} (${ds(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ds(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function ds(n){return"storage/"+n}function gi(){const n="An unknown error occurred, please check the error payload for server response.";return new nt(et.UNKNOWN,n)}function Sd(n){return new nt(et.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Vd(n){return new nt(et.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Cd(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new nt(et.UNAUTHENTICATED,n)}function bd(){return new nt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kd(n){return new nt(et.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Dd(){return new nt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Nd(){return new nt(et.CANCELED,"User canceled the upload/download.")}function Od(n){return new nt(et.INVALID_URL,"Invalid URL '"+n+"'.")}function xd(n){return new nt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Md(){return new nt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+hc+"' property when initializing the app?")}function Ld(){return new nt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Fd(){return new nt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ud(n){return new nt(et.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ds(n){return new nt(et.INVALID_ARGUMENT,n)}function fc(){return new nt(et.APP_DELETED,"The Firebase app was deleted.")}function qd(n){return new nt(et.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function _n(n,t){return new nt(et.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function un(n){throw new nt(et.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=Ct.makeFromUrl(t,e)}catch{return new Ct(t,"")}if(r.path==="")return r;throw xd(t)}static makeFromUrl(t,e){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(Q){Q.path.charAt(Q.path.length-1)==="/"&&(Q.path_=Q.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),h={bucket:1,path:3};function f(Q){Q.path_=decodeURIComponent(Q.path)}const m="v[A-Za-z0-9_]+",E=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",V=new RegExp(`^https?://${E}/${m}/b/${i}/o${R}`,"i"),D={bucket:1,path:3},O=e===lc?"(?:storage.googleapis.com|storage.cloud.google.com)":e,C="([^?#]*)",z=new RegExp(`^https?://${O}/${i}/${C}`,"i"),q=[{regex:l,indices:h,postModify:o},{regex:V,indices:D,postModify:f},{regex:z,indices:{bucket:1,path:2},postModify:f}];for(let Q=0;Q<q.length;Q++){const at=q[Q],Z=at.regex.exec(t);if(Z){const T=Z[at.indices.bucket];let p=Z[at.indices.path];p||(p=""),r=new Ct(T,p),at.postModify(r);break}}if(r==null)throw Od(t);return r}}class Bd{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n,t,e){let r=1,i=null,o=null,a=!1,l=0;function h(){return l===2}let f=!1;function m(...C){f||(f=!0,t.apply(null,C))}function E(C){i=setTimeout(()=>{i=null,n(V,h())},C)}function R(){o&&clearTimeout(o)}function V(C,...z){if(f){R();return}if(C){R(),m.call(null,C,...z);return}if(h()||a){R(),m.call(null,C,...z);return}r<64&&(r*=2);let q;l===1?(l=2,q=0):q=(r+Math.random())*1e3,E(q)}let D=!1;function O(C){D||(D=!0,R(),!f&&(i!==null?(C||(l=2),clearTimeout(i),E(0)):C||(l=1)))}return E(0),o=setTimeout(()=>{a=!0,O(!0)},e),O}function zd(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n){return n!==void 0}function Gd(n){return typeof n=="object"&&!Array.isArray(n)}function _i(n){return typeof n=="string"||n instanceof String}function Aa(n){return yi()&&n instanceof Blob}function yi(){return typeof Blob<"u"}function wa(n,t,e,r){if(r<t)throw Ds(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Ds(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function dc(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const i=t(r)+"="+t(n[r]);e=e+i+"&"}return e=e.slice(0,-1),e}var Ie;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ie||(Ie={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,e,r,i,o,a,l,h,f,m,E,R=!0,V=!1){this.url_=t,this.method_=e,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=m,this.connectionFactory_=E,this.retry=R,this.isUsingEmulator=V,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,O)=>{this.resolve_=D,this.reject_=O,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Yn(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const h=l.loaded,f=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===Ie.NO_ERROR,h=o.getStatus();if(!l||Kd(h,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===Ie.ABORT;r(!1,new Yn(!1,null,m));return}const f=this.successCodes_.indexOf(h)!==-1;r(!0,new Yn(f,o))})},e=(r,i)=>{const o=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(l,l.getResponse());$d(h)?o(h):o()}catch(h){a(h)}else if(l!==null){const h=gi();h.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,h)):a(h)}else if(i.canceled){const h=this.appDelete_?fc():Nd();a(h)}else{const h=Dd();a(h)}};this.canceled_?e(!1,new Yn(!1,null,!0)):this.backoffId_=jd(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&zd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Yn{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function Hd(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function Wd(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Xd(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Yd(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Jd(n,t,e,r,i,o,a=!0,l=!1){const h=dc(n.urlParams),f=n.url+h,m=Object.assign({},n.headers);return Xd(m,t),Hd(m,e),Wd(m,o),Yd(m,r),new Qd(f,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function tm(...n){const t=Zd();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(yi())return new Blob(n);throw new nt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function em(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n){if(typeof atob>"u")throw Ud("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ms{constructor(t,e){this.data=t,this.contentType=e||null}}function rm(n,t){switch(n){case Mt.RAW:return new ms(mc(t));case Mt.BASE64:case Mt.BASE64URL:return new ms(pc(n,t));case Mt.DATA_URL:return new ms(im(t),om(t))}throw gi()}function mc(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,a=n.charCodeAt(++e);r=65536|(o&1023)<<10|a&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function sm(n){let t;try{t=decodeURIComponent(n)}catch{throw _n(Mt.DATA_URL,"Malformed data URL.")}return mc(t)}function pc(n,t){switch(n){case Mt.BASE64:{const i=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(i||o)throw _n(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Mt.BASE64URL:{const i=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(i||o)throw _n(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=nm(t)}catch(i){throw i.message.includes("polyfill")?i:_n(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}class gc{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw _n(Mt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=am(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function im(n){const t=new gc(n);return t.base64?pc(Mt.BASE64,t.rest):sm(t.rest)}function om(n){return new gc(n).contentType}function am(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e){let r=0,i="";Aa(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(Aa(this.data_)){const r=this.data_,i=em(r,t,e);return i===null?null:new Zt(i)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new Zt(r,!0)}}static getBlob(...t){if(yi()){const e=t.map(r=>r instanceof Zt?r.data_:r);return new Zt(tm.apply(null,e))}else{const e=t.map(a=>_i(a)?rm(Mt.RAW,a).data:a.data_);let r=0;e.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let o=0;return e.forEach(a=>{for(let l=0;l<a.length;l++)i[o++]=a[l]}),new Zt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n){let t;try{t=JSON.parse(n)}catch{return null}return Gd(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function cm(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function yc(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(n,t){return t}class At{constructor(t,e,r,i){this.server=t,this.local=e||t,this.writable=!!r,this.xform=i||lm}}let Jn=null;function hm(n){return!_i(n)||n.length<2?n:yc(n)}function Tc(){if(Jn)return Jn;const n=[];n.push(new At("bucket")),n.push(new At("generation")),n.push(new At("metageneration")),n.push(new At("name","fullPath",!0));function t(o,a){return hm(a)}const e=new At("name");e.xform=t,n.push(e);function r(o,a){return a!==void 0?Number(a):a}const i=new At("size");return i.xform=r,n.push(i),n.push(new At("timeCreated")),n.push(new At("updated")),n.push(new At("md5Hash",null,!0)),n.push(new At("cacheControl",null,!0)),n.push(new At("contentDisposition",null,!0)),n.push(new At("contentEncoding",null,!0)),n.push(new At("contentLanguage",null,!0)),n.push(new At("contentType",null,!0)),n.push(new At("metadata","customMetadata",!0)),Jn=n,Jn}function fm(n,t){function e(){const r=n.bucket,i=n.fullPath,o=new Ct(r,i);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function dm(n,t,e){const r={};r.type="file";const i=e.length;for(let o=0;o<i;o++){const a=e[o];r[a.local]=a.xform(r,t[a.server])}return fm(r,n),r}function Ec(n,t,e){const r=_c(t);return r===null?null:dm(n,r,e)}function mm(n,t,e,r){const i=_c(t);if(i===null||!_i(i.downloadTokens))return null;const o=i.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(f=>{const m=n.bucket,E=n.fullPath,R="/b/"+a(m)+"/o/"+a(E),V=Lr(R,e,r),D=dc({alt:"media",token:f});return V+D})[0]}function pm(n,t){const e={},r=t.length;for(let i=0;i<r;i++){const o=t[i];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class Ti{constructor(t,e,r,i){this.url=t,this.method=e,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n){if(!n)throw gi()}function gm(n,t){function e(r,i){const o=Ec(n,i,t);return Ic(o!==null),o}return e}function _m(n,t){function e(r,i){const o=Ec(n,i,t);return Ic(o!==null),mm(o,i,n.host,n._protocol)}return e}function Ac(n){function t(e,r){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=bd():i=Cd():e.getStatus()===402?i=Vd(n.bucket):e.getStatus()===403?i=kd(n.path):i=r,i.status=e.getStatus(),i.serverResponse=r.serverResponse,i}return t}function wc(n){const t=Ac(n);function e(r,i){let o=t(r,i);return r.getStatus()===404&&(o=Sd(n.path)),o.serverResponse=i.serverResponse,o}return e}function ym(n,t,e){const r=t.fullServerUrl(),i=Lr(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,l=new Ti(i,o,_m(n,e),a);return l.errorHandler=wc(t),l}function Tm(n,t){const e=t.fullServerUrl(),r=Lr(e,n.host,n._protocol),i="DELETE",o=n.maxOperationRetryTime;function a(h,f){}const l=new Ti(r,i,a,o);return l.successCodes=[200,204],l.errorHandler=wc(t),l}function Em(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function Im(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=Em(null,t)),r}function Am(n,t,e,r,i){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let q="";for(let Q=0;Q<2;Q++)q=q+Math.random().toString().slice(2);return q}const h=l();a["Content-Type"]="multipart/related; boundary="+h;const f=Im(t,r,i),m=pm(f,e),E="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+h+`\r
Content-Type: `+f.contentType+`\r
\r
`,R=`\r
--`+h+"--",V=Zt.getBlob(E,r,R);if(V===null)throw Ld();const D={name:f.fullPath},O=Lr(o,n.host,n._protocol),C="POST",z=n.maxUploadRetryTime,$=new Ti(O,C,gm(n,e),z);return $.urlParams=D,$.headers=a,$.body=V.uploadData(),$.errorHandler=Ac(t),$}class wm{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ie.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ie.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ie.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,i,o){if(this.sent_)throw un("cannot .send() more than once");if(yr(t)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw un("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw un("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw un("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw un("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class vm extends wm{initXhr(){this.xhr_.responseType="text"}}function Ei(){return new vm}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e){this._service=t,e instanceof Ct?this._location=e:this._location=Ct.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ve(t,e)}get root(){const t=new Ct(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yc(this._location.path)}get storage(){return this._service}get parent(){const t=um(this._location.path);if(t===null)return null;const e=new Ct(this._location.bucket,t);return new ve(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw qd(t)}}function Rm(n,t,e){n._throwIfRoot("uploadBytes");const r=Am(n.storage,n._location,Tc(),new Zt(t,!0),e);return n.storage.makeRequestWithTokens(r,Ei).then(i=>({metadata:i,ref:n}))}function Pm(n){n._throwIfRoot("getDownloadURL");const t=ym(n.storage,n._location,Tc());return n.storage.makeRequestWithTokens(t,Ei).then(e=>{if(e===null)throw Fd();return e})}function Sm(n){n._throwIfRoot("deleteObject");const t=Tm(n.storage,n._location);return n.storage.makeRequestWithTokens(t,Ei)}function Vm(n,t){const e=cm(n._location.path,t),r=new Ct(n._location.bucket,e);return new ve(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(n){return/^[A-Za-z]+:\/\//.test(n)}function bm(n,t){return new ve(n,t)}function vc(n,t){if(n instanceof Ii){const e=n;if(e._bucket==null)throw Md();const r=new ve(e,e._bucket);return t!=null?vc(r,t):r}else return t!==void 0?Vm(n,t):n}function km(n,t){if(t&&Cm(t)){if(n instanceof Ii)return bm(n,t);throw Ds("To use ref(service, url), the first argument must be a Storage instance.")}else return vc(n,t)}function va(n,t){const e=t?.[hc];return e==null?null:Ct.makeFromBucketSpec(e,n)}function Dm(n,t,e,r={}){n.host=`${t}:${e}`;const i=yr(t);i&&(Na(`https://${n.host}/b`),Oa("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:xa(o,n.app.options.projectId))}class Ii{constructor(t,e,r,i,o,a=!1){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=lc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Rd,this._maxUploadRetryTime=Pd,this._requests=new Set,i!=null?this._bucket=Ct.makeFromBucketSpec(i,this._host):this._bucket=va(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,t):this._bucket=va(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){wa("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){wa("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(Ca(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ve(this,t)}_makeRequest(t,e,r,i,o=!0){if(this._deleted)return new Bd(fc());{const a=Jd(t,this._appId,r,i,e,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,i).getPromise()}}const Ra="@firebase/storage",Pa="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="storage";function Qm(n,t,e){return n=Pt(n),Rm(n,t,e)}function Hm(n){return n=Pt(n),Pm(n)}function Wm(n){return n=Pt(n),Sm(n)}function Xm(n,t){return n=Pt(n),km(n,t)}function Nm(n=Ns(),t){n=Pt(n);const r=ka(n,Rc).getImmediate({identifier:t}),i=Da("storage");return i&&Om(r,...i),r}function Om(n,t,e,r={}){Dm(n,t,e,r)}function xm(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Ii(e,r,i,t,Ma)}function Mm(){Sa(new Va(Rc,xm,"PUBLIC").setMultipleInstances(!0)),yn(Ra,Pa,""),yn(Ra,Pa,"esm2020")}Mm();const Lm={apiKey:"AIzaSyBLHkUNwVE3JYdRdtihYp1iSJQcpaKFMog",authDomain:"lunas-snack-bar.firebaseapp.com",projectId:"lunas-snack-bar",appId:"1:652966154220:web:95203befeb9947579c3ac9",storageBucket:"lunas-snack-bar.firebasestorage.app"},Ai=ul().length?Ns():cl(Lm),Ym=ll(Ai),Jm=ld(Ai),Zm=Nm(Ai);export{cd as a,Bm as b,qm as c,Jm as d,Wm as e,Hm as f,jm as g,Gm as h,Ym as i,$m as j,zm as k,Km as o,Xm as r,Zm as s,Qm as u};
