<template>
  <div>
    Color: <input
      type="color"
      v-model="color"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
    <input
      type="text"
      v-model="color"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
  </div>
</template>

<script>
export default {
  name: 'inputColor',
  data() {
    return {
      color: '#000'
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
