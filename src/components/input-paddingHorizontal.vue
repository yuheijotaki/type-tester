<template>
  <div>
    padding left & right: <input
      type="range"
      min="0"
      max="200"
      v-model="paddingHorizontal"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
    <input
      type="number"
      min="0"
      max="200"
      v-model="paddingHorizontal"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    > px
  </div>
</template>

<script>
export default {
  name: 'inputPaddingHorizontal',
  data() {
    return {
      paddingHorizontal: 0
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
