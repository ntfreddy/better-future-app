<template>
<div>
  <div ssr="true" :class="{[$style.quill]: true, [$style.mini]: mini}">
    <div class="notranslate quill-text ql-container ql-disabled" :class="$style.textarea">
      <div class="ql-editor" data-gramm="false" contenteditable="false">
        <p v-for="(op, index) in ops" :key="index">{{op.insert}}</p>
      </div>
      <div class="ql-clipboard" contenteditable="true" tabindex="-1"></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props:["ops", "mini"]
  
};
</script>

<style module>
.textarea {
  display: block;
  position: relative;
}
.textarea #tab-panel .ap {
  margin: 4px;
}
.toolbar_11Qo3 {
  width: 400px;
  position: fixed;
  left: calc(50% - 200px);
  bottom: 0;
  z-index: 30;
}
.emoji_Y7sy2 {
  opacity: 0;
  font-size: 20px;
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: 1em;
  cursor: pointer;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.emoji_Y7sy2 use {
  fill: #444;
}
.quill:hover .emoji_Y7sy2 {
  opacity: 0.9;
}
.emoji_Y7sy2:hover {
  opacity: 1;
}
.quill {
  outline: none !important;
}
.quill .ql-emojiblot {
  vertical-align: baseline;
}
.quill .ql-editor {
  line-height: inherit;
  padding: 0;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  outline: none !important;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.quill:active .ql-editor,
.quill:focus-within .ql-editor,
.quill:focus .ql-editor {
  outline-style: auto;
  outline-width: 5px;
  outline-color: #0060ff;
}
.quill .ql-clipboard {
  outline: none !important;
  display: none;
}
.quill .textarea-emoji-control {
  bottom: 0;
  right: -1px;
  top: auto;
}
.quill .ql-container {
  font-size: inherit;
  font-family: inherit;
}
.quill .ql-container a {
  color: inherit;
}
.quill.mini {
  position: relative;
  padding: 1px;
}
.quill.mini .toolbar_11Qo3 {
  bottom: auto;
  width: 100%;
  margin: 0;
  position: absolute;
  left: 0;
  top: calc(100% + 5px);
}
.quill.mini .ql-editor {
  height: 160px;
  padding: 8px 15px 20px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
.quill.mini .textarea-emoji-control {
  top: 8px;
  right: 8px;
}
.dir--rtl .quill .ql-editor {
  text-align: right;
}
</style>