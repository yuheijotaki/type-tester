<template>
  <div id="app">
    <div class="wrapper">
      <div class="tools">
        <form action="#" name="tools">
          <radioTextType @change="changeTextRadio"></radioTextType>
          <inputTextContent @change="changeText"></inputTextContent>
          <radioFontFamilyJa @change="changeFontFamily"></radioFontFamilyJa>
          <radioFontFamilyEn @change="changeFontFamily"></radioFontFamilyEn>
          <inputColor @change="changeColor"></inputColor>
          <inputBackground @change="changeBackground"></inputBackground>
          <inputFontSize @change="changeFontSize"></inputFontSize>
          <inputLineHeight @change="changeLineHeight"></inputLineHeight>
          <inputLetterSpacing @change="changeLetterSpacing"></inputLetterSpacing>
          <radioFontWeight @change="changeFontWeight"></radioFontWeight>
          <radioTextAlign @change="changeTextAlign"></radioTextAlign>
          <radioFontSmoothing @change="changeFontSmoothing"></radioFontSmoothing>
          <inputPaddingVertical @change="changePaddingVertical"></inputPaddingVertical>
          <inputPaddingHorizontal @change="changePaddingHorizontal"></inputPaddingHorizontal>
          <radioFontFeatureSettings @change="changeFontFeatureSettings"></radioFontFeatureSettings>
        </form>
      </div>
      <div class="container">
        <template v-if="displayCss">
          <div class="css">
            <pre>{{styleObjectFormatted}}</pre>
          </div>
        </template>
        <div class="container__block" v-bind:style="styleObject">{{message}}</div>
      </div>
      <ul class="toggle">
        <li class="toggle__button">
          <a class="toggle__anchor" href="javascript:void(0);" v-on:click="toggleTools">Tools toggle</a>
        </li>
        <li class="toggle__button">
          <a class="toggle__anchor" href="javascript:void(0);" v-on:click="toggleCss">CSS toggle</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// コンポーネントのインポート
