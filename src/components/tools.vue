<template>
  <div class="tools">
    <p><input class="input" type="text" v-model="message"></p>
    <p>{{message}}</p>
    <button @click="emitEventTest">Button</button>
  </div>
</template>

<script>
export default {
  name: 'Tools',
  data() {
    return {
      message: "from child message"
    }
  },
  methods: {
    emitEventTest () {
      this.$emit('event-test',this.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.tools {
  box-sizing: border-box;
  background: #eee;
  width: 40%;
  min-height: 100vh;
  padding: 20px;
}
</style>
