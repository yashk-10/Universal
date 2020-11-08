var blurBox = document.getElementById('blurBox');
var newSystem = document.getElementById('newSystem');
var compDetails = document.getElementById('compDetails');
var compCreComplete = document.getElementById('compCreComplete');
var right = document.getElementById("right");

function onLoadState(){
    var docRef = db.collection("middle").doc("states");
    docRef.get().then(function(doc) {
        if (doc.exists) {
            if (doc.data().componentOn == true) {
                compCreComplete.style.display = 'none';
                blurBox.style.display = 'block';
                document.getElementById('cusIntComp').style.display = "none";
                document.getElementById('cusEntry').style.display = "block";
                document.getElementById('accessDB').style.display = 'block';
            } else {
                document.getElementById('cusIntComp').style.display = 'block';
                document.getElementById('cusEntry').style.display = "none";
                document.getElementById('accessDB').style.display = 'none';
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function goToActivity(){
    window.location.href = '../ActivityOrg/activityorg.html';
}

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
    db.collection("middle").doc("states").update({
        componentOn: true
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });


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