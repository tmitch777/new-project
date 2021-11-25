console.log(firebase)
const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebase.firestore();
const createThing = document.getElementByID('createThing');
const thingsList = document.getElementById('thingsList');

let thingsRef;
let unsubscribe;

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOut.onclick = () =>auth.signout();

auth.onAuthStateChanged(user => {
    if (user) {
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = '';
  }        
}); 


auth.onAuthStateChanged(user => {
    if (user) {
        thingsRef = db.collection('things')
        createThing.onclick = () => {
            thingsRef.add({
                uid: user.uid,
                name: faker.commerce.productName(),
                createdAt: serverTimestamp()
            });
        }
    unsubscribe = thingsRef
        .where('uid', '==', 'user.uid')
        .orderBy('createdAt')
        const items = querySnapshot.docs.map();
            return `<li>${ doc.data() }</li> `
        }); 
        thingsList.innerHTML = items.join('');
    }); 