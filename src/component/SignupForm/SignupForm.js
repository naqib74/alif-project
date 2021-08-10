import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    return (
        <div className="login-page d-flex justify-content-center align-items-center container">
        <div className="mt-5 shadow p-5 w-50 h-75"  style={{ height: "100vh" }}>
            <h3 className='text-center'>Sign Up</h3>
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" required />
            <button className='btn btn-primary mt-3'>Sign Up</button>
          </div>
          <div className="form-group d-flex">
          <label htmlFor="" className="text-danger">Already have an account?</label>
            <Link to='/login'><p> Sign In</p></Link>
          </div>
        </div>
    </div>
    );
};

export default SignupForm;