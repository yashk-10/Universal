var uid = '';

function signUp(){
    var email = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(value){
        var user = firebase.auth().currentUser;
        
        if (user != null) {
           uid = user.uid;

        db.collection('organizations').doc(uid).set({
            email: email,
        })
        .then(function() {
            window.location.href = '../Sign%20Up/activityPage.html';
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        }

        
        
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}