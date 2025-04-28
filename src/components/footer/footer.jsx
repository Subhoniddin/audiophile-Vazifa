import Navbar from '../navbar/navbar'
import './footer.css'
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import twitter from '../../assets/shared/desktop/icon-twitter.svg'
import instagram from '../../assets/shared/desktop/icon-instagram.svg'

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return <>
        <footer id='footer' className='footer'>
            <Navbar/>
            <div className='container footer-body'>
                <div className='footer-info'>
                  <p className='descr'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                  <p className='copyright'>Copyright 2021. All Rights Reserved</p>
                </div>
                <div className='social-media'>
                    <FaFacebookSquare className='facebook'/>
                    <FaTwitter className='twitter'/>
                    <FaInstagram className='instagram'/>
                </div>
            </div>
        </footer>
    </>
  
}

export default Footer