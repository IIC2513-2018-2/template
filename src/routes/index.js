const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
  ctx.body = {
    message: 'Hello Agrobolt!',
  };
});

router.get('clients', async (ctx) => {
  const clients = await ctx.orm.clients.findAll({
    atributes: ['name'],
  });
  ctx.body = {
    clients,
  };
});

router.get('clients.show', 'clients/:name', async (ctx) => {
  const { name } = ctx.params;
  const client = await ctx.orm.clients.findOne({
    where: { name },
  });
  if (!client) {
    ctx.body = `No se econtró el usuario ${name}`;
    return ctx.body;
  }
  ctx.body = { client };
  return ctx.body;
});

router.get('places', async (ctx) => {
  const clientsPlaces = await ctx.orm.clients_places.findAll({
    attributes: { exclude: ['polygon'] },
  });
  ctx.body = { clientsPlaces };
  return ctx.body;
});

router.get('places.byClient', 'places/:clientName', async (ctx) => {
  // entrega los campos del cliente client_name
  const { clientName } = ctx.params;
  const clientsPlaces = await ctx.orm.clients_places.findAll({
    where: { client_name: clientName },
    attributes: { exclude: ['polygon', 'client_name'] },
  });
  if (!clientsPlaces) {
    ctx.body = `El cliente ${clientName} no existe o no tiene campos.`;
    return ctx.body;
  }
  ctx.body = { clientsPlaces };
  return ctx.body;
});

module.exports = router;
