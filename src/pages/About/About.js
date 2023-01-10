import React,{useRef,useEffect, useState} from 'react'
import envoi from './envoii400.png'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                    Who we are
                    </h1>
                   <br></br> 
                <p>ENVOI is a student community startup under Student council of SVCE which helps to inculcate entrepreneurial mindset among the students during their college life.We promote and deliver superior quality products like customised t-shirts,coffee mugs,jute bags,name badges etc., as per customers need.</p> 
                <p><br></br>                 
                    Students are in charge for all the tasks, right from product design to client interaction.We also analyse the current trend and update our products range accordingly to attract and build a huge customer base.</p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '350px' objectFit="cover" src={envoi} alt="Enovi"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '350px' objectFit="cover" src='https://www.hbfuller.com/-/media/images/careers/teamwork-diverstiy-mission-and-culture.jpg' alt="Segun Adebayo"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                    OUR MISSION
                    </h1>
                    <br></br>
                <p>To provide superior quality merchandise to the students and customers.<br></br>
                    To inculcate entrepreneurial mindset among the students during their college life. <br></br>We learn and grow together.</p>
                </div>
            </div>

            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                    OUR VISION
                    </h1>
                    <br></br>
                <p>To work along with other start-up groups formed in different colleges and scaling up the initiatives.
                <br></br>
                To make this student community start-up a versatile brand.</p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '350px' objectFit="cover" src='https://www.woodtech.in/assets/images/vision.jpg' alt="Enovi"/>
                    </div>
                   </div>
            </div>
        </>
    
    )
}

export default About
