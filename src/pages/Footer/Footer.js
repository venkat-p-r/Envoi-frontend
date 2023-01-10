import React from 'react'
import {FiFacebook, AiOutlineHeart, AiOutlineInstagram, IoLogoYoutube} from 'react-icons/all';
import { Input,Stack } from '@chakra-ui/react'
import './footercss.css'
import { Link } from 'react-router-dom';
import enlogo from "./logo-footer.png"
const Footer = () => {
    return (
        <div className="footerCmp">
            <footer>
                <div className='fooca'>
                <div className="footerCategorie">
                <br></br>
                    <img src={enlogo}/>
                </div>
                </div>

                <div className="fooHelp">
                <h1>Categories</h1>
                    <ul>
                        <li><Link to = '/shop/?cg=Women'>Women</Link></li>
                        <li><Link to = '/shop/?cg=Men'>Men</Link></li>
                        <li><Link to = '/shop/?cg=Shoes'>Shoes</Link></li>
                        <li><Link to = '/shop/?cg=Watches'>Watches</Link></li>
                    </ul>
                </div>

                <div className="footerGetInTouch">
                    <h1>Get in touch</h1>
                    <ul>
                        <p>Any questions? Let us know in store Sri Venkateswara college of Engineering, Pennalur, Sriperumbudur - 602117 or call us on (+91) 9080372115</p>
                        <li className="footerIcons">
                            <FiFacebook size="25" />
                        </li>
                        <li className="footerIcons">  
                            <AiOutlineInstagram size="25" />
                        </li>
                        <li className="footerIcons">
                            <IoLogoYoutube size="25"/>
                            
                        </li>
                    </ul>
                </div>

                <div className="footerNews">
                    <h1>Newsletter</h1>
                    <ul>
                        <li>
                            <Stack spacing={3}>
                            <Input variant="flushed" placeholder="email@example.com" size="10" width="200px"/>
                            </Stack>
                        </li>
                        <li>
                            <button className="footerBtn">Subscribe</button>
                        </li>
                    </ul>
                </div>

               
                
                <div className="paragraphFooter"><p>Copyright ©2022 All rights reserved | ENVOI </p>
                <p><a href='https://www.linkedin.com/in/srirangan-kannan-31jul2002/'>Made by Sriragan K</a> and <a href='https://www.linkedin.com/in/venkat-p-r/'>Venkat P R</a> </p>
                </div>



            </footer>

        </div>
    )
}

export default Footer;
