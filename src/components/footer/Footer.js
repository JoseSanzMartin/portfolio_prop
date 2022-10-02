import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>José Sanz Martín</h1>
            <p>Based in Barcelona</p>  
        </div>
        <div className='footer-contact'>
            <h3>Contact me</h3>
            <p>Let's work together, let's create together</p>
        </div>
        <div className='footer-sns'>
            <div className='design-by'>
                Design by José Sanz Martín
            </div>
            <div className='sns-links'>
                <a href='https://www.linkedin.com/in/josesanzmartin' target='_blank' rel='noreferrer'>
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='mailto:josesanzmartin@hotmail.es' target='_blank' rel='noreferrer'>
                    <i class="fa-sharp fa-solid fa-at mail"></i>
                </a>
                <a href='https://twitter.com/JosSanzMartn' target='_blank' rel='noreferrer'>
                    <i className='fab fa-twitter twitter'></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer