const crypto = require('crypto');
const argon = require('argon2');

async function hashPassword(salt,password) {
       let hash = await argon.hash(password, {salt:salt});
       return hash;
}

async function createSalt() {
   let saltValue = await crypto.randomBytes(32);
   return saltValue;
}

async function createPasswordObject(password) {
   let salt =  await createSalt();
   let passwordHash = await hashPassword(salt,password);
   let passwordObject = {};
   passwordObject.salt = salt;
   passwordObject.passwordHash = passwordHash;
   return passwordObject;
}

module.exports = {
    hashPassword,
    createPasswordObject
}