import firebase from 'firebase'
import config from './config.j'

firebase.initializeApp(config)

const db = firebase.firestore()
const auth = firebase.auth()
const ordersCollection = db.collection('orders')

const loginGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  firebase.auth().getRedirectResult()
}

const logoutUser = () => {
  return firebase.auth().signOut()
}

const retrieveUser = () => {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      resolve(user)
    })
  })
}

export {
  db,
  auth,
  firebase,
  ordersCollection,
  loginGoogle,
  logoutUser,
  retrieveUser
}