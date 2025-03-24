const routes =  require("express").Router()
const ProxyService = require("../server/proxyService");
const{services} = require("../config/services");

services.forEach(({url, path})=>{
    //app.use("/")
    routes.use(path, ProxyService.createProxy(url));
});
module.exports = routes;