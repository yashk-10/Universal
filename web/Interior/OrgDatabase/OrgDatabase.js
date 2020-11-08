var dbEntry = document.getElementById('databaseEntry4');
var blurBox = document.getElementById('blurBox');

function onLoadState(){
    var docRef = db.collection("middle").doc("states");
    docRef.get().then(function(doc) {
        if (doc.exists) {
            if (doc.data().databaseOn == true) {
                document.getElementById('greg').style.display = "block";
                document.getElementById('middle1').style.display = "block";
                document.getElementById('greg2').style.display = "block";
                document.getElementById('req2').style.display = "block";
                document.getElementById('flu2').style.display = "block";
                document.getElementById('date2').style.display = "block";
                document.getElementById('noDataImg').style.display = "none";
            } else {
                document.getElementById('greg').style.display = "none";
                document.getElementById('middle1').style.display = "none";
                document.getElementById('greg2').style.display = "none";
                document.getElementById('req2').style.display = "none";
                document.getElementById('flu2').style.display = "none";
                document.getElementById('date2').style.display = "none";
                document.getElementById('noDataImg').style.display = "block";
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function goToSystem(){
    window.location.href = '../OrgSystemPage/OrgSystemPage.html';
}

function databaseInfo(){
    blurBox.style.display = "none";
    db.collection("individuals").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            document.getElementById('entryAddressInput').value = doc.data().emailAddress;
            document.getElementById('entryPhoneInput').value = doc.data().phoneNumber;
            document.getElementById('entryEmergencyInput').value = doc.data().emergencyContactNumber;
            document.getElementById('entryAddressInput').value = doc.data().emailAddress;
        });
    });
    dbEntry.style.display = "block";
}

function closer(){
    blurBox.style.display = "block";
    dbEntry.style.display = "none";
}

