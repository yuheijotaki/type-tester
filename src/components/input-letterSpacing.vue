<template>
  <div class="tools__item">
    <p class="tools__label">letter-spacing:</p>
    <div class="tools__block">
      <input
        name="letterSpacingRange"
        type="range"
        min="0"
        max="1"
        step="0.01"
        v-model="letterSpacing"
        @input="updateValue"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      >
      <input
        name="letterSpacing"
        type="number"
        min="0"
        max="1"
        step="0.01"
        v-model="letterSpacing"
        @input="updateValue"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      >
      <p class="tools__unit">em</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputLetterSpacing',
  data() {
    return {
      letterSpacing: '0'
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
