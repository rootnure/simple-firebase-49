import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";


const LogIn = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="bg-gray-100 px-3 py-1 rounded-md border-2">Google LogIn</button>
        </div>
    );
};

export default LogIn;