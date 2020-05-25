/**
 * skylark-domx-files - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-emitter","skylark-langx-async/Deferred","skylark-domx-velm","skylark-domx-plugins","./files","./dropzone","./pastezone","./picker"],function(e,i,s,l,t){return t.SingleUploader=class extends l.Plugin{get klassName(){return"SingleUploader"}get pluginName(){return"lark.singleuploader"}get options(){return{selectors:{picker:".file-picker",dropzone:".file-dropzone",pastezone:".file-pastezone",startUploads:".start-uploads",cancelUploads:".cancel-uploads"}}}constructor(e,i){super(e,i),this._velm=s(this._elm),this._initFileHandlers()}_initFileHandlers(){var e=this,i=this.options.selectors,s=i.dropzone,l=i.pastezone,t=i.picker;s&&this._velm.$(s).dropzone({dropped:function(i){e._addFile(i[0])}}),l&&this._velm.$(l).pastezone({pasted:function(i){e._addFile(i[0])}}),t&&this._velm.$(t).picker({multiple:!0,picked:function(i){e._addFile(i[0])}})}_addFile(e){this.emit("added",e)}destroy(){}_loadZip(e){const s=new Map;jszip(e).then(l=>{var t=[];l.forEach((e,l)=>{var n=new i;l.async("arraybuffer").then(function(e){l.dir||s.set(l.name,new Blob([e])),n.resolve()}),t.push(n.promise)}),i.all(t).then(()=>{this.emit("drop",{files:s,archive:e})})})}_fail(e){this.emit("fail",{message:e})}}});
//# sourceMappingURL=sourcemaps/SingleUploader.js.map
