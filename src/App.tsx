import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import PaymentDetails from './components/PaymentDetailsComponent/PaymentDetails';

function App() {
  return (
    <div className="container">
        <HeaderComponent />
        <PaymentDetails />
    </div>
  );
}

export default App;
