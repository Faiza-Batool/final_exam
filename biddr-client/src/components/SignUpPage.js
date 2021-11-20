import React from 'react';
import { User } from '../requests';

const SignUpPage = (props) => {
    const { onSignUp } = props;

    const handleSubmit = event => {
        const { currentTarget } = event
        event.preventDefault()
        const formData = new FormData(currentTarget)
        const params = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        User.create(params).then(user => {
            if (user?.id){
                onSignUp() //store the user in the App state
                props.history.push('/') //navigate to index
            }
        })
    }
    return(
        <main>
            <h1 style = {{marginLeft: "1em"}}>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label  style = {{marginLeft: "1em"}} htmlFor="first_name">First Name</label>
                    <input  style = {{marginLeft: "1em"}} type="text" name="first_name" id="first_name" />   
                </div>
            
                <div>
                    <label  style = {{marginLeft: "1em"}} htmlFor="last_name">Last Name</label>
                    <input  style = {{marginLeft: "1em"}} type="text" name="last_name" id="last_name" />   
                </div>
                
                <div>
                    <label  style = {{marginLeft: "1em"}}htmlFor="email">Email</label>
                    <input  style = {{marginLeft: "1em"}} type="email" name="email" id="email" />   
                </div>
                
                <div>
                    <label  style = {{marginLeft: "1em"}} htmlFor="password">Password</label>
                    <input  style = {{marginLeft: "1em"}} type="password" name="password" id="password" />   
                </div>
                
                <div>
                    <label  style = {{marginLeft: "1em"}} htmlFor="password_confirmation">Password Confirmation</label>
                    <input  style = {{marginLeft: "1em"}} type="password" name="password_confirmation" id="password_confirmation" />   
                </div>
                <br/>
                <input style= {{marginLeft: "1em", background: "dimgray", fontFamily: "fantasy", alignItems: 'center',justifyContent: 'center',color: "white", borderColor: "darkgray", fontWeight: "bold" }} type="submit" value="Sign In" />
          
            </form>
        </main>
    )
}

export default SignUpPage;