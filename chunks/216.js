"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[216],{40216:(e,t,n)=>{n.r(t),n.d(t,{loadGLTFMesh:()=>B});var r=n(30936),o=n(66341),s=n(86114),a=n(19431),i=n(61681),c=n(1662),u=n(34344),l=n(8909),f=n(1983),p=n(77727),m=n(1680),g=n(33206),d=n(124),C=n(81936),x=n(86717),w=n(56999),h=n(79),y=n(91780),b=n(91420),v=n(40462),A=n(1731),E=n(36620),T=n(14634),M=n(91907),R=n(14789),S=n(32101),_=n(385);async function B(e,t,n){const a=new b.C(function(e){return e?.resolveFile?{busy:!1,request:async(t,n,r)=>{const s=e.resolveFile(t),a="image"===n?"image":"binary"===n?"array-buffer":"json";return(await(0,o.default)(s,{responseType:a,signal:(0,i.pC)(r)?r.signal:null})).data}}:null}(n)),c=(await(0,v.z)(a,t,n,!0)).model,u=c.lods.shift(),p=new Map,x=new Map;c.textures.forEach(((e,t)=>p.set(t,function(e){return new g.Z({data:e.data,wrap:L(e.parameters.wrap)})}(e)))),c.materials.forEach(((e,t)=>x.set(t,function(e,t){const n=new r.Z(function(e,t){return(0,f.f)(P(e[0]),P(e[1]),P(e[2]),t)}(e.color,e.opacity)),o=e.emissiveFactor?new r.Z(function(e){return(0,l.f)(P(e[0]),P(e[1]),P(e[2]))}(e.emissiveFactor)):null;return new m.Z({color:n,colorTexture:(0,i.Wg)((0,i.yw)(e.textureColor,(e=>t.get(e)))),normalTexture:(0,i.Wg)((0,i.yw)(e.textureNormal,(e=>t.get(e)))),emissiveColor:o,emissiveTexture:(0,i.Wg)((0,i.yw)(e.textureEmissive,(e=>t.get(e)))),occlusionTexture:(0,i.Wg)((0,i.yw)(e.textureOcclusion,(e=>t.get(e)))),alphaMode:k(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:(0,i.Wg)((0,i.yw)(e.textureMetallicRoughness,(e=>t.get(e))))})}(e,p))));const w=function(e){let t=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},r=new Map,o=new Map,a=[];for(const i of e.parts){const{attributes:{position:e,normal:c,color:u,tangent:l,texCoord0:f}}=i,p=`\n      ${$(e,r)}/\n      ${$(c,r)}/\n      ${$(u,r)}/\n      ${$(l,r)}/\n      ${$(f,r)}/\n      ${F(i.transform)}\n    `;let m=!1;const g=(0,s.s1)(o,p,(()=>(m=!0,{start:t,length:e.count})));m&&(t+=e.count),c&&(n.normal=!0),u&&(n.color=!0),l&&(n.tangent=!0),f&&(n.texCoord0=!0),a.push({gltf:i,writeVertices:m,region:g})}return{vertexAttributes:{position:(0,h.gS)(C.fP,t),normal:n.normal?(0,h.gS)(C.ct,t):null,tangent:n.tangent?(0,h.gS)(C.ek,t):null,color:n.color?(0,h.gS)(C.mc,t):null,texCoord0:n.texCoord0?(0,h.gS)(C.Eu,t):null},parts:a,components:[]}}(u);for(const e of w.parts)I(w,e,x);const{position:A,normal:E,tangent:T,color:M,texCoord0:R}=w.vertexAttributes,S={position:A.typedBuffer,normal:(0,i.pC)(E)?E.typedBuffer:null,tangent:(0,i.pC)(T)?T.typedBuffer:null,uv:(0,i.pC)(R)?R.typedBuffer:null,color:(0,i.pC)(M)?M.typedBuffer:null},_=(0,y.w1)(S,e,n);return{transform:_.transform,components:w.components,spatialReference:e.spatialReference,vertexAttributes:new d.Q({position:_.vertexAttributes.position,normal:_.vertexAttributes.normal,tangent:_.vertexAttributes.tangent,color:S.color,uv:S.uv})}}function $(e,t){if((0,i.Wi)(e))return"-";const n=e.typedBuffer;return`${(0,s.s1)(t,n.buffer,(()=>t.size))}/${n.byteOffset}/${n.byteLength}`}function F(e){return(0,i.pC)(e)?e.toString():"-"}function I(e,t,n){t.writeVertices&&function(e,t){const{position:n,normal:r,tangent:o,color:s,texCoord0:l}=e.vertexAttributes,f=t.region.start,{attributes:p,transform:m}=t.gltf,g=p.position.count;if((0,x.t)(n.slice(f,g),p.position,m),(0,i.pC)(p.normal)&&(0,i.pC)(r)){const e=(0,c.a)((0,u.c)(),m),t=r.slice(f,g);(0,x.a)(t,p.normal,e),(0,a.oc)(e)&&(0,x.n)(t,t)}else(0,i.pC)(r)&&(0,R.f)(r,0,0,1,{dstIndex:f,count:g});if((0,i.pC)(p.tangent)&&(0,i.pC)(o)){const e=(0,c.a)((0,u.c)(),m),t=o.slice(f,g);(0,w.t)(t,p.tangent,e),(0,a.oc)(e)&&(0,w.n)(t,t)}else(0,i.pC)(o)&&(0,S.f)(o,0,0,1,1,{dstIndex:f,count:g});if((0,i.pC)(p.texCoord0)&&(0,i.pC)(l)?(0,_.n)(l.slice(f,g),p.texCoord0):(0,i.pC)(l)&&(0,_.f)(l,0,0,{dstIndex:f,count:g}),(0,i.pC)(p.color)&&(0,i.pC)(s)){const e=p.color,t=s.slice(f,g);if(4===e.elementCount)e instanceof C.ek?(0,w.s)(t,e,255):e instanceof C.mc?(0,S.c)(t,e):e instanceof C.v6&&(0,w.a)(t,e,8);else{(0,S.f)(t,255,255,255,255);const n=C.ne.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof C.ct?(0,x.s)(n,e,255):e instanceof C.ne?(0,R.c)(n,e):e instanceof C.mw&&(0,x.b)(n,e,8)}}else(0,i.pC)(s)&&(0,S.f)(s.slice(f,g),255,255,255,255)}(e,t);const r=t.gltf,o=function(e,t){switch(t){case M.MX.TRIANGLES:return(0,A.nh)(e,E.DX);case M.MX.TRIANGLE_STRIP:return(0,A.DA)(e);case M.MX.TRIANGLE_FAN:return(0,A.jX)(e)}}(r.indices||r.attributes.position.count,r.primitiveType),s=t.region.start;if(s)for(let e=0;e<o.length;e++)o[e]+=s;e.components.push(new p.Z({faces:o,material:n.get(r.material),trustSourceNormals:!0}))}function k(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function L(e){return{horizontal:N(e.s),vertical:N(e.t)}}function N(e){switch(e){case M.e8.CLAMP_TO_EDGE:return"clamp";case M.e8.MIRRORED_REPEAT:return"mirror";case M.e8.REPEAT:return"repeat"}}function P(e){return e**(1/T.K)*255}}}]);