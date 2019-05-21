<template>
  <div id="app">
    <div class="wrapper">
      <div class="tools">
        <form action="#" name="tools">
          <div><radioText @change="changeTextRadio"></radioText></div>
          <div><inputText @change="changeText"></inputText></div>
          <div><radioFontFamilyJa @change="changeFontFamily"></radioFontFamilyJa></div>
          <div><radioFontFamilyEn @change="changeFontFamily"></radioFontFamilyEn></div>
          <div><inputColor @change="changeColor"></inputColor></div>
          <div><inputBackground @change="changeBackground"></inputBackground></div>
          <div><inputFontSize @change="changeFontSize"></inputFontSize></div>
          <div><inputLineHeight @change="changeLineHeight"></inputLineHeight></div>
          <div><inputLetterSpacing @change="changeLetterSpacing"></inputLetterSpacing></div>
          <div><radioFontWeight @change="changeFontWeight"></radioFontWeight></div>
          <div><radioTextAlign @change="changeTextAlign"></radioTextAlign></div>
          <div><radioFontSmoothing @change="changeFontSmoothing"></radioFontSmoothing></div>
          <div><inputPaddingVertical @change="changePaddingVertical"></inputPaddingVertical></div>
          <div><inputPaddingHorizontal @change="changePaddingHorizontal"></inputPaddingHorizontal></div>
          <div><radioFontFeatureSettings @change="changeFontFeatureSettings"></radioFontFeatureSettings></div>
        </form>
      </div>
      <div class="container">
        <template v-if="displayCss">
          <div class="css">
            <pre>CSS: {{styleObject}}</pre>
          </div>
        </template>
        <div class="container__block" v-bind:style="styleObject">{{message}}</div>
      </div>
      <ul class="toggle">
        <li class="toggle__button">
          <a class="toggle__anchor" href="javascript:void(0);" v-on:click="toggleTools">Tools toggle button</a>
        </li>
        <li class="toggle__button">
          <a class="toggle__anchor" href="javascript:void(0);" v-on:click="toggleCss">CSS toggle button</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// コンポーネントのインポート
import radioText from './components/radio-text'
import inputText from './components/input-text'
import radioFontFamilyJa from './components/radio-fontFamilyJa'
import radioFontFamilyEn from './components/radio-fontFamilyEn'
import inputColor from './components/input-color'
import inputBackground from './components/input-background'
import inputFontSize from './components/input-fontSize'
import inputLineHeight from './components/input-lineHeight'
import inputLetterSpacing from './components/input-letterSpacing'
import radioFontWeight from './components/radio-fontWeight'
import radioTextAlign from './components/radio-textAlign'
import radioFontSmoothing from './components/radio-fontSmoothing'
import inputPaddingVertical from './components/input-paddingVertical'
import inputPaddingHorizontal from './components/input-paddingHorizontal'
import radioFontFeatureSettings from './components/radio-fontFeatureSettings'

// ライブラリ読み込み
import "normalize.css";

