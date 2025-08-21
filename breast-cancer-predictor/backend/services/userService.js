const hashService = require ('./hashService');

let userMap = new Map();

initializeUserList();

function initializeUserList() {
    createUser("shudson","password1");
    createUser("alewis","password2");
}

async function createUser(userName,userPassword) {
    let newId = userMap.size+1;
    let newUser = {
        userId : newId,
        userName : userName,
        passwordObject : await hashService.createPasswordObject(userPassword)
    }
    userMap.set(userName,newUser);
    return newUser
}

module.exports = {
    userMap
}