function middleware(req, res, next){
    req.body = {string : "testing"}
    next()

}

module.exports = middleware