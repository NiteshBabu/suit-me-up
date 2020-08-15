import React from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component{
  constructor(){
    super()

    this.state = {
      email : '',
      password : ''
    }
  }

  handleSubmit = e =>{
    e.preventDefault()
  }

  handleChange = e =>{
    const {name, value} = e.target
    this.setState({[name] : value})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} >
        <h1>Sign In</h1>
        <p>I already have an account</p>
        <FormInput 
          type='email'
          name='email'
          label='Email'
          value={this.state.email}
          handleChange={this.handleChange}
          required
        />
        <FormInput 
          type='password'
          name='password'
          label='Password'
          value={this.state.password}
          handleChange={this.handleChange}
          required
        />
        <div className='buttons' >
          <CustomButton className=''>Sign In</CustomButton>
          <CustomButton className='google' onClick={()=> signInWithGoogle()}>Sign In With Google</CustomButton>
        </div>
      </form>
    )
  }
}

export default SignIn