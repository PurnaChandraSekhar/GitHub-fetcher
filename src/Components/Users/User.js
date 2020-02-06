import React from 'react';
import './Users.css'
import {Link} from 'react-router-dom';

const User = ({ img, id, name }) => {
  return (
    <div className="user--item-container">
        <img src={img} className="user--image" alt="user" />
        <input type="hidden" id={id} />
        <h2 className="user--name">{name}</h2>
        <button className="btn btn--more"><Link className="link" to={`/singleUser/${name}`}>more</Link></button>
    </div>
  )
}

export default User;