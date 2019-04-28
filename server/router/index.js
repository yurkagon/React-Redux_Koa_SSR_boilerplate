import koaRouter from 'koa-router';
import StyleHandler from '~/server/utils/StyleHandler';
import { getPosts } from '~/server/controllers/post';

const router = new koaRouter();

router.get('/posts', async (ctx) => {
  const posts = await getPosts();

  ctx.response.status = 200;
  ctx.body = posts;
});

router.get('/style.css', (ctx) => {
  const styleData = StyleHandler.getStyleData();

  ctx.response.status = 200;
  ctx.type = 'text/css';
  ctx.body = styleData;
});

export default router;
