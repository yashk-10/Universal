
//ChooseAcc files functions
function transitionEmp(){
    window.location.href = '../../Employees/EmployeeSignUp.html';
}

function transitionInd(){
    window.location.href = '../../Individuals/IndivSignUp.html';
}

function transitionOrg(){
    window.location.href = '../OrgSignUp.html';
}

//SignUp Page functions

var uid = '';

function signUp(){
    var email = document.getElementById('inputemail').value;
    var password = document.getElementById('inputpassword').value;
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(value){
        var user = firebase.auth().currentUser;
        
        if (user != null) {
           uid = user.uid;

        db.collection('organizations').doc(uid).set({
            email: email,
        })
        .then(function() {
            window.location.href = 'orgInfo/organizationInfo1.html';
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

//Org Info 1 Functions

function storeName(){
    var user = firebase.auth().currentUser;
        
        if (user != null) {
           uid = user.uid;
        }

    var firstName = document.getElementById('firstNameInput').value;
    var lastName = document.getElementById('lastNameInput').value;
    console.log(uid);
    db.collection('organizations').doc(uid).set({
        firstName: firstName,
        lastName: lastName
    }, { merge: true })
    .then(function() {
        window.location.href = 'organizationInfo2.html';
    })
    .catch(function(error) {
        alert("Error writing document: ", error);
    });
}

// Org Info 2 Func

function finalPage(){
    window.location.href = '../finish/FinSetUp.html';

}

function goToDash(){
    window.location.href = '../../../../Interior/ActivityOrg/activityorg.html';
}