import React from 'react'

function ProjectCard(props){
    return(
        <div className="project-card">
            <img src={props.imgSrc} alt=''/>
            <div className='project-info'>
            <h1>{props.heading}</h1>
            <p>{props.discription}</p>
            <p><a href={props.link} target="_blank"><button className="project-link-button">Check me out?</button></a></p>
            </div>            
        </div>
    )
}

export default ProjectCard