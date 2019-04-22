import StyleHandler from '~/server/utils/StyleHandler';

export default (reactDom) => `
  <!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8">
        <title>React Koa SSR</title>
        <style>${StyleHandler.getStyleData()}</style>
    </head>

    <body>
        <div id="root">${reactDom}</div>
        <script src="main.js"></script>
    </body>
  </html>
`
