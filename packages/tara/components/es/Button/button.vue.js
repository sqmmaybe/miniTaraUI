import o from "./button.vue2.js";
import { openBlock as e, createElementBlock as r, normalizeClass as s, renderSlot as n } from "vue";
import a from "../_virtual/_plugin-vue_export-helper.js";
function l(t, c, p, f, m, u) {
  return e(), r("button", {
    class: s(["t-button", t.styleClass])
  }, [
    n(t.$slots, "default")
  ], 2);
}
const $ = /* @__PURE__ */ a(o, [["render", l]]);
export {
  $ as default
};
