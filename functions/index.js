const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.myfunction = functions.firestore.document("users/{user}/history/{doc}").onWrite((change, context) => {
    console.log(change.after.data());

    admin.firestore.collection('shortened').doc(change.after.data().outputUrl.split('https://bogi-noo.web.app/')[1]).set({
        inputUrl: change.after.data().inputUrl,
        outputUrl: change.after.data().outputUrl
    });

});


// exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
//     // ...
//     const email = user.email;
// });

// exports.eventMessage = functions.firestore.document("messages/{doc}").onWrite((change, context) => {
//     // let datas = await admin.auth().listUsers(1000).then((res) => res.users);

//     console.log('message data', change.after.data())
//     console.log(context)
// });

// exports.addMessage = functions.https.onRequest(async (req, res) => {
//     // Grab the text parameter.
//     const original = req.query.text;
//     // Push the new message into Cloud Firestore using the Firebase Admin SDK.
//     const writeResult = await admin.firestore().collection('messages').add({original: original});
//     // Send back a message that we've succesfully written the message
//     res.json({result: `Message with ID: ${writeResult.id} added.`});
// });