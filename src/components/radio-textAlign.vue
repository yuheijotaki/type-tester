<template>
  <div>
    textAlign:
      <input
        type="radio"
        id="textAlign01"
        value="left"
        v-model="textAlign"
        @input="updateValue"
      >
      <label for="textAlign01">left</label>
      <input
        type="radio"
        id="textAlign02"
        value="center"
        v-model="textAlign"
        @input="updateValue"
      >
      <label for="textAlign02">center</label>
      <input
        type="radio"
        id="textAlign03"
        value="right"
        v-model="textAlign"
        @input="updateValue"
      >
      <label for="textAlign03">right</label>
      <input
        type="radio"
        id="textAlign04"
        value="justify"
        v-model="textAlign"
        @input="updateValue"
      >
      <label for="textAlign04">justify</label>
  </div>
</template>

<script>
export default {
  name: 'radioTextAlign',
  data() {
    return {
      textAlign: 'left'
    }
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value)
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
