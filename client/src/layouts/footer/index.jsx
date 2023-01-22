import React from 'react'
import './index.scss'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div className='logoPart'>
                <img src="https://preview.colorlib.com/theme/courses/assets/img/logo/logo.png" />
                <h4>The automated process starts as soon as 
                   <br /> your clothes go into the machine.</h4>
                <div className='icon'>
                <div><i class="fa-brands fa-facebook"></i></div>
                <div><i class="fa-brands fa-twitter"></i></div>
                <div><i class="fa-brands fa-pinterest"></i></div>
                </div>
            </div>
            <div className='linkPart'>
                <div className='part_1'>
                    <h3>Our solutions</h3>
                   <h5> Design & creatives</h5>
                   <h5>Telecommunication</h5>
                   <h5>Restaurant</h5>
                   <h5>Programing</h5>
                   <h5>Architecture</h5>
                </div>
                <div className='part_1'>
                    <h3>Support</h3>
                    <h5>Design & creatives</h5>
                    <h5>Telecommunication</h5>
                    <h5>Restaurant</h5>
                    <h5>Programing</h5>
                    <h5>Architecture</h5>
                </div>
                <div className='part_1'>
                    <h3>Company</h3>
                    <h5>Design & creatives</h5>
                    <h5>Telecommunication</h5>
                    <h5>Restaurant</h5>
                    <h5>Programing</h5>
                    <h5>Architecture</h5>
                </div>
            </div>
        </div>
        <div className='bottom'>
            <h3>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</h3>
        </div>
    </div>
  )
}

export default Footer