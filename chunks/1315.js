/*! For license information please see 1315.js.LICENSE.txt */
"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[1315],{11315:(e,t,n)=>{n.r(t),n.d(t,{CalciteTooltip:()=>xe,defineCustomElement:()=>Ee});var i=n(77210);var o=n(84294),r="top",a="bottom",s="right",c="left",l="auto",f=[r,a,s,c],p="start",d="end",u="viewport",m="popper",h=f.reduce((function(e,t){return e.concat([t+"-"+p,t+"-"+d])}),[]),v=[].concat(f,[l]).reduce((function(e,t){return e.concat([t,t+"-"+p,t+"-"+d])}),[]),g=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function y(e){return e?(e.nodeName||"").toLowerCase():null}function b(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function w(e){return e instanceof b(e).Element||e instanceof Element}function x(e){return e instanceof b(e).HTMLElement||e instanceof HTMLElement}function E(e){return"undefined"!=typeof ShadowRoot&&(e instanceof b(e).ShadowRoot||e instanceof ShadowRoot)}const k={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e];x(o)&&y(o)&&(Object.assign(o.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],o=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});x(i)&&y(i)&&(Object.assign(i.style,r),Object.keys(o).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]};function O(e){return e.split("-")[0]}var D=Math.max,T=Math.min,H=Math.round;function L(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),i=1,o=1;if(x(e)&&t){var r=e.offsetHeight,a=e.offsetWidth;a>0&&(i=H(n.width)/a||1),r>0&&(o=H(n.height)/r||1)}return{width:n.width/i,height:n.height/o,top:n.top/o,right:n.right/i,bottom:n.bottom/o,left:n.left/i,x:n.left/i,y:n.top/o}}function A(e){var t=L(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function j(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&E(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function P(e){return b(e).getComputedStyle(e)}function S(e){return["table","td","th"].indexOf(y(e))>=0}function R(e){return((w(e)?e.ownerDocument:e.document)||window.document).documentElement}function M(e){return"html"===y(e)?e:e.assignedSlot||e.parentNode||(E(e)?e.host:null)||R(e)}function q(e){return x(e)&&"fixed"!==P(e).position?e.offsetParent:null}function W(e){for(var t=b(e),n=q(e);n&&S(n)&&"static"===P(n).position;)n=q(n);return n&&("html"===y(n)||"body"===y(n)&&"static"===P(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&x(e)&&"fixed"===P(e).position)return null;var n=M(e);for(E(n)&&(n=n.host);x(n)&&["html","body"].indexOf(y(n))<0;){var i=P(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}function C(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function _(e,t,n){return D(e,T(t,n))}function B(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function I(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}const V={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,o=e.options,l=n.elements.arrow,p=n.modifiersData.popperOffsets,d=O(n.placement),u=C(d),m=[c,s].indexOf(d)>=0?"height":"width";if(l&&p){var h=function(e,t){return B("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:I(e,f))}(o.padding,n),v=A(l),g="y"===u?r:c,y="y"===u?a:s,b=n.rects.reference[m]+n.rects.reference[u]-p[u]-n.rects.popper[m],w=p[u]-n.rects.reference[u],x=W(l),E=x?"y"===u?x.clientHeight||0:x.clientWidth||0:0,k=b/2-w/2,D=h[g],T=E-v[m]-h[y],H=E/2-v[m]/2+k,L=_(D,H,T),j=u;n.modifiersData[i]=((t={})[j]=L,t.centerOffset=L-H,t)}},effect:function(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&j(t.elements.popper,i)&&(t.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function N(e){return e.split("-")[1]}var z={top:"auto",right:"auto",bottom:"auto",left:"auto"};function U(e){var t,n=e.popper,i=e.popperRect,o=e.placement,l=e.variation,f=e.offsets,p=e.position,u=e.gpuAcceleration,m=e.adaptive,h=e.roundOffsets,v=e.isFixed,g=f.x,y=void 0===g?0:g,w=f.y,x=void 0===w?0:w,E="function"==typeof h?h({x:y,y:x}):{x:y,y:x};y=E.x,x=E.y;var k=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),D=c,T=r,L=window;if(m){var A=W(n),j="clientHeight",S="clientWidth";A===b(n)&&"static"!==P(A=R(n)).position&&"absolute"===p&&(j="scrollHeight",S="scrollWidth"),(o===r||(o===c||o===s)&&l===d)&&(T=a,x-=(v&&A===L&&L.visualViewport?L.visualViewport.height:A[j])-i.height,x*=u?1:-1),o!==c&&(o!==r&&o!==a||l!==d)||(D=s,y-=(v&&A===L&&L.visualViewport?L.visualViewport.width:A[S])-i.width,y*=u?1:-1)}var M,q=Object.assign({position:p},m&&z),C=!0===h?function(e){var t=e.x,n=e.y,i=window.devicePixelRatio||1;return{x:H(t*i)/i||0,y:H(n*i)/i||0}}({x:y,y:x}):{x:y,y:x};return y=C.x,x=C.y,u?Object.assign({},q,((M={})[T]=O?"0":"",M[D]=k?"0":"",M.transform=(L.devicePixelRatio||1)<=1?"translate("+y+"px, "+x+"px)":"translate3d("+y+"px, "+x+"px, 0)",M)):Object.assign({},q,((t={})[T]=O?x+"px":"",t[D]=k?y+"px":"",t.transform="",t))}var $={passive:!0},X={left:"right",right:"left",bottom:"top",top:"bottom"};function Y(e){return e.replace(/left|right|bottom|top/g,(function(e){return X[e]}))}var F={start:"end",end:"start"};function G(e){return e.replace(/start|end/g,(function(e){return F[e]}))}function J(e){var t=b(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function K(e){return L(R(e)).left+J(e).scrollLeft}function Q(e){var t=P(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function Z(e){return["html","body","#document"].indexOf(y(e))>=0?e.ownerDocument.body:x(e)&&Q(e)?e:Z(M(e))}function ee(e,t){var n;void 0===t&&(t=[]);var i=Z(e),o=i===(null==(n=e.ownerDocument)?void 0:n.body),r=b(i),a=o?[r].concat(r.visualViewport||[],Q(i)?i:[]):i,s=t.concat(a);return o?s:s.concat(ee(M(a)))}function te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ne(e,t){return t===u?te(function(e){var t=b(e),n=R(e),i=t.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,s=0;return i&&(o=i.width,r=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=i.offsetLeft,s=i.offsetTop)),{width:o,height:r,x:a+K(e),y:s}}(e)):w(t)?function(e){var t=L(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):te(function(e){var t,n=R(e),i=J(e),o=null==(t=e.ownerDocument)?void 0:t.body,r=D(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=D(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-i.scrollLeft+K(e),c=-i.scrollTop;return"rtl"===P(o||n).direction&&(s+=D(n.clientWidth,o?o.clientWidth:0)-r),{width:r,height:a,x:s,y:c}}(R(e)))}function ie(e){var t,n=e.reference,i=e.element,o=e.placement,l=o?O(o):null,f=o?N(o):null,u=n.x+n.width/2-i.width/2,m=n.y+n.height/2-i.height/2;switch(l){case r:t={x:u,y:n.y-i.height};break;case a:t={x:u,y:n.y+n.height};break;case s:t={x:n.x+n.width,y:m};break;case c:t={x:n.x-i.width,y:m};break;default:t={x:n.x,y:n.y}}var h=l?C(l):null;if(null!=h){var v="y"===h?"height":"width";switch(f){case p:t[h]=t[h]-(n[v]/2-i[v]/2);break;case d:t[h]=t[h]+(n[v]/2-i[v]/2)}}return t}function oe(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=void 0===i?e.placement:i,c=n.boundary,l=void 0===c?"clippingParents":c,p=n.rootBoundary,d=void 0===p?u:p,h=n.elementContext,v=void 0===h?m:h,g=n.altBoundary,b=void 0!==g&&g,E=n.padding,k=void 0===E?0:E,O=B("number"!=typeof k?k:I(k,f)),H=v===m?"reference":m,A=e.rects.popper,S=e.elements[b?H:v],q=function(e,t,n){var i="clippingParents"===t?function(e){var t=ee(M(e)),n=["absolute","fixed"].indexOf(P(e).position)>=0&&x(e)?W(e):e;return w(n)?t.filter((function(e){return w(e)&&j(e,n)&&"body"!==y(e)})):[]}(e):[].concat(t),o=[].concat(i,[n]),r=o[0],a=o.reduce((function(t,n){var i=ne(e,n);return t.top=D(i.top,t.top),t.right=T(i.right,t.right),t.bottom=T(i.bottom,t.bottom),t.left=D(i.left,t.left),t}),ne(e,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(w(S)?S:S.contextElement||R(e.elements.popper),l,d),C=L(e.elements.reference),_=ie({reference:C,element:A,strategy:"absolute",placement:o}),V=te(Object.assign({},A,_)),N=v===m?V:C,z={top:q.top-N.top+O.top,bottom:N.bottom-q.bottom+O.bottom,left:q.left-N.left+O.left,right:N.right-q.right+O.right},U=e.modifiersData.offset;if(v===m&&U){var $=U[o];Object.keys(z).forEach((function(e){var t=[s,a].indexOf(e)>=0?1:-1,n=[r,a].indexOf(e)>=0?"y":"x";z[e]+=$[n]*t}))}return z}function re(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=n.boundary,r=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?v:c,p=N(i),d=p?s?h:h.filter((function(e){return N(e)===p})):f,u=d.filter((function(e){return l.indexOf(e)>=0}));0===u.length&&(u=d);var m=u.reduce((function(t,n){return t[n]=oe(e,{placement:n,boundary:o,rootBoundary:r,padding:a})[O(n)],t}),{});return Object.keys(m).sort((function(e,t){return m[e]-m[t]}))}const ae={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=n.mainAxis,f=void 0===o||o,d=n.altAxis,u=void 0===d||d,m=n.fallbackPlacements,h=n.padding,v=n.boundary,g=n.rootBoundary,y=n.altBoundary,b=n.flipVariations,w=void 0===b||b,x=n.allowedAutoPlacements,E=t.options.placement,k=O(E),D=m||(k!==E&&w?function(e){if(O(e)===l)return[];var t=Y(e);return[G(e),t,G(t)]}(E):[Y(E)]),T=[E].concat(D).reduce((function(e,n){return e.concat(O(n)===l?re(t,{placement:n,boundary:v,rootBoundary:g,padding:h,flipVariations:w,allowedAutoPlacements:x}):n)}),[]),H=t.rects.reference,L=t.rects.popper,A=new Map,j=!0,P=T[0],S=0;S<T.length;S++){var R=T[S],M=O(R),q=N(R)===p,W=[r,a].indexOf(M)>=0,C=W?"width":"height",_=oe(t,{placement:R,boundary:v,rootBoundary:g,altBoundary:y,padding:h}),B=W?q?s:c:q?a:r;H[C]>L[C]&&(B=Y(B));var I=Y(B),V=[];if(f&&V.push(_[M]<=0),u&&V.push(_[B]<=0,_[I]<=0),V.every((function(e){return e}))){P=R,j=!1;break}A.set(R,V)}if(j)for(var z=function(e){var t=T.find((function(t){var n=A.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},U=w?3:1;U>0&&"break"!==z(U);U--);t.placement!==P&&(t.modifiersData[i]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function se(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ce(e){return[r,s,a,c].some((function(t){return e[t]>=0}))}function le(e,t,n){void 0===n&&(n=!1);var i,o,r=x(t),a=x(t)&&function(e){var t=e.getBoundingClientRect(),n=H(t.width)/e.offsetWidth||1,i=H(t.height)/e.offsetHeight||1;return 1!==n||1!==i}(t),s=R(t),c=L(e,a),l={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==y(t)||Q(s))&&(l=(i=t)!==b(i)&&x(i)?{scrollLeft:(o=i).scrollLeft,scrollTop:o.scrollTop}:J(i)),x(t)?((f=L(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):s&&(f.x=K(s))),{x:c.left+l.scrollLeft-f.x,y:c.top+l.scrollTop-f.y,width:c.width,height:c.height}}function fe(e){var t=new Map,n=new Set,i=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&o(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),i}var pe={placement:"bottom",modifiers:[],strategy:"absolute"};function de(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function ue(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,o=t.defaultOptions,r=void 0===o?pe:o;return function(e,t,n){void 0===n&&(n=r);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},pe,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,f={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;p(),s.options=Object.assign({},r,s.options,o),s.scrollParents={reference:w(e)?ee(e):e.contextElement?ee(e.contextElement):[],popper:ee(t)};var a,l,d=function(e){var t=fe(e);return g.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(i,s.options.modifiers),l=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))));return s.orderedModifiers=d.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var r=o({state:s,name:t,instance:f,options:i});c.push(r||function(){})}})),f.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,n=e.popper;if(de(t,n)){s.rects={reference:le(t,W(n),"fixed"===s.options.strategy),popper:A(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<s.orderedModifiers.length;i++)if(!0!==s.reset){var o=s.orderedModifiers[i],r=o.fn,a=o.options,c=void 0===a?{}:a,p=o.name;"function"==typeof r&&(s=r({state:s,options:c,name:p,instance:f})||s)}else s.reset=!1,i=-1}}},update:(o=function(){return new Promise((function(e){f.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){p(),l=!0}};if(!de(e,t))return f;function p(){c.forEach((function(e){return e()})),c=[]}return f.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var me=ue({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,r=void 0===o||o,a=i.resize,s=void 0===a||a,c=b(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&l.forEach((function(e){e.addEventListener("scroll",n.update,$)})),s&&c.addEventListener("resize",n.update,$),function(){r&&l.forEach((function(e){e.removeEventListener("scroll",n.update,$)})),s&&c.removeEventListener("resize",n.update,$)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ie({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,i=n.gpuAcceleration,o=void 0===i||i,r=n.adaptive,a=void 0===r||r,s=n.roundOffsets,c=void 0===s||s,l={placement:O(t.placement),variation:N(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,U(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,U(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},k,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,o=n.offset,a=void 0===o?[0,0]:o,l=v.reduce((function(e,n){return e[n]=function(e,t,n){var i=O(e),o=[c,r].indexOf(i)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,l=a[0],f=a[1];return l=l||0,f=(f||0)*o,[c,s].indexOf(i)>=0?{x:f,y:l}:{x:l,y:f}}(n,t.rects,a),e}),{}),f=l[t.placement],p=f.x,d=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=l}},ae,{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name,o=n.mainAxis,l=void 0===o||o,f=n.altAxis,d=void 0!==f&&f,u=n.boundary,m=n.rootBoundary,h=n.altBoundary,v=n.padding,g=n.tether,y=void 0===g||g,b=n.tetherOffset,w=void 0===b?0:b,x=oe(t,{boundary:u,rootBoundary:m,padding:v,altBoundary:h}),E=O(t.placement),k=N(t.placement),H=!k,L=C(E),j="x"===L?"y":"x",P=t.modifiersData.popperOffsets,S=t.rects.reference,R=t.rects.popper,M="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,q="number"==typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(P){if(l){var V,z="y"===L?r:c,U="y"===L?a:s,$="y"===L?"height":"width",X=P[L],Y=X+x[z],F=X-x[U],G=y?-R[$]/2:0,J=k===p?S[$]:R[$],K=k===p?-R[$]:-S[$],Q=t.elements.arrow,Z=y&&Q?A(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[z],ne=ee[U],ie=_(0,S[$],Z[$]),re=H?S[$]/2-G-ie-te-q.mainAxis:J-ie-te-q.mainAxis,ae=H?-S[$]/2+G+ie+ne+q.mainAxis:K+ie+ne+q.mainAxis,se=t.elements.arrow&&W(t.elements.arrow),ce=se?"y"===L?se.clientTop||0:se.clientLeft||0:0,le=null!=(V=null==B?void 0:B[L])?V:0,fe=X+ae-le,pe=_(y?T(Y,X+re-le-ce):Y,X,y?D(F,fe):F);P[L]=pe,I[L]=pe-X}if(d){var de,ue="x"===L?r:c,me="x"===L?a:s,he=P[j],ve="y"===j?"height":"width",ge=he+x[ue],ye=he-x[me],be=-1!==[r,c].indexOf(E),we=null!=(de=null==B?void 0:B[j])?de:0,xe=be?ge:he-S[ve]-R[ve]-we+q.altAxis,Ee=be?he+S[ve]+R[ve]-we-q.altAxis:ye,ke=y&&be?function(e,t,n){var i=_(e,t,n);return i>n?n:i}(xe,he,Ee):_(y?xe:ge,he,y?Ee:ye);P[j]=ke,I[j]=ke-he}t.modifiersData[i]=I}},requiresIfExists:["offset"]},V,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,i=t.rects.reference,o=t.rects.popper,r=t.modifiersData.preventOverflow,a=oe(t,{elementContext:"reference"}),s=oe(t,{altBoundary:!0}),c=se(a,i),l=se(s,o,r),f=ce(c),p=ce(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}}]});function he(e,t){const n=["left","right"],i=["start","end"];return"rtl"===(0,o.a)(e)&&(n.reverse(),i.reverse()),t.replace(/-leading/gi,`-${i[0]}`).replace(/-trailing/gi,`-${i[1]}`).replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}const ve=Math.ceil((4,4,Math.sqrt(Math.pow(4,2)+Math.pow(4,2))));const ge="aria-describedby",ye=new class{constructor(){this.registeredElements=new WeakMap,this.hoverTimeouts=new WeakMap,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:t}=this,n=e.find((e=>t.has(e)));return t.get(n)},this.keyDownHandler=e=>{if("Escape"===e.key){const{activeTooltipEl:e}=this;e&&(this.clearHoverTimeout(e),this.toggleTooltip(e,!1))}},this.mouseEnterShow=e=>{this.hoverEvent(e,!0)},this.mouseLeaveHide=e=>{this.hoverEvent(e,!1)},this.clickHandler=e=>{this.clickedTooltip=this.queryTooltip(e.composedPath())},this.focusShow=e=>{this.focusEvent(e,!0)},this.blurHide=e=>{this.focusEvent(e,!1)},this.hoverToggle=(e,t)=>{const{hoverTimeouts:n}=this;n.delete(e),t&&this.closeExistingTooltip(),this.toggleTooltip(e,t)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("keydown",this.keyDownHandler),document.addEventListener("mouseover",this.mouseEnterShow,{capture:!0}),document.addEventListener("mouseout",this.mouseLeaveHide,{capture:!0}),document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("focusin",this.focusShow),document.addEventListener("focusout",this.blurHide,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler),document.removeEventListener("mouseover",this.mouseEnterShow,{capture:!0}),document.removeEventListener("mouseout",this.mouseLeaveHide,{capture:!0}),document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("focusin",this.focusShow,{capture:!0}),document.removeEventListener("focusout",this.blurHide,{capture:!0})}clearHoverTimeout(e){const{hoverTimeouts:t}=this;t.has(e)&&(window.clearTimeout(t.get(e)),t.delete(e))}closeExistingTooltip(){const{activeTooltipEl:e}=this;e&&this.toggleTooltip(e,!1)}focusTooltip(e,t){this.closeExistingTooltip(),t&&this.clearHoverTimeout(e),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,t&&(this.activeTooltipEl=e)}hoverTooltip(e,t){this.clearHoverTimeout(e);const{hoverTimeouts:n}=this,i=window.setTimeout((()=>this.hoverToggle(e,t)),500);n.set(e,i)}activeTooltipHover(e){const{activeTooltipEl:t,hoverTimeouts:n}=this,{type:i}=e;t&&("mouseover"===i&&e.composedPath().includes(t)?this.clearHoverTimeout(t):"mouseout"!==i||n.has(t)||this.hoverTooltip(t,!1))}hoverEvent(e,t){const n=this.queryTooltip(e.composedPath());this.activeTooltipHover(e),n&&this.hoverTooltip(n,t)}focusEvent(e,t){const n=this.queryTooltip(e.composedPath());n&&n!==this.clickedTooltip?this.focusTooltip(n,t):this.clickedTooltip=null}},be=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.offsetDistance=ve,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.guid=`calcite-tooltip-${[2,1,1,1,3].map((e=>{let t="";for(let n=0;n<e;n++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t})).join("-")}`,this.setUpReferenceElement=()=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement();const{el:e,referenceElement:t,effectiveReferenceElement:n}=this;t&&!n&&console.warn(`${e.tagName}: reference-element id "${t}" was not found.`,{el:e}),this.addReferences(),this.createPopper()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();e.setAttribute(ge,t),ye.registerElement(e,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&(e.removeAttribute(ge),ye.unregisterElement(e))}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(){this.reposition()}placementHandler(){this.reposition()}referenceElementHandler(){this.setUpReferenceElement()}componentWillLoad(){this.setUpReferenceElement()}componentDidLoad(){this.reposition()}disconnectedCallback(){this.removeReferences(),this.destroyPopper()}async reposition(){const{popper:e,el:t,placement:n}=this,i=this.getModifiers();e?await async function({el:e,modifiers:t,placement:n,popper:i}){const o=he(e,n);await i.setOptions({modifiers:t,placement:o})}({el:t,modifiers:i,placement:n,popper:e}):this.createPopper()}getReferenceElement(){const{referenceElement:e,el:t}=this;return("string"==typeof e?(0,o.c)(t,{id:e}):e)||null}getModifiers(){const{arrowEl:e,offsetDistance:t,offsetSkidding:n}=this;return[{name:"arrow",enabled:!0,options:{element:e}},{name:"offset",enabled:!0,options:{offset:[n,t]}},{name:"eventListeners",enabled:this.open}]}createPopper(){this.destroyPopper();const{el:e,placement:t,effectiveReferenceElement:n,overlayPositioning:i}=this,o=this.getModifiers();this.popper=function({referenceEl:e,el:t,placement:n,overlayPositioning:i="absolute",modifiers:o}){return e?me(e,t,{strategy:i,placement:he(t,n),modifiers:o}):null}({el:e,modifiers:o,placement:t,overlayPositioning:i,referenceEl:n})}destroyPopper(){const{popper:e}=this;e&&e.destroy(),this.popper=null}render(){const{effectiveReferenceElement:e,label:t,open:n}=this,r=e&&n,a=!r;return(0,i.h)(i.AA,{"aria-hidden":(0,o.t)(a),"aria-label":t,"calcite-hydrated-hidden":a,id:this.getId(),role:"tooltip"},(0,i.h)("div",{class:{"calcite-popper-anim":!0,"calcite-popper-anim--active":r}},(0,i.h)("div",{class:"arrow",ref:e=>this.arrowEl=e}),(0,i.h)("div",{class:"container"},(0,i.h)("slot",null))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return'@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([data-popper-placement][data-popper-reference-hidden]){pointer-events:none;opacity:0}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}.container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-width:20rem;max-height:20rem}.calcite-popper-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}'}},[1,"calcite-tooltip",{label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[1,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],reposition:[64]}]);function we(){"undefined"!=typeof customElements&&["calcite-tooltip"].forEach((e=>{"calcite-tooltip"===e&&(customElements.get(e)||customElements.define(e,be))}))}we();const xe=be,Ee=we},84294:(e,t,n)=>{function i(e){const t=(n="[dir]",function e(t){return t?t.closest(n)||e(r(o(t))):null}(e));var n;return t?t.getAttribute("dir"):"ltr"}function o(e){return e.getRootNode()}function r(e){return e.host||null}function a(e,{selector:t,id:n}){return function e(i){if(!i)return null;i.assignedSlot&&(i=i.assignedSlot);const a=o(i),s=n?"getElementById"in a?a.getElementById(n):null:t?a.querySelector(t):null,c=r(a);return s||(c?e(c):null)}(e)}n.d(t,{a:()=>i,b:()=>c,c:()=>a,s:()=>f,t:()=>p});const s=":not([slot])";function c(e,t,n){t&&!Array.isArray(t)&&"string"!=typeof t&&(n=t,t=null);const i=t?Array.isArray(t)?t.map((e=>`[slot="${e}"]`)).join(","):`[slot="${t}"]`:s;return(null==n?void 0:n.all)?function(e,t,n){let i=t===s?l(e,s):Array.from(e.querySelectorAll(t));i=n&&!1===n.direct?i:i.filter((t=>t.parentElement===e)),i=(null==n?void 0:n.matches)?i.filter((e=>null==e?void 0:e.matches(n.matches))):i;const o=null==n?void 0:n.selector;return o?i.map((e=>Array.from(e.querySelectorAll(o)))).reduce(((e,t)=>[...e,...t]),[]).filter((e=>!!e)):i}(e,i,n):function(e,t,n){let i=t===s?l(e,s)[0]||null:e.querySelector(t);i=n&&!1===n.direct||(null==i?void 0:i.parentElement)===e?i:null,i=(null==n?void 0:n.matches)?(null==i?void 0:i.matches(n.matches))?i:null:i;const o=null==n?void 0:n.selector;return o?null==i?void 0:i.querySelector(o):i}(e,i,n)}function l(e,t){return e?Array.from(e.children||[]).filter((e=>null==e?void 0:e.matches(t))):[]}function f(e,t,n){return"string"==typeof t&&""!==t?t:""===t?e[n]:void 0}function p(e){return(!!e).toString()}}}]);