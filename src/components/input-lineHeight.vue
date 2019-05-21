<template>
  <div class="tools__item">
    <p class="tools__label">line-height:</p>
    <div class="tools__block">
      <input
        type="range"
        min="1"
        max="3"
        step="0.1"
        v-model="lineHeight"
        @input="updateValue"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      >
      <input
        type="number"
        min="1"
        max="3"
        step="0.1"
        v-model="lineHeight"
        @input="updateValue"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputLineHeight',
  data() {
    return {
      lineHeight: 1.7,
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
