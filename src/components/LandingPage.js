import React from 'react'
import {useSpring, animated} from 'react-spring'
import ProfilePic from '../images/ProfilePic.jpg'

function LandingPage(){
    const props = useSpring({opacity:1, from:{opacity:0}})
    return(
        <animated.div style={props}>
            <div className="landing-page">
                <h1>Aspiring Full stack Web Developer</h1>
                <img src={ProfilePic} alt='' width='50%'/>
                <div className="banner">
                    <p>html/css || javascript || jquery || bootstrap || react || express || node || python</p>
                </div>
                
            </div>
            <div className='about-me'>
                <h1>About Me</h1>
                <p>
                    I am 24 years old and grew up in a little suberb called Maitland. Growing up, I've always had an interest in 
                    how thing work, from microwave ovens to bicycle gears. I would break things apart in order to see how they
                    work, which often got me in trouble because I sometimes couldn't put them back together. Oneday, I must have been
                    around 9 years old, I took apart my father's calculator. It was unlike anything else because the circuit board 
                    offered me no explanation as to how it was performing all these calculations. This is what sparked my interest in software,
                    but it wasn't untill recently that I've realised that this(computer programing) was actually my passion.
                    My main interest is in UI design. I'm fascinated by how children as young as 2 years old are able to navigate
                    through smart phones and tablets with such ease. I like the idea of creating software that perform complicated tasks
                    but are so easy and intuitive to use. So my goal is to upskill myself so that I may have the chance to make 
                    life easier for people by providing convenience in software. 
                    <br/>
                    
                </p>
            </div>
        </animated.div>
        

    )
}

export default LandingPage