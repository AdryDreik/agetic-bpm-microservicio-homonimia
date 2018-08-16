const Debug = require('debug');
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/app');
const PORT = process.env.PORT || 6000;
const debug = new Debug('microservicio-segip');
debug(config);
async function start() {
  try {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.connect(config.mongoUrl);
    } else if (process.env.NODE_ENV === 'test') {
      await mongoose.connect(config.mongoUrlTest);
    } else if (process.env.NODE_ENV === 'development') {
      await mongoose.connect(config.mongoUrlDev);
      mongoose.set('debug', true);
    } else {
      await mongoose.connect(config.mongoUrlDev);
    }
    app.listen(PORT, () => {
      debug(`Servidor de aplicaciones corriendo en el puerto ${PORT}`);
      module.exports = app;
    });
  } catch (error) {
    debug('No se puede establecer conexion con la base de datos', error)
  }
}
if (!module.parent) {
  start();
}
module.exports = app
