const logger = (req,res, next) =>{
    const fecha = new Date().toISOString();
    const metodo = req.method;
    const url = req.originalUrl;
    console.log(`[${fecha}] ${metodo} ${url}`);
    next();
}


module.exports = {logger};
