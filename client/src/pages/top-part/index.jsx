import React from 'react'
import './index.scss'
const TopPart = () => {
  return (
    <div id='main'>
        <img src="src/images/blog.jpg" alt="" />
        <div className='textPart'>
          <h1>Online learning <br /> platform</h1>
          <h3>Build skills with courses, certificates, and degrees online from world -<br />class universities and companies</h3>
          <button className='Btn'>Join for free</button>
        </div>
        <div className='staticCard'>
          
          <div className='card_1'>
            <div className='cardIcon'><img src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon1.svg" alt="" /></div>
            <div className='cardText'>
              <h2>60+ UX courses</h2>
                <h4>The automated process all your website tasks.</h4>
            </div>
          </div>
        
       
          <div className='card_1'>
            <div className='cardIcon'><img src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon2.svg" alt="" /></div>
            <div className='cardText'>
              <h2>Expert instructors</h2>
                <h4>The automated process all your website tasks.</h4>
            </div>
          </div>
       
        
          <div className='card_1'>
            <div className='cardIcon'><img src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon3.svg" alt="" /></div>
            <div className='cardText'>
              <h2>Life time access</h2>
                <h4>The automated process all your website tasks.</h4>
            </div>
          </div>
          </div>
    </div>
  )
}

export default TopPart