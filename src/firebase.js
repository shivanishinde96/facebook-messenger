import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    
        apiKey: "AIzaSyCh85CFirM8wlBYXLcvXPwhXPMtvB_Jv-c",
        authDomain: "facebook-messenger-clone-81564.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-81564.firebaseio.com",
        projectId: "facebook-messenger-clone-81564",
        storageBucket: "facebook-messenger-clone-81564.appspot.com",
        messagingSenderId: "83085583963",
        appId: "1:83085583963:web:8e48493f769a6464da817e",
        measurementId: "G-H6996LH7TK"
    
})

const db=firebaseApp.firestore()

export default db