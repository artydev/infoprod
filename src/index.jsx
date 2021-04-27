/* @jsx h */
import { h, render, Fragment  } from "preact";
import "../../infoprod/global.css"
import {store} from "./store";
import Drawer from "./components/drawer"
import ScanDialog  from "./components/scandialog"
import ScanButton from "./components/scanbtn"

let App = () => {
  return (
    <Fragment>
      <Drawer />
      <main>
        <ScanButton />
      </main>
      <ScanDialog  />
    </Fragment>
  );
};

function main () {
  const renderApp = () => render(<App />, root);
  store.subscribe(renderApp);
  renderApp()
}

main();





