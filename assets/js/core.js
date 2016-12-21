var config = {
    apiKey: "AIzaSyCPXkzFRMtVZTc_drX1cDuLrJhSCE8ObaI",
    authDomain: "zydisplay-e7c43.firebaseapp.com",
    databaseURL: "https://zydisplay-e7c43.firebaseio.com",
    storageBucket: "zydisplay-e7c43.appspot.com",
    messagingSenderId: "524898880717"
};
firebase.initializeApp(config);
console.log('%c>> CORE LOADED.', 'color: #ff3e3e;');
$("#header-text-secondary").on("click", "button#login", function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
});
