import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Info from './components/Info'
import Header from './components/Header'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'

import Resume from './components/Resume'
import Projects from './components/Projects'

import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      ShowInfo:false
    }
    this.ShowInfo = this.ShowInfo.bind(this)
  }
  ShowInfo(){
    console.log("click")
    this.setState({
      ShowInfo:!this.state.ShowInfo
    })
  }

  render(){
    return (
   
        <Router className="main">
          <Header/>
          <NavBar ShowInfo={this.ShowInfo}/>
          <Route exact path='/resume' component={Resume}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path="/" component={LandingPage}/>
          <Info ShowInfo={this.ShowInfo} display={this.state.ShowInfo}/> 
        </Router>
      
    )
  
}
}
export default App
