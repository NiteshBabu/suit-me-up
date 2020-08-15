import React from 'react'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in.sign-up.styles.scss'

const SignInSignUp = () =>{
  return(
    <span className='container'>
      <SignIn/>
      <SignUp/>
    </span>
  )
}


export default SignInSignUp