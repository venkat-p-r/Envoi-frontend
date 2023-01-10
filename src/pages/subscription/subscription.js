import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Image} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import avatarRegister from './avatarRegister.svg'

import { Helmet } from 'react-helmet';
import addUs from './login.png'
import wave from './wavev.png'
import {subscriber} from '../../actions/subscribeActions.js'
import "./sub.css"

import {
  Button, Input
} from "@chakra-ui/react"

const Subscription = ({location, history}) => {
   
  const [email,setEmail] = useState('')
 
  
 

  const dispatch = useDispatch()

  const subscribeRegister = useSelector(state => state.subscribeRegister)

  const { error, subscribes } = subscribeRegister

  const redirect = location.search ? location.search.split('=')[1] : '/subscription'

  useEffect(() => {
    if(subscriber) {
      history.push(redirect)
    }
  }, [history, subscribes, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(subscriber(email))
    }
    
  

  const inputs = document.querySelectorAll(".inputa");


  function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }
  
  function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value === ""){
      parent.classList.remove("focus");
    }
  }
  
  
  inputs.forEach(inputa => {
    inputa.addEventListener("focus", addcl);
    inputa.addEventListener("blur", remcl);
  });
  




    return (
        <div className="registerSc">
          <Helmet>
            <title>
              subscriber
            </title>
          </Helmet>
          	<Image className="wave" src={wave} />

            <div className="containera">
              
		<div className="imga">
			<Image src={addUs} />
		</div>
		<div className="login-content">
			<form onSubmit={submitHandler}>
				<Image src={avatarRegister} />
				
                



                <div className="input-div zz">
                       <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
                  

           		   
           		</div>




           		<div className="input-div one">
                       

           		   <div className="i">
           		   		<i className="fas fa-envelope"></i>
           		   </div>
           		   <div className="div">
           		   		
           		   		<input type="text" value={email} className="inputa" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
           		   </div>
           		</div>



                

           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		 
            	</div>


                <div className="input-div passconf">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		 
            	</div>
              <br></br>
              
                <input type="submit" className="btna2" value="Subscribe"/>
                <br />
                
            
            	
                
              
            </form>
        </div>
    </div>
        </div>
    )
}

export default Subscription
