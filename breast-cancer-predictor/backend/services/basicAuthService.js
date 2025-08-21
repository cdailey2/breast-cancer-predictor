const userService = require("./userService.js");
const hashService = require('./hashService.js')

function getBasicAuthConfig() {
   let basicAuthConfig = {};
   basicAuthConfig.authorizer = checkPassword;
   basicAuthConfig.challenge = true;
   basicAuthConfig.unauthorizedResponse = "Unauthorized";
   return basicAuthConfig;
}

async function checkPassword(userName,password) {
   if (userService.userMap.has(userName)) {
       let userObj = userService.userMap.get(userName);
       let passwordObject = userObj.passwordObject;
       console.log(password);
       let passwordHash = await hashService.hashPassword(passwordObject.salt,password);
       console.log(passwordHash);
       console.log(passwordObject.passwordHash);
       if (passwordHash === passwordObject.passwordHash) {
           return true;
       }
   }

   return false;
}


module.exports = {
    getBasicAuthConfig,
    checkPassword
}