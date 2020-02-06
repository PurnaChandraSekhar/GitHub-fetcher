import React, {Component} from 'react';

import Spinner from '../spinner/spinner';
import { Link } from 'react-router-dom';

import './Users.css';

class SingleUser extends Component {

   componentDidMount() {
     this.props.getUser(this.props.match.params.name);
   }

    render() {
        const {
            name,
            avatar_url,
            html_url,
            followers,
            following,
            hireable,
            location,
            bio,
            public_repos,
            public_gists
        } = this.props.user;

        const { isLoading } = this.props;

        if(isLoading) return <Spinner /> 

        return (
            <>
            <div className="single-user-container">
                <Link exact to="/" className="btn btn-light link">Back to home</Link>
                <p className="hire">Hireable: { '' } 
                {
                    hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />
                } </p>
                <div className="su-container">
                    <div className="su-container-1">
                        <img src={avatar_url} className="user--image" alt={name} />
                        <h3 className="user--name">{name}</h3>
                        <h3 className="su-loc-name">{location}</h3>
                    </div>
                    {bio ? 
                    <div className="su-container-1">
                        <h3 className="bio">Bio:</h3>
                        <p>{bio}</p>
                        <a href={html_url} className="link btn btn-dark">Visit GitHub</a>
                    </div> : null }
                </div>
            </div>
            <div className="badge-container">
                    <div className="badge badge-primary">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-danger">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public gists: {public_gists}</div>
            </div>
            </>
        )
    }
}

export default SingleUser;