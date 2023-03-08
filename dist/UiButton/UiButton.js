import "./UiButton.css";
import { defineComponent as n, openBlock as l, createElementBlock as r, renderSlot as c } from "vue";
const s = ["data-color"], u = /* @__PURE__ */ n({
  __name: "UiButton",
  props: {
    color: null
  },
  setup(o) {
    const t = o;
    return (e, _) => (l(), r("button", {
      class: "button",
      "data-color": t.color
    }, [
      c(e.$slots, "default")
    ], 8, s));
  }
});
export {
  u as default
};
