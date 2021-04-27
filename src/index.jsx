/* @jsx h */
import { h, render, Fragment } from "preact";
import {store, actions} from "./store";
import InputCode from "./components/inputcode";
import "@material/mwc-button";
import "@material/mwc-drawer";
import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";
import "@material/mwc-fab";


let App = () => (
  <Fragment>
    <mwc-icon-button icon="gesture"></mwc-icon-button>
    <InputCode state = {store.getState()} actions={actions} />
  </Fragment>
);

function main () {
  const renderApp = () => render(<App />, root);
  store.subscribe(renderApp);
  renderApp()
}

main();
