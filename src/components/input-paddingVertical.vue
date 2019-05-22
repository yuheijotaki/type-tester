<template>
  <div class="tools__item">
    <p class="tools__label">padding-top/padding-bottom:</p>
    <div class="tools__block">
      <input
        name="paddingVerticalRange"
        type="range"
        min="0"
        max="200"
        v-model="paddingVertical"
        @input="updateValue"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      >
      <input
        name="paddingVertical"
        type="number"
        min="0"
        max="200"
        v-model="paddingVertical"
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
  name: 'inputPaddingVertical',
  data() {
    return {
      paddingVertical: 20
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
