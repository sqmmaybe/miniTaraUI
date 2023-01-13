const t = ["default", "primary", "success", "warning", "danger"], e = ["large", "normal", "small", "mini"], o = {
  type: {
    type: String,
    validator(n) {
      return t.includes(n);
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean,
  size: {
    type: String,
    Validator(n) {
      return e.includes(n);
    }
  }
};
export {
  e as ButtonSize,
  t as ButtonType,
  o as buttonProps
};
