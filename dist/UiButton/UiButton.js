import "./UiButton.css";
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
