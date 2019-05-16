<template>
  <div id="app">
    <div class="wrapper">
      <div class="tools">
        <inputText @change="changeText"></inputText>
      </div>
      <div class="container">
        <div class="container__block">{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import inputText from './components/input-text'
import "normalize.css";

export default {
  name: 'App',
  components: {
    inputText
  },
  data() {
    return {
      message: "私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。",
    }
  },
  methods: {
    changeText: function (message) {
      this.message = message;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings : "palt";
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
}
.container {
  box-sizing: border-box;
  width: 60%;
  min-height: 100vh;
  padding: 20px;
}
.container__block {
  white-space: pre-line;
}
</style>
