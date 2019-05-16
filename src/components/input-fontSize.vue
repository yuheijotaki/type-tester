<template>
  <div>
    FontSize: <input
      type="number"
      min="10"
      :value="fontSize"
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
