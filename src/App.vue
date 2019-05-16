<template>
  <div id="app">
    <div class="wrapper">
      <div class="tools">
        <div><inputText @change="changeText"></inputText></div>
        <div><radioFontFamilyJa @change="changeFontFamily"></radioFontFamilyJa></div>
        <div><inputFontSize @change="changeFontSize"></inputFontSize></div>
        <div><inputLineHeight @change="changeLineHeight"></inputLineHeight></div>
        <div><inputLetterSpacing @change="changeLetterSpacing"></inputLetterSpacing></div>
        <div><radioFontWeight @change="changeFontWeight"></radioFontWeight></div>
        <div><radioTextAlign @change="changeTextAlign"></radioTextAlign></div>
        <div><radioFontSmoothing @change="changeFontSmoothing"></radioFontSmoothing></div>
        <div><inputCustomStyle @change="changeCustomStyle"></inputCustomStyle></div>
      </div>
      <div class="container">
<pre>
styleObject: {{styleObject}}
</pre>
        <div class="container__block" v-bind:style="styleObject">{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import inputText from './components/input-text'
import radioFontFamilyJa from './components/radio-fontFamilyJa'
import inputFontSize from './components/input-fontSize'
import inputLineHeight from './components/input-lineHeight'
import inputLetterSpacing from './components/input-letterSpacing'
import radioFontWeight from './components/radio-fontWeight'
import radioTextAlign from './components/radio-textAlign'
import radioFontSmoothing from './components/radio-fontSmoothing'
import inputCustomStyle from './components/input-customStyle'
import "normalize.css";

export default {
  name: 'App',
  components: {
    inputText,
    radioFontFamilyJa,
    inputFontSize,
    inputLineHeight,
    inputLetterSpacing,
    radioFontWeight,
    radioTextAlign,
    radioFontSmoothing,
    inputCustomStyle
  },
  data() {
    return {
      message: `私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。

私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。`,
      customStyle: 'color: red;',
      styleObject: {
        fontFamily: 'sans-serif',
        color: '#111',
        fontSize: '16px',
        lineHeight: '1.7',
        letterSpacing: '0em',
        fontWeight: 'normal',
        textAlign: 'left',
        fontSmoothing: 'subpixel-antialiased'
      }
    }
  },
  methods: {
    changeText: function (message) {
      this.message = message;
    },
    changeFontFamily: function (familyJa) {
      this.styleObject.fontFamily = familyJa;
      // CSSの値用に 欧文 -> 和文 の順に並べる
      const familyJoin = '[WIPWIPWIPWIPWIP]';
    },
    changeFontSize: function (size) {
      this.styleObject.fontSize = `${size}px`;
    },
    changeLineHeight: function (height) {
      this.styleObject.lineHeight = height;
    },
    changeLetterSpacing: function (space) {
      this.styleObject.letterSpacing = `${space}em`;
    },
    changeFontWeight: function (weight) {
      this.styleObject.fontWeight = weight;
    },
    changeTextAlign: function (align) {
      this.styleObject.textAlign = align;
    },
    changeFontSmoothing: function (smooth) {
      this.styleObject.fontSmoothing = smooth;
    },
    changeCustomStyle: function (sytle) {
      this.customStyle = sytle;
    }
  }
}
</script>

<style lang="scss">
html,* {
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Helvetica Neue, Helvetica, Arial, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  -webkit-text-size-adjust: 100%;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-rendering: optimizeLegibility;
  // font-feature-settings : "palt";
}
.wrapper {
  display: flex;
}
.tools {
  box-sizing: border-box;
  background: #eee;
  width: 40%;
  min-height: 100vh;
  padding: 20px;
  div {
    margin-bottom: 20px;
  }
}
.container {
  box-sizing: border-box;
  width: 60%;
  min-height: 100vh;
  padding: 20px;
  pre {
    background: #eee;
    margin-bottom: 20px;
    padding: 20px;
    font-size: 14px;
    line-height: 1.4;
  }
}
.container__block {
  white-space: pre-line;
}
</style>
