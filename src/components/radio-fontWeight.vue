<template>
  <div class="tools__item">
    <p class="tools__label">font-weight:</p>
    <div class="tools__block">
      <input
        type="radio"
        id="fontWeight01"
        value="normal"
        v-model="fontWeight"
        @input="updateValue"
      >
      <label for="fontWeight01">normal</label>
      <input
        type="radio"
        id="fontWeight02"
        value="bold"
        v-model="fontWeight"
        @input="updateValue"
      >
      <label for="fontWeight02">bold</label>
    </div>
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
