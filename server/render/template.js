export default ({ html, state, head }) => `
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8">
        <title>React Koa SSR</title>
        <link rel="stylesheet" href="${process.env.ROOT_URL}style.css">
        ${head}
    </head>

    <body>
        <div id="root">${html}</div>
        <script id="redux-data-script">
          window.__REDUX_DATA__ = ${JSON.stringify(state)}
        </script>
        <script src="${process.env.ROOT_URL}main.js"></script>
    </body>
  </html>
`
