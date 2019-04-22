import koaRouter from 'koa-router';
import render from '~/server/render';

const router = new koaRouter();

router.get('*', async (ctx) => {
  const renderedPage = await render(ctx.request.url);

  ctx.response.status = 200;
  ctx.type = 'html';
  ctx.body = renderedPage;
})

export default router;
