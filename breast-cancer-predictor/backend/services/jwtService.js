const jwt = require('jsonwebtoken');

const basicAuthService = require('./basicAuthService.js');
const userService = require('./userService.js');

const jwtSecretKey = "secretKeyForToken";
const expiresIn = '5m';

function generateJWT(jsonObject) {
    console.log(jsonObject);
    let token = jwt.sign(jsonObject,jwtSecretKey,{ expiresIn});
    console.log(token);
    return token;
}

function verifyJWT(token) {
    try {
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            //Access Granted
            return true;
        }else{
            // Access Denied
            return false;
        }
    } catch (error) {
        // Access Denied
        return false;
    }
}

async function authenticateUserWithJWT(userName,userPassword) {
    let authenticateResult = {};
    authenticateResult.success = false;
    if (await basicAuthService.checkPassword(userName,userPassword)) {
        authenticateResult.success=true;
        let user = {...userService.userMap.get(userName)};
        delete user.passwordObject
        authenticateResult.token = generateJWT(user);
    }
    return authenticateResult;
}

module.exports = {
    authenticateUserWithJWT,
    verifyJWT
}