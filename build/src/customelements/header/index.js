import {h, render} from "../../../_snowpack/pkg/preact.js";
import {define} from "../../../_snowpack/pkg/wicked-elements.js";
import b from "../../../_snowpack/pkg/bss.js";
const css = (color) => b`
  bc:${color};
  h:32;
  lh:32;
  c:white
`;
define("my-header", {
  connected() {
    render(/* @__PURE__ */ h("div", {
      class: css("deeppink")
    }, "Header"), this.element);
  }
});
