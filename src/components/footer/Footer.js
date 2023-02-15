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
            <h3>Contáctame</h3>
            <p>Trabajemos juntos, creemos juntos</p>
        </div>
        <div className='footer-sns'>
            <div className='design-by'>
                Diseñado por José Sanz Martín
            </div>
            <div className='sns-links'>
                <a href='https://www.linkedin.com/in/josesanzmartin' target='_blank' rel='noreferrer'>
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://twitter.com/JosSanzMartn' target='_blank' rel='noreferrer'>
                    <i className='fab fa-twitter twitter'></i>
                </a>
                <a href='https://wa.me/34629527427' target='_blank' rel='noreferrer'>
                    <i className='fab fa-whatsapp whatsapp'></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer