export default ({ html, state }) => `
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8">
        <title>React Koa SSR</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <div id="root">${html}</div>
        <script id="redux-data-script">
          window.__REDUX_DATA__ = ${JSON.stringify(state)}
        </script>
        <script src="main.js"></script>
    </body>
  </html>
`
