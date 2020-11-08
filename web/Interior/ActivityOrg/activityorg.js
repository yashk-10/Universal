var blurBox = document.getElementById('blurBox');
var destination = document.getElementById('destination');
var security = document.getElementById('security');
var custConf = document.getElementById('customerConf');
var reqComplete = document.getElementById('reqComplete');
var orgButton = document.getElementById('orgButton');
var compCreComplete = document.getElementById('compCreComplete');
var reqButton = document.getElementById('reqbutton');
var requestMade = document.getElementById('requestMade');
var reqDiv = document.getElementById('reqDiv');

function changePic1(){
    document.getElementById("circle1").src = "one.svg";
}

function changePic2(){
    document.getElementById("circle2").src = "two.svg";
}

function sendToDB(){

    // Set the "capital" field of the city 'DC'
    db.collection('middle').doc('ground').update({
        openRequests: true
    })
    .then(function() {
        custConf.style.display = 'block';
        security.style.display = 'none';

        db.collection("middle").doc("ground")
        .onSnapshot(function(doc) {
        if ((doc.data().customerAccepted) == true) {
            reqComplete.style.display = "block";
            custConf.style.display = 'none';
            security.style.display = 'none';
        }
    });
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

function backToMain(){
    reqComplete.style.display = "none";
    reqButton.style.display = "none";
    blurBox.style.display = "block";
    requestMade.style.display = "block";
    reqDiv.style.display = "none";
    document.getElementById('sadFace').style.display = "none";
}

function newRequest(){
    destination.style.display = 'block';
    blurBox.style.display = 'none';
}

function closer(){
    destination.style.display = 'none';
    security.style.display = 'none';
    custConf.style.display = 'none';
    blurBox.style.display = 'block';
}

function securityLoad(){
    destination.style.display = 'none';
    security.style.display = 'block';
}

function continuer(){
    compCreComplete.style.display = 'block';
    security.style.display = 'none';
}

function complete(){
    compCreComplete.style.display = 'none';
    reqButton.style.display = "none";
    blurBox.style.display = "block";
    requestMade.style.display = "block";
    reqDiv.style.display = "none";

}

function systemPageLoad(){
    console.log("latch");
    window.location.href = '../OrgSystemPage/OrgSystemPage.html';
}


