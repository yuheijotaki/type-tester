<template>
  <div>
    Text: <textarea
      :value="message"
      @input="updateValue"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'inputText',
  data() {
    return {
      message: '私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。'
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
textarea {
  width: 100%;
  max-width: 100%;
  height: 200px;
}
</style>
