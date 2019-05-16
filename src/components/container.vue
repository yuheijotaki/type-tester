<template>
  <div class="container">
    <Tools @changeMsg="setMessage" :msg="welcomeMsg"/>
  </div>
</template>

<script>
import Tools from "@/components/tools.vue";

export default {
  name: 'Container',
  data() {
    return {
      welcomeMsg: "Hello World"
    }
  },
  methods: {
    setMessage(msg) {
      this.welcomeMsg = msg;
    }
  },
  components: {
    Tools
  }
}
</script>

<style lang="scss" scoped>
</style>
