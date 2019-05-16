<template>
  <div id="app">
    <div class="wrapper">
      <Tools @event-test="clickAlert"></Tools>
      <div class="container">
        <p>{{message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Tools from './components/tools'
import "normalize.css";

export default {
  name: 'App',
  components: {
    Tools
  },
  data() {
    return {
      message: "default"
    }
  },
  methods: {
    clickAlert: function(message) {
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
.container {
  box-sizing: border-box;
  width: 60%;
  min-height: 100vh;
  padding: 20px;
}
</style>
