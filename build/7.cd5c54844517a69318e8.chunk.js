webpackJsonp([7],{"./app/containers/LandingPage/index.js":function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;switch(arguments[1].type){case P:default:return e}}function o(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},R,this)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{dispatch:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=r("./node_modules/react/react.js"),l=r.n(d),c=(r("./node_modules/prop-types/index.js"),r("./node_modules/react-redux/es/index.js")),f=r("./node_modules/reselect/es/index.js"),h=r("./node_modules/redux/es/index.js"),g=r("./node_modules/qrcode/lib/browser.js"),p=r.n(g),m=r("./node_modules/lodash/lodash.js"),v=r.n(m),y=r("./app/utils/injectSaga.js"),b=r("./app/utils/injectReducer.js"),w=r("./app/utils/auth.js"),_=(r("./app/utils/constants.js"),function(e){return e.get("landingPage")}),E=function(){return Object(f.a)(_,function(e){return e.toJS()})},j=E,A=r("./node_modules/immutable/dist/immutable.js"),P="app/LandingPage/DEFAULT_ACTION",B=Object(A.fromJS)({}),q=n,R=regeneratorRuntime.mark(o);r("./app/containers/LandingPage/styles.scss");r.d(t,"LandingPage",function(){return N});var T=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var s in i)void 0===r[s]&&(r[s]=i[s]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),C=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),N=function(e){function t(e){i(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={user:{},nextPath:"",selectedKeys:["home"],qrCodeUrl:"",data:{}};var n=[{key:0,weight:9},{key:1,weight:9},{key:2,weight:6},{key:3,weight:7},{key:4,weight:8},{key:5,weight:9},{key:6,weight:8},{key:7,weight:7},{key:8,weight:6},{key:9,weight:9}];return r.onKeyEvent=function(e){var t=[];Number(e.key)>=0?(t=v.a.cloneDeep(r.state.data),t[Number(e.key)]={count:v.a.get(t,e.key+".count",0)+1,key:Number(e.key),weight:v.a.get(n,e.key+".weight",0)},r.setState({data:t})):"*"===e.key&&(t=[],r.setState({data:t}));var o=v.a.sortBy(r.state.data,["count","weight"]).reverse(),i=o.map(function(e){return e.key});r.setState({res:i})},r}return s(t,e),C(t,[{key:"componentWillMount",value:function(){var e=this;if(w.a.getToken()){var t=w.a.getUserInfo();this.setState({loggedIn:!0,user:t}),document.addEventListener("keydown",this.onKeyEvent),t.qrcode&&p.a.toDataURL(t.qrcode).then(function(t){t&&e.setState({qrCodeUrl:t})})}}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyEvent)}},{key:"render",value:function(){var e=this.state.user,t=(e.qrcode,e.username,e.id,e.weChatName,e.state,this.state.qrCodeUrl);return T("div",{className:"landing_page"},void 0,T("div",{},void 0,T("p",{},void 0,JSON.stringify(this.state.res))),T("div",{},void 0,T("img",{src:t,alt:""})))}}]),t}(l.a.Component),I=Object(f.b)({landingpage:j()}),M=Object(c.b)(I,u),x=Object(b.a)({key:"landingPage",reducer:q}),k=Object(y.a)({key:"landingPage",saga:o});t.default=Object(h.c)(x,k,M)(N)},"./app/containers/LandingPage/styles.scss":function(e,t,r){var n=r("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/containers/LandingPage/styles.scss");"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0;r("./node_modules/style-loader/lib/addStyles.js")(n,o);n.locals&&(e.exports=n.locals)},"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/containers/LandingPage/styles.scss":function(e,t,r){t=e.exports=r("./node_modules/css-loader/lib/css-base.js")(void 0),t.push([e.i,".landing_page{margin:auto}",""])},"./node_modules/dijkstrajs/dijkstra.js":function(e,t,r){"use strict";var n={single_source_shortest_paths:function(e,t,r){var o={},i={};i[t]=0;var a=n.PriorityQueue.make();a.push(t,0);for(var s,u,d,l,c,f,h,g;!a.empty();){s=a.pop(),u=s.value,l=s.cost,c=e[u]||{};for(d in c)c.hasOwnProperty(d)&&(f=c[d],h=l+f,g=i[d],(void 0===i[d]||g>h)&&(i[d]=h,a.push(d,h),o[d]=u))}if(void 0!==r&&void 0===i[r]){var p=["Could not find a path from ",t," to ",r,"."].join("");throw new Error(p)}return o},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,t,r){var o=n.single_source_shortest_paths(e,t,r);return n.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(e){var t,r=n.PriorityQueue,o={};e=e||{};for(t in r)r.hasOwnProperty(t)&&(o[t]=r[t]);return o.queue=[],o.sorter=e.sorter||r.default_sorter,o},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var r={value:e,cost:t};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=n},"./node_modules/qrcode/lib/browser.js":function(e,t,r){function n(e,t,r,n,a){var s=[].slice.call(arguments,1),u=s.length,d="function"==typeof s[u-1];if(!d&&!o())throw new Error("Callback required as last argument");if(!d){if(u<1)throw new Error("Too few arguments provided");return 1===u?(r=t,t=n=void 0):2!==u||t.getContext||(n=r,r=t,t=void 0),new Promise(function(o,a){try{var s=i.create(r,n);o(e(s,t,n))}catch(e){a(e)}})}if(u<2)throw new Error("Too few arguments provided");2===u?(a=r,r=t,t=n=void 0):3===u&&(t.getContext&&void 0===a?(a=n,n=void 0):(a=n,n=r,r=t,t=void 0));try{var l=i.create(r,n);a(null,e(l,t,n))}catch(e){a(e)}}var o=r("./node_modules/qrcode/lib/can-promise.js"),i=r("./node_modules/qrcode/lib/core/qrcode.js"),a=r("./node_modules/qrcode/lib/renderer/canvas.js"),s=r("./node_modules/qrcode/lib/renderer/svg-tag.js");t.create=i.create,t.toCanvas=n.bind(null,a.render),t.toDataURL=n.bind(null,a.renderToDataURL),t.toString=n.bind(null,function(e,t,r){return s.render(e,r)})},"./node_modules/qrcode/lib/can-promise.js":function(e,t){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},"./node_modules/qrcode/lib/core/alignment-pattern.js":function(e,t,r){var n=r("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];for(var t=Math.floor(e/7)+2,r=n(e),o=145===r?26:2*Math.ceil((r-13)/(2*t-2)),i=[r-7],a=1;a<t-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},t.getPositions=function(e){for(var r=[],n=t.getRowColCoords(e),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}},"./node_modules/qrcode/lib/core/alphanumeric-data.js":function(e,t,r){function n(e){this.mode=o.ALPHANUMERIC,this.data=e}var o=r("./node_modules/qrcode/lib/core/mode.js"),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];n.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){var t;for(t=0;t+2<=this.data.length;t+=2){var r=45*i.indexOf(this.data[t]);r+=i.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=n},"./node_modules/qrcode/lib/core/bit-buffer.js":function(e,t){function r(){this.buffer=[],this.length=0}r.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=r},"./node_modules/qrcode/lib/core/bit-matrix.js":function(e,t,r){function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new o(e*e),this.data.fill(0),this.reservedBit=new o(e*e),this.reservedBit.fill(0)}var o=r("./node_modules/qrcode/lib/utils/typedarray-buffer.js");n.prototype.set=function(e,t,r,n){var o=e*this.size+t;this.data[o]=r,n&&(this.reservedBit[o]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=n},"./node_modules/qrcode/lib/core/byte-data.js":function(e,t,r){function n(e){this.mode=i.BYTE,this.data=new o(e)}var o=r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),i=r("./node_modules/qrcode/lib/core/mode.js");n.getBitsLength=function(e){return 8*e},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){for(var t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=n},"./node_modules/qrcode/lib/core/error-correction-code.js":function(e,t,r){var n=r("./node_modules/qrcode/lib/core/error-correction-level.js"),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return o[4*(e-1)+0];case n.M:return o[4*(e-1)+1];case n.Q:return o[4*(e-1)+2];case n.H:return o[4*(e-1)+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return i[4*(e-1)+0];case n.M:return i[4*(e-1)+1];case n.Q:return i[4*(e-1)+2];case n.H:return i[4*(e-1)+3];default:return}}},"./node_modules/qrcode/lib/core/error-correction-level.js":function(e,t){function r(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,n){if(t.isValid(e))return e;try{return r(e)}catch(e){return n}}},"./node_modules/qrcode/lib/core/finder-pattern.js":function(e,t,r){var n=r("./node_modules/qrcode/lib/core/utils.js").getSymbolSize;t.getPositions=function(e){var t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},"./node_modules/qrcode/lib/core/format-info.js":function(e,t,r){var n=r("./node_modules/qrcode/lib/core/utils.js"),o=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){for(var r=e.bit<<3|t,i=r<<10;n.getBCHDigit(i)-o>=0;)i^=1335<<n.getBCHDigit(i)-o;return 21522^(r<<10|i)}},"./node_modules/qrcode/lib/core/galois-field.js":function(e,t,r){var n=r("./node_modules/qrcode/lib/utils/typedarray-buffer.js");if(n.alloc)var o=n.alloc(512),i=n.alloc(256);else var o=new n(512),i=new n(256);!function(){for(var e=1,t=0;t<255;t++)o[t]=e,i[e]=t,256&(e<<=1)&&(e^=285);for(t=255;t<512;t++)o[t]=o[t-255]}(),t.log=function(e){if(e<1)throw new Error("log("+e+")");return i[e]},t.exp=function(e){return o[e]},t.mul=function(e,t){return 0===e||0===t?0:o[i[e]+i[t]]}},"./node_modules/qrcode/lib/core/kanji-data.js":function(e,t,r){function n(e){this.mode=o.KANJI,this.data=e}var o=r("./node_modules/qrcode/lib/core/mode.js"),i=r("./node_modules/qrcode/lib/core/utils.js");n.getBitsLength=function(e){return 13*e},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){var t;for(t=0;t<this.data.length;t++){var r=i.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),e.put(r,13)}},e.exports=n},"./node_modules/qrcode/lib/core/mask-pattern.js":function(e,t){function r(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var n={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){for(var t=e.size,r=0,o=0,i=0,a=null,s=null,u=0;u<t;u++){o=i=0,a=s=null;for(var d=0;d<t;d++){var l=e.get(u,d);l===a?o++:(o>=5&&(r+=n.N1+(o-5)),a=l,o=1),l=e.get(d,u),l===s?i++:(i>=5&&(r+=n.N1+(i-5)),s=l,i=1)}o>=5&&(r+=n.N1+(o-5)),i>=5&&(r+=n.N1+(i-5))}return r},t.getPenaltyN2=function(e){for(var t=e.size,r=0,o=0;o<t-1;o++)for(var i=0;i<t-1;i++){var a=e.get(o,i)+e.get(o,i+1)+e.get(o+1,i)+e.get(o+1,i+1);4!==a&&0!==a||r++}return r*n.N2},t.getPenaltyN3=function(e){for(var t=e.size,r=0,o=0,i=0,a=0;a<t;a++){o=i=0;for(var s=0;s<t;s++)o=o<<1&2047|e.get(a,s),s>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|e.get(s,a),s>=10&&(1488===i||93===i)&&r++}return r*n.N3},t.getPenaltyN4=function(e){for(var t=0,r=e.data.length,o=0;o<r;o++)t+=e.data[o];return Math.abs(Math.ceil(100*t/r/5)-10)*n.N4},t.applyMask=function(e,t){for(var n=t.size,o=0;o<n;o++)for(var i=0;i<n;i++)t.isReserved(i,o)||t.xor(i,o,r(e,i,o))},t.getBestMask=function(e,r){for(var n=Object.keys(t.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),t.applyMask(a,e);var s=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),s<i&&(i=s,o=a)}return o}},"./node_modules/qrcode/lib/core/mode.js":function(e,t,r){function n(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}var o=r("./node_modules/qrcode/lib/core/version-check.js"),i=r("./node_modules/qrcode/lib/core/regex.js");t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!o.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return n(e)}catch(e){return r}}},"./node_modules/qrcode/lib/core/numeric-data.js":function(e,t,r){function n(e){this.mode=o.NUMERIC,this.data=e.toString()}var o=r("./node_modules/qrcode/lib/core/mode.js");n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){var t,r,n;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),n=parseInt(r,10),e.put(n,10);var o=this.data.length-t;o>0&&(r=this.data.substr(t),n=parseInt(r,10),e.put(n,3*o+1))},e.exports=n},"./node_modules/qrcode/lib/core/polynomial.js":function(e,t,r){var n=r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),o=r("./node_modules/qrcode/lib/core/galois-field.js");t.mul=function(e,t){var r=new n(e.length+t.length-1);r.fill(0);for(var i=0;i<e.length;i++)for(var a=0;a<t.length;a++)r[i+a]^=o.mul(e[i],t[a]);return r},t.mod=function(e,t){for(var r=new n(e);r.length-t.length>=0;){for(var i=r[0],a=0;a<t.length;a++)r[a]^=o.mul(t[a],i);for(var s=0;s<r.length&&0===r[s];)s++;r=r.slice(s)}return r},t.generateECPolynomial=function(e){for(var r=new n([1]),i=0;i<e;i++)r=t.mul(r,[1,o.exp(i)]);return r}},"./node_modules/qrcode/lib/core/qrcode.js":function(e,t,r){function n(e,t){for(var r=e.size,n=y.getPositions(t),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],s=-1;s<=7;s++)if(!(i+s<=-1||r<=i+s))for(var u=-1;u<=7;u++)a+u<=-1||r<=a+u||(s>=0&&s<=6&&(0===u||6===u)||u>=0&&u<=6&&(0===s||6===s)||s>=2&&s<=4&&u>=2&&u<=4?e.set(i+s,a+u,!0,!0):e.set(i+s,a+u,!1,!0))}function o(e){for(var t=e.size,r=8;r<t-8;r++){var n=r%2==0;e.set(r,6,n,!0),e.set(6,r,n,!0)}}function i(e,t){for(var r=v.getPositions(t),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var s=-2;s<=2;s++)-2===a||2===a||-2===s||2===s||0===a&&0===s?e.set(o+a,i+s,!0,!0):e.set(o+a,i+s,!1,!0)}function a(e,t){for(var r,n,o,i=e.size,a=E.getEncodedBits(t),s=0;s<18;s++)r=Math.floor(s/3),n=s%3+i-8-3,o=1==(a>>s&1),e.set(r,n,o,!0),e.set(n,r,o,!0)}function s(e,t,r){var n,o,i=e.size,a=j.getEncodedBits(t,r);for(n=0;n<15;n++)o=1==(a>>n&1),n<6?e.set(n,8,o,!0):n<8?e.set(n+1,8,o,!0):e.set(i-15+n,8,o,!0),n<8?e.set(8,i-n-1,o,!0):n<9?e.set(8,15-n-1+1,o,!0):e.set(8,15-n-1,o,!0);e.set(i-8,8,1,!0)}function u(e,t){for(var r=e.size,n=-1,o=r-1,i=7,a=0,s=r-1;s>0;s-=2)for(6===s&&s--;;){for(var u=0;u<2;u++)if(!e.isReserved(o,s-u)){var d=!1;a<t.length&&(d=1==(t[a]>>>i&1)),e.set(o,s-u,d),i--,-1===i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}function d(e,t,r){var n=new p;r.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),A.getCharCountIndicator(t.mode,e)),t.write(n)});var o=h.getSymbolTotalCodewords(e),i=w.getTotalCodewordsCount(e,t),a=8*(o-i);for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);for(var s=(a-n.getLengthInBits())/8,u=0;u<s;u++)n.put(u%2?17:236,8);return l(n,e,t)}function l(e,t,r){for(var n=h.getSymbolTotalCodewords(t),o=w.getTotalCodewordsCount(t,r),i=n-o,a=w.getBlocksCount(t,r),s=n%a,u=a-s,d=Math.floor(n/a),l=Math.floor(i/a),c=l+1,g=d-l,p=new _(g),m=0,v=new Array(a),y=new Array(a),b=0,E=new f(e.buffer),j=0;j<a;j++){var A=j<u?l:c;v[j]=E.slice(m,m+A),y[j]=p.encode(v[j]),m+=A,b=Math.max(b,A)}var P,B,q=new f(n),R=0;for(P=0;P<b;P++)for(B=0;B<a;B++)P<v[B].length&&(q[R++]=v[B][P]);for(P=0;P<g;P++)for(B=0;B<a;B++)q[R++]=y[B][P];return q}function c(e,t,r,l){var c;if(B(e))c=P.fromArray(e);else{if("string"!=typeof e)throw new Error("Invalid data");var f=t;if(!f){var g=P.rawSplit(e);f=E.getBestVersionForData(g,r)}c=P.fromString(e,f||40)}var p=E.getBestVersionForData(c,r);if(!p)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<p)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+p+".\n")}else t=p;var v=d(t,r,c),y=h.getSymbolSize(t),w=new m(y);return n(w,t),o(w),i(w,t),s(w,r,0),t>=7&&a(w,t),u(w,v),isNaN(l)&&(l=b.getBestMask(w,s.bind(null,w,r))),b.applyMask(l,w),s(w,r,l),{modules:w,version:t,errorCorrectionLevel:r,maskPattern:l,segments:c}}var f=r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),h=r("./node_modules/qrcode/lib/core/utils.js"),g=r("./node_modules/qrcode/lib/core/error-correction-level.js"),p=r("./node_modules/qrcode/lib/core/bit-buffer.js"),m=r("./node_modules/qrcode/lib/core/bit-matrix.js"),v=r("./node_modules/qrcode/lib/core/alignment-pattern.js"),y=r("./node_modules/qrcode/lib/core/finder-pattern.js"),b=r("./node_modules/qrcode/lib/core/mask-pattern.js"),w=r("./node_modules/qrcode/lib/core/error-correction-code.js"),_=r("./node_modules/qrcode/lib/core/reed-solomon-encoder.js"),E=r("./node_modules/qrcode/lib/core/version.js"),j=r("./node_modules/qrcode/lib/core/format-info.js"),A=r("./node_modules/qrcode/lib/core/mode.js"),P=r("./node_modules/qrcode/lib/core/segments.js"),B=r("./node_modules/qrcode/node_modules/isarray/index.js");t.create=function(e,t){if(void 0===e||""===e)throw new Error("No input text");var r,n,o=g.M;return void 0!==t&&(o=g.from(t.errorCorrectionLevel,g.M),r=E.from(t.version),n=b.from(t.maskPattern),t.toSJISFunc&&h.setToSJISFunction(t.toSJISFunc)),c(e,r,o,n)}},"./node_modules/qrcode/lib/core/reed-solomon-encoder.js":function(e,t,r){function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}var o=r("./node_modules/qrcode/lib/utils/typedarray-buffer.js"),i=r("./node_modules/qrcode/lib/core/polynomial.js");n.prototype.initialize=function(e){this.degree=e,this.genPoly=i.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");var t=new o(this.degree);t.fill(0);var r=o.concat([e,t],e.length+this.degree),n=i.mod(r,this.genPoly),a=this.degree-n.length;if(a>0){var s=new o(this.degree);return s.fill(0),n.copy(s,a),s}return n},e.exports=n},"./node_modules/qrcode/lib/core/regex.js":function(e,t){var r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");var n="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+")(?:.|[\r\n]))+";t.KANJI=new RegExp(r,"g"),t.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=new RegExp(n,"g"),t.NUMERIC=new RegExp("[0-9]+","g"),t.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var o=new RegExp("^"+r+"$"),i=new RegExp("^[0-9]+$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return o.test(e)},t.testNumeric=function(e){return i.test(e)},t.testAlphanumeric=function(e){return a.test(e)}},"./node_modules/qrcode/lib/core/segments.js":function(e,t,r){function n(e){return unescape(encodeURIComponent(e)).length}function o(e,t,r){for(var n,o=[];null!==(n=e.exec(r));)o.push({data:n[0],index:n.index,mode:t,length:n[0].length});return o}function i(e){var t,r,n=o(m.NUMERIC,c.NUMERIC,e),i=o(m.ALPHANUMERIC,c.ALPHANUMERIC,e);return v.isKanjiModeEnabled()?(t=o(m.BYTE,c.BYTE,e),r=o(m.KANJI,c.KANJI,e)):(t=o(m.BYTE_KANJI,c.BYTE,e),r=[]),n.concat(i,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function a(e,t){switch(t){case c.NUMERIC:return f.getBitsLength(e);case c.ALPHANUMERIC:return h.getBitsLength(e);case c.KANJI:return p.getBitsLength(e);case c.BYTE:return g.getBitsLength(e)}}function s(e){return e.reduce(function(e,t){var r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}function u(e){for(var t=[],r=0;r<e.length;r++){var o=e[r];switch(o.mode){case c.NUMERIC:t.push([o,{data:o.data,mode:c.ALPHANUMERIC,length:o.length},{data:o.data,mode:c.BYTE,length:o.length}]);break;case c.ALPHANUMERIC:t.push([o,{data:o.data,mode:c.BYTE,length:o.length}]);break;case c.KANJI:t.push([o,{data:o.data,mode:c.BYTE,length:n(o.data)}]);break;case c.BYTE:t.push([{data:o.data,mode:c.BYTE,length:n(o.data)}])}}return t}function d(e,t){for(var r={},n={start:{}},o=["start"],i=0;i<e.length;i++){for(var s=e[i],u=[],d=0;d<s.length;d++){var l=s[d],f=""+i+d;u.push(f),r[f]={node:l,lastCount:0},n[f]={};for(var h=0;h<o.length;h++){var g=o[h];r[g]&&r[g].node.mode===l.mode?(n[g][f]=a(r[g].lastCount+l.length,l.mode)-a(r[g].lastCount,l.mode),r[g].lastCount+=l.length):(r[g]&&(r[g].lastCount=l.length),n[g][f]=a(l.length,l.mode)+4+c.getCharCountIndicator(l.mode,t))}}o=u}for(h=0;h<o.length;h++)n[o[h]].end=0;return{map:n,table:r}}function l(e,t){var r,n=c.getBestModeForData(e);if((r=c.from(t,n))!==c.BYTE&&r.bit<n.bit)throw new Error('"'+e+'" cannot be encoded with mode '+c.toString(r)+".\n Suggested mode is: "+c.toString(n));switch(r!==c.KANJI||v.isKanjiModeEnabled()||(r=c.BYTE),r){case c.NUMERIC:return new f(e);case c.ALPHANUMERIC:return new h(e);case c.KANJI:return new p(e);case c.BYTE:return new g(e)}}var c=r("./node_modules/qrcode/lib/core/mode.js"),f=r("./node_modules/qrcode/lib/core/numeric-data.js"),h=r("./node_modules/qrcode/lib/core/alphanumeric-data.js"),g=r("./node_modules/qrcode/lib/core/byte-data.js"),p=r("./node_modules/qrcode/lib/core/kanji-data.js"),m=r("./node_modules/qrcode/lib/core/regex.js"),v=r("./node_modules/qrcode/lib/core/utils.js"),y=r("./node_modules/dijkstrajs/dijkstra.js");t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(l(t,null)):t.data&&e.push(l(t.data,t.mode)),e},[])},t.fromString=function(e,r){for(var n=i(e,v.isKanjiModeEnabled()),o=u(n),a=d(o,r),l=y.find_path(a.map,"start","end"),c=[],f=1;f<l.length-1;f++)c.push(a.table[l[f]].node);return t.fromArray(s(c))},t.rawSplit=function(e){return t.fromArray(i(e,v.isKanjiModeEnabled()))}},"./node_modules/qrcode/lib/core/utils.js":function(e,t){var r,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){for(var t=0;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},"./node_modules/qrcode/lib/core/version-check.js":function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},"./node_modules/qrcode/lib/core/version.js":function(e,t,r){function n(e,r,n){for(var o=1;o<=40;o++)if(r<=t.getCapacity(o,n,e))return o}function o(e,t){return l.getCharCountIndicator(e,t)+4}function i(e,t){var r=0;return e.forEach(function(e){var n=o(e.mode,t);r+=n+e.getBitsLength()}),r}function a(e,r){for(var n=1;n<=40;n++){if(i(e,n)<=t.getCapacity(n,r,l.MIXED))return n}}var s=r("./node_modules/qrcode/lib/core/utils.js"),u=r("./node_modules/qrcode/lib/core/error-correction-code.js"),d=r("./node_modules/qrcode/lib/core/error-correction-level.js"),l=r("./node_modules/qrcode/lib/core/mode.js"),c=r("./node_modules/qrcode/lib/core/version-check.js"),f=r("./node_modules/qrcode/node_modules/isarray/index.js"),h=s.getBCHDigit(7973);t.from=function(e,t){return c.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!c.isValid(e))throw new Error("Invalid QR Code version");void 0===r&&(r=l.BYTE);var n=s.getSymbolTotalCodewords(e),i=u.getTotalCodewordsCount(e,t),a=8*(n-i);if(r===l.MIXED)return a;var d=a-o(r,e);switch(r){case l.NUMERIC:return Math.floor(d/10*3);case l.ALPHANUMERIC:return Math.floor(d/11*2);case l.KANJI:return Math.floor(d/13);case l.BYTE:default:return Math.floor(d/8)}},t.getBestVersionForData=function(e,t){var r,o=d.from(t,d.M);if(f(e)){if(e.length>1)return a(e,o);if(0===e.length)return 1;r=e[0]}else r=e;return n(r.mode,r.getLength(),o)},t.getEncodedBits=function(e){if(!c.isValid(e)||e<7)throw new Error("Invalid QR Code version");for(var t=e<<12;s.getBCHDigit(t)-h>=0;)t^=7973<<s.getBCHDigit(t)-h;return e<<12|t}},"./node_modules/qrcode/lib/renderer/canvas.js":function(e,t,r){function n(e,t,r){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=r,t.width=r,t.style.height=r+"px",t.style.width=r+"px"}function o(){try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}}var i=r("./node_modules/qrcode/lib/renderer/utils.js");t.render=function(e,t,r){var a=r,s=t;void 0!==a||t&&t.getContext||(a=t,t=void 0),t||(s=o()),a=i.getOptions(a);var u=i.getImageWidth(e.modules.size,a),d=s.getContext("2d"),l=d.createImageData(u,u);return i.qrToImageData(l.data,e,a),n(d,s,u),d.putImageData(l,0,0),s},t.renderToDataURL=function(e,r,n){var o=n;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});var i=t.render(e,r,o),a=o.type||"image/png",s=o.rendererOpts||{};return i.toDataURL(a,s.quality)}},"./node_modules/qrcode/lib/renderer/svg-tag.js":function(e,t,r){function n(e,t){var r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function o(e,t,r){var n=e+t;return void 0!==r&&(n+=" "+r),n}function i(e,t,r){for(var n="",i=0,a=!1,s=0,u=0;u<e.length;u++){var d=Math.floor(u%t),l=Math.floor(u/t);d||a||(a=!0),e[u]?(s++,u>0&&d>0&&e[u-1]||(n+=a?o("M",d+r,.5+l+r):o("m",i,0),i=0,a=!1),d+1<t&&e[u+1]||(n+=o("h",s),s=0)):i++}return n}var a=r("./node_modules/qrcode/lib/renderer/utils.js");t.render=function(e,t,r){var o=a.getOptions(t),s=e.modules.size,u=e.modules.data,d=s+2*o.margin,l=o.color.light.a?"<path "+n(o.color.light,"fill")+' d="M0 0h'+d+"v"+d+'H0z"/>':"",c="<path "+n(o.color.dark,"stroke")+' d="'+i(u,s,o.margin)+'"/>',f='viewBox="0 0 '+d+" "+d+'"',h=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+h+f+' shape-rendering="crispEdges">'+l+c+"</svg>\n";return"function"==typeof r&&r(null,g),g}},"./node_modules/qrcode/lib/renderer/utils.js":function(e,t){function r(e){if("string"!=typeof e)throw new Error("Color should be defined as hex string");var t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);3!==t.length&&4!==t.length||(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");var r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});var t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,o=e.scale||4;return{width:n,scale:n?4:o,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){var n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){for(var o=r.modules.size,i=r.modules.data,a=t.getScale(o,n),s=Math.floor((o+2*n.margin)*a),u=n.margin*a,d=[n.color.light,n.color.dark],l=0;l<s;l++)for(var c=0;c<s;c++){var f=4*(l*s+c),h=n.color.light;if(l>=u&&c>=u&&l<s-u&&c<s-u){var g=Math.floor((l-u)/a),p=Math.floor((c-u)/a);h=d[i[g*o+p]?1:0]}e[f++]=h.r,e[f++]=h.g,e[f++]=h.b,e[f]=h.a}}},"./node_modules/qrcode/lib/utils/typedarray-buffer.js":function(e,t,r){"use strict";function n(e,t,r){return n.TYPED_ARRAY_SUPPORT||this instanceof n?"number"==typeof e?s(this,e):m(this,e,t,r):new n(e,t,r)}function o(e){if(e>=y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+y.toString(16)+" bytes");return 0|e}function i(e){return e!==e}function a(e,t){var r;return n.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(t),r.__proto__=n.prototype):(r=e,null===r&&(r=new n(t)),r.length=t),r}function s(e,t){var r=a(e,t<0?0:0|o(t));if(!n.TYPED_ARRAY_SUPPORT)for(var i=0;i<t;++i)r[i]=0;return r}function u(e,t){var r=0|h(t),n=a(e,r),o=n.write(t);return o!==r&&(n=n.slice(0,o)),n}function d(e,t){for(var r=t.length<0?0:0|o(t.length),n=a(e,r),i=0;i<r;i+=1)n[i]=255&t[i];return n}function l(e,t,r,o){if(r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(o||0))throw new RangeError("'length' is out of bounds");var i;return i=void 0===r&&void 0===o?new Uint8Array(t):void 0===o?new Uint8Array(t,r):new Uint8Array(t,r,o),n.TYPED_ARRAY_SUPPORT?i.__proto__=n.prototype:i=d(e,i),i}function c(e,t){if(n.isBuffer(t)){var r=0|o(t.length),s=a(e,r);return 0===s.length?s:(t.copy(s,0,0,r),s)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||i(t.length)?a(e,0):d(e,t);if("Buffer"===t.type&&Array.isArray(t.data))return d(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function f(e,t){t=t||1/0;for(var r,n=e.length,o=null,i=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function h(e){return n.isBuffer(e)?e.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer)?e.byteLength:("string"!=typeof e&&(e=""+e),0===e.length?0:f(e).length)}function g(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function p(e,t,r,n){return g(f(t,e.length-r),e,r,n)}function m(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?l(e,t,r,n):"string"==typeof t?u(e,t,r):c(e,t)}var v=r("./node_modules/qrcode/node_modules/isarray/index.js");n.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()}catch(e){return!1}}();var y=n.TYPED_ARRAY_SUPPORT?2147483647:1073741823;n.TYPED_ARRAY_SUPPORT&&(n.prototype.__proto__=Uint8Array.prototype,n.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&n[Symbol.species]===n&&Object.defineProperty(n,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),n.prototype.write=function(e,t,r){void 0===t?(r=this.length,t=0):void 0===r&&"string"==typeof t?(r=this.length,t=0):isFinite(t)&&(t|=0,isFinite(r)?r|=0:r=void 0);var n=this.length-t;if((void 0===r||r>n)&&(r=n),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");return p(this,e,t,r)},n.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var o;if(n.TYPED_ARRAY_SUPPORT)o=this.subarray(e,t),o.__proto__=n.prototype;else{var i=t-e;o=new n(i,void 0);for(var a=0;a<i;++a)o[a]=this[a+e]}return o},n.prototype.copy=function(e,t,r,o){if(r||(r=0),o||0===o||(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<r&&(o=r),o===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-r&&(o=e.length-t+r);var i,a=o-r;if(this===e&&r<t&&t<o)for(i=a-1;i>=0;--i)e[i+t]=this[i+r];else if(a<1e3||!n.TYPED_ARRAY_SUPPORT)for(i=0;i<a;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+a),t);return a},n.prototype.fill=function(e,t,r){if("string"==typeof e){if("string"==typeof t?(t=0,r=this.length):"string"==typeof r&&(r=this.length),1===e.length){var o=e.charCodeAt(0);o<256&&(e=o)}}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0);var i;if("number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var a=n.isBuffer(e)?e:new n(e),s=a.length;for(i=0;i<r-t;++i)this[i+t]=a[i%s]}return this},n.concat=function(e,t){if(!v(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return a(null,0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var o=s(null,t),i=0;for(r=0;r<e.length;++r){var u=e[r];if(!n.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(o,i),i+=u.length}return o},n.byteLength=h,n.prototype._isBuffer=!0,n.isBuffer=function(e){return!(null==e||!e._isBuffer)},e.exports=n},"./node_modules/qrcode/node_modules/isarray/index.js":function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}}});