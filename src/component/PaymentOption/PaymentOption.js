import React from 'react';
import bkash from '../../image/bKash-Logo.png'
import rocket from '../../image/rocket-logo.png'
import nagad from '../../image/Nagad-Logo.png'
import { Link } from 'react-router-dom';

const PaymentOption = () => {
    return (
        <div>
            <h2 className='text-center mt-5'>Choose your payment option</h2>
            <div className='d-flex justify-content-center align-items-center mt-3'>
               <Link to='/paymentform'> <img style={{height:'200px',width:'200px'}} src={bkash} alt="" /></Link>
               <Link to='/paymentform'> <img style={{height:'130px',width:'200px'}} src={rocket} alt="" /></Link>
               <Link to='/paymentform'> <img style={{height:'200px',width:'200px'}} src={nagad} alt="" /></Link>
            </div>
        </div>
    );
};

export default PaymentOption;