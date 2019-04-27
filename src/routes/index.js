const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
  
    ctx.body = { message: `Hello Agrobolt!` };

  });

router.get('clients', async (ctx) => {
  
  let clients = await ctx.orm.clients.findAll({
    atributes: ["name"],
  });
  ctx.body = {
    clients
  };
});

router.get('places', async (ctx) => {

  let clients = await ctx.orm.clients_places.findAll({
    atributes: ["place_name"],
  });
  ctx.body = {
    clients
  };
});

module.exports = router;
