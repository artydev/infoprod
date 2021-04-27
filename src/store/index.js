import createStore from "unistore";

let store = createStore({
  started: false,
  scandialog: null
});

const action = store.action

function openScanDialog (state) {
  console.log("open dialog")
  state.scandialog.open = true
}

function closeScanDialog (state) {
  state.scandialog.open = false
}

const actions = {
  openScanDialog : action(openScanDialog),
  closeScanDialog : action(closeScanDialog)
};

export { actions, store };