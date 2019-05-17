<template>
  <div>
    fontFamilyJa:
      <input
        type="radio"
        name="fontFamilyJa"
        id="fontFamilyJa01"
        value="Hiragino Kaku Gothic ProN"
        v-model="fontFamilyJa"
        @input="updateValue"
      >
      <label for="fontFamilyJa01">Hiragino Kaku Gothic ProN</label>
      <input
        type="radio"
        name="fontFamilyJa"
        id="fontFamilyJa02"
        value="YuGothic"
        v-model="fontFamilyJa"
        @input="updateValue"
      >
      <label for="fontFamilyJa02">YuGothic</label>
      <input
        type="radio"
        name="fontFamilyJa"
        id="fontFamilyJa03"
        value="Hiragino Mincho ProN"
        v-model="fontFamilyJa"
        @input="updateValue"
      >
      <label for="fontFamilyJa03">Hiragino Mincho ProN</label>
      <input
        type="radio"
        name="fontFamilyJa"
        id="fontFamilyJa04"
        value="YuMincho"
        v-model="fontFamilyJa"
        @input="updateValue"
      >
      <label for="fontFamilyJa04">YuMincho</label>
  </div>
</template>

<script>
export default {
  name: 'radioFontFamilyJa',
  data() {
    return {
      fontFamilyJa: 'Hiragino Kaku Gothic ProN'
    }
  },
  methods: {
    updateValue(e) {
      this.$emit('input', {familyJa:e.target.value})
      this.$emit('change',{familyJa:e.target.value})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
