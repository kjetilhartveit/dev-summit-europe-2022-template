"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[1655],{81655:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var s=r(36663),o=(r(91957),r(80020)),i=(r(86004),r(45510),r(16192),r(71297),r(878),r(22836),r(50172),r(25634),r(72506),r(54021)),n=r(61681),a=r(15842),u=r(3466),p=r(81977),l=(r(7753),r(39994)),d=(r(7283),r(40266)),c=r(59659),y=r(38481),h=r(70375),m=r(68309),f=r(13802),b=r(78668),g=r(47109),_=r(40400),v=r(51211),C=r(91772),S=r(89542);const O=f.Z.getLogger("esri.layers.graphics.sources.GeoJSONSource");let F=class extends m.Z{constructor(){super(...arguments),this.type="geojson",this.refresh=(0,b.Ds)((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=(0,n.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>v.default.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:C.Z.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new h.Z("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],s=[],o=[];if(e.addFeatures)for(const t of e.addFeatures)r.push(this._serializeFeature(t));if(e.deleteFeatures)for(const r of e.deleteFeatures)"objectId"in r&&null!=r.objectId?s.push(r.objectId):"attributes"in r&&null!=r.attributes[t]&&s.push(r.attributes[t]);if(e.updateFeatures)for(const t of e.updateFeatures)o.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:r,updates:o,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new h.Z("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return(0,n.Wi)(t)?null:"mesh"===t.type||"extent"===t.type?S.Z.fromExtent(t.extent):t}async _startWorker(e){this._connection=await(0,g.bA)("GeoJSONSourceWorker",{strategy:(0,l.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,hasZ:s,geometryType:o,objectIdField:i,url:n,timeInfo:a,customParameters:u}=this.layer,p="defaults"===this.layer.originOf("spatialReference"),d={url:n,customParameters:u,fields:t&&t.map((e=>e.toJSON())),geometryType:c.Mk.toJSON(o),hasZ:s,objectIdField:i,timeInfo:a?a.toJSON():null,spatialReference:p?null:r&&r.toJSON()},y=await this._connection.invoke("load",d,{signal:e});for(const e of y.warnings)O.warn(e.message,{layer:this.layer,warning:e});y.featureErrors.length&&O.warn(`Encountered ${y.featureErrors.length} validation errors while loading features`,y.featureErrors),this.sourceJSON=y.layerDefinition,this.capabilities=(0,_.MS)(this.sourceJSON.hasZ,!0)}};(0,s._)([(0,p.Cb)()],F.prototype,"capabilities",void 0),(0,s._)([(0,p.Cb)()],F.prototype,"type",void 0),(0,s._)([(0,p.Cb)({constructOnly:!0})],F.prototype,"layer",void 0),(0,s._)([(0,p.Cb)()],F.prototype,"sourceJSON",void 0),F=(0,s._)([(0,d.j)("esri.layers.graphics.sources.GeoJSONSource")],F);var I=r(27668),E=r(63989),x=r(22368),R=r(43330),N=r(50386),w=r(12478),j=r(95874),q=r(2030),J=r(51599),Z=r(84465),P=r(60822),T=r(18160),D=r(12512),k=r(89076),Q=r(17095),A=r(26732),G=r(49341),M=r(14136),z=r(10171),U=r(14685);const $=(0,k.v)();let B=class extends((0,N.c)((0,E.N)((0,x.b)((0,I.h)((0,q.n)((0,j.M)((0,w.Q)((0,R.q)((0,a.R)(y.Z)))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new F({layer:this}),this.spatialReference=U.Z.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.source.load(e).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),(0,Q.YN)(this.renderer,this.fieldsIndex),(0,Q.UF)(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?(0,u.mN)(this.url):null}set renderer(e){(0,Q.YN)(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=(0,u.mN)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const s=await r.e(3261).then(r.bind(r,23261));await this.load();const o=await s.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),o}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,z.eZ)(this,e)}createQuery(){const e=new M.Z,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:s}=this;return e.timeExtent=null!=r&&null!=s?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,t){let r,s=!1;const o=t&&t.feature,i=o&&o.attributes,n=this.typeIdField&&i&&i[this.typeIdField];return null!=n&&this.types&&(s=this.types.some((t=>t.id==n&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),s||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(M.Z.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(M.Z.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(M.Z.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(M.Z.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return(0,n.pC)(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};(0,s._)([(0,p.Cb)({readOnly:!0,json:{read:!1,write:!1}})],B.prototype,"capabilities",null),(0,s._)([(0,p.Cb)({type:String})],B.prototype,"copyright",void 0),(0,s._)([(0,p.Cb)({readOnly:!0})],B.prototype,"createQueryVersion",null),(0,s._)([(0,p.Cb)({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),(0,s._)([(0,p.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),(0,s._)([(0,p.Cb)({type:String})],B.prototype,"displayField",void 0),(0,s._)([(0,p.Cb)({type:Boolean})],B.prototype,"editingEnabled",void 0),(0,s._)([(0,p.Cb)(J.PV)],B.prototype,"elevationInfo",void 0),(0,s._)([(0,p.Cb)(Z.d)],B.prototype,"featureReduction",void 0),(0,s._)([(0,p.Cb)({type:[D.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],B.prototype,"fields",void 0),(0,s._)([(0,p.Cb)($.fieldsIndex)],B.prototype,"fieldsIndex",void 0),(0,s._)([(0,p.Cb)({type:C.Z,json:{name:"extent"}})],B.prototype,"fullExtent",void 0),(0,s._)([(0,p.Cb)({type:["point","polygon","polyline","multipoint"],json:{read:{reader:c.Mk.read}}})],B.prototype,"geometryType",void 0),(0,s._)([(0,p.Cb)({type:Boolean})],B.prototype,"hasZ",void 0),(0,s._)([(0,p.Cb)(J.id)],B.prototype,"id",void 0),(0,s._)([(0,p.Cb)({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),(0,s._)([(0,p.Cb)(J.iR)],B.prototype,"labelsVisible",void 0),(0,s._)([(0,p.Cb)({type:[A.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:G.r},write:!0}})],B.prototype,"labelingInfo",void 0),(0,s._)([(0,p.Cb)(J.rn)],B.prototype,"legendEnabled",void 0),(0,s._)([(0,p.Cb)({type:["show","hide"]})],B.prototype,"listMode",void 0),(0,s._)([(0,p.Cb)({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],B.prototype,"objectIdField",void 0),(0,s._)([(0,p.Cb)(J.Oh)],B.prototype,"opacity",void 0),(0,s._)([(0,p.Cb)({type:["GeoJSON"]})],B.prototype,"operationalLayerType",void 0),(0,s._)([(0,p.Cb)({readOnly:!0})],B.prototype,"parsedUrl",null),(0,s._)([(0,p.Cb)(J.C_)],B.prototype,"popupEnabled",void 0),(0,s._)([(0,p.Cb)({type:o.Z,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),(0,s._)([(0,p.Cb)({types:i.A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:i.o}}}})],B.prototype,"renderer",null),(0,s._)([(0,p.Cb)(J.YI)],B.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,p.Cb)({readOnly:!0})],B.prototype,"source",void 0),(0,s._)([(0,p.Cb)({type:U.Z})],B.prototype,"spatialReference",void 0),(0,s._)([(0,p.Cb)({type:[P.Z]})],B.prototype,"templates",void 0),(0,s._)([(0,p.Cb)()],B.prototype,"title",void 0),(0,s._)([(0,p.Cb)({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),(0,s._)([(0,p.Cb)({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),(0,s._)([(0,p.Cb)({type:[T.Z]})],B.prototype,"types",void 0),(0,s._)([(0,p.Cb)(J.HQ)],B.prototype,"url",null),B=(0,s._)([(0,d.j)("esri.layers.GeoJSONLayer")],B);const H=B},10287:(e,t,r)=>{r.d(t,{g:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},40400:(e,t,r)=>{r.d(t,{Dm:()=>l,Hq:()=>d,MS:()=>c,bU:()=>a});var s=r(39994),o=r(67134),i=r(10287),n=r(86094);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function l(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${p++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new s}catch(r){return()=>({[t]:null,...e})}}function d(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,o.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);