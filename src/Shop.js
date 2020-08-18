import React, {Component} from 'react'
import './Shop.styles.scss' 

import {Route, Switch, Redirect} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'


import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import SignInSignUp from './pages/sign-in.sign-up/sign-in.sign-up.component'
import Header from './components/header/header.component'
import {setCurrentUser} from './redux/user/user.actions'

class Shop extends Component{
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot =>{
          this.props.setCurrentUser({
              id : snapshot.id,
              ...snapshot.data()
          }) 
        })
      }else{
        this.props.setCurrentUser(userAuth)
      } 
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return(
      <main>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect path='/'/>) : (<SignInSignUp />)}></Route>
        </Switch>
      </main>
    )
  }
}

const mapStateToProps = ({user}) =>({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(Shop)