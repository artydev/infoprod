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
        <div>Content</div>
        <ScanButton />
      </main>
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





