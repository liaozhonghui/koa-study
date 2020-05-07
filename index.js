const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  const start = new Date();
  console.log(`[logger middleware] before await`);
  await next();
  console.log(`[logger middleware] after await`);
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms} ms`);
});

app.use(async (ctx) => {
  console.log(`[response middleware] response ...`);
  ctx.body = "Hello Koa2";
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`服务已启动，请访问http://localhost:${PORT}`);
});
