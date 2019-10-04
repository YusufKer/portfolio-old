import React from 'react'
import {useSpring, animated} from 'react-spring'

import WorkEXP from './WorkEXP'

import ExclusiveBooks from '../images/ExclusiveBooks.jpg'
import BladesAndTriggers from '../images/bladesAndTriggers.jpg'
import Isilumko from '../images/Isilumko.png'
import school from '../images/school.jpg'

function Resume(){

    const props = useSpring({opacity:1, from:{opacity:0}})
    return(
        <animated.div style={props} className='resume'>
            
            <div className="EDU">
                <div className='grid-1'>
                    <h1>Education</h1>
                    <h2>High School - <a href='https://www.kensingtonhigh.co.za/wcontact.php'>Kensington High</a></h2>
                    <img src={school} alt='' />
                </div>
                <div className='grid-2'>
                    <h2>Matric Year - 2012</h2>
                    <h1>Subjects</h1>
                    <ul>
                        <li>English</li>
                        <li>Afrikaans</li>
                        <li>Mathematics</li>
                        <li>Life Science</li>
                        <li>Physics</li>
                        <li>Geography</li>
                        <li>Life Oreantation</li>
                    </ul>
                </div>
                <div className='grid-3'>
                    <h1>Post Matric</h1>
                    <h2>Madrassatul Qura(2012 - 2014)</h2>
                    <h3>Subjects</h3>
                    <ul>
                        <li>Quran Memorisation</li>
                        <li>Quran Tafseer(Interpretaion)</li>                        
                    </ul>
                    <h2>Cape Peninsula University of Technology(2015-2016)</h2>
                    <h3>Subjects Completed</h3>
                    <ul>
                        <li>Mathematics 1</li>
                        <li>Mechanics 1</li>
                        <li>Computer Programing 1</li>
                        <li>Mechatronics Project 1</li>
                        <li>Comunications 1</li>
                    </ul>
                    <h4>Dropped out due to financial Constraints</h4>
                </div>
                

            </div>
            <div className="XP">
            <h1>Work Experience</h1>
                <div className="XP-grid">
                    
                    <WorkEXP
                    company='Exclusive Books'
                    duties='selling books, sourcing books for 
                    Customers, till cash ups.'
                    DateEmployed='08/11/2015-current'
                    PositionHeld='night staff bookseller (part time)'
                    image={ExclusiveBooks}
                    />
                    <WorkEXP
                    company='Blades and Triggers'
                    duties='sales and painball marker repair'
                    DateEmployed='01/10/2014-18/01/2015'
                    PositionHeld='sales assistant'
                    image={BladesAndTriggers}
                    />
                    <WorkEXP
                    company='Isilumko Staffing'
                    duties='promotion of products'
                    DateEmployed='17/12/2012-08/11/2015'
                    PositionHeld='brand promotor'
                    image={Isilumko}
                    />
                    
                </div>
            </div>
            <div className="SKILL">
                <h1>Skills</h1>
                <h2>In April 2019, I attended a 6 month Software development bootcamp with Life Choices and CoGrammar where I learnt... </h2>
                <div style={{fontSize:'2em', color:'white'}}>html/css || javascript || jquery || bootstrap || react || express || node || python </div>
                <h2>My aim is to increase my competence in these skills and pick up a few more along the way</h2>
                
            </div>

            
        </animated.div>
    )
}

export default Resume