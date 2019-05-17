<template>
  <div>
    Background: <input
      type="color"
      v-model="background"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
    <input
      type="text"
      v-model="background"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
  </div>
</template>

<script>
export default {
  name: 'inputBackground',
  data() {
    return {
      background: '#ffffff'
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
