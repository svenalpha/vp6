
//    <img src="${BASE_URL}/client/vite.svg" class="logo" alt="Vite logo" />    
//     <img src="/vite.svg" class="logo" alt="Vite logo" />
const javascriptLogo = "../assets/javascript-8dac5379.svg";
const { BASE_URL } = { "BASE_URL": "/dist/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true };
function render() {
  const html = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!BBB preview ffBBB</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo (preview)  to learn more
      </p>
    </div>
  `;
  return { html };
}
export {
  render
};
