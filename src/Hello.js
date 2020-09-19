import React from 'react';
import './Hello.css';

function Hello({firstname}) {
  return <p className="myname">
           This is a para in Hello Tag name : Zia Khan{firstname}     
         </p>
}

export default Hello;
