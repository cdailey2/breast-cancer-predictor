function doLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!username || !password) {
        toggleLoginError(true);
    } else {
        toggleLoginError(false);
        callAuthenticate(username,password);
    }

}

function toggleLoginError(showMessage) {
    let loginMessage = document.getElementById("message");
    if (showMessage) {
        loginMessage.classList.remove('hidden');
    } else {
        loginMessage.classList.add('hidden');
    }
}

async function callAuthenticate(username,password) {
    let authenticateBody = {userName:username,userPassword:password};
    let authenticateResponse = await makeAPICall("http://localhost:9005/authenticate","post",undefined,authenticateBody);
    if (!authenticateResponse || !authenticateResponse.token) {
        toggleLoginError(true);
    } else {
        window.sessionStorage.setItem("authToken",authenticateResponse.token);
        window.location.href = "model-selection.html"
    }
}
 