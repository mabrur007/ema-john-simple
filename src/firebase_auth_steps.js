/** 
 * 1. Create a project in console.firebase.google.com 
 * 2. Click to </> web.
 * 3. Give the project a nickname. 
 * 4. In project console, execute it - [npm install firebase]
 * 5. Initialize the firebase in - firebase_init.js - file
 * 
 * 6. Inside the [firebase_init.js] file, we will do - 
 *      6.1 const auth = getAuth(app);
 *      6.2 export default auth;
 * 
 * 7. Firebase settings > Authentication > enable email & pass auth
 * 8. Create login component, signup component, setup route
 * 9. attatch form field handler ad form submit handler
 * 
 * 10. We can prevent a form submit page reload by 
 *      const handleCreateUser = event => {
        event.preventDefault();
 *       }
 * 
 * 11. We installed - [npm install --save react-firebase-hooks]
 * */



/**
 *  Firebase Hosting steps
 * 
 * 1. npm install -g firebase-tools
 * 2. firebase login
 * 3. firebase init
 * 4. firebase deploy
 * 
 * */ 