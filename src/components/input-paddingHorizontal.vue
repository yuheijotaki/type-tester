<template>
  <div class="tools__item">
    <p class="tools__label">padding-left/padding-right:</p>
    <div class="tools__block">
      <input
        name="paddingHorizontalRange"
        type="range"
        min="0"
        max="200"
        v-model="paddingHorizontal"
        @input="updateValue"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      >
      <input
        name="paddingHorizontal"
        type="number"
        min="0"
        max="200"
        v-model="paddingHorizontal"
        @input="updateValue"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      >
      <p class="tools__unit">px</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputPaddingHorizontal',
  data() {
    return {
      paddingHorizontal: 20
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
