var uid = '';

function signUp(){
    var email = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(value){
        var user = firebase.auth().currentUser;
        
        if (user != null) {
           uid = user.uid;

        db.collection('individuals').doc(uid).set({
            email: email,
            password: password
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

function saveDetails(){
    var fname = document.getElementById('firstNameInput').value;
    var lname = document.getElementById('lastNameInput').value;
    var emailAdd = document.getElementById('emailAddressInput').value;
    var homeAdd = document.getElementById('homeAddressInput').value;
    var phoneNum = document.getElementById('phoneNumberInput').value;
    var emergCont = document.getElementById('emergencyContactInput').value;

    var user = firebase.auth().currentUser;
        
        if (user != null) {
           uid = user.uid;
        }
    
    db.collection('individuals').doc(uid).set({
            firstName: fname,
            lastName: lname,
            emailAddress: emailAdd,
            homeAddress: homeAdd,
            phoneNumber: phoneNum,
            emergencyContactNumber: emergCont
    }, { merge: true })
    .then(function() {
        document.getElementById('saveButton').innerHTML = 'Data Saved';
        
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

function setSnapshot(){
    db.collection("middle").doc("ground")
    .onSnapshot(function(doc) {
        if ((doc.data().openRequests) == true) {
            window.location.href = '../Request/request.html';
        }
    });
}

function addInfo(){
    window.location.href = '../AdditionalInfo/Additionalinfo.html';
}

function updateCustomerDB(){
    db.collection('middle').doc('ground').update({
        customerAccepted: true
    })
    .then(function() {
        window.location.href = '../InfoTransferred/InfoTransferred.html';
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

function mainPageTrans(){
    window.location.href = '../Sign Up/activityPage.html';
}

function noCOVID(){
    document.getElementById('no').style.backgroundColor = '#c80735';
    document.getElementById('no').style.color = '#FFFFFF';
}