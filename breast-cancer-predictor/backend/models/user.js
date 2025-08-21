class User {
    userId = null;
    name = null;
    userPassword = null;

    constructor (id,name,password) {
        this.userId = id;
        this.name = name;
        this.userPassword = password;
    }

}

module.exports = User;