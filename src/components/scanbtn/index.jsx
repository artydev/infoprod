import { h, Fragment } from "preact";
import "@material/mwc-button";
import { actions } from "../../store";
import b from "bss";
import "@material/mwc-fab";

b.css("mwc-button",  b`
  --mdc-theme-primary: #e9437a;
  --mdc-theme-on-primary: white;
  --mdc-shape-small: 0;
`
);

const fabcss = b`
  cursor: pointer;
  position: fixed !important;
  bottom:15px;
  right: 15px;  
`;

const fabcss2 = b`
  position: fixed !important; 
  background: deeppink;
  width: 29.498;
  height:29.498;
  border:12px solid deeppink;
  border-radius:50%;
`;


function openScanDialog () {
  actions.openScanDialog();
  console.log("Launch Quagga")
}

const ScanButton = () => {
  return (
    <Fragment>
      <div class={`${fabcss} ${fabcss2}`} onclick={openScanDialog} >
        <svg
          version="1.1"
          id="Capa_1"
          fill="white"
          x="0px"
          y="0px"
          width="29.498px"
          height="29.498px"
          viewBox="0 0 29.498 29.498"
        >
          <g>
            <path
              d="M3.212,1.001h0.312v27.496H3.212V1.001z M0,28.497h1.451V1.001H0V28.497z M9.745,28.497h0.363V1.001H9.745V28.497z
		 M10.731,28.497h1.451V1.001h-1.451V28.497z M6.687,28.497h1.451V1.001H6.687V28.497z M4.613,28.497h0.311V1.001H4.613V28.497z
		 M5.599,28.497h0.31V1.001h-0.31V28.497z M16.329,28.497h1.452V1.001h-1.452V28.497z M20.527,28.497h0.312V1.001h-0.312V28.497z
		 M19.543,28.497h0.312V1.001h-0.312V28.497z M13.272,28.497h0.31V1.001h-0.31V28.497z M14.256,28.497h1.452V1.001h-1.452V28.497z
		 M25.975,28.497h1.45V1.001h-1.45V28.497z M28.047,1.001v27.496h1.451V1.001H28.047z M24.003,28.497h0.362V1.001h-0.362V28.497z
		 M21.93,28.497h0.312V1.001H21.93V28.497z M22.914,28.497h0.311V1.001h-0.311V28.497z"
            />
          </g>
        </svg>
      </div>
    </Fragment>
  );
};

export default ScanButton;
