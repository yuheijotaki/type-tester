webpackJsonp([1],{"/xnn":function(t,e){},"3RBl":function(t,e){},"609h":function(t,e){},"9lqR":function(t,e){},EdKA:function(t,e){},GMvP:function(t,e){},HPht:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("fZjL"),o=n.n(i),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  textType:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textType,expression:"textType"}],attrs:{type:"radio",name:"textType",id:"textJa",value:"textJa"},domProps:{checked:t._q(t.textType,"textJa")},on:{input:t.updateValue,change:function(e){t.textType="textJa"}}}),t._v(" "),n("label",{attrs:{for:"textJa"}},[t._v("和文")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textType,expression:"textType"}],attrs:{type:"radio",name:"textType",id:"textEn",value:"textEn"},domProps:{checked:t._q(t.textType,"textEn")},on:{input:t.updateValue,change:function(e){t.textType="textEn"}}}),t._v(" "),n("label",{attrs:{for:"textEn"}},[t._v("欧文")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textType,expression:"textType"}],attrs:{type:"radio",name:"textType",id:"textFree",value:"textFree"},domProps:{checked:t._q(t.textType,"textFree")},on:{input:t.updateValue,change:function(e){t.textType="textFree"}}}),t._v(" "),n("label",{attrs:{for:"textFree"}},[t._v("自由入力")]),n("br")])},staticRenderFns:[]};var u=n("VU/8")({name:"radioText",data:function(){return{textType:"textJa"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},r,!1,function(t){n("pKn4")},"data-v-17c47706",null).exports,l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Text: "),n("textarea",{attrs:{name:"inputTextArea"},domProps:{value:t.message},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}})])},staticRenderFns:[]};var s=n("VU/8")({name:"inputText",data:function(){return{message:"私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},l,!1,function(t){n("9lqR")},"data-v-f701aaf6",null).exports,c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  fontFamilyJa:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa01",value:"Hiragino Kaku Gothic ProN"},domProps:{checked:t._q(t.fontFamilyJa,"Hiragino Kaku Gothic ProN")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="Hiragino Kaku Gothic ProN"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa01"}},[t._v("Hiragino Kaku Gothic ProN")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa02",value:"YuGothic"},domProps:{checked:t._q(t.fontFamilyJa,"YuGothic")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="YuGothic"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa02"}},[t._v("YuGothic")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa03",value:"Hiragino Mincho ProN"},domProps:{checked:t._q(t.fontFamilyJa,"Hiragino Mincho ProN")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="Hiragino Mincho ProN"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa03"}},[t._v("Hiragino Mincho ProN")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa04",value:"YuMincho"},domProps:{checked:t._q(t.fontFamilyJa,"YuMincho")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="YuMincho"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa04"}},[t._v("YuMincho")])])},staticRenderFns:[]};var d=n("VU/8")({name:"radioFontFamilyJa",data:function(){return{fontFamilyJa:"Hiragino Kaku Gothic ProN"}},methods:{updateValue:function(t){this.$emit("input",{familyJa:t.target.value}),this.$emit("change",{familyJa:t.target.value})}}},c,!1,function(t){n("vwO6")},"data-v-1dcd82fb",null).exports,m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  fontFamilyEn:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn01",value:"Helvetica"},domProps:{checked:t._q(t.fontFamilyEn,"Helvetica")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Helvetica"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn01"}},[t._v("Helvetica")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn02",value:"Helvetica Neue"},domProps:{checked:t._q(t.fontFamilyEn,"Helvetica Neue")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Helvetica Neue"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn02"}},[t._v("Helvetica Neue")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn03",value:"Georgia"},domProps:{checked:t._q(t.fontFamilyEn,"Georgia")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Georgia"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn03"}},[t._v("Georgia")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn04",value:"Times"},domProps:{checked:t._q(t.fontFamilyEn,"Times")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Times"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn04"}},[t._v("Times")])])},staticRenderFns:[]};var p=n("VU/8")({name:"radioFontFamilyEn",data:function(){return{fontFamilyEn:"Helvetica"}},methods:{updateValue:function(t){this.$emit("input",{familyEn:t.target.value}),this.$emit("change",{familyEn:t.target.value})}}},m,!1,function(t){n("609h")},"data-v-59369b8c",null).exports,f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Color: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"color"},domProps:{value:t.color},on:{input:[function(e){e.target.composing||(t.color=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"text"},domProps:{value:t.color},on:{input:[function(e){e.target.composing||(t.color=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}})])},staticRenderFns:[]};var v=n("VU/8")({name:"inputColor",data:function(){return{color:"#000000"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},f,!1,function(t){n("/xnn")},"data-v-41c95a98",null).exports,g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Background: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.background,expression:"background"}],attrs:{type:"color"},domProps:{value:t.background},on:{input:[function(e){e.target.composing||(t.background=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.background,expression:"background"}],attrs:{type:"text"},domProps:{value:t.background},on:{input:[function(e){e.target.composing||(t.background=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}})])},staticRenderFns:[]};var h=n("VU/8")({name:"inputBackground",data:function(){return{background:"#ffffff"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},g,!1,function(t){n("wK19")},"data-v-bf9c04a4",null).exports,_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  FontSize: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{type:"range",min:"10",max:"300"},domProps:{value:t.fontSize},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.fontSize=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{type:"number",min:"10",max:"300"},domProps:{value:t.fontSize},on:{input:[function(e){e.target.composing||(t.fontSize=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" px\n")])},staticRenderFns:[]};var x=n("VU/8")({name:"inputFontSize",data:function(){return{fontSize:16}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},_,!1,function(t){n("qaIF")},"data-v-0e2359b0",null).exports,y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  lineHeight: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineHeight,expression:"lineHeight"}],attrs:{type:"range",min:"1",max:"3",step:"0.1"},domProps:{value:t.lineHeight},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.lineHeight=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineHeight,expression:"lineHeight"}],attrs:{type:"number",min:"1",max:"3",step:"0.1"},domProps:{value:t.lineHeight},on:{input:[function(e){e.target.composing||(t.lineHeight=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}})])},staticRenderFns:[]};var F=n("VU/8")({name:"inputLineHeight",data:function(){return{lineHeight:1.7}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},y,!1,function(t){n("HPht")},"data-v-d6580c12",null).exports,b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  letterSpacing: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.letterSpacing,expression:"letterSpacing"}],attrs:{type:"range",min:"0",max:"1",step:"0.01"},domProps:{value:t.letterSpacing},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.letterSpacing=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.letterSpacing,expression:"letterSpacing"}],attrs:{type:"number",min:"0",max:"1",step:"0.01"},domProps:{value:t.letterSpacing},on:{input:[function(e){e.target.composing||(t.letterSpacing=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" em\n")])},staticRenderFns:[]};var S=n("VU/8")({name:"inputLetterSpacing",data:function(){return{letterSpacing:"0"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},b,!1,function(t){n("zOry")},"data-v-7bb15e9b",null).exports,V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  fontWeight:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontWeight,expression:"fontWeight"}],attrs:{type:"radio",id:"fontWeight01",value:"normal"},domProps:{checked:t._q(t.fontWeight,"normal")},on:{input:t.updateValue,change:function(e){t.fontWeight="normal"}}}),t._v(" "),n("label",{attrs:{for:"fontWeight01"}},[t._v("normal")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontWeight,expression:"fontWeight"}],attrs:{type:"radio",id:"fontWeight02",value:"bold"},domProps:{checked:t._q(t.fontWeight,"bold")},on:{input:t.updateValue,change:function(e){t.fontWeight="bold"}}}),t._v(" "),n("label",{attrs:{for:"fontWeight02"}},[t._v("bold")])])},staticRenderFns:[]};var $=n("VU/8")({name:"radioFontWeight",data:function(){return{fontWeight:"normal"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},V,!1,function(t){n("g0Jk")},"data-v-c67c4798",null).exports,P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  textAlign:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textAlign,expression:"textAlign"}],attrs:{type:"radio",id:"textAlign01",value:"left"},domProps:{checked:t._q(t.textAlign,"left")},on:{input:t.updateValue,change:function(e){t.textAlign="left"}}}),t._v(" "),n("label",{attrs:{for:"textAlign01"}},[t._v("left")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textAlign,expression:"textAlign"}],attrs:{type:"radio",id:"textAlign02",value:"center"},domProps:{checked:t._q(t.textAlign,"center")},on:{input:t.updateValue,change:function(e){t.textAlign="center"}}}),t._v(" "),n("label",{attrs:{for:"textAlign02"}},[t._v("center")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textAlign,expression:"textAlign"}],attrs:{type:"radio",id:"textAlign03",value:"right"},domProps:{checked:t._q(t.textAlign,"right")},on:{input:t.updateValue,change:function(e){t.textAlign="right"}}}),t._v(" "),n("label",{attrs:{for:"textAlign03"}},[t._v("right")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textAlign,expression:"textAlign"}],attrs:{type:"radio",id:"textAlign04",value:"justify"},domProps:{checked:t._q(t.textAlign,"justify")},on:{input:t.updateValue,change:function(e){t.textAlign="justify"}}}),t._v(" "),n("label",{attrs:{for:"textAlign04"}},[t._v("justify")])])},staticRenderFns:[]};var E=n("VU/8")({name:"radioTextAlign",data:function(){return{textAlign:"left"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},P,!1,function(t){n("3RBl")},"data-v-01eb84e2",null).exports,k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  FontSmoothing:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSmoothing,expression:"fontSmoothing"}],attrs:{type:"radio",id:"fontSmoothing01",value:"subpixel-antialiased"},domProps:{checked:t._q(t.fontSmoothing,"subpixel-antialiased")},on:{input:t.updateValue,change:function(e){t.fontSmoothing="subpixel-antialiased"}}}),t._v(" "),n("label",{attrs:{for:"fontSmoothing01"}},[t._v("subpixel-antialiased")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSmoothing,expression:"fontSmoothing"}],attrs:{type:"radio",id:"fontSmoothing02",value:"antialiased"},domProps:{checked:t._q(t.fontSmoothing,"antialiased")},on:{input:t.updateValue,change:function(e){t.fontSmoothing="antialiased"}}}),t._v(" "),n("label",{attrs:{for:"fontSmoothing02"}},[t._v("antialiased")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSmoothing,expression:"fontSmoothing"}],attrs:{type:"radio",id:"fontSmoothing03",value:"none"},domProps:{checked:t._q(t.fontSmoothing,"none")},on:{input:t.updateValue,change:function(e){t.fontSmoothing="none"}}}),t._v(" "),n("label",{attrs:{for:"fontSmoothing03"}},[t._v("none")])])},staticRenderFns:[]};var N=n("VU/8")({name:"radioFontSmoothing",data:function(){return{fontSmoothing:"subpixel-antialiased"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},k,!1,function(t){n("gRP6")},"data-v-82592506",null).exports,w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  padding top & bottom: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.paddingVertical,expression:"paddingVertical"}],attrs:{type:"range",min:"0",max:"200"},domProps:{value:t.paddingVertical},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.paddingVertical=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.paddingVertical,expression:"paddingVertical"}],attrs:{type:"number",min:"0",max:"200"},domProps:{value:t.paddingVertical},on:{input:[function(e){e.target.composing||(t.paddingVertical=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" px\n")])},staticRenderFns:[]};var H=n("VU/8")({name:"inputPaddingVertical",data:function(){return{paddingVertical:20}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},w,!1,function(t){n("O00Z")},"data-v-6dd3e072",null).exports,J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  padding left & right: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.paddingHorizontal,expression:"paddingHorizontal"}],attrs:{type:"range",min:"0",max:"200"},domProps:{value:t.paddingHorizontal},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.paddingHorizontal=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.paddingHorizontal,expression:"paddingHorizontal"}],attrs:{type:"number",min:"0",max:"200"},domProps:{value:t.paddingHorizontal},on:{input:[function(e){e.target.composing||(t.paddingHorizontal=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" px\n")])},staticRenderFns:[]};var T=n("VU/8")({name:"inputPaddingHorizontal",data:function(){return{paddingHorizontal:20}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},J,!1,function(t){n("rfZq")},"data-v-0c718180",null).exports,A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  font-feature-settings:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFeatureSettings,expression:"fontFeatureSettings"}],attrs:{type:"radio",id:"fontFeatureSettings01",value:"normal"},domProps:{checked:t._q(t.fontFeatureSettings,"normal")},on:{input:t.updateValue,change:function(e){t.fontFeatureSettings="normal"}}}),t._v(" "),n("label",{attrs:{for:"fontFeatureSettings01"}},[t._v("normal")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFeatureSettings,expression:"fontFeatureSettings"}],attrs:{type:"radio",id:"fontFeatureSettings02",value:"palt"},domProps:{checked:t._q(t.fontFeatureSettings,"palt")},on:{input:t.updateValue,change:function(e){t.fontFeatureSettings="palt"}}}),t._v(" "),n("label",{attrs:{for:"fontFeatureSettings02"}},[t._v("palt")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFeatureSettings,expression:"fontFeatureSettings"}],attrs:{type:"radio",id:"fontFeatureSettings03",value:"pwid"},domProps:{checked:t._q(t.fontFeatureSettings,"pwid")},on:{input:t.updateValue,change:function(e){t.fontFeatureSettings="pwid"}}}),t._v(" "),n("label",{attrs:{for:"fontFeatureSettings03"}},[t._v("pwid")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFeatureSettings,expression:"fontFeatureSettings"}],attrs:{type:"radio",id:"fontFeatureSettings04",value:"pkna"},domProps:{checked:t._q(t.fontFeatureSettings,"pkna")},on:{input:t.updateValue,change:function(e){t.fontFeatureSettings="pkna"}}}),t._v(" "),n("label",{attrs:{for:"fontFeatureSettings04"}},[t._v("pkna")])])},staticRenderFns:[]};var q=n("VU/8")({name:"radioFontFeatureSettings",data:function(){return{fontFeatureSettings:"normal"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},A,!1,function(t){n("GMvP")},"data-v-fbcaa20c",null).exports,z=(n("uMhA"),"私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。"),j="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",O={name:"App",components:{radioText:u,inputText:s,radioFontFamilyJa:d,radioFontFamilyEn:p,inputColor:v,inputBackground:h,inputFontSize:x,inputLineHeight:F,inputLetterSpacing:S,radioFontWeight:$,radioTextAlign:E,radioFontSmoothing:N,inputPaddingVertical:H,inputPaddingHorizontal:T,radioFontFeatureSettings:q},data:function(){return{textType:"textJa",message:z,styleObject:{"font-family":"Helvetica , Hiragino Kaku Gothic ProN",color:"#000000",background:"#ffffff","font-size":"16px","line-height":"1.7","letter-spacing":"0em","font-weight":"normal","text-align":"left","padding-top":"20px","padding-bottom":"20px","padding-left":"20px","padding-right":"20px","font-feature-settings":"normal","-webkit-font-smoothing":"subpixel-antialiased"},displayCss:!0}},methods:{toggleCss:function(){this.displayCss=!this.displayCss},toggleTools:function(){document.querySelector(".tools").classList.toggle("js-tools-active"),document.querySelector(".container").classList.toggle("js-tools-active")},getOtherSideFont:function(t){for(var e,n=document.getElementsByName(t),a=0;a<n.length;a++)if(n[a].checked){e=n[a].value;break}return e},changeTextRadio:function(t){var e=document.tools.inputTextArea,n=t;"textJa"===n?(e.value=z,this.message=z):"textEn"===n?(e.value=j,this.message=j):"textFree"===n&&(e.value="",this.message="")},changeText:function(t){this.message=t},changeFontFamily:function(t){if(t.familyJa)var e=t.familyJa,n=this.getOtherSideFont("fontFamilyEn");else if(t.familyEn)e=this.getOtherSideFont("fontFamilyJa"),n=t.familyEn;var a=n+" , "+e;this.styleObject["font-family"]=a},changeColor:function(t){this.styleObject.color=t},changeBackground:function(t){this.styleObject.background=t},changeFontSize:function(t){this.styleObject["font-size"]=t+"px"},changeLineHeight:function(t){this.styleObject["line-height"]=t},changeLetterSpacing:function(t){this.styleObject["letter-spacing"]=t+"em"},changeFontWeight:function(t){this.styleObject["font-weight"]=t},changeTextAlign:function(t){this.styleObject["text-align"]=t},changeFontSmoothing:function(t){this.styleObject["-webkit-font-smoothing"]=t},changePaddingVertical:function(t){this.styleObject["padding-top"]=t+"px",this.styleObject["padding-bottom"]=t+"px"},changePaddingHorizontal:function(t){this.styleObject["padding-left"]=t+"px",this.styleObject["padding-right"]=t+"px"},changeFontFeatureSettings:function(t){this.styleObject["font-feature-settings"]="normal"===t?""+t:'"'+t+'"'}},computed:{styleObjectFormatted:function(){var t=this.styleObject,e=[];return o()(t).forEach(function(n){"font-family"===n?e.push(n+': "'+t[n]+'";'):e.push(n+": "+t[n]+";")}),e.join("\n")}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"tools"},[n("form",{attrs:{action:"#",name:"tools"}},[n("div",[n("radioText",{on:{change:t.changeTextRadio}})],1),t._v(" "),n("div",[n("inputText",{on:{change:t.changeText}})],1),t._v(" "),n("div",[n("radioFontFamilyJa",{on:{change:t.changeFontFamily}})],1),t._v(" "),n("div",[n("radioFontFamilyEn",{on:{change:t.changeFontFamily}})],1),t._v(" "),n("div",[n("inputColor",{on:{change:t.changeColor}})],1),t._v(" "),n("div",[n("inputBackground",{on:{change:t.changeBackground}})],1),t._v(" "),n("div",[n("inputFontSize",{on:{change:t.changeFontSize}})],1),t._v(" "),n("div",[n("inputLineHeight",{on:{change:t.changeLineHeight}})],1),t._v(" "),n("div",[n("inputLetterSpacing",{on:{change:t.changeLetterSpacing}})],1),t._v(" "),n("div",[n("radioFontWeight",{on:{change:t.changeFontWeight}})],1),t._v(" "),n("div",[n("radioTextAlign",{on:{change:t.changeTextAlign}})],1),t._v(" "),n("div",[n("radioFontSmoothing",{on:{change:t.changeFontSmoothing}})],1),t._v(" "),n("div",[n("inputPaddingVertical",{on:{change:t.changePaddingVertical}})],1),t._v(" "),n("div",[n("inputPaddingHorizontal",{on:{change:t.changePaddingHorizontal}})],1),t._v(" "),n("div",[n("radioFontFeatureSettings",{on:{change:t.changeFontFeatureSettings}})],1)])]),t._v(" "),n("div",{staticClass:"container"},[t.displayCss?[n("div",{staticClass:"css"},[n("pre",[t._v(t._s(t.styleObjectFormatted))])])]:t._e(),t._v(" "),n("div",{staticClass:"container__block",style:t.styleObject},[t._v(t._s(t.message))])],2),t._v(" "),n("ul",{staticClass:"toggle"},[n("li",{staticClass:"toggle__button"},[n("a",{staticClass:"toggle__anchor",attrs:{href:"javascript:void(0);"},on:{click:t.toggleTools}},[t._v("Tools toggle button")])]),t._v(" "),n("li",{staticClass:"toggle__button"},[n("a",{staticClass:"toggle__anchor",attrs:{href:"javascript:void(0);"},on:{click:t.toggleCss}},[t._v("CSS toggle button")])])])])])},staticRenderFns:[]};var C=n("VU/8")(O,R,!1,function(t){n("EdKA")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:C},template:"<App/>"})},O00Z:function(t,e){},g0Jk:function(t,e){},gRP6:function(t,e){},pKn4:function(t,e){},qaIF:function(t,e){},rfZq:function(t,e){},uMhA:function(t,e){},vwO6:function(t,e){},wK19:function(t,e){},zOry:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.407490c46021279cbea4.js.map