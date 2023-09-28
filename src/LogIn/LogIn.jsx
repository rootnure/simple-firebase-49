import { /* FacebookAuthProvider, */ GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";


const LogIn = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider(); // google
    const githubProvider = new GithubAuthProvider(); // github
    // const facebookProvider = new FacebookAuthProvider(); // facebook
    const twitterProvider = new TwitterAuthProvider(); // twitter

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    /* const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                // const loggedInUser = result.user;
                // console.log(loggedInUser);
                // setUser(loggedInUser);
                console.log(result);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    } */

    const handleTwitterSignIn = () => {
        signInWithPopup(auth, twitterProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null);
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="my-4 space-x-6">
            {user ? <button onClick={handleSignOut} className="bg-gray-100 px-3 py-1 rounded-md border-2">Sign Out</button> :
            <>
                <button onClick={handleGoogleSignIn} className="bg-gray-100 px-3 py-1 rounded-md border-2">Google LogIn</button>
                <button onClick={handleGithubSignIn} className="bg-gray-100 px-3 py-1 rounded-md border-2">Github LogIn</button>
                {/* <button onClick={handleFacebookSignIn} className="bg-gray-100 px-3 py-1 rounded-md border-2">Facebook LogIn</button> */}
                <button onClick={handleTwitterSignIn} className="bg-gray-100 px-3 py-1 rounded-md border-2">Twitter LogIn</button>
            </>}
            {user && <div>
                <h3 className="text-xl font-bold">User: {user?.displayName}</h3>
                <p>Email: {user?.email}</p>
                <img src={user?.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default LogIn;