import { config } from './config';
import { startServer } from './server';

const { port } = config;

startServer()
  .then((app) => {
    app.listen(port, () => {
      console.log(`🚀 Server is listening on http://localhost:${port} 🚀`);
    });
  })
  .catch((error) => console.log(error));
