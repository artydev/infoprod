import {h, Fragment} from "../../../_snowpack/pkg/preact.js";
let Counter = ({state, actions}) => {
  return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("h1", null, "Counter : ", state.count), /* @__PURE__ */ h("button", {
    onclick: actions.inc
  }, "INC"));
};
export default Counter;
