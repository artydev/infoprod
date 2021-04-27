import { h, Fragment } from "preact";
import "@material/mwc-button";
import { actions } from "../../store";

const ScanButton = () => {
  return (
    <Fragment>
      <mwc-button onclick={actions.openScanDialog} raised>
        S
      </mwc-button>
    </Fragment>
  );
};

export default ScanButton;
