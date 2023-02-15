const PROXY_CONFIG = [
    {
      context:[
        "/api"
      ],
      target: "http://localhost:80/sumar",
      pathRewrite : {
      "^/api" : ""
      },
      changeOrigin : true,
      secure : false
    }
  ]
  module.exports = PROXY_CONFIG; 