import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginForm from './component/LoginForm/LoginForm';
import { createContext , useState } from 'react';
import SignupForm from './component/SignupForm/SignupForm';
import PaymentOption from './component/PaymentOption/PaymentOption';
import PaymentForm from './component/PaymentForm/PaymentForm';
import PaymentMassage from './component/PaymentMassage/PaymentMassage';

import Menubar from './component/Menubar/Menubar';

export const UserContext=createContext()
function App() {
  const [loggedInUser , setLoggedInUser] =useState({})
  console.log(loggedInUser)
  return (
    <UserContext.Provider value ={[loggedInUser , setLoggedInUser]}>
      <Menubar></Menubar>
    
    <Router>
      <Switch>
        <Route path='/login'>
        <LoginForm></LoginForm>
        </Route>
        <Route path='/signup'>
        <SignupForm></SignupForm>
        </Route>
        <Route exact path='/'>
        <SignupForm></SignupForm>
        </Route>
        <Route path='/payment'>
        <PaymentOption />
        </Route>
        <Route path='/paymentform'>
       <PaymentForm />
        </Route>
        <Route path='/paymentmassage'>
       <PaymentMassage />
        </Route>
      </Switch>
    </Router>
     
    
    </UserContext.Provider>
  );
}

export default App;
