<template>
  <div class="tools__item">
    <p class="tools__label">textAlign:</p>
    <div class="tools__block">
      <input
        name="textAlign"
        type="radio"
        id="textAlign01"
        value="left"
        v-model="textAlign"
        @input="updateValue"
      >
      <label for="textAlign01">left</label>
      <input
        name="textAlign"
        type="radio"
        id="textAlign02"
        value="center"
        v-model="textAlign"
        @input="updateValue"
      >
      <label for="textAlign02">center</label>
      <input
        name="textAlign"
        type="radio"
        id="textAlign03"
        value="right"
        v-model="textAlign"
        @input="updateValue"
      >
      <label for="textAlign03">right</label>
      <input
        name="textAlign"
        type="radio"
        id="textAlign04"
        value="justify"
        v-model="textAlign"
        @input="updateValue"
      >
      <label for="textAlign04">justify</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radioTextAlign',
  data() {
    return {
      textAlign: 'left'
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
