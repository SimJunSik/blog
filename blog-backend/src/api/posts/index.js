const Router = require('koa-router');
const postCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/', postCtrl.list);
posts.post('/', postCtrl.write);

const post = new Router();
post.get('/', postCtrl.read);
post.delete('/', postCtrl.remove);
post.patch('/', postCtrl.update);

posts.use('/:id', postCtrl.checkObjectId, post.routes());

module.exports = posts;
