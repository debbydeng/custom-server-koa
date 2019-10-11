const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const routes=require('./pageRoutes/home')
const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handler = routes.getRequestHandler(app)
const bodyParser = require('koa-bodyparser');
const controller=require('./server/controller.js');

app.prepare().then(() => {
  const server = new Koa();
    server.use(bodyParser());
    const router = new Router()

  router.get('/a', async ctx => {
   await app.render(ctx.req, ctx.res, '/b', ctx.query)
    ctx.respond = false
  })

    server.use(controller());

    router.get('*', async ctx => {
    await handler(ctx.req, ctx.res)
    ctx.respond = false

  });

  server.use(async (ctx, next) => {
      ctx.res.statusCode = 200
      await next()
  })

  server.use(router.routes())
    server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
