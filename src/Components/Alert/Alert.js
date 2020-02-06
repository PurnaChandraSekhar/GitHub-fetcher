import React from 'react';
import './Alert.css';

const Alert = ( {alert} ) => {
    return (
      alert !== null && (
       <div className={`alert-msg alert-${alert.type}`}>
       <p className="msg">{alert.msg}</p>
       </div>
      )
    )
}

export default Alert;