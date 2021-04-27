/* @jsx h */
import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import "@material/mwc-button";
import "@material/mwc-dialog";
import "../../store";
import { store } from "../../store";

const ScanDialog = ({ content }) => {
  const dialog = useRef(null);
  useEffect(() => {
    if (!store.getState().scandialog) {
      store.setState({ scandialog: dialog.current });
    }
  });
  return (
    <mwc-dialog ref={dialog} id="scandialog">
      {content}
    </mwc-dialog>
  );
};

export default ScanDialog;
