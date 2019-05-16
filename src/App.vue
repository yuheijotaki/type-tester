<template>
  <div id="app">
    <div class="wrapper">
      <div class="tools">
        <inputText @change="changeText"></inputText>
        <inputFontSize @change="changeFontSize"></inputFontSize>
        <inputLineHeight @change="changeLineHeight"></inputLineHeight>
        <inputLetterSpacing @change="changeLetterSpacing"></inputLetterSpacing>
        <inputCustomStyle @change="changeCustomStyle"></inputCustomStyle>
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
import inputFontSize from './components/input-fontSize'
import inputLineHeight from './components/input-lineHeight'
import inputLetterSpacing from './components/input-letterSpacing'
import inputCustomStyle from './components/input-customStyle'
import "normalize.css";

export default {
  name: 'App',
  components: {
    inputText,
    inputFontSize,
    inputLineHeight,
    inputLetterSpacing,
    inputCustomStyle
  },
  data() {
    return {
      message: '私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。',
      customStyle: 'color: red;',
      styleObject: {
        color: '#111',
        fontSize: '16px',
        lineHeight: '1.7',
        letterSpacing: '0em'
      }
    }
  },
  methods: {
    changeText: function (message) {
      this.message = message;
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
  width: 30%;
  min-height: 100vh;
  padding: 20px;
}
.container {
  box-sizing: border-box;
  width: 70%;
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
  animation: all 10s linear;
}
</style>
