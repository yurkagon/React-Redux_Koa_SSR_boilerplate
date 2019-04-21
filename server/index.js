
import Koa from 'koa';
import serve from 'koa-static';

import router from './router';

const app = new Koa();

app.use(serve('dist'));
app.use(router.routes());

const port = process.env.APP_PORT || 3000;
app.listen(process.env.APP_PORT || 3000, error => {
  if (!error) {
    console.log(`The server has been started at port - ${port}`);
  } else {
    console.log(error);
  }
});
