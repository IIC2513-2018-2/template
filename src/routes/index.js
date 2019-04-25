const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
  
  let clients = await ctx.orm.clients.findAll({
    atributes: ["name"],
  });
  ctx.body = {
    clients
  };
});

module.exports = router;
