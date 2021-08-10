import React from 'react';
import { Link } from 'react-router-dom';

const PaymentForm = () => {
    return (
        <div className="login-page d-flex justify-content-center align-items-center container">
        <div className="mt-5 shadow p-5 w-50 h-75"  style={{ height: "100vh" }}>
            <h3 className='text-center'>Payment Form</h3>
          <div className="form-group">
            <label htmlFor="">Number</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Transaction number</label>
            <input type="number" className="form-control" />
           <Link to='/paymentmassage'> <button className='btn btn-primary mt-3'>Pay</button></Link>
          </div>
        </div>
    </div>
    );
};

export default PaymentForm;