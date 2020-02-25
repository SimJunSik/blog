require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const api = require('./api');
const jwtMiddleware = require('./lib/jwtMiddleware');

const app = new Koa();
const router = new Router();
const { PORT, MONGO_URI } = process.env;

// DB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
  });

// 라우터 설정
router.use('/api', api.routes());

// Middleware
app.use(bodyParser());
app.use(jwtMiddleware);

// 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => console.log(`Listening to port ${port}`));
