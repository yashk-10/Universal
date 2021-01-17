function signUp(){
    var email = document.getElementById('inputemail').value;
    var password = document.getElementById('inputpassword').value;
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(value){
        alert('Sign Up Successful')
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}