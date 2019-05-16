<template>
  <div>
    <input
      type="text"
      :value="customStyle"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
  </div>
</template>

<script>
export default {
  name: 'inputCustomStyle',
  data() {
    return {
      customStyle: 'color: red;'
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
