/* @jsx h */
import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import "@material/mwc-dialog";
import "../../store";
import { store } from "../../store";

async function sleep(ms) {
  return new Promise((res, err) => {
    setTimeout(res, ms);
  });
}

// Définition de la fenêtre contenant le scanner
// On memorise la référence à cette fenêtre dans le
// store.
const ScanDialog = () => {
  const [content, setContent] = useState("Loading...");
  const dialog = useRef(null);
  useEffect(() => {
    if (!store.getState().scandialog) {
      store.setState({ scandialog: dialog.current });
    }
  });
  return (
    <mwc-dialog ref={dialog} id="scandialog">
       <div>{content}</div>
       <div id="interactive" class="viewport"></div>
    </mwc-dialog>
  );
};

export default ScanDialog;
