import React from 'react'


const me = ""
function Info(props){
    let classStyle = ''
    if(props.display){
        classStyle = 'info-active'
    }else{
        classStyle = 'info'
    }
    return(
        <div className={classStyle}>
            <img src={me} alt=''/>
            <div className="info-card">
                <h2 className='name'>Yusuf Keraan</h2>
                <h2>Github</h2><h2>YusufKer</h2>
                <h2>Linked In</h2><h2><a target="_blank" href='https://www.linkedin.com/in/yusuf-keraan-b962289a'>Yusuf Keraan</a></h2>
                <h2>Email:</h2><h2>yus.ker1994@gmail.com</h2>
                <h2>cell:</h2><h2>078 153 9093</h2> 
            </div>
            <button className="info-button" onClick={props.ShowInfo}>Got it</button>
        </div>
    )
}

export default Info