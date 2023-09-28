import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";


const LogIn = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
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
        <div>
            {user ? <button onClick={handleSignOut} className="bg-gray-100 px-3 py-1 rounded-md border-2">Sign Out</button> :
            <button onClick={handleGoogleSignIn} className="bg-gray-100 px-3 py-1 rounded-md border-2">Google LogIn</button>}
            {user && <div>
                <h3 className="text-xl font-bold">User: {user?.displayName}</h3>
                <p>Email: {user?.email}</p>
                <img src={user?.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default LogIn;