import radioTextType from './components/radio-textType'
import inputTextContent from './components/input-textContent'
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
    radioTextType,
    inputTextContent,
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
      displayCss: false,
      metaTitle: 'site title'
    }
  },
  mounted() {
    // ローカルストレージ textType が あればラジオの選択状態を変更
    const local_textType = localStorage.getItem('textType');
    document.tools.textType.value = local_textType;
    const inputTextArea = document.tools.inputTextArea; // ツールのテキストエリアオブジェクトを取得
    if ( local_textType === 'textJa' ) {
      inputTextArea.value = defaultTextJa; // ツールのテキストエリアの値書き換え
      this.message = defaultTextJa;        // プレビューエリアのテキストを書き換え
    } else if ( local_textType === 'textEn' ) {
      inputTextArea.value = defaultTextEn;
      this.message = defaultTextEn;
    } else if ( local_textType === 'textFree' ) {
      inputTextArea.value = ``;
      this.message = ``;
    }
    // ローカルストレージに styleObject があるかチェック
    const local_styleObject = localStorage.getItem('styleObject');
    if ( local_styleObject ) {
      // ある場合、その styleObject を上書きする（CSS/テキストコンテンツにも適用される）
      this.styleObject = JSON.parse(local_styleObject) || []
      /********************
      * ツールのinput要素を styleObject のスタイル通りに選択する
      ********************/
      const local_fontFamilly = this.styleObject['font-family'];
      const local_fontFamillyArray = local_fontFamilly.split(' , ');
      document.tools.fontFamilyEn.value = local_fontFamillyArray[0];
      document.tools.fontFamilyJa.value = local_fontFamillyArray[1];
      // color
      document.tools.colorPalette.value = this.styleObject['color'];
      document.tools.color.value = this.styleObject['color'];
      // background
      document.tools.backgroundPalette.value = this.styleObject['background'];
      document.tools.background.value = this.styleObject['background'];
      // font-size
      const local_fontSize = this.styleObject['font-size'].replace('px','');
      document.tools.fontSizeRange.value = local_fontSize;
      document.tools.fontSize.value = local_fontSize;
      // line-height
      document.tools.lineHeightRange.value = this.styleObject['line-height'];
      document.tools.lineHeight.value = this.styleObject['line-height'];
      // letter-spacing
      const local_letterSpacing = this.styleObject['letter-spacing'].replace('em','');
      document.tools.letterSpacingRange.value = local_letterSpacing;
      document.tools.letterSpacing.value = local_letterSpacing;
      // font-weight
      document.tools.fontWeight.value = this.styleObject['font-weight'];
      // text-align
      document.tools.textAlign.value = this.styleObject['text-align'];
      // -webkit-font-smoothing
      document.tools.fontSmoothing.value = this.styleObject['-webkit-font-smoothing'];
      // padding-top / padding-bottom
      const local_paddingVertical = this.styleObject['padding-top'].replace('px','');
      document.tools.paddingVerticalRange.value = local_paddingVertical;
      document.tools.paddingVertical.value = local_paddingVertical;
      // padding-left / padding-right
      const local_paddingHorizontal = this.styleObject['padding-left'].replace('px','');
      document.tools.paddingHorizontalRange.value = local_paddingHorizontal;
      document.tools.paddingHorizontal.value = local_paddingHorizontal;
      // font-feature-settings
      let local_fontFeatureSettings = this.styleObject['font-feature-settings'].replace(/"/g,'');
      document.tools.fontFeatureSettings.value = local_fontFeatureSettings;
    }
    // ローカルストレージ displayCss が true ならば CSSエリアを表示
    const local_displayCss = JSON.parse(localStorage.getItem('displayCss'));
    if ( local_displayCss === true ) {
      this.displayCss = true;
    } else {
      this.displayCss = false;
    }
    // ローカルストレージ displayTools が true ならば CSSエリアを表示
    const local_displayTools = JSON.parse(localStorage.getItem('displayTools'));
    if ( local_displayTools === true ) {
      // Tools が表示（true）の場合
      this.displayTools = true;
    } else if ( local_displayTools === false ) {
      // Tools が非表示（false）の場合
      this.displayTools = false;
      const tools = document.querySelector('.tools');
      tools.classList.add('js-tools-active');
      const container = document.querySelector('.container');
      container.classList.add('js-tools-active');
    }
  },
  methods: {
    // CSSエリアのトグル表示
    toggleCss: function () {
      // `.css` クラスのトグル
      this.displayCss = !this.displayCss;
      this.setToolsInfo();
    },
    // ツールのトグル表示
    toggleTools: function () {
      // データのトグル（ローカルストレージ用）
      this.displayTools = !this.displayTools;
      // `.tools` クラスのトグル
      const tools = document.querySelector('.tools');
      tools.classList.toggle('js-tools-active');
      // `.container` クラスのトグル
      const container = document.querySelector('.container');
      container.classList.toggle('js-tools-active');
      this.setToolsInfo();
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
      this.setStylesInfo();
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
      this.textType = textTypeValue;
      this.setStylesInfo();
    },
    changeText: function (message) {
      this.message = message;
      // this.setStylesInfo();
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
      this.setStylesInfo();
    },
    changeColor: function (color) {
      this.styleObject['color'] = color;
      this.setStylesInfo();
    },
    changeBackground: function (color) {
      this.styleObject['background'] = color;
      this.setStylesInfo();
    },
    changeFontSize: function (size) {
      this.styleObject['font-size'] = `${size}px`;
      this.setStylesInfo();
    },
    changeLineHeight: function (height) {
      this.styleObject['line-height'] = height;
      this.setStylesInfo();
    },
    changeLetterSpacing: function (space) {
      this.styleObject['letter-spacing'] = `${space}em`;
      this.setStylesInfo();
    },
    changeFontWeight: function (weight) {
      this.styleObject['font-weight'] = weight;
      this.setStylesInfo();
    },
    changeTextAlign: function (align) {
      this.styleObject['text-align'] = align;
      this.setStylesInfo();
    },
    changeFontSmoothing: function (smooth) {
      this.styleObject['-webkit-font-smoothing'] = smooth;
      this.setStylesInfo();
    },
    changePaddingVertical: function (space) {
      this.styleObject['padding-top'] = `${space}px`;
      this.styleObject['padding-bottom'] = `${space}px`;
      this.setStylesInfo();
    },
    changePaddingHorizontal: function (space) {
      this.styleObject['padding-left'] = `${space}px`;
      this.styleObject['padding-right'] = `${space}px`;
      this.setStylesInfo();
    },
    changeFontFeatureSettings: function (feature) {
      if ( feature === 'normal' ) {
        this.styleObject['font-feature-settings'] = `${feature}`;
      } else {
        this.styleObject['font-feature-settings'] = `"${feature}"`;
      }
      this.setStylesInfo();
    },
    // ローカルストレージに styleObject を保存
    setStylesInfo() {
      localStorage.setItem('styleObject', JSON.stringify(this.styleObject));
      localStorage.setItem('textType', this.textType);
    },
    setToolsInfo() {
      localStorage.setItem('displayTools', this.displayTools);
      localStorage.setItem('displayCss', this.displayCss);
    }
  },
  computed: {
    // styleObject を出力用に整形
    styleObjectFormatted: function () {
      const styleObject = this.styleObject; // styleObject を取得
      const styleObjectArray = []; // テキスト用の配列を用意
      // styleObject をループして新しい配列に key と value を格納
      Object.keys(styleObject).forEach(function (key) {
        if ( key === 'font-family' ) {
          // key が 'font-family' の場合は値に '""' をつける
          styleObjectArray.push(`${key}: "${styleObject[key]}";`);
        } else {
          styleObjectArray.push(`${key}: ${styleObject[key]};`);
        }
      });
      const styleObjectText = styleObjectArray.join('\n'); // 1行ずつ改行処理
      return styleObjectText;
    }
  },
  head: {
    title: function () {
      return {
        inner: this.metaTitle
      }
    },
    meta: [
      { name: 'description', content: 'My description', id: 'desc' }
    ]
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700&display=swap');
@mixin fontCode {
  font-family: 'Source Code Pro', monospace;
  font-weight: 400;
}

html,* {
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
}

// app
#app {
  font-family: Helvetica Neue, Helvetica, Arial, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  -webkit-text-size-adjust: 100%;
}

// wrapper
.wrapper {
  display: flex;
  position: relative;
}

// tools
.tools {
  box-sizing: border-box;
  background: $lightGray;
  width: 400px;
  min-height: 100vh;
  padding: 20px;
  font-size: 11px;
  line-height: 1.1;
  @include fontCode;
  @include fontSmooth;
  &.js-tools-active {
    display: none;
  }
}
.tools__item {
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
}
.tools__block {
  margin-top: 7px;
  display: flex;
  flex-wrap: wrap;
  input[type="text"],
  input[type="number"],
  input[type="color"],
  input[type="range"],
  label {
    margin-right: 10px;
    letter-spacing: -0.025em;
  }
  input[type="radio"] {
    margin-right: 4px;
  }
  textarea {
    @include fontJa;
    width: 100%;
    max-width: 100%;
    height: 120px;
    line-height: 1.4;
    padding: 8px;
    letter-spacing: .05em;
  }
}
.tools__radio {
  margin-bottom: 5px;
  display: flex;
  &:nth-last-child(1),
  &:nth-last-child(2) {
    margin-bottom: 0;
  }
}
.tools__label {
  font-size: 10px;
  font-weight: 700;
  background: $gray;
  color: $white;
  padding: 3px 6px;
  border-radius: 2px;
}

// container
.container {
  box-sizing: border-box;
  width: calc(100% - 400px);
  min-height: 100vh;
  &.js-tools-active {
    width: 100%;
  }
}

// css
.css {
  @include fontSmooth;
  pre {
    @include fontCode;
    background: $codeBg;
    padding: 20px;
    color: $codeColor;
    font-size: 12px;
    line-height: 1.5;
  }
}

// container__block
.container__block {
  white-space: pre-line;
}

// toggle
.toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  list-style: none;
  @include fontCode;
  @include fontSmooth;
}
.toggle__button {
  margin-right: 10px;
  font-size: 11px;
  line-height: 1;
  &:last-child {
    margin-right: 0;
  }
}
.toggle__anchor {
  display: block;
  padding: 4px 8px;
  background: $white;
  border: $black 1px solid;
  color: $black;
  text-decoration: none;
  border-radius: 2px;
  letter-spacing: -0.01em;
  &:hover {
    background: $lightGray;
  }
}
</style>
