<template>
  <div>
    letterSpacing: <input
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
      type="number"
      min="0"
      max="1"
      step="0.01"
      v-model="letterSpacing"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    > em
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
