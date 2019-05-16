<template>
  <div>
    FontSmoothing:
      <input
        type="radio"
        id="fontSmoothing01"
        value="subpixel-antialiased"
        v-model="fontSmoothing"
        @input="updateValue"
      >
      <label for="fontSmoothing01">subpixel-antialiased</label>
      <input
        type="radio"
        id="fontSmoothing02"
        value="antialiased"
        v-model="fontSmoothing"
        @input="updateValue"
      >
      <label for="fontSmoothing02">antialiased</label>
      <input
        type="radio"
        id="fontSmoothing03"
        value="none"
        v-model="fontSmoothing"
        @input="updateValue"
      >
      <label for="fontSmoothing03">none</label>
  </div>
</template>

<script>
export default {
  name: 'radioFontSmoothing',
  data() {
    return {
      fontSmoothing: 'subpixel-antialiased'
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
