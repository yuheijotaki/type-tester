<template>
  <div>
    fontWeight:
      <input
        type="radio"
        id="fontWeight01"
        value="normal"
        v-model="fontWeight"
        @input="updateValue"
      >
      <label for="fontWeight01">Normal</label>
      <input
        type="radio"
        id="fontWeight02"
        value="bold"
        v-model="fontWeight"
        @input="updateValue"
      >
      <label for="fontWeight02">Bold</label>
  </div>
</template>

<script>
export default {
  name: 'radioFontWeight',
  data() {
    return {
      fontWeight: 'normal'
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
