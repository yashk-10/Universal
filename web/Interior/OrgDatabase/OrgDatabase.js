var dbEntry = document.getElementById('databaseEntry4');
var blurBox = document.getElementById('blurBox');

function databaseInfo(){
    blurBox.style.display = "none";
    dbEntry.style.display = "block";
}

function closer(){
    blurBox.style.display = "block";
    dbEntry.style.display = "none";
}