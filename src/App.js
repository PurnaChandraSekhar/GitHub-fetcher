import React, {Component} from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/pages/About';
import Users from './Components/Users/Users';
import SingleUser from './Components/Users/SingleUser';
import Spinner from './Components/spinner/spinner'
import Navbar from './Components/Layouts/Navbar';
import Alert from './Components/Alert/Alert';
import Search from './Components/Users/Search';
import ErrorBoundary from './ErrorBoundary';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      user:{},
      alert: null,
      error:false
    }
  }

  //Github users search func
  handleSearch = async (text) => {
    this.setState({isLoading: true});

    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`; 
    await fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      users: data.items,
      isLoading: false
    }))
    .catch(err => this.setState({ error:true, isLoading: false }) );
  
  }

  //get single user

  getUser = async (username) => {
    this.setState({ isLoading: true });

    const url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`; 
    const res = await fetch(url);
    const resData = await res.json();
    this.setState({ user: resData, isLoading:false });
    
  }

  //clear users
  handleClear = () => {
    this.setState( { users: [], isLoading:false } )
  }

  //display error msg
  handleShowAlert = (msg, type) => {
   this.setState( { alert: { msg,type } } );

   setTimeout( () => this.setState({alert: null}), 4000);
  }

  render() {
    const { alert, user,users, isLoading, error } = this.state
  return (
    <Router>
    <div className="App">
       <Navbar title="GitHub Fetcher" />
       <Switch>
         <Route exact path="/" render={props => (
           <>
              <ErrorBoundary>
                <Search searchUsers={this.handleSearch} handleClear={this.handleClear}
                users={users} showAlert={this.handleShowAlert} />
              </ErrorBoundary>
              {isLoading ? <Spinner /> : error ? <h1 style={{textAlign:"center"}}>Something went wrong</h1> : <Users users={users} /> }
              <Alert alert={alert} />
           </>
         )} />
         <Route exact path="/about" component={About} />
         <Route exact path="/singleUser/:name" render={ (props) => ( <SingleUser {...props} user={user} getUser={this.getUser} loading={isLoading} /> ) }  />
        </Switch>
    </div>
    </Router>
  );
 }
}

export default App;
