import "./style/index.css";
import { defineComponent as e, computed as n } from "vue";
import { buttonProps as i } from "./types.js";
const d = e({
  name: "t-button",
  props: i,
  setup(t) {
    return {
      styleClass: n(() => ({
        [`t-button--${t.type}`]: t.type,
        "is-plain": t.plain,
        "is-round": t.round,
        "is-disabled": t.disabled,
        [`t-button--${t.size}`]: t.size
      }))
    };
  }
});
export {
  d as default
};
