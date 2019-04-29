import Koa from 'koa';
import serve from 'koa-static';

import StyleHandler from './utils/StyleHandler';
import buildWeb from './utils/buildWeb';
import router from './router';
import renderMiddleware from './render';

const app = new Koa();
app.use(serve('dist'));
app.use(router.routes());
app.use(renderMiddleware);

const port = 8080;
app.listen(port, async error => {
  if (!error) {
    await StyleHandler.loadStyles();
    await buildWeb();

    console.log(`The server has been started at port - ${port}`);
  } else {
    console.log(error);
  }
});
