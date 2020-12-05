(function(t){function e(e){for(var s,i,a=e[0],l=e[1],u=e[2],h=0,f=[];h<a.length;h++)i=a[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/ghost-busters/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},4897:function(t,e,n){"use strict";n("9637")},"4bc3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Game")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",[t._v("rows: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.rows.string,expression:"rows.string"}],attrs:{name:"rows",type:"number",min:t.rows.min,max:t.rows.max},domProps:{value:t.rows.string},on:{input:[function(e){e.target.composing||t.$set(t.rows,"string",e.target.value)},function(e){return t.handleInputChange(t.rows)}]}})]),n("label",[t._v("cols: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cols.string,expression:"cols.string"}],attrs:{name:"cols",type:"number",min:t.cols.min,max:t.cols.max},domProps:{value:t.cols.string},on:{input:[function(e){e.target.composing||t.$set(t.cols,"string",e.target.value)},function(e){return t.handleInputChange(t.cols)}]}})]),n("label",[t._v("ghosts: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.ghosts.string,expression:"ghosts.string"}],attrs:{name:"ghosts",type:"number",min:t.ghosts.min,max:t.ghosts.max},domProps:{value:t.ghosts.string},on:{input:[function(e){e.target.composing||t.$set(t.ghosts,"string",e.target.value)},function(e){return t.handleInputChange(t.ghosts)}]}})]),n("Board",{attrs:{rows:t.rows.value,cols:t.cols.value,ghosts:t.ghosts.value}})],1)},a=[],l=(n("d3b7"),n("25f0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"holder"}},[n("table",{staticClass:"center"},t._l(t.probabilities,(function(e,s){return n("tr",{key:s},t._l(e,(function(e,r){return n("td",{key:r,style:{backgroundColor:t.bgColors[t.getDistClass(t.closestGhostDistanceFromCell(s,r))],color:t.fontColors[t.getDistClass(t.closestGhostDistanceFromCell(s,r))]},on:{click:function(e){return t.senseCell({x:s,y:r})}}},[t._v(" "+t._s(t.closestGhostDistanceFromCell(s,r))+" ")])})),0)})),0)])}),u=[],c=(n("cb29"),n("d81d"),n("13d5"),n("a9e3"),{name:"Board",props:{rows:{type:Number,default:9},cols:{type:Number,default:9},ghosts:{type:Number,default:1}},data:function(){return{probabilities:[[]],ghostPositions:[],splits:[2,7],bgColors:["red","orange","green"],fontColors:["white","black","white"]}},methods:{initialize:function(){var t=this;this.probabilities=Array(this.rows).fill(1/this.rows/this.cols).map((function(e){return Array(t.cols).fill(e)})),this.ghostPositions=Array(this.ghosts);for(var e=0;e<this.ghosts;e++)this.ghostPositions[e]=this.getRandomCell()},getRandomCell:function(){return{x:Math.floor(Math.random()*this.rows),y:Math.floor(Math.random()*this.cols)}},getDistClass:function(t){for(var e=0;e<this.splits.length;e++)if(t<=this.splits[e])return e;return this.splits.length},ghostCountOfCell:function(t,e){return this.ghostPositions.reduce((function(n,s){var r=s.x,o=s.y;return r===t&&o===e?++n:n}),0)},closestGhostDistanceFromCell:function(t,e){return this.ghostPositions.reduce((function(n,s){var r=s.x,o=s.y;return Math.min(n,Math.abs(r-t)+Math.abs(o-e))}),this.rows+this.cols)},updateCell:function(t,e){this.probabilities[t.x][t.y]=e,this.$set(this.probabilities,t.x,this.probabilities[t.x])},senseCell:function(t){this.updateCell(t,0)},getCurrentProbability:function(t,e){return t>=0&&t<this.rows&&e>=0&&e<this.cols?this.probabilities[t][e]:0},isCornerCell:function(t,e){return(0===t||t===this.rows-1)&&(0===e||e===this.cols-1)},isMidCell:function(t,e){return t>0&&t<this.rows-1&&e>0&&e<this.cols-1},isSideCell:function(t,e){return!this.isCornerCell(t,e)&&!this.isMidCell(t,e)},getAdvancedProbability:function(t,e){(this.isCornerCell(t,e)||this.isSideCell(t,e))&&console.log("haha")},advanceTime:function(){for(var t=0;t<this.rows;t++)for(var e=0;e<this.cols;e++)this.getAdvancedProbability(t,e)},catchGhost:function(){}},watch:{$props:{handler:function(){this.initialize()},deep:!0,immediate:!0}},created:function(){this.initialize()}}),h=c,f=(n("4897"),n("2877")),p=Object(f["a"])(h,l,u,!1,null,"61e8beda",null),d=p.exports,m={name:"Game",components:{Board:d},data:function(){return{rows:{string:"9",value:9,min:1,max:10},cols:{string:"9",value:9,min:1,max:20},ghosts:{string:"1",value:1,min:1,max:10}}},methods:{handleInputChange:function(t){if(""===t.string)this.$set(t,"value",t.min);else{var e=Math.max(t.min,Math.min(t.max,parseInt(t.string)));this.$set(t,"value",e),this.$set(t,"string",e.toString())}}}},g=m,b=(n("a828"),Object(f["a"])(g,i,a,!1,null,"61991eca",null)),v=b.exports,w={name:"App",components:{Game:v}},y=w,C=(n("034f"),Object(f["a"])(y,r,o,!1,null,null,null)),x=C.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,n){},9637:function(t,e,n){},a828:function(t,e,n){"use strict";n("4bc3")}});
//# sourceMappingURL=app.55391ca3.js.map