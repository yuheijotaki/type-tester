<template>
  <div class="tools__item">
    <p class="tools__label">color:</p>
    <div class="tools__block">
      <input
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
  </div>
</template>

<script>
export default {
  name: 'inputColor',
  data() {
    return {
      color: '#000000'
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
