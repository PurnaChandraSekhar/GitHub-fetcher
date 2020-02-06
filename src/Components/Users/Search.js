import React, { Component } from 'react';
import './Users.css';
import { PropTypes } from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }

    handleClick = (e) => {
        if(e.target.previousElementSibling.getAttribute('value') === "") {
            this.props.showAlert("Please provide proper values", "light");
        }else {
            e.preventDefault();
            this.props.searchUsers(this.state.searchTerm);
            this.setState( {searchTerm: ""} );
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="search-container">
                  <input type="search" name="searchTerm" autoComplete="off" className="search-bar" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Search users.." />
                  <button className="btn btn-search" onClick={this.handleClick}>Search</button>    
                  {this.props.users.length>0 ? 
                  <button className="btn btn-clear" onClick={this.props.handleClear}>Clear</button> 
                  : "" }   
            </div>
        )
    }
}

export default Search;