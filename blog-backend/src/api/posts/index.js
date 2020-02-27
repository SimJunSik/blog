const Router = require('koa-router');
const postCtrl = require('./posts.ctrl');
const checkLoggedIn = require('../../lib/checkLoggedIn');

const posts = new Router();

posts.get('/', postCtrl.list);
posts.post('/', checkLoggedIn, postCtrl.write);

const post = new Router();
post.get('/', postCtrl.read);
post.delete('/', checkLoggedIn, postCtrl.checkOwnPost, postCtrl.remove);
post.patch('/', checkLoggedIn, postCtrl.checkOwnPost, postCtrl.update);

posts.use('/:id', postCtrl.getPostById, post.routes());

module.exports = posts;
