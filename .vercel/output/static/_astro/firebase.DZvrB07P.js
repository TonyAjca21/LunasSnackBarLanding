import{r as En,L as oc,_ as Va,g as Pt,F as Ca,a as zt,b as xs,c as ba,d as ka,i as Ir,p as Da,u as Na,e as ac,f as xa,h as uc,j as lc,k as Oa,C as La,S as Ma,l as cc,m as hc,n as fc}from"./index-36fcbc82.CfPh7_nC.js";var dc="firebase",mc="12.8.0";/**
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
 */En(dc,mc,"app");var Po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ee,Fa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function _(){}_.prototype=p.prototype,T.F=p.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(E,y,w){for(var g=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)g[wt-2]=arguments[wt];return p.prototype[y].apply(E,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,_){_||(_=0);const E=Array(16);if(typeof p=="string")for(var y=0;y<16;++y)E[y]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(y=0;y<16;++y)E[y]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=T.g[0],_=T.g[1],y=T.g[2];let w=T.g[3],g;g=p+(w^_&(y^w))+E[0]+3614090360&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+E[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+E[2]+606105819&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+E[3]+3250441966&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+E[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+E[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+E[6]+2821735955&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+E[7]+4249261313&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+E[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+E[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+E[10]+4294925233&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+E[11]+2304563134&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(w^_&(y^w))+E[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(y^p&(_^y))+E[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=y+(_^w&(p^_))+E[14]+2792965006&4294967295,y=w+(g<<17&4294967295|g>>>15),g=_+(p^y&(w^p))+E[15]+1236535329&4294967295,_=y+(g<<22&4294967295|g>>>10),g=p+(y^w&(_^y))+E[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+E[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+E[11]+643717713&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+E[0]+3921069994&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+E[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+E[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+E[15]+3634488961&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+E[4]+3889429448&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+E[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+E[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+E[3]+4107603335&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+E[8]+1163531501&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(y^w&(_^y))+E[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^y&(p^_))+E[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=y+(p^_&(w^p))+E[7]+1735328473&4294967295,y=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(y^w))+E[12]+2368359562&4294967295,_=y+(g<<20&4294967295|g>>>12),g=p+(_^y^w)+E[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+E[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+E[11]+1839030562&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+E[14]+4259657740&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+E[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+E[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+E[7]+4139469664&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+E[10]+3200236656&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+E[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+E[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+E[3]+3572445317&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+E[6]+76029189&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(_^y^w)+E[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^y)+E[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=y+(w^p^_)+E[15]+530742520&4294967295,y=w+(g<<16&4294967295|g>>>16),g=_+(y^w^p)+E[2]+3299628645&4294967295,_=y+(g<<23&4294967295|g>>>9),g=p+(y^(_|~w))+E[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+E[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+E[14]+2878612391&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+E[5]+4237533241&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+E[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+E[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+E[10]+4293915773&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+E[1]+2240044497&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+E[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+E[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+E[6]+2734768916&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+E[13]+1309151649&4294967295,_=y+(g<<21&4294967295|g>>>11),g=p+(y^(_|~w))+E[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~y))+E[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=y+(p^(w|~_))+E[2]+718787259&4294967295,y=w+(g<<15&4294967295|g>>>17),g=_+(w^(y|~p))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(y+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+y&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.v=function(T,p){p===void 0&&(p=T.length);const _=p-this.blockSize,E=this.C;let y=this.h,w=0;for(;w<p;){if(y==0)for(;w<=_;)s(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<p;)if(E[y++]=T.charCodeAt(w++),y==this.blockSize){s(this,E),y=0;break}}else for(;w<p;)if(E[y++]=T[w++],y==this.blockSize){s(this,E),y=0;break}}this.h=y,this.o+=p},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;p=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=p&255,p/=256;for(this.v(T),T=Array(16),p=0,_=0;_<4;++_)for(let E=0;E<32;E+=8)T[p++]=this.g[_]>>>E&255;return T};function o(T,p){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=p(T)}function a(T,p){this.h=p;const _=[];let E=!0;for(let y=T.length-1;y>=0;y--){const w=T[y]|0;E&&w==p||(_[y]=w,E=!1)}this.g=_}var c={};function h(T){return-128<=T&&T<128?o(T,function(p){return new a([p|0],p<0?-1:0)}):new a([T|0],T<0?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return I;if(T<0)return b(f(-T));const p=[];let _=1;for(let E=0;T>=_;E++)p[E]=T/_|0,_*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return b(m(T.substring(1),p));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(p,8));let E=I;for(let w=0;w<T.length;w+=8){var y=Math.min(8,T.length-w);const g=parseInt(T.substring(w,w+y),p);y<8?(y=f(Math.pow(p,y)),E=E.j(y).add(f(g))):(E=E.j(_),E=E.add(f(g)))}return E}var I=h(0),R=h(1),V=h(16777216);n=a.prototype,n.m=function(){if(x(this))return-b(this).m();let T=0,p=1;for(let _=0;_<this.g.length;_++){const E=this.i(_);T+=(E>=0?E:4294967296+E)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(x(this))return"-"+b(this).toString(T);const p=f(Math.pow(T,6));var _=this;let E="";for(;;){const y=W(_,p).g;_=j(_,y.j(p));let w=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=y,D(_))return w+E;for(;w.length<6;)w="0"+w;E=w+E}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(let p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function x(T){return T.h==-1}n.l=function(T){return T=j(this,T),x(T)?-1:D(T)?0:1};function b(T){const p=T.g.length,_=[];for(let E=0;E<p;E++)_[E]=~T.g[E];return new a(_,~T.h).add(R)}n.abs=function(){return x(this)?b(this):this},n.add=function(T){const p=Math.max(this.g.length,T.g.length),_=[];let E=0;for(let y=0;y<=p;y++){let w=E+(this.i(y)&65535)+(T.i(y)&65535),g=(w>>>16)+(this.i(y)>>>16)+(T.i(y)>>>16);E=g>>>16,w&=65535,g&=65535,_[y]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(T,p){return T.add(b(p))}n.j=function(T){if(D(this)||D(T))return I;if(x(this))return x(T)?b(this).j(b(T)):b(b(this).j(T));if(x(T))return b(this.j(b(T)));if(this.l(V)<0&&T.l(V)<0)return f(this.m()*T.m());const p=this.g.length+T.g.length,_=[];for(var E=0;E<2*p;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(let y=0;y<T.g.length;y++){const w=this.i(E)>>>16,g=this.i(E)&65535,wt=T.i(y)>>>16,fe=T.i(y)&65535;_[2*E+2*y]+=g*fe,G(_,2*E+2*y),_[2*E+2*y+1]+=w*fe,G(_,2*E+2*y+1),_[2*E+2*y+1]+=g*wt,G(_,2*E+2*y+1),_[2*E+2*y+2]+=w*wt,G(_,2*E+2*y+2)}for(T=0;T<p;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=p;T<2*p;T++)_[T]=0;return new a(_,0)};function G(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function $(T,p){this.g=T,this.h=p}function W(T,p){if(D(p))throw Error("division by zero");if(D(T))return new $(I,I);if(x(T))return p=W(b(T),p),new $(b(p.g),b(p.h));if(x(p))return p=W(T,b(p)),new $(b(p.g),p.h);if(T.g.length>30){if(x(T)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,E=p;E.l(T)<=0;)_=pt(_),E=pt(E);var y=nt(_,1),w=nt(E,1);for(E=nt(E,2),_=nt(_,2);!D(E);){var g=w.add(E);g.l(T)<=0&&(y=y.add(_),w=g),E=nt(E,1),_=nt(_,1)}return p=j(T,y.j(p)),new $(y,p)}for(y=I;T.l(p)>=0;){for(_=Math.max(1,Math.floor(T.m()/p.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),w=f(_),g=w.j(p);x(g)||g.l(T)>0;)_-=E,w=f(_),g=w.j(p);D(w)&&(w=R),y=y.add(w),T=j(T,g)}return new $(y,T)}n.B=function(T){return W(this,T).h},n.and=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<p;E++)_[E]=this.i(E)&T.i(E);return new a(_,this.h&T.h)},n.or=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<p;E++)_[E]=this.i(E)|T.i(E);return new a(_,this.h|T.h)},n.xor=function(T){const p=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<p;E++)_[E]=this.i(E)^T.i(E);return new a(_,this.h^T.h)};function pt(T){const p=T.g.length+1,_=[];for(let E=0;E<p;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(_,T.h)}function nt(T,p){const _=p>>5;p%=32;const E=T.g.length-_,y=[];for(let w=0;w<E;w++)y[w]=p>0?T.i(w+_)>>>p|T.i(w+_+1)<<32-p:T.i(w+_);return new a(y,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Fa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,ee=a}).apply(typeof Po<"u"?Po:typeof self<"u"?self:typeof window<"u"?window:{});var Hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ua,hn,Ba,nr,_s,qa,ja,za;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hn=="object"&&Hn];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var v=i[d];if(!(v in l))break t;l=l[v]}i=i[i.length-1],d=l[i],u=u(d),u!=d&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(u){var l=[],d;for(d in u)Object.prototype.hasOwnProperty.call(u,d)&&l.push([d,u[d]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function h(i,u,l){return i.call.apply(i.bind,arguments)}function f(i,u,l){return f=h,f.apply(null,arguments)}function m(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function I(i,u){function l(){}l.prototype=u.prototype,i.Z=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(d,v,A){for(var C=Array(arguments.length-2),U=2;U<arguments.length;U++)C[U-2]=arguments[U];return u.prototype[v].apply(d,C)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function V(i){const u=i.length;if(u>0){const l=Array(u);for(let d=0;d<u;d++)l[d]=i[d];return l}return[]}function D(i,u){for(let d=1;d<arguments.length;d++){const v=arguments[d];var l=typeof v;if(l=l!="object"?l:v?Array.isArray(v)?"array":l:"null",l=="array"||l=="object"&&typeof v.length=="number"){l=i.length||0;const A=v.length||0;i.length=l+A;for(let C=0;C<A;C++)i[l+C]=v[C]}else i.push(v)}}class x{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function b(i){a.setTimeout(()=>{throw i},0)}function j(){var i=T;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,l){const d=$.get();d.set(u,l),this.h?this.h.next=d:this.g=d,this.h=d}}var $=new x(()=>new W,i=>i.reset());class W{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,nt=!1,T=new G,p=()=>{const i=Promise.resolve(void 0);pt=()=>{i.then(_)}};function _(){for(var i;i=j();){try{i.h.call(i.g)}catch(l){b(l)}var u=$;u.j(i),u.h<100&&(u.h++,i.next=u.g,u.g=i)}nt=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};a.addEventListener("test",l,u),a.removeEventListener("test",l,u)}catch{}return i})();function g(i){return/^[\s\xa0]*$/.test(i)}function wt(i,u){y.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,u)}I(wt,y),wt.prototype.init=function(i,u){const l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget,u||(l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement)),this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&wt.Z.h.call(this)},wt.prototype.h=function(){wt.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var fe="closure_listenable_"+(Math.random()*1e6|0),Vl=0;function Cl(i,u,l,d,v){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!d,this.ha=v,this.key=++Vl,this.da=this.fa=!1}function xn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function On(i,u,l){for(const d in i)u.call(l,i[d],d,i)}function bl(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function Ai(i){const u={};for(const l in i)u[l]=i[l];return u}const Ri="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pi(i,u){let l,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(l in d)i[l]=d[l];for(let A=0;A<Ri.length;A++)l=Ri[A],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function Ln(i){this.src=i,this.g={},this.h=0}Ln.prototype.add=function(i,u,l,d,v){const A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);const C=qr(i,u,d,v);return C>-1?(u=i[C],l||(u.fa=!1)):(u=new Cl(u,this.src,A,!!d,v),u.fa=l,i.push(u)),u};function Br(i,u){const l=u.type;if(l in i.g){var d=i.g[l],v=Array.prototype.indexOf.call(d,u,void 0),A;(A=v>=0)&&Array.prototype.splice.call(d,v,1),A&&(xn(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function qr(i,u,l,d){for(let v=0;v<i.length;++v){const A=i[v];if(!A.da&&A.listener==u&&A.capture==!!l&&A.ha==d)return v}return-1}var jr="closure_lm_"+(Math.random()*1e6|0),zr={};function Si(i,u,l,d,v){if(Array.isArray(u)){for(let A=0;A<u.length;A++)Si(i,u[A],l,d,v);return null}return l=bi(l),i&&i[fe]?i.J(u,l,c(d)?!!d.capture:!1,v):kl(i,u,l,!1,d,v)}function kl(i,u,l,d,v,A){if(!u)throw Error("Invalid event type");const C=c(v)?!!v.capture:!!v;let U=Gr(i);if(U||(i[jr]=U=new Ln(i)),l=U.add(u,l,d,C,A),l.proxy)return l;if(d=Dl(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)w||(v=C),v===void 0&&(v=!1),i.addEventListener(u.toString(),d,v);else if(i.attachEvent)i.attachEvent(Ci(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Dl(){function i(l){return u.call(i.src,i.listener,l)}const u=Nl;return i}function Vi(i,u,l,d,v){if(Array.isArray(u))for(var A=0;A<u.length;A++)Vi(i,u[A],l,d,v);else d=c(d)?!!d.capture:!!d,l=bi(l),i&&i[fe]?(i=i.i,A=String(u).toString(),A in i.g&&(u=i.g[A],l=qr(u,l,d,v),l>-1&&(xn(u[l]),Array.prototype.splice.call(u,l,1),u.length==0&&(delete i.g[A],i.h--)))):i&&(i=Gr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=qr(u,l,d,v)),(l=i>-1?u[i]:null)&&$r(l))}function $r(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[fe])Br(u.i,i);else{var l=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(l,d,i.capture):u.detachEvent?u.detachEvent(Ci(l),d):u.addListener&&u.removeListener&&u.removeListener(d),(l=Gr(u))?(Br(l,i),l.h==0&&(l.src=null,u[jr]=null)):xn(i)}}}function Ci(i){return i in zr?zr[i]:zr[i]="on"+i}function Nl(i,u){if(i.da)i=!0;else{u=new wt(u,this);const l=i.listener,d=i.ha||i.src;i.fa&&$r(i),i=l.call(d,u)}return i}function Gr(i){return i=i[jr],i instanceof Ln?i:null}var Kr="__closure_events_fn_"+(Math.random()*1e9>>>0);function bi(i){return typeof i=="function"?i:(i[Kr]||(i[Kr]=function(u){return i.handleEvent(u)}),i[Kr])}function gt(){E.call(this),this.i=new Ln(this),this.M=this,this.G=null}I(gt,E),gt.prototype[fe]=!0,gt.prototype.removeEventListener=function(i,u,l,d){Vi(this,i,u,l,d)};function Et(i,u){var l,d=i.G;if(d)for(l=[];d;d=d.G)l.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new y(u,i);else if(u instanceof y)u.target=u.target||i;else{var v=u;u=new y(d,i),Pi(u,v)}v=!0;let A,C;if(l)for(C=l.length-1;C>=0;C--)A=u.g=l[C],v=Mn(A,d,!0,u)&&v;if(A=u.g=i,v=Mn(A,d,!0,u)&&v,v=Mn(A,d,!1,u)&&v,l)for(C=0;C<l.length;C++)A=u.g=l[C],v=Mn(A,d,!1,u)&&v}gt.prototype.N=function(){if(gt.Z.N.call(this),this.i){var i=this.i;for(const u in i.g){const l=i.g[u];for(let d=0;d<l.length;d++)xn(l[d]);delete i.g[u],i.h--}}this.G=null},gt.prototype.J=function(i,u,l,d){return this.i.add(String(i),u,!1,l,d)},gt.prototype.K=function(i,u,l,d){return this.i.add(String(i),u,!0,l,d)};function Mn(i,u,l,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();let v=!0;for(let A=0;A<u.length;++A){const C=u[A];if(C&&!C.da&&C.capture==l){const U=C.listener,at=C.ha||C.src;C.fa&&Br(i.i,C),v=U.call(at,d)!==!1&&v}}return v&&!d.defaultPrevented}function xl(i,u){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=f(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(i,u||0)}function ki(i){i.g=xl(()=>{i.g=null,i.i&&(i.i=!1,ki(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Ol extends E{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ki(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(i){E.call(this),this.h=i,this.g={}}I(Ke,E);var Di=[];function Ni(i){On(i.g,function(u,l){this.g.hasOwnProperty(l)&&$r(u)},i),i.g={}}Ke.prototype.N=function(){Ke.Z.N.call(this),Ni(this)},Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qr=a.JSON.stringify,Ll=a.JSON.parse,Ml=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function xi(){}function Oi(){}var Qe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wr(){y.call(this,"d")}I(Wr,y);function Hr(){y.call(this,"c")}I(Hr,y);var de={},Li=null;function Fn(){return Li=Li||new gt}de.Ia="serverreachability";function Mi(i){y.call(this,de.Ia,i)}I(Mi,y);function We(i){const u=Fn();Et(u,new Mi(u))}de.STAT_EVENT="statevent";function Fi(i,u){y.call(this,de.STAT_EVENT,i),this.stat=u}I(Fi,y);function It(i){const u=Fn();Et(u,new Fi(u,i))}de.Ja="timingevent";function Ui(i,u){y.call(this,de.Ja,i),this.size=u}I(Ui,y);function He(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},u)}function Ye(){this.g=!0}Ye.prototype.ua=function(){this.g=!1};function Fl(i,u,l,d,v,A){i.info(function(){if(i.g)if(A){var C="",U=A.split("&");for(let Q=0;Q<U.length;Q++){var at=U[Q].split("=");if(at.length>1){const ct=at[0];at=at[1];const Ot=ct.split("_");C=Ot.length>=2&&Ot[1]=="type"?C+(ct+"="+at+"&"):C+(ct+"=redacted&")}}}else C=null;else C=A;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+u+`
`+l+`
`+C})}function Ul(i,u,l,d,v,A,C){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+u+`
`+l+`
`+A+" "+C})}function Se(i,u,l,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+ql(i,l)+(d?" "+d:"")})}function Bl(i,u){i.info(function(){return"TIMEOUT: "+u})}Ye.prototype.info=function(){};function ql(i,u){if(!i.g)return u;if(!u)return null;try{const A=JSON.parse(u);if(A){for(i=0;i<A.length;i++)if(Array.isArray(A[i])){var l=A[i];if(!(l.length<2)){var d=l[1];if(Array.isArray(d)&&!(d.length<1)){var v=d[0];if(v!="noop"&&v!="stop"&&v!="close")for(let C=1;C<d.length;C++)d[C]=""}}}}return Qr(A)}catch{return u}}var Un={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Bi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qi;function Yr(){}I(Yr,xi),Yr.prototype.g=function(){return new XMLHttpRequest},qi=new Yr;function Xe(i){return encodeURIComponent(String(i))}function jl(i){var u=1;i=i.split(":");const l=[];for(;u>0&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function Qt(i,u,l,d){this.j=i,this.i=u,this.l=l,this.S=d||1,this.V=new Ke(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ji}function ji(){this.i=null,this.g="",this.h=!1}var zi={},Xr={};function Jr(i,u,l){i.M=1,i.A=qn(xt(u)),i.u=l,i.R=!0,$i(i,null)}function $i(i,u){i.F=Date.now(),Bn(i),i.B=xt(i.A);var l=i.B,d=i.S;Array.isArray(d)||(d=[String(d)]),ro(l.i,"t",d),i.C=0,l=i.j.L,i.h=new ji,i.g=vo(i.j,l?u:null,!i.u),i.P>0&&(i.O=new Ol(f(i.Y,i,i.g),i.P)),u=i.V,l=i.g,d=i.ba;var v="readystatechange";Array.isArray(v)||(v&&(Di[0]=v.toString()),v=Di);for(let A=0;A<v.length;A++){const C=Si(l,v[A],d||u.handleEvent,!1,u.h||u);if(!C)break;u.g[C.key]=C}u=i.J?Ai(i.J):{},i.u?(i.v||(i.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,u)):(i.v="GET",i.g.ea(i.B,i.v,null,u)),We(),Fl(i.i,i.v,i.B,i.l,i.S,i.u)}Qt.prototype.ba=function(i){i=i.target;const u=this.O;u&&Yt(i)==3?u.j():this.Y(i)},Qt.prototype.Y=function(i){try{if(i==this.g)t:{const U=Yt(this.g),at=this.g.ya(),Q=this.g.ca();if(!(U<3)&&(U!=3||this.g&&(this.h.h||this.g.la()||co(this.g)))){this.K||U!=4||at==7||(at==8||Q<=0?We(3):We(2)),Zr(this);var u=this.g.ca();this.X=u;var l=zl(this);if(this.o=u==200,Ul(this.i,this.v,this.B,this.l,this.S,U,u),this.o){if(this.U&&!this.L){e:{if(this.g){var d,v=this.g;if((d=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(d)){var A=d;break e}}A=null}if(i=A)Se(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ts(this,i);else{this.o=!1,this.m=3,It(12),me(this),Je(this);break t}}if(this.R){i=!0;let ct;for(;!this.K&&this.C<l.length;)if(ct=$l(this,l),ct==Xr){U==4&&(this.m=4,It(14),i=!1),Se(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==zi){this.m=4,It(15),Se(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else Se(this.i,this.l,ct,null),ts(this,ct);if(Gi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||l.length!=0||this.h.h||(this.m=1,It(16),i=!1),this.o=this.o&&i,!i)Se(this.i,this.l,l,"[Invalid Chunked Response]"),me(this),Je(this);else if(l.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),us(C),C.P=!0,It(11))}}else Se(this.i,this.l,l,null),ts(this,l);U==4&&me(this),this.o&&!this.K&&(U==4?yo(this.j,this):(this.o=!1,Bn(this)))}else sc(this.g),u==400&&l.indexOf("Unknown SID")>0?(this.m=3,It(12)):(this.m=0,It(13)),me(this),Je(this)}}}catch{}finally{}};function zl(i){if(!Gi(i))return i.g.la();const u=co(i.g);if(u==="")return"";let l="";const d=u.length,v=Yt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return me(i),Je(i),"";i.h.i=new a.TextDecoder}for(let A=0;A<d;A++)i.h.h=!0,l+=i.h.i.decode(u[A],{stream:!(v&&A==d-1)});return u.length=0,i.h.g+=l,i.C=0,i.h.g}function Gi(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function $l(i,u){var l=i.C,d=u.indexOf(`
`,l);return d==-1?Xr:(l=Number(u.substring(l,d)),isNaN(l)?zi:(d+=1,d+l>u.length?Xr:(u=u.slice(d,d+l),i.C=d+l,u)))}Qt.prototype.cancel=function(){this.K=!0,me(this)};function Bn(i){i.T=Date.now()+i.H,Ki(i,i.H)}function Ki(i,u){if(i.D!=null)throw Error("WatchDog timer not null");i.D=He(f(i.aa,i),u)}function Zr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Qt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Bl(this.i,this.B),this.M!=2&&(We(),It(17)),me(this),this.m=2,Je(this)):Ki(this,this.T-i)};function Je(i){i.j.I==0||i.K||yo(i.j,i)}function me(i){Zr(i);var u=i.O;u&&typeof u.dispose=="function"&&u.dispose(),i.O=null,Ni(i.V),i.g&&(u=i.g,i.g=null,u.abort(),u.dispose())}function ts(i,u){try{var l=i.j;if(l.I!=0&&(l.g==i||es(l.h,i))){if(!i.L&&es(l.h,i)&&l.I==3){try{var d=l.Ba.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)Kn(l),$n(l);else break t;as(l),It(18)}}else l.xa=v[1],0<l.xa-l.K&&v[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=He(f(l.Va,l),6e3));Hi(l.h)<=1&&l.ta&&(l.ta=void 0)}else ge(l,11)}else if((i.L||l.g==i)&&Kn(l),!g(u))for(v=l.Ba.g.parse(u),u=0;u<v.length;u++){let Q=v[u];const ct=Q[0];if(!(ct<=l.K))if(l.K=ct,Q=Q[1],l.I==2)if(Q[0]=="c"){l.M=Q[1],l.ba=Q[2];const Ot=Q[3];Ot!=null&&(l.ka=Ot,l.j.info("VER="+l.ka));const _e=Q[4];_e!=null&&(l.za=_e,l.j.info("SVER="+l.za));const Xt=Q[5];Xt!=null&&typeof Xt=="number"&&Xt>0&&(d=1.5*Xt,l.O=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Jt=i.g;if(Jt){const Wn=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wn){var A=d.h;A.g||Wn.indexOf("spdy")==-1&&Wn.indexOf("quic")==-1&&Wn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(ns(A,A.h),A.h=null))}if(d.G){const ls=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;ls&&(d.wa=ls,H(d.J,d.G,ls))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),d=l;var C=i;if(d.na=Io(d,d.L?d.ba:null,d.W),C.L){Yi(d.h,C);var U=C,at=d.O;at&&(U.H=at),U.D&&(Zr(U),Bn(U)),d.g=C}else go(d);l.i.length>0&&Gn(l)}else Q[0]!="stop"&&Q[0]!="close"||ge(l,7);else l.I==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?ge(l,7):os(l):Q[0]!="noop"&&l.l&&l.l.qa(Q),l.A=0)}}We(4)}catch{}}var Gl=class{constructor(i,u){this.g=i,this.map=u}};function Qi(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Wi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Hi(i){return i.h?1:i.g?i.g.size:0}function es(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ns(i,u){i.g?i.g.add(u):i.h=u}function Yi(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}Qi.prototype.cancel=function(){if(this.i=Xi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Xi(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.G);return u}return V(i.i)}var Ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kl(i,u){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const d=i[l].indexOf("=");let v,A=null;d>=0?(v=i[l].substring(0,d),A=i[l].substring(d+1)):v=i[l],u(v,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Wt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;i instanceof Wt?(this.l=i.l,Ze(this,i.j),this.o=i.o,this.g=i.g,tn(this,i.u),this.h=i.h,rs(this,so(i.i)),this.m=i.m):i&&(u=String(i).match(Ji))?(this.l=!1,Ze(this,u[1]||"",!0),this.o=en(u[2]||""),this.g=en(u[3]||"",!0),tn(this,u[4]),this.h=en(u[5]||"",!0),rs(this,u[6]||"",!0),this.m=en(u[7]||"")):(this.l=!1,this.i=new rn(null,this.l))}Wt.prototype.toString=function(){const i=[];var u=this.j;u&&i.push(nn(u,Zi,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(nn(u,Zi,!0),"@"),i.push(Xe(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(nn(l,l.charAt(0)=="/"?Hl:Wl,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",nn(l,Xl)),i.join("")},Wt.prototype.resolve=function(i){const u=xt(this);let l=!!i.j;l?Ze(u,i.j):l=!!i.o,l?u.o=i.o:l=!!i.g,l?u.g=i.g:l=i.u!=null;var d=i.h;if(l)tn(u,i.u);else if(l=!!i.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var v=u.h.lastIndexOf("/");v!=-1&&(d=u.h.slice(0,v+1)+d)}if(v=d,v==".."||v==".")d="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){d=v.lastIndexOf("/",0)==0,v=v.split("/");const A=[];for(let C=0;C<v.length;){const U=v[C++];U=="."?d&&C==v.length&&A.push(""):U==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),d&&C==v.length&&A.push("")):(A.push(U),d=!0)}d=A.join("/")}else d=v}return l?u.h=d:l=i.i.toString()!=="",l?rs(u,so(i.i)):l=!!i.m,l&&(u.m=i.m),u};function xt(i){return new Wt(i)}function Ze(i,u,l){i.j=l?en(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function tn(i,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);i.u=u}else i.u=null}function rs(i,u,l){u instanceof rn?(i.i=u,Jl(i.i,i.l)):(l||(u=nn(u,Yl)),i.i=new rn(u,i.l))}function H(i,u,l){i.i.set(u,l)}function qn(i){return H(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function en(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function nn(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,Ql),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Ql(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Zi=/[#\/\?@]/g,Wl=/[#\?:]/g,Hl=/[#\?]/g,Yl=/[#\?@]/g,Xl=/#/g;function rn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function pe(i){i.g||(i.g=new Map,i.h=0,i.i&&Kl(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=rn.prototype,n.add=function(i,u){pe(this),this.i=null,i=Ve(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function to(i,u){pe(i),u=Ve(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function eo(i,u){return pe(i),u=Ve(i,u),i.g.has(u)}n.forEach=function(i,u){pe(this),this.g.forEach(function(l,d){l.forEach(function(v){i.call(u,v,d,this)},this)},this)};function no(i,u){pe(i);let l=[];if(typeof u=="string")eo(i,u)&&(l=l.concat(i.g.get(Ve(i,u))));else for(i=Array.from(i.g.values()),u=0;u<i.length;u++)l=l.concat(i[u]);return l}n.set=function(i,u){return pe(this),this.i=null,i=Ve(this,i),eo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=no(this,i),i.length>0?String(i[0]):u):u};function ro(i,u,l){to(i,u),l.length>0&&(i.i=null,i.g.set(Ve(i,u),V(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(let d=0;d<u.length;d++){var l=u[d];const v=Xe(l);l=no(this,l);for(let A=0;A<l.length;A++){let C=v;l[A]!==""&&(C+="="+Xe(l[A])),i.push(C)}}return this.i=i.join("&")};function so(i){const u=new rn;return u.i=i.i,i.g&&(u.g=new Map(i.g),u.h=i.h),u}function Ve(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Jl(i,u){u&&!i.j&&(pe(i),i.i=null,i.g.forEach(function(l,d){const v=d.toLowerCase();d!=v&&(to(this,d),ro(this,v,l))},i)),i.j=u}function Zl(i,u){const l=new Ye;if(a.Image){const d=new Image;d.onload=m(Ht,l,"TestLoadImage: loaded",!0,u,d),d.onerror=m(Ht,l,"TestLoadImage: error",!1,u,d),d.onabort=m(Ht,l,"TestLoadImage: abort",!1,u,d),d.ontimeout=m(Ht,l,"TestLoadImage: timeout",!1,u,d),a.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function tc(i,u){const l=new Ye,d=new AbortController,v=setTimeout(()=>{d.abort(),Ht(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(A=>{clearTimeout(v),A.ok?Ht(l,"TestPingServer: ok",!0,u):Ht(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(v),Ht(l,"TestPingServer: error",!1,u)})}function Ht(i,u,l,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(l)}catch{}}function ec(){this.g=new Ml}function ss(i){this.i=i.Sb||null,this.h=i.ab||!1}I(ss,xi),ss.prototype.g=function(){return new jn(this.i,this.h)};function jn(i,u){gt.call(this),this.H=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(jn,gt),n=jn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=u,this.readyState=1,on(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(u.body=i),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,on(this)),this.g&&(this.readyState=3,on(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;io(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function io(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?sn(this):on(this),this.readyState==3&&io(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,sn(this))},n.Na=function(i){this.g&&(this.response=i,sn(this))},n.ga=function(){this.g&&sn(this)};function sn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,on(i)}n.setRequestHeader=function(i,u){this.A.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function on(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function oo(i){let u="";return On(i,function(l,d){u+=d,u+=":",u+=l,u+=`\r
`}),u}function is(i,u,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=oo(l),typeof i=="string"?l!=null&&Xe(l):H(i,u,l))}function Z(i){gt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(Z,gt);var nc=/^https?$/i,rc=["POST","PUT"];n=Z.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,u,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qi.g(),this.g.onreadystatechange=R(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(A){ao(this,A);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)l.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())l.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),v=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(rc,u,void 0)>=0)||d||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of l)this.g.setRequestHeader(A,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(A){ao(this,A)}};function ao(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.o=5,uo(i),zn(i)}function uo(i){i.A||(i.A=!0,Et(i,"complete"),Et(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Et(this,"complete"),Et(this,"abort"),zn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zn(this,!0)),Z.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?lo(this):this.Xa())},n.Xa=function(){lo(this)};function lo(i){if(i.h&&typeof o<"u"){if(i.v&&Yt(i)==4)setTimeout(i.Ca.bind(i),0);else if(Et(i,"readystatechange"),Yt(i)==4){i.h=!1;try{const A=i.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var d;if(d=A===0){let C=String(i.D).match(Ji)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),d=!nc.test(C?C.toLowerCase():"")}l=d}if(l)Et(i,"complete"),Et(i,"success");else{i.o=6;try{var v=Yt(i)>2?i.g.statusText:""}catch{v=""}i.l=v+" ["+i.ca()+"]",uo(i)}}finally{zn(i)}}}}function zn(i,u){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,u||Et(i,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Yt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Yt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Ll(u)}};function co(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function sc(i){const u={};i=(i.g&&Yt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(g(i[d]))continue;var l=jl(i[d]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=u[v]||[];u[v]=A,A.push(l)}bl(u,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function an(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function ho(i){this.za=0,this.i=[],this.j=new Ye,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=an("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=an("baseRetryDelayMs",5e3,i),this.Za=an("retryDelaySeedMs",1e4,i),this.Ta=an("forwardChannelMaxRetries",2,i),this.va=an("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Qi(i&&i.concurrentRequestLimit),this.Ba=new ec,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ho.prototype,n.ka=8,n.I=1,n.connect=function(i,u,l,d){It(0),this.W=i,this.H=u||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.J=Io(this,null,this.W),Gn(this)};function os(i){if(fo(i),i.I==3){var u=i.V++,l=xt(i.J);if(H(l,"SID",i.M),H(l,"RID",u),H(l,"TYPE","terminate"),un(i,l),u=new Qt(i,i.j,u),u.M=2,u.A=qn(xt(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=u.A,l=!0),l||(u.g=vo(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Bn(u)}Eo(i)}function $n(i){i.g&&(us(i),i.g.cancel(),i.g=null)}function fo(i){$n(i),i.v&&(a.clearTimeout(i.v),i.v=null),Kn(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Gn(i){if(!Wi(i.h)&&!i.m){i.m=!0;var u=i.Ea;pt||p(),nt||(pt(),nt=!0),T.add(u,i),i.D=0}}function ic(i,u){return Hi(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=u.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=He(f(i.Ea,i,u),To(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const v=new Qt(this,this.j,i);let A=this.o;if(this.U&&(A?(A=Ai(A),Pi(A,this.U)):A=this.U),this.u!==null||this.R||(v.J=A,A=null),this.S)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,u>4096){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=po(this,v,u),l=xt(this.J),H(l,"RID",i),H(l,"CVER",22),this.G&&H(l,"X-HTTP-Session-Id",this.G),un(this,l),A&&(this.R?u="headers="+Xe(oo(A))+"&"+u:this.u&&is(l,this.u,A)),ns(this.h,v),this.Ra&&H(l,"TYPE","init"),this.S?(H(l,"$req",u),H(l,"SID","null"),v.U=!0,Jr(v,l,null)):Jr(v,l,u),this.I=2}}else this.I==3&&(i?mo(this,i):this.i.length==0||Wi(this.h)||mo(this))};function mo(i,u){var l;u?l=u.l:l=i.V++;const d=xt(i.J);H(d,"SID",i.M),H(d,"RID",l),H(d,"AID",i.K),un(i,d),i.u&&i.o&&is(d,i.u,i.o),l=new Qt(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),u&&(i.i=u.G.concat(i.i)),u=po(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),ns(i.h,l),Jr(l,d,u)}function un(i,u){i.H&&On(i.H,function(l,d){H(u,d,l)}),i.l&&On({},function(l,d){H(u,d,l)})}function po(i,u,l){l=Math.min(i.i.length,l);const d=i.l?f(i.l.Ka,i.l,i):null;t:{var v=i.i;let U=-1;for(;;){const at=["count="+l];U==-1?l>0?(U=v[0].g,at.push("ofs="+U)):U=0:at.push("ofs="+U);let Q=!0;for(let ct=0;ct<l;ct++){var A=v[ct].g;const Ot=v[ct].map;if(A-=U,A<0)U=Math.max(0,v[ct].g-100),Q=!1;else try{A="req"+A+"_"||"";try{var C=Ot instanceof Map?Ot:Object.entries(Ot);for(const[_e,Xt]of C){let Jt=Xt;c(Xt)&&(Jt=Qr(Xt)),at.push(A+_e+"="+encodeURIComponent(Jt))}}catch(_e){throw at.push(A+"type="+encodeURIComponent("_badmap")),_e}}catch{d&&d(Ot)}}if(Q){C=at.join("&");break t}}C=void 0}return i=i.i.splice(0,l),u.G=i,C}function go(i){if(!i.g&&!i.v){i.Y=1;var u=i.Da;pt||p(),nt||(pt(),nt=!0),T.add(u,i),i.A=0}}function as(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=He(f(i.Da,i),To(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,_o(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=He(f(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,It(10),$n(this),_o(this))};function us(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function _o(i){i.g=new Qt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var u=xt(i.na);H(u,"RID","rpc"),H(u,"SID",i.M),H(u,"AID",i.K),H(u,"CI",i.F?"0":"1"),!i.F&&i.ia&&H(u,"TO",i.ia),H(u,"TYPE","xmlhttp"),un(i,u),i.u&&i.o&&is(u,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=qn(xt(u)),l.u=null,l.R=!0,$i(l,i)}n.Va=function(){this.C!=null&&(this.C=null,$n(this),as(this),It(19))};function Kn(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function yo(i,u){var l=null;if(i.g==u){Kn(i),us(i),i.g=null;var d=2}else if(es(i.h,u))l=u.G,Yi(i.h,u),d=1;else return;if(i.I!=0){if(u.o)if(d==1){l=u.u?u.u.length:0,u=Date.now()-u.F;var v=i.D;d=Fn(),Et(d,new Ui(d,l)),Gn(i)}else go(i);else if(v=u.m,v==3||v==0&&u.X>0||!(d==1&&ic(i,u)||d==2&&as(i)))switch(l&&l.length>0&&(u=i.h,u.i=u.i.concat(l)),v){case 1:ge(i,5);break;case 4:ge(i,10);break;case 3:ge(i,6);break;default:ge(i,2)}}}function To(i,u){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*u}function ge(i,u){if(i.j.info("Error code "+u),u==2){var l=f(i.bb,i),d=i.Ua;const v=!d;d=new Wt(d||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ze(d,"https"),qn(d),v?Zl(d.toString(),l):tc(d.toString(),l)}else It(2);i.I=0,i.l&&i.l.pa(u),Eo(i),fo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Eo(i){if(i.I=0,i.ja=[],i.l){const u=Xi(i.h);(u.length!=0||i.i.length!=0)&&(D(i.ja,u),D(i.ja,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.oa()}}function Io(i,u,l){var d=l instanceof Wt?xt(l):new Wt(l);if(d.g!="")u&&(d.g=u+"."+d.g),tn(d,d.u);else{var v=a.location;d=v.protocol,u=u?u+"."+v.hostname:v.hostname,v=+v.port;const A=new Wt(null);d&&Ze(A,d),u&&(A.g=u),v&&tn(A,v),l&&(A.h=l),d=A}return l=i.G,u=i.wa,l&&u&&H(d,l,u),H(d,"VER",i.ka),un(i,d),d}function vo(i,u,l){if(u&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Aa&&!i.ma?new Z(new ss({ab:l})):new Z(i.ma),u.Fa(i.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wo(){}n=wo.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Qn(){}Qn.prototype.g=function(i,u){return new St(i,u)};function St(i,u){gt.call(this),this.g=new ho(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(i?i["X-WebChannel-Client-Profile"]=u.sa:i={"X-WebChannel-Client-Profile":u.sa}),this.g.U=i,(i=u&&u.Qb)&&!g(i)&&(this.g.u=i),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.G=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ce(this)}I(St,gt),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){os(this.g)},St.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=Qr(i),i=l);u.i.push(new Gl(u.Ya++,i)),u.I==3&&Gn(u)},St.prototype.N=function(){this.g.l=null,delete this.j,os(this.g),delete this.g,St.Z.N.call(this)};function Ao(i){Wr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}I(Ao,Wr);function Ro(){Hr.call(this),this.status=1}I(Ro,Hr);function Ce(i){this.g=i}I(Ce,wo),Ce.prototype.ra=function(){Et(this.g,"a")},Ce.prototype.qa=function(i){Et(this.g,new Ao(i))},Ce.prototype.pa=function(i){Et(this.g,new Ro)},Ce.prototype.oa=function(){Et(this.g,"b")},Qn.prototype.createWebChannel=Qn.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,za=function(){return new Qn},ja=function(){return Fn()},qa=de,_s={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Un.NO_ERROR=0,Un.TIMEOUT=8,Un.HTTP_ERROR=6,nr=Un,Bi.COMPLETE="complete",Ba=Bi,Oi.EventType=Qe,Qe.OPEN="a",Qe.CLOSE="b",Qe.ERROR="c",Qe.MESSAGE="d",gt.prototype.listen=gt.prototype.J,hn=Oi,Z.prototype.listenOnce=Z.prototype.K,Z.prototype.getLastError=Z.prototype.Ha,Z.prototype.getLastErrorCode=Z.prototype.ya,Z.prototype.getStatus=Z.prototype.ca,Z.prototype.getResponseJson=Z.prototype.La,Z.prototype.getResponseText=Z.prototype.la,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Fa,Ua=Z}).apply(typeof Hn<"u"?Hn:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let je="12.8.0";function pc(n){je=n}/**
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
 */const ve=new oc("@firebase/firestore");function be(){return ve.logLevel}function k(n,...t){if(ve.logLevel<=zt.DEBUG){const e=t.map(Os);ve.debug(`Firestore (${je}): ${n}`,...e)}}function Gt(n,...t){if(ve.logLevel<=zt.ERROR){const e=t.map(Os);ve.error(`Firestore (${je}): ${n}`,...e)}}function Le(n,...t){if(ve.logLevel<=zt.WARN){const e=t.map(Os);ve.warn(`Firestore (${je}): ${n}`,...e)}}function Os(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,$a(n,r,e)}function $a(n,t,e){let r=`FIRESTORE (${je}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Gt(r),new Error(r)}function K(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||$a(t,s,r)}function F(n,t){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ca{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ga{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class gc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(yt.UNAUTHENTICATED)))}shutdown(){}}class _c{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class yc{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new $t,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new $t)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new Ga(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new yt(t)}}class Tc{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Ec{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Tc(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class So{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ic{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Va(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new So(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new So(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function vc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Ls{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=vc(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function ys(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return cs(s)===cs(o)?B(s,o):cs(s)?1:-1}return B(n.length,t.length)}const wc=55296,Ac=57343;function cs(n){const t=n.charCodeAt(0);return t>=wc&&t<=Ac}function Me(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
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
 */const Vo="__name__";class Lt{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Lt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Lt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Lt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=Lt.isNumericId(t),s=Lt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Lt.extractNumericId(t).compare(Lt.extractNumericId(e)):ys(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ee.fromString(t.substring(4,t.length-2))}}class Y extends Lt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const Rc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Lt{construct(t,e,r){return new dt(t,e,r)}static isValidIdentifier(t){return Rc.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vo}static keyField(){return new dt([Vo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Y.fromString(t))}static fromName(t){return new O(Y.fromString(t).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Y(t.slice()))}}/**
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
 */function Ka(n,t,e){if(!e)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Pc(n,t,e,r){if(t===!0&&r===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Co(n){if(!O.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bo(n){if(O.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qa(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function kt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ms(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function it(n,t){const e={typeString:n};return t&&(e.value=t),e}function Vn(n,t){if(!Qa(n))throw new N(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(S.INVALID_ARGUMENT,e);return!0}/**
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
 */const ko=-62135596800,Do=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Do);return new X(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ko)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Do}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Vn(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ko;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:it("string",X._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
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
 */class M{static fromTimestamp(t){return new M(t)}static min(){return new M(new X(0,0))}static max(){return new M(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const In=-1;function Sc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=M.fromTimestamp(r===1e9?new X(e+1,0):new X(e,r));return new re(s,O.empty(),t)}function Vc(n){return new re(n.readTime,n.key,In)}class re{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new re(M.min(),O.empty(),In)}static max(){return new re(M.max(),O.empty(),In)}}function Cc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
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
 */const bc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function ze(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==bc)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):P.reject(e)}static resolve(t){return new P(((e,r)=>{e(t)}))}static reject(t){return new P(((e,r)=>{r(t)}))}static waitFor(t){return new P(((e,r)=>{let s=0,o=0,a=!1;t.forEach((c=>{++s,c.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next((s=>s?P.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new P(((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next((m=>{a[f]=m,++c,c===o&&r(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new P(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function Dc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function $e(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class vr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}vr.ce=-1;/**
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
 */const Fs=-1;function wr(n){return n==null}function ur(n){return n===0&&1/n==-1/0}function Nc(n){return typeof n=="number"&&Number.isInteger(n)&&!ur(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Wa="";function xc(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=No(t)),t=Oc(n.get(e),t);return No(t)}function Oc(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Wa:e+="";break;default:e+=o}}return e}function No(n){return n+Wa+""}/**
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
 */function xo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ce(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ha(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class J{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yn(this.root,t,this.comparator,!0)}}class Yn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=o??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ft(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Oo(this.data.getIterator())}getIteratorFrom(t){return new Oo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class Oo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new Vt([])}unionWith(t){let e=new lt(dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Me(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class Ya extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ya("Invalid base64 string: "+o):o}})(t);return new mt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new mt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Lc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function se(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=Lc.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ie(n){return typeof n=="string"?mt.fromBase64String(n):mt.fromUint8Array(n)}/**
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
 */const Xa="server_timestamp",Ja="__type__",Za="__previous_value__",tu="__local_write_time__";function Us(n){return(n?.mapValue?.fields||{})[Ja]?.stringValue===Xa}function Ar(n){const t=n.mapValue.fields[Za];return Us(t)?Ar(t):t}function vn(n){const t=se(n.mapValue.fields[tu].timestampValue);return new X(t.seconds,t.nanos)}/**
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
 */class Mc{constructor(t,e,r,s,o,a,c,h,f,m,I){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m,this.apiKey=I}}const lr="(default)";class wn{constructor(t,e){this.projectId=t,this.database=e||lr}static empty(){return new wn("","")}get isDefaultDatabase(){return this.database===lr}isEqual(t){return t instanceof wn&&t.projectId===this.projectId&&t.database===this.database}}function Fc(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wn(n.options.projectId,t)}/**
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
 */const eu="__type__",Uc="__max__",Xn={mapValue:{}},nu="__vector__",cr="value";function oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Us(n)?4:qc(n)?9007199254740991:Bc(n)?10:11:L(28295,{value:n})}function qt(n,t){if(n===t)return!0;const e=oe(n);if(e!==oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return vn(n).isEqual(vn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=se(s.timestampValue),c=se(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return ie(s.bytesValue).isEqual(ie(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=rt(s.doubleValue),c=rt(o.doubleValue);return a===c?ur(a)===ur(c):isNaN(a)&&isNaN(c)}return!1})(n,t);case 9:return Me(n.arrayValue.values||[],t.arrayValue.values||[],qt);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(xo(a)!==xo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!qt(a[h],c[h])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function An(n,t){return(n.values||[]).find((e=>qt(e,t)))!==void 0}function Fe(n,t){if(n===t)return 0;const e=oe(n),r=oe(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const c=rt(o.integerValue||o.doubleValue),h=rt(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,t);case 3:return Lo(n.timestampValue,t.timestampValue);case 4:return Lo(vn(n),vn(t));case 5:return ys(n.stringValue,t.stringValue);case 6:return(function(o,a){const c=ie(o),h=ie(a);return c.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=B(c[f],h[f]);if(m!==0)return m}return B(c.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const c=B(rt(o.latitude),rt(a.latitude));return c!==0?c:B(rt(o.longitude),rt(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Mo(n.arrayValue,t.arrayValue);case 10:return(function(o,a){const c=o.fields||{},h=a.fields||{},f=c[cr]?.arrayValue,m=h[cr]?.arrayValue,I=B(f?.values?.length||0,m?.values?.length||0);return I!==0?I:Mo(f,m)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===Xn.mapValue&&a===Xn.mapValue)return 0;if(o===Xn.mapValue)return 1;if(a===Xn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let I=0;I<h.length&&I<m.length;++I){const R=ys(h[I],m[I]);if(R!==0)return R;const V=Fe(c[h[I]],f[m[I]]);if(V!==0)return V}return B(h.length,m.length)})(n.mapValue,t.mapValue);default:throw L(23264,{he:e})}}function Lo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=se(n),r=se(t),s=B(e.seconds,r.seconds);return s!==0?s:B(e.nanos,r.nanos)}function Mo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Fe(e[s],r[s]);if(o)return o}return B(e.length,r.length)}function Ue(n){return Ts(n)}function Ts(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=se(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ie(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return O.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ts(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ts(e.fields[a])}`;return s+"}"})(n.mapValue):L(61005,{value:n})}function rr(n){switch(oe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ar(n);return t?16+rr(t):16;case 5:return 2*n.stringValue.length;case 6:return ie(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+rr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return ce(r.fields,((o,a)=>{s+=o.length+rr(a)})),s})(n.mapValue);default:throw L(13486,{value:n})}}function Es(n){return!!n&&"integerValue"in n}function Bs(n){return!!n&&"arrayValue"in n}function Fo(n){return!!n&&"nullValue"in n}function Uo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sr(n){return!!n&&"mapValue"in n}function Bc(n){return(n?.mapValue?.fields||{})[eu]?.stringValue===nu}function pn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return ce(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=pn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=pn(n.arrayValue.values[e]);return t}return{...n}}function qc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Uc}/**
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
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!sr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=pn(e)}setAll(t){let e=dt.emptyPath(),r={},s=[];t.forEach(((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=pn(a):s.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());sr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];sr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ce(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new Rt(pn(this.value))}}function ru(n){const t=[];return ce(n.fields,((e,r)=>{const s=new dt([e]);if(sr(r)){const o=ru(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Vt(t)}/**
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
 */class Tt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Tt(t,0,M.min(),M.min(),M.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,s){return new Tt(t,1,e,M.min(),r,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,M.min(),M.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,M.min(),M.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hr{constructor(t,e){this.position=t,this.inclusive=e}}function Bo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Fe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function qo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!qt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class fr{constructor(t,e="asc"){this.field=t,this.dir=e}}function jc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class su{}class ut extends su{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new $c(t,e,r):e==="array-contains"?new Qc(t,r):e==="in"?new Wc(t,r):e==="not-in"?new Hc(t,r):e==="array-contains-any"?new Yc(t,r):new ut(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Gc(t,r):new Kc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Fe(e,this.value)):e!==null&&oe(this.value)===oe(e)&&this.matchesComparison(Fe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends su{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new jt(t,e)}matches(t){return iu(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function iu(n){return n.op==="and"}function ou(n){return zc(n)&&iu(n)}function zc(n){for(const t of n.filters)if(t instanceof jt)return!1;return!0}function Is(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+Ue(n.value);if(ou(n))return n.filters.map((t=>Is(t))).join(",");{const t=n.filters.map((e=>Is(e))).join(",");return`${n.op}(${t})`}}function au(n,t){return n instanceof ut?(function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&qt(r.value,s.value)})(n,t):n instanceof jt?(function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,c)=>o&&au(a,s.filters[c])),!0):!1})(n,t):void L(19439)}function uu(n){return n instanceof ut?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ue(e.value)}`})(n):n instanceof jt?(function(e){return e.op.toString()+" {"+e.getFilters().map(uu).join(" ,")+"}"})(n):"Filter"}class $c extends ut{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Gc extends ut{constructor(t,e){super(t,"in",e),this.keys=lu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Kc extends ut{constructor(t,e){super(t,"not-in",e),this.keys=lu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function lu(n,t){return(t.arrayValue?.values||[]).map((e=>O.fromName(e.referenceValue)))}class Qc extends ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Bs(e)&&An(e.arrayValue,this.value)}}class Wc extends ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&An(this.value.arrayValue,e)}}class Hc extends ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(An(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!An(this.value.arrayValue,e)}}class Yc extends ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Bs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>An(this.value.arrayValue,r)))}}/**
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
 */class Xc{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function jo(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Xc(n,t,e,r,s,o,a)}function qs(n){const t=F(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Is(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),wr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Ue(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Ue(r))).join(",")),t.Te=e}return t.Te}function js(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!jc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!au(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!qo(n.startAt,t.startAt)&&qo(n.endAt,t.endAt)}function vs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Rr{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Jc(n,t,e,r,s,o,a,c){return new Rr(n,t,e,r,s,o,a,c)}function Pr(n){return new Rr(n)}function zo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Zc(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function th(n){return n.collectionGroup!==null}function gn(n){const t=F(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new lt(dt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new fr(o,r))})),e.has(dt.keyField().canonicalString())||t.Ie.push(new fr(dt.keyField(),r))}return t.Ie}function Ft(n){const t=F(n);return t.Ee||(t.Ee=eh(t,gn(n))),t.Ee}function eh(n,t){if(n.limitType==="F")return jo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new fr(s.field,o)}));const e=n.endAt?new hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hr(n.startAt.position,n.startAt.inclusive):null;return jo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ws(n,t,e){return new Rr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Sr(n,t){return js(Ft(n),Ft(t))&&n.limitType===t.limitType}function cu(n){return`${qs(Ft(n))}|lt:${n.limitType}`}function ke(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>uu(s))).join(", ")}]`),wr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>Ue(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>Ue(s))).join(",")),`Target(${r})`})(Ft(n))}; limitType=${n.limitType})`}function Vr(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of gn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,c,h){const f=Bo(a,c,h);return a.inclusive?f<=0:f<0})(r.startAt,gn(r),s)||r.endAt&&!(function(a,c,h){const f=Bo(a,c,h);return a.inclusive?f>=0:f>0})(r.endAt,gn(r),s))})(n,t)}function nh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hu(n){return(t,e)=>{let r=!1;for(const s of gn(n)){const o=rh(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function rh(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):(function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Fe(h,f):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
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
 */class Re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ce(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return Ha(this.inner)}size(){return this.innerSize}}/**
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
 */const sh=new J(O.comparator);function Kt(){return sh}const fu=new J(O.comparator);function fn(...n){let t=fu;for(const e of n)t=t.insert(e.key,e);return t}function du(n){let t=fu;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function ye(){return _n()}function mu(){return _n()}function _n(){return new Re((n=>n.toString()),((n,t)=>n.isEqual(t)))}const ih=new J(O.comparator),oh=new lt(O.comparator);function q(...n){let t=oh;for(const e of n)t=t.add(e);return t}const ah=new lt(B);function uh(){return ah}/**
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
 */function zs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ur(t)?"-0":t}}function pu(n){return{integerValue:""+n}}function lh(n,t){return Nc(t)?pu(t):zs(n,t)}/**
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
 */class Cr{constructor(){this._=void 0}}function ch(n,t,e){return n instanceof dr?(function(s,o){const a={fields:{[Ja]:{stringValue:Xa},[tu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Us(o)&&(o=Ar(o)),o&&(a.fields[Za]=o),{mapValue:a}})(e,t):n instanceof Rn?_u(n,t):n instanceof Pn?yu(n,t):(function(s,o){const a=gu(s,o),c=$o(a)+$o(s.Ae);return Es(a)&&Es(s.Ae)?pu(c):zs(s.serializer,c)})(n,t)}function hh(n,t,e){return n instanceof Rn?_u(n,t):n instanceof Pn?yu(n,t):e}function gu(n,t){return n instanceof mr?(function(r){return Es(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class dr extends Cr{}class Rn extends Cr{constructor(t){super(),this.elements=t}}function _u(n,t){const e=Tu(t);for(const r of n.elements)e.some((s=>qt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Pn extends Cr{constructor(t){super(),this.elements=t}}function yu(n,t){let e=Tu(t);for(const r of n.elements)e=e.filter((s=>!qt(s,r)));return{arrayValue:{values:e}}}class mr extends Cr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function $o(n){return rt(n.integerValue||n.doubleValue)}function Tu(n){return Bs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function fh(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof Rn&&s instanceof Rn||r instanceof Pn&&s instanceof Pn?Me(r.elements,s.elements,qt):r instanceof mr&&s instanceof mr?qt(r.Ae,s.Ae):r instanceof dr&&s instanceof dr})(n.transform,t.transform)}class dh{constructor(t,e){this.version=t,this.transformResults=e}}class Dt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Dt}static exists(t){return new Dt(void 0,t)}static updateTime(t){return new Dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ir(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class br{}function Eu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new $s(n.key,Dt.none()):new Cn(n.key,n.data,Dt.none());{const e=n.data,r=Rt.empty();let s=new lt(dt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new he(n.key,r,new Vt(s.toArray()),Dt.none())}}function mh(n,t,e){n instanceof Cn?(function(s,o,a){const c=s.value.clone(),h=Ko(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,t,e):n instanceof he?(function(s,o,a){if(!ir(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Ko(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Iu(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function yn(n,t,e,r){return n instanceof Cn?(function(o,a,c,h){if(!ir(o.precondition,a))return c;const f=o.value.clone(),m=Qo(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(n,t,e,r):n instanceof he?(function(o,a,c,h){if(!ir(o.precondition,a))return c;const f=Qo(o.fieldTransforms,h,a),m=a.data;return m.setAll(Iu(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((I=>I.field)))})(n,t,e,r):(function(o,a,c){return ir(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,t,e)}function ph(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=gu(r.transform,s||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(r.field,o))}return e||null}function Go(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Me(r,s,((o,a)=>fh(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Cn extends br{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class he extends br{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Iu(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Ko(n,t,e){const r=new Map;K(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,hh(a,c,e[s]))}return r}function Qo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,ch(o,a,t))}return r}class $s extends br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gh extends br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _h{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&mh(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=yn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=yn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=mu();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Eu(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(M.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),q())}isEqual(t){return this.batchId===t.batchId&&Me(this.mutations,t.mutations,((e,r)=>Go(e,r)))&&Me(this.baseMutations,t.baseMutations,((e,r)=>Go(e,r)))}}class Gs{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){K(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return ih})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Gs(t,e,r,s)}}/**
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
 */class yh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Th{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var st,z;function Eh(n){switch(n){case S.OK:return L(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function vu(n){if(n===void 0)return Gt("GRPC error has no .code"),S.UNKNOWN;switch(n){case st.OK:return S.OK;case st.CANCELLED:return S.CANCELLED;case st.UNKNOWN:return S.UNKNOWN;case st.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case st.INTERNAL:return S.INTERNAL;case st.UNAVAILABLE:return S.UNAVAILABLE;case st.UNAUTHENTICATED:return S.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case st.NOT_FOUND:return S.NOT_FOUND;case st.ALREADY_EXISTS:return S.ALREADY_EXISTS;case st.PERMISSION_DENIED:return S.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case st.ABORTED:return S.ABORTED;case st.OUT_OF_RANGE:return S.OUT_OF_RANGE;case st.UNIMPLEMENTED:return S.UNIMPLEMENTED;case st.DATA_LOSS:return S.DATA_LOSS;default:return L(39323,{code:n})}}(z=st||(st={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ih(){return new TextEncoder}/**
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
 */const vh=new ee([4294967295,4294967295],0);function Wo(n){const t=Ih().encode(n),e=new Fa;return e.update(t),new Uint8Array(e.digest())}function Ho(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ee([e,r],0),new ee([s,o],0)]}class Ks{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new dn(`Invalid padding: ${e}`);if(r<0)throw new dn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new dn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new dn(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ee.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(ee.fromNumber(r)));return s.compare(vh)===1&&(s=new ee([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Wo(t),[r,s]=Ho(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ks(o,s,e);return r.forEach((c=>a.insert(c))),a}insert(t){if(this.ge===0)return;const e=Wo(t),[r,s]=Ho(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.be(a)}}be(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class dn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,bn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new kr(M.min(),s,new J(B),Kt(),q())}}class bn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new bn(r,e,q(),q(),q())}}/**
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
 */class or{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.De=s}}class wu{constructor(t,e){this.targetId=t,this.Ce=e}}class Au{constructor(t,e,r=mt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Yo{constructor(){this.ve=0,this.Fe=Xo(),this.Me=mt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=q(),e=q(),r=q();return this.Fe.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L(38017,{changeType:o})}})),new bn(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=Xo()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class wh{constructor(t){this.Ge=t,this.ze=new Map,this.je=Kt(),this.He=Jn(),this.Je=Jn(),this.Ze=new J(B)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(vs(o))if(r===0){const a=new O(o.path);this.et(e,a,Tt.newNoDocument(a,M.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const c=this.ut(t),h=c?this.ct(c,t,a):1;if(h!==0){this.it(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=ie(r).toUint8Array()}catch(h){if(h instanceof Ya)return Le("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Ks(a,s,o)}catch(h){return Le(h instanceof dn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.et(e,o,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((o,a)=>{const c=this.ot(a);if(c){if(o.current&&vs(c.target)){const h=new O(c.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Tt.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.Ke())}}));let r=q();this.Je.forEach(((o,a)=>{let c=!0;a.forEachWhile((h=>{const f=this.ot(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(t)));const s=new kr(t,e,this.Ze,this.je,r);return this.je=Kt(),this.He=Jn(),this.Je=Jn(),this.Ze=new J(B),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Yo,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new lt(B),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new lt(B),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Yo),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Jn(){return new J(O.comparator)}function Xo(){return new J(O.comparator)}const Ah={asc:"ASCENDING",desc:"DESCENDING"},Rh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ph={and:"AND",or:"OR"};class Sh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function As(n,t){return n.useProto3Json||wr(t)?t:{value:t}}function pr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ru(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Vh(n,t){return pr(n,t.toTimestamp())}function Ut(n){return K(!!n,49232),M.fromTimestamp((function(e){const r=se(e);return new X(r.seconds,r.nanos)})(n))}function Qs(n,t){return Rs(n,t).canonicalString()}function Rs(n,t){const e=(function(s){return new Y(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Pu(n){const t=Y.fromString(n);return K(ku(t),10190,{key:t.toString()}),t}function Ps(n,t){return Qs(n.databaseId,t.path)}function hs(n,t){const e=Pu(t);if(e.get(1)!==n.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Vu(e))}function Su(n,t){return Qs(n.databaseId,t)}function Ch(n){const t=Pu(n);return t.length===4?Y.emptyPath():Vu(t)}function Ss(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vu(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Jo(n,t,e){return{name:Ps(n,t),fields:e.value.mapValue.fields}}function bh(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(f,m){return f.useProto3Json?(K(m===void 0||typeof m=="string",58123),mt.fromBase64String(m||"")):(K(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),mt.fromUint8Array(m||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&(function(f){const m=f.code===void 0?S.UNKNOWN:vu(f.code);return new N(m,f.message||"")})(a);e=new Au(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=hs(n,r.document.name),o=Ut(r.document.updateTime),a=r.document.createTime?Ut(r.document.createTime):M.min(),c=new Rt({mapValue:{fields:r.document.fields}}),h=Tt.newFoundDocument(s,o,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];e=new or(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=hs(n,r.document),o=r.readTime?Ut(r.readTime):M.min(),a=Tt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new or([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=hs(n,r.document),o=r.removedTargetIds||[];e=new or([],o,s,null)}else{if(!("filter"in t))return L(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Th(s,o),c=r.targetId;e=new wu(c,a)}}return e}function kh(n,t){let e;if(t instanceof Cn)e={update:Jo(n,t.key,t.value)};else if(t instanceof $s)e={delete:Ps(n,t.key)};else if(t instanceof he)e={update:Jo(n,t.key,t.data),updateMask:Bh(t.fieldMask)};else{if(!(t instanceof gh))return L(16599,{dt:t.type});e={verify:Ps(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const c=a.transform;if(c instanceof dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Rn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof mr)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw L(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:Vh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function Dh(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?Ut(s.updateTime):Ut(o);return a.isEqual(M.min())&&(a=Ut(o)),new dh(a,s.transformResults||[])})(e,t)))):[]}function Nh(n,t){return{documents:[Su(n,t.path)]}}function xh(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Su(n,s);const o=(function(f){if(f.length!==0)return bu(jt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(f){if(f.length!==0)return f.map((m=>(function(R){return{field:De(R.field),direction:Mh(R.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=As(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{ft:e,parent:s}}function Oh(n){let t=Ch(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){K(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(I){const R=Cu(I);return R instanceof jt&&ou(R)?R.getFilters():[R]})(e.where));let a=[];e.orderBy&&(a=(function(I){return I.map((R=>(function(D){return new fr(Ne(D.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(R)))})(e.orderBy));let c=null;e.limit&&(c=(function(I){let R;return R=typeof I=="object"?I.value:I,wr(R)?null:R})(e.limit));let h=null;e.startAt&&(h=(function(I){const R=!!I.before,V=I.values||[];return new hr(V,R)})(e.startAt));let f=null;return e.endAt&&(f=(function(I){const R=!I.before,V=I.values||[];return new hr(V,R)})(e.endAt)),Jc(t,s,a,o,c,"F",h,f)}function Lh(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Cu(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ne(e.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ne(e.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ne(e.unaryFilter.field);return ut.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ne(e.unaryFilter.field);return ut.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ut.create(Ne(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return jt.create(e.compositeFilter.filters.map((r=>Cu(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function Mh(n){return Ah[n]}function Fh(n){return Rh[n]}function Uh(n){return Ph[n]}function De(n){return{fieldPath:n.canonicalString()}}function Ne(n){return dt.fromServerFormat(n.fieldPath)}function bu(n){return n instanceof ut?(function(e){if(e.op==="=="){if(Uo(e.value))return{unaryFilter:{field:De(e.field),op:"IS_NAN"}};if(Fo(e.value))return{unaryFilter:{field:De(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Uo(e.value))return{unaryFilter:{field:De(e.field),op:"IS_NOT_NAN"}};if(Fo(e.value))return{unaryFilter:{field:De(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:De(e.field),op:Fh(e.op),value:e.value}}})(n):n instanceof jt?(function(e){const r=e.getFilters().map((s=>bu(s)));return r.length===1?r[0]:{compositeFilter:{op:Uh(e.op),filters:r}}})(n):L(54877,{filter:n})}function Bh(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function ku(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Du(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class te{constructor(t,e,r,s,o=M.min(),a=M.min(),c=mt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new te(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class qh{constructor(t){this.yt=t}}function jh(n){const t=Oh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ws(t,t.limit,"L"):t}/**
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
 */class zh{constructor(){this.Sn=new $h}addToCollectionParentIndex(t,e){return this.Sn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(re.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(re.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class $h{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new lt(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new lt(Y.comparator)).toArray()}}/**
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
 */const Zo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nu=41943040;class At{static withCacheSize(t){return new At(t,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(Nu,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class Be{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Be(0)}static ar(){return new Be(-1)}}/**
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
 */const ta="LruGarbageCollector",Gh=1048576;function ea([n,t],[e,r]){const s=B(n,e);return s===0?B(t,r):s}class Kh{constructor(t){this.Pr=t,this.buffer=new lt(ea),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ea(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Qh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){k(ta,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){$e(e)?k(ta,"Ignoring IndexedDB error during garbage collection: ",e):await ze(e)}await this.Ar(3e5)}))}}class Wh{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return P.resolve(vr.ce);const r=new Kh(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Zo)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zo):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,o,a,c,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),s=this.params.maximumSequenceNumbersToCollect):s=I,a=Date.now(),this.nthSequenceNumber(t,s)))).next((I=>(r=I,c=Date.now(),this.removeTargets(t,r,e)))).next((I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((I=>(f=Date.now(),be()<=zt.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${I} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:I}))))}}function Hh(n,t){return new Wh(n,t)}/**
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
 */class Yh{constructor(){this.changes=new Re((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Xh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Jh{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&yn(r.mutation,s,Vt.empty(),X.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,q()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=q()){const s=ye();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=fn();return o.forEach(((c,h)=>{a=a.insert(c,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=ye();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,q())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,c)=>{e.set(a,c)}))}))}computeViews(t,e,r,s){let o=Kt();const a=_n(),c=(function(){return _n()})();return e.forEach(((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof he)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),yn(m.mutation,f,m.mutation.getFieldMask(),X.now())):a.set(f.key,Vt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((f,m)=>a.set(f,m))),e.forEach(((f,m)=>c.set(f,new Xh(m,a.get(f)??null)))),c)))}recalculateAndSaveOverlays(t,e){const r=_n();let s=new J(((a,c)=>a-c)),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const c of a)c.keys().forEach((h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||Vt.empty();m=c.applyToLocalView(f,m),r.set(h,m);const I=(s.get(c.batchId)||q()).add(h);s=s.insert(c.batchId,I)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,I=mu();m.forEach((R=>{if(!o.has(R)){const V=Eu(e.get(R),r.get(R));V!==null&&I.set(R,V),o=o.add(R)}})),a.push(this.documentOverlayCache.saveOverlays(t,f,I))}return P.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return Zc(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):th(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(ye());let c=In,h=o;return a.next((f=>P.forEach(f,((m,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next((R=>{h=h.insert(m,R)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,h,f,q()))).next((m=>({batchId:c,changes:du(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((r=>{let s=fn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=fn();return this.indexManager.getCollectionParents(t,o).next((c=>P.forEach(c,(h=>{const f=(function(I,R){return new Rr(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next((m=>{m.forEach(((I,R)=>{a=a.insert(I,R)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,Tt.newInvalidDocument(m)))}));let c=fn();return a.forEach(((h,f)=>{const m=o.get(h);m!==void 0&&yn(m.mutation,f,Vt.empty(),X.now()),Vr(e,f)&&(c=c.insert(h,f))})),c}))}}/**
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
 */class Zh{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return P.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Ut(s.createTime)}})(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(s){return{name:s.name,query:jh(s.bundledQuery),readTime:Ut(s.readTime)}})(e)),P.resolve()}}/**
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
 */class tf{constructor(){this.overlays=new J(O.comparator),this.Lr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ye();return P.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.bt(t,e,o)})),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=ye(),o=e.length+1,a=new O(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new J(((f,m)=>f-m));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=ye(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=ye(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,m)=>c.set(f,m))),!(c.size()>=s)););return P.resolve(c)}bt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new yh(e,r));let o=this.Lr.get(e);o===void 0&&(o=q(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
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
 */class ef{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class Ws{constructor(){this.kr=new lt(ht.Kr),this.qr=new lt(ht.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new ht(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new ht(t,e))}Qr(t,e){t.forEach((r=>this.removeReference(r,e)))}Gr(t){const e=new O(new Y([])),r=new ht(e,t),s=new ht(e,t+1),o=[];return this.qr.forEachInRange([r,s],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new O(new Y([])),r=new ht(e,t),s=new ht(e,t+1);let o=q();return this.qr.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ht(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ht{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return O.comparator(t.key,e.key)||B(t.Hr,e.Hr)}static Ur(t,e){return B(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
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
 */class nf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new lt(ht.Kr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new _h(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Jr=this.Jr.add(new ht(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Fs:this.Yn-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ht(e,0),s=new ht(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);o.push(c)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(B);return e.forEach((s=>{const o=new ht(s,0),a=new ht(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],(c=>{r=r.add(c.Hr)}))})),P.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new ht(new O(o),0);let c=new lt(B);return this.Jr.forEachWhile((h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.Hr)),!0)}),a),P.resolve(this.Yr(c))}Yr(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){K(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return P.forEach(e.mutations,(s=>{const o=new ht(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Jr=r}))}nr(t){}containsKey(t,e){const r=new ht(e,0),s=this.Jr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class rf{constructor(t){this.ti=t,this.docs=(function(){return new J(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=Kt();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))})),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Kt();const a=e.path,c=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Cc(Vc(m),r)<=0||(s.has(m.key)||Vr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L(9500)}ni(t,e){return P.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new sf(this)}getSize(t){return P.resolve(this.size)}}class sf extends Yh{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)})),P.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class of{constructor(t){this.persistence=t,this.ri=new Re((e=>qs(e)),js),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.ii=0,this.si=new Ws,this.targetCount=0,this.oi=Be._r()}forEachTarget(t,e){return this.ri.forEach(((r,s)=>e(s))),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),P.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Be(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.lr(e),P.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ri.forEach(((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),P.waitFor(o).next((()=>s))}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.si.containsKey(e))}}/**
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
 */class xu{constructor(t,e){this._i={},this.overlays={},this.ai=new vr(0),this.ui=!1,this.ui=!0,this.ci=new ef,this.referenceDelegate=t(this),this.li=new of(this),this.indexManager=new zh,this.remoteDocumentCache=(function(s){return new rf(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new qh(e),this.Pi=new Zh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new nf(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const s=new af(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return P.or(Object.values(this._i).map((r=>()=>r.containsKey(t,e))))}}class af extends kc{constructor(t){super(),this.currentSequenceNumber=t}}class Hs{constructor(t){this.persistence=t,this.Ri=new Ws,this.Ai=null}static Vi(t){return new Hs(t)}get di(){if(this.Ai)return this.Ai;throw L(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,(r=>{const s=O.fromPath(r);return this.mi(t,s).next((o=>{o||e.removeEntry(s,M.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return P.or([()=>P.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class gr{constructor(t,e){this.persistence=t,this.fi=new Re((r=>xc(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Hh(this,e)}static Vi(t,e){return new gr(t,e)}Ti(){}Ii(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}pr(t){let e=0;return this.mr(t,(r=>{e++})).next((()=>e))}mr(t,e){return P.forEach(this.fi,((r,s)=>this.wr(t,r,s).next((o=>o?P.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(t,(a=>this.wr(t,a,e).next((c=>{c||(r++,o.removeEntry(a,M.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),P.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=rr(t.data.value)),e}wr(t,e,r){return P.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ys{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=q(),s=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ys(t,e.fromCache,r,s)}}/**
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
 */class uf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class lf{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return uc()?8:Dc(lc())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.gs(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new uf;return this.ys(t,e,a).next((c=>{if(o.result=c,this.As)return this.ws(t,e,a,c.size)}))})).next((()=>o.result))}ws(t,e,r,s){return r.documentReadCount<this.Vs?(be()<=zt.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(be()<=zt.DEBUG&&k("QueryEngine","Query:",ke(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(be()<=zt.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ft(e))):P.resolve())}gs(t,e){if(zo(e))return P.resolve(null);let r=Ft(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=ws(e,null,"F"),r=Ft(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=q(...o);return this.fs.getDocuments(t,a).next((c=>this.indexManager.getMinOffset(t,r).next((h=>{const f=this.bs(e,c);return this.Ss(e,f,a,h.readTime)?this.gs(t,ws(e,null,"F")):this.Ds(t,f,e,h)}))))})))))}ps(t,e,r,s){return zo(e)||s.isEqual(M.min())?P.resolve(null):this.fs.getDocuments(t,r).next((o=>{const a=this.bs(e,o);return this.Ss(e,a,r,s)?P.resolve(null):(be()<=zt.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ke(e)),this.Ds(t,a,e,Sc(s,In)).next((c=>c)))}))}bs(t,e){let r=new lt(hu(t));return e.forEach(((s,o)=>{Vr(t,o)&&(r=r.add(o))})),r}Ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(t,e,r){return be()<=zt.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",ke(e)),this.fs.getDocumentsMatchingQuery(t,e,re.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const Xs="LocalStore",cf=3e8;class hf{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new J(B),this.Fs=new Re((o=>qs(o)),js),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jh(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function ff(n,t,e,r){return new hf(n,t,e,r)}async function Ou(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],c=[];let h=q();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next((f=>({Ns:f,removedBatchIds:a,addedBatchIds:c})))}))}))}function df(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return(function(c,h,f,m){const I=f.batch,R=I.keys();let V=P.resolve();return R.forEach((D=>{V=V.next((()=>m.getEntry(h,D))).next((x=>{const b=f.docVersions.get(D);K(b!==null,48541),x.version.compareTo(b)<0&&(I.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),m.addEntry(x)))}))})),V.next((()=>c.mutationQueue.removeMutationBatch(h,I)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let h=q();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Lu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function mf(n,t){const e=F(n),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const c=[];t.targetChanges.forEach(((m,I)=>{const R=s.get(I);if(!R)return;c.push(e.li.removeMatchingKeys(o,m.removedDocuments,I).next((()=>e.li.addMatchingKeys(o,m.addedDocuments,I))));let V=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?V=V.withResumeToken(mt.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):m.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(m.resumeToken,r)),s=s.insert(I,V),(function(x,b,j){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=cf?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(R,V,m)&&c.push(e.li.updateTargetData(o,V))}));let h=Kt(),f=q();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),c.push(pf(o,a,t.documentUpdates).next((m=>{h=m.Bs,f=m.Ls}))),!r.isEqual(M.min())){const m=e.li.getLastRemoteSnapshotVersion(o).next((I=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,r)));c.push(m)}return P.waitFor(c).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,f))).next((()=>h))})).then((o=>(e.vs=s,o)))}function pf(n,t,e){let r=q(),s=q();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=Kt();return e.forEach(((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(M.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):k(Xs,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)})),{Bs:a,Ls:s}}))}function gf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Fs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function _f(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.li.getTargetData(r,t).next((o=>o?(s=o,P.resolve(s)):e.li.allocateTargetId(r).next((a=>(s=new te(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r}))}async function Vs(n,t,e){const r=F(n),s=r.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!$e(a))throw a;k(Xs,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function na(n,t,e){const r=F(n);let s=M.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,f,m){const I=F(h),R=I.Fs.get(m);return R!==void 0?P.resolve(I.vs.get(R)):I.li.getTargetData(f,m)})(r,a,Ft(t)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,c.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:M.min(),e?o:q()))).next((c=>(yf(r,nh(t),c),{documents:c,ks:o})))))}function yf(n,t,e){let r=n.Ms.get(t)||M.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Ms.set(t,r)}class ra{constructor(){this.activeTargetIds=uh()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Tf{constructor(){this.vo=new ra,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new ra,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ef{Mo(t){}shutdown(){}}/**
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
 */const sa="ConnectivityMonitor";class ia{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){k(sa,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){k(sa,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zn=null;function Cs(){return Zn===null?Zn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zn++,"0x"+Zn.toString(16)}/**
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
 */const fs="RestConnection",If={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class vf{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===lr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Cs(),c=this.Qo(t,e.toUriEncodedString());k(fs,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:f}=new URL(c),m=Ir(f);return this.zo(t,c,h,r,m).then((I=>(k(fs,`Received RPC '${t}' ${a}: `,I),I)),(I=>{throw Le(fs,`RPC '${t}' ${a} failed with error: `,I,"url: ",c,"request:",r),I}))}jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}Go(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+je})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Qo(t,e){const r=If[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class wf{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const _t="WebChannelConnection",ln=(n,t,e)=>{n.listen(t,(r=>{try{e(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class xe extends vf{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!xe.c_){const t=ja();ln(t,qa.STAT_EVENT,(e=>{e.stat===_s.PROXY?k(_t,"STAT_EVENT: detected buffering proxy"):e.stat===_s.NOPROXY&&k(_t,"STAT_EVENT: detected no buffering proxy")})),xe.c_=!0}}zo(t,e,r,s,o){const a=Cs();return new Promise(((c,h)=>{const f=new Ua;f.setWithCredentials(!0),f.listenOnce(Ba.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case nr.NO_ERROR:const I=f.getResponseJson();k(_t,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(I)),c(I);break;case nr.TIMEOUT:k(_t,`RPC '${t}' ${a} timed out`),h(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case nr.HTTP_ERROR:const R=f.getStatus();if(k(_t,`RPC '${t}' ${a} failed with status:`,R,"response text:",f.getResponseText()),R>0){let V=f.getResponseJson();Array.isArray(V)&&(V=V[0]);const D=V?.error;if(D&&D.status&&D.message){const x=(function(j){const G=j.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(G)>=0?G:S.UNKNOWN})(D.status);h(new N(x,D.message))}else h(new N(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new N(S.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:t,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{k(_t,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);k(_t,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",m,r,15)}))}T_(t,e,r){const s=Cs(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const f=o.join("");k(_t,`Creating RPC '${t}' stream ${s}: ${f}`,c);const m=a.createWebChannel(f,c);this.I_(m);let I=!1,R=!1;const V=new wf({Ho:D=>{R?k(_t,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(I||(k(_t,`Opening RPC '${t}' stream ${s} transport.`),m.open(),I=!0),k(_t,`RPC '${t}' stream ${s} sending:`,D),m.send(D))},Jo:()=>m.close()});return ln(m,hn.EventType.OPEN,(()=>{R||(k(_t,`RPC '${t}' stream ${s} transport opened.`),V.i_())})),ln(m,hn.EventType.CLOSE,(()=>{R||(R=!0,k(_t,`RPC '${t}' stream ${s} transport closed`),V.o_(),this.E_(m))})),ln(m,hn.EventType.ERROR,(D=>{R||(R=!0,Le(_t,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),V.o_(new N(S.UNAVAILABLE,"The operation could not be completed")))})),ln(m,hn.EventType.MESSAGE,(D=>{if(!R){const x=D.data[0];K(!!x,16349);const b=x,j=b?.error||b[0]?.error;if(j){k(_t,`RPC '${t}' stream ${s} received error:`,j);const G=j.status;let $=(function(nt){const T=st[nt];if(T!==void 0)return vu(T)})(G),W=j.message;$===void 0&&($=S.INTERNAL,W="Unknown error status: "+G+" with message "+j.message),R=!0,V.o_(new N($,W)),m.close()}else k(_t,`RPC '${t}' stream ${s} received:`,x),V.__(x)}})),xe.u_(),setTimeout((()=>{V.s_()}),0),V}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return za()}}/**
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
 */function Af(n){return new xe(n)}function ds(){return typeof document<"u"?document:null}/**
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
 */function Dr(n){return new Sh(n,!0)}/**
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
 */xe.c_=!1;class Mu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const oa="PersistentStream";class Fu{constructor(t,e,r,s,o,a,c,h){this.Ci=t,this.b_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Mu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Gt(e.toString()),Gt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new N(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return k(oa,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(k(oa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Rf extends Fu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=bh(this.serializer,t),r=(function(o){if(!("targetChange"in o))return M.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?M.min():a.readTime?Ut(a.readTime):M.min()})(t);return this.listener.J_(e,r)}Z_(t){const e={};e.database=Ss(this.serializer),e.addTarget=(function(o,a){let c;const h=a.target;if(c=vs(h)?{documents:Nh(o,h)}:{query:xh(o,h).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ru(o,a.resumeToken);const f=As(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(M.min())>0){c.readTime=pr(o,a.snapshotVersion.toTimestamp());const f=As(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c})(this.serializer,t);const r=Lh(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=Ss(this.serializer),e.removeTarget=t,this.K_(e)}}class Pf extends Fu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Dh(t.writeResults,t.commitTime),r=Ut(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Ss(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>kh(this.serializer,r)))};this.K_(e)}}/**
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
 */class Sf{}class Vf extends Sf{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,Rs(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(S.UNKNOWN,o.toString())}))}jo(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.jo(t,Rs(e,r),s,a,c,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(S.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Cf(n,t,e,r){return new Vf(n,t,e,r)}class bf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
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
 */const we="RemoteStore";class kf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((a=>{r.enqueueAndForget((async()=>{Pe(this)&&(k(we,"Restarting streams for network reachability change."),await(async function(h){const f=F(h);f.Ea.add(4),await kn(f),f.Va.set("Unknown"),f.Ea.delete(4),await Nr(f)})(this))}))})),this.Va=new bf(r,s)}}async function Nr(n){if(Pe(n))for(const t of n.Ra)await t(!0)}async function kn(n){for(const t of n.Ra)await t(!1)}function Uu(n,t){const e=F(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),ei(e)?ti(e):Ge(e).O_()&&Zs(e,t))}function Js(n,t){const e=F(n),r=Ge(e);e.Ia.delete(t),r.O_()&&Bu(e,t),e.Ia.size===0&&(r.O_()?r.L_():Pe(e)&&e.Va.set("Unknown"))}function Zs(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ge(n).Z_(t)}function Bu(n,t){n.da.$e(t),Ge(n).X_(t)}function ti(n){n.da=new wh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Ge(n).start(),n.Va.ua()}function ei(n){return Pe(n)&&!Ge(n).x_()&&n.Ia.size>0}function Pe(n){return F(n).Ea.size===0}function qu(n){n.da=void 0}async function Df(n){n.Va.set("Online")}async function Nf(n){n.Ia.forEach(((t,e)=>{Zs(n,t)}))}async function xf(n,t){qu(n),ei(n)?(n.Va.ha(t),ti(n)):n.Va.set("Unknown")}async function Of(n,t,e){if(n.Va.set("Online"),t instanceof Au&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const c of o.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.da.removeTarget(c))})(n,t)}catch(r){k(we,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await _r(n,r)}else if(t instanceof or?n.da.Xe(t):t instanceof wu?n.da.st(t):n.da.tt(t),!e.isEqual(M.min()))try{const r=await Lu(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const c=o.da.Tt(a);return c.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(f);m&&o.Ia.set(f,m.withResumeToken(h.resumeToken,a))}})),c.targetMismatches.forEach(((h,f)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(mt.EMPTY_BYTE_STRING,m.snapshotVersion)),Bu(o,h);const I=new te(m.target,h,f,m.sequenceNumber);Zs(o,I)})),o.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){k(we,"Failed to raise snapshot:",r),await _r(n,r)}}async function _r(n,t,e){if(!$e(t))throw t;n.Ea.add(1),await kn(n),n.Va.set("Offline"),e||(e=()=>Lu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{k(we,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Nr(n)}))}function ju(n,t){return t().catch((e=>_r(n,e,t)))}async function xr(n){const t=F(n),e=ae(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Fs;for(;Lf(t);)try{const s=await gf(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Mf(t,s)}catch(s){await _r(t,s)}zu(t)&&$u(t)}function Lf(n){return Pe(n)&&n.Ta.length<10}function Mf(n,t){n.Ta.push(t);const e=ae(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function zu(n){return Pe(n)&&!ae(n).x_()&&n.Ta.length>0}function $u(n){ae(n).start()}async function Ff(n){ae(n).ra()}async function Uf(n){const t=ae(n);for(const e of n.Ta)t.ea(e.mutations)}async function Bf(n,t,e){const r=n.Ta.shift(),s=Gs.from(r,t,e);await ju(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await xr(n)}async function qf(n,t){t&&ae(n).Y_&&await(async function(r,s){if((function(a){return Eh(a)&&a!==S.ABORTED})(s.code)){const o=r.Ta.shift();ae(r).B_(),await ju(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await xr(r)}})(n,t),zu(n)&&$u(n)}async function aa(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k(we,"RemoteStore received new credentials");const r=Pe(e);e.Ea.add(3),await kn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Nr(e)}async function jf(n,t){const e=F(n);t?(e.Ea.delete(2),await Nr(e)):t||(e.Ea.add(2),await kn(e),e.Va.set("Unknown"))}function Ge(n){return n.ma||(n.ma=(function(e,r,s){const o=F(e);return o.sa(),new Rf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Df.bind(null,n),Yo:Nf.bind(null,n),t_:xf.bind(null,n),J_:Of.bind(null,n)}),n.Ra.push((async t=>{t?(n.ma.B_(),ei(n)?ti(n):n.Va.set("Unknown")):(await n.ma.stop(),qu(n))}))),n.ma}function ae(n){return n.fa||(n.fa=(function(e,r,s){const o=F(e);return o.sa(),new Pf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Ff.bind(null,n),t_:qf.bind(null,n),ta:Uf.bind(null,n),na:Bf.bind(null,n)}),n.Ra.push((async t=>{t?(n.fa.B_(),await xr(n)):(await n.fa.stop(),n.Ta.length>0&&(k(we,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class ni{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new ni(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ri(n,t){if(Gt("AsyncQueue",`${t}: ${n}`),$e(n))return new N(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Oe{static emptySet(t){return new Oe(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=fn(),this.sortedSet=new J(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Oe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class ua{constructor(){this.ga=new J(O.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):L(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class qe{constructor(t,e,r,s,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((c=>{a.push({type:0,doc:c})})),new qe(t,e,Oe.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Sr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class zf{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class $f{constructor(){this.queries=la(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=la(),o.forEach(((a,c)=>{for(const h of c.ba)h.onError(r)}))})(this,new N(S.ABORTED,"Firestore shutting down"))}}function la(){return new Re((n=>cu(n)),Sr)}async function si(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.Da()&&(r=2):(o=new zf,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=ri(a,`Initialization of query '${ke(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.ba.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&oi(e)}async function ii(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ba.indexOf(t);a>=0&&(o.ba.splice(a,1),o.ba.length===0?s=t.Da()?0:1:!o.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Gf(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.ba)c.Fa(s)&&(r=!0);a.wa=s}}r&&oi(e)}function Kf(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.ba)o.onError(e);r.queries.delete(t)}function oi(n){n.Ca.forEach((t=>{t.next()}))}var bs,ca;(ca=bs||(bs={})).Ma="default",ca.Cache="cache";class ai{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new qe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.Ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==bs.Cache}}/**
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
 */class Gu{constructor(t){this.key=t}}class Ku{constructor(t){this.key=t}}class Qf{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=q(),this.mutatedKeys=q(),this.eu=hu(t),this.tu=new Oe(this.eu)}get nu(){return this.Za}ru(t,e){const r=e?e.iu:new ua,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,I)=>{const R=s.get(m),V=Vr(this.query,I)?I:null,D=!!R&&this.mutatedKeys.has(R.key),x=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let b=!1;R&&V?R.data.isEqual(V.data)?D!==x&&(r.track({type:3,doc:V}),b=!0):this.su(R,V)||(r.track({type:2,doc:V}),b=!0,(h&&this.eu(V,h)>0||f&&this.eu(V,f)<0)&&(c=!0)):!R&&V?(r.track({type:0,doc:V}),b=!0):R&&!V&&(r.track({type:1,doc:R}),b=!0,(h||f)&&(c=!0)),b&&(V?(a=a.add(V),o=x?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Ss:c,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((m,I)=>(function(V,D){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:b})}};return x(V)-x(D)})(m.type,I.type)||this.eu(m.doc,I.doc))),this.ou(r),s=s??!1;const c=e&&!s?this._u():[],h=this.Ya.size===0&&this.current&&!s?1:0,f=h!==this.Xa;return this.Xa=h,a.length!==0||f?{snapshot:new qe(this.query,t.tu,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ua,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=q(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const e=[];return t.forEach((r=>{this.Ya.has(r)||e.push(new Ku(r))})),this.Ya.forEach((r=>{t.has(r)||e.push(new Gu(r))})),e}cu(t){this.Za=t.ks,this.Ya=q();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return qe.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ui="SyncEngine";class Wf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Hf{constructor(t){this.key=t,this.hu=!1}}class Yf{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Re((c=>cu(c)),Sr),this.Iu=new Map,this.Eu=new Set,this.Ru=new J(O.comparator),this.Au=new Map,this.Vu=new Ws,this.du={},this.mu=new Map,this.fu=Be.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Xf(n,t,e=!0){const r=Ju(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Qu(r,t,e,!0),s}async function Jf(n,t){const e=Ju(n);await Qu(e,t,!0,!1)}async function Qu(n,t,e,r){const s=await _f(n.localStore,Ft(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Zf(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Uu(n.remoteStore,s),c}async function Zf(n,t,e,r,s){n.pu=(I,R,V)=>(async function(x,b,j,G){let $=b.view.ru(j);$.Ss&&($=await na(x.localStore,b.query,!1).then((({documents:T})=>b.view.ru(T,$))));const W=G&&G.targetChanges.get(b.targetId),pt=G&&G.targetMismatches.get(b.targetId)!=null,nt=b.view.applyChanges($,x.isPrimaryClient,W,pt);return fa(x,b.targetId,nt.au),nt.snapshot})(n,I,R,V);const o=await na(n.localStore,t,!0),a=new Qf(t,o.ks),c=a.ru(o.documents),h=bn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,h);fa(n,e,f.au);const m=new Wf(t,e,a);return n.Tu.set(t,m),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),f.snapshot}async function td(n,t,e){const r=F(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!Sr(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vs(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Js(r.remoteStore,s.targetId),ks(r,s.targetId)})).catch(ze)):(ks(r,s.targetId),await Vs(r.localStore,s.targetId,!0))}async function ed(n,t){const e=F(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Js(e.remoteStore,r.targetId))}async function nd(n,t,e){const r=ld(n);try{const s=await(function(a,c){const h=F(a),f=X.now(),m=c.reduce(((V,D)=>V.add(D.key)),q());let I,R;return h.persistence.runTransaction("Locally write mutations","readwrite",(V=>{let D=Kt(),x=q();return h.xs.getEntries(V,m).next((b=>{D=b,D.forEach(((j,G)=>{G.isValidDocument()||(x=x.add(j))}))})).next((()=>h.localDocuments.getOverlayedDocuments(V,D))).next((b=>{I=b;const j=[];for(const G of c){const $=ph(G,I.get(G.key).overlayedDocument);$!=null&&j.push(new he(G.key,$,ru($.value.mapValue),Dt.exists(!0)))}return h.mutationQueue.addMutationBatch(V,f,j,c)})).next((b=>{R=b;const j=b.applyToLocalDocumentSet(I,x);return h.documentOverlayCache.saveOverlays(V,b.batchId,j)}))})).then((()=>({batchId:R.batchId,changes:du(I)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,h){let f=a.du[a.currentUser.toKey()];f||(f=new J(B)),f=f.insert(c,h),a.du[a.currentUser.toKey()]=f})(r,s.batchId,e),await Dn(r,s.changes),await xr(r.remoteStore)}catch(s){const o=ri(s,"Failed to persist write");e.reject(o)}}async function Wu(n,t){const e=F(n);try{const r=await mf(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Au.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?K(a.hu,14607):s.removedDocuments.size>0&&(K(a.hu,42227),a.hu=!1))})),await Dn(e,r,t)}catch(r){await ze(r)}}function ha(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((o,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const h=F(a);h.onlineState=c;let f=!1;h.queries.forEach(((m,I)=>{for(const R of I.ba)R.va(c)&&(f=!0)})),f&&oi(h)})(r.eventManager,t),s.length&&r.Pu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function rd(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new J(O.comparator);a=a.insert(o,Tt.newNoDocument(o,M.min()));const c=q().add(o),h=new kr(M.min(),new Map,new J(B),a,c);await Wu(r,h),r.Ru=r.Ru.remove(o),r.Au.delete(t),li(r)}else await Vs(r.localStore,t,!1).then((()=>ks(r,t,e))).catch(ze)}async function sd(n,t){const e=F(n),r=t.batch.batchId;try{const s=await df(e.localStore,t);Yu(e,r,null),Hu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Dn(e,s)}catch(s){await ze(s)}}async function id(n,t,e){const r=F(n);try{const s=await(function(a,c){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next((I=>(K(I!==null,37113),m=I.keys(),h.mutationQueue.removeMutationBatch(f,I)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m))).next((()=>h.localDocuments.getDocuments(f,m)))}))})(r.localStore,t);Yu(r,t,e),Hu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Dn(r,s)}catch(s){await ze(s)}}function Hu(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Yu(n,t,e){const r=F(n);let s=r.du[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function ks(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach((r=>{n.Vu.containsKey(r)||Xu(n,r)}))}function Xu(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(Js(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),li(n))}function fa(n,t,e){for(const r of e)r instanceof Gu?(n.Vu.addReference(r.key,t),od(n,r)):r instanceof Ku?(k(ui,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,t),n.Vu.containsKey(r.key)||Xu(n,r.key)):L(19791,{wu:r})}function od(n,t){const e=t.key,r=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(r)||(k(ui,"New document in limbo: "+e),n.Eu.add(r),li(n))}function li(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new O(Y.fromString(t)),r=n.fu.next();n.Au.set(r,new Hf(e)),n.Ru=n.Ru.insert(e,r),Uu(n.remoteStore,new te(Ft(Pr(e.path)),r,"TargetPurposeLimboResolution",vr.ce))}}async function Dn(n,t,e){const r=F(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,h)=>{a.push(r.pu(h,t,e).then((f=>{if((f||e)&&r.isPrimaryClient){const m=f?!f.fromCache:e?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(f){s.push(f);const m=Ys.Es(h.targetId,f);o.push(m)}})))})),await Promise.all(a),r.Pu.J_(s),await(async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>P.forEach(f,(R=>P.forEach(R.Ts,(V=>m.persistence.referenceDelegate.addReference(I,R.targetId,V))).next((()=>P.forEach(R.Is,(V=>m.persistence.referenceDelegate.removeReference(I,R.targetId,V)))))))))}catch(I){if(!$e(I))throw I;k(Xs,"Failed to update sequence numbers: "+I)}for(const I of f){const R=I.targetId;if(!I.fromCache){const V=m.vs.get(R),D=V.snapshotVersion,x=V.withLastLimboFreeSnapshotVersion(D);m.vs=m.vs.insert(R,x)}}})(r.localStore,o))}async function ad(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k(ui,"User change. New user:",t.toKey());const r=await Ou(e.localStore,t);e.currentUser=t,(function(o,a){o.mu.forEach((c=>{c.forEach((h=>{h.reject(new N(S.CANCELLED,a))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Dn(e,r.Ns)}}function ud(n,t){const e=F(n),r=e.Au.get(t);if(r&&r.hu)return q().add(r.key);{let s=q();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const c=e.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Ju(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ud.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rd.bind(null,t),t.Pu.J_=Gf.bind(null,t.eventManager),t.Pu.yu=Kf.bind(null,t.eventManager),t}function ld(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=sd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=id.bind(null,t),t}class yr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Dr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return ff(this.persistence,new lf,t.initialUser,this.serializer)}Cu(t){return new xu(Hs.Vi,this.serializer)}Du(t){return new Tf}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yr.provider={build:()=>new yr};class cd extends yr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){K(this.persistence.referenceDelegate instanceof gr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Qh(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new xu((r=>gr.Vi(r,e)),this.serializer)}}class Ds{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ha(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ad.bind(null,this.syncEngine),await jf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new $f})()}createDatastore(t){const e=Dr(t.databaseInfo.databaseId),r=Af(t.databaseInfo);return Cf(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,c){return new kf(r,s,o,a,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>ha(this.syncEngine,e,0)),(function(){return ia.v()?new ia:new Ef})())}createSyncEngine(t,e){return(function(s,o,a,c,h,f,m){const I=new Yf(s,o,a,c,h,f);return m&&(I.gu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=F(e);k(we,"RemoteStore shutting down."),r.Ea.add(5),await kn(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ds.provider={build:()=>new Ds};/**
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
 */const ue="FirestoreClient";class hd{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Ls.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{k(ue,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(k(ue,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ri(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function ms(n,t){n.asyncQueue.verifyOperationInProgress(),k(ue,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Ou(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function da(n,t){n.asyncQueue.verifyOperationInProgress();const e=await fd(n);k(ue,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>aa(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>aa(t.remoteStore,s))),n._onlineComponents=t}async function fd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(ue,"Using user provided OfflineComponentProvider");try{await ms(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Le("Error using user provided cache. Falling back to memory cache: "+e),await ms(n,new yr)}}else k(ue,"Using default OfflineComponentProvider"),await ms(n,new cd(void 0));return n._offlineComponents}async function Zu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(ue,"Using user provided OnlineComponentProvider"),await da(n,n._uninitializedComponentsProvider._online)):(k(ue,"Using default OnlineComponentProvider"),await da(n,new Ds))),n._onlineComponents}function dd(n){return Zu(n).then((t=>t.syncEngine))}async function Tr(n){const t=await Zu(n),e=t.eventManager;return e.onListen=Xf.bind(null,t.syncEngine),e.onUnlisten=td.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Jf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ed.bind(null,t.syncEngine),e}function md(n,t,e,r){const s=new ci(r),o=new ai(t,s,e);return n.asyncQueue.enqueueAndForget((async()=>si(await Tr(n),o))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>ii(await Tr(n),o)))}}function pd(n,t,e={}){const r=new $t;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,h,f){const m=new ci({next:R=>{m.Nu(),a.enqueueAndForget((()=>ii(o,I)));const V=R.docs.has(c);!V&&R.fromCache?f.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):V&&R.fromCache&&h&&h.source==="server"?f.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),I=new ai(Pr(c.path),m,{includeMetadataChanges:!0,Ka:!0});return si(o,I)})(await Tr(n),n.asyncQueue,t,e,r))),r.promise}function gd(n,t,e={}){const r=new $t;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,h,f){const m=new ci({next:R=>{m.Nu(),a.enqueueAndForget((()=>ii(o,I))),R.fromCache&&h.source==="server"?f.reject(new N(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),I=new ai(c,m,{includeMetadataChanges:!0,Ka:!0});return si(o,I)})(await Tr(n),n.asyncQueue,t,e,r))),r.promise}function _d(n,t){const e=new $t;return n.asyncQueue.enqueueAndForget((async()=>nd(await dd(n),t,e))),e.promise}/**
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
 */function tl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const yd="ComponentProvider",ma=new Map;function Td(n,t,e,r,s){return new Mc(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,tl(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const el="firestore.googleapis.com",pa=!0;class ga{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=el,this.ssl=pa}else this.host=t.host,this.ssl=t.ssl??pa;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Nu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Gh)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Pc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tl(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Or{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ga({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ga(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new gc;switch(r.type){case"firstParty":return new Ec(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=ma.get(e);r&&(k(yd,"Removing Datastore"),ma.delete(e),r.terminate())})(this),Promise.resolve()}}function Ed(n,t,e,r={}){n=kt(n,Or);const s=Ir(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},c=`${t}:${e}`;s&&(Da(`https://${c}`),Na("Firestore",!0)),o.host!==el&&o.host!==c&&Le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:c,ssl:s,emulatorOptions:r};if(!ac(h,a)&&(n._setSettings(h),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=yt.MOCK_USER;else{f=xa(r.mockUserToken,n._app?.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new yt(I)}n._authCredentials=new _c(new Ga(f,m))}}/**
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
 */class Nn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Nn(this.firestore,t,this._query)}}class ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Vn(e,ot._jsonSchema))return new ot(t,r||null,new O(Y.fromString(e.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:it("string",ot._jsonSchemaVersion),referencePath:it("string")};class ne extends Nn{constructor(t,e,r){super(t,e,Pr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new O(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function Ym(n,t,...e){if(n=Pt(n),Ka("collection","path",t),n instanceof Or){const r=Y.fromString(t,...e);return bo(r),new ne(n,null,r)}{if(!(n instanceof ot||n instanceof ne))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return bo(r),new ne(n.firestore,null,r)}}function Id(n,t,...e){if(n=Pt(n),arguments.length===1&&(t=Ls.newId()),Ka("doc","path",t),n instanceof Or){const r=Y.fromString(t,...e);return Co(r),new ot(n,null,new O(r))}{if(!(n instanceof ot||n instanceof ne))throw new N(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Co(r),new ot(n.firestore,n instanceof ne?n.converter:null,new O(r))}}/**
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
 */const _a="AsyncQueue";class ya{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Mu(this,"async_queue_retry"),this._c=()=>{const r=ds();r&&k(_a,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=ds();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ds();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new $t;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!$e(t))throw t;k(_a,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Gt("INTERNAL UNHANDLED ERROR: ",Ta(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=ni.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:Ta(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Ta(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class le extends Or{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new ya,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ya(t),this._firestoreClient=void 0,await t}}}function vd(n,t){const e=typeof n=="object"?n:xs(),r=typeof n=="string"?n:lr,s=ba(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ka("firestore");o&&Ed(s,...o)}return s}function Lr(n){if(n._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||wd(n),n._firestoreClient}function wd(n){const t=n._freezeSettings(),e=Td(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new hd(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}})(n._componentsProvider))}/**
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
 */class bt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bt(mt.fromBase64String(t))}catch(e){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new bt(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Vn(t,bt._jsonSchema))return bt.fromBase64String(t.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:it("string",bt._jsonSchemaVersion),bytes:it("string")};/**
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
 */class hi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class fi{constructor(t){this._methodName=t}}/**
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
 */class Bt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bt._jsonSchemaVersion}}static fromJSON(t){if(Vn(t,Bt._jsonSchema))return new Bt(t.latitude,t.longitude)}}Bt._jsonSchemaVersion="firestore/geoPoint/1.0",Bt._jsonSchema={type:it("string",Bt._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
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
 */class Nt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Vn(t,Nt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Nt(t.vectorValues);throw new N(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nt._jsonSchemaVersion="firestore/vectorValue/1.0",Nt._jsonSchema={type:it("string",Nt._jsonSchemaVersion),vectorValues:it("object")};/**
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
 */const Ad=/^__.*__$/;class Rd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new he(t,this.data,this.fieldMask,e,this.fieldTransforms):new Cn(t,this.data,e,this.fieldTransforms)}}class nl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new he(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function rl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{dataSource:n})}}class di{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new di({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){const e=this.path?.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){const e=this.path?.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Er(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(rl(this.dataSource)&&Ad.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class Pd{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Dr(t)}createContext(t,e,r,s=!1){return new di({dataSource:t,methodName:e,targetDoc:r,path:dt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sl(n){const t=n._freezeSettings(),e=Dr(n._databaseId);return new Pd(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Sd(n,t,e,r,s,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,t,e,s);mi("Data must be an object, but it was:",a,r);const c=il(r,a);let h,f;if(o.merge)h=new Vt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const I of o.mergeFields){const R=Sn(t,I,e);if(!a.contains(R))throw new N(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);ul(m,R)||m.push(R)}h=new Vt(m),f=a.fieldTransforms.filter((I=>h.covers(I.field)))}else h=null,f=a.fieldTransforms;return new Rd(new Rt(c),h,f)}class Mr extends fi{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Mr}}function Vd(n,t,e,r){const s=n.createContext(1,t,e);mi("Data must be an object, but it was:",s,r);const o=[],a=Rt.empty();ce(r,((h,f)=>{const m=al(t,h,e);f=Pt(f);const I=s.childContextForFieldPath(m);if(f instanceof Mr)o.push(m);else{const R=Fr(f,I);R!=null&&(o.push(m),a.set(m,R))}}));const c=new Vt(o);return new nl(a,c,s.fieldTransforms)}function Cd(n,t,e,r,s,o){const a=n.createContext(1,t,e),c=[Sn(t,r,e)],h=[s];if(o.length%2!=0)throw new N(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(Sn(t,o[R])),h.push(o[R+1]);const f=[],m=Rt.empty();for(let R=c.length-1;R>=0;--R)if(!ul(f,c[R])){const V=c[R];let D=h[R];D=Pt(D);const x=a.childContextForFieldPath(V);if(D instanceof Mr)f.push(V);else{const b=Fr(D,x);b!=null&&(f.push(V),m.set(V,b))}}const I=new Vt(f);return new nl(m,I,a.fieldTransforms)}function Fr(n,t){if(ol(n=Pt(n)))return mi("Unsupported field value:",t,n),il(n,t);if(n instanceof fi)return(function(r,s){if(!rl(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const c of r){let h=Fr(c,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=X.fromDate(r);return{timestampValue:pr(s.serializer,o)}}if(r instanceof X){const o=new X(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pr(s.serializer,o)}}if(r instanceof Bt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bt)return{bytesValue:Ru(s.serializer,r._byteString)};if(r instanceof ot){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Qs(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Nt)return(function(a,c){const h=a instanceof Nt?a.toArray():a;return{mapValue:{fields:{[eu]:{stringValue:nu},[cr]:{arrayValue:{values:h.map((m=>{if(typeof m!="number")throw c.createError("VectorValues must only contain numeric values.");return zs(c.serializer,m)}))}}}}}})(r,s);if(Du(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Ms(r)}`)})(n,t)}function il(n,t){const e={};return Ha(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ce(n,((r,s)=>{const o=Fr(s,t.childContextForField(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function ol(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof Bt||n instanceof bt||n instanceof ot||n instanceof fi||n instanceof Nt||Du(n))}function mi(n,t,e){if(!ol(e)||!Qa(e)){const r=Ms(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function Sn(n,t,e){if((t=Pt(t))instanceof hi)return t._internalPath;if(typeof t=="string")return al(n,t);throw Er("Field path arguments must be of type string or ",n,!1,void 0,e)}const bd=new RegExp("[~\\*/\\[\\]]");function al(n,t,e){if(t.search(bd)>=0)throw Er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new hi(...t.split("."))._internalPath}catch{throw Er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Er(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(S.INVALID_ARGUMENT,c+n+h)}function ul(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class kd{convertValue(t,e="none"){switch(oe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ce(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){const e=t.fields?.[cr].arrayValue?.values?.map((r=>rt(r.doubleValue)));return new Nt(e)}convertGeoPoint(t){return new Bt(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ar(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(vn(t));default:return null}}convertTimestamp(t){const e=se(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);K(ku(r),9688,{name:t});const s=new wn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Gt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class pi extends kd{constructor(t){super(),this.firestore=t}convertBytes(t){return new bt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,e)}}const Ea="@firebase/firestore",Ia="4.10.0";/**
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
 */function va(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class ll{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Dd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const e=this._document.data.field(Sn("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Dd extends ll{data(){return super.data()}}/**
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
 */function cl(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Nd(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class mn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Te extends ll{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Sn("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Te._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Te._jsonSchemaVersion="firestore/documentSnapshot/1.0",Te._jsonSchema={type:it("string",Te._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class ar extends Te{data(t={}){return super.data(t)}}class Ee{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new mn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new ar(this._firestore,this._userDataWriter,r.key,r,new mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const h=new ar(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const h=new ar(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:xd(c.type),doc:h,oldIndex:f,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ee._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ls.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function xd(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
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
 */Ee._jsonSchemaVersion="firestore/querySnapshot/1.0",Ee._jsonSchema={type:it("string",Ee._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};/**
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
 */function Xm(n){n=kt(n,ot);const t=kt(n.firestore,le),e=Lr(t);return pd(e,n._key).then((r=>hl(t,n,r)))}function Jm(n){n=kt(n,Nn);const t=kt(n.firestore,le),e=Lr(t),r=new pi(t);return cl(n._query),gd(e,n._query).then((s=>new Ee(t,r,n,s)))}function Zm(n,t,e,...r){n=kt(n,ot);const s=kt(n.firestore,le),o=sl(s);let a;return a=typeof(t=Pt(t))=="string"||t instanceof hi?Cd(o,"updateDoc",n._key,t,e,r):Vd(o,"updateDoc",n._key,t),gi(s,[a.toMutation(n._key,Dt.exists(!0))])}function tp(n){return gi(kt(n.firestore,le),[new $s(n._key,Dt.none())])}function ep(n,t){const e=kt(n.firestore,le),r=Id(n),s=Nd(n.converter,t),o=sl(n.firestore);return gi(e,[Sd(o,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then((()=>r))}function np(n,...t){n=Pt(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||va(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(va(t[r])){const f=t[r];t[r]=f.next?.bind(f),t[r+1]=f.error?.bind(f),t[r+2]=f.complete?.bind(f)}let o,a,c;if(n instanceof ot)a=kt(n.firestore,le),c=Pr(n._key.path),o={next:f=>{t[r]&&t[r](hl(a,n,f))},error:t[r+1],complete:t[r+2]};else{const f=kt(n,Nn);a=kt(f.firestore,le),c=f._query;const m=new pi(a);o={next:I=>{t[r]&&t[r](new Ee(a,m,f,I))},error:t[r+1],complete:t[r+2]},cl(n._query)}const h=Lr(a);return md(h,c,s,o)}function gi(n,t){const e=Lr(n);return _d(e,t)}function hl(n,t,e){const r=e.docs.get(t._key),s=new pi(n);return new Te(n,s,t._key,r,new mn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){pc(Ma),Oa(new La("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new le(new yc(r.getProvider("auth-internal")),new Ic(a,r.getProvider("app-check-internal")),Fc(a,s),a);return o={useFetchStreams:e,...o},c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),En(Ea,Ia,t),En(Ea,Ia,"esm2020")})();/**
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
 */const fl="firebasestorage.googleapis.com",dl="storageBucket",Od=120*1e3,Ld=600*1e3;/**
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
 */class et extends Ca{constructor(t,e,r=0){super(ps(t),`Firebase Storage: ${e} (${ps(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,et.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ps(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var tt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(tt||(tt={}));function ps(n){return"storage/"+n}function _i(){const n="An unknown error occurred, please check the error payload for server response.";return new et(tt.UNKNOWN,n)}function Md(n){return new et(tt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Fd(n){return new et(tt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ud(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new et(tt.UNAUTHENTICATED,n)}function Bd(){return new et(tt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qd(n){return new et(tt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function jd(){return new et(tt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zd(){return new et(tt.CANCELED,"User canceled the upload/download.")}function $d(n){return new et(tt.INVALID_URL,"Invalid URL '"+n+"'.")}function Gd(n){return new et(tt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Kd(){return new et(tt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dl+"' property when initializing the app?")}function Qd(){return new et(tt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Wd(){return new et(tt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Hd(n){return new et(tt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ns(n){return new et(tt.INVALID_ARGUMENT,n)}function ml(){return new et(tt.APP_DELETED,"The Firebase app was deleted.")}function Yd(n){return new et(tt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Tn(n,t){return new et(tt.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function cn(n){throw new et(tt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Ct{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=Ct.makeFromUrl(t,e)}catch{return new Ct(t,"")}if(r.path==="")return r;throw Gd(t)}static makeFromUrl(t,e){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),h={bucket:1,path:3};function f(W){W.path_=decodeURIComponent(W.path)}const m="v[A-Za-z0-9_]+",I=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",V=new RegExp(`^https?://${I}/${m}/b/${s}/o${R}`,"i"),D={bucket:1,path:3},x=e===fl?"(?:storage.googleapis.com|storage.cloud.google.com)":e,b="([^?#]*)",j=new RegExp(`^https?://${x}/${s}/${b}`,"i"),$=[{regex:c,indices:h,postModify:o},{regex:V,indices:D,postModify:f},{regex:j,indices:{bucket:1,path:2},postModify:f}];for(let W=0;W<$.length;W++){const pt=$[W],nt=pt.regex.exec(t);if(nt){const T=nt[pt.indices.bucket];let p=nt[pt.indices.path];p||(p=""),r=new Ct(T,p),pt.postModify(r);break}}if(r==null)throw $d(t);return r}}class Xd{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Jd(n,t,e){let r=1,s=null,o=null,a=!1,c=0;function h(){return c===2}let f=!1;function m(...b){f||(f=!0,t.apply(null,b))}function I(b){s=setTimeout(()=>{s=null,n(V,h())},b)}function R(){o&&clearTimeout(o)}function V(b,...j){if(f){R();return}if(b){R(),m.call(null,b,...j);return}if(h()||a){R(),m.call(null,b,...j);return}r<64&&(r*=2);let $;c===1?(c=2,$=0):$=(r+Math.random())*1e3,I($)}let D=!1;function x(b){D||(D=!0,R(),!f&&(s!==null?(b||(c=2),clearTimeout(s),I(0)):b||(c=1)))}return I(0),o=setTimeout(()=>{a=!0,x(!0)},e),x}function Zd(n){n(!1)}/**
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
 */function tm(n){return n!==void 0}function em(n){return typeof n=="object"&&!Array.isArray(n)}function yi(n){return typeof n=="string"||n instanceof String}function wa(n){return Ti()&&n instanceof Blob}function Ti(){return typeof Blob<"u"}function Aa(n,t,e,r){if(r<t)throw Ns(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Ns(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
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
 */function Ur(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function pl(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const s=t(r)+"="+t(n[r]);e=e+s+"&"}return e=e.slice(0,-1),e}var Ie;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ie||(Ie={}));/**
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
 */function nm(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||s||o}/**
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
 */class rm{constructor(t,e,r,s,o,a,c,h,f,m,I,R=!0,V=!1){this.url_=t,this.method_=e,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=m,this.connectionFactory_=I,this.retry=R,this.isUsingEmulator=V,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((D,x)=>{this.resolve_=D,this.reject_=x,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new tr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=c=>{const h=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const c=o.getErrorCode()===Ie.NO_ERROR,h=o.getStatus();if(!c||nm(h,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===Ie.ABORT;r(!1,new tr(!1,null,m));return}const f=this.successCodes_.indexOf(h)!==-1;r(!0,new tr(f,o))})},e=(r,s)=>{const o=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(c,c.getResponse());tm(h)?o(h):o()}catch(h){a(h)}else if(c!==null){const h=_i();h.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,h)):a(h)}else if(s.canceled){const h=this.appDelete_?ml():zd();a(h)}else{const h=jd();a(h)}};this.canceled_?e(!1,new tr(!1,null,!0)):this.backoffId_=Jd(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Zd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tr{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function sm(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function im(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function om(n,t){t&&(n["X-Firebase-GMPID"]=t)}function am(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function um(n,t,e,r,s,o,a=!0,c=!1){const h=pl(n.urlParams),f=n.url+h,m=Object.assign({},n.headers);return om(m,t),sm(m,e),im(m,o),am(m,r),new rm(f,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,c)}/**
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
 */function lm(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function cm(...n){const t=lm();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(Ti())return new Blob(n);throw new et(tt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hm(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function fm(n){if(typeof atob>"u")throw Hd("base-64");return atob(n)}/**
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
 */const Mt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gs{constructor(t,e){this.data=t,this.contentType=e||null}}function dm(n,t){switch(n){case Mt.RAW:return new gs(gl(t));case Mt.BASE64:case Mt.BASE64URL:return new gs(_l(n,t));case Mt.DATA_URL:return new gs(pm(t),gm(t))}throw _i()}function gl(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,a=n.charCodeAt(++e);r=65536|(o&1023)<<10|a&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function mm(n){let t;try{t=decodeURIComponent(n)}catch{throw Tn(Mt.DATA_URL,"Malformed data URL.")}return gl(t)}function _l(n,t){switch(n){case Mt.BASE64:{const s=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(s||o)throw Tn(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Mt.BASE64URL:{const s=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(s||o)throw Tn(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=fm(t)}catch(s){throw s.message.includes("polyfill")?s:Tn(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}class yl{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Tn(Mt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=_m(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function pm(n){const t=new yl(n);return t.base64?_l(Mt.BASE64,t.rest):mm(t.rest)}function gm(n){return new yl(n).contentType}function _m(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
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
 */class Zt{constructor(t,e){let r=0,s="";wa(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(wa(this.data_)){const r=this.data_,s=hm(r,t,e);return s===null?null:new Zt(s)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new Zt(r,!0)}}static getBlob(...t){if(Ti()){const e=t.map(r=>r instanceof Zt?r.data_:r);return new Zt(cm.apply(null,e))}else{const e=t.map(a=>yi(a)?dm(Mt.RAW,a).data:a.data_);let r=0;e.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return e.forEach(a=>{for(let c=0;c<a.length;c++)s[o++]=a[c]}),new Zt(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Tl(n){let t;try{t=JSON.parse(n)}catch{return null}return em(t)?t:null}/**
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
 */function ym(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Tm(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function El(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
 */function Em(n,t){return t}class vt{constructor(t,e,r,s){this.server=t,this.local=e||t,this.writable=!!r,this.xform=s||Em}}let er=null;function Im(n){return!yi(n)||n.length<2?n:El(n)}function Il(){if(er)return er;const n=[];n.push(new vt("bucket")),n.push(new vt("generation")),n.push(new vt("metageneration")),n.push(new vt("name","fullPath",!0));function t(o,a){return Im(a)}const e=new vt("name");e.xform=t,n.push(e);function r(o,a){return a!==void 0?Number(a):a}const s=new vt("size");return s.xform=r,n.push(s),n.push(new vt("timeCreated")),n.push(new vt("updated")),n.push(new vt("md5Hash",null,!0)),n.push(new vt("cacheControl",null,!0)),n.push(new vt("contentDisposition",null,!0)),n.push(new vt("contentEncoding",null,!0)),n.push(new vt("contentLanguage",null,!0)),n.push(new vt("contentType",null,!0)),n.push(new vt("metadata","customMetadata",!0)),er=n,er}function vm(n,t){function e(){const r=n.bucket,s=n.fullPath,o=new Ct(r,s);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function wm(n,t,e){const r={};r.type="file";const s=e.length;for(let o=0;o<s;o++){const a=e[o];r[a.local]=a.xform(r,t[a.server])}return vm(r,n),r}function vl(n,t,e){const r=Tl(t);return r===null?null:wm(n,r,e)}function Am(n,t,e,r){const s=Tl(t);if(s===null||!yi(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(f=>{const m=n.bucket,I=n.fullPath,R="/b/"+a(m)+"/o/"+a(I),V=Ur(R,e,r),D=pl({alt:"media",token:f});return V+D})[0]}function Rm(n,t){const e={},r=t.length;for(let s=0;s<r;s++){const o=t[s];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class Ei{constructor(t,e,r,s){this.url=t,this.method=e,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function wl(n){if(!n)throw _i()}function Pm(n,t){function e(r,s){const o=vl(n,s,t);return wl(o!==null),o}return e}function Sm(n,t){function e(r,s){const o=vl(n,s,t);return wl(o!==null),Am(o,s,n.host,n._protocol)}return e}function Al(n){function t(e,r){let s;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?s=Bd():s=Ud():e.getStatus()===402?s=Fd(n.bucket):e.getStatus()===403?s=qd(n.path):s=r,s.status=e.getStatus(),s.serverResponse=r.serverResponse,s}return t}function Rl(n){const t=Al(n);function e(r,s){let o=t(r,s);return r.getStatus()===404&&(o=Md(n.path)),o.serverResponse=s.serverResponse,o}return e}function Vm(n,t,e){const r=t.fullServerUrl(),s=Ur(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,c=new Ei(s,o,Sm(n,e),a);return c.errorHandler=Rl(t),c}function Cm(n,t){const e=t.fullServerUrl(),r=Ur(e,n.host,n._protocol),s="DELETE",o=n.maxOperationRetryTime;function a(h,f){}const c=new Ei(r,s,a,o);return c.successCodes=[200,204],c.errorHandler=Rl(t),c}function bm(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function km(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=bm(null,t)),r}function Dm(n,t,e,r,s){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function c(){let $="";for(let W=0;W<2;W++)$=$+Math.random().toString().slice(2);return $}const h=c();a["Content-Type"]="multipart/related; boundary="+h;const f=km(t,r,s),m=Rm(f,e),I="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+h+`\r
Content-Type: `+f.contentType+`\r
\r
`,R=`\r
--`+h+"--",V=Zt.getBlob(I,r,R);if(V===null)throw Qd();const D={name:f.fullPath},x=Ur(o,n.host,n._protocol),b="POST",j=n.maxUploadRetryTime,G=new Ei(x,b,Pm(n,e),j);return G.urlParams=D,G.headers=a,G.body=V.uploadData(),G.errorHandler=Al(t),G}class Nm{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ie.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ie.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ie.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,s,o){if(this.sent_)throw cn("cannot .send() more than once");if(Ir(t)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw cn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw cn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw cn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw cn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class xm extends Nm{initXhr(){this.xhr_.responseType="text"}}function Ii(){return new xm}/**
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
 */class Ae{constructor(t,e){this._service=t,e instanceof Ct?this._location=e:this._location=Ct.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ae(t,e)}get root(){const t=new Ct(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return El(this._location.path)}get storage(){return this._service}get parent(){const t=ym(this._location.path);if(t===null)return null;const e=new Ct(this._location.bucket,t);return new Ae(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Yd(t)}}function Om(n,t,e){n._throwIfRoot("uploadBytes");const r=Dm(n.storage,n._location,Il(),new Zt(t,!0),e);return n.storage.makeRequestWithTokens(r,Ii).then(s=>({metadata:s,ref:n}))}function Lm(n){n._throwIfRoot("getDownloadURL");const t=Vm(n.storage,n._location,Il());return n.storage.makeRequestWithTokens(t,Ii).then(e=>{if(e===null)throw Wd();return e})}function Mm(n){n._throwIfRoot("deleteObject");const t=Cm(n.storage,n._location);return n.storage.makeRequestWithTokens(t,Ii)}function Fm(n,t){const e=Tm(n._location.path,t),r=new Ct(n._location.bucket,e);return new Ae(n.storage,r)}/**
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
 */function Um(n){return/^[A-Za-z]+:\/\//.test(n)}function Bm(n,t){return new Ae(n,t)}function Pl(n,t){if(n instanceof vi){const e=n;if(e._bucket==null)throw Kd();const r=new Ae(e,e._bucket);return t!=null?Pl(r,t):r}else return t!==void 0?Fm(n,t):n}function qm(n,t){if(t&&Um(t)){if(n instanceof vi)return Bm(n,t);throw Ns("To use ref(service, url), the first argument must be a Storage instance.")}else return Pl(n,t)}function Ra(n,t){const e=t?.[dl];return e==null?null:Ct.makeFromBucketSpec(e,n)}function jm(n,t,e,r={}){n.host=`${t}:${e}`;const s=Ir(t);s&&(Da(`https://${n.host}/b`),Na("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:xa(o,n.app.options.projectId))}class vi{constructor(t,e,r,s,o,a=!1){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=fl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Od,this._maxUploadRetryTime=Ld,this._requests=new Set,s!=null?this._bucket=Ct.makeFromBucketSpec(s,this._host):this._bucket=Ra(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ct.makeFromBucketSpec(this._url,t):this._bucket=Ra(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Aa("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Aa("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(Va(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ae(this,t)}_makeRequest(t,e,r,s,o=!0){if(this._deleted)return new Xd(ml());{const a=um(t,this._appId,r,s,e,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,s).getPromise()}}const Pa="@firebase/storage",Sa="0.14.0";/**
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
 */const Sl="storage";function rp(n,t,e){return n=Pt(n),Om(n,t,e)}function sp(n){return n=Pt(n),Lm(n)}function ip(n){return n=Pt(n),Mm(n)}function op(n,t){return n=Pt(n),qm(n,t)}function zm(n=xs(),t){n=Pt(n);const r=ba(n,Sl).getImmediate({identifier:t}),s=ka("storage");return s&&$m(r,...s),r}function $m(n,t,e,r={}){jm(n,t,e,r)}function Gm(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new vi(e,r,s,t,Ma)}function Km(){Oa(new La(Sl,Gm,"PUBLIC").setMultipleInstances(!0)),En(Pa,Sa,""),En(Pa,Sa,"esm2020")}Km();const Qm={apiKey:"AIzaSyBLHkUNwVE3JYdRdtihYp1iSJQcpaKFMog",authDomain:"lunas-snack-bar.firebaseapp.com",projectId:"lunas-snack-bar",appId:"1:652966154220:web:95203befeb9947579c3ac9",storageBucket:"lunas-snack-bar.firebasestorage.app"},wi=cc().length?xs():hc(Qm),ap=fc(wi),up=vd(wi),lp=zm(wi);export{Id as a,Xm as b,Ym as c,up as d,ip as e,sp as f,Jm as g,ep as h,ap as i,tp as j,Zm as k,np as o,op as r,lp as s,rp as u};
