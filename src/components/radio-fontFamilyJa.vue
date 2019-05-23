<template>
  <div class="tools__item">
    <p class="tools__label">font-family(JP):</p>
    <div class="tools__block">
      <div class="tools__radio">
        <input
          type="radio"
          name="fontFamilyJa"
          id="fontFamilyJa01"
          value="Hiragino Kaku Gothic ProN"
          v-model="fontFamilyJa"
          @input="updateValue"
        >
        <label for="fontFamilyJa01">Hiragino Kaku Gothic ProN</label>
      </div>
      <div class="tools__radio">
        <input
          type="radio"
          name="fontFamilyJa"
          id="fontFamilyJa02"
          value="YuGothic"
          v-model="fontFamilyJa"
          @input="updateValue"
        >
        <label for="fontFamilyJa02">YuGothic</label>
      </div>
      <div class="tools__radio">
        <input
          type="radio"
          name="fontFamilyJa"
          id="fontFamilyJa03"
          value="Hiragino Mincho ProN"
          v-model="fontFamilyJa"
          @input="updateValue"
        >
        <label for="fontFamilyJa03">Hiragino Mincho ProN</label>
      </div>
      <div class="tools__radio">
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
    </div>
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
