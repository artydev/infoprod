import createStore from "unistore";

let store = createStore({
  started: false,
  scandialog: null
});

const action = store.action

const actions = {
  openScanDialog : action((s) => s.scandialog.open = true),
  closeScanDialog : action((s) => s.scandialog.open = false)
};

export { actions, store };