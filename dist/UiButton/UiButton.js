(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode("._button_1lkdt_3{display:inline-flex;padding:16px 32px;cursor:pointer;border:0;border-radius:16px}._button_1lkdt_3[data-color=primary]{background-color:var(--color-primary)}._button_1lkdt_3[data-color=gray]{background-color:var(--color-gray)}")),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { defineComponent as e, openBlock as n, createElementBlock as l, normalizeClass as c, renderSlot as r } from "vue";
import { _ as a } from "../_plugin-vue_export-helper-dad06003.js";
const u = ["data-color"], _ = /* @__PURE__ */ e({
  __name: "UiButton",
  props: {
    color: null
  },
  setup(t) {
    const s = t;
    return (o, i) => (n(), l("button", {
      class: c(o.$style.button),
      "data-color": s.color
    }, [
      r(o.$slots, "default")
    ], 10, u));
  }
}), p = "_button_1lkdt_3", d = {
  button: p
}, m = {
  $style: d
}, B = /* @__PURE__ */ a(_, [["__cssModules", m]]);
export {
  B as default
};
