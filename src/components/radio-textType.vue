<template>
  <div class="tools__item">
    <p class="tools__label">text type:</p>
    <div class="tools__block">
      <input
        type="radio"
        name="textType"
        id="textJa"
        value="textJa"
        v-model="textType"
        @input="updateValue"
      >
      <label for="textJa">和文</label>
      <input
        type="radio"
        name="textType"
        id="textEn"
        value="textEn"
        v-model="textType"
        @input="updateValue"
      >
      <label for="textEn">欧文</label>
      <input
        type="radio"
        name="textType"
        id="textFree"
        value="textFree"
        v-model="textType"
        @input="updateValue"
      >
      <label for="textFree">自由入力</label><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radioTextType',
  data() {
    return {
      textType: `textJa`
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
