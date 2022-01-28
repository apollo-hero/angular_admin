const PROXY_CONFIG = {
  "/api/coreapi": {
    "target": "https://democrm.koneqt.com",
    "changeOrigin": true,
    "secure": false,
    "logLevel": "debug",
    "onProxyReq": function (pr, req, res) {
      pr.removeHeader('Origin');
    }
  }
};
module.exports = PROXY_CONFIG;