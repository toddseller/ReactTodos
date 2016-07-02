import firebase from 'firebase'

try {
  var config = {
    apiKey: "AIzaSyCc6ZBf-4X5CMTQURnm5__y3mFf40eBaCY",
    authDomain: "onyx-todo-app.firebaseapp.com",
    databaseURL: "https://onyx-todo-app.firebaseio.com",
    storageBucket: "onyx-todo-app.appspot.com",
  };
  firebase.initializeApp(config)
} catch (e) {

}

export var firebaseRef = firebase.database().ref()
export default firebase