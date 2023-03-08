import "./UiInput.css";
import { defineComponent as u, openBlock as a, createElementBlock as s } from "vue";
const p = ["value", "disabled"], _ = /* @__PURE__ */ u({
  __name: "UiInput",
  props: {
    modelValue: null,
    isDisabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: n }) {
    const e = l;
    return (d, t) => (a(), s("input", {
      type: "text",
      value: e.modelValue,
      disabled: e.isDisabled,
      class: "input",
      onInput: t[0] || (t[0] = (o) => n("update:modelValue", o.target.value))
    }, null, 40, p));
  }
});
export {
  _ as default
};
