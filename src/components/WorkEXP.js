import React from 'react'

function WorkEXP(props){
    return(
        <div className="WorkEXP">
            <h1>Company: {props.company}</h1>
            <p>Position held: {props.PositionHeld}</p>
            <p>Duties: {props.duties}</p>
            <p>Date employed: {props.DateEmployed}</p>
            <img src={props.image} alt='' width='100%' />
        </div>
    )
}

export default WorkEXP