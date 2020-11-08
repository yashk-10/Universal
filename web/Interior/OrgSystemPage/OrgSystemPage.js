var blurBox = document.getElementById('blurBox');
var newSystem = document.getElementById('newSystem');
var compDetails = document.getElementById('compDetails');
var compCreComplete = document.getElementById('compCreComplete');



function newSystemComponent(){
    blurBox.style.display = "none";
    newSystem.style.display = "block";
}

function nextPage(){
    newSystem.style.display = "none";
    compDetails.style.display = "block";
}

function nextButton(){
    compDetails.style.display = "none";
    compCreComplete.style.display = "block";
}

function closer(){
    newSystem.style.display = 'none';
    compDetails.style.display = 'none';
    compCreComplete.style.display = 'none';
    blurBox.style.display = 'block';
}

function databaseRouter(){
    console.log("latch");
    window.location.href = '../OrgDatabase/OrgDatabase.html';
}