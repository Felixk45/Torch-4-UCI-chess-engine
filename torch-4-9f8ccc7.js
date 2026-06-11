/*!
 * Torch (c) 2024, Chess.com, LLC
 */var enginePartsCount = 6;
(function () {
var Torch;
function INIT_ENGINE() {

var Torch = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Torch) {
  Torch = Torch || {};


var d;d||(d=typeof Torch !== 'undefined' ? Torch : {});var aa,ba;d.ready=new Promise(function(a,b){aa=a;ba=b});
"undefined"!==typeof global&&"[object process]"===Object.prototype.toString.call(global.process)&&"undefined"!==typeof fetch&&("undefined"===typeof XMLHttpRequest&&(global.XMLHttpRequest=function(){var a,b={open:function(c,e){a=e},send:function(){require("fs").readFile(a,function(c,e){b.readyState=4;c?(console.error(c),b.status=404,b.onerror(c)):(b.status=200,b.response=e,b.onreadystatechange(),b.onload())})}};return b}),fetch=null);d.print=function(a){d.listener?d.listener(a):console.log(a)};
d.printErr=function(a){d.listener?d.listener(a):console.error(a)};d.terminate=function(){"undefined"!==typeof k&&k.va()};var ca=Object.assign({},d),da=[],l="./this.program",n=(a,b)=>{throw b;},ea="object"==typeof window,v="function"==typeof importScripts,w="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,x=d.ENVIRONMENT_IS_PTHREAD||!1,z="";function fa(a){return d.locateFile?d.locateFile(a,z):z+a}var ha,A,fs,ia,ja;
if(w){z=v?require("path").dirname(z)+"/":__dirname+"/";ja=()=>{ia||(fs=require("fs"),ia=require("path"))};ha=function(b,c){ja();b=ia.normalize(b);return fs.readFileSync(b,c?void 0:"utf8")};A=b=>{b=ha(b,!0);b.buffer||(b=new Uint8Array(b));return b};1<process.argv.length&&(l=process.argv[1].replace(/\\/g,"/"));da=process.argv.slice(2);process.on("uncaughtException",function(b){if(!(b instanceof B))throw b;});process.on("unhandledRejection",function(b){throw b;});n=(b,c)=>{if(C())throw process.exitCode=
b,c;c instanceof B||D("exiting due to exception: "+c);process.exit(b)};d.inspect=function(){return"[Emscripten Module object]"};let a;try{a=require("worker_threads")}catch(b){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),b;}global.Worker=a.Worker}else if(ea||v)v?z=self.location.href:"undefined"!=typeof document&&document.currentScript&&(z=document.currentScript.src),_scriptDir&&(z=_scriptDir),0!==z.indexOf("blob:")?z=
z.substr(0,z.replace(/[?#].*/,"").lastIndexOf("/")+1):z="",w||(ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(A=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}));w&&"undefined"==typeof performance&&(global.performance=require("perf_hooks").performance);var ka=console.log.bind(console),la=console.warn.bind(console);w&&(ja(),ka=a=>fs.writeSync(1,a+"\n"),la=a=>fs.writeSync(2,a+"\n"));
var ma=d.print||ka,D=d.printErr||la;Object.assign(d,ca);ca=null;d.arguments&&(da=d.arguments);d.thisProgram&&(l=d.thisProgram);d.quit&&(n=d.quit);var E,F;d.wasmBinary&&(F=d.wasmBinary);var noExitRuntime=d.noExitRuntime||!0;"object"!=typeof WebAssembly&&G("no native wasm support detected");var I,na,oa=!1;
function pa(a,b,c,e){var g={string:function(q){var r=0;if(null!==q&&void 0!==q&&0!==q){var N=(q.length<<2)+1;r=J(N);K(q,L,r,N)}return r},array:function(q){var r=J(q.length);M.set(q,r);return r}};a=d["_"+a];var h=[],m=0;if(e)for(var u=0;u<e.length;u++){var y=g[c[u]];y?(0===m&&(m=qa()),h[u]=y(e[u])):h[u]=e[u]}c=a.apply(null,h);return c=function(q){0!==m&&O(m);return"string"===b?P(q):"boolean"===b?!!q:q}(c)}
function ra(a){var b=new TextDecoder(a);this.decode=c=>{c.buffer instanceof SharedArrayBuffer&&(c=new Uint8Array(c));return b.decode.call(b,c)}}var sa="undefined"!=typeof TextDecoder?new ra("utf8"):void 0;
function ta(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(e="";b<c;){var g=a[b++];if(g&128){var h=a[b++]&63;if(192==(g&224))e+=String.fromCharCode((g&31)<<6|h);else{var m=a[b++]&63;g=224==(g&240)?(g&15)<<12|h<<6|m:(g&7)<<18|h<<12|m<<6|a[b++]&63;65536>g?e+=String.fromCharCode(g):(g-=65536,e+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else e+=String.fromCharCode(g)}return e}function P(a){return a?ta(L,a,void 0):""}
function K(a,b,c,e){if(0<e){e=c+e-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var m=a.charCodeAt(++g);h=65536+((h&1023)<<10)|m&1023}if(127>=h){if(c>=e)break;b[c++]=h}else{if(2047>=h){if(c+1>=e)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=e)break;b[c++]=224|h>>12}else{if(c+3>=e)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function ua(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}"undefined"!=typeof TextDecoder&&new ra("utf-16le");function va(a){var b=ua(a)+1,c=J(b);K(a,M,c,b);return c}var Q,M,L,R,wa;x&&(Q=d.buffer);var xa=d.INITIAL_MEMORY||536870912;
if(x)I=d.wasmMemory,Q=d.buffer;else if(d.wasmMemory)I=d.wasmMemory;else if(I=new WebAssembly.Memory({initial:xa/65536,maximum:xa/65536,shared:!0}),!(I.buffer instanceof SharedArrayBuffer))throw D("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),w&&console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),
Error("bad memory");I&&(Q=I.buffer);xa=Q.byteLength;var S=Q;Q=S;d.HEAP8=M=new Int8Array(S);d.HEAP16=new Int16Array(S);d.HEAP32=R=new Int32Array(S);d.HEAPU8=L=new Uint8Array(S);d.HEAPU16=new Uint16Array(S);d.HEAPU32=new Uint32Array(S);d.HEAPF32=new Float32Array(S);d.HEAPF64=wa=new Float64Array(S);var ya,za=[],Aa=[],Ba=[],Ca=[],Da=0;function C(){return noExitRuntime||0<Da}function Ea(){var a=d.preRun.shift();za.unshift(a)}var T=0,Fa=null,U=null;d.preloadedImages={};d.preloadedAudios={};
function G(a){if(x)postMessage({cmd:"onAbort",arg:a});else if(d.onAbort)d.onAbort(a);a="Aborted("+a+")";D(a);oa=!0;a=new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");ba(a);throw a;}function Ga(){return V.startsWith("data:application/octet-stream;base64,")}var V;V="torch-$TORCH_VERSION.wasm";Ga()||(V=fa(V));function Ha(){var a=V;try{if(a==V&&F)return new Uint8Array(F);if(A)return A(a);throw"both async and sync fetching of the wasm failed";}catch(b){G(b)}}
function Ia(){return F||!ea&&!v||"function"!=typeof fetch?Promise.resolve().then(function(){return Ha()}):fetch(V,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+V+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}var Ja={};function W(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(d);else{var c=b.bb;"number"==typeof c?void 0===b.ia?Ka(c)():Ka(c)(b.ia):c(void 0===b.ia?null:b.ia)}}}
function La(a){var b=qa();a=a();O(b);return a}function Ma(a){var b=k.da[a];b&&(R[a>>2]=0,k.Aa(b.worker))}function Na(a){a instanceof B||"unwind"==a||n(1,a)}
var k={fa:[],ka:[],pa:[],ta:function(){x&&k.Ma()},fb:function(){},Ma:function(){k.receiveObjectTransfer=k.Pa;k.threadInit=k.Ba;k.setExitStatus=k.Ra;noExitRuntime=!1},da:{},Ra:function(){},va:function(){for(var a in k.da){var b=k.da[a];b&&b.worker&&k.Aa(b.worker)}for(a=0;a<k.fa.length;++a)k.fa[a].terminate();k.fa=[]},Aa:function(a){k.Qa(function(){delete k.da[a.ga.wa];k.fa.push(a);k.ka.splice(k.ka.indexOf(a),1);Oa(a.ga.wa);a.ga=void 0})},Qa:function(a){R[Pa>>2]=0;try{a()}finally{R[Pa>>2]=1}},Pa:function(){},
Ba:function(){for(var a in k.pa)if(k.pa.hasOwnProperty(a))k.pa[a]()},Na:function(a,b){a.onmessage=c=>{c=c.data;var e=c.cmd;a.ga&&(k.Da=a.ga.wa);if(c.targetThread&&c.targetThread!=X()){var g=k.da[c.kb];g?g.worker.postMessage(c,c.transferList):D('Internal error! Worker sent a message "'+e+'" to target pthread '+c.targetThread+", but that thread no longer exists!")}else if("processQueuedMainThreadWork"===e)Qa();else if("spawnThread"===e)Ra(c);else if("cleanupThread"===e)Ma(c.thread);else if("killThread"===
e)c=c.thread,R[c>>2]=0,e=k.da[c],delete k.da[c],e.worker.terminate(),Oa(c),k.ka.splice(k.ka.indexOf(e.worker),1),e.worker.ga=void 0;else if("cancelThread"===e)k.da[c.thread].worker.postMessage({cmd:"cancel"});else if("loaded"===e)a.loaded=!0,b&&b(a),a.ja&&(a.ja(),delete a.ja);else if("print"===e)ma("Thread "+c.threadId+": "+c.text);else if("printErr"===e)D("Thread "+c.threadId+": "+c.text);else if("alert"===e)alert("Thread "+c.threadId+": "+c.text);else if("setimmediate"===c.target)a.postMessage(c);
else if("onAbort"===e){if(d.onAbort)d.onAbort(c.arg)}else D("worker sent an unknown command "+e);k.Da=void 0};a.onerror=c=>{D("worker sent an error! "+c.filename+":"+c.lineno+": "+c.message);throw c;};w&&(a.on("message",function(c){a.onmessage({data:c})}),a.on("error",function(c){a.onerror(c)}),a.on("detachedExit",function(){}));a.postMessage({cmd:"load",urlOrBlob:d.mainScriptUrlOrBlob||_scriptDir,wasmMemory:I,wasmModule:na})},Ca:function(){var a=fa("torch.worker.js");k.fa.push(new Worker(a))},Ja:function(){0==
k.fa.length&&(k.Ca(),k.Na(k.fa[0]));return k.fa.pop()}};d.establishStackSpace=function(){var a=X(),b=R[a+44>>2];Sa(b,b-R[a+48>>2]);O(b)};function Ta(a){if(x)return Y(1,0,a);try{Ua(a)}catch(b){Na(b)}}var Z=[];function Ka(a){var b=Z[a];b||(a>=Z.length&&(Z.length=a+1),Z[a]=b=ya.get(a));return b}d.invokeEntryPoint=function(a,b){return Ka(a)(b)};var Va;Va=w?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:x?()=>performance.now()-d.__performance_now_clock_drift:()=>performance.now();
function Wa(a){this.ea=a-16;this.Ka=function(b){R[this.ea+4>>2]=b};this.Fa=function(b){R[this.ea+8>>2]=b};this.Ha=function(){R[this.ea>>2]=0};this.Ea=function(){M[this.ea+12>>0]=0};this.Ia=function(){M[this.ea+13>>0]=0};this.ta=function(b,c){this.Ka(b);this.Fa(c);this.Ha();this.Ea();this.Ia()}}var Xa=0;
function Ra(a){var b=k.Ja();if(!b)return 6;k.ka.push(b);var c=k.da[a.ua]={worker:b,wa:a.ua};b.ga=c;var e={cmd:"run",start_routine:a.Sa,arg:a.ia,threadInfoStruct:a.ua};b.ja=()=>{e.time=performance.now();b.postMessage(e,a.Xa)};b.loaded&&(b.ja(),delete b.ja);return 0}var Ya=[null,[],[]],Za={};function $a(a,b,c){return x?Y(2,1,a,b,c):0}function ab(a,b){if(x)return Y(3,1,a,b)}function bb(a,b,c){return x?Y(4,1,a,b,c):0}function cb(a,b,c){if(x)return Y(5,1,a,b,c)}
function db(a,b,c,e,g,h,m,u){return x?Y(6,1,a,b,c,e,g,h,m,u):-52}function eb(a,b,c,e,g,h){if(x)return Y(7,1,a,b,c,e,g,h)}function Y(a,b){var c=arguments.length-2,e=arguments;return La(function(){for(var g=J(8*c),h=g>>3,m=0;m<c;m++)wa[h+m]=e[2+m];return fb(a,c,g,b)})}var gb=[];function hb(a,b,c,e){La(function(){var g=J(12),h=0;if(b){h=ua(b)+1;var m=ib(h);K(b,L,m,h);h=m}R[g>>2]=h;R[g+4>>2]=c;R[g+8>>2]=e;jb(a,657457152,0,h,g)})}
var kb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function lb(a){a=2<a?P(a):a;return kb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}
function mb(a,b,c){var e=lb(a);if(!e)return-4;e.oa&&(R[e.oa>>2]=b,R[e.oa+4>>2]=c);if(e.ya||!e.Za)e.ya&&(e=e.ya),a=!1,e.na&&e.na.ma&&(a=e.na.ma.getParameter(2978),a=0===a[0]&&0===a[1]&&a[2]===e.width&&a[3]===e.height),e.width=b,e.height=c,a&&e.na.ma.viewport(0,0,b,c);else return e.oa?(e=R[e.oa+8>>2],a=a?P(a):"",hb(e,a,b,c),1):-4;return 0}function nb(a,b,c){return x?Y(8,1,a,b,c):mb(a,b,c)}
function ob(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,e){b.vertexAttribDivisorANGLE(c,e)},a.drawArraysInstanced=function(c,e,g,h){b.drawArraysInstancedANGLE(c,e,g,h)},a.drawElementsInstanced=function(c,e,g,h,m){b.drawElementsInstancedANGLE(c,e,g,h,m)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function qb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,e){b.drawBuffersWEBGL(c,e)})}
function rb(a,b){a.ea||(a.ea=a.getContext,a.getContext=function(e,g){g=a.ea(e,g);return"webgl"==e==g instanceof WebGLRenderingContext?g:null});var c=a.getContext("webgl",b);return c?sb(c,b):0}function sb(a,b){var c=ib(8);R[c+4>>2]=X();var e={eb:c,attributes:b,version:b.Oa,ma:a};a.canvas&&(a.canvas.na=e);("undefined"==typeof b.xa||b.xa)&&tb(e);return c}
function tb(a){a||(a=wb);if(!a.La){a.La=!0;var b=a.ma;ob(b);pb(b);qb(b);b.$a=b.getExtension("EXT_disjoint_timer_query");b.hb=b.getExtension("WEBGL_multi_draw");(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var wb,xb=["default","low-power","high-performance"],yb={};
function zb(){if(!Ab){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:l||"./this.program"},b;for(b in yb)void 0===yb[b]?delete a[b]:a[b]=yb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Ab=c}return Ab}var Ab;
function Bb(a,b){if(x)return Y(9,1,a,b);var c=0;zb().forEach(function(e,g){var h=b+c;g=R[a+4*g>>2]=h;for(h=0;h<e.length;++h)M[g++>>0]=e.charCodeAt(h);M[g>>0]=0;c+=e.length+1});return 0}function Cb(a,b){if(x)return Y(10,1,a,b);var c=zb();R[a>>2]=c.length;var e=0;c.forEach(function(g){e+=g.length+1});R[b>>2]=e;return 0}function Db(a){return x?Y(11,1,a):0}function Eb(a,b,c,e){if(x)return Y(12,1,a,b,c,e);a=Za.cb(a);b=Za.ab(a,b,c);R[e>>2]=b;return 0}
function Fb(a,b,c,e,g){if(x)return Y(13,1,a,b,c,e,g)}function Gb(a,b,c,e){if(x)return Y(14,1,a,b,c,e);for(var g=0,h=0;h<c;h++){var m=R[b>>2],u=R[b+4>>2];b+=8;for(var y=0;y<u;y++){var q=L[m+y],r=Ya[a];0===q||10===q?((1===a?ma:D)(ta(r,0)),r.length=0):r.push(q)}g+=u}R[e>>2]=g;return 0}
function Hb(){if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues){var a=new Uint8Array(1);return function(){crypto.getRandomValues(a);return a[0]}}if(w)try{var b=require("crypto");return function(){return b.randomBytes(1)[0]}}catch(c){}return function(){G("randomDevice")}}function Ib(a,b){Ib.za||(Ib.za=Hb());for(var c=0;c<b;c++)M[a+c>>0]=Ib.za();return 0}function Jb(a){return 0===a%4&&(0!==a%100||0===a%400)}function Kb(a,b){for(var c=0,e=0;e<=b;c+=a[e++]);return c}
var Lb=[31,29,31,30,31,30,31,31,30,31,30,31],Mb=[31,28,31,30,31,30,31,31,30,31,30,31];function Nb(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),e=(Jb(a.getFullYear())?Lb:Mb)[c];if(b>e-a.getDate())b-=e-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Ob(a,b,c,e){function g(f,p,t){for(f="number"==typeof f?f.toString():f||"";f.length<p;)f=t[0]+f;return f}function h(f,p){return g(f,p,"0")}function m(f,p){function t(ub){return 0>ub?-1:0<ub?1:0}var H;0===(H=t(f.getFullYear()-p.getFullYear()))&&0===(H=t(f.getMonth()-p.getMonth()))&&(H=t(f.getDate()-p.getDate()));return H}function u(f){switch(f.getDay()){case 0:return new Date(f.getFullYear()-1,11,29);case 1:return f;case 2:return new Date(f.getFullYear(),0,3);case 3:return new Date(f.getFullYear(),
0,2);case 4:return new Date(f.getFullYear(),0,1);case 5:return new Date(f.getFullYear()-1,11,31);case 6:return new Date(f.getFullYear()-1,11,30)}}function y(f){f=Nb(new Date(f.ba+1900,0,1),f.sa);var p=new Date(f.getFullYear()+1,0,4),t=u(new Date(f.getFullYear(),0,4));p=u(p);return 0>=m(t,f)?0>=m(p,f)?f.getFullYear()+1:f.getFullYear():f.getFullYear()-1}var q=R[e+40>>2];e={Va:R[e>>2],Ua:R[e+4>>2],qa:R[e+8>>2],la:R[e+12>>2],ha:R[e+16>>2],ba:R[e+20>>2],ra:R[e+24>>2],sa:R[e+28>>2],lb:R[e+32>>2],Ta:R[e+
36>>2],Wa:q?P(q):""};c=P(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var N="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
vb="January February March April May June July August September October November December".split(" ");q={"%a":function(f){return N[f.ra].substring(0,3)},"%A":function(f){return N[f.ra]},"%b":function(f){return vb[f.ha].substring(0,3)},"%B":function(f){return vb[f.ha]},"%C":function(f){return h((f.ba+1900)/100|0,2)},"%d":function(f){return h(f.la,2)},"%e":function(f){return g(f.la,2," ")},"%g":function(f){return y(f).toString().substring(2)},"%G":function(f){return y(f)},"%H":function(f){return h(f.qa,
2)},"%I":function(f){f=f.qa;0==f?f=12:12<f&&(f-=12);return h(f,2)},"%j":function(f){return h(f.la+Kb(Jb(f.ba+1900)?Lb:Mb,f.ha-1),3)},"%m":function(f){return h(f.ha+1,2)},"%M":function(f){return h(f.Ua,2)},"%n":function(){return"\n"},"%p":function(f){return 0<=f.qa&&12>f.qa?"AM":"PM"},"%S":function(f){return h(f.Va,2)},"%t":function(){return"\t"},"%u":function(f){return f.ra||7},"%U":function(f){var p=new Date(f.ba+1900,0,1),t=0===p.getDay()?p:Nb(p,7-p.getDay());f=new Date(f.ba+1900,f.ha,f.la);return 0>
m(t,f)?h(Math.ceil((31-t.getDate()+(Kb(Jb(f.getFullYear())?Lb:Mb,f.getMonth()-1)-31)+f.getDate())/7),2):0===m(t,p)?"01":"00"},"%V":function(f){var p=new Date(f.ba+1901,0,4),t=u(new Date(f.ba+1900,0,4));p=u(p);var H=Nb(new Date(f.ba+1900,0,1),f.sa);return 0>m(H,t)?"53":0>=m(p,H)?"01":h(Math.ceil((t.getFullYear()<f.ba+1900?f.sa+32-t.getDate():f.sa+1-t.getDate())/7),2)},"%w":function(f){return f.ra},"%W":function(f){var p=new Date(f.ba,0,1),t=1===p.getDay()?p:Nb(p,0===p.getDay()?1:7-p.getDay()+1);f=
new Date(f.ba+1900,f.ha,f.la);return 0>m(t,f)?h(Math.ceil((31-t.getDate()+(Kb(Jb(f.getFullYear())?Lb:Mb,f.getMonth()-1)-31)+f.getDate())/7),2):0===m(t,p)?"01":"00"},"%y":function(f){return(f.ba+1900).toString().substring(2)},"%Y":function(f){return f.ba+1900},"%z":function(f){f=f.Ta;var p=0<=f;f=Math.abs(f)/60;return(p?"+":"-")+String("0000"+(f/60*100+f%60)).slice(-4)},"%Z":function(f){return f.Wa},"%%":function(){return"%"}};c=c.replace(/%%/g,"\x00\x00");for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,
"g"),q[r](e)));c=c.replace(/\0\0/g,"%");r=Pb(c);if(r.length>b)return 0;M.set(r,a);return r.length-1}k.ta();var Qb=[null,Ta,$a,ab,bb,cb,db,eb,nb,Bb,Cb,Db,Eb,Fb,Gb];function Pb(a){var b=Array(ua(a)+1);K(a,b,0,b.length);return b}
var Ub={k:function(a){return ib(a+16)+16},j:function(a,b,c){(new Wa(a)).ta(b,c);Xa++;throw a;},E:function(a){Rb(a,!v,1,!ea);k.Ba()},g:function(a){x?postMessage({cmd:"cleanupThread",thread:a}):Ma(a)},h:function(a,b,c,e){if("undefined"==typeof SharedArrayBuffer)return D("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var g=[];if(x&&0===g.length)return Sb(687865856,a,b,c,e);a={Sa:c,ua:a,ia:e,Xa:g};return x?(a.Ya="spawnThread",postMessage(a,g),0):Ra(a)},e:$a,G:ab,
n:bb,o:cb,y:function(){return 2097152},F:function(a,b){if(a==b)postMessage({cmd:"processQueuedMainThreadWork"});else if(x)postMessage({targetThread:a,cmd:"processThreadQueue"});else{a=(a=k.da[a])&&a.worker;if(!a)return;a.postMessage({cmd:"processThreadQueue"})}return 1},z:db,A:eb,d:function(){G("")},v:function(a,b){if(0===a)a=Date.now();else if(1===a||4===a)a=Va();else return R[Tb()>>2]=28,-1;R[b>>2]=a/1E3|0;R[b+4>>2]=a%1E3*1E6|0;return 0},f:function(){w||v||(E||(E={}),E["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]||
(E["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"]=1,D("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")))},b:Va,x:function(a,b,c){L.copyWithin(a,b,b+c)},B:function(a,b,c){gb.length=b;c>>=3;for(var e=0;e<b;e++)gb[e]=wa[c+e];return(0>a?Ja[-a-1]:Qb[a]).apply(null,gb)},w:function(){G("OOM")},C:function(a,b,c){return lb(a)?
mb(a,b,c):nb(a,b,c)},r:function(){throw"unwind";},D:function(a,b){b>>=2;b={alpha:!!R[b],depth:!!R[b+1],stencil:!!R[b+2],antialias:!!R[b+3],premultipliedAlpha:!!R[b+4],preserveDrawingBuffer:!!R[b+5],powerPreference:xb[R[b+6]],failIfMajorPerformanceCaveat:!!R[b+7],Oa:R[b+8],gb:R[b+9],xa:R[b+10],Ga:R[b+11],ib:R[b+12],jb:R[b+13]};a=lb(a);return!a||b.Ga?0:rb(a,b)},t:Bb,u:Cb,c:function(a){Ua(a)},i:Db,m:Eb,p:Fb,l:Gb,q:Ib,a:I||d.wasmMemory,s:function(a,b,c,e){return Ob(a,b,c,e)}};
(function(){function a(g,h){d.asm=g.exports;k.pa.push(d.asm.L);ya=d.asm.Y;Aa.unshift(d.asm.H);na=h;x||(T--,d.monitorRunDependencies&&d.monitorRunDependencies(T),0==T&&(null!==Fa&&(clearInterval(Fa),Fa=null),U&&(g=U,U=null,g())))}function b(g){a(g.instance,g.module)}function c(g){return Ia().then(function(h){return WebAssembly.instantiate(h,e)}).then(function(h){return h}).then(g,function(h){D("failed to asynchronously prepare wasm: "+h);G(h)})}var e={a:Ub};x||(T++,d.monitorRunDependencies&&d.monitorRunDependencies(T));
if(d.instantiateWasm)try{return d.instantiateWasm(e,a)}catch(g){return D("Module.instantiateWasm callback failed with error: "+g),!1}(function(){return F||"function"!=typeof WebAssembly.instantiateStreaming||Ga()||"function"!=typeof fetch?c(b):fetch(V,{credentials:"same-origin"}).then(function(g){return WebAssembly.instantiateStreaming(g,e).then(b,function(h){D("wasm streaming compile failed: "+h);D("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();
d.___wasm_call_ctors=function(){return(d.___wasm_call_ctors=d.asm.H).apply(null,arguments)};d._free=function(){return(d._free=d.asm.I).apply(null,arguments)};d._main=function(){return(d._main=d.asm.J).apply(null,arguments)};d._command=function(){return(d._command=d.asm.K).apply(null,arguments)};d._emscripten_tls_init=function(){return(d._emscripten_tls_init=d.asm.L).apply(null,arguments)};var Tb=d.___errno_location=function(){return(Tb=d.___errno_location=d.asm.M).apply(null,arguments)};
d.__emscripten_thread_crashed=function(){return(d.__emscripten_thread_crashed=d.asm.N).apply(null,arguments)};
var Rb=d.__emscripten_thread_init=function(){return(Rb=d.__emscripten_thread_init=d.asm.O).apply(null,arguments)},X=d._pthread_self=function(){return(X=d._pthread_self=d.asm.P).apply(null,arguments)},Qa=d._emscripten_main_thread_process_queued_calls=function(){return(Qa=d._emscripten_main_thread_process_queued_calls=d.asm.Q).apply(null,arguments)},ib=d._malloc=function(){return(ib=d._malloc=d.asm.R).apply(null,arguments)};
d._emscripten_current_thread_process_queued_calls=function(){return(d._emscripten_current_thread_process_queued_calls=d.asm.S).apply(null,arguments)};
var Sb=d._emscripten_sync_run_in_main_thread_4=function(){return(Sb=d._emscripten_sync_run_in_main_thread_4=d.asm.T).apply(null,arguments)},fb=d._emscripten_run_in_main_runtime_thread_js=function(){return(fb=d._emscripten_run_in_main_runtime_thread_js=d.asm.U).apply(null,arguments)},jb=d._emscripten_dispatch_to_thread_=function(){return(jb=d._emscripten_dispatch_to_thread_=d.asm.V).apply(null,arguments)},Oa=d.__emscripten_thread_free_data=function(){return(Oa=d.__emscripten_thread_free_data=d.asm.W).apply(null,
arguments)};d.__emscripten_thread_exit=function(){return(d.__emscripten_thread_exit=d.asm.X).apply(null,arguments)};
var Sa=d._emscripten_stack_set_limits=function(){return(Sa=d._emscripten_stack_set_limits=d.asm.Z).apply(null,arguments)},qa=d.stackSave=function(){return(qa=d.stackSave=d.asm._).apply(null,arguments)},O=d.stackRestore=function(){return(O=d.stackRestore=d.asm.$).apply(null,arguments)},J=d.stackAlloc=function(){return(J=d.stackAlloc=d.asm.aa).apply(null,arguments)},Pa=d.__emscripten_allow_main_runtime_queued_calls=76639152;
d.cwrap=function(a,b,c,e){c=c||[];var g=c.every(function(h){return"number"===h});return"string"!==b&&g&&!e?d["_"+a]:function(){return pa(a,b,c,arguments)}};d.keepRuntimeAlive=C;d.PThread=k;d.PThread=k;d.wasmMemory=I;d.ExitStatus=B;var Vb;function B(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}U=function Wb(){Vb||Xb();Vb||(U=Wb)};
function Xb(a){function b(){if(!Vb&&(Vb=!0,d.calledRun=!0,!oa)){x||W(Aa);x||W(Ba);aa(d);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(Yb){var c=a,e=d._main;c=c||[];var g=c.length+1,h=J(4*(g+1));R[h>>2]=va(l);for(var m=1;m<g;m++)R[(h>>2)+m]=va(c[m-1]);R[(h>>2)+g]=0;try{var u=e(g,h);Ua(u,!0)}catch(y){Na(y)}finally{}}if(!x){if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;)c=d.postRun.shift(),Ca.unshift(c);W(Ca)}}}a=a||da;if(!(0<T))if(x)aa(d),x||W(Aa),postMessage({cmd:"loaded"});
else{if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Ea();W(za);0<T||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},1);b()},1)):b())}}d.run=Xb;function Ua(a,b){if(!b&&x)throw Ta(a),"unwind";C()||x||k.va();if(!C()){k.va();if(d.onExit)d.onExit(a);oa=!0}n(a,new B(a))}if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();var Yb=!0;d.noInitialRun&&(Yb=!1);Xb();


  return Torch.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Torch;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Torch; });
else if (typeof exports === 'object')
  exports["Torch"] = Torch;
return Torch;
}

if (typeof self !== "undefined" && self.location && self.location.hash && self.location.hash.split(",")[1] === "worker" || typeof global !== "undefined" && Object.prototype.toString.call(global.process) === "[object process]" && !require("worker_threads").isMainThread) {
    (function() {
        /// Insert worker here
"use strict";var Module={};var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(ENVIRONMENT_IS_NODE){var nodeWorkerThreads=require("worker_threads");var parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",function(data){onmessage({data:data})});var fs=require("fs");Object.assign(global,{self:global,require:require,Module:Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:function(f){(0,eval)(fs.readFileSync(f,"utf8"))},postMessage:function(msg){parentPort.postMessage(msg)},performance:global.performance||{now:function(){return Date.now()}}})}function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");if(ENVIRONMENT_IS_NODE){fs.writeSync(2,text+"\n");return}console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=((info,receiveInstance)=>{var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports});self.onmessage=(e=>{try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;if(typeof e.data.urlOrBlob=="string"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}Torch(Module).then(function(instance){Module=instance})}else if(e.data.cmd==="run"){Module["__performance_now_clock_drift"]=performance.now()-e.data.time;Module["__emscripten_thread_init"](e.data.threadInfoStruct,/*isMainBrowserThread=*/0,/*isMainRuntimeThread=*/0,/*canBlock=*/1);Module["establishStackSpace"]();Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInit();try{var result=Module["invokeEntryPoint"](e.data.start_routine,e.data.arg);if(Module["keepRuntimeAlive"]()){Module["PThread"].setExitStatus(result)}else{Module["__emscripten_thread_exit"](result)}}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processThreadQueue"){if(Module["_pthread_self"]()){Module["_emscripten_current_thread_process_queued_calls"]()}}else if(e.data.cmd==="processProxyingQueue"){if(Module["_pthread_self"]()){Module["_emscripten_proxy_execute_queue"](e.data.queue)}}else{err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){err("worker.js onmessage() captured an uncaught exception: "+ex);if(ex&&ex.stack)err(ex.stack);if(Module["__emscripten_thread_crashed"]){Module["__emscripten_thread_crashed"]()}throw ex}});
self._origOnmessage = self.onmessage;
self.onmessage = function (e)
{
    if (e.data.cmd === "load") {
        // Preload command that is called once per worker to parse and load the Emscripten code.
        // Module and memory were sent from main thread
        Module["wasmModule"] = e.data.wasmModule;
        Module["wasmMemory"] = e.data.wasmMemory;
        Module["buffer"] = Module["wasmMemory"].buffer;
        Module["ENVIRONMENT_IS_PTHREAD"] = true;
        if (e.data.workerID) {
            Module['workerID'] = e.data.workerID;
        }
        if (e.data.wasmSourceMap) {
            Module['wasmSourceMapData'] = e.data.wasmSourceMap;
        }
        if (e.data.wasmOffsetConverter) {
            Module['wasmOffsetData'] = e.data.wasmOffsetConverter;
        }
        Torch = INIT_ENGINE();
        Torch(Module).then(function (instance)
        {
            Module = instance;
        });
    } else {
        self._origOnmessage(e);
    }
};
    })();
/// Is it a web worker?
} else if (typeof onmessage !== "undefined" && (typeof window === "undefined" || typeof window.document === "undefined") || typeof global !== "undefined" && Object.prototype.toString.call(global.process) === "[object process]") {
    (function ()
    {
        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === "[object process]";
        var engine = {};
        var queue = [];
        var wasmPath;

        if (isNode) {
            ///NOTE: Node.js v14-19 needs --experimental-wasm-threads --experimental-wasm-simd
            /// Was it called directly?
            if (require.main === module) {
                (function ()
                {
                    var p = require("path");
                    
                    function assembleWASM(count)
                    {
                        var fs = require("fs");
                        var ext = p.extname(wasmPath);
                        var basename = wasmPath.slice(0, -ext.length);
                        var i;
                        var buffers = [];
                        
                        for (i = 0; i < count; ++i) {
                            buffers.push(fs.readFileSync(basename + "-part-" + i + ".wasm"));
                        }
                        
                        return Buffer.concat(buffers);
                    }
                    
                    wasmPath = p.join(__dirname, p.basename(__filename, p.extname(__filename)) + ".wasm");
                    engine = {
                        locateFile: function (path)
                        {
                            if (path.indexOf(".wasm") > -1) {
                                if (path.indexOf(".wasm.map") > -1) {
                                    /// Set the path to the wasm map.
                                    return wasmPath + ".map"
                                }
                                /// Set the path to the wasm binary.
                                return wasmPath;
                            }
                            /// Set path to worker
                            return __filename;
                        },
                        listener: function onMessage(line)
                        {
                            process.stdout.write(line + "\n");
                        },
                    };
                    
                    if (typeof enginePartsCount === "number") {
                        /// Prepare the wasm data because it is in parts.
                        engine.wasmBinary = assembleWASM(enginePartsCount);
                    }
                }());

                Torch = INIT_ENGINE();
                Torch(engine).then(function ()
                {
                    engine.sendCommand = engine.cwrap("command", null, ["string"]);

                    if (queue.length) {
                        queue.forEach(function (line)
                        {
                            engine.sendCommand(line);
                        });
                    }
                    queue = null;
                });

                require("readline").createInterface({
                    input: process.stdin,
                    output: process.stdout,
                    historySize: 100,
                }).on("line", function online(line)
                {
                    if (line) {
                        if (engine.sendCommand) {
                            engine.sendCommand(line);
                        } else {
                            queue.push(line);
                        }
                        if (line === "quit" || line === "exit") {
                            process.exit();
                        }
                    }
                }).on("close", function onend()
                {
                    process.exit();
                }).setPrompt("");

            /// Is this a node module?
            } else {
                module.exports = INIT_ENGINE;
            }
        } else {
            (function ()
            {
                var wasmBlob;
                
                function loadBinary(onLoaded)
                {
                    function fetchBinary(path, cb)
                    {
                        fetch(new Request(path)).then(function (response)
                        {
                            return response.blob();
                        }).then(function (wasmData)
                        {
                            cb(wasmData);
                        });
                    }
                    function loadParts(total)
                    {
                        var doneCount = 0;
                        var i;
                        var parts = [];
                        var ext = wasmPath.slice((wasmPath.lastIndexOf(".") - 1 >>> 0) + 1);
                        var basename = wasmPath.slice(0, -ext.length);
                        
                        function createOnDownload(num)
                        {
                            return function onDownload(data)
                            {
                                var wasmBlob;
                                ++doneCount;
                                parts[num] = data;
                                if (doneCount === total) {
                                    wasmBlob = URL.createObjectURL(new Blob(parts));
                                    onLoaded(wasmBlob);
                                }
                            };
                        }
                        for (i = 0; i < total; ++i) {
                            fetchBinary(basename + "-part-" + i + ext, createOnDownload(i));
                        }
                    }
                    if (typeof enginePartsCount === "number") {
                        loadParts(enginePartsCount);
                    } else {
                        onLoaded();
                    }
                }
                
                var args = self.location.hash.substr(1).split(",");
                wasmPath = decodeURIComponent(args[0] || location.origin + location.pathname.replace(/\.js$/i, ".wasm"));
                
                loadBinary(function (wasmBlob)
                {
                    engine = {
                        locateFile: function (path)
                        {
                            if (path.indexOf(".wasm") > -1) {
                                if (path.indexOf(".wasm.map") > -1) {
                                    /// Set the path to the wasm map.
                                    return wasmPath + ".map"
                                }
                                /// Set the path to the wasm binary.
                                return wasmBlob || wasmPath;
                            }
                            /// Set path to worker (self + the worker hash)
                            return self.location.origin + self.location.pathname + "#" + wasmPath + ",worker";
                        },
                        listener: function onMessage(line)
                        {
                            postMessage(line);
                        },
                    }
                    Torch = INIT_ENGINE();
                
                    Torch(engine).then(function checkIfReady()
                    {
                        engine.sendCommand = engine.cwrap("command", null, ["string"]);
                        if (queue.length) {
                            queue.forEach(function (line)
                            {
                                engine.sendCommand(line);
                            });
                        }
                        queue = null;
                    }).catch(function (e)
                    {
                        /// Sadly, Web Workers will not trigger the error event when errors occur in promises, so we need to create a new context and throw an error there.
                        setTimeout(function throwError()
                        {
                            throw e;
                        }, 1);
                    });
                });
                
                /// Make sure that this is only added once.
                if (!onmessage) {
                    onmessage = function (event)
                    {
                        if (engine.sendCommand) {
                            engine.sendCommand(event.data);
                        } else {
                            queue.push(event.data);
                        }
                        if (event.data === "quit" || event.data === "exit") {
                            /// Exit the Web Worker.
                            if (typeof self !=="undefined" && self.close) {
                                self.close();
                            }
                            /// Close the Pthreads.
                            engine.terminate();
                        }
                    };
                }
            }());
        }
    }());
} else {
    ///NOTE: If it's a normal browser, the client can use the engine without polluting the global scope.
    if (typeof document === "object" && document.currentScript) {
        document.currentScript._exports = INIT_ENGINE();
    } else {
        Torch = INIT_ENGINE();
    }
}
}());
