<template>
  <div>
    fontFamily:
      <input
        type="radio"
        id="fontFamily01"
        value="sans-serif"
        v-model="fontFamily"
        @input="updateValue"
      >
      <label for="fontFamily01">sans-serif</label>
      <input
        type="radio"
        id="fontFamily02"
        value="serif"
        v-model="fontFamily"
        @input="updateValue"
      >
      <label for="fontFamily02">serif</label>
  </div>
</template>

<script>
export default {
  name: 'radioFontFamilyJa',
  data() {
    return {
      fontFamily: 'sans-serif'
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
