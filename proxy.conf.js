const PROXY_CONFIG = [
    {
      context:[
        "/sumar"
      ],
      target: "http://localhost:80",
      pathRewrite : {
      "^/sumar":"/sumar"
      },
      changeOrigin : true,
      secure : false
    }
  ]
  module.exports = PROXY_CONFIG; 
