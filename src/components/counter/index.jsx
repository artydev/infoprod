/* @jsx h */
import { h, Fragment } from "preact";

let Counter = ({ state, actions }) => {
  return (
    <Fragment>
      <h1>Counter : {state.count}</h1>
      <button onclick={actions.inc}>INC</button>
    </Fragment>
  );
};

export default Counter;
