import React from 'react'

import './Users.css';
import User from './User';

const Users = (props) => {
    
        const users = props.users.map( user => (
            <User key={user.id} 
             id={user.id}
             name={user.login}
             img={user.avatar_url}
             link={user.html_url} />
        ));

        return (
           <div className="users--container">
                { users}
           </div>
        )
    

}

export default Users;



