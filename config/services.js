const { head } = require("../routes/gateway.routes");

const services = [
    {
        name:"arcade",
        url:"http://localhost:3000",
        path:"/api/arcade",
        headers:{
            "Content-Type":"application/json",
        }
    },
    {
        name:"user",
        url:"http://localhost:4000",
        path:"/api/users",
        headers:{
            "Content-Type":"application/json",
        }
    }
]

module.exports = {services};