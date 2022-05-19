const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
    //   target: 'http://localhost:5000',
      target: 'https://cctv-flask.herokuapp.com/',
      changeOrigin: true,
    })
  );
};