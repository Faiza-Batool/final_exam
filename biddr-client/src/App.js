import './App.css';
import React, {Component} from 'react';
import AuctionShowPage from './components/AuctionShowPage';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionNewPage from './components/AuctionNewPage';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import {User} from "./requests";
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import AuthRoute from './components/AuthRoute';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
   
      user: null
    }
  }

  componentDidMount(){
    this.getCurrentUser() 
   }
 
   getCurrentUser = () => {
     return User.current().then(user => {
       console.log(user)
       if (user?.id){
         this.setState(state => {
           return{user}
         })
       }
     })
   }

   onSignOut = () => {this.setState({user : null })}

  render(){
    return(
      <BrowserRouter>
      <NavBar  currentUser={this.state.user} onSignOut={this.onSignOut}/>
      <Route exact path= '/' component = {Welcome}/>
        
        <Switch>
        <AuthRoute isAuthenticated={!!this.state.user} exact path='/auctions' component = {AuctionIndexPage} ></AuthRoute>
        <AuthRoute isAuthenticated={!!this.state.user} path= '/auctions/new'  component={AuctionNewPage}></AuthRoute>    
        <AuthRoute isAuthenticated={!!this.state.user} path='/auctions/:id' component={AuctionShowPage} ></AuthRoute>  

        <Route exact path ='/sign_in' 
          render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurrentUser}/>}>
        </Route>

        <Route exact path ='/sign_up' 
          render={(routeProps) => <SignUpPage {...routeProps} onSignUp={this.getCurrentUser}/>}>
        </Route>

        {/* <Route path='/add_bid' component={BidCreateForm}/> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
