<template>
  <div>
    fontFamilyEn:
      <input
        type="radio"
        name="fontFamilyEn"
        id="fontFamilyEn01"
        value="Helvetica"
        v-model="fontFamilyEn"
        @input="updateValue"
      >
      <label for="fontFamilyEn01">Helvetica</label>
      <input
        type="radio"
        name="fontFamilyEn"
        id="fontFamilyEn02"
        value="Helvetica Neue"
        v-model="fontFamilyEn"
        @input="updateValue"
      >
      <label for="fontFamilyEn02">Helvetica Neue</label>
      <input
        type="radio"
        name="fontFamilyEn"
        id="fontFamilyEn03"
        value="Georgia"
        v-model="fontFamilyEn"
        @input="updateValue"
      >
      <label for="fontFamilyEn03">Georgia</label>
      <input
        type="radio"
        name="fontFamilyEn"
        id="fontFamilyEn04"
        value="Times"
        v-model="fontFamilyEn"
        @input="updateValue"
      >
      <label for="fontFamilyEn04">Times</label>
  </div>
</template>

<script>
export default {
  name: 'radioFontFamilyEn',
  data() {
    return {
      fontFamilyEn: 'Helvetica'
    }
  },
  methods: {
    updateValue(e) {
      this.$emit('input', {familyEn:e.target.value})
      this.$emit('change',{familyEn:e.target.value})
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
