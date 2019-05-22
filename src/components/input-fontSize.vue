<template>
  <div class="tools__item">
    <p class="tools__label">font-size:</p>
    <div class="tools__block">
      <input
        name="fontSizeRange"
        type="range"
        min="10"
        max="300"
        v-model="fontSize"
        @input="updateValue"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      >
      <input
        name="fontSize"
        type="number"
        min="10"
        max="300"
        v-model="fontSize"
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
  name: 'inputFontSize',
  data() {
    return {
      fontSize: 16,
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
