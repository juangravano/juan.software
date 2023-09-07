import React from 'react';

function Card({ className, height, width, title, text, imageSrc, link, children }) {
  return (
    <div className={`card ${className}`} style={{ height: height, width: width, padding: '10px', boxSizing: 'content-box', borderRadius: '15px', overflow: 'hidden' }}>
      {imageSrc && <img src={imageSrc} alt={title} style={{ width: '100%', borderRadius: '10px' }} />}
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
      {link && <a href={link} target="_blank" rel="noopener noreferrer">Más información</a>}
      {children}
    </div>
  );
}


export default Card;
