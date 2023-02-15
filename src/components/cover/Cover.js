import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1> José Sanz Martín </h1>
      <p> Desarrollador Web | Diseñador | Creador de contenido</p>
    </div>
  );
};

export default Cover;