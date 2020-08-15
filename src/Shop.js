import React, {Component} from 'react'
import './Shop.styles.scss' 

import {Route, Switch} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import SignInSignUp from './pages/sign-in.sign-up/sign-in.sign-up.component'
import Header from './components/header/header.component'

class Shop extends Component{
  constructor(props){
    super(props)

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data()
            }
          }, ()=> console.log(this.state.currentUser)) 
        })
      }else{
        this.setState({currentUser : userAuth})
      } 
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return(
      <main>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInSignUp}></Route>
        </Switch>
      </main>
    )
  }
}

export default Shop