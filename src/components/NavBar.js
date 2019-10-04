import React from 'react'
import {Link} from 'react-router-dom'
import {Bounce} from 'react-reveal'

class NavBar extends React.Component{
    
    render(){
    return(
        <div className='nav-bar'>
            <Link to='/'>
                <Bounce clear><p>About Me</p></Bounce>
            </Link>
            <Link to='/resume'>
                <Bounce clear><p>Resume</p></Bounce>
            </Link>
            <Link to='/projects'>
                <Bounce clear><p>Projects</p></Bounce>
            </Link>
            <Link>
                <Bounce clear><p onClick={this.props.ShowInfo}>Contact</p></Bounce>
            </Link>   
        </div>
    )}
}

export default NavBar