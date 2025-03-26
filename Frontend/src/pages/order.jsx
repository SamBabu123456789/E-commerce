// OrderConfirmation.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/nav';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addressId, userEmail } = location.state ;
console.log(addressId)
console.log(userEmail)
return(<>order conformation</>)
   

};

export default OrderConfirmation;