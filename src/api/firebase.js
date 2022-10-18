import * as firebase from 'firebase/app'
import  { getFirestore } from 'firebase/firestore/lite'
import settings from './settings'

const firebasApp = firebase.initializeApp(settings)

export const db = getFirestore(firebasApp)
export default firebasApp