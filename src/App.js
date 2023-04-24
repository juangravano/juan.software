import React, { useState } from 'react';
import './App.css';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';

function Card() {
  const [iconHovered, setIconHovered] = useState(null);

  const handleIconHover = (iconIndex) => {
    setIconHovered(iconIndex);
  };

  return (
    <div className="card">
      <div className="profile">
        <img src="https://avatars.githubusercontent.com/u/40062152?v=4" alt="Foto de perfil" />
      </div>
      <div className="info">
        <h1>Juan Gravano</h1>
        <p>Software Developer</p>
        <div className="icons">
          <a href="https://github.com/jgravano" target="_blank">
            <GithubFilled
              className={`icon ${iconHovered === 1 ? 'active' : ''}`}
              onMouseEnter={() => handleIconHover(1)}
              onMouseLeave={() => handleIconHover(null)}
            />
          </a>
          <a href="https://linkedin.com/in/juan-gravano/" target="_blank">
            <LinkedinFilled
              className={`icon ${iconHovered === 3 ? 'active' : ''}`}
              onMouseEnter={() => handleIconHover(3)}
              onMouseLeave={() => handleIconHover(null)}
            />
          </a>

        </div>
      </div>
    </div>
  );
}


function App() {
  const [columnHovered, setColumnHovered] = useState(null);

  const handleColumnHover = (columnIndex) => {
    setColumnHovered(columnIndex);
  };

  return (

    <div className="container">
      <div
        className={`column ${columnHovered === 0 ? 'active' : ''} color1`}
        onMouseEnter={() => handleColumnHover(0)}
        onMouseLeave={() => handleColumnHover(null)}
      ></div>
      <div
        className={`column ${columnHovered === 1 ? 'active' : ''} color2`}
        onMouseEnter={() => handleColumnHover(1)}
        onMouseLeave={() => handleColumnHover(null)}
      ></div>
      <div
        className={`column ${columnHovered === 2 ? 'active' : ''} color3`}
        onMouseEnter={() => handleColumnHover(2)}
        onMouseLeave={() => handleColumnHover(null)}
      ></div>
      <div
        className={`column ${columnHovered === 3 ? 'active' : ''} color4`}
        onMouseEnter={() => handleColumnHover(3)}
        onMouseLeave={() => handleColumnHover(null)}
      ></div>
      <div
        className={`column ${columnHovered === 4 ? 'active' : ''} color5`}
        onMouseEnter={() => handleColumnHover(4)}
        onMouseLeave={() => handleColumnHover(null)}
      ></div>
      <div> {Card()} </div>
    </div>
  );
}


export default App;
