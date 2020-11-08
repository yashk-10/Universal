var blurBox = document.getElementById('blurBox');
var destination = document.getElementById('destination');
var security = document.getElementById('security');
var custConf = document.getElementById('customerConf');
var reqComplete = document.getElementById('reqComplete');
var orgButton = document.getElementById('orgButton');
var compCreComplete = document.getElementById('compCrecomplete');
var reqButton = document.getElementById('reqButton');




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
    custConf.style.display = 'block';
    security.style.display = 'none';
}

function complete(){
    custConf.style.display = 'none';
    reqButton.style.display = "none";
    blurBox.style.display = "block";

}

function doneFunc(){
    compCreComplete.style.display = "none";
    blurBox.style.display ="block";

}

function systemPageLoad(){
    console.log("latch");
    window.location.href = '../OrgSystemPage/OrgSystemPage.html';
}


