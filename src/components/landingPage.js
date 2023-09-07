import React from 'react';
import Card from './card';

function LandingPage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      justifyContent: 'space-between', 
      background: 'white', 
      margin: '10px', 
      padding: '10px',
      boxSizing: 'content-box'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw', marginBottom: '10px' }}>
        <Card className="color1" height="30vh" width="60vw" />
        <Card className="color2" height="30vh" width="40vw" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw', marginBottom: '10px' }}>
        <Card className="color3" height="30vh" width="20vw" />
        <Card className="color4" height="30vh" width="45vw" />
        <Card className="color5" height="30vh" width="30vw" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1vw' }}>
        <Card className="color6" height="30vh" width="50vw" />
        <Card className="color7" height="30vh" width="50vw" />
      </div>
    </div>
  );
}

export default LandingPage;
