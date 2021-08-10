import React from 'react';
import { Table } from 'react-bootstrap';
import bkash from '../../image/bKash-Logo.png'
import nagad from '../../image/Nagad-Logo.png'

const PaymentMassage = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>Your payment Details</h1>

            <Table className='m-5' striped bordered hover size="sm">
  <thead>
    <tr>
      <th>ID No.</th>
      <th>Payment Method</th>
      <th>Transaction number</th>
      <th>Payment Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><img style={{height:'100px',width:'100px'}} src={bkash} alt="" /></td>
      <td><p className='mt-4'>14567890</p></td>
      <td><button className='btn btn-warning mt-4'>Pending</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td><img style={{height:'100px',width:'100px'}} src={nagad} alt="" /></td>
      <td><p className='mt-4'>1456xt8yz</p></td>
      <td><button className='btn btn-success mt-4'>Done</button></td>
    </tr>
  </tbody>
</Table>
        </div>
    );
};

export default PaymentMassage;