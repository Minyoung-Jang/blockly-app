/* eslint-disable no-restricted-globals */
export default function WebWorker(args) {
  onmessage = (e) => {
    try {
      eval("(async () => {" + e.data + "})()");
      console.log("END");
    } catch (err) {
      console.log("CODE_FAIL");
    }
    postMessage("Response");
  };
}