// デフォルトテキストを定義
const defaultTextJa = `私はその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執っても心持は同じ事である。よそよそしい頭文字などはとても使う気にならない。`;
const defaultTextEn = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default {
  name: 'App',
  components: {
    radioText,
    inputText,
    radioFontFamilyJa,
    radioFontFamilyEn,
    inputColor,
    inputBackground,
    inputFontSize,
    inputLineHeight,
    inputLetterSpacing,
    radioFontWeight,
    radioTextAlign,
    radioFontSmoothing,
    inputPaddingVertical,
    inputPaddingHorizontal,
    radioFontFeatureSettings
  },
  data() {
    return {
      textType: 'textJa',
      message: defaultTextJa,
      styleObject: {
        'font-family': 'Helvetica , Hiragino Kaku Gothic ProN',
        'color': '#000000',
        'background': '#ffffff',
        'font-size': '16px',
        'line-height': '1.7',
        'letter-spacing': '0em',
        'font-weight': 'normal',
        'text-align': 'left',
        'padding-top': '20px',
        'padding-bottom': '20px',
        'padding-left': '20px',
        'padding-right': '20px',
        'font-feature-settings': 'normal',
        '-webkit-font-smoothing': 'subpixel-antialiased'
      },
      displayTools: true,
      displayCss: false
    }
  },
  methods: {
    // CSSエリアのトグル表示
    toggleCss: function () {
      // `.css` クラスのトグル
      this.displayCss = !this.displayCss;
    },
    // ツールのトグル表示
    toggleTools: function () {
      // `.tools` クラスのトグル
      const tools = document.querySelector('.tools');
      tools.classList.toggle('js-tools-active');
      // `.container` クラスのトグル
      const container = document.querySelector('.container');
      container.classList.toggle('js-tools-active');
    },
    getOtherSideFont: function (name) {
      // ラジオボタンオブジェクトを取得する
      // ref: https://javascript.programmer-reference.com/js-radio-value/
      var radios = document.getElementsByName(name);
      // 取得したラジオボタンオブジェクトから選択されたものを探し出す
      var result;
      for(var i=0; i<radios.length; i++){
        if (radios[i].checked) {
          // 選択されたラジオボタンのvalue値を取得する
          result = radios[i].value;
          break;
        }
      }
      return result;
    },
    changeTextRadio: function (textType) {
      const inputTextArea = document.tools.inputTextArea; // ツールのテキストエリアオブジェクトを取得
      const textTypeValue = textType;                     // 選択されたラジオボタンのテキストタイプを取得
      if ( textTypeValue === 'textJa' ) {
        inputTextArea.value = defaultTextJa; // ツールのテキストエリアの値書き換え
        this.message = defaultTextJa;        // プレビューエリアのテキストを書き換え
      } else if ( textTypeValue === 'textEn' ) {
        inputTextArea.value = defaultTextEn;
        this.message = defaultTextEn;
      } else if ( textTypeValue === 'textFree' ) {
        inputTextArea.value = ``;
        this.message = ``;
      }
    },
    changeText: function (message) {
      this.message = message;
    },
    changeFontFamily: function (family) {
      // フォントファミリーが変更された際の日本語/英語の処理分岐
      if ( family.familyJa ) {
        // 日本語が選択された場合は英語のチェック状態を取得
        var familySelectedJa = family.familyJa;
        var familySelectedEn = this.getOtherSideFont('fontFamilyEn');
        } else if ( family.familyEn ) {
        // 英語が選択された場合は日本語のチェック状態を取得
        var familySelectedJa = this.getOtherSideFont('fontFamilyJa');
        var familySelectedEn = family.familyEn;
      }
      // CSSの値用に 欧文指定 -> 和文指定 の順に並べる
      const familyJoin = `${familySelectedEn} , ${familySelectedJa}`;
      this.styleObject['font-family'] = familyJoin;
    },
    changeColor: function (color) {
      this.styleObject['color'] = color;
    },
    changeBackground: function (color) {
      this.styleObject['background'] = color;
    },
    changeFontSize: function (size) {
      this.styleObject['font-size'] = `${size}px`;
    },
    changeLineHeight: function (height) {
      this.styleObject['line-height'] = height;
    },
    changeLetterSpacing: function (space) {
      this.styleObject['letter-spacing'] = `${space}em`;
    },
    changeFontWeight: function (weight) {
      this.styleObject['font-weight'] = weight;
    },
    changeTextAlign: function (align) {
      this.styleObject['text-align'] = align;
    },
    changeFontSmoothing: function (smooth) {
      this.styleObject['-webkit-font-smoothing'] = smooth;
    },
    changePaddingVertical: function (space) {
      this.styleObject['padding-top'] = `${space}px`;
      this.styleObject['padding-bottom'] = `${space}px`;
    },
    changePaddingHorizontal: function (space) {
      this.styleObject['padding-left'] = `${space}px`;
      this.styleObject['padding-right'] = `${space}px`;
    },
    changeFontFeatureSettings: function (feature) {
      if ( feature === 'normal' ) {
        this.styleObject['font-feature-settings'] = `${feature}`;
      } else {
        this.styleObject['font-feature-settings'] = `"${feature}"`;
      }
    }
  }
}
</script>

<style lang="scss">
html,* {
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Helvetica Neue, Helvetica, Arial, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  -webkit-text-size-adjust: 100%;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-rendering: optimizeLegibility;
  // font-feature-settings : "palt";
}
.wrapper {
  display: flex;
  position: relative;
}
.tools {
  box-sizing: border-box;
  background: #eee;
  width: 40%;
  min-height: 100vh;
  padding: 20px;
  &.js-tools-active {
    display: none;
  }
  div {
    margin-bottom: 20px;
  }
}
.container {
  box-sizing: border-box;
  width: 60%;
  min-height: 100vh;
  &.js-tools-active {
    width: 100%;
  }
  pre {
    background: #ddd;
    padding: 20px;
    font-size: 14px;
    line-height: 1.4;
  }
}
.container__block {
  white-space: pre-line;
}
.toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  list-style: none;
}
.toggle__button {
  margin-right: 10px;
  font-size: 12px;
  line-height: 1;
  &:last-child {
    margin-right: 0;
  }
}
.toggle__anchor {
  display: block;
  padding: 4px 6px;
  background: #fff;
  border: #000 1px solid;
  color: #000;
  text-decoration: none;
}
</style>
