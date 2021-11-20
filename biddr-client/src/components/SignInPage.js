import React from "react";
import { Session } from "../requests";

function SignInPage(props){
    const { onSignIn } = props;

    function handleSubmit(event){
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget)
        const params = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        Session.create(params).then(data => {
            console.log(data)
            if (data.id){
                onSignIn()
               
                props.history.push('/')
            }
        })
    }
    return (
        <main>
            <h1 style = {{marginLeft: "1em"}} >Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style = {{marginLeft: "1em"}} htmlFor="email">Email</label>
                    <br/>
                    <input style = {{marginLeft: "1em"}} type="email" name="email" id="email" />   
                </div>
                <div>
                    <label style = {{marginLeft: "1em"}} htmlFor="password">Password</label>
                    <br/>
                    <input style = {{marginLeft: "1em"}} type="password" name="password" id="password" />   
                </div>
                
                <input style= {{marginLeft: "1em", background: "dimgray", fontFamily: "fantasy", alignItems: 'center',justifyContent: 'center',color: "white", borderColor: "darkgray", fontWeight: "bold" }} type="submit" value="Sign In" />
            </form>
        </main>
    )
}

export default SignInPage;

