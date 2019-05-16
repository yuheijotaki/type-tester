<template>
  <div>
    FontSize: <input
      type="range"
      min="10"
      max="300"
      v-model="fontSize"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
    <input
      type="number"
      min="10"
      max="300"
      v-model="fontSize"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    > px
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
