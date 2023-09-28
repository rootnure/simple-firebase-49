/**
 * 1. visit: https://console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to the project
 * 6. DANGER: do not publish or make firebase config to public by pushing those to github
 * 7. Go to Docs -> Build -> Authentication -> Web -> Get Started
 * 8. Export app from the firebase.init.js file: export default app
 * 9. LogIn.jsx: import getAuth form "firebase/auth"
 * 10. create const auth = getAuth(app)
 * 11. import googleAuthProvider form "firebase/auth"
 * 12. import and use signInWithPopup and pass auth & provider
 * 13. activate sign-in method (google, facebook, github etc.) from Build -> Authentication -> Sign-in method
 * 14. 
 */