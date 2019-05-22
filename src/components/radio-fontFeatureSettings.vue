<template>
  <div class="tools__item">
    <p class="tools__label">font-feature-settings:</p>
    <div class="tools__block">
      <input
        name="fontFeatureSettings"
        type="radio"
        id="fontFeatureSettings01"
        value="normal"
        v-model="fontFeatureSettings"
        @input="updateValue"
      >
      <label for="fontFeatureSettings01">normal</label>
      <input
        name="fontFeatureSettings"
        type="radio"
        id="fontFeatureSettings02"
        value="palt"
        v-model="fontFeatureSettings"
        @input="updateValue"
      >
      <label for="fontFeatureSettings02">palt</label>
      <input
        name="fontFeatureSettings"
        type="radio"
        id="fontFeatureSettings03"
        value="pwid"
        v-model="fontFeatureSettings"
        @input="updateValue"
      >
      <label for="fontFeatureSettings03">pwid</label>
      <input
        name="fontFeatureSettings"
        type="radio"
        id="fontFeatureSettings04"
        value="pkna"
        v-model="fontFeatureSettings"
        @input="updateValue"
      >
      <label for="fontFeatureSettings04">pkna</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radioFontFeatureSettings',
  data() {
    return {
      fontFeatureSettings: 'normal'
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
