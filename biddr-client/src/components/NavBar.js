import React from "react";
import {NavLink} from 'react-router-dom';
import { Session } from "../requests";
import styled from 'styled-components';


const NavBar = ({currentUser, onSignOut}) => {
    const handleSignOut = () => {
        Session.destroy().then(()=>{
            onSignOut()
        })
    }

    return(

       <nav style = {{paddingBottom: "1em" , backgroundColor: "lightgrey", justifyContent: "center"}}>
            <img style = {{marginLeft: "1em",marginTop: "1em",width: "50px",height: "50px"}} src="https://cpng.pikpng.com/pngl/s/4-44637_us-coins-clipart.png" alt="logo"/>
           <NavLink style = {{marginLeft: "3em"}} to='/' activeStyle>Home</NavLink>
            
           <NavLink  style = {{marginLeft: "3em"}} to='/auctions' activeStyle>Auctions</NavLink> 
           
           {
               currentUser ? (
                   <React.Fragment>
                       
                       <NavLink  style = {{marginLeft: "3em"}} to='/auctions/new' activeStyle>Create an Auction</NavLink> 
                       
                       <span  style = {{marginLeft: "3em"}}>Welcome {currentUser.first_name + " " + currentUser.last_name}</span>
                        
                        <button  style = {{marginLeft: "3em"}} onClick = {handleSignOut}>Sign Out</button>
                   </React.Fragment>
               ):(
                <>
                   <NavLink  style = {{marginLeft: "3em"}} to='Sign_in' activeStyle>Sign In</NavLink>
                   <NavLink  style = {{marginLeft: "3em"}} to='Sign_up' activeStyle>Sign Up</NavLink>
               </>
               )
           }
       </nav> 
    )
}

export default NavBar;

