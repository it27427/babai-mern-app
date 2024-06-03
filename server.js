const app = require('./app');
const config = require('./config/config');
require('colors');

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(
    `Server is listening at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
      .bgGreen
  );
});
