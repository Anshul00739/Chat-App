import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

const config = {
  apiKey: 'AIzaSyCyZqKHnN_KlUJ3OP4ts6KxVvD-eUtBnBk',
  authDomain: 'chat-web-app-17923.firebaseapp.com',
  projectId: 'chat-web-app-17923',
  storageBucket: 'chat-web-app-17923.appspot.com',
  messagingSenderId: '546525058418',
  appId: '1:546525058418:web:5367f9a0473687fdc279eb',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
