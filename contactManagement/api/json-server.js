import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your db.json
const middlewares = jsonServer.defaults();

// Use default middlewares (no authentication)
server.use(middlewares);

// Use the default router
server.use(router);

// Start the server
const port = process.env.PORT || 9000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});