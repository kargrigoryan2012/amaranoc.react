import React from 'react';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 40px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #eaeaea',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: 'Arial, sans-serif'
    }}>
      {}
      <div >
          <img src='https://amaranoc.am/images/logo.svg' style={{width:"100px", paddingLeft:"100px"}}/>
      </div>

      {}
      <nav style={{ display: 'flex', gap: '35px', color: '#555', fontSize: '10px', marginBottom:"10px" }}>
        <span style={{ color: '#000', cursor: 'pointer',borderBottom:"1px solid orange" }}>Գլխավոր</span>
        <span style={{ color: '#000', cursor: 'pointer' }}>Զեղչեր</span>
        <span style={{ color: '#000', cursor: 'pointer' }}>Ծառայություններ</span>
        <span style={{ color: '#000', cursor: 'pointer' }}>Մեր մասին</span>
      </nav>

      {}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ display: 'flex',gap: '8px', width: '20px',marginBottom:'8px' }}>
          <img src='./globe.png' style={{width:"45px"}}/>
        </div>
        <div style={{ padding: '8px 12px', borderRadius: '50%', cursor: 'pointer', fontSize: '0.9rem' }}>
          <img src='./user.png'style={{width:"30px"}}/>
        </div>
       <div style={{ border:"1px solid #aca9a9", paddingLeft: '10px ', borderRadius: '20px', display: 'flex',  alignItems: 'center',  gap: '8px', width:"150px",  color: '#888', fontSize: '10px' 
}}>
  <span>Որոնում</span>
  <img src='./search.png' style={{ width: "30px", height: "30px", marginLeft:"50px"}} alt="Search" /> 
        </div>
      </div>
    </header>
  );
}