export default {

  path: '/',

  children: [
    require('./cart').default,
    require('./notFound').default,
  ],

  async action({ next }) {
    const route = await next();

    route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
    route.description = route.description || '';

    return route;
  },

};
