import React from 'react'

function ProjectCard(props){
    return(
        <div className="project-card">
            <img src={props.imgSrc} alt=''/>
            <div className='project-info'>
            <h1>{props.heading}</h1>
            <p>{props.discription}</p>
            <p><a href={props.link} target="_blank">Check me out?</a></p>
            </div>            
        </div>
    )
}

export default ProjectCard