import React from 'react'
import {useSpring, animated} from 'react-spring'

import ProjectCard from './ProjectCard'

import task10 from '../images/task10.png'
import task15 from '../images/task15.png'
import task12 from '../images/weatherApp.png' 

function Projects(){

    const props = useSpring({opacity:1, marginLeft:0, from:{opacity:0, marginLeft:-500}})
    
    return(
        <animated.div style={props} className="projects">
            <ProjectCard
            imgSrc={task10}
            heading="Simple Card Game in React"
            discription="The Task was to create a simple card game using react. I chose Rock Paper Scissors. In this task,
            I learnt some cool new concepts like using React-Spring to animate components into and out of view. Check it out. I'm
            proud of the lightbox design I used to display information when you click on the 'read rules' button"
            link="https://task-11yusker.herokuapp.com/"
            />
            <ProjectCard
            imgSrc={task15}
            heading="Online store using HTML CSS and Javascript"
            discription="The brief was to create an online store with a working cart using HTML CSS and plain Javascript.
            I'n hindsight, there are more efficient ways I could have created this cart system, but it works and I'm keep to improve 
            it in future for my own understanding. This was my first big web dev tak and I'm proud of how I managed to produce a 
            working product considering the little knowledge I had at the time"
            link="https://online-store-task15.herokuapp.com/menu.html"
            />
            <ProjectCard
            imgSrc={task12}
            heading="Fetching Data from an API"
            discription="The aim of this task was to create an app that fetches data from an API. The data pulled is dependant on the
            user's input. It should then display the data in a readable manner. This was my first exposure to API's and I am excited
            to increase my knowledge and skill regarding such methods. Please give it a try."
            link="https://weather-app-yk.herokuapp.com"
            />

        </animated.div>
    )
}

export default Projects