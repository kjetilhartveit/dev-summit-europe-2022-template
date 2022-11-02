"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[1692],{45584:(e,t,i)=>{i.d(t,{D:()=>k,b:()=>W});var r=i(61681),o=i(39100),a=i(95650),n=i(57218),s=i(25714),l=i(5885),c=i(4731),d=i(99163),u=i(90511),h=i(91636),p=i(40433),m=i(82082),f=i(6502),v=i(78549),g=i(5664),x=i(65234),_=i(3417),T=i(30786),b=i(16696),A=i(43031),S=i(2833),C=i(89585),w=i(3864),M=i(45416),O=i(73063),y=i(44391),E=i(49745),P=i(78115),R=i(10938),I=i(71354),N=i(43036),L=i(63371),H=i(24603),D=i(23410),F=i(87621),B=i(3961),z=i(15176),V=i(70984),G=i(21414),U=i(27325);function W(e){const t=new B.kG,i=t.vertex.code,W=t.fragment.code;t.include(P.a,{name:"Default Material Shader",output:e.output});const k=(0,I.S)(t,e);return t.include(h.f),t.varyings.add("vpos","vec3"),t.include(O.k,e),t.include(d.f,e),t.include(g.L,e),e.output!==s.H.Color&&e.output!==s.H.Alpha||((0,I.h)(t.vertex,e),t.include(u.O,e),t.include(c.w,{linearDepth:!1,hasModelTransformation:e.hasModelTransformation}),e.normalType===u.h.Attribute&&e.offsetBackfaces&&t.include(n.w),t.include(_.Q,e),t.include(v.Bb,e),e.instancedColor&&t.attributes.add(G.T.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(m.D,e),t.include(a.q,e),t.include(p.R,e),t.include(f.c,e),t.vertex.uniforms.add(new L.N("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),e.hasModelTransformation&&t.vertex.uniforms.add(new F.g("model",(e=>(0,r.pC)(e.modelTransformation)?e.modelTransformation:o.I))),i.add(D.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${D.H.float(y.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===u.h.Attribute?D.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===u.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===s.H.Alpha&&(t.include(l.f5,e),t.include(E.z,e),t.include(A.l,e),t.fragment.uniforms.add([new H.p("opacity",(e=>e.opacity)),new H.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&t.fragment.uniforms.add(new z.A("tex",(e=>e.texture))),t.fragment.include(R.y),W.add(D.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?D.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:D.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?D.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:D.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===s.H.Color&&(t.include(l.f5,e),t.include(b.X,e),t.include(T.K,e),t.include(E.z,e),t.include(e.instancedDoublePrecision?M.hb:M.XE,e),t.include(A.l,e),(0,I.h)(t.fragment,e),t.fragment.uniforms.add([k,new N.J("ambient",(e=>e.ambient)),new N.J("diffuse",(e=>e.diffuse)),new H.p("opacity",(e=>e.opacity)),new H.p("layerOpacity",(e=>e.layerOpacity)),new H.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new N.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",U.V),e.hasColorTexture&&t.fragment.uniforms.add(new z.A("tex",(e=>e.texture))),t.include(w.jV,e),t.include(C.T,e),t.fragment.include(R.y),t.include(S.k,e),W.add(D.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?D.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:D.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===u.h.ScreenDerivative?D.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:D.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===w.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?D.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:D.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?D.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:D.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?D.H`normalize(vpos + localOrigin);`:D.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?D.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===w.f7.Normal||e.pbrMode===w.f7.Schematic?D.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?D.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:D.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===V.Am.Color?D.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(x.s,e),t}const k=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}))},60926:(e,t,i)=>{i.d(t,{R:()=>B,b:()=>F});var r=i(95650),o=i(57218),a=i(25714),n=i(5885),s=i(4731),l=i(99163),c=i(90511),d=i(91636),u=i(40433),h=i(82082),p=i(6502),m=i(5664),f=i(65234),v=i(30786),g=i(16696),x=i(43031),_=i(89585),T=i(3864),b=i(45416),A=i(73063),S=i(44391),C=i(49745),w=i(10938),M=i(71354),O=i(43036),y=i(63371),E=i(24603),P=i(23410),R=i(67948),I=i(3961),N=i(15176),L=i(70984),H=i(21414),D=i(27325);function F(e){const t=new I.kG,i=t.vertex.code,F=t.fragment.code,B=(0,M.S)(t,e);return t.include(d.f),t.varyings.add("vpos","vec3"),t.include(A.k,e),t.include(l.f,e),t.include(m.L,e),e.output!==a.H.Color&&e.output!==a.H.Alpha||((0,M.h)(t.vertex,e),t.include(c.O,e),t.include(s.w),e.offsetBackfaces&&t.include(o.w),e.instancedColor&&t.attributes.add(H.T.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),t.include(h.D,e),t.include(r.q,e),t.include(u.R,e),t.include(p.c,e),t.vertex.uniforms.add(new y.N("externalColor",(e=>e.externalColor))),t.varyings.add("vcolorExt","vec4"),i.add(P.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${P.H.float(S.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?P.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===a.H.Alpha&&(t.include(n.f5,e),t.include(C.z,e),t.include(x.l,e),t.fragment.uniforms.add([new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity)),new R.B("view")]),e.hasColorTexture&&t.fragment.uniforms.add(new N.A("tex",(e=>e.texture))),t.fragment.include(w.y),F.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?P.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===a.H.Color&&(t.include(n.f5,e),t.include(g.X,e),t.include(v.K,e),t.include(C.z,e),t.include(e.instancedDoublePrecision?b.hb:b.XE,e),t.include(x.l,e),(0,M.h)(t.fragment,e),t.fragment.uniforms.add([B,new O.J("ambient",(e=>e.ambient)),new O.J("diffuse",(e=>e.diffuse)),new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity)),new R.B("view"),new E.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new O.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),t.fragment.constants.add("ambientBoostFactor","float",D.V),e.hasColorTexture&&t.fragment.uniforms.add(new N.A("tex",(e=>e.texture))),t.include(T.jV,e),t.include(_.T,e),t.fragment.include(w.y),t.extensions.add("GL_OES_standard_derivatives"),F.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?P.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?P.H`
                vec4 texColor = texture2D(tex, vuv0);
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===T.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?P.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?P.H`albedo = mix(albedo, vec3(1), 0.9);`:P.H``}
        ${P.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===T.f7.Normal||e.pbrMode===T.f7.Schematic?e.spherical?P.H`vec3 normalGround = normalize(vpos + localOrigin);`:P.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.H``}
        ${e.pbrMode===T.f7.Normal||e.pbrMode===T.f7.Schematic?P.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
                ${e.snowCover?P.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:P.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===L.Am.Color?P.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:P.H``}
      }
    `)),t.include(f.s,e),t}const B=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}))},45612:(e,t,i)=>{i.d(t,{b:()=>x,c:()=>g,d:()=>_,g:()=>T,i:()=>S,m:()=>P}),i(39994);var r,o,a=i(13802),n=i(19431),s=i(61681),l=i(24455),c=i(6766),d=i(8909),u=i(88589),h=i(1983);(o=r||(r={}))[o.X=0]="X",o[o.Y=1]="Y",o[o.Z=2]="Z";var p=i(97537),m=i(5700),f=i(68817);const v=a.Z.getLogger("esri.geometry.support.sphere");function g(){return(0,h.c)()}function x(e,t=g()){return(0,u.c)(t,e)}function _(e){return e[3]}function T(e){return e}function b(e,t,i){if((0,s.Wi)(t))return!1;const{origin:r,direction:o}=t,a=A;a[0]=r[0]-e[0],a[1]=r[1]-e[1],a[2]=r[2]-e[2];const n=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],l=2*(o[0]*a[0]+o[1]*a[1]+o[2]*a[2]),c=l*l-4*n*(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]-e[3]*e[3]);if(c<0)return!1;const d=Math.sqrt(c);let u=(-l-d)/(2*n);const h=(-l+d)/(2*n);return(u<0||h<u&&h>0)&&(u=h),!(u<0||(i&&(i[0]=r[0]+o[0]*u,i[1]=r[1]+o[1]*u,i[2]=r[2]+o[2]*u),0))}const A=(0,d.c)();function S(e,t){return b(e,t,null)}function C(e,t,i){const r=f.WM.get(),o=f.MP.get();(0,c.f)(r,t.origin,t.direction);const a=_(e);(0,c.f)(i,r,t.origin),(0,c.g)(i,i,1/(0,c.l)(i)*a);const n=M(e,t.origin),s=(0,m.EU)(t.origin,i);return(0,l.d)(o,s+n,r),(0,c.m)(i,i,o),i}function w(e,t,i){const r=(0,c.b)(f.WM.get(),t,e),o=(0,c.g)(f.WM.get(),r,e[3]/(0,c.l)(r));return(0,c.a)(i,o,e)}function M(e,t){const i=(0,c.b)(f.WM.get(),t,e),r=(0,c.l)(i),o=_(e),a=o+Math.abs(o-r);return(0,n.ZF)(o/a)}const O=(0,d.c)();function y(e,t,i,o){const a=(0,c.b)(O,t,e);switch(i){case r.X:{const e=(0,n.jE)(a,O)[2];return(0,c.s)(o,-Math.sin(e),Math.cos(e),0)}case r.Y:{const e=(0,n.jE)(a,O),t=e[1],i=e[2],r=Math.sin(t);return(0,c.s)(o,-r*Math.cos(i),-r*Math.sin(i),Math.cos(t))}case r.Z:return(0,c.n)(o,a);default:return}}function E(e,t){const i=(0,c.b)(R,t,e);return(0,c.l)(i)-e[3]}function P(e,t){const i=(0,c.d)(e,t),r=_(e);return i<=r*r}const R=(0,d.c)(),I=g();Object.freeze(Object.defineProperty({__proto__:null,create:g,copy:x,fromCenterAndRadius:function(e,t){return(0,h.f)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},getRadius:_,getCenter:T,fromValues:function(e,t,i,r){return(0,h.f)(e,t,i,r)},elevate:function(e,t,i){return e!==i&&(0,c.c)(i,e),i[3]=e[3]+t,i},setExtent:function(e,t,i){return v.error("sphere.setExtent is not yet supported"),e===i?i:x(e,i)},intersectRay:b,intersectsRay:S,intersectRayClosestSilhouette:function(e,t,i){if(b(e,t,i))return i;const r=C(e,t,f.WM.get());return(0,c.a)(i,t.origin,(0,c.g)(f.WM.get(),t.direction,(0,c.i)(t.origin,r)/(0,c.l)(t.direction))),i},closestPointOnSilhouette:C,closestPoint:function(e,t,i){return b(e,t,i)?i:((0,p.JI)(t,e,i),w(e,i,i))},projectPoint:w,distanceToSilhouette:function(e,t){const i=(0,c.b)(f.WM.get(),t,e),r=(0,c.p)(i),o=e[3]*e[3];return Math.sqrt(Math.abs(r-o))},angleToSilhouette:M,axisAt:y,altitudeAt:E,setAltitudeAt:function(e,t,i,o){const a=E(e,t),n=y(e,t,r.Z,R),s=(0,c.g)(R,n,i-a);return(0,c.a)(o,t,s)},containsPoint:P,tmpSphere:I},Symbol.toStringTag,{value:"Module"}))},79912:(e,t,i)=>{function r(){return new Float32Array(3)}function o(e,t,i){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=i,r}function a(){return r()}function n(){return o(1,1,1)}function s(){return o(1,0,0)}function l(){return o(0,1,0)}function c(){return o(0,0,1)}i.d(t,{c:()=>r,f:()=>o});const d=a(),u=n(),h=s(),p=l(),m=c();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:o,createView:function(e,t){return new Float32Array(e,t,3)},zeros:a,ones:n,unitX:s,unitY:l,unitZ:c,ZEROS:d,ONES:u,UNIT_X:h,UNIT_Y:p,UNIT_Z:m},Symbol.toStringTag,{value:"Module"}))},57989:(e,t,i)=>{function r(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(a)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}i.d(t,{XO:()=>r,pJ:()=>o});const a=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,a,n,/^jsapps.esri.com$/,s,l]},97537:(e,t,i)=>{i.d(t,{JI:()=>l,Ue:()=>n,re:()=>s}),i(7753);var r=i(19480),o=i(6766),a=i(8909);function n(e){return e?{origin:(0,a.a)(e.origin),direction:(0,a.a)(e.direction)}:{origin:(0,a.c)(),direction:(0,a.c)()}}function s(e,t){const i=c.get();return i.origin=e,i.direction=t,i}function l(e,t,i){const r=(0,o.e)(e.direction,(0,o.b)(i,t,e.origin));return(0,o.a)(i,e.origin,(0,o.g)(i,e.direction,r)),i}i(68817);const c=new r.x((function(){return{origin:null,direction:null}}))},5700:(e,t,i)=>{i.d(t,{EU:()=>n});var r=i(19431),o=i(6766),a=i(8909);function n(e,t){const i=(0,o.e)(e,t)/((0,o.l)(e)*(0,o.l)(t));return-(0,r.ZF)(i)}(0,a.c)(),(0,a.c)()},44883:(e,t,i)=>{i.d(t,{t:()=>o});var r=i(66341);async function o(e,t){const{data:i}=await(0,r.default)(e,{responseType:"image",...t});return i}},31692:(e,t,i)=>{i.r(t),i.d(t,{fetch:()=>Gt,gltfToEngineResources:()=>Wt,parseUrl:()=>Ut});var r=i(57989),o=i(61681),a=i(1662),n=i(34344),s=i(24455),l=i(39100),c=i(6766),d=i(8909),u=i(37116),h=i(81936),p=i(86717),m=i(56999),f=i(79),v=i(91420),g=i(40462),x=i(1731),_=i(66341),T=i(67979),b=i(70375),A=i(13802),S=i(78668),C=i(26139),w=i(44883),M=i(70984),O=i(17135),y=i(15095);class E{constructor(e,t,i,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=i,this.position=r,this.center=(0,d.c)(),(0,y.hu)(e.length>=1),(0,y.hu)(i.length%this._numIndexPerPrimitive==0),(0,y.hu)(i.length>=e.length*this._numIndexPerPrimitive),(0,y.hu)(3===r.size||4===r.size);const{data:o,size:a}=r,n=e.length;let s=a*i[this._numIndexPerPrimitive*e[0]];P.clear(),P.push(s),this.bbMin=(0,d.f)(o[s],o[s+1],o[s+2]),this.bbMax=(0,d.a)(this.bbMin);for(let t=0;t<n;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=a*i[r+e],P.push(s);let t=o[s];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[s+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[s+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}(0,c.h)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let e=0;e<P.length;++e){s=P.getItemAt(e);const t=o[s]-this.center[0],i=o[s+1]-this.center[1],r=o[s+2]-this.center[2],a=t*t+i*i+r*r;if(a<=l)continue;const n=Math.sqrt(a),c=.5*(n-this.radius);this.radius=this.radius+c,l=this.radius*this.radius;const d=c/n;this.center[0]+=t*d,this.center[1]+=i*d,this.center[2]+=r*d}P.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,c.d)(this.bbMin,this.bbMax)>1){const e=(0,c.h)((0,d.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,i=new Uint8Array(t),r=new Array(8);for(let e=0;e<8;++e)r[e]=0;const{data:o,size:a}=this.position;for(let n=0;n<t;++n){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[n];let l=a*this.indices[s],c=o[l],d=o[l+1],u=o[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=a*this.indices[s+e];const t=o[l],i=o[l+1],r=o[l+2];t<c&&(c=t),i<d&&(d=i),r<u&&(u=r)}c<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),i[n]=t,++r[t]}let n=0;for(let e=0;e<8;++e)r[e]>0&&++n;if(n<2)return;const s=new Array(8);for(let e=0;e<8;++e)s[e]=r[e]>0?new Uint32Array(r[e]):void 0;for(let e=0;e<8;++e)r[e]=0;for(let e=0;e<t;++e){const t=i[e];s[t][r[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==s[e]&&(this._children[e]=new E(s[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){P.prune()}}const P=new O.Z({deallocator:null});var R=i(10107),I=i(95399),N=i(51701),L=i(21414);class H extends R.c{constructor(e,t=[],i=M.MX.Triangle,r=-1){super(),this._primitiveType=i,this.edgeIndicesLength=r,this.type=I.U.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,i]of e)i&&this._vertexAttributes.set(t,{...i});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,N.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,i]of t)i&&(this._indices.set(e,D(i)),e===L.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}cloneShallow(){const e=new H([],void 0,this._primitiveType,void 0),{_vertexAttributes:t,_indices:i}=e;return this._vertexAttributes.forEach(((e,i)=>{t.set(i,e)})),this._indices.forEach(((e,t)=>{i.set(t,e)})),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,o.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===M.MX.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(L.T.POSITION),i=this.vertexAttributes.get(L.T.POSITION);return(0,N.cM)(i,t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(L.T.POSITION),i=this.vertexAttributes.get(L.T.POSITION);return(0,N.NO)(i,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(L.T.POSITION);if(0===e.length)return null;const t=this.primitiveType===M.MX.Triangle?3:1;(0,y.hu)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const i=(0,N.p)(e.length/t),r=this.vertexAttributes.get(L.T.POSITION);return new E(i,t,e,r)}}function D(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var F=i(27755),B=i(31355),z=i(19431),V=i(86098),G=i(3466),U=i(73401),W=i(36567);let k;var q;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(q||(q={}));var $=i(91907),j=i(43487),J=i(62486);let X=null,K=null;async function Z(){return(0,o.Wi)(K)&&(K=function(){if((0,o.Wi)(k)){const e=e=>(0,W.V)(`esri/libs/basisu/${e}`);k=i.e(1681).then(i.bind(i,21681)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return k}(),X=await K),K}function Y(e,t,i,r,o){const a=(0,J.RG)(t?$.q_.COMPRESSED_RGBA8_ETC2_EAC:$.q_.COMPRESSED_RGB8_ETC2),n=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(i*r*a*n)}function Q(e){return e.getNumImages()>=1&&!e.isUASTC()}function ee(e){return e.getFaces()>=1&&e.isETC1S()}function te(e,t,i,r,o,a,n,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?r?[q.ETC2_RGBA,$.q_.COMPRESSED_RGBA8_ETC2_EAC]:[q.ETC1_RGB,$.q_.COMPRESSED_RGB8_ETC2]:c?r?[q.BC3_RGBA,$.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[q.BC1_RGB,$.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[q.RGBA32,$.VI.RGBA],h=t.hasMipmap?i:Math.min(1,i),p=[];for(let e=0;e<h;e++)p.push(new Uint8Array(n(e,d))),s(e,d,p[e]);const m=p.length>1,f=m?$.cw.LINEAR_MIPMAP_LINEAR:$.cw.LINEAR,v={...t,samplingMode:f,hasMipmap:m,internalFormat:u,width:o,height:a};return new j.x(e,v,{type:"compressed",levels:p})}const ie=A.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function re(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const oe=re("DXT1"),ae=re("DXT3"),ne=re("DXT5");var se=i(5474),le=i(41163);new le.G(L.T.POSITION,3,$.g.FLOAT,0,12),new le.G(L.T.POSITION,3,$.g.FLOAT,0,20),new le.G(L.T.UV0,2,$.g.FLOAT,12,20),new le.G(L.T.POSITION,3,$.g.FLOAT,0,32),new le.G(L.T.NORMAL,3,$.g.FLOAT,12,32),new le.G(L.T.UV0,2,$.g.FLOAT,24,32),new le.G(L.T.POSITION,3,$.g.FLOAT,0,16),new le.G(L.T.COLOR,4,$.g.UNSIGNED_BYTE,12,16);const ce=[new le.G(L.T.POSITION,2,$.g.FLOAT,0,8)],de=[new le.G(L.T.POSITION,2,$.g.FLOAT,0,16),new le.G(L.T.UV0,2,$.g.FLOAT,8,16)];var ue,he,pe=i(78951),me=i(29620),fe=i(18567),ve=i(79193);class ge extends R.c{constructor(e,t){super(),this.data=e,this.type=I.U.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new B.Z,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:$.e8.REPEAT,t:$.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||M.CE.STRETCH,this.estimatedTexMemRequired=ge._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;(0,o.Wi)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,G.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,G.HK)(e.src)||(0,G.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,o.Wi)(e))return 0;if((0,V.eP)(e)||(0,V.lq)(e))return t.encoding===ge.KTX2_ENCODING?function(e,t){if((0,o.Wi)(X))return e.byteLength;const i=new X.KTX2File(new Uint8Array(e)),r=ee(i)?Y(i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),t):0;return i.close(),i.delete(),r}(e,t.mipmap):t.encoding===ge.BASIS_ENCODING?function(e,t){if((0,o.Wi)(X))return e.byteLength;const i=new X.BasisFile(new Uint8Array(e)),r=Q(i)?Y(i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),t):0;return i.close(),i.delete(),r}(e,t.mipmap):e.byteLength;const{width:i,height:r}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?ge._getDataDimensions(e):t;return(t.mipmap?4/3:1)*i*r*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:$.No.TEXTURE_2D,pixelFormat:$.VI.RGBA,dataType:$.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?$.cw.LINEAR_MIPMAP_LINEAR:$.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,t){if((0,o.pC)(this._glTexture))return this._glTexture;if((0,o.pC)(this._loadingPromise))return this._loadingPromise;const i=this.data;return(0,o.Wi)(i)?(this._glTexture=new j.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof i?this._loadFromURL(e,t,i):i instanceof Image?this._loadFromImageElement(e,t,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,t):((0,V.eP)(i)||(0,V.lq)(i))&&this.params.encoding===ge.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,i)):((0,V.eP)(i)||(0,V.lq)(i))&&this.params.encoding===ge.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,i)):((0,V.eP)(i)||(0,V.lq)(i))&&this.params.encoding===ge.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,i)):(0,V.lq)(i)?this._loadFromPixelData(e,i):(0,V.eP)(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,i){if(!(this.data instanceof HTMLVideoElement)||(0,o.Wi)(this._glTexture))return i;if(this.data.readyState<ue.HAVE_CURRENT_DATA||i===this.data.currentTime)return i;if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:i,vao:r,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this.data),this._drawStretchedTexture(e,t,i,r,o,this._glTexture)}else{const{videoWidth:e,videoHeight:t}=this.data,{width:i,height:r}=this._glTexture.descriptor;e!==i||t!==r?this._glTexture.updateData(0,0,0,Math.min(e,i),Math.min(t,r),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this.data.currentTime}_loadFromDDSData(e,t){return this._glTexture=function(e,t,i){const{textureData:r,internalFormat:o,width:a,height:n}=function(e,t){const i=new Int32Array(e,0,31);if(542327876!==i[0])return ie.error("Invalid magic number in DDS header"),null;if(!(4&i[20]))return ie.error("Unsupported format, must contain a FourCC code"),null;const r=i[21];let o,a;switch(r){case oe:o=8,a=$.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case ae:o=16,a=$.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ne:o=16,a=$.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return ie.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(r)),null}let n=1,s=i[4],l=i[3];0==(3&s)&&0==(3&l)||(ie.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;131072&i[2]&&!1!==t&&(n=Math.max(1,i[7])),1===n||(0,z.wt)(s)&&(0,z.wt)(l)||(ie.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let p=i[1]+4;const m=[];for(let t=0;t<n;++t)h=(s+3>>2)*(l+3>>2)*o,u=new Uint8Array(e,p,h),m.push(u),p+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:a,width:c,height:d}}(i,t.hasMipmap);return t.samplingMode=r.levels.length>1?$.cw.LINEAR_MIPMAP_LINEAR:$.cw.LINEAR,t.hasMipmap=r.levels.length>1,t.internalFormat=o,t.width=a,t.height=n,new j.x(e,t,r)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,i){(0,o.Wi)(X)&&(X=await Z());const r=new X.KTX2File(new Uint8Array(i));if(!ee(r))return null;r.startTranscoding();const a=te(e,t,r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),((e,t)=>r.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,i)=>r.transcodeImage(i,e,0,0,t,0,-1,-1)));return r.close(),r.delete(),a}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,i){(0,o.Wi)(X)&&(X=await Z());const r=new X.BasisFile(new Uint8Array(i));if(!Q(r))return null;r.startTranscoding();const a=te(e,t,r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),((e,t)=>r.getImageTranscodedSizeInBytes(0,e,t)),((e,t,i)=>r.transcodeImage(i,0,e,t,0,0)));return r.close(),r.delete(),a}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,y.hu)(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=1===this.params.components?$.VI.LUMINANCE:3===this.params.components?$.VI.RGB:$.VI.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new j.x(e,i,t),this._glTexture}_loadFromURL(e,t,i){return this._loadAsync((async r=>{const o=await(0,w.t)(i,{signal:r});return(0,S.k_)(r),this._loadFromImage(e,o,t)}))}_loadFromImageElement(e,t,i){return i.complete?this._loadFromImage(e,i,t):this._loadAsync((async r=>{const o=await(0,U.fY)(i,i.src,!1,r);return(0,S.k_)(r),this._loadFromImage(e,o,t)}))}_loadFromVideoElement(e,t,i){return i.readyState>=ue.HAVE_CURRENT_DATA?this._loadFromImage(e,i,t):this._loadFromVideoElementAsync(e,t,i)}_loadFromVideoElementAsync(e,t,i){return this._loadAsync((r=>new Promise(((a,n)=>{const s=()=>{i.removeEventListener("loadeddata",l),i.removeEventListener("error",c),(0,o.hw)(d)},l=()=>{i.readyState>=ue.HAVE_CURRENT_DATA&&(s(),a(this._loadFromImage(e,i,t)))},c=e=>{s(),n(e||new b.Z("Failed to load video"))};i.addEventListener("loadeddata",l),i.addEventListener("error",c);const d=(0,S.fu)(r,(()=>c((0,S.zE)())))}))))}_loadFromImage(e,t,i){const r=ge._getDataDimensions(t);this.params.width=r.width,this.params.height=r.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this.params.components?$.VI.RGB:$.VI.RGBA,!this._requiresPowerOfTwo(e,o)||(0,z.wt)(r.width)&&(0,z.wt)(r.height)?(o.width=r.width,o.height=r.height,this._glTexture=new j.x(e,o,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,r,o,i),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const i=e(t.signal);this._loadingPromise=i;const r=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(r,r),i}_requiresPowerOfTwo(e,t){const i=$.e8.CLAMP_TO_EDGE,r="number"==typeof t.wrapMode?t.wrapMode===i:t.wrapMode.s===i&&t.wrapMode.t===i;return!(0,ve.Z)(e.gl)&&(t.hasMipmap||!r)}_makePowerOfTwoTexture(e,t,i,r,o){const{width:a,height:n}=i,s=(0,z.Sf)(a),l=(0,z.Sf)(n);let c;switch(r.width=s,r.height=l,this.params.powerOfTwoResizeMode){case M.CE.PAD:r.textureCoordinateScaleFactor=[a/s,n/l],c=new j.x(e,r),c.updateData(0,0,0,a,n,t);break;case M.CE.STRETCH:case null:case void 0:c=this._stretchToPowerOfTwo(e,t,r,o());break;default:(0,F.Bg)(this.params.powerOfTwoResizeMode)}return r.hasMipmap&&c.generateMipmap(),c}_stretchToPowerOfTwo(e,t,i,r){const o=new j.x(e,i),a=new fe.X(e,{colorTarget:$.Lm.TEXTURE,depthStencilTarget:$.OU.NONE},o),n=new j.x(e,{target:$.No.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:$.Br.UNSIGNED_BYTE,wrapMode:$.e8.CLAMP_TO_EDGE,samplingMode:$.cw.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},t),s=function(e,t=ce,i=se.i,r=-1,o=1){let a=null;return a=t===de?new Float32Array([r,r,0,0,o,r,1,0,r,o,0,1,o,o,1,1]):new Float32Array([r,r,o,r,r,o,o,o]),new me.U(e,i,{geometry:t},{geometry:pe.f.createVertex(e,$.l1.STATIC_DRAW,a)})}(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,r,a,s,n,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:a}:(s.dispose(!0),n.dispose(),a.detachColorTexture(),a.dispose()),e.bindFramebuffer(l),o}_drawStretchedTexture(e,t,i,r,o,a){e.bindFramebuffer(i);const n=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=e.bindTechnique(t);s.setUniform4f("uColor",1,1,1,1),s.bindTexture("tex",o),e.bindVAO(r),e.drawArrays($.MX.TRIANGLE_STRIP,0,(0,J._V)(r,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:i}=this._powerOfTwoStretchInfo;t.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,o.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,o.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}ge.DDS_ENCODING="image/vnd-ms.dds",ge.KTX2_ENCODING="image/ktx2",ge.BASIS_ENCODING="image/x.basis",(he=ue||(ue={}))[he.HAVE_NOTHING=0]="HAVE_NOTHING",he[he.HAVE_METADATA=1]="HAVE_METADATA",he[he.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",he[he.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",he[he.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";var xe,_e,Te,be,Ae=i(65684),Se=i(44685),Ce=i(25714),we=i(90511),Me=i(2833),Oe=i(3864),ye=i(97009),Ee=i(7358),Pe=i(12045);(be=xe||(xe={}))[be.MATERIAL=0]="MATERIAL",be[be.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",be[be.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",be[be.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",be[be.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",be[be.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",be[be.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",be[be.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT",(Te=_e||(_e={}))[Te.INTEGRATED_MESH=0]="INTEGRATED_MESH",Te[Te.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",Te[Te.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",Te[Te.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",Te[Te.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",Te[Te.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",Te[Te.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",Te[Te.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",Te[Te.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",Te[Te.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",Te[Te.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",Te[Te.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",Te[Te.LASERLINES=12]="LASERLINES",Te[Te.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",Te[Te.HUD_MATERIAL=14]="HUD_MATERIAL",Te[Te.LABEL_MATERIAL=15]="LABEL_MATERIAL",Te[Te.LINE_CALLOUTS=16]="LINE_CALLOUTS",Te[Te.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",Te[Te.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",Te[Te.DRAPED_WATER=19]="DRAPED_WATER",Te[Te.VOXEL=20]="VOXEL",Te[Te.MAX_SLOTS=21]="MAX_SLOTS";var Re=i(10663),Ie=i(61044),Ne=i(79912),Le=i(45612);const He=(0,d.c)(),De=(0,d.c)(),Fe=(0,d.c)(),Be=new class{constructor(e=0){this.offset=e,this.sphere=(0,Le.c)(),this.tmpVertex=(0,d.c)()}applyToVertex(e,t,i){const r=this.objectTransform.transform;let o=r[0]*e+r[4]*t+r[8]*i+r[12],a=r[1]*e+r[5]*t+r[9]*i+r[13],n=r[2]*e+r[6]*t+r[10]*i+r[14];const s=this.offset/Math.sqrt(o*o+a*a+n*n);o+=o*s,a+=a*s,n+=n*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*a+l[8]*n+l[12],this.tmpVertex[1]=l[1]*o+l[5]*a+l[9]*n+l[13],this.tmpVertex[2]=l[2]*o+l[6]*a+l[10]*n+l[14],this.tmpVertex}applyToMinMax(e,t){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*r,t[1]+=t[1]*r,t[2]+=t[2]*r}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/t;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,d.c)(),this._mbs=(0,Le.c)(),this._obb={center:(0,d.c)(),halfSize:(0,Ne.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,i){const r=e,o=t,a=i+this.componentLocalOriginLength,n=this._totalOffset/Math.sqrt(r*r+o*o+a*a);return this._tmpVertex[0]=e+r*n,this._tmpVertex[1]=t+o*n,this._tmpVertex[2]=i+a*n,this._tmpVertex}applyToAabb(e){const t=e[0],i=e[1],r=e[2]+this.componentLocalOriginLength,o=e[3],a=e[4],n=e[5]+this.componentLocalOriginLength,s=t*o<0?0:Math.min(Math.abs(t),Math.abs(o)),l=i*a<0?0:Math.min(Math.abs(i),Math.abs(a)),c=r*n<0?0:Math.min(Math.abs(r),Math.abs(n)),d=Math.sqrt(s*s+l*l+c*c);if(d<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=i<0?this._totalOffset:0,e[2]-=r<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=a>0?this._totalOffset:0,e[5]+=n>0?this._totalOffset:0,e;const u=Math.max(Math.abs(t),Math.abs(o)),h=Math.max(Math.abs(i),Math.abs(a)),p=Math.max(Math.abs(r),Math.abs(n)),m=Math.sqrt(u*u+h*h+p*p),f=this._totalOffset/m,v=this._totalOffset/d;return e[0]+=t*(t>0?f:v),e[1]+=i*(i>0?f:v),e[2]+=r*(r>0?f:v),e[3]+=o*(o<0?f:v),e[4]+=a*(a<0?f:v),e[5]+=n*(n<0?f:v),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*i,this._mbs[1]=e[1]+e[1]*i,this._mbs[2]=e[2]+e[2]*i,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,i=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*i,this._obb.center[1]=t[1]+t[1]*i,this._obb.center[2]=t[2]+t[2]*i,(0,c.q)(this._obb.halfSize,e.halfSize,e.quaternion),(0,c.a)(this._obb.halfSize,this._obb.halfSize,e.center);const r=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*r,this._obb.halfSize[1]+=this._obb.halfSize[1]*r,this._obb.halfSize[2]+=this._obb.halfSize[2]*r,(0,c.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,Re.c)(ze,e.quaternion),(0,c.q)(this._obb.halfSize,this._obb.halfSize,ze),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,d.c)()}applyToVertex(e,t,i){const r=e+this.localOrigin[0],o=t+this.localOrigin[1],a=i+this.localOrigin[2],n=this.offset/Math.sqrt(r*r+o*o+a*a);return this.tmpVertex[0]=e+r*n,this.tmpVertex[1]=t+o*n,this.tmpVertex[2]=i+a*n,this.tmpVertex}applyToAabb(e){for(let t=0;t<3;++t)He[t]=e[0+t]+this.localOrigin[t],De[t]=e[3+t]+this.localOrigin[t],Fe[t]=He[t];const t=this.applyToVertex(He[0],He[1],He[2]);for(let i=0;i<3;++i)e[i]=t[i],e[i+3]=t[i];const i=t=>{const i=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t+0]=Math.min(e[t+0],i[t]),e[t+3]=Math.max(e[t+3],i[t])};for(let e=1;e<8;++e){for(let t=0;t<3;++t)Fe[t]=0==(e&1<<t)?He[t]:De[t];i(Fe)}let r=0;for(let e=0;e<3;++e)He[e]*De[e]<0&&(r|=1<<e);if(0!==r&&7!==r)for(let e=0;e<8;++e)if(0==(r&e)){for(let t=0;t<3;++t)r[t]?Fe[t]=0:Fe[t]=0!=(e&1<<t)?He[t]:De[t];i(Fe)}for(let t=0;t<3;++t)e[t+0]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const ze=(0,Ie.a)();function Ve(e,t,i,r){const o=i.typedBuffer,a=i.typedBufferStride,n=e.length;r*=a;for(let i=0;i<n;++i){const n=2*e[i];o[r]=t[n],o[r+1]=t[n+1],r+=a}}function Ge(e,t,i,r,o){const a=i.typedBuffer,n=i.typedBufferStride,s=e.length;if(r*=n,null==o||1===o)for(let i=0;i<s;++i){const o=3*e[i];a[r]=t[o],a[r+1]=t[o+1],a[r+2]=t[o+2],r+=n}else for(let i=0;i<s;++i){const s=3*e[i];for(let e=0;e<o;++e)a[r]=t[s],a[r+1]=t[s+1],a[r+2]=t[s+2],r+=n}}function Ue(e,t,i,r,o,a=1){if(!i)return void Ge(e,t,r,o,a);const n=r.typedBuffer,s=r.typedBufferStride,l=e.length,c=i[0],d=i[1],u=i[2],h=i[4],p=i[5],m=i[6],f=i[8],v=i[9],g=i[10],x=i[12],_=i[13],T=i[14];if(o*=s,1===a)for(let i=0;i<l;++i){const r=3*e[i],a=t[r],l=t[r+1],b=t[r+2];n[o]=c*a+h*l+f*b+x,n[o+1]=d*a+p*l+v*b+_,n[o+2]=u*a+m*l+g*b+T,o+=s}else for(let i=0;i<l;++i){const r=3*e[i],l=t[r],b=t[r+1],A=t[r+2],S=c*l+h*b+f*A+x,C=d*l+p*b+v*A+_,w=u*l+m*b+g*A+T;for(let e=0;e<a;++e)n[o]=S,n[o+1]=C,n[o+2]=w,o+=s}}function We(e,t,i,r,o,a=1){if(!i)return void Ge(e,t,r,o,a);const n=i,l=r.typedBuffer,c=r.typedBufferStride,d=e.length,u=n[0],h=n[1],p=n[2],m=n[4],f=n[5],v=n[6],g=n[8],x=n[9],_=n[10],T=!(0,s.p)(n),b=1e-6,A=1-b;if(o*=c,1===a)for(let i=0;i<d;++i){const r=3*e[i],a=t[r],n=t[r+1],s=t[r+2];let d=u*a+m*n+g*s,S=h*a+f*n+x*s,C=p*a+v*n+_*s;if(T){const e=d*d+S*S+C*C;if(e<A&&e>b){const t=1/Math.sqrt(e);d*=t,S*=t,C*=t}}l[o+0]=d,l[o+1]=S,l[o+2]=C,o+=c}else for(let i=0;i<d;++i){const r=3*e[i],n=t[r],s=t[r+1],d=t[r+2];let S=u*n+m*s+g*d,C=h*n+f*s+x*d,w=p*n+v*s+_*d;if(T){const e=S*S+C*C+w*w;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,C*=t,w*=t}}for(let e=0;e<a;++e)l[o+0]=S,l[o+1]=C,l[o+2]=w,o+=c}}function ke(e,t,i,r,o,a=1){if(!i)return void function(e,t,i,r,o=1){const a=i.typedBuffer,n=i.typedBufferStride,s=e.length;if(r*=n,1===o)for(let i=0;i<s;++i){const o=4*e[i];a[r]=t[o],a[r+1]=t[o+1],a[r+2]=t[o+2],a[r+3]=t[o+3],r+=n}else for(let i=0;i<s;++i){const s=4*e[i];for(let e=0;e<o;++e)a[r]=t[s],a[r+1]=t[s+1],a[r+2]=t[s+2],a[r+3]=t[s+3],r+=n}}(e,t,r,o,a);const n=i,l=r.typedBuffer,c=r.typedBufferStride,d=e.length,u=n[0],h=n[1],p=n[2],m=n[4],f=n[5],v=n[6],g=n[8],x=n[9],_=n[10],T=!(0,s.p)(n),b=1e-6,A=1-b;if(o*=c,1===a)for(let i=0;i<d;++i){const r=4*e[i],a=t[r],n=t[r+1],s=t[r+2],d=t[r+3];let S=u*a+m*n+g*s,C=h*a+f*n+x*s,w=p*a+v*n+_*s;if(T){const e=S*S+C*C+w*w;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,C*=t,w*=t}}l[o+0]=S,l[o+1]=C,l[o+2]=w,l[o+3]=d,o+=c}else for(let i=0;i<d;++i){const r=4*e[i],n=t[r],s=t[r+1],d=t[r+2],S=t[r+3];let C=u*n+m*s+g*d,w=h*n+f*s+x*d,M=p*n+v*s+_*d;if(T){const e=C*C+w*w+M*M;if(e<A&&e>b){const t=1/Math.sqrt(e);C*=t,w*=t,M*=t}}for(let e=0;e<a;++e)l[o+0]=C,l[o+1]=w,l[o+2]=M,l[o+3]=S,o+=c}}function qe(e,t,i,r,o,a=1){const n=r.typedBuffer,s=r.typedBufferStride,l=e.length;if(o*=s,1===a){if(4===i)for(let i=0;i<l;++i){const r=4*e[i];n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=s}else if(3===i)for(let i=0;i<l;++i){const r=3*e[i];n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=255,o+=s}}else if(4===i)for(let i=0;i<l;++i){const r=4*e[i];for(let e=0;e<a;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=s}else if(3===i)for(let i=0;i<l;++i){const r=3*e[i];for(let e=0;e<a;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=255,o+=s}}var $e=i(54443),je=i(1983),Je=i(82082),Xe=i(78549),Ke=i(44391),Ze=i(5331);class Ye{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class Qe{constructor(e,t,i){this.release=i,t&&(this.initializeConfiguration(e,t),this._configuration=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,o.O3)(this._program),this._pipeline=this._configuration=null}reload(e){(0,o.O3)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPass(e,t){this.program.bindPass(e,t)}bindDraw(e,t){this.program.bindDraw(e,t),this.program.rebindTextures()}bindPipelineState(e,t=null,i){e.setPipelineState(this.getPipelineState(t,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return $.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}var et=i(40017),tt=i(6174);class it{constructor(e,t,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new O.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(et.P.Pass,this),this.bindDraw=t.generateBind(et.P.Draw,this),this._fragmentUniforms=(0,tt.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2f(e,t,i){this._glProgram.setUniform2f(e,t,i)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3f(e,t,i,r){this._glProgram.setUniform3f(e,t,i,r)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4f(e,t,i,r,o){this._glProgram.setUniform4f(e,t,i,r,o)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,o.Wi)(t)||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let i=this._textures.get(e);return null==i?(i=this._allocTextureUnit(t),this._textures.set(e,i)):i.texture=t,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(t,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,o.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}$.wb.LESS,$.wb.ALWAYS;const rt={mask:255},ot={function:{func:$.wb.ALWAYS,ref:M.hU.OutlineVisualElementMask,mask:M.hU.OutlineVisualElementMask},operation:{fail:$.xS.KEEP,zFail:$.xS.KEEP,zPass:$.xS.ZERO}},at={function:{func:$.wb.ALWAYS,ref:M.hU.OutlineVisualElementMask,mask:M.hU.OutlineVisualElementMask},operation:{fail:$.xS.KEEP,zFail:$.xS.KEEP,zPass:$.xS.REPLACE}};$.wb.EQUAL,M.hU.OutlineVisualElementMask,M.hU.OutlineVisualElementMask,$.xS.KEEP,$.xS.KEEP,$.xS.KEEP,$.wb.NOTEQUAL,M.hU.OutlineVisualElementMask,M.hU.OutlineVisualElementMask,$.xS.KEEP,$.xS.KEEP,$.xS.KEEP;var nt=i(45584),st=i(17346);class lt extends Xe.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,d.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=M.Vr.Back,this.emissiveFactor=(0,d.f)(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,d.f)(.2,.2,.2),this.diffuse=(0,d.f)(.8,.8,.8),this.externalColor=(0,je.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,d.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,n.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=M.Gv.Less,this.textureAlphaMode=M.JJ.Blend,this.textureAlphaCutoff=Ke.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Ee.yD.Occlude}}class ct extends Qe{initializeConfiguration(e,t){t.spherical=e.viewingMode===Ae.JY.Global,t.doublePrecisionRequiresObfuscation=(0,Ze.I)(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?Je.N.Default:Je.N.None}initializeProgram(e){return this._initializeProgram(e,ct.shader)}_initializeProgram(e,t){const i=t.get().build(this.configuration);return new it(e.rctx,i,se.i)}_convertDepthTestFunction(e){return e===M.Gv.Lequal?$.wb.LEQUAL:$.wb.LESS}_setPipeline(e,t){const i=this.configuration,r=e===M.Am.NONE,o=e===M.Am.FrontFace;return(0,st.sm)({blending:i.output!==Ce.H.Color&&i.output!==Ce.H.Alpha||!i.transparent?null:r?Pe.wu:(0,Pe.j7)(e),culling:dt(i)&&(0,st.zp)(i.cullFace),depthTest:{func:(0,Pe.Bh)(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:r||o?i.writeDepth&&st.LZ:null,colorWrite:st.BK,stencilWrite:i.hasOccludees?rt:null,stencilTest:i.hasOccludees?t?at:ot:null,polygonOffset:r||o?null:(0,Pe.je)(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function dt(e){return e.cullFace!==M.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}ct.shader=new Ye(nt.D,(()=>i.e(3197).then(i.bind(i,13197))));var ut=i(36663);class ht{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const i of e)t[i]=this[i];return t}}function pt(e={}){return(t,i)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(i),null!=e.constValue)Object.defineProperty(t,i,{get:()=>e.constValue});else{const r=t._parameterNames.length-1,o=e.count||2,a=Math.ceil(Math.log2(o)),n=t._parameterBits??[0];let s=0;for(;n[s]+a>16;)s++,s>=n.length&&n.push(0);t._parameterBits=n;const l=n[s],c=(1<<a)-1<<l;n[s]+=a,Object.defineProperty(t,i,{get(){return this[r]},set(e){if(this[r]!==e&&(this[r]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+i+" must be boolean or number, got "+typeof e}})}}}class mt extends ht{}(0,ut._)([pt({constValue:!0})],mt.prototype,"hasSliceHighlight",void 0),(0,ut._)([pt({constValue:!1})],mt.prototype,"hasSliceInVertexProgram",void 0),(0,ut._)([pt({constValue:!1})],mt.prototype,"instancedDoublePrecision",void 0),(0,ut._)([pt({constValue:!1})],mt.prototype,"isGround",void 0),(0,ut._)([pt({constValue:et.P.Pass})],mt.prototype,"pbrTextureBindType",void 0);class ft extends mt{constructor(){super(...arguments),this.output=Ce.H.Color,this.alphaDiscardMode=M.JJ.Opaque,this.doubleSidedMode=Me.q.None,this.pbrMode=Oe.f7.Disabled,this.cullFace=M.Vr.None,this.transparencyPassType=M.Am.NONE,this.normalType=we.h.Attribute,this.textureCoordinateType=Je.N.None,this.customDepthTest=M.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1}}(0,ut._)([pt({count:Ce.H.COUNT})],ft.prototype,"output",void 0),(0,ut._)([pt({count:M.JJ.COUNT})],ft.prototype,"alphaDiscardMode",void 0),(0,ut._)([pt({count:Me.q.COUNT})],ft.prototype,"doubleSidedMode",void 0),(0,ut._)([pt({count:Oe.f7.COUNT})],ft.prototype,"pbrMode",void 0),(0,ut._)([pt({count:M.Vr.COUNT})],ft.prototype,"cullFace",void 0),(0,ut._)([pt({count:M.Am.COUNT})],ft.prototype,"transparencyPassType",void 0),(0,ut._)([pt({count:we.h.COUNT})],ft.prototype,"normalType",void 0),(0,ut._)([pt({count:Je.N.COUNT})],ft.prototype,"textureCoordinateType",void 0),(0,ut._)([pt({count:M.Gv.COUNT})],ft.prototype,"customDepthTest",void 0),(0,ut._)([pt()],ft.prototype,"spherical",void 0),(0,ut._)([pt()],ft.prototype,"hasVertexColors",void 0),(0,ut._)([pt()],ft.prototype,"hasSymbolColors",void 0),(0,ut._)([pt()],ft.prototype,"hasVerticalOffset",void 0),(0,ut._)([pt()],ft.prototype,"hasSlicePlane",void 0),(0,ut._)([pt()],ft.prototype,"hasSliceHighlight",void 0),(0,ut._)([pt()],ft.prototype,"hasColorTexture",void 0),(0,ut._)([pt()],ft.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,ut._)([pt()],ft.prototype,"hasEmissionTexture",void 0),(0,ut._)([pt()],ft.prototype,"hasOcclusionTexture",void 0),(0,ut._)([pt()],ft.prototype,"hasNormalTexture",void 0),(0,ut._)([pt()],ft.prototype,"hasScreenSizePerspective",void 0),(0,ut._)([pt()],ft.prototype,"hasVertexTangents",void 0),(0,ut._)([pt()],ft.prototype,"hasOccludees",void 0),(0,ut._)([pt()],ft.prototype,"hasMultipassTerrain",void 0),(0,ut._)([pt()],ft.prototype,"hasModelTransformation",void 0),(0,ut._)([pt()],ft.prototype,"offsetBackfaces",void 0),(0,ut._)([pt()],ft.prototype,"vvSize",void 0),(0,ut._)([pt()],ft.prototype,"vvColor",void 0),(0,ut._)([pt()],ft.prototype,"receiveShadows",void 0),(0,ut._)([pt()],ft.prototype,"receiveAmbientOcclusion",void 0),(0,ut._)([pt()],ft.prototype,"textureAlphaPremultiplied",void 0),(0,ut._)([pt()],ft.prototype,"instanced",void 0),(0,ut._)([pt()],ft.prototype,"instancedColor",void 0),(0,ut._)([pt()],ft.prototype,"instancedDoublePrecision",void 0),(0,ut._)([pt()],ft.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,ut._)([pt()],ft.prototype,"writeDepth",void 0),(0,ut._)([pt()],ft.prototype,"transparent",void 0),(0,ut._)([pt()],ft.prototype,"enableOffset",void 0),(0,ut._)([pt()],ft.prototype,"cullAboveGround",void 0),(0,ut._)([pt()],ft.prototype,"snowCover",void 0),(0,ut._)([pt({constValue:!0})],ft.prototype,"hasVvInstancing",void 0),(0,ut._)([pt({constValue:!1})],ft.prototype,"useCustomDTRExponentForWater",void 0),(0,ut._)([pt({constValue:!1})],ft.prototype,"supportsTextureAtlas",void 0),(0,ut._)([pt({constValue:!0})],ft.prototype,"useFillLights",void 0);var vt=i(60926);class gt extends ct{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetalnessAndRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=we.h.Attribute,t.doubleSidedMode=Me.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,gt.shader)}}gt.shader=new Ye(vt.R,(()=>i.e(6353).then(i.bind(i,56353))));class xt extends Ee.F5{constructor(e){super(e,Tt),this.supportsEdges=!0,this.techniqueConfig=new ft,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=(0,Se.U$)().vec3f(L.T.POSITION).vec3f(L.T.NORMAL);return e.hasVertexTangents&&i.vec4f(L.T.TANGENT),t&&i.vec2f(L.T.UV0),e.hasVertexColors&&i.vec4u8(L.T.COLOR),e.hasSymbolColors&&i.vec4u8(L.T.SYMBOLCOLOR),i}(this.parameters),this.instanceBufferLayout=e.instanced?function(e){let t=(0,Se.U$)();return t=e.instancedDoublePrecision?t.vec3f(L.T.MODELORIGINHI).vec3f(L.T.MODELORIGINLO).mat3f(L.T.MODEL).mat3f(L.T.MODELNORMAL):t.mat4f(L.T.MODEL).mat4f(L.T.MODELNORMAL),(0,o.pC)(e.instanced)&&e.instanced.includes("color")&&(t=t.vec4f(L.T.INSTANCECOLOR)),(0,o.pC)(e.instanced)&&e.instanced.includes("featureAttribute")&&(t=t.vec4f(L.T.INSTANCEFEATUREATTRIBUTE)),t}(this.parameters):null}isVisibleInPass(e){return e!==xe.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==xe.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==xe.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:i,hasSymbolColors:r,vvColorEnabled:a}=e,n=(0,o.pC)(t)&&t.includes("color"),s="replace"===e.colorMixMode,l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return i&&(n||a||r)?!!s||l:i?s?c:l:n||a||r?!!s||l:s?c:l}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.hasVertexTangents=this.parameters.hasVertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.hasVerticalOffset=(0,o.pC)(this.parameters.verticalOffset),this.techniqueConfig.hasScreenSizePerspective=(0,o.pC)(this.parameters.screenSizePerspective),this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.hasSliceHighlight=this.parameters.hasSliceHighlight,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalType="screenDerivative"===this.parameters.normals?we.h.ScreenDerivative:we.h.Attribute,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,(0,o.pC)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.hasOccludees=this.parameters.hasOccludees,this.techniqueConfig.cullFace=this.parameters.hasSlicePlane?M.Vr.None:this.parameters.cullFace,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig.hasModelTransformation=(0,o.pC)(this.parameters.modelTransformation),e!==Ce.H.Color&&e!==Ce.H.Alpha||(this.techniqueConfig.hasVertexColors=this.parameters.hasVertexColors,this.techniqueConfig.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=Me.q.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Me.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Me.q.WindingOrder:Me.q.None,this.techniqueConfig.instancedColor=(0,o.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoHelper.ready&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Oe.f7.Schematic:Oe.f7.Normal:Oe.f7.Disabled,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<Pe.ve,this.techniqueConfig.snowCover=this.hasSnowCover(t)),this.techniqueConfig}hasSnowCover(e){return(0,o.pC)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,i,r,a,n,s){if((0,o.pC)(this.parameters.verticalOffset)){const e=r.camera;(0,c.s)(Ot,i[12],i[13],i[14]);let t=null;switch(r.viewingMode){case Ae.JY.Global:t=(0,c.n)(wt,Ot);break;case Ae.JY.Local:t=(0,c.c)(wt,Ct)}let o=0;const s=(0,c.b)(yt,Ot,e.eye),l=(0,c.l)(s),d=(0,c.g)(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,c.e)(t,d)),o+=(0,$e.Hx)(e,l,this.parameters.verticalOffset,u,this.parameters.screenSizePerspective),(0,c.g)(t,t,o),(0,c.t)(Mt,t,r.transform.inverseRotation),a=(0,c.b)(At,a,Mt),n=(0,c.b)(St,n,Mt)}var l;(0,$e.Bw)(e,t,r,a,n,(l=r.verticalOffset,(0,o.pC)(l)?(Be.offset=l,Be):null),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?_e.TRANSPARENT_MATERIAL:_e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:_e.OPAQUE_MATERIAL)||e===_e.DRAPED_MATERIAL}createGLMaterial(e){return e.output===Ce.H.Color||e.output===Ce.H.Alpha||e.output===Ce.H.Depth||e.output===Ce.H.Normal||e.output===Ce.H.Shadow||e.output===Ce.H.Highlight?new _t(e):null}createBufferWriter(){return new bt(this.vertexBufferLayout,this.instanceBufferLayout)}}class _t extends ye.F{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const t=this._material.parameters;this.updateTexture(t.textureId);const i=e.camera.viewInverseTransposeMatrix;return(0,c.s)(t.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?gt:ct,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==Ce.H.Color&&this._output!==Ce.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}const Tt=new class extends lt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};class bt{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(L.T.POSITION).length}write(e,t,i,r){!function(e,t,i,r,o,a){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),s=e.indices.get(n);if(t&&s)switch(n){case L.T.POSITION:{(0,y.hu)(3===t.size);const e=o.getField(n,h.ct);e&&Ue(s,t.data,i,e,a);break}case L.T.NORMAL:{(0,y.hu)(3===t.size);const e=o.getField(n,h.ct);e&&We(s,t.data,r,e,a);break}case L.T.UV0:{(0,y.hu)(2===t.size);const e=o.getField(n,h.Eu);e&&Ve(s,t.data,e,a);break}case L.T.COLOR:{(0,y.hu)(3===t.size||4===t.size);const e=o.getField(n,h.mc);e&&qe(s,t.data,t.size,e,a);break}case L.T.SYMBOLCOLOR:{(0,y.hu)(3===t.size||4===t.size);const e=o.getField(n,h.mc);e&&qe(s,t.data,t.size,e,a);break}case L.T.TANGENT:{(0,y.hu)(4===t.size);const e=o.getField(n,h.ek);e&&ke(s,t.data,r,e,a);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,r)}}const At=(0,d.c)(),St=(0,d.c)(),Ct=(0,d.f)(0,0,1),wt=(0,d.c)(),Mt=(0,d.c)(),Ot=(0,d.c)(),yt=(0,d.c)(),Et=A.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Pt(e){throw new b.Z("",`Request for object resource failed: ${e}`)}function Rt(e){const t=e.params,i=t.topology;let r=!0;switch(t.vertexAttributes||(Et.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const i in t.vertexAttributes){const t=e[i];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Et.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Et.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(Et.warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else Et.warn("Indexed geometries must specify faces"),r=!1;break}default:Et.warn(`Unsupported topology '${i}'`),r=!1}e.params.material||(Et.warn("Geometry requires material"),r=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(Et.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function It(e){const t=(0,u.cS)();return e.forEach((e=>{const i=e.boundingInfo;(0,o.pC)(i)&&((0,u.pp)(t,i.getBBMin()),(0,u.pp)(t,i.getBBMax()))})),t}async function Nt(e,t){const i=[];for(const r in e){const a=e[r],n=a.images[0].data;if(!n){Et.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+n,l="/textureDefinitions/"+r,c="rgba"===a.channels?a.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:$.e8.REPEAT,t:$.e8.REPEAT},preMultiplyAlpha:Lt(c)!==M.JJ.Opaque},u=(0,o.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,w.t)(s,t);i.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const r=await Promise.all(i),a={};for(const e of r)a[e.refId]=e;return a}function Lt(e){switch(e){case"mask":return M.JJ.Mask;case"maskAndTransparency":return M.JJ.MaskBlend;case"none":return M.JJ.Opaque;default:return M.JJ.Blend}}function Ht(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Dt=new C.G(1,2,"wosr");var Ft=i(14634),Bt=i(385),zt=i(32101),Vt=i(14789);async function Gt(e,t){const i=Ut((0,r.pJ)(e));if("wosr"===i.fileType){const e=await(t.cache?t.cache.loadWOSR(i.url,t):async function(e,t){const i=await async function(e,t){const i=(0,o.pC)(t)&&t.streamDataRequester;if(i)return async function(e,t,i){const r=await(0,T.q6)(t.request(e,"json",i));if(!0===r.ok)return r.value;(0,S.r9)(r.error),Pt(r.error.details.url)}(e,i,t);const r=await(0,T.q6)((0,_.default)(e,(0,o.Wg)(t)));if(!0===r.ok)return r.value.data;(0,S.r9)(r.error),Pt(r.error)}(e,t);return{resource:i,textures:await Nt(i.textureDefinitions,t)}}(i.url,t)),r=function(e,t){const i=[],r=[],a=[],n=[],s=e.resource,l=C.G.parse(s.version||"1.0","wosr");Dt.validate(l);const c=s.model.name,u=s.model.geometries,h=s.materialDefinitions,p=e.textures;let m=0;const f=new Map;for(let e=0;e<u.length;e++){const s=u[e];if(!Rt(s))continue;const l=Ht(s),c=s.params.vertexAttributes,v=[];for(const e in c){const t=c[e],i=t.values;v.push([e,{data:i,size:t.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)g.push([t,new Uint32Array(e[t].values)])}const x=p&&p[l.texture];if(x&&!f.has(l.texture)){const{image:e,params:t}=x,i=new ge(e,t);n.push(i),f.set(l.texture,i)}const _=f.get(l.texture),T=_?_.id:void 0;let b=a[l.material]?a[l.material][l.texture]:null;if(!b){const e=h[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const i=x&&x.alphaChannelUsage,r=e.transparency>0||"transparency"===i||"maskAndTransparency"===i,n=x?Lt(x.alphaChannelUsage):void 0,s={ambient:(0,d.d)(e.diffuse),diffuse:(0,d.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:M.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,o.pC)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),b=new xt(s),a[l.material]||(a[l.material]={}),a[l.material][l.texture]=b}r.push(b);const A=new H(v,g);m+=g.position?g.position.length:0,i.push(A)}return{name:c,stageResources:{textures:n,materials:r,geometries:i},pivotOffset:s.model.pivotOffset,boundingBox:It(i),numberOfVertices:m,lodThreshold:null}}(e,t);return{lods:[r],referenceBoundingBox:r.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(t.cache?t.cache.loadGLTF(i.url,t,t.usePBR):(0,g.z)(new v.C(t.streamDataRequester),i.url,t,t.usePBR)),n=(0,o.U2)(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&(0,o.pC)(n)&&a.meta.uri.includes("/RealisticTrees/")&&function(e,t){for(let i=0;i<e.model.lods.length;++i){const r=e.model.lods[i];e.customMeta.esriTreeRendering=!0;for(const a of r.parts){const r=a.attributes.normal;if((0,o.Wi)(r))return;const n=a.attributes.position,u=n.count,p=(0,d.c)(),m=(0,d.c)(),v=(0,d.c)(),g=(0,f.gS)(h.mc,u),x=(0,f.gS)(h.ct,u),_=(0,s.a)((0,l.c)(),a.transform);for(let o=0;o<u;o++){n.getVec(o,m),r.getVec(o,p),(0,c.m)(m,m,a.transform),(0,c.b)(v,m,t.center),(0,c.G)(v,v,t.radius);const s=v[2],l=(0,c.l)(v),d=Math.min(.45+.55*l*l,1);(0,c.G)(v,v,t.radius),(0,c.m)(v,v,_),(0,c.n)(v,v),i+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.h)(v,v,p,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(o,v),g.set(o,0,255*d),g.set(o,1,255*d),g.set(o,2,255*d),g.set(o,3,255)}a.attributes.normal=x,a.attributes.color=g}}}(a,n);const u=a.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:!!a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},p={...t.materialParamsMixin,treeRendering:!!a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=Wt(a,u,p,i.specifiedLodIndex);let t=e[0].boundingBox;return 0!==i.specifiedLodIndex&&(t=Wt(a,u,p,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const m=Wt(a,u,p);return{lods:m,referenceBoundingBox:m[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function Ut(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Wt(e,t,i,r){const s=e.model,l=(0,n.c)(),c=new Array,d=new Map,v=new Map;return s.lods.forEach(((e,n)=>{if(void 0!==r&&n!==r)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,o.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,u.cS)()};c.push(g),e.parts.forEach((e=>{const r=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),c=(0,o.pC)(e.attributes.texCoord0),_=(0,o.pC)(e.attributes.normal),T=function(e){switch(e){case"BLEND":return M.JJ.Blend;case"MASK":return M.JJ.Mask;case"OPAQUE":case null:case void 0:return M.JJ.Opaque}}(n.alphaMode);if(!d.has(r)){if(c){if((0,o.pC)(n.textureColor)&&!v.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:T!==M.JJ.Opaque};v.set(n.textureColor,new ge(e.data,t))}if((0,o.pC)(n.textureNormal)&&!v.has(n.textureNormal)){const e=s.textures.get(n.textureNormal);v.set(n.textureNormal,new ge(e.data,e.parameters))}if((0,o.pC)(n.textureOcclusion)&&!v.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion);v.set(n.textureOcclusion,new ge(e.data,e.parameters))}if((0,o.pC)(n.textureEmissive)&&!v.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive);v.set(n.textureEmissive,new ge(e.data,e.parameters))}if((0,o.pC)(n.textureMetallicRoughness)&&!v.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness);v.set(n.textureMetallicRoughness,new ge(e.data,e.parameters))}}const a=n.color[0]**(1/Ft.K),l=n.color[1]**(1/Ft.K),u=n.color[2]**(1/Ft.K),h=n.emissiveFactor[0]**(1/Ft.K),p=n.emissiveFactor[1]**(1/Ft.K),m=n.emissiveFactor[2]**(1/Ft.K),f=(0,o.pC)(n.textureColor)&&c?v.get(n.textureColor):null;d.set(r,new xt({...t,transparent:T===M.JJ.Blend,customDepthTest:M.Gv.Lequal,textureAlphaMode:T,textureAlphaCutoff:n.alphaCutoff,diffuse:[a,l,u],ambient:[a,l,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?M.Vr.None:M.Vr.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:_?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,o.pC)(f)?f.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:(0,o.pC)(n.textureNormal)&&c?v.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:(0,o.pC)(f)&&!!f.params.preMultiplyAlpha,occlusionTextureId:(0,o.pC)(n.textureOcclusion)&&c?v.get(n.textureOcclusion).id:void 0,emissiveTextureId:(0,o.pC)(n.textureEmissive)&&c?v.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,o.pC)(n.textureMetallicRoughness)&&c?v.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[h,p,m],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...i}))}const b=function(e,t){switch(t){case $.MX.TRIANGLES:return(0,x.nh)(e);case $.MX.TRIANGLE_STRIP:return(0,x.DA)(e);case $.MX.TRIANGLE_FAN:return(0,x.jX)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),A=e.attributes.position.count,S=(0,f.gS)(h.ct,A);(0,p.t)(S,e.attributes.position,e.transform);const C=[[L.T.POSITION,{data:S.typedBuffer,size:S.elementCount,exclusive:!0}]],w=[[L.T.POSITION,b]];if((0,o.pC)(e.attributes.normal)){const t=(0,f.gS)(h.ct,A);(0,a.a)(l,e.transform),(0,p.a)(t,e.attributes.normal,l),C.push([L.T.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push([L.T.NORMAL,b])}if((0,o.pC)(e.attributes.tangent)){const t=(0,f.gS)(h.ek,A);(0,a.a)(l,e.transform),(0,m.t)(t,e.attributes.tangent,l),C.push([L.T.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push([L.T.TANGENT,b])}if((0,o.pC)(e.attributes.texCoord0)){const t=(0,f.gS)(h.Eu,A);(0,Bt.n)(t,e.attributes.texCoord0),C.push([L.T.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push([L.T.UV0,b])}if((0,o.pC)(e.attributes.color)){const t=(0,f.gS)(h.mc,A);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.ek?(0,m.s)(t,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,zt.c)(t,e.attributes.color):e.attributes.color instanceof h.v6&&(0,m.s)(t,e.attributes.color,1/256);else{(0,zt.f)(t,255,255,255,255);const i=new h.ne(t.buffer,0,4);e.attributes.color instanceof h.ct?(0,p.s)(i,e.attributes.color,255):e.attributes.color instanceof h.ne?(0,Vt.c)(i,e.attributes.color):e.attributes.color instanceof h.mw&&(0,p.s)(i,e.attributes.color,1/256)}C.push([L.T.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),w.push([L.T.COLOR,b])}const O=new H(C,w);g.stageResources.geometries.push(O),g.stageResources.materials.push(d.get(r)),c&&((0,o.pC)(n.textureColor)&&g.stageResources.textures.push(v.get(n.textureColor)),(0,o.pC)(n.textureNormal)&&g.stageResources.textures.push(v.get(n.textureNormal)),(0,o.pC)(n.textureOcclusion)&&g.stageResources.textures.push(v.get(n.textureOcclusion)),(0,o.pC)(n.textureEmissive)&&g.stageResources.textures.push(v.get(n.textureEmissive)),(0,o.pC)(n.textureMetallicRoughness)&&g.stageResources.textures.push(v.get(n.textureMetallicRoughness))),g.numberOfVertices+=A;const y=O.boundingInfo;(0,o.pC)(y)&&((0,u.pp)(g.boundingBox,y.getBBMin()),(0,u.pp)(g.boundingBox,y.getBBMax()))}))})),c}},66352:(e,t,i)=>{var r,o;i.d(t,{a9:()=>r}),i(19431),(o=r||(r={}))[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"},44685:(e,t,i)=>{i.d(t,{U$:()=>s});var r=i(81936),o=i(90331);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const i=e.fields.get(t);this[t]=new i.constructor(this.buffer,i.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,r){const o=this.stride;if(o%4==0){const a=new Uint32Array(e.buffer,t*o,r*o/4);new Uint32Array(this.buffer,i*o,r*o/4).set(a)}else{const a=new Uint8Array(e.buffer,t*o,r*o);new Uint8Array(this.buffer,i*o,r*o).set(a)}}}class n{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,r.Eu,t),this}vec2f64(e,t){return this._appendField(e,r.q6,t),this}vec3f(e,t){return this._appendField(e,r.ct,t),this}vec3f64(e,t){return this._appendField(e,r.fP,t),this}vec4f(e,t){return this._appendField(e,r.ek,t),this}vec4f64(e,t){return this._appendField(e,r.Cd,t),this}mat3f(e,t){return this._appendField(e,r.gK,t),this}mat3f64(e,t){return this._appendField(e,r.ey,t),this}mat4f(e,t){return this._appendField(e,r.bj,t),this}mat4f64(e,t){return this._appendField(e,r.O1,t),this}vec4u8(e,t){return this._appendField(e,r.mc,t),this}f32(e,t){return this._appendField(e,r.ly,t),this}f64(e,t){return this._appendField(e,r.oS,t),this}u8(e,t){return this._appendField(e,r.D_,t),this}u16(e,t){return this._appendField(e,r.av,t),this}i8(e,t){return this._appendField(e,r.Hz,t),this}vec2i8(e,t){return this._appendField(e,r.Vs,t),this}vec2i16(e,t){return this._appendField(e,r.or,t),this}vec2u8(e,t){return this._appendField(e,r.xA,t),this}vec4u16(e,t){return this._appendField(e,r.v6,t),this}u32(e,t){return this._appendField(e,r.Nu,t),this}_appendField(e,t,i){const r=t.ElementCount*(0,o.n1)(t.ElementType),a=this.stride;this.fields.set(e,{size:r,constructor:t,offset:a,optional:i}),this.stride+=r,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.includes(e)}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new n;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,i)=>e.fields.set(i,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new n}},95650:(e,t,i)=>{i.d(t,{q:()=>s});var r=i(25714),o=i(62295),a=i(93072),n=i(23410);function s(e,t){t.output===r.H.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(n.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===r.H.Depth||t.output===r.H.Shadow?(e.include(o.up,t),e.varyings.add("linearDepth","float"),e.vertex.uniforms.add(new a.A("nearFar",((e,t)=>t.camera.nearFar))),e.vertex.code.add(n.H`void forwardLinearDepth() {
linearDepth = (-vPosition_view.z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(n.H`void forwardLinearDepth() {}`)}},57218:(e,t,i)=>{i.d(t,{w:()=>o});var r=i(23410);function o(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},25714:(e,t,i)=>{var r;i.d(t,{H:()=>r}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.Highlight=4]="Highlight",e[e.Draped=5]="Draped",e[e.Occlusion=6]="Occlusion",e[e.Alpha=7]="Alpha",e[e.COUNT=8]="COUNT"}(r||(r={}))},5885:(e,t,i)=>{i.d(t,{f5:()=>d});var r=i(61681),o=i(24455),a=i(39100),n=i(6766),s=i(8909),l=i(32006),c=(i(43036),i(23410));function d(e,t){!function(e,t,i){if(!t.hasSlicePlane){const i=c.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}e.extensions.add("GL_OES_standard_derivatives"),t.hasSliceInVertexProgram&&e.vertex.uniforms.add(i),e.fragment.uniforms.add(i);const r=c.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=c.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=t.hasSliceHighlight?c.H`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:c.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(a)}(e,t,[new l.B("slicePlaneOrigin",((e,i)=>function(e,t,i){if((0,r.Wi)(i.slicePlane))return s.Z;const o=u(e,t,i),a=h(o,i.slicePlane),l=p(e,o,i);return(0,r.pC)(l)?(0,n.m)(v,a,l):a}(t,e,i))),new l.B("slicePlaneBasis1",((e,i)=>m(t,e,i,(0,r.Wg)(i.slicePlane)?.basis1))),new l.B("slicePlaneBasis2",((e,i)=>m(t,e,i,(0,r.Wg)(i.slicePlane)?.basis2)))])}function u(e,t,i){return e.instancedDoublePrecision?(0,n.s)(f,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function h(e,t){return(0,r.pC)(e)?(0,n.b)(v,t.origin,e):t.origin}function p(e,t,i){return e.hasSliceTranslatedView?(0,r.pC)(t)?(0,o.j)(x,i.camera.viewMatrix,t):i.camera.viewMatrix:null}function m(e,t,i,o){if((0,r.Wi)(o)||(0,r.Wi)(i.slicePlane))return s.Z;const a=u(e,t,i),l=h(a,i.slicePlane),c=p(e,a,i);return(0,r.pC)(c)?((0,n.a)(g,o,l),(0,n.m)(v,l,c),(0,n.m)(g,g,c),(0,n.b)(g,g,v)):o}const f=(0,s.c)(),v=(0,s.c)(),g=(0,s.c)(),x=(0,a.c)()},4731:(e,t,i)=>{i.d(t,{w:()=>o});var r=i(23410);function o(e,t={hasModelTransformation:!1,linearDepth:!1}){if(t.hasModelTransformation)return t.linearDepth?void e.vertex.code.add(r.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void e.vertex.code.add(r.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.linearDepth?e.vertex.code.add(r.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(r.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},99163:(e,t,i)=>{i.d(t,{f:()=>h});var r=i(6766),o=i(8909),a=i(25714),n=i(5331),s=i(32006),l=i(23410),c=i(87621),d=i(21414),u=i(30560);function h(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(d.T.MODELORIGINHI,"vec3"),e.attributes.add(d.T.MODELORIGINLO,"vec3"),e.attributes.add(d.T.MODEL,"mat3"),e.attributes.add(d.T.MODELNORMAL,"mat3"));const i=e.vertex;t.instancedDoublePrecision&&(i.include(n.$,t),i.uniforms.add(new s.B("viewOriginHi",((e,t)=>(0,u.U8)((0,r.s)(p,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),p)))),i.uniforms.add(new s.B("viewOriginLo",((e,t)=>(0,u.GB)((0,r.s)(p,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),p))))),i.code.add(l.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),i.code.add(l.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?l.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(l.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===a.H.Normal&&(i.uniforms.add(new c.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix))),i.code.add(l.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&i.code.add(l.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}const p=(0,o.c)()},90511:(e,t,i)=>{i.d(t,{O:()=>l,h:()=>a});var r=i(23410);function o(e){const t=r.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}var a,n,s=i(21414);function l(e,t){t.normalType===a.Attribute&&(e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(r.H`vec3 normalModel() {
return normal;
}`)),t.normalType===a.CompressedAttribute&&(e.include(o),e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(r.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===a.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}(n=a||(a={}))[n.Attribute=0]="Attribute",n[n.CompressedAttribute=1]="CompressedAttribute",n[n.Ground=2]="Ground",n[n.ScreenDerivative=3]="ScreenDerivative",n[n.COUNT=4]="COUNT"},91636:(e,t,i)=>{i.d(t,{f:()=>a});var r=i(23410),o=i(21414);function a(e){e.attributes.add(o.T.POSITION,"vec3"),e.vertex.code.add(r.H`vec3 positionModel() { return position; }`)}},40433:(e,t,i)=>{i.d(t,{R:()=>c});var r=i(66352),o=i(23410);function a(e){e.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(r.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(r.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(r.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(r.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var n=i(59842),s=i(21414),l=i(54443);function c(e,t){t.hasSymbolColors?(e.include(a),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},82082:(e,t,i)=>{i.d(t,{D:()=>l,N:()=>r});var r,o,a=i(27755),n=i(23410),s=i(21414);function l(e,t){switch(t.textureCoordinateType){case r.Default:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case r.Atlas:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);case r.None:return void e.vertex.code.add(n.H`void forwardTextureCoordinates() {}`);default:(0,a.Bg)(t.textureCoordinateType);case r.COUNT:return}}(o=r||(r={}))[o.None=0]="None",o[o.Default=1]="Default",o[o.Atlas=2]="Atlas",o[o.COUNT=3]="COUNT"},6502:(e,t,i)=>{i.d(t,{c:()=>a});var r=i(23410),o=i(21414);function a(e,t){t.hasVertexColors?(e.attributes.add(o.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(r.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(r.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(r.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},78549:(e,t,i)=>{i.d(t,{Bb:()=>c,d4:()=>d});var r=i(34344),o=(i(1983),i(90511)),a=i(62295),n=i(23410),s=i(55784),l=i(11125);function c(e,t){t.normalType===o.h.Attribute||t.normalType===o.h.CompressedAttribute?(e.include(o.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new s.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new l.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(n.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===o.h.Ground?(e.include(a.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(n.H`
    void forwardNormal() {
      vNormalWorld = ${t.spherical?n.H`normalize(vPositionWorldCameraRelative);`:n.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(n.H`void forwardNormal() {}`)}class d extends a.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,r.c)()}}},62295:(e,t,i)=>{i.d(t,{su:()=>f,up:()=>m});var r=i(34344),o=i(39100),a=(i(79912),i(8909)),n=i(91636),s=i(5331),l=i(32006),c=i(43036),d=i(23410),u=i(55784),h=i(11125),p=i(87621);function m(e,t){e.include(n.f);const i=e.vertex;i.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),i.uniforms.add([new c.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new p.g("transformProjFromView",(e=>e.transformProjFromView)),new u.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),i.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),i.code.add(d.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?d.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),i.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class f extends d.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,a.c)(),this.transformWorldFromViewTL=(0,a.c)(),this.transformViewFromCameraRelativeRS=(0,r.c)(),this.transformProjFromView=(0,o.c)()}}},72129:(e,t,i)=>{i.d(t,{i:()=>s});var r=i(27755),o=i(82082),a=i(23410);function n(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function s(e,t){switch(e.include(o.D,t),e.fragment.code.add(a.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case o.N.Default:return void e.fragment.code.add(a.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case o.N.Atlas:return e.include(n),void e.fragment.code.add(a.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,r.Bg)(t.textureCoordinateType);case o.N.None:case o.N.COUNT:return}}},5664:(e,t,i)=>{i.d(t,{L:()=>d});var r=i(88589),o=i(1983),a=i(63371),n=i(23410);function s(e){e.vertex.code.add(n.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(n.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(n.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(n.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(n.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(n.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(n.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}const l=(0,o.c)();var c=i(71354);function d(e,t){const i=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new a.N("verticalOffset",((e,t)=>{const{minWorldLength:i,maxWorldLength:o,screenLength:a}=e.verticalOffset,n=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,r.s)(u,a*s,n,i,o)})))}(i),t.hasScreenSizePerspective&&(e.include(s),function(e){e.uniforms.add(new a.N("screenSizePerspectiveAlignment",(e=>function(e){return(0,r.s)(l,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(i),(0,c.h)(e.vertex,t)),i.code.add(n.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?n.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:n.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?n.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:n.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):i.code.add(n.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const u=(0,o.c)()},65234:(e,t,i)=>{i.d(t,{s:()=>b});var r=i(25714),o=i(5885),a=i(4731),n=i(90511),s=i(82082),l=i(78549),c=i(9794),d=i(23410);function u(e,t){e.fragment.include(c.n),t.output===r.H.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(d.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):t.output===r.H.Depth&&e.fragment.code.add(d.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}i(69666);var h=i(1983),p=i(93072),m=i(15176);const f=(0,h.f)(1,1,0,1),v=(0,h.f)(1,0,1,1);function g(e){e.fragment.uniforms.add(new m.A("depthTex",((e,t)=>t.highlightDepthTexture))),e.fragment.uniforms.add(new p.A("highlightViewportPixelSz",((e,t)=>t.inverseViewport))),e.fragment.constants.add("occludedHighlightFlag","vec4",f).add("unoccludedHighlightFlag","vec4",v),e.fragment.code.add(d.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, fragCoord.xy * highlightViewportPixelSz.xy).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}var x=i(73063),_=i(49745),T=i(71354);function b(e,t){const i=e.vertex.code,c=e.fragment.code,h=t.hasModelTransformation;t.output!==r.H.Depth&&t.output!==r.H.Shadow||((0,T.S)(e,t),e.include(a.w,{linearDepth:!0,hasModelTransformation:h}),e.include(s.D,t),e.include(x.k,t),e.include(u,t),e.include(o.f5,t),e.vertex.uniforms.add(new p.A("nearFar",((e,t)=>t.camera.nearFar))),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add(new m.A("tex",(e=>e.texture))),i.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${h?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(_.z,t),c.add(d.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===r.H.Normal&&((0,T.S)(e,t),e.include(a.w,{linearDepth:!1,hasModelTransformation:h}),e.include(n.O,t),e.include(l.Bb,t),e.include(s.D,t),e.include(x.k,t),t.hasColorTexture&&e.fragment.uniforms.add(new m.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),i.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===n.h.Attribute?d.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${h?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.f5,t),e.include(_.z,t),c.add(d.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===n.h.ScreenDerivative?d.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:d.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===r.H.Highlight&&((0,T.S)(e,t),e.include(a.w,{linearDepth:!1,hasModelTransformation:h}),e.include(s.D,t),e.include(x.k,t),t.hasColorTexture&&e.fragment.uniforms.add(new m.A("tex",(e=>e.texture))),i.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${h?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.f5,t),e.include(_.z,t),e.include(g),c.add(d.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},3417:(e,t,i)=>{i.d(t,{Q:()=>u});var r=i(82082),o=i(72129),a=i(2833),n=i(23410),s=i(32466),l=i(15176),c=i(40017),d=i(21414);function u(e,t){const i=e.fragment;if(t.hasVertexTangents?(e.attributes.add(d.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===a.q.WindingOrder?i.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),i.code.add(n.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==r.N.None){e.include(o.i,t);const r=t.supportsTextureAtlas;i.uniforms.add(t.pbrTextureBindType===c.P.Pass?(0,l.J)("normalTexture",(e=>e.textureNormal),r):(0,s.F)("normalTexture",(e=>e.textureNormal),r)),i.code.add(n.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},30786:(e,t,i)=>{i.d(t,{K:()=>l});var r=i(88589),o=i(1983),a=i(63371),n=i(23410),s=i(15176);function l(e,t){const i=e.fragment;t.receiveAmbientOcclusion?(i.uniforms.add([new s.A("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture)),new a.N("viewportPixelSz",((e,t)=>(0,r.s)(c,t.camera.fullViewport[0],t.camera.fullViewport[1],1/t.ssaoHelper.width,1/t.ssaoHelper.height)))]),i.code.add(n.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):i.code.add(n.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}const c=(0,o.c)()},16696:(e,t,i)=>{i.d(t,{X:()=>S});var r=i(6766),o=i(8909),a=i(88589),n=i(1983),s=i(3864),l=i(43036),c=i(63371),d=i(23410);function u(e,t){const i=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(i.uniforms.add(new l.J("lightingAmbientSH0",((e,t)=>(0,r.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),i.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(i.uniforms.add([new c.N("lightingAmbientSH_R",((e,t)=>(0,a.s)(p,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new c.N("lightingAmbientSH_G",((e,t)=>(0,a.s)(p,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new c.N("lightingAmbientSH_B",((e,t)=>(0,a.s)(p,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),i.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(i.uniforms.add([new l.J("lightingAmbientSH0",((e,t)=>(0,r.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new c.N("lightingAmbientSH_R1",((e,t)=>(0,a.s)(p,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new c.N("lightingAmbientSH_G1",((e,t)=>(0,a.s)(p,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new c.N("lightingAmbientSH_B1",((e,t)=>(0,a.s)(p,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new c.N("lightingAmbientSH_R2",((e,t)=>(0,a.s)(p,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new c.N("lightingAmbientSH_G2",((e,t)=>(0,a.s)(p,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new c.N("lightingAmbientSH_B2",((e,t)=>(0,a.s)(p,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),i.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==s.f7.Normal&&t.pbrMode!==s.f7.Schematic||i.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const h=(0,o.c)(),p=(0,n.c)();var m=i(30786),f=i(24603);function v(e,t){const i=e.fragment;t.isGround?i.uniforms.add(new f.p("lightingFixedFactor",((e,t)=>(1-t.lighting.groundLightingFactor)*(1-t.lighting.globalFactor)))):i.constants.add("lightingFixedFactor","float",0),i.uniforms.add([new l.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection)),new l.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),i.code.add(d.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var g=i(89585),x=i(95509),_=i(91013),T=i(40017);class b extends _.x{constructor(e,t){super(e,"bool",T.P.Pass,((i,r,o)=>i.setUniform1b(e,t(r,o))))}}var A=i(27325);function S(e,t){const i=e.fragment;e.include(m.K,t),t.pbrMode!==s.f7.Disabled&&e.include(g.T,t),e.include(u,t),i.constants.add("ambientBoostFactor","float",A.V),e.include(x.e),i.code.add(d.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===s.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),i.uniforms.add(new l.J("lightingMainDirection",((e,t)=>t.lighting.lightingMainDirection))),i.code.add(d.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?d.H`normalize(vPosWorld)`:d.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),i.uniforms.add([new f.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)),new l.J("lightingMainIntensity",((e,t)=>t.lighting.mainLight.intensity))]),i.code.add(d.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===s.f7.Disabled||t.pbrMode===s.f7.WaterOnIntegratedMesh?(e.include(v,t),i.code.add(d.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)):t.pbrMode!==s.f7.Normal&&t.pbrMode!==s.f7.Schematic||(i.code.add(d.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),i.code.add(d.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?i.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):i.constants.add("hasFillLights","bool",!1),i.code.add(d.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),i.uniforms.add([new f.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new f.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),i.code.add(d.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),i.code.add(d.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===s.f7.Schematic?d.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},43031:(e,t,i)=>{i.d(t,{l:()=>l});var r=i(9794),o=i(23410);function a(e){e.include(r.n),e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}var n=i(93072),s=i(15176);function l(e,t){t.hasMultipassTerrain&&(e.fragment.include(a),e.fragment.uniforms.add(new s.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new n.A("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new n.A("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(o.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},2833:(e,t,i)=>{i.d(t,{k:()=>s,q:()=>r});var r,o,a=i(27755),n=i(23410);function s(e,t){const i=e.fragment;switch(i.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case r.None:i.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:i.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:i.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,a.Bg)(t.doubleSidedMode);case r.COUNT:}}(o=r||(r={}))[o.None=0]="None",o[o.View=1]="View",o[o.WindingOrder=2]="WindingOrder",o[o.COUNT=3]="COUNT"},89585:(e,t,i)=>{i.d(t,{T:()=>s});var r=i(23410);function o(e){const t=e.fragment.code;t.add(r.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(r.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(r.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var a=i(3864),n=i(95509);function s(e,t){const i=e.fragment.code;e.include(n.e),t.pbrMode===a.f7.Water||t.pbrMode===a.f7.WaterOnIntegratedMesh?(i.add(r.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),i.add(r.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),i.add(r.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),i.add(r.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),i.add(r.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==a.f7.Normal&&t.pbrMode!==a.f7.Schematic||(e.include(o),i.add(r.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),i.add(r.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),i.add(r.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),i.add(r.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),i.add(r.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),i.add(r.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},3864:(e,t,i)=>{i.d(t,{f7:()=>r,jV:()=>p});var r,o,a=i(79912),n=i(72129),s=i(32006),l=i(43036),c=i(23410),d=i(32466),u=i(15176),h=i(40017);function p(e,t){const i=e.fragment,o=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===r.Normal&&o&&e.include(n.i,t),t.pbrMode!==r.Schematic)if(t.pbrMode!==r.Disabled){if(t.pbrMode===r.Normal){i.code.add(c.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas,r=t.pbrTextureBindType;t.hasMetalnessAndRoughnessTexture&&(i.uniforms.add(r===h.P.Pass?(0,u.J)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):(0,d.F)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),i.code.add(c.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(i.uniforms.add(r===h.P.Pass?(0,u.J)("texEmission",(e=>e.textureEmissive),e):(0,d.F)("texEmission",(e=>e.textureEmissive),e)),i.code.add(c.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(i.uniforms.add(r===h.P.Pass?(0,u.J)("texOcclusion",(e=>e.textureOcclusion),e):(0,d.F)("texOcclusion",(e=>e.textureOcclusion),e)),i.code.add(c.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):i.code.add(c.H`float getBakedOcclusion() { return 1.0; }`),i.uniforms.add(r===h.P.Pass?[new l.J("emissionFactor",(e=>e.emissiveFactor)),new l.J("mrrFactors",(e=>e.mrrFactors))]:[new s.B("emissionFactor",(e=>e.emissiveFactor)),new s.B("mrrFactors",(e=>e.mrrFactors))]),i.code.add(c.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)}}else i.code.add(c.H`float getBakedOcclusion() { return 1.0; }`);else i.code.add(c.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}i(97009),(0,a.f)(0,.6,.2),(o=r||(r={}))[o.Disabled=0]="Disabled",o[o.Normal=1]="Normal",o[o.Schematic=2]="Schematic",o[o.Water=3]="Water",o[o.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",o[o.COUNT=5]="COUNT"},95509:(e,t,i)=>{i.d(t,{e:()=>o});var r=i(23410);function o(e){e.vertex.code.add(r.H`const float PI = 3.141592653589793;`),e.fragment.code.add(r.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},45416:(e,t,i)=>{i.d(t,{XE:()=>p,hb:()=>h}),i(8909);var r=i(9794),o=i(63371),a=i(24603),n=i(59842),s=i(23410),l=i(91013),c=i(40017);class d extends l.x{constructor(e,t,i,r){switch(t){case c.P.Pass:case c.P.Draw:return void super(e,"mat4",t,((t,r,o)=>t.setUniformMatrix4fv(e,i(r,o))),r)}}}var u=i(15176);function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",c.P.Pass,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function p(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",c.P.Draw,((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),m(e))}function m(e){const t=e.fragment;t.include(r.n),t.uniforms.add([new u.A("shadowMapTex",((e,t)=>t.shadowMap.depthTexture)),new n._("numCascades",((e,t)=>t.shadowMap.numCascades)),new o.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances)),new a.p("depthHalfPixelSz",((e,t)=>.5/t.shadowMap.textureSize))]),t.code.add(s.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}},73063:(e,t,i)=>{i.d(t,{k:()=>u});var r=i(43036),o=i(91013),a=i(40017);class n extends o.x{constructor(e,t,i){super(e,"vec4",a.P.Pass,((i,r,o)=>i.setUniform4fv(e,t(r,o))),i)}}class s extends o.x{constructor(e,t,i){super(e,"float",a.P.Pass,((i,r,o)=>i.setUniform1fv(e,t(r,o))),i)}}var l=i(23410),c=i(11125),d=i(21414);function u(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(d.T.INSTANCEFEATUREATTRIBUTE,"vec4");const i=e.vertex;t.vvSize?(i.uniforms.add(new r.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),i.uniforms.add(new r.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),i.uniforms.add(new r.J("vvSizeOffset",(e=>e.vvSizeOffset))),i.uniforms.add(new r.J("vvSizeFactor",(e=>e.vvSizeFactor))),i.uniforms.add(new c.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),i.uniforms.add(new r.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),i.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),i.code.add(l.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):i.code.add(l.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(i.constants.add("vvColorNumber","int",8),t.hasVvInstancing&&i.uniforms.add([new s("vvColorValues",(e=>e.vvColorValues),8),new n("vvColorColors",(e=>e.vvColorColors),8)]),i.code.add(l.H`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):i.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}i(34344),i(8909),i(7358)},44391:(e,t,i)=>{i.d(t,{F:()=>r,b:()=>o});const r=.1,o=.001},49745:(e,t,i)=>{i.d(t,{z:()=>l});var r=i(44391),o=i(23410);function a(e){e.fragment.code.add(o.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.H.float(r.b)}) { discard; } }
  `)}i(91013),i(40017);var n=i(24603),s=i(70984);function l(e,t){!function(e,t,i){const r=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||r.uniforms.add(i),t.alphaDiscardMode){case s.JJ.Blend:return e.include(a);case s.JJ.Opaque:r.code.add(o.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:r.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(o.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new n.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}},5331:(e,t,i)=>{i.d(t,{$:()=>a,I:()=>n});var r=i(39994),o=i(23410);function a({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(o.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(o.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function n(e){return!!(0,r.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},78115:(e,t,i)=>{i.d(t,{a:()=>n});var r=i(25714),o=i(23410),a=i(6174);function n(e,t){const i=o.H`
  /*
  *  ${t.name}
  *  ${t.output===r.H.Color?"RenderOutput: Color":t.output===r.H.Depth?"RenderOutput: Depth":t.output===r.H.Shadow?"RenderOutput: Shadow":t.output===r.H.Normal?"RenderOutput: Normal":t.output===r.H.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,a.CG)()&&(e.fragment.code.add(i),e.vertex.code.add(i))}},10938:(e,t,i)=>{i.d(t,{y:()=>n});var r=i(66352),o=i(23410);function a(e){e.code.add(o.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function n(e){e.include(a),e.code.add(o.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.H.int(r.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(r.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o.H.int(r.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},9794:(e,t,i)=>{i.d(t,{n:()=>o});var r=i(23410);function o(e){e.code.add(r.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},71354:(e,t,i)=>{i.d(t,{h:()=>p,S:()=>m});var r=i(24455),o=i(64790),a=i(6766),n=i(8909),s=i(32006),l=i(43036),c=i(91013),d=i(40017);class u extends c.x{constructor(e,t){super(e,"mat4",d.P.Draw,((i,r,o)=>i.setUniformMatrix4fv(e,t(r,o))))}}var h=i(87621);function p(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",n.Z):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,a.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function m(e,t){if(e.vertex.uniforms.add(new h.g("proj",((e,t)=>t.camera.projectionMatrix))),t.instancedDoublePrecision){const t=(e,t)=>(0,a.s)(v,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]);e.vertex.uniforms.add(new h.g("view",((e,i)=>(0,r.j)(f,i.camera.viewMatrix,t(e,i)))));const i=new l.J("localOrigin",t);return e.vertex.uniforms.add(i),i}e.vertex.uniforms.add(new u("view",((e,t)=>(0,r.j)(f,t.camera.viewMatrix,e.origin))));const i=new s.B("localOrigin",(e=>e.origin));return e.vertex.uniforms.add(i),i}const f=(0,o.c)(),v=(0,n.c)()},93072:(e,t,i)=>{i.d(t,{A:()=>a});var r=i(91013),o=i(40017);class a extends r.x{constructor(e,t){super(e,"vec2",o.P.Pass,((i,r,o)=>i.setUniform2fv(e,t(r,o))))}}},32006:(e,t,i)=>{i.d(t,{B:()=>a});var r=i(91013),o=i(40017);class a extends r.x{constructor(e,t){super(e,"vec3",o.P.Draw,((i,r,o)=>i.setUniform3fv(e,t(r,o))))}}},43036:(e,t,i)=>{i.d(t,{J:()=>a});var r=i(91013),o=i(40017);class a extends r.x{constructor(e,t){super(e,"vec3",o.P.Pass,((i,r,o)=>i.setUniform3fv(e,t(r,o))))}}},63371:(e,t,i)=>{i.d(t,{N:()=>a});var r=i(91013),o=i(40017);class a extends r.x{constructor(e,t){super(e,"vec4",o.P.Pass,((i,r,o)=>i.setUniform4fv(e,t(r,o))))}}},24603:(e,t,i)=>{i.d(t,{p:()=>a});var r=i(91013),o=i(40017);class a extends r.x{constructor(e,t){super(e,"float",o.P.Pass,((i,r,o)=>i.setUniform1f(e,t(r,o))))}}},59842:(e,t,i)=>{i.d(t,{_:()=>a});var r=i(91013),o=i(40017);class a extends r.x{constructor(e,t){super(e,"int",o.P.Pass,((i,r,o)=>i.setUniform1i(e,t(r,o))))}}},55784:(e,t,i)=>{i.d(t,{j:()=>a});var r=i(91013),o=i(40017);class a extends r.x{constructor(e,t){super(e,"mat3",o.P.Draw,((i,r,o)=>i.setUniformMatrix3fv(e,t(r,o))))}}},11125:(e,t,i)=>{i.d(t,{c:()=>a});var r=i(91013),o=i(40017);class a extends r.x{constructor(e,t){super(e,"mat3",o.P.Pass,((i,r,o)=>i.setUniformMatrix3fv(e,t(r,o))))}}},87621:(e,t,i)=>{i.d(t,{g:()=>a});var r=i(91013),o=i(40017);class a extends r.x{constructor(e,t){super(e,"mat4",o.P.Pass,((i,r,o)=>i.setUniformMatrix4fv(e,t(r,o))))}}},67948:(e,t,i)=>{i.d(t,{B:()=>o});var r=i(91013);class o extends r.x{constructor(e){super(e,"mat4")}}},3961:(e,t,i)=>{i.d(t,{kG:()=>l});var r=i(70375),o=i(13802),a=i(61681);const n=o.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this.includedModules=new Map}include(e,t){if(this.includedModules.has(e)){const i=this.includedModules.get(e);if(i!==t){n.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const r of Object.keys(i))i[r]!==e[r]&&t.add(r);for(const r of Object.keys(e))i[r]!==e[r]&&t.add(r);t.forEach((t=>console.error(`  ${t}: current ${i[t]} new ${e[t]}`)))}}else this.includedModules.set(e,t),e(this.builder,t)}}class l extends s{constructor(){super(...arguments),this.vertex=new u,this.fragment=new u,this.attributes=new h,this.varyings=new p,this.extensions=new m,this.constants=new f}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),i=this.attributes.generateSource(e),r=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,a=o.uniforms.generateSource(),n=o.code.generateSource(),s="vertex"===e?g:v,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${a.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}`}generateBind(e,t){const i=new Map;this.vertex.uniforms.entries.forEach((t=>{const r=t.bind[e];(0,a.pC)(r)&&i.set(t.name,r)})),this.fragment.uniforms.entries.forEach((t=>{const r=t.bind[e];(0,a.pC)(r)&&i.set(t.name,r)}));const r=Array.from(i.values()),o=r.length;return(e,i)=>{for(let a=0;a<o;++a)r[a](t,e,i)}}}class c{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const t of e)this._add(t)}_add(e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new r.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}generateSource(){return Array.from(this._entries.values()).map((e=>(0,a.pC)(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class d{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class u extends s{constructor(){super(...arguments),this.uniforms=new c,this.code=new d,this.constants=new f}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class p{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?m.ALLOWLIST_VERTEX:m.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}m.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],m.ALLOWLIST_VERTEX=[];class f{constructor(){this._entries=new Set}add(e,t,i){let r="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":r=f._numberToFloatStr(i);break;case"int":r=f._numberToIntStr(i);break;case"bool":r=i.toString();break;case"vec2":r=`vec2(${f._numberToFloatStr(i[0])},                            ${f._numberToFloatStr(i[1])})`;break;case"vec3":r=`vec3(${f._numberToFloatStr(i[0])},                            ${f._numberToFloatStr(i[1])},                            ${f._numberToFloatStr(i[2])})`;break;case"vec4":r=`vec4(${f._numberToFloatStr(i[0])},                            ${f._numberToFloatStr(i[1])},                            ${f._numberToFloatStr(i[2])},                            ${f._numberToFloatStr(i[3])})`;break;case"ivec2":r=`ivec2(${f._numberToIntStr(i[0])},                             ${f._numberToIntStr(i[1])})`;break;case"ivec3":r=`ivec3(${f._numberToIntStr(i[0])},                             ${f._numberToIntStr(i[1])},                             ${f._numberToIntStr(i[2])})`;break;case"ivec4":r=`ivec4(${f._numberToIntStr(i[0])},                             ${f._numberToIntStr(i[1])},                             ${f._numberToIntStr(i[2])},                             ${f._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":r=`${t}(${Array.prototype.map.call(i,(e=>f._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${r};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const v="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",g="precision highp float;\nprecision highp sampler2D;"},32466:(e,t,i)=>{i.d(t,{F:()=>d});var r=i(61681),o=i(55709),a=i(69666),n=i(91013),s=i(40017);class l extends n.x{constructor(e,t){super(e,"vec2",s.P.Draw,((i,r,o)=>i.setUniform2fv(e,t(r,o))))}}class c extends n.x{constructor(e,t){super(e,"sampler2D",s.P.Draw,((i,r,o)=>i.bindTexture(e,t(r,o))))}}function d(e,t,i){const n=[new c(e,t)];if(i){const i=e+"Size";n.push(new l(i,((e,i)=>{const n=t(e,i);return(0,r.pC)(n)?(0,o.a)(u,n.descriptor.width,n.descriptor.height):a.Z})))}return n}const u=(0,a.a)()},15176:(e,t,i)=>{i.d(t,{A:()=>c,J:()=>d});var r=i(61681),o=i(55709),a=i(69666),n=i(93072),s=i(91013),l=i(40017);class c extends s.x{constructor(e,t){super(e,"sampler2D",l.P.Pass,((i,r,o)=>i.bindTexture(e,t(r,o))))}}function d(e,t,i){const s=[new c(e,t)];if(i){const i=e+"Size";s.push(new n.A(i,((e,i)=>{const n=t(e,i);return(0,r.pC)(n)?(0,o.a)(u,n.descriptor.width,n.descriptor.height):a.Z})))}return s}const u=(0,a.a)()},91013:(e,t,i)=>{i.d(t,{x:()=>a});var r=i(61681),o=i(40017);class a{constructor(e,t,i,a,n=null){this.name=e,this.type=t,this.arraySize=n,this.bind={[o.P.Pass]:null,[o.P.Draw]:null},(0,r.pC)(i)&&(0,r.pC)(a)&&(this.bind[i]=a)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},23410:(e,t,i)=>{i.d(t,{H:()=>o,K:()=>r});class r{}function o(e,...t){let i="";for(let r=0;r<t.length;r++)i+=e[r]+t[r];return i+=e[e.length-1],i}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(o||(o={}))},40017:(e,t,i)=>{var r;i.d(t,{P:()=>r}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(r||(r={}))},10107:(e,t,i)=>{i.d(t,{c:()=>o});var r=i(7958);class o{constructor(){this.id=(0,r.D)()}unload(){}}},95399:(e,t,i)=>{var r;i.d(t,{U:()=>r}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT"}(r||(r={}))},5474:(e,t,i)=>{i.d(t,{i:()=>o});var r=i(21414);const o=new Map([[r.T.POSITION,0],[r.T.NORMAL,1],[r.T.UV0,2],[r.T.COLOR,3],[r.T.SIZE,4],[r.T.TANGENT,4],[r.T.AUXPOS1,5],[r.T.SYMBOLCOLOR,5],[r.T.AUXPOS2,6],[r.T.FEATUREATTRIBUTE,6],[r.T.INSTANCEFEATUREATTRIBUTE,6],[r.T.INSTANCECOLOR,7],[r.T.MODEL,8],[r.T.MODELNORMAL,12],[r.T.MODELORIGINHI,11],[r.T.MODELORIGINLO,15]])},97009:(e,t,i)=>{i.d(t,{F:()=>l});var r=i(61681),o=i(78668),a=i(23410),n=i(70984);class s{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(i,t),this._technique),this._technique}ensureResources(e){return n.Rw.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,r.RY)(this._texture),this._textureNormal=(0,r.RY)(this._textureNormal),this._textureEmissive=(0,r.RY)(this._textureEmissive),this._textureOcclusion=(0,r.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,r.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?n.Rw.LOADED:n.Rw.LOADING}get textureBindParameters(){return new c((0,r.pC)(this._texture)?this._texture.glTexture:null,(0,r.pC)(this._textureNormal)?this._textureNormal.glTexture:null,(0,r.pC)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,r.pC)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,r.pC)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){((0,r.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,r.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if((0,r.Wi)(e))return void t(null);const i=this._textureRepository.acquire(e);if((0,o.y8)(i))return++this._numLoading,void i.then((e=>{if(this._disposed)return(0,r.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(i)}}class c extends a.K{constructor(e=null,t=null,i=null,r=null,o=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=i,this.textureOcclusion=r,this.textureMetallicRoughness=o}}},7358:(e,t,i)=>{i.d(t,{F5:()=>d,yD:()=>r});var r,o,a=i(61681),n=(i(23410),i(10107)),s=i(95399),l=i(5474),c=i(54443);class d extends n.c{constructor(e,t){super(),this.type=s.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=l.i,this._parameters=(0,c.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,c.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,a.pC)(this.repository)&&this.repository.materialChanged(this)}}(o=r||(r={}))[o.Occlude=1]="Occlude",o[o.Transparent=2]="Transparent",o[o.OccludeAndTransparent=4]="OccludeAndTransparent",o[o.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",o[o.Opaque=16]="Opaque"},12045:(e,t,i)=>{i.d(t,{Bh:()=>p,IB:()=>l,j7:()=>c,je:()=>h,ve:()=>d,wu:()=>n});var r=i(70984),o=i(91907),a=i(17346);const n=(0,a.wK)(o.zi.SRC_ALPHA,o.zi.ONE,o.zi.ONE_MINUS_SRC_ALPHA,o.zi.ONE_MINUS_SRC_ALPHA),s=(0,a.if)(o.zi.ONE,o.zi.ONE),l=(0,a.if)(o.zi.ZERO,o.zi.ONE_MINUS_SRC_ALPHA);function c(e){return e===r.Am.FrontFace?null:e===r.Am.Alpha?l:s}const d=5e5,u={factor:-1,units:-2};function h(e){return e?u:null}function p(e,t=o.wb.LESS){return e===r.Am.NONE||e===r.Am.FrontFace?t:o.wb.LEQUAL}},15095:(e,t,i)=>{i.d(t,{hu:()=>o,yK:()=>a}),i(69666),i(88589),(0,i(1983).c)();class r{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new r(t)}function a(e,t,i,r){let o,a=(i[0]-e[0])/t[0],n=(r[0]-e[0])/t[0];a>n&&(o=a,a=n,n=o);let s=(i[1]-e[1])/t[1],l=(r[1]-e[1])/t[1];if(s>l&&(o=s,s=l,l=o),a>l||s>n)return!1;s>a&&(a=s),l<n&&(n=l);let c=(i[2]-e[2])/t[2],d=(r[2]-e[2])/t[2];return c>d&&(o=c,c=d,d=o),!(a>d||c>n||(d<n&&(n=d),n<0))}},21414:(e,t,i)=>{var r;i.d(t,{T:()=>r}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(r||(r={}))},70984:(e,t,i)=>{var r,o,a,n,s,l,c,d,u,h,p,m,f,v;i.d(t,{Am:()=>n,CE:()=>p,Gv:()=>o,JJ:()=>f,MX:()=>h,Rw:()=>l,Vr:()=>r,hU:()=>c}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(r||(r={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.NONE=0]="NONE",e[e.SMAA=1]="SMAA"}(a||(a={})),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(l||(l={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(c||(c={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(d||(d={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(u||(u={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(h||(h={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(p||(p={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(m||(m={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(f||(f={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(v||(v={}))},27325:(e,t,i)=>{i.d(t,{V:()=>o}),i(6766);var r=i(8909);i(19431),(0,r.c)();const o=.4;(0,r.c)()},54443:(e,t,i)=>{i.d(t,{FZ:()=>y,Uf:()=>w,Bw:()=>v,LO:()=>M,Hx:()=>C});var r=i(7753),o=i(19431),a=i(61681),n=i(6766),s=i(8909),l=i(37116),c=i(70984);function d(e,t){return Math.max((0,o.t7)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}i(65684),(0,o.Vl)(10),(0,o.Vl)(12),(0,o.Vl)(70),(0,o.Vl)(40);const u={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var h=i(15095),p=i(21414),m=(i(24455),i(39100));i(30560),new Float64Array(3),new Float32Array(6),(0,m.c)();const f=(0,l.Ue)();function v(e,t,i,r,o,n,s){if(!function(e){return!!(0,a.pC)(e)&&!e.visible}(t))if(e.boundingInfo){(0,h.hu)(e.primitiveType===c.MX.Triangle);const t=i.tolerance;x(e.boundingInfo,r,o,t,n,s)}else{const t=e.indices.get(p.T.POSITION),i=e.vertexAttributes.get(p.T.POSITION);T(r,o,0,t.length/3,t,i,void 0,n,s)}}const g=(0,s.c)();function x(e,t,i,r,o,s){if((0,a.Wi)(e))return;const c=function(e,t,i){return(0,n.s)(i,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,i,g);if((0,l.op)(f,e.getBBMin()),(0,l.Tn)(f,e.getBBMax()),(0,a.pC)(o)&&o.applyToAabb(f),function(e,t,i,r){return function(e,t,i,r,o){const a=(e[0]-r-t[0])*i[0],n=(e[3]+r-t[0])*i[0];let s=Math.min(a,n),l=Math.max(a,n);const c=(e[1]-r-t[1])*i[1],d=(e[4]+r-t[1])*i[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-r-t[2])*i[2],h=(e[5]+r-t[2])*i[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<1/0)}(e,t,i,r)}(f,t,c,r)){const{primitiveIndices:a,indices:n,position:l}=e,c=a?a.length:n.length/3;if(c>E){const a=e.getChildren();if(void 0!==a){for(let e=0;e<8;++e)void 0!==a[e]&&x(a[e],t,i,r,o,s);return}}T(t,i,0,c,n,l,a,o,s)}}const _=(0,s.c)();function T(e,t,i,r,o,n,s,l,c){if(s)return function(e,t,i,r,o,n,s,l,c){const d=n.data,u=n.stride||n.size,h=e[0],p=e[1],m=e[2],f=t[0]-h,v=t[1]-p,g=t[2]-m;for(let e=i;e<r;++e){const t=s[e];let i=3*t,r=u*o[i++],n=d[r++],x=d[r++],T=d[r];r=u*o[i++];let b=d[r++],A=d[r++],C=d[r];r=u*o[i];let w=d[r++],M=d[r++],O=d[r];(0,a.pC)(l)&&([n,x,T]=l.applyToVertex(n,x,T,e),[b,A,C]=l.applyToVertex(b,A,C,e),[w,M,O]=l.applyToVertex(w,M,O,e));const y=b-n,E=A-x,P=C-T,R=w-n,I=M-x,N=O-T,L=v*N-I*g,H=g*R-N*f,D=f*I-R*v,F=y*L+E*H+P*D;if(Math.abs(F)<=Number.EPSILON)continue;const B=h-n,z=p-x,V=m-T,G=B*L+z*H+V*D;if(F>0){if(G<0||G>F)continue}else if(G>0||G<F)continue;const U=z*P-E*V,W=V*y-P*B,k=B*E-y*z,q=f*U+v*W+g*k;if(F>0){if(q<0||G+q>F)continue}else if(q>0||G+q<F)continue;const $=(R*U+I*W+N*k)/F;$>=0&&c($,S(y,E,P,R,I,N,_),t,!1)}}(e,t,i,r,o,n,s,l,c);const d=n.data,u=n.stride||n.size,h=e[0],p=e[1],m=e[2],f=t[0]-h,v=t[1]-p,g=t[2]-m;for(let e=i,t=3*i;e<r;++e){let i=u*o[t++],r=d[i++],n=d[i++],s=d[i];i=u*o[t++];let x=d[i++],T=d[i++],b=d[i];i=u*o[t++];let A=d[i++],C=d[i++],w=d[i];(0,a.pC)(l)&&([r,n,s]=l.applyToVertex(r,n,s,e),[x,T,b]=l.applyToVertex(x,T,b,e),[A,C,w]=l.applyToVertex(A,C,w,e));const M=x-r,O=T-n,y=b-s,E=A-r,P=C-n,R=w-s,I=v*R-P*g,N=g*E-R*f,L=f*P-E*v,H=M*I+O*N+y*L;if(Math.abs(H)<=Number.EPSILON)continue;const D=h-r,F=p-n,B=m-s,z=D*I+F*N+B*L;if(H>0){if(z<0||z>H)continue}else if(z>0||z<H)continue;const V=F*y-O*B,G=B*M-y*D,U=D*O-M*F,W=f*V+v*G+g*U;if(H>0){if(W<0||z+W>H)continue}else if(W>0||z+W<H)continue;const k=(E*V+P*G+R*U)/H;k>=0&&c(k,S(M,O,y,E,P,R,_),e,!1)}}const b=(0,s.c)(),A=(0,s.c)();function S(e,t,i,r,o,a,s){return(0,n.s)(b,e,t,i),(0,n.s)(A,r,o,a),(0,n.f)(s,b,A),(0,n.n)(s,s),s}function C(e,t,i,r,n){let s=(i.screenLength||0)*e.pixelRatio;(0,a.pC)(n)&&(s=function(e,t,i,r){return d(e,function(e,t,i){const r=i.parameters,o=i.paddingPixelsOverride;return u.scale=Math.min(r.divisor/(t-r.offset),1),u.factor=function(e){return Math.abs(e*e*e)}(e),u.minPixelSize=r.minPixelSize,u.paddingPixels=o,u}(t,i,r))}(s,r,t,n));const l=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,o.uZ)(l*t,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function w(e,t){const i=t?w(t):{};for(const t in e){let r=e[t];r&&r.forEach&&(r=O(r)),null==r&&t in i||(i[t]=r)}return i}function M(e,t){let i=!1;for(const o in t){const a=t[o];void 0!==a&&(Array.isArray(a)?null===e[o]?(e[o]=a.slice(),i=!0):(0,r.Vx)(e[o],a)&&(i=!0):e[o]!==a&&(i=!0,e[o]=a))}return i}function O(e){const t=[];return e.forEach((e=>t.push(e))),t}const y={multiply:1,ignore:2,replace:3,tint:4},E=1e3},41163:(e,t,i)=>{i.d(t,{G:()=>r});class r{constructor(e,t,i,r,o,a=!1,n=0){this.name=e,this.count=t,this.type=i,this.offset=r,this.stride=o,this.normalized=a,this.divisor=n}}},30560:(e,t,i)=>{function r(e,t,i){for(let r=0;r<i;++r)t[2*r]=e[r],t[2*r+1]=e[r]-t[2*r]}function o(e,t){const i=e.length;for(let r=0;r<i;++r)n[0]=e[r],t[r]=n[0];return t}function a(e,t){const i=e.length;for(let r=0;r<i;++r)n[0]=e[r],n[1]=e[r]-n[0],t[r]=n[1];return t}i.d(t,{GB:()=>a,LF:()=>r,U8:()=>o});const n=new Float32Array(2)},17346:(e,t,i)=>{i.d(t,{BK:()=>u,LZ:()=>d,if:()=>a,jp:()=>V,sm:()=>T,wK:()=>n,zp:()=>c});var r=i(70984),o=i(91907);function a(e,t,i=o.db.ADD,r=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:i,opAlpha:i,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}function n(e,t,i,r,a=o.db.ADD,n=o.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:i,dstAlpha:r,opRgb:a,opAlpha:n,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:o.LR.BACK,mode:o.Wf.CCW},l={face:o.LR.FRONT,mode:o.Wf.CCW},c=e=>e===r.Vr.Back?s:e===r.Vr.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return S.intern(e)}function p(e){return w.intern(e)}function m(e){return O.intern(e)}function f(e){return E.intern(e)}function v(e){return R.intern(e)}function g(e){return N.intern(e)}function x(e){return H.intern(e)}function _(e){return F.intern(e)}function T(e){return z.intern(e)}class b{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),i=this.interns;return i.has(t)||i.set(t,this.makeRef(e)),i.get(t)}}function A(e){return"["+e.join(",")+"]"}const S=new b(C,(e=>({__tag:"Blending",...e})));function C(e){return e?A([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new b(M,(e=>({__tag:"Culling",...e})));function M(e){return e?A([e.face,e.mode]):null}const O=new b(y,(e=>({__tag:"PolygonOffset",...e})));function y(e){return e?A([e.factor,e.units]):null}const E=new b(P,(e=>({__tag:"DepthTest",...e})));function P(e){return e?A([e.func]):null}const R=new b(I,(e=>({__tag:"StencilTest",...e})));function I(e){return e?A([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const N=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?A([e.zNear,e.zFar]):null}const H=new b(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?A([e.r,e.g,e.b,e.a]):null}const F=new b(B,(e=>({__tag:"StencilWrite",...e})));function B(e){return e?A([e.mask]):null}const z=new b((function(e){return e?A([C(e.blending),M(e.culling),y(e.polygonOffset),P(e.depthTest),I(e.stencilTest),L(e.depthWrite),D(e.colorWrite),B(e.stencilWrite)]):null}),(e=>({blending:h(e.blending),culling:p(e.culling),polygonOffset:m(e.polygonOffset),depthTest:f(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:x(e.colorWrite),stencilWrite:_(e.stencilWrite)})));class V{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,i,r){return(i||e!==t)&&(r(e),this._pipelineInvalid=!0),e}}}}]);