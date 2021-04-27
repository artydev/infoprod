/* @jsx h */
import { h, render, Fragment  } from "preact";
import "../../infoprod/global.css"
import {store, actions} from "./store";
import "@material/mwc-button";
import "@material/mwc-dialog";

import Drawer from "./components/drawer"
import ScanDialog  from "./components/scandialog"

let App = () => {
  return (
    <Fragment>
      <Drawer />
      <mwc-button onclick={actions.openScanDialog}  raised>
        scan
      </mwc-button>
      <ScanDialog content="Scanning" />
    </Fragment>
  );
};

function main () {
  const renderApp = () => render(<App />, root);
  store.subscribe(renderApp);
  renderApp()
}

main();





