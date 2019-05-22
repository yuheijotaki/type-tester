<template>
  <div class="tools__item">
    <p class="tools__label">background-color:</p>
    <div class="tools__block">
      <input
        name="backgroundPalette"
        type="color"
        v-model="background"
        @input="updateValue"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      >
      <input
        name="background"
        type="text"
        v-model="background"
        @input="updateValue"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      >
    </div>
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
