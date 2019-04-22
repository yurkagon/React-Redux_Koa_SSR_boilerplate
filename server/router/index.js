import koaRouter from 'koa-router';
// import render from '~/server/render';

const router = new koaRouter();

router.get('/posts', async (ctx) => {
  ctx.response.status = 200;
  // ctx.type = 'text';
  ctx.body = {
    data: 1
  };
})

export default router;
