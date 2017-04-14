import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBLwL63abxJLn9UcbELIajAyN0yYk1esFU",
    authDomain: "todo-app-f4312.firebaseapp.com",
    databaseURL: "https://todo-app-f4312.firebaseio.com",
    projectId: "todo-app-f4312",
    storageBucket: "todo-app-f4312.appspot.com",
    messagingSenderId: "669301771538"
  };

  firebase.initializeApp(config);
} catch (e) {
  throw new Error(e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
