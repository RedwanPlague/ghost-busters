(function(t){function e(e){for(var n,o,a=e[0],l=e[1],u=e[2],h=0,f=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/ghost-busters/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"184c":function(t,e,i){"use strict";i("2a28")},"2a28":function(t,e,i){},"4ff1":function(t,e,i){"use strict";i("9771")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Game")],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("label",[t._v("rows: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.rows.string,expression:"rows.string"}],attrs:{name:"rows",type:"number",min:t.rows.min,max:t.rows.max},domProps:{value:t.rows.string},on:{input:[function(e){e.target.composing||t.$set(t.rows,"string",e.target.value)},function(e){return t.handleInputChange(t.rows)}]}})]),i("label",[t._v("cols: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.cols.string,expression:"cols.string"}],attrs:{name:"cols",type:"number",min:t.cols.min,max:t.cols.max},domProps:{value:t.cols.string},on:{input:[function(e){e.target.composing||t.$set(t.cols,"string",e.target.value)},function(e){return t.handleInputChange(t.cols)}]}})]),i("label",[t._v("ghosts: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.ghosts.string,expression:"ghosts.string"}],attrs:{name:"ghosts",type:"number",min:t.ghosts.min,max:t.ghosts.max},domProps:{value:t.ghosts.string},on:{input:[function(e){e.target.composing||t.$set(t.ghosts,"string",e.target.value)},function(e){return t.handleInputChange(t.ghosts)}]}})]),i("label",[t._v("near: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.near.string,expression:"near.string"}],attrs:{name:"near",type:"number",min:t.near.min,max:t.near.max},domProps:{value:t.near.string},on:{input:[function(e){e.target.composing||t.$set(t.near,"string",e.target.value)},function(e){return t.handleInputChange(t.near)}]}})]),i("label",[t._v("far: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.far.string,expression:"far.string"}],attrs:{name:"far",type:"number",min:t.far.min,max:t.far.max},domProps:{value:t.far.string},on:{input:[function(e){e.target.composing||t.$set(t.far,"string",e.target.value)},function(e){return t.handleInputChange(t.far)}]}})]),i("Board",{attrs:{rows:t.rows.value,cols:t.cols.value,ghosts:t.ghosts.value,splits:[t.near.value,t.near.value+t.far.value]}})],1)},a=[],l=(i("d3b7"),i("25f0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"holder"}},[i("table",{staticClass:"center"},t._l(t.probabilities,(function(e,n){return i("tr",{key:n},t._l(e,(function(e,r){return i("td",{key:r,style:{backgroundColor:t.bgColors[t.getDistClass(t.closestGhostDistanceFromCell(n,r))],color:t.fontColors[t.getDistClass(t.closestGhostDistanceFromCell(n,r))]},on:{click:function(e){return t.senseCell(n,r)}}},[t._v(" "+t._s((100*e).toFixed(2))+" ")])})),0)})),0),i("button",{on:{click:t.advanceTime}},[t._v("Advance Time")])])}),u=[],c=(i("cb29"),i("d81d"),i("13d5"),i("a9e3"),{name:"Board",props:{rows:{type:Number,default:9},cols:{type:Number,default:9},ghosts:{type:Number,default:1},splits:{type:Array,default:function(){return[2,7]}}},data:function(){return{probabilities:[[]],ghostPositions:[],bgColors:["red","orange","green"],fontColors:["white","black","white"],cornerProbabilities:[.48,.018,.004],sideProbabilities:[.32,.012,.004],midProbabilities:[.24,.009,.004]}},methods:{initialize:function(){var t=this;this.probabilities=Array(this.rows).fill(1/this.rows/this.cols).map((function(e){return Array(t.cols).fill(e)})),this.ghostPositions=Array(this.ghosts);for(var e=0;e<this.ghosts;e++)this.ghostPositions[e]=this.getRandomCell()},withinBoard:function(t,e){return t>=0&&t<this.rows&&e>=0&&e<this.cols},getRandomCell:function(){return{x:Math.floor(Math.random()*this.rows),y:Math.floor(Math.random()*this.cols)}},getDistClass:function(t){for(var e=0;e<this.splits.length;e++)if(t<=this.splits[e])return e;return this.splits.length},ghostCountOfCell:function(t,e){return this.ghostPositions.reduce((function(i,n){var r=n.x,s=n.y;return r===t&&s===e?++i:i}),0)},closestGhostDistanceFromCell:function(t,e){return this.ghostPositions.reduce((function(i,n){var r=n.x,s=n.y;return Math.min(i,Math.abs(r-t)+Math.abs(s-e))}),this.rows+this.cols)},updateCell:function(t,e,i){this.probabilities[t][e]=i,this.$set(this.probabilities,t,this.probabilities[t])},senseCell:function(t,e){this.updateCell(t,e,0)},isCornerCell:function(t,e){return(0===t||t===this.rows-1)&&(0===e||e===this.cols-1)},isMidCell:function(t,e){return t>0&&t<this.rows-1&&e>0&&e<this.cols-1},isSideCell:function(t,e){return!this.isCornerCell(t,e)&&!this.isMidCell(t,e)},getMoveProbabilities:function(t,e){return this.isCornerCell(t,e)?this.cornerProbabilities:this.isSideCell(t,e)?this.sideProbabilities:this.midProbabilities},updateArray:function(t,e,i,n){this.withinBoard(e,i)&&(t[e][i]+=n)},spreadSelf:function(t,e,i,n,r){this.updateArray(t,e+1,i,n*r[0]),this.updateArray(t,e-1,i,n*r[0]),this.updateArray(t,e,i+1,n*r[0]),this.updateArray(t,e,i-1,n*r[0]),this.updateArray(t,e+1,i+1,n*r[1]),this.updateArray(t,e+1,i-1,n*r[1]),this.updateArray(t,e-1,i+1,n*r[1]),this.updateArray(t,e-1,i-1,n*r[1]),this.updateArray(t,e,i,n*r[2])},advanceProbabilities:function(){for(var t=this,e=Array(this.rows).fill(0).map((function(e){return Array(t.cols).fill(e)})),i=0;i<this.rows;i++)for(var n=0;n<this.cols;n++)this.spreadSelf(e,i,n,this.probabilities[i][n],this.getMoveProbabilities(i,n));this.probabilities=e},goRandomDirection:function(t){var e=t.x,i=t.y,n=this.getMoveProbabilities(e,i),r=Math.random(),s=0;return this.withinBoard(e+1,i)&&(s+=n[0],r<s)?{x:e+1,y:i}:this.withinBoard(e-1,i)&&(s+=n[0],r<s)?{x:e-1,y:i}:this.withinBoard(e,i+1)&&(s+=n[0],r<s)?{x:e,y:i+1}:this.withinBoard(e,i-1)&&(s+=n[0],r<s)?{x:e,y:i-1}:this.withinBoard(e+1,i+1)&&(s+=n[1],r<s)?{x:e+1,y:i+1}:this.withinBoard(e+1,i-1)&&(s+=n[1],r<s)?{x:e+1,y:i-1}:this.withinBoard(e-1,i+1)&&(s+=n[1],r<s)?{x:e-1,y:i+1}:this.withinBoard(e-1,i-1)&&(s+=n[1],r<s)?{x:e-1,y:i-1}:{x:e,y:i}},advanceGhosts:function(){for(var t=0;t<this.ghostPositions.length;t++)this.$set(this.ghostPositions,t,this.goRandomDirection(this.ghostPositions[t]))},advanceTime:function(){this.advanceProbabilities(),this.advanceGhosts()}},watch:{rows:function(){this.initialize()},cols:function(){this.initialize()},ghosts:function(){this.initialize()},splits:function(){}},created:function(){this.initialize()}}),h=c,f=(i("4ff1"),i("2877")),d=Object(f["a"])(h,l,u,!1,null,"4e675889",null),p=d.exports,m={name:"Game",components:{Board:p},data:function(){return{rows:{string:"9",value:9,min:1,max:10},cols:{string:"9",value:9,min:1,max:20},ghosts:{string:"1",value:1,min:1,max:10},near:{string:"2",value:2,min:0,max:3},far:{string:"3",value:3,min:0,max:5}}},methods:{handleInputChange:function(t){if(""===t.string)this.$set(t,"value",t.min);else{var e=Math.max(t.min,Math.min(t.max,parseInt(t.string)));this.$set(t,"value",e),this.$set(t,"string",e.toString())}}}},g=m,v=(i("184c"),Object(f["a"])(g,o,a,!1,null,"2c2353e5",null)),b=v.exports,y={name:"App",components:{Game:b}},w=y,x=(i("034f"),Object(f["a"])(w,r,s,!1,null,null,null)),C=x.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,i){},9771:function(t,e,i){}});
//# sourceMappingURL=app.2e2f4560.js.map