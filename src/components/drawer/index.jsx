/*  @jsx h */

import "@material/mwc-button";
import "@material/mwc-drawer";
import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";
import "@material/mwc-fab";

import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";

const Drawer = () => {
  const drawerRef = useRef(null);
  useEffect(() => {
    const drawer = drawerRef.current;
    const container = drawer.parentNode;
    container.addEventListener("MDCTopAppBar:nav", () => {
      drawer.open = !drawer.open;
    });
    drawer.addEventListener("click", () => {
      drawer.open = !drawer.open;
    });
  });
  return (
    <mwc-drawer ref={drawerRef} hasHeader type="dismissible">
      <span slot="title">Drawer Title</span>
      <span slot="subtitle">subtitle</span>
      <div>
        <p>Drawer content!</p>
        <mwc-icon-button icon="gesture"></mwc-icon-button>
        <mwc-icon-button icon="gavel"></mwc-icon-button>
      </div>
      <div slot="appContent">
        <mwc-top-app-bar dense>
          <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
          <div slot="title">Demo Drawer...</div>
        </mwc-top-app-bar>
      </div>
    </mwc-drawer>
  );
};

export default Drawer;
