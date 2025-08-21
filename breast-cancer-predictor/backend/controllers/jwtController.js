const jwtService = require('../services/jwtService');

async function authenticateWithJWTAPI(req,res) {
    let userName = req.body.userName;
    let userPass = req.body.userPassword;
    let result = await jwtService.authenticateUserWithJWT(userName,userPass);
    res.json(result);
}

function verifyTokenAPI(req,res,next) {
    let authHeader = req.headers.authorization;
    let valid = false;
    if (authHeader) {
        let token = authHeader.split(' ')[1];
        let verified = jwtService.verifyJWT(token);
        if (verified) {
            next();
            valid = true;
        }
    }
    if (!valid) res.status(401).send("Invalid Token")
}

function exampleAPICall(req,res) {
    res.json("{success:true}");
}

module.exports = {
    authenticateWithJWTAPI,
    verifyTokenAPI,
    exampleAPICall
}