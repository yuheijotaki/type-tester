webpackJsonp([1],{"02e9":function(t,e){},"0n9J":function(t,e){},"3GNA":function(t,e){},"8PgQ":function(t,e){},CbKW:function(t,e){},F60u:function(t,e){},Jr7h:function(t,e){},Jrv9:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("fZjL"),o=n.n(i),l=n("mvHQ"),s=n.n(l),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("text type:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.textType,expression:"textType"}],attrs:{type:"radio",name:"textType",id:"textJa",value:"textJa"},domProps:{checked:t._q(t.textType,"textJa")},on:{input:t.updateValue,change:function(e){t.textType="textJa"}}}),t._v(" "),n("label",{attrs:{for:"textJa"}},[t._v("和文")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textType,expression:"textType"}],attrs:{type:"radio",name:"textType",id:"textEn",value:"textEn"},domProps:{checked:t._q(t.textType,"textEn")},on:{input:t.updateValue,change:function(e){t.textType="textEn"}}}),t._v(" "),n("label",{attrs:{for:"textEn"}},[t._v("欧文")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textType,expression:"textType"}],attrs:{type:"radio",name:"textType",id:"textFree",value:"textFree"},domProps:{checked:t._q(t.textType,"textFree")},on:{input:t.updateValue,change:function(e){t.textType="textFree"}}}),t._v(" "),n("label",{attrs:{for:"textFree"}},[t._v("自由入力")]),n("br")])])},staticRenderFns:[]};var u=n("VU/8")({name:"radioTextType",data:function(){return{textType:"textJa"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},r,!1,function(t){n("02e9")},"data-v-325e9283",null).exports,c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("text content:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("textarea",{attrs:{name:"inputTextArea"},domProps:{value:t.message},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}})])])},staticRenderFns:[]};var d=n("VU/8")({name:"inputTextContent",data:function(){return{message:"私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},c,!1,function(t){n("sX+M")},"data-v-2d286121",null).exports,m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("font-family(JP):")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa01",value:"Hiragino Kaku Gothic ProN"},domProps:{checked:t._q(t.fontFamilyJa,"Hiragino Kaku Gothic ProN")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="Hiragino Kaku Gothic ProN"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa01"}},[t._v("Hiragino Kaku Gothic ProN")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa02",value:"YuGothic"},domProps:{checked:t._q(t.fontFamilyJa,"YuGothic")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="YuGothic"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa02"}},[t._v("YuGothic")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa03",value:"Hiragino Mincho ProN"},domProps:{checked:t._q(t.fontFamilyJa,"Hiragino Mincho ProN")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="Hiragino Mincho ProN"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa03"}},[t._v("Hiragino Mincho ProN")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyJa,expression:"fontFamilyJa"}],attrs:{type:"radio",name:"fontFamilyJa",id:"fontFamilyJa04",value:"YuMincho"},domProps:{checked:t._q(t.fontFamilyJa,"YuMincho")},on:{input:t.updateValue,change:function(e){t.fontFamilyJa="YuMincho"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyJa04"}},[t._v("YuMincho")])])])},staticRenderFns:[]};var p=n("VU/8")({name:"radioFontFamilyJa",data:function(){return{fontFamilyJa:"Hiragino Kaku Gothic ProN"}},methods:{updateValue:function(t){this.$emit("input",{familyJa:t.target.value}),this.$emit("change",{familyJa:t.target.value})}}},m,!1,function(t){n("CbKW")},"data-v-176052be",null).exports,g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("font-family(EN):")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn01",value:"Helvetica"},domProps:{checked:t._q(t.fontFamilyEn,"Helvetica")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Helvetica"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn01"}},[t._v("Helvetica")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn02",value:"Helvetica Neue"},domProps:{checked:t._q(t.fontFamilyEn,"Helvetica Neue")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Helvetica Neue"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn02"}},[t._v("Helvetica Neue")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn03",value:"Georgia"},domProps:{checked:t._q(t.fontFamilyEn,"Georgia")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Georgia"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn03"}},[t._v("Georgia")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFamilyEn,expression:"fontFamilyEn"}],attrs:{type:"radio",name:"fontFamilyEn",id:"fontFamilyEn04",value:"Times"},domProps:{checked:t._q(t.fontFamilyEn,"Times")},on:{input:t.updateValue,change:function(e){t.fontFamilyEn="Times"}}}),t._v(" "),n("label",{attrs:{for:"fontFamilyEn04"}},[t._v("Times")])])])},staticRenderFns:[]};var f=n("VU/8")({name:"radioFontFamilyEn",data:function(){return{fontFamilyEn:"Helvetica"}},methods:{updateValue:function(t){this.$emit("input",{familyEn:t.target.value}),this.$emit("change",{familyEn:t.target.value})}}},g,!1,function(t){n("Jrv9")},"data-v-c430ff3c",null).exports,v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("color:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{name:"colorPalette",type:"color"},domProps:{value:t.color},on:{input:[function(e){e.target.composing||(t.color=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{name:"color",type:"text"},domProps:{value:t.color},on:{input:[function(e){e.target.composing||(t.color=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}})])])},staticRenderFns:[]};var h=n("VU/8")({name:"inputColor",data:function(){return{color:"#000000"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},v,!1,function(t){n("q6HB")},"data-v-5cad1ccb",null).exports,_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("background-color:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.background,expression:"background"}],attrs:{name:"backgroundPalette",type:"color"},domProps:{value:t.background},on:{input:[function(e){e.target.composing||(t.background=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.background,expression:"background"}],attrs:{name:"background",type:"text"},domProps:{value:t.background},on:{input:[function(e){e.target.composing||(t.background=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}})])])},staticRenderFns:[]};var y=n("VU/8")({name:"inputBackground",data:function(){return{background:"#ffffff"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},_,!1,function(t){n("lhUw")},"data-v-37de4b2d",null).exports,b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("font-size:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{name:"fontSizeRange",type:"range",min:"10",max:"300"},domProps:{value:t.fontSize},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.fontSize=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSize,expression:"fontSize"}],attrs:{name:"fontSize",type:"number",min:"10",max:"300"},domProps:{value:t.fontSize},on:{input:[function(e){e.target.composing||(t.fontSize=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" "),n("p",{staticClass:"tools__unit"},[t._v("px")])])])},staticRenderFns:[]};var x=n("VU/8")({name:"inputFontSize",data:function(){return{fontSize:16}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},b,!1,function(t){n("mc26")},"data-v-0afb6d91",null).exports,F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("line-height:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineHeight,expression:"lineHeight"}],attrs:{name:"lineHeightRange",type:"range",min:"1",max:"3",step:"0.1"},domProps:{value:t.lineHeight},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.lineHeight=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lineHeight,expression:"lineHeight"}],attrs:{name:"lineHeight",type:"number",min:"1",max:"3",step:"0.1"},domProps:{value:t.lineHeight},on:{input:[function(e){e.target.composing||(t.lineHeight=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}})])])},staticRenderFns:[]};var S=n("VU/8")({name:"inputLineHeight",data:function(){return{lineHeight:1.7}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},F,!1,function(t){n("3GNA")},"data-v-dd3be7b6",null).exports,V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("letter-spacing:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.letterSpacing,expression:"letterSpacing"}],attrs:{name:"letterSpacingRange",type:"range",min:"0",max:"1",step:"0.01"},domProps:{value:t.letterSpacing},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.letterSpacing=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.letterSpacing,expression:"letterSpacing"}],attrs:{name:"letterSpacing",type:"number",min:"0",max:"1",step:"0.01"},domProps:{value:t.letterSpacing},on:{input:[function(e){e.target.composing||(t.letterSpacing=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" "),n("p",{staticClass:"tools__unit"},[t._v("em")])])])},staticRenderFns:[]};var k=n("VU/8")({name:"inputLetterSpacing",data:function(){return{letterSpacing:"0"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},V,!1,function(t){n("zJ4t")},"data-v-68b9e6ca",null).exports,C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("font-weight:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontWeight,expression:"fontWeight"}],attrs:{name:"fontWeight",type:"radio",id:"fontWeight01",value:"normal"},domProps:{checked:t._q(t.fontWeight,"normal")},on:{input:t.updateValue,change:function(e){t.fontWeight="normal"}}}),t._v(" "),n("label",{attrs:{for:"fontWeight01"}},[t._v("normal")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontWeight,expression:"fontWeight"}],attrs:{name:"fontWeight",type:"radio",id:"fontWeight02",value:"bold"},domProps:{checked:t._q(t.fontWeight,"bold")},on:{input:t.updateValue,change:function(e){t.fontWeight="bold"}}}),t._v(" "),n("label",{attrs:{for:"fontWeight02"}},[t._v("bold")])])])},staticRenderFns:[]};var $=n("VU/8")({name:"radioFontWeight",data:function(){return{fontWeight:"normal"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},C,!1,function(t){n("yu7h")},"data-v-79ccaeeb",null).exports,P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("textAlign:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.textAlign,expression:"textAlign"}],attrs:{type:"radio",id:"textAlign01",value:"left"},domProps:{checked:t._q(t.textAlign,"left")},on:{input:t.updateValue,change:function(e){t.textAlign="left"}}}),t._v(" "),n("label",{attrs:{for:"textAlign01"}},[t._v("left")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textAlign,expression:"textAlign"}],attrs:{type:"radio",id:"textAlign02",value:"center"},domProps:{checked:t._q(t.textAlign,"center")},on:{input:t.updateValue,change:function(e){t.textAlign="center"}}}),t._v(" "),n("label",{attrs:{for:"textAlign02"}},[t._v("center")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textAlign,expression:"textAlign"}],attrs:{type:"radio",id:"textAlign03",value:"right"},domProps:{checked:t._q(t.textAlign,"right")},on:{input:t.updateValue,change:function(e){t.textAlign="right"}}}),t._v(" "),n("label",{attrs:{for:"textAlign03"}},[t._v("right")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textAlign,expression:"textAlign"}],attrs:{type:"radio",id:"textAlign04",value:"justify"},domProps:{checked:t._q(t.textAlign,"justify")},on:{input:t.updateValue,change:function(e){t.textAlign="justify"}}}),t._v(" "),n("label",{attrs:{for:"textAlign04"}},[t._v("justify")])])])},staticRenderFns:[]};var E=n("VU/8")({name:"radioTextAlign",data:function(){return{textAlign:"left"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},P,!1,function(t){n("h3wb")},"data-v-2799bd66",null).exports,T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("font-smoothing:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSmoothing,expression:"fontSmoothing"}],attrs:{name:"fontSmoothing",type:"radio",id:"fontSmoothing01",value:"subpixel-antialiased"},domProps:{checked:t._q(t.fontSmoothing,"subpixel-antialiased")},on:{input:t.updateValue,change:function(e){t.fontSmoothing="subpixel-antialiased"}}}),t._v(" "),n("label",{attrs:{for:"fontSmoothing01"}},[t._v("subpixel-antialiased")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSmoothing,expression:"fontSmoothing"}],attrs:{name:"fontSmoothing",type:"radio",id:"fontSmoothing02",value:"antialiased"},domProps:{checked:t._q(t.fontSmoothing,"antialiased")},on:{input:t.updateValue,change:function(e){t.fontSmoothing="antialiased"}}}),t._v(" "),n("label",{attrs:{for:"fontSmoothing02"}},[t._v("antialiased")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontSmoothing,expression:"fontSmoothing"}],attrs:{name:"fontSmoothing",type:"radio",id:"fontSmoothing03",value:"none"},domProps:{checked:t._q(t.fontSmoothing,"none")},on:{input:t.updateValue,change:function(e){t.fontSmoothing="none"}}}),t._v(" "),n("label",{attrs:{for:"fontSmoothing03"}},[t._v("none")])])])},staticRenderFns:[]};var H=n("VU/8")({name:"radioFontSmoothing",data:function(){return{fontSmoothing:"subpixel-antialiased"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},T,!1,function(t){n("Jr7h")},"data-v-6f10573a",null).exports,N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("padding-top/padding-bottom:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.paddingVertical,expression:"paddingVertical"}],attrs:{name:"paddingVerticalRange",type:"range",min:"0",max:"200"},domProps:{value:t.paddingVertical},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.paddingVertical=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.paddingVertical,expression:"paddingVertical"}],attrs:{name:"paddingVertical",type:"number",min:"0",max:"200"},domProps:{value:t.paddingVertical},on:{input:[function(e){e.target.composing||(t.paddingVertical=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" "),n("p",{staticClass:"tools__unit"},[t._v("px")])])])},staticRenderFns:[]};var J=n("VU/8")({name:"inputPaddingVertical",data:function(){return{paddingVertical:20}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},N,!1,function(t){n("F60u")},"data-v-3e875b65",null).exports,w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("padding-left/padding-right:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.paddingHorizontal,expression:"paddingHorizontal"}],attrs:{name:"paddingHorizontalRange",type:"range",min:"0",max:"200"},domProps:{value:t.paddingHorizontal},on:{input:t.updateValue,focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)},__r:function(e){t.paddingHorizontal=e.target.value}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.paddingHorizontal,expression:"paddingHorizontal"}],attrs:{name:"paddingHorizontal",type:"number",min:"0",max:"200"},domProps:{value:t.paddingHorizontal},on:{input:[function(e){e.target.composing||(t.paddingHorizontal=e.target.value)},t.updateValue],focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}}}),t._v(" "),n("p",{staticClass:"tools__unit"},[t._v("px")])])])},staticRenderFns:[]};var j=n("VU/8")({name:"inputPaddingHorizontal",data:function(){return{paddingHorizontal:20}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},w,!1,function(t){n("8PgQ")},"data-v-89860188",null).exports,O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tools__item"},[n("p",{staticClass:"tools__label"},[t._v("font-feature-settings:")]),t._v(" "),n("div",{staticClass:"tools__block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFeatureSettings,expression:"fontFeatureSettings"}],attrs:{name:"fontFeatureSettings",type:"radio",id:"fontFeatureSettings01",value:"normal"},domProps:{checked:t._q(t.fontFeatureSettings,"normal")},on:{input:t.updateValue,change:function(e){t.fontFeatureSettings="normal"}}}),t._v(" "),n("label",{attrs:{for:"fontFeatureSettings01"}},[t._v("normal")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFeatureSettings,expression:"fontFeatureSettings"}],attrs:{name:"fontFeatureSettings",type:"radio",id:"fontFeatureSettings02",value:"palt"},domProps:{checked:t._q(t.fontFeatureSettings,"palt")},on:{input:t.updateValue,change:function(e){t.fontFeatureSettings="palt"}}}),t._v(" "),n("label",{attrs:{for:"fontFeatureSettings02"}},[t._v("palt")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFeatureSettings,expression:"fontFeatureSettings"}],attrs:{name:"fontFeatureSettings",type:"radio",id:"fontFeatureSettings03",value:"pwid"},domProps:{checked:t._q(t.fontFeatureSettings,"pwid")},on:{input:t.updateValue,change:function(e){t.fontFeatureSettings="pwid"}}}),t._v(" "),n("label",{attrs:{for:"fontFeatureSettings03"}},[t._v("pwid")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fontFeatureSettings,expression:"fontFeatureSettings"}],attrs:{name:"fontFeatureSettings",type:"radio",id:"fontFeatureSettings04",value:"pkna"},domProps:{checked:t._q(t.fontFeatureSettings,"pkna")},on:{input:t.updateValue,change:function(e){t.fontFeatureSettings="pkna"}}}),t._v(" "),n("label",{attrs:{for:"fontFeatureSettings04"}},[t._v("pkna")])])])},staticRenderFns:[]};var z=n("VU/8")({name:"radioFontFeatureSettings",data:function(){return{fontFeatureSettings:"normal"}},methods:{updateValue:function(t){this.$emit("input",t.target.value),this.$emit("change",t.target.value)}}},O,!1,function(t){n("0n9J")},"data-v-30dfa36a",null).exports,A=(n("uMhA"),"私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。"),q="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",R={name:"App",components:{radioTextType:u,inputTextContent:d,radioFontFamilyJa:p,radioFontFamilyEn:f,inputColor:h,inputBackground:y,inputFontSize:x,inputLineHeight:S,inputLetterSpacing:k,radioFontWeight:$,radioTextAlign:E,radioFontSmoothing:H,inputPaddingVertical:J,inputPaddingHorizontal:j,radioFontFeatureSettings:z},data:function(){return{textType:"textJa",message:A,styleObject:{"font-family":"Helvetica , Hiragino Kaku Gothic ProN",color:"#000000",background:"#ffffff","font-size":"16px","line-height":"1.7","letter-spacing":"0em","font-weight":"normal","text-align":"left","padding-top":"20px","padding-bottom":"20px","padding-left":"20px","padding-right":"20px","font-feature-settings":"normal","-webkit-font-smoothing":"subpixel-antialiased"},displayTools:!0,displayCss:!1,metaTitle:"site title"}},mounted:function(){var t=localStorage.getItem("textType");document.tools.textType.value=t;var e=document.tools.inputTextArea;"textJa"===t?(e.value=A,this.message=A):"textEn"===t?(e.value=q,this.message=q):"textFree"===t&&(e.value="",this.message="");var n=localStorage.getItem("styleObject");if(n){this.styleObject=JSON.parse(n)||[];var a=this.styleObject["font-family"].split(" , ");document.tools.fontFamilyEn.value=a[0],document.tools.fontFamilyJa.value=a[1],document.tools.colorPalette.value=this.styleObject.color,document.tools.color.value=this.styleObject.color,document.tools.backgroundPalette.value=this.styleObject.background,document.tools.background.value=this.styleObject.background;var i=this.styleObject["font-size"].replace("px","");document.tools.fontSizeRange.value=i,document.tools.fontSize.value=i,document.tools.lineHeightRange.value=this.styleObject["line-height"],document.tools.lineHeight.value=this.styleObject["line-height"],document.tools.lineHeightRange.value=this.styleObject["line-height"],document.tools.lineHeight.value=this.styleObject["line-height"];var o=this.styleObject["letter-spacing"].replace("em","");document.tools.letterSpacingRange.value=o,document.tools.letterSpacing.value=o,document.tools.fontWeight.value=this.styleObject["font-weight"],document.tools.fontSmoothing.value=this.styleObject["-webkit-font-smoothing"];var l=this.styleObject["padding-top"].replace("px","");document.tools.paddingVerticalRange.value=l,document.tools.paddingVertical.value=l;var s=this.styleObject["padding-left"].replace("px","");document.tools.paddingHorizontalRange.value=s,document.tools.paddingHorizontal.value=s;var r=this.styleObject["font-feature-settings"].replace(/"/g,"");document.tools.fontFeatureSettings.value=r}var u=JSON.parse(localStorage.getItem("displayCss"));this.displayCss=!0===u;var c=JSON.parse(localStorage.getItem("displayTools"));if(!0===c)this.displayTools=!0;else if(!1===c){this.displayTools=!1,document.querySelector(".tools").classList.add("js-tools-active"),document.querySelector(".container").classList.add("js-tools-active")}},methods:{toggleCss:function(){this.displayCss=!this.displayCss,this.setToolsInfo()},toggleTools:function(){this.displayTools=!this.displayTools,document.querySelector(".tools").classList.toggle("js-tools-active"),document.querySelector(".container").classList.toggle("js-tools-active"),this.setToolsInfo()},getOtherSideFont:function(t){for(var e,n=document.getElementsByName(t),a=0;a<n.length;a++)if(n[a].checked){e=n[a].value;break}return e},changeTextRadio:function(t){var e=document.tools.inputTextArea,n=t;"textJa"===n?(e.value=A,this.message=A):"textEn"===n?(e.value=q,this.message=q):"textFree"===n&&(e.value="",this.message=""),this.textType=n,this.setStylesInfo()},changeText:function(t){this.message=t},changeFontFamily:function(t){if(t.familyJa)var e=t.familyJa,n=this.getOtherSideFont("fontFamilyEn");else if(t.familyEn)e=this.getOtherSideFont("fontFamilyJa"),n=t.familyEn;var a=n+" , "+e;this.styleObject["font-family"]=a,this.setStylesInfo()},changeColor:function(t){this.styleObject.color=t,this.setStylesInfo()},changeBackground:function(t){this.styleObject.background=t,this.setStylesInfo()},changeFontSize:function(t){this.styleObject["font-size"]=t+"px",this.setStylesInfo()},changeLineHeight:function(t){this.styleObject["line-height"]=t,this.setStylesInfo()},changeLetterSpacing:function(t){this.styleObject["letter-spacing"]=t+"em",this.setStylesInfo()},changeFontWeight:function(t){this.styleObject["font-weight"]=t,this.setStylesInfo()},changeTextAlign:function(t){this.styleObject["text-align"]=t,this.setStylesInfo()},changeFontSmoothing:function(t){this.styleObject["-webkit-font-smoothing"]=t,this.setStylesInfo()},changePaddingVertical:function(t){this.styleObject["padding-top"]=t+"px",this.styleObject["padding-bottom"]=t+"px",this.setStylesInfo()},changePaddingHorizontal:function(t){this.styleObject["padding-left"]=t+"px",this.styleObject["padding-right"]=t+"px",this.setStylesInfo()},changeFontFeatureSettings:function(t){this.styleObject["font-feature-settings"]="normal"===t?""+t:'"'+t+'"',this.setStylesInfo()},setStylesInfo:function(){localStorage.setItem("styleObject",s()(this.styleObject)),localStorage.setItem("textType",this.textType)},setToolsInfo:function(){localStorage.setItem("displayTools",this.displayTools),localStorage.setItem("displayCss",this.displayCss)}},computed:{styleObjectFormatted:function(){var t=this.styleObject,e=[];return o()(t).forEach(function(n){"font-family"===n?e.push(n+': "'+t[n]+'";'):e.push(n+": "+t[n]+";")}),e.join("\n")}},head:{title:function(){return{inner:this.metaTitle}},meta:[{name:"description",content:"My description",id:"desc"}]}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"tools"},[n("form",{attrs:{action:"#",name:"tools"}},[n("radioTextType",{on:{change:t.changeTextRadio}}),t._v(" "),n("inputTextContent",{on:{change:t.changeText}}),t._v(" "),n("radioFontFamilyJa",{on:{change:t.changeFontFamily}}),t._v(" "),n("radioFontFamilyEn",{on:{change:t.changeFontFamily}}),t._v(" "),n("inputColor",{on:{change:t.changeColor}}),t._v(" "),n("inputBackground",{on:{change:t.changeBackground}}),t._v(" "),n("inputFontSize",{on:{change:t.changeFontSize}}),t._v(" "),n("inputLineHeight",{on:{change:t.changeLineHeight}}),t._v(" "),n("inputLetterSpacing",{on:{change:t.changeLetterSpacing}}),t._v(" "),n("radioFontWeight",{on:{change:t.changeFontWeight}}),t._v(" "),n("radioTextAlign",{on:{change:t.changeTextAlign}}),t._v(" "),n("radioFontSmoothing",{on:{change:t.changeFontSmoothing}}),t._v(" "),n("inputPaddingVertical",{on:{change:t.changePaddingVertical}}),t._v(" "),n("inputPaddingHorizontal",{on:{change:t.changePaddingHorizontal}}),t._v(" "),n("radioFontFeatureSettings",{on:{change:t.changeFontFeatureSettings}})],1)]),t._v(" "),n("div",{staticClass:"container"},[t.displayCss?[n("div",{staticClass:"css"},[n("pre",[t._v(t._s(t.styleObjectFormatted))])])]:t._e(),t._v(" "),n("div",{staticClass:"container__block",style:t.styleObject},[t._v(t._s(t.message))])],2),t._v(" "),n("ul",{staticClass:"toggle"},[n("li",{staticClass:"toggle__button"},[n("a",{staticClass:"toggle__anchor",attrs:{href:"javascript:void(0);"},on:{click:t.toggleTools}},[t._v("Tools toggle button")])]),t._v(" "),n("li",{staticClass:"toggle__button"},[n("a",{staticClass:"toggle__anchor",attrs:{href:"javascript:void(0);"},on:{click:t.toggleCss}},[t._v("CSS toggle button")])])])])])},staticRenderFns:[]};var W=n("VU/8")(R,I,!1,function(t){n("Yvt7")},null,null).exports,U=n("RZCy"),G=n.n(U),L=n("yXtV"),M=n.n(L);a.a.use(G.a),a.a.use(M.a),a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:W},template:"<App/>"})},Yvt7:function(t,e){},h3wb:function(t,e){},lhUw:function(t,e){},mc26:function(t,e){},q6HB:function(t,e){},"sX+M":function(t,e){},uMhA:function(t,e){},yu7h:function(t,e){},zJ4t:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3bcc743dfdb5e2bc99cf.js.map