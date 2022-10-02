import React from 'react';
import "./About.css";
import aboutFoto from "../../media/aboutFoto.jpg";

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3> Let me tell you something about me</h3>
            <p> I'm José Sanz, a Junior Programmer and a pasionated about the world of programming</p>
            <div className='services-container'>
              <h3>Services</h3>
              <section className='services'>
                <article className='service'>
                  <h2>Diseño web</h2>
                  <p>Elaboración de estilos de tu página</p>
                </article>
                <article className='service'>
                  <h2>Desarrollo web</h2>
                  <p>Realización de proyectos desde el inicio</p>
                </article>
                <article className='service'>
                  <h2>Posicionamiento web</h2>
                  <p>Asesoramiento para la busqueda de visitas</p>
                </article>
              </section>
            </div>
        </div>
        <div className='about-img'>
            <img src={aboutFoto} alt='about'/>
        </div>
    </div>
  )
}

export default About