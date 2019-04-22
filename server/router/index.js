import koaRouter from 'koa-router';
import { getPosts } from '~/server/controllers/post'
const router = new koaRouter();

router.get('/posts', async (ctx) => {
  const posts = await getPosts();

  ctx.response.status = 200;
  ctx.body = posts;
})

export default router;
