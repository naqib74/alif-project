import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import icon from '../../image/google-icon.png'
import firebaseConfig from './FirebaseConfig';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';


const LoginForm = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    const history = useHistory()
    const location =useLocation()

    const { from } = location.state || { from: { pathname: "/payment" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig)
        
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          history.replace(from)
        //   storeAuthToken();
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
    return (
        <div className="login-page d-flex justify-content-center align-items-center container">
        <div className="mt-5 shadow p-5 w-50 h-75"  style={{ height: "100vh" }}>
            <h3 className='text-center'>Sign In</h3>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" required />
            <button className='btn btn-primary mt-3'>Sign In</button>
          </div>
          <div className="form-group d-flex mt-3">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
            <Link to='/signup'><p>Create An Account</p></Link>
          </div>
          <div className="from-group mt-3">
           
            <button style={{ backgroundColor:'#251D58',color:'white'}} className="btn" onClick={handleGoogleSignIn}> <img style={{height:'30px',width:'30px',marginRight:'20px'}} src={icon} alt=""/>Google Sign in</button>
          </div>
        </div>
    </div>
    );
};

export default LoginForm;