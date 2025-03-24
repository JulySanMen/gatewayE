const express = require('express');
const cors = require('cors');
const {logger} = require('../middlewares/logger');
const gatewayRoutes = require('../routes/gateway.routes');
class Server{
    constructor(port){
        this.app = express();
        this.port = port;
        this.midddlewares();
        this.routes();
    }
    midddlewares(){
        this.app.use(cors());
        //this.app.use(express.json());
        this.app.use(logger);
    }
    routes(){
        this.app.use(gatewayRoutes);
    }
    start(){
        this.app.listen(this.port,()=>console.log("Gatewaycorrinedo en http://localhost:"+this.port));
    }
} 
module.exports = Server;