// Initialize Firebase
var config = {
    apiKey: "AIzaSyDtIrG_4599tDvKpqtGabfk0gRGDOuGkfs",
    authDomain: "fungjaimun4.firebaseapp.com",
    databaseURL: "https://fungjaimun4.firebaseio.com",
    projectId: "fungjaimun4",
    storageBucket: "fungjaimun4.appspot.com",
    messagingSenderId: "990012855961"
};
firebase.initializeApp(config);
var db = firebase.firestore();

const sendMsg = () => {
    const msg = $('#message').val()
    if (msg !== '') {
        db.collection("messages").add({
            message: msg,
            date_created: Date.now()
        })
        $('#message').val('')
    }
}

const readData = () => {
db.collection("messages").orderBy("date_created")
    .onSnapshot({
        includeMetadataChanges: true
    }, function (docs) {
        $('#list-chat').html('')
        let i = 0;
        docs.forEach((doc) => {
            $('#list-chat').append(`<li class=\"collection-item red lighten-${(i % 3 + 3)}\">${doc.data().message}</li>`)
            i++
        })
    });
}

readData()