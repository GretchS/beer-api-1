const auth = require('./util')

module.exports = {
    logger,
    authenticate,
    authorize
}


function logger(req, res, next){
  console.log(new Date(), req.method, req.url)
  next()
}

function authenticate(req, res, next) {
    const {email, password} = req.body

    const authed = auth.isAuthenticUser(email, password)
    
    if(!authed) {
        next(new Error('Not authorized!'))
    }

    next()
}

function authorize(req, res, next) {
    const authHeader = req.get('Authorization')
    const [,token] = authHeader.split(' ') //['Bearer', '007']

    if(token !== '007') {
        next(new Error('You are not authorized'))
    }

    next()
}

