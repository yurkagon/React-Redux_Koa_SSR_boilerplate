import StyleHandler from '~/server/utils/StyleHandler';

export default ({ html, state }) => `
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8">
        <title>React Koa SSR</title>
        <style>${StyleHandler.getStyleData()}</style>
    </head>

    <body>
        <div id="root">${html}</div>
        <script>
          window.__REDUX_DATA__ = ${JSON.stringify(state)}
        </script>
        <script src="main.js"></script>
    </body>
  </html>
`
