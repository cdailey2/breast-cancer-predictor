function checkAuthenticate() {
    let accessToken = window.sessionStorage.getItem('authToken');
    console.log(accessToken);
    if (!checkToken(accessToken)) {
        window.location.href = "login.html";
    }
}
 
function checkToken(token) {
    if (token) {
        let tokenObject = decodeJWT(token);
        let currentTime = Math.floor(Date.now() / 1000);
        if (tokenObject.exp && (currentTime <= tokenObject.exp)) {
            console.log("valid token");
            return true;
        } else {
            console.log("invalid token");
            return false;
        }
    }
    return false;
}