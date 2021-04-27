/* @jsx h */
import { h, render } from "preact"
import { define } from "wicked-elements";
import b from "bss";

const css = (color) =>  b`
  bc:${color};
  h:32;
  lh:32;
  c:white
`;

define("my-header", {
  connected () {
    render(<div class={css('deeppink')}>Header</div>, this.element)
  }
})

