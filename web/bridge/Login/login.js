function logIn(){
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    auth.signInWithEmailAndPassword(email, password)

    .then(function(value){
        window.location.href = "../../Interior/ActivityOrg/activityorg.html";
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Something went wrong while trying to log you in. ' + errorCode + errorMessage);
        // ...
      });
}