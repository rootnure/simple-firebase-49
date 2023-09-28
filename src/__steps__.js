/**
 *                ------------------------
 *                  INITIAL INSTALLATION
 *                ------------------------
 * 1. visit: https://console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to the project
 * 6. DANGER: do not publish or make firebase config to public by pushing those to github
 *                -----------------------
 *                      INTEGRATION
 *                -----------------------
 * 7. Go to Docs -> Build -> Authentication -> Web -> Get Started
 * 8. Export app from the firebase.init.js file: export default app
 * 9. LogIn.jsx: import getAuth form "firebase/auth"
 * 10. create const auth = getAuth(app)
 *                -----------------------
 *                PROVIDER SETUP (Google)
 *                -----------------------
 * 11. import GoogleAuthProvider form "firebase/auth"
 * 11-5. create const googleProvider = new GoogleAuthProvider();
 * 12. import and use signInWithPopup and pass auth & googleProvider
 * 13. activate sign-in method [auth provider] (Google) from Build -> Authentication -> Sign-in method
 *                -----------------------
 *                PROVIDER SETUP (GitHub)
 *                -----------------------
 * 11. import GithubAuthProvider form "firebase/auth"
 * 11-5. create const githubProvider = new GithubAuthProvider();
 * 12. import and use signInWithPopup and pass auth & githubProvider
 * 13. activate sign-in method [auth provider] (GitHub) from Build -> Authentication -> Sign-in method
 * 13-5. create app, provide redirect url, client id, client secret
 *                ------------------------
 *             ACTIVATE DOMAIN & ADD SIGN OUT
 *                ------------------------
 * 14. Activate authorized domain (localhost, custom-domain.com etc.)
 * 15. import and use signOut and pass auth to sign-out
 */