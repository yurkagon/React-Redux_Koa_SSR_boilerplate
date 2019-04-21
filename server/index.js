
import Koa from 'koa';
import serve from 'koa-static';

import StyleHandler from './utils/StyleHandler';
import buildWeb from './utils/buildWeb';
import router from './router';

const app = new Koa();
app.use(serve('dist'));
app.use(router.routes());

const port = process.env.APP_PORT || 3000;
app.listen(port, async error => {
  if (!error) {
    await StyleHandler.loadStyles();
    await buildWeb();

    console.log(`The server has been started at port - ${port}`);
  } else {
    console.log(error);
  }
});
