import React from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password); 
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }

  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>   
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            label="Email" 
            handleChange={this.handleChange} 
            value={this.state.email} 
            required 
          />

          <FormInput 
            name="password" 
            type="password" 
            label="Password" 
            value={this.state.password} 
            onChange={this.handleChange} 
            required 
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
          </div>
        </form> 
      </div>
    )
  }
}

export default SignIn
