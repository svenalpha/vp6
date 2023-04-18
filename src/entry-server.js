import javascriptLogo from './javascript.svg'
const { BASE_URL } = import.meta.env;

export function render() {
  const html = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${BASE_URL}vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!BBBBBBB</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the ViteBBBBB logo to learn more
      </p>
    </div>
  `
  return { html }
}
