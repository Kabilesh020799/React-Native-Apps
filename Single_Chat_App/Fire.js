import firebase from "firebase";
import { TouchableHighlightBase } from "react-native";

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCIwGOTHc22LYt6gA7PXihy37WhyYu5an0",
        authDomain: "chatapp-51d80.firebaseapp.com",
        databaseURL: "https://chatapp-51d80.firebaseio.com",
        projectId: "chatapp-51d80",
        storageBucket: "chatapp-51d80.appspot.com",
        messagingSenderId: "865038894586",
        appId: "1:865038894586:web:2643005e6f475339741043",
        measurementId: "G-RHMVC6Y71W",
      });
    }
  };
  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };
  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };
      this.db.push(message);
    });
  };
  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);
    return {
      _id,
      createdAt,
      text,
      user,
    };
  };
  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };
  off() {
    this.db.off();
  }
  get db() {
    return firebase.database().ref("messages");
  }
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}
export default new Fire();
