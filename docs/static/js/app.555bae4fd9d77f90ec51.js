webpackJsonp([0],{"609h":function(t,e){},HPht:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Text: "),n("textarea",{domProps:{value:t.message},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}})])},staticRenderFns:[]};var o=n("VU/8")({name:"inputText",data:function(){return{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},a,!1,function(t){n("zHp9")},"data-v-642843ef",null).exports,r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  fontFamilyJa:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa01",value:"Hiragino Kaku Gothic ProN"},domProps:{checked:t._q(t.fontFamilyJa,"Hiragino Kaku Gothic ProN")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="Hiragino Kaku Gothic ProN"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa01"}},[t._v("Hiragino Kaku Gothic ProN")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa02",value:"YuGothic"},domProps:{checked:t._q(t.fontFamilyJa,"YuGothic")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="YuGothic"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa02"}},[t._v("YuGothic")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa03",value:"Hiragino Mincho ProN"},domProps:{checked:t._q(t.fontFamilyJa,"Hiragino Mincho ProN")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="Hiragino Mincho ProN"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa03"}},[t._v("Hiragino Mincho ProN")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa04",value:"YuMincho"},domProps:{checked:t._q(t.fontFamilyJa,"YuMincho")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="YuMincho"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa04"}},[t._v("YuMincho")])])},staticRenderFns:[]};var u=n("VU/8")({name:"radioFontFamilyJa",data:function(){return{fontFamilyJa:"Hiragino Kaku Gothic ProN"}},methods:{updateValue:function(t){this.$emit("input",{familyJa:t.target.value}),this.$emit("change",{familyJa:t.target.value})}}},r,!1,function(t){n("vwO6")},"data-v-1dcd82fb",null).exports,l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  fontFamilyEn:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn01",value:"Helvetica"},domProps:{checked:t._q(t.fontFamilyEn,"Helvetica")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Helvetica"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn01"}},[t._v("Helvetica")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn02",value:"Helvetica Neue"},domProps:{checked:t._q(t.fontFamilyEn,"Helvetica Neue")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Helvetica Neue"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn02"}},[t._v("Helvetica Neue")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn03",value:"Georgia"},domProps:{checked:t._q(t.fontFamilyEn,"Georgia")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Georgia"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn03"}},[t._v("Georgia")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn04",value:"Times"},domProps:{checked:t._q(t.fontFamilyEn,"Times")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Times"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn04"}},[t._v("Times")])])},staticRenderFns:[]};var c=n("VU/8")({name:"radioFontFamilyEn",data:function(){return{fontFamilyEn:"Helvetica"}},methods:{updateValue:function(t){this.$emit("input",{familyEn:t.target.value}),this.$emit("change",{familyEn:t.target.value})}}},l,!1,function(t){n("609h")},"data-v-59369b8c",null).exports,m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  FontSize: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{type:"range",min:"10",max:"300"},domProps:{value:t.fontSize},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.fontSize=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{type:"number",min:"10",max:"300"},domProps:{value:t.fontSize},on:{input:[function(e){e.target.composing||(t.fontSize=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" px\n")])},staticRenderFns:[]};var s=n("VU/8")({name:"inputFontSize",data:function(){return{fontSize:16}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},m,!1,function(t){n("qaIF")},"data-v-0e2359b0",null).exports,d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  lineHeight: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineHeight,expression:"lineHeight"}],attrs:{type:"range",min:"1",max:"3",step:"0.1"},domProps:{value:t.lineHeight},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.lineHeight=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineHeight,expression:"lineHeight"}],attrs:{type:"number",min:"1",max:"3",step:"0.1"},domProps:{value:t.lineHeight},on:{input:[function(e){e.target.composing||(t.lineHeight=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}})])},staticRenderFns:[]};var f=n("VU/8")({name:"inputLineHeight",data:function(){return{lineHeight:1.7}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},d,!1,function(t){n("HPht")},"data-v-d6580c12",null).exports,v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  letterSpacing: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.letterSpacing,expression:"letterSpacing"}],attrs:{type:"range",min:"0",max:"1",step:"0.01"},domProps:{value:t.letterSpacing},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.letterSpacing=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.letterSpacing,expression:"letterSpacing"}],attrs:{type:"number",min:"0",max:"1",step:"0.01"},domProps:{value:t.letterSpacing},on:{input:[function(e){e.target.composing||(t.letterSpacing=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" em\n")])},staticRenderFns:[]};var p=n("VU/8")({name:"inputLetterSpacing",data:function(){return{letterSpacing:"0"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},v,!1,function(t){n("zOry")},"data-v-7bb15e9b",null).exports,g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  fontWeight:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontWeight,expression:"fontWeight"}],attrs:{type:"radio",id:"fontWeight01",value:"normal"},domProps:{checked:t._q(t.fontWeight,"normal")},on:{input:t.updateValue,change:function(e){t.fontWeight="normal"}}}),t._v(" "),n("label",{attrs:{for:"fontWeight01"}},[t._v("normal")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontWeight,expression:"fontWeight"}],attrs:{type:"radio",id:"fontWeight02",value:"bold"},domProps:{checked:t._q(t.fontWeight,"bold")},on:{input:t.updateValue,change:function(e){t.fontWeight="bold"}}}),t._v(" "),n("label",{attrs:{for:"fontWeight02"}},[t._v("bold")])])},staticRenderFns:[]};var h=n("VU/8")({name:"radioFontWeight",data:function(){return{fontWeight:"normal"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},g,!1,function(t){n("g0Jk")},"data-v-c67c4798",null).exports,y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  textAlign:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textAlign,expression:"textAlign"}],attrs:{type:"radio",id:"textAlign01",value:"left"},domProps:{checked:t._q(t.textAlign,"left")},on:{input:t.updateValue,change:function(e){t.textAlign="left"}}}),t._v(" "),n("label",{attrs:{for:"textAlign01"}},[t._v("left")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textAlign,expression:"textAlign"}],attrs:{type:"radio",id:"textAlign02",value:"center"},domProps:{checked:t._q(t.textAlign,"center")},on:{input:t.updateValue,change:function(e){t.textAlign="center"}}}),t._v(" "),n("label",{attrs:{for:"textAlign02"}},[t._v("center")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textAlign,expression:"textAlign"}],attrs:{type:"radio",id:"textAlign03",value:"right"},domProps:{checked:t._q(t.textAlign,"right")},on:{input:t.updateValue,change:function(e){t.textAlign="right"}}}),t._v(" "),n("label",{attrs:{for:"textAlign03"}},[t._v("right")])])},staticRenderFns:[]};var _=n("VU/8")({name:"radioTextAlign",data:function(){return{textAlign:"left"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},y,!1,function(t){n("cHGD")},"data-v-724e9c57",null).exports,F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  FontSmoothing:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSmoothing,expression:"fontSmoothing"}],attrs:{type:"radio",id:"fontSmoothing01",value:"subpixel-antialiased"},domProps:{checked:t._q(t.fontSmoothing,"subpixel-antialiased")},on:{input:t.updateValue,change:function(e){t.fontSmoothing="subpixel-antialiased"}}}),t._v(" "),n("label",{attrs:{for:"fontSmoothing01"}},[t._v("subpixel-antialiased")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSmoothing,expression:"fontSmoothing"}],attrs:{type:"radio",id:"fontSmoothing02",value:"antialiased"},domProps:{checked:t._q(t.fontSmoothing,"antialiased")},on:{input:t.updateValue,change:function(e){t.fontSmoothing="antialiased"}}}),t._v(" "),n("label",{attrs:{for:"fontSmoothing02"}},[t._v("antialiased")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSmoothing,expression:"fontSmoothing"}],attrs:{type:"radio",id:"fontSmoothing03",value:"none"},domProps:{checked:t._q(t.fontSmoothing,"none")},on:{input:t.updateValue,change:function(e){t.fontSmoothing="none"}}}),t._v(" "),n("label",{attrs:{for:"fontSmoothing03"}},[t._v("none")])])},staticRenderFns:[]};var x=n("VU/8")({name:"radioFontSmoothing",data:function(){return{fontSmoothing:"subpixel-antialiased"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},F,!1,function(t){n("gRP6")},"data-v-82592506",null).exports,b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  CustomStyle: "),n("input",{attrs:{type:"text"},domProps:{value:t.customStyle},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}})])},staticRenderFns:[]};var S=n("VU/8")({name:"inputCustomStyle",data:function(){return{customStyle:"color: red;"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},b,!1,function(t){n("QbPZ")},"data-v-10d3adbd",null).exports,E=(n("uMhA"),{name:"App",components:{inputText:o,radioFontFamilyJa:u,radioFontFamilyEn:c,inputFontSize:s,inputLineHeight:f,inputLetterSpacing:p,radioFontWeight:h,radioTextAlign:_,radioFontSmoothing:x,inputCustomStyle:S},data:function(){return{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。",customStyle:"color: red;",styleObject:{"font-family":"Helvetica , Hiragino Kaku Gothic ProN",color:"#111","font-size":"16px","line-height":"1.7","letter-spacing":"0em","font-weight":"normal","text-align":"left","-webkit-font-smoothing":"subpixel-antialiased"}}},methods:{getOtherSideFont:function(t){for(var e,n=document.getElementsByName(t),i=0;i<n.length;i++)if(n[i].checked){e=n[i].value;break}return e},changeText:function(t){this.message=t},changeFontFamily:function(t){if(t.familyJa)var e=t.familyJa,n=this.getOtherSideFont("fontFamilyEn");else if(t.familyEn)e=this.getOtherSideFont("fontFamilyJa"),n=t.familyEn;var i=n+" , "+e;this.styleObject["font-family"]=i},changeFontSize:function(t){this.styleObject["font-size"]=t+"px"},changeLineHeight:function(t){this.styleObject["line-height"]=t},changeLetterSpacing:function(t){this.styleObject["letter-spacing"]=t+"em"},changeFontWeight:function(t){this.styleObject["font-weight"]=t},changeTextAlign:function(t){this.styleObject["text-align"]=t},changeFontSmoothing:function(t){this.styleObject["-webkit-font-smoothing"]=t},changeCustomStyle:function(t){this.customStyle=t}}}),$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"tools"},[n("div",[n("inputText",{on:{change:t.changeText}})],1),t._v(" "),n("div",[n("radioFontFamilyJa",{on:{change:t.changeFontFamily}})],1),t._v(" "),n("div",[n("radioFontFamilyEn",{on:{change:t.changeFontFamily}})],1),t._v(" "),n("div",[n("inputFontSize",{on:{change:t.changeFontSize}})],1),t._v(" "),n("div",[n("inputLineHeight",{on:{change:t.changeLineHeight}})],1),t._v(" "),n("div",[n("inputLetterSpacing",{on:{change:t.changeLetterSpacing}})],1),t._v(" "),n("div",[n("radioFontWeight",{on:{change:t.changeFontWeight}})],1),t._v(" "),n("div",[n("radioTextAlign",{on:{change:t.changeTextAlign}})],1),t._v(" "),n("div",[n("radioFontSmoothing",{on:{change:t.changeFontSmoothing}})],1),t._v(" "),n("div",[n("inputCustomStyle",{on:{change:t.changeCustomStyle}})],1)]),t._v(" "),n("div",{staticClass:"container"},[n("pre",[t._v("styleObject: "+t._s(t.styleObject)+"\n")]),t._v(" "),n("div",{staticClass:"container__block",style:t.styleObject},[t._v(t._s(t.message))])])])])},staticRenderFns:[]};var V=n("VU/8")(E,$,!1,function(t){n("WN7W")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:V},template:"<App/>"})},QbPZ:function(t,e){},WN7W:function(t,e){},cHGD:function(t,e){},g0Jk:function(t,e){},gRP6:function(t,e){},qaIF:function(t,e){},uMhA:function(t,e){},vwO6:function(t,e){},zHp9:function(t,e){},zOry:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.555bae4fd9d77f90ec51.js.map