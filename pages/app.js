var firebaseConfig = {
    apiKey: "AIzaSyCwSGfhREm7q0GazRi8613-Pp19KWML2DI",
    authDomain: "accounting-ee5f3.firebaseapp.com",
    databaseURL: "https://accounting-ee5f3.firebaseio.com",
    projectId: "accounting-ee5f3",
    storageBucket: "accounting-ee5f3.appspot.com",
    messagingSenderId: "467900180478",
    appId: "1:467900180478:web:fd0df242156e2719a842af",
    measurementId: "G-B32Z4FZDMH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



var myHost = location.hostname;
var myProtocol = location.protocol;
var mySite = myProtocol+'//'+myHost;
// var mySite = 'http://grap-store.com';
$(document).ready(function(){
    var app = Sammy("#main", function(){
        this.get("#/", function(context){
            home(mySite);
        });
        this.get("#sd/:monkey", function(context){
            sd(mySite);
        });
    });
    app.run("#/");
})