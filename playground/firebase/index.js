import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCc6ZBf-4X5CMTQURnm5__y3mFf40eBaCY",
  authDomain: "onyx-todo-app.firebaseapp.com",
  databaseURL: "https://onyx-todo-app.firebaseio.com",
  storageBucket: "onyx-todo-app.appspot.com",
};
firebase.initializeApp(config)

var firebaseRef = firebase.database().ref()

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Todd',
    age: 46
  }
})

var todosRef = firebaseRef.child('todos')

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val())
})

todosRef.push({
  text: 'Vacuum the house'
})

todosRef.push({
  text: 'Cut hair'
})