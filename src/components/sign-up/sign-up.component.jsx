import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

class SignUp extends React.Component{
  constructor(){
    super()

    this.state = {
      displayName :'',
      email : '',
      password1 : '',
      password2 : '',
    }
  }

  handleSubmit = async e =>{
    e.preventDefault()

    const {displayName, email, password1, password2} = this.state

    if (password1 != password2){
      alert("Passwords Don't Match")
      return;
    }

    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password1) 
      await createUserProfileDocument(user, {displayName})
      e.target.reset() ;
    }catch(error){
      console.error(error);
    }
  }

  handleChange = e =>{
    const {name, value} = e.target
    this.setState({[name] : value})
  }

  render(){
    const {displayName, email, password1, password2} = this.state
    return(
      <form onSubmit={this.handleSubmit} className='sign-up'>
        <h1>Sign Up</h1>
        <p>I need an account</p>
        <FormInput 
          type='text'
          name='displayName'
          label='Display Name'
          value={displayName}
          handleChange={this.handleChange}
        />
        <FormInput 
          type='email'
          name='email'
          label='Email'
          value={email}
          handleChange={this.handleChange}
        />
        <FormInput 
          type='password'
          name='password1'
          label='Password'
          value={password1}
          handleChange={this.handleChange}
        />
        <FormInput 
          type='password'
          name='password2'
          label='Confirm Password'
          value={password2}
          handleChange={this.handleChange}
        />
        <CustomButton className=''>Sign Up</CustomButton>
      </form>
    )
  }
}

export default SignUp