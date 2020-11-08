var blurBox = document.getElementById('blurBox');
var newSystem = document.getElementById('newSystem');
var compDetails = document.getElementById('compDetails');
var compCreComplete = document.getElementById('compCreComplete');
var right = document.getElementById("right");



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

function doneFunc(){
    compCreComplete.style.display = 'none';
    blurBox.style.display = 'block';
    document.getElementById('cusIntComp').style.display = "none";
    document.getElementById('cusEntry').style.display = "block";
    document.getElementById('accessDB').style.display = 'block';

}

function databaseRouter(){
    console.log("latch");
    window.location.href = '../OrgDatabase/OrgDatabase.html';
}

function openComp(){
    document.getElementById('openComp').style.background = '#FBB70A';
    document.getElementById('openComp').style.color = '#FFFFFF';
}

function textComp(){
    document.getElementById('textInputButton').style.background = '#04D6B0';
    document.getElementById('textInputButton').style.color = '#FFFFFF';
}