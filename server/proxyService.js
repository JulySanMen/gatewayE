const{createProxyMiddleware,fixRequestBody} = require('http-proxy-middleware')
class ProxyService{
    static createProxy(target){
        return createProxyMiddleware({
            target: target,
            changeOrigin:true,
            pathRewrite:(path,req)=>path.replace(req.baseUrl,""),
            on: {
                proxyReq: fixRequestBody,
            },
        
        })
    }

}
module.exports = ProxyService;