"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[9622],{89622:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var i=r(36663),s=r(80085),n=r(7753),o=r(13802),a=r(61681),d=r(76868),l=r(81977),u=(r(39994),r(7283),r(40266)),c=r(6766),h=r(8909),p=r(90472),g=r(24568),y=r(27127),f=r(95247),_=r(48358),m=r(45043),b=r(74317),E=r(15553),x=r(14136),v=r(12916);class C extends v.q{constructor(e){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:e=>[e.geometryBuffer]},e,{hasInitialize:!0})}}var w=r(19654),I=r(87262),F=r(42824),S=r(56527),D=r(2774),A=r(78565),N=r(7933),O=r(3917),T=r(44613),L=r(37495),U=r(3289),M=r(63862),j=r(47850),V=r(57686),P=r(70984),q=r(21808),R=r(22167);const G=o.Z.getLogger("esri.views.3d.layers.SceneLayerGraphicsView3D"),Z=(0,O.v)();let k=class extends((0,N.l)((0,T.i)((0,w.A)(q.Z)))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._nodesAddedToStage=new Map,this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this.loadedGraphics=new M.f,this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}initialize(){const e=this.layer;this.addResolvingPromise(e.indexInfo),this._attributeOverrides=new D.l(this.layer,this.view.resourceController?.memoryController),(0,A.OJ)(e,this.view.spatialReference,this.view.viewingMode),this.fieldsHelper=new L.K({layerView:this}),this.updatingHandles.add((()=>e.rangeInfos),(e=>this._rangeInfosChanged(e)),d.nn),this.updatingHandles.add((()=>e.renderer),((e,t)=>this._rendererChange(e,t))),this.updatingHandles.add((()=>[this.parsedDefinitionExpression,this.excludeObjectIdsSorted]),(()=>this._filterChange())),this.updatingHandles.add((()=>this.view.floors),(()=>(0,a.pC)(this.processor.filterVisibility)&&this.processor.filterVisibility.filterChanged())),this.handles.add((0,d.YP)((()=>U.Z.I3S_TREE_SHOW_TILES),(e=>{if(e&&!this._treeDebugger){const e=this._controller.crsIndex;r.e(9895).then(r.bind(r,29895)).then((({I3STreeDebugger:t})=>{!this._treeDebugger&&U.Z.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new t({lv:this,view:this.view,nodeSR:e}))}))}else e||!this._treeDebugger||U.Z.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)}),d.nn)),this._set("processor",new I.Z({owner:this,preferredUpdatePolicy:P.jq.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,dataExtent:e.fullExtent,updateClippingExtent:e=>this._updateClippingExtent(e)})),this.processor.elevationAlignment?.events.on("invalidate-elevation",(e=>this._invalidateElevation(e))),this.supportsHeightUnitConversion&&(this._verticalScale=(0,f.k)("point",e.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.setup()),this._memCache=this.view.resourceController.memoryController.newCache(e.uid),this._controller=new b.Z({layerView:this,scaleVisibilityEnabled:!1}),(0,A.X5)(this.layer.geometryDefinitions)&&(this._worker=new C((e=>this.view.resourceController.schedule(e)))),this.handles.add(this.layer.on("apply-edits",(e=>this.updatingHandles.addPromise(e.result)))),this.handles.add(this.layer.on("edits",(e=>this._handleEdits(e)))),this.when((()=>{this._queryEngine=new F.q({layerView:this,priority:R.T8.FEATURE_QUERY_ENGINE}),this.updatingHandles.add((()=>this.maximumNumberOfFeatures),(e=>this._controller.featureTarget=e),d.nn),this.updatingHandles.add((()=>this.suspended),(e=>{e&&this._removeAllNodeData()}))}))}destroy(){this._treeDebugger=(0,a.SC)(this._treeDebugger),this._attributeOverrides=(0,a.SC)(this._attributeOverrides),this._set("processor",(0,a.SC)(this.processor)),this._controller=(0,a.SC)(this._controller),this._queryEngine=(0,a.SC)(this._queryEngine),this._worker=(0,a.SC)(this._worker),this._memCache=(0,a.SC)(this._memCache),this._nodesAddedToStage.clear(),this.fieldsHelper=(0,a.SC)(this.fieldsHelper)}get requiredFields(){return this.fieldsHelper?.requiredFields??[]}get maximumNumberOfFeatures(){const e=this.processor?.graphicsCore?.displayFeatureLimit;return e?.maximumNumberOfFeatures??0}set maximumNumberOfFeatures(e){null!=e?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){return!this.suspended&&!!this._controller?.useMaximumNumberOfFeatures&&!this._controller.leavesReached}get excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort(((e,t)=>e-t)):null}get lodFactor(){return"Labels"===this.layer.semantic?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}async whenGraphicAttributes(e,t){return(0,A.bf)(this.layer,e,this._getObjectIdField(),t,(()=>[...this._nodesAddedToStage.values()]))}getHit(e){if(!this.loadedGraphics)return null;const t=(0,m.mW)(this.loadedGraphics.find((t=>t.uid===e)),this.layer),r=this._getObjectIdField();return t&&t.attributes&&t.attributes[r]?(t.layer=this.layer,t.sourceLayer=this.layer,{type:"graphic",graphic:t,layer:t.layer}):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}isUpdating(){return!!(this._controller?.updating||this.processor?.updating||this.fieldsHelper?.updating||this.layerFilterUpdating)}highlight(e){return this.processor.highlight(e,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return(0,S.s)(this.attributeEditingContext,e)}async _extractBinaryPointData(e,t){const r={geometryBuffer:e.geometryBuffer};return(0,a.Wi)(this._worker)&&(this._worker=new C((e=>this.view.resourceController.schedule(e)))),this._worker.invoke(r,t).then((e=>{if((0,a.pC)(e))return{positionData:e.positions,featureIds:e.featureIds};throw new Error("Failed to decompress Draco point data")}))}_checkExtent(e,t){e&&!(0,y.Qg)(e,t)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&G.error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&G.error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++)}async addNode(e,t,r){if(!W(t)&&!Q(t))throw new Error;if(this._nodesAddedToStage.has(e.index))return void G.error("I3S node "+e.id+" already added");const i=(0,a.pC)(this.layer.fullExtent)?function(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,e.hasZ&&(e.zmin-=t,e.zmax+=t),e.hasM&&(e.mmin-=t,e.mmax+=t),e}(this.layer.fullExtent.clone(),.5):null,s=this._controller.crsVertex,n=[],o={graphics:null,featureIds:null,attributeInfo:t.attributeDataInfo,node:e};if(W(t)?await this._addNodeBinaryPointData(e,o,t,i,n,r):Q(t)&&this._addNodeLegacyPointData(e,o,t,i,n),await this._attributeOverrides.apply(o.featureIds,t.attributeDataInfo,r),e.numFeatures=o.graphics.length,this._updateNodeMemory(e),B(o),n.length>0&&(this._computeObb(e,n,s),this._controller.updateVisibility(e.index)),this._controller.isGeometryVisible(e)){if((0,a.pC)(this._verticalScale))for(const e of o.graphics)this._verticalScale(e.geometry);this._nodesAddedToStage.set(e.index,o),this.loadedGraphics.addMany(o.graphics),this._controller.updateLoadStatus(e.index,!0),this._filterNode(o),this._treeDebugger&&this._treeDebugger.update()}else this._cacheNodeData(o)}_computeObb(e,t,r){const i=this._controller.crsIndex,s=i.isGeographic?this.view.renderSpatialReference:i;(0,p.CM)(t,r,0,t,s,0,t.length/3);const n={data:t,size:3};e.serviceObb=(0,j.Qb)(n),i.isGeographic&&(0,p.SH)(e.serviceObb.center,s,e.serviceObb.center,i)}isNodeLoaded(e){return this._nodesAddedToStage.has(e)}isNodeReloading(){return!1}updateNodeState(){}async _addNodeBinaryPointData(e,t,r,i,n,o){const d=await this._extractBinaryPointData(r,o);if(null==d)throw new Error;const l=this._getObjectIdField(),u=this._controller.crsVertex,g=this.view.spatialReference,y=this.processor.graphicsCore,{positionData:f,featureIds:m}=d,b=f.length/3,E=new Array;for(let t=0;t<b;t++){const r=(0,a.pC)(e.serviceObb)?e.serviceObb.center:[0,0,0],o=3*t,d=(0,h.f)(f[o+0],f[o+1],f[o+2]);(0,c.a)(d,d,r),e.serviceObb||n.push(d[0],d[1],d[2]),(0,a.pC)(i)&&this._checkExtent(i,d);const b=m[t],x={};null!=b&&(x[l]=b);const v=null==b?s.Z.generateUID():b;(0,p.CM)(d,u,0,K,g,0,1);const C=(0,_.Tx)(K[0],K[1],K[2],g),w=this.loadedGraphics.get(v);if((0,a.pC)(w))w.level<e.level&&($.property="geometry",$.graphic=w,$.oldValue=(0,a.Wg)(w.geometry),$.newValue=C,w.geometry=C,y.graphicUpdateHandler($)),E.push(w);else{const t=s.Z.generateUID();E.push({objectId:v,uid:t,geometry:C,attributes:x,visible:!0,level:e.level})}}t.graphics=E,t.featureIds=Array.from(m)}_addNodeLegacyPointData(e,t,r,i,n){const o=this._getObjectIdField(),d=this._controller.crsVertex,l=this.view.spatialReference,u=[0,0,0],c=new Array,h=new Array;for(const t of r.pointData){const r=t.featureDataPosition,g=r.length,y=t.geometries&&t.geometries[0]||z[g],f=t.featureIds[0];if("points"!==y.params.type)continue;(0,a.pC)(i)&&this._checkExtent(i,r);const m={};null!=f&&(m[o]=f);const b=null==f?s.Z.generateUID():f;let E;"Embedded"===y.type&&(E=y.params.vertexAttributes.position);for(let t=0;t<E.length;t+=g){for(let e=0;e<g;e++)u[e]=r[e]+E[t+e];const i=3===g;e.serviceObb||n.push(u[0],u[1],i?u[2]:0),(0,p.CM)(u,d,0,K,l,0,1);const o=(0,_.Tx)(K[0],K[1],i?K[2]:void 0,l),c=this.loadedGraphics.get(b);(0,a.pC)(c)?h.push(c):h.push({objectId:b,uid:s.Z.generateUID(),geometry:o,attributes:m,visible:!0})}c.push(f)}t.graphics=h,t.featureIds=c}_updateNodeMemory(e){e.memory=4096+((0,a.pC)(e.numFeatures)?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce(((e,t)=>(0,_.Xw)(t)+e),512+8*e.featureIds.length+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this._nodesAddedToStage.forEach(((e,t)=>{if(e){const t=e.node;this._updateNodeMemory(t),this._cacheNodeData(e)}this._controller.updateLoadStatus(t,!1)})),this._nodesAddedToStage.clear(),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this._nodesAddedToStage.get(e);return t?(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeMany(t.graphics),this._nodesAddedToStage.delete(e),this._treeDebugger&&this._treeDebugger.update(),t):null}async loadCachedNodeData(e){return this._memCache.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,r,i){this._nodesAddedToStage.has(e.index)?G.error("I3S node "+e.id+" already added"):(this.loadedGraphics.addMany(t.graphics),this._nodesAddedToStage.set(e.index,t),this._controller.updateLoadStatus(e.index,!0),this._updateNodeMemory(e),await this.updateAttributes(e.index,r,i),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const e=[];return this._nodesAddedToStage.forEach((t=>e.push(t.node.id))),e.sort()}getVisibleNodes(){const e=new Array;return this._nodesAddedToStage.forEach((t=>e.push(t.node))),e}getLoadedNodeIndices(e){this._nodesAddedToStage.forEach(((t,r)=>e.push(r)))}getLoadedAttributes(e){const t=this._nodesAddedToStage.get(e);if(t&&(0,a.pC)(t.attributeInfo))return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this._nodesAddedToStage.get(e);if(t&&(0,a.pC)(t.attributeInfo))return t.attributeInfo.attributeData}_setAttributeData(e,t){const r=this._nodesAddedToStage.get(e);r&&!(0,a.Wi)(r.attributeInfo)&&(r.attributeInfo.attributeData=t,this._attributeValuesChanged(r))}async updateAttributes(e,t,r){const i=this._nodesAddedToStage.get(e);i&&(await this._attributeOverrides.apply(i.featureIds,t,r),i.attributeInfo=t,this._attributeValuesChanged(i))}_attributeValuesChanged(e){if(B(e),this._filterNode(e),this.processor.graphicsCore.labelsEnabled){const t=e.graphics.map((e=>e.uid));this.processor.graphicsCore.updateLabelingInfo(t)}}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||"OBJECTID"}async _rendererChange(e,t){const{layer:{fieldsIndex:r}}=this,i=new Set;let s,n;e?(await e.collectRequiredFields(i,r),s=Array.from(i).sort()):s=[],i.clear(),t?(await t.collectRequiredFields(i,r),n=Array.from(i).sort()):n=[],s.length===n.length&&s.every(((e,t)=>s[t]===n[t]))||this._reloadAllNodes()}_rangeInfosChanged(e){null!=e&&e.length>0&&G.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this._nodesAddedToStage.forEach((e=>this._filterNode(e)))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,r=this.excludeObjectIdsSorted,i=this._getObjectIdField();for(const s of e.graphics){const e=s.visible,o=!t||this._evaluateClause(t,s),d=(0,a.Wi)(r)||(0,n.$A)(r,s.attributes[i])<0;s.visible=o&&d,e!==s.visible&&($.graphic=s,$.property="visible",$.oldValue=e,$.newValue=s.visible,this.processor.graphicsCore.graphicUpdateHandler($))}}_invalidateElevation(e){const t=this._controller.crsIndex;(0,p.dH)(e.extent,e.spatialReference,J,t),this._controller.updateElevationChanged(J,t)}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return(0,a.pC)(this.filter)?this.filter.createQuery(e):new x.Z(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),t?.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),t?.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),t?.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t?.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery((0,a.Wi)(e)?this.createQuery():x.Z.from(e))}getUsedMemory(){return this.processor?.graphicsCore?.usedMemory??0}getUnloadedMemory(){return.8*((this._controller?.unloadedMemoryEstimate??0)+(this.processor?.graphicsCore?.unprocessedMemoryEstimate??0))}ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}_handleEdits(e){(0,S.Z)(this.attributeEditingContext,e)}get attributeEditingContext(){const e=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,forEachNode:e=>this._nodesAddedToStage.forEach((t=>e(t.node,t.featureIds))),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this._attributeOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(t,r,i)=>{this._setAttributeData(t,r);const s=this._nodesAddedToStage.get(t);if((0,a.pC)(i)){const t=this.loadedGraphics.get(i.attributes[e]);(0,a.pC)(t)&&this.processor.graphicsCore.recreateGraphics([t])}else(0,a.pC)(s)&&this.processor.graphicsCore.recreateGraphics(s.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const e={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this._nodesAddedToStage.size,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(e),e}get test(){return{controller:this._controller,numNodes:this._nodesAddedToStage.size,loadedGraphics:this.loadedGraphics}}};(0,i._)([(0,l.Cb)()],k.prototype,"processor",void 0),(0,i._)([(0,l.Cb)({type:E.Z})],k.prototype,"filter",void 0),(0,i._)([(0,l.Cb)()],k.prototype,"loadedGraphics",void 0),(0,i._)([(0,l.Cb)({aliasOf:"layer"})],k.prototype,"i3slayer",void 0),(0,i._)([(0,l.Cb)()],k.prototype,"_controller",void 0),(0,i._)([(0,l.Cb)()],k.prototype,"updating",void 0),(0,i._)([(0,l.Cb)()],k.prototype,"suspended",void 0),(0,i._)([(0,l.Cb)()],k.prototype,"holeFilling",void 0),(0,i._)([(0,l.Cb)(V.q)],k.prototype,"updatingProgress",void 0),(0,i._)([(0,l.Cb)({aliasOf:"_controller.updatingProgress"})],k.prototype,"updatingProgressValue",void 0),(0,i._)([(0,l.Cb)(Z.requiredFields)],k.prototype,"requiredFields",null),(0,i._)([(0,l.Cb)(Z.availableFields)],k.prototype,"availableFields",void 0),(0,i._)([(0,l.Cb)()],k.prototype,"fieldsHelper",void 0),(0,i._)([(0,l.Cb)({type:Number})],k.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,l.Cb)({readOnly:!0})],k.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,l.Cb)()],k.prototype,"excludeObjectIdsSorted",null),(0,i._)([(0,l.Cb)({readOnly:!0})],k.prototype,"lodFactor",null),(0,i._)([(0,l.Cb)({readOnly:!0})],k.prototype,"hasM",null),(0,i._)([(0,l.Cb)({readOnly:!0})],k.prototype,"hasZ",null),k=(0,i._)([(0,u.j)("esri.views.3d.layers.SceneLayerGraphicsView3D")],k);const H=k;function Q(e){return"pointData"in e}function W(e){return"geometryBuffer"in e&&null!==e.geometryBuffer}function B(e){const t=e.attributeInfo;for(let r=0;r<e.graphics.length;r++){const i=e.graphics[r];if(i.attributes||(i.attributes={}),(0,a.pC)(t)&&(0,a.pC)(t.loadedAttributes))for(const{name:e}of t.loadedAttributes)t.attributeData[e]&&(i.attributes[e]=(0,A.Jx)(t.attributeData[e],r))}}const z={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},K=(0,h.c)(),$={graphic:null,property:null,oldValue:null,newValue:null},J=(0,g.Ue)()},56527:(e,t,r)=>{r.d(t,{Z:()=>u,s:()=>l});var i=r(67134),s=r(61681),n=r(19405);const o={setAttribute(){},rollback(){},commit(){}};var a,d;function l(e,t){const r=t.attributes[e.objectIdField],n=e.sessions.get(r);if(n)return n;const d=(0,i.d9)(t.attributes),l=new Set;if(null==r)return o;const u=e.attributeOverrides.createInteractiveEditSession(r),c=new Map,h=(e,t)=>{const i=c.get(e);if(null==i){const i=t.indexOf(r);return c.set(e,i),i}return i};let p=a.EDITING;const g={setAttribute(r,i){if(p!==a.EDITING)return;const n=e.fieldsIndex.get(r);if((0,s.Wi)(n))return;const o=e.attributeStorageInfo.findIndex((e=>e.name===n.name));if(o<0)return;u.set(o,i);const d=e.attributeStorageInfo[o];let c=!1;l.add(r),e.forEachNode(((r,s)=>{const n=h(r,s);if(-1===n)return;const o=e.getAttributeData(r.index);if(o){const s=o[d.name];s&&(s[n]=i,e.setAttributeData(r.index,o,t),c=!0)}})),c&&e.clearMemCache()},rollback(){if(p===a.EDITING){for(const e of l)this.setAttribute(e,d[e]);u.rollback(),p=a.ROLLED_BACK,e.sessions.delete(r)}},commit(){p===a.EDITING&&(u.commit(),p=a.COMMITTED,e.sessions.delete(r))}};return e.sessions.set(r,g),g}function u(e,t){const r=function(e,t){const r=t.edits.updateFeatures;if(!r||0===r.length)return new p;const i=function(e){const t=new Set;if(!e.updatedFeatures)return t;for(const r of e.updatedFeatures)null!=r.objectId&&null==r.error&&t.add(r.objectId);return t}(t),s=new p,o=new Map;for(let t=0;t<e.attributeStorageInfo.length;t++)o.set(e.attributeStorageInfo[t].name,t);const a=e.fieldsIndex,d=e.objectIdField,l=r.filter((e=>{const t=(0,n.g)(a,e.attributes,d);return i.has(t)}));return e.forEachNode(((t,r)=>{const i=new Set(r);for(const o of l){const l=(0,n.g)(a,o.attributes,d);if(!i.has(l))continue;const u=r.indexOf(l);for(const r in o.attributes){const i=e.fieldsIndex.normalizeFieldName(r),n=c(s,t.index,i),a=o.attributes[r];n.push({featureIndex:u,featureId:l,value:a})}}})),s}(e,t);if(0===r.size)return;const i=new Map;for(let t=0;t<e.attributeStorageInfo.length;t++)i.set(e.attributeStorageInfo[t].name,t);let o=!1;r.forEach(((t,r)=>{const n=e.getAttributeData(r);let a=!1;t.forEach(((t,r)=>{const d=(0,s.pC)(n)?n[r]:null,l=i.get(r);for(const{featureIndex:r,value:i,featureId:s}of t)d&&(d[r]=i,a=!0,o=!0),e.attributeOverrides.updateValue(s,l,i)})),a&&e.setAttributeData(r,n,null)})),o&&e.clearMemCache()}function c(e,t,r){const i=function(e,t){const r=e.get(t);if(r)return r;const i=new h;return e.set(t,i),i}(e,t),s=i.get(r);if(s)return s;const n=new Array;return i.set(r,n),n}(d=a||(a={}))[d.EDITING=0]="EDITING",d[d.ROLLED_BACK=1]="ROLLED_BACK",d[d.COMMITTED=2]="COMMITTED";const h=Map,p=Map},7933:(e,t,r)=>{r.d(t,{l:()=>u});var i=r(36663),s=r(13802),n=r(81977),o=(r(7753),r(39994),r(7283),r(40266)),a=r(3362),d=r(78565);const l=s.Z.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),u=e=>{let t=class extends e{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=e=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&l.error("Error while evaluating definitionExpression: "+e),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&l.error("Further errors are ignored")}}get parsedDefinitionExpression(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{const e=a.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return l.error("definitionExpression is using non standard function"),null;const t=[],r=e.fieldNames;return(0,d.e8)(r,this.i3slayer.fields,{missingFields:t}),t.length>0?(l.error(`definitionExpression references unknown fields: ${t.join(", ")}`),null):(this._definitionExpressionErrors=0,e)}catch(e){return l.error("Failed to parse definitionExpression: "+e),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}_evaluateClause(e,t){try{return e.testFeature(t)}catch(e){return this.logError(e),!1}}_addDefinitionExpressionToQuery(e){if(!this.parsedDefinitionExpression)return e;const t=this.i3slayer.definitionExpression,r=e.clone();return r.where?r.where=`(${t}) AND (${r.where})`:r.where=t,r}};return(0,i._)([(0,n.Cb)()],t.prototype,"i3slayer",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],t.prototype,"parsedDefinitionExpression",null),(0,i._)([(0,n.Cb)({readOnly:!0})],t.prototype,"definitionExpressionFields",null),t=(0,i._)([(0,o.j)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],t),t}},44613:(e,t,r)=>{r.d(t,{i:()=>l});var i=r(36663),s=r(70375),n=r(61681),o=(r(13802),r(7283),r(7753),r(39994),r(33156),r(40266)),a=r(17095),d=r(59439);const l=e=>{let t=class extends e{_validateFetchPopupFeatures(e){const{layer:t}=this,{popupEnabled:r}=t;return r?(0,d.V)(t,e)?void 0:new s.Z("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:t}):new s.Z("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:t})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,t){const r=this._validateFetchPopupFeatures(t);if(r)throw r;const i=(0,n.pC)(t)?t.clientGraphics:null;if(!i||0===i.length)return[];const s="scene"===this.layer.type&&(0,n.pC)(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,o=(0,a.Lk)(this.layer.fieldsIndex,await(0,d.e)(s,(0,d.V)(this.layer,t)));await this.prepareFetchPopupFeatures(o);const l=new Set,u=[],c=[];for(const e of i)(0,a.Gm)(o,e,l)?c.push(e):u.push(e);return 0===c.length?u:this.whenGraphicAttributes(c,[...l]).catch((()=>c)).then((e=>u.concat(e)))}};return t=(0,i._)([(0,o.j)("esri.views.3d.layers.support.PopupSceneLayerView")],t),t}},37495:(e,t,r)=>{r.d(t,{K:()=>m});var i=r(36663),s=r(53443),n=r(13802),o=r(55860),a=r(81977),d=r(40266),l=r(24163);const u=e=>{let t=class extends e{constructor(){super(...arguments),this._numUpdating=0,this.asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(e,t){return function(e,t){const r=()=>{if(!i||s)return t();i.clear(),s=!0;const e=(0,o.LJ)(i,t);return s=!1,e};let i=new l.M((()=>{i&&!s&&e(r)})),s=!1;return e(r),{remove:()=>{i&&(i.destroy(),i=null)}}}((t=>this._updateAsync(e,t)),t)}async _updateAsync(e,t){if(!this._startAsyncUpdate(e)){try{const r=await t();this._set(e,r)}catch(t){n.Z.getLogger(this.declaredClass).warn(`Async update of "${String(e)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(e)&&this._updateAsync(e,t)}}_startAsyncUpdate(e){const t=this.asyncUpdateState.get(e)??c.None;return t&c.Updating?(this.asyncUpdateState.set(e,t|c.Invalidated),!0):(++this._numUpdating,this.asyncUpdateState.set(e,t|c.Updating),!1)}_endAsyncUpdate(e){--this._numUpdating;const t=(this.asyncUpdateState.get(e)??c.None)&~c.Updating;return t&c.Invalidated?(this.asyncUpdateState.set(e,t&~c.Invalidated),!0):(this.asyncUpdateState.set(e,t),!1)}};return(0,i._)([(0,a.Cb)({readOnly:!0})],t.prototype,"updating",null),(0,i._)([(0,a.Cb)()],t.prototype,"_numUpdating",void 0),t=(0,i._)([(0,d.j)("esri.core.AsyncUpdate")],t),t};var c,h;(h=c||(c={}))[h.None=0]="None",h[h.Updating=1]="Updating",h[h.Invalidated=2]="Invalidated";let p=class extends(u(s.Z)){};p=(0,i._)([(0,d.j)("esri.core.AsyncUpdate")],p);var g=r(53280),y=r(61681),f=(r(7753),r(39994),r(7283),r(17095));const _=n.Z.getLogger("esri.views.3d.layers.support.SceneLayerViewRequiredFields");let m=class extends(u(g.r)){constructor(e){super(e)}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:t},rendererFields:r,labelingFields:i,viewFilterFields:s}=this;return(0,f.Q0)(e,[...(0,y.Pt)(t,[]),...(0,y.Pt)(r,[]),...(0,y.Pt)(i,[]),...(0,y.Pt)(s,[])])}initialize(){const e=this.layerView.layer;this.layer=e,this.handles.add([this.autoUpdateAsync("rendererFields",(()=>{const{fieldsIndex:e,renderer:t}=this.layer;return t?b((r=>t.collectRequiredFields(r,e))):null})),this.autoUpdateAsync("labelingFields",(()=>{const{layer:e}=this;return e.labelsVisible?b((t=>(0,f.Mu)(t,e))):null})),this.autoUpdateAsync("viewFilterFields",(()=>{const{layer:e,filter:t}=this.layerView;return b((r=>(0,f.Ll)(r,e,t)))}))])}};async function b(e){const t=new Set;try{return await e(t),Array.from(t).sort()}catch(e){return _.error(e),null}}(0,i._)([(0,a.Cb)()],m.prototype,"layerView",void 0),(0,i._)([(0,a.Cb)()],m.prototype,"layer",void 0),(0,i._)([(0,a.Cb)()],m.prototype,"requiredFields",null),(0,i._)([(0,a.Cb)()],m.prototype,"rendererFields",void 0),(0,i._)([(0,a.Cb)()],m.prototype,"labelingFields",void 0),(0,i._)([(0,a.Cb)()],m.prototype,"viewFilterFields",void 0),m=(0,i._)([(0,d.j)("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],m)},3917:(e,t,r)=>{r.d(t,{v:()=>s});var i=r(17095);function s(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return e.outFields?(0,i.Q0)(t,[...(0,i.Lk)(t,e.outFields),...r]):(0,i.Q0)(t,r)}}}}},21808:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(36663),s=r(13802),n=r(61681),o=r(76868),a=r(81977),d=(r(7753),r(39994),r(7283),r(66175),r(55860),r(3593),r(64626),r(90472)),l=r(26216);const u=s.Z.getLogger("esri.views.layers.SceneLayerView");class c extends l.Z{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){const e=this.layer.filter;if((0,n.Wi)(e)||e.geometries.length<1)return null;const t=this._geometryEngine;if((0,n.Wi)(t)||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return null;try{let r=t.simplify(e.geometries.getItemAt(0));const i=r.spatialReference;for(let s=1;s<e.geometries.length;s++){let n=t.simplify(e.geometries.getItemAt(s));n.spatialReference.equals(i)||(n=(0,d.iV)(n,i)),r=t.union(r,n)}return{spatialRelationship:e.spatialRelationship,geometry:r}}catch{return u.warnOncePerTick("Failed to merge scene filter geometries. Layer mask will be ignored."),null}}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if((0,n.Wi)(e)||e.geometries.length<=1)return!1;const t=e.geometries.getItemAt(0).spatialReference;return e.geometries.some((({spatialReference:e})=>!e.equals(t)&&!(0,d.Up)(e,t)))}get layerFilterUpdating(){return(0,n.pC)(this.layer.filter)&&this.layer.filter.geometries.length&&(!this._geometryEngine||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)}initialize(){(0,o.N1)((()=>!this._geometryEngine&&(0,n.pC)(this.layer.filter)&&this.layer.filter.geometries.length)).then((async()=>this._geometryEngine=await Promise.all([r.e(9067),r.e(7700)]).then(r.bind(r,17700)))),this._projectionEngineLoaded=(0,d.kR)(),(0,o.N1)((()=>!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)).then((async()=>{await(0,d.zD)(),this._projectionEngineLoaded=!0}))}highlight(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}}(0,i._)([(0,a.Cb)()],c.prototype,"layer",void 0),(0,i._)([(0,a.Cb)()],c.prototype,"availableFields",null),(0,i._)([(0,a.Cb)()],c.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,a.Cb)({readOnly:!0})],c.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,a.Cb)()],c.prototype,"filter",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],c.prototype,"layerFilter",null),(0,i._)([(0,a.Cb)()],c.prototype,"_geometryEngine",void 0),(0,i._)([(0,a.Cb)()],c.prototype,"_projectionEngineLoaded",void 0),(0,i._)([(0,a.Cb)()],c.prototype,"_filterNeedsProjectionEngine",null),(0,i._)([(0,a.Cb)()],c.prototype,"layerFilterUpdating",null)},59439:(e,t,r)=>{r.d(t,{V:()=>o,e:()=>n});var i=r(61681),s=r(17095);async function n(e,t=e.popupTemplate){if((0,i.Wi)(t))return[];const r=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=t,{objectIdField:o,typeIdField:a,globalIdField:d,relationships:l}=e;if(r.includes("*"))return["*"];const u=n?await(0,s.CH)(e):[],c=(0,s.Q0)(e.fieldsIndex,[...r,...u]);return a&&c.push(a),c&&o&&e.fieldsIndex.has(o)&&!c.includes(o)&&c.push(o),c&&d&&e.fieldsIndex.has(d)&&!c.includes(d)&&c.push(d),l&&l.forEach((t=>{const{keyField:r}=t;c&&r&&e.fieldsIndex.has(r)&&!c.includes(r)&&c.push(r)})),c}function o(e,t){return e.popupTemplate?e.popupTemplate:(0,i.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,i.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}}]);