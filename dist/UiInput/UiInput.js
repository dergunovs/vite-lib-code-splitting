(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("._input_1acho_3{padding:4px 8px;border-radius:4px;border:1px solid}")),document.head.appendChild(e)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
import { defineComponent as u, openBlock as a, createElementBlock as p, normalizeClass as i } from "vue";
import { _ as d } from "../_plugin-vue_export-helper-dad06003.js";
const r = ["value", "disabled"], c = /* @__PURE__ */ u({
  __name: "UiInput",
  props: {
    modelValue: null,
    isDisabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: l }) {
    const e = s;
    return (o, t) => (a(), p("input", {
      type: "text",
      value: e.modelValue,
      disabled: e.isDisabled,
      class: i(o.$style.input),
      onInput: t[0] || (t[0] = (n) => l("update:modelValue", n.target.value))
    }, null, 42, r));
  }
}), m = "_input_1acho_3", _ = {
  input: m
}, f = {
  $style: _
}, V = /* @__PURE__ */ d(c, [["__cssModules", f]]);
export {
  V as default
};
