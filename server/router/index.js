import React from 'react';
import koaRouter from 'koa-router';
// import render from '~/server/render';

const router = new koaRouter();

router.get('*', (ctx) => {
  // const renderedPage = render(ctx.request.url);

  ctx.response.status = 200;
  ctx.type = 'html';
  ctx.body = 'YURCHIK'
})

export default router;
