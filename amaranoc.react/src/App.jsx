import React, { useState } from 'react';
import Header from './header.jsx';

export default function App() {
  
  const categories = [
    { name: 'Առանձնատներ'},
    { name: 'Frame houses'},
    { name: 'Տնակներ'},
    { name: 'Փակ լողավազան'},
    { name: 'Աղմուկից հեռու'},
    { name: 'Շքեղ տեսարան'},
  ];

  const houses = [
    {
      id: 1,
      region: 'Ծաղկաձոր',
      badge: '★ 5',
      guests: 20,
      price: '130,000 ֏',
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1749128689645--0.45666789728980683image.webp&w=1920&q=75'
    },
    {
      id: 2,
      region: 'Նոր Հաճն',
      guests: 30,
      price: '120,000 ֏',
      badge: '★ 5',
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1772031870801--0.4223948999945075image.webp&w=1920&q=75'
    },
    {
      id: 3,
      region: 'Բջնի',
      guests: 6,
      price: '45,000 ֏',
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1759149473223--0.33907271602966693image.webp&w=1920&q=75'
    },
    {
      id: 4,
      region: 'Բջնի',
      badge: '★ 5',
      guests: 4,
      price: '45,000 ֏',
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1786016384446--0.5674212438235726image.webp&w=1920&q=75'
    },
    {
      id: 5,
      region: 'Աշտարակ',
      badge: '★ 5',
      guests: 30,
      price: '75,000 ֏',
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1753697519318--0.6018363399057722image.webp&w=1920&q=75'
    },
    {
      id: 6,
      region: 'Բյուրական',
      guests: 4,
      price: '39,000 ֏',
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1760001713184--0.39324297563530597image.webp&w=1920&q=75'
    },
    {
      id: 7,
      region: 'Ապարան',
      guests: 2,
      price: '58,000 ֏',
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792592255894--0.541534662904487image.webp&w=1920&q=75'
    },
    {
      id: 8,
      region: 'Ապարան',
      guests: 3,
      price: '73,000 ֏',
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792591399194--0.8532839249740269image.webp&w=1920&q=75'
    },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fcfcfc', minHeight: '100vh', margin: 0, color: '#333' }}>
      <Header />

      <div style={{ display: 'flex', padding: '20px 40px', gap: '30px', maxWidth: '1440px', margin: '0 auto' }}>
      
        <aside style={{ width: '280px', background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #eee', height: 'fit-content' }}>
          
          <h3 style={{ fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '15px' }}>Տարածաշրջան</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#444' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span><input type="checkbox" defaultChecked style={{ background: "white", marginRight: '8px' }} /> Դիլիջան</span>
              <span style={{ color: '#888', fontSize: '0.85rem' }}>179</span>
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span><input type="checkbox" style={{ marginRight: '8px' }} /> Ծաղկաձոր</span>
              <span style={{ color: '#888', fontSize: '0.85rem' }}>103</span>
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span><input type="checkbox" style={{ marginRight: '8px' }} /> Աշտարակ</span>
              <span style={{ color: '#888', fontSize: '0.85rem' }}>37</span>
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span><input type="checkbox" style={{ marginRight: '8px' }} /> Գառնի</span>
              <span style={{ color: '#888', fontSize: '0.85rem' }}>35</span>
            </label>
            <label style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span><input type="checkbox" style={{ marginRight: '8px' }} /> Երևան</span>
              <span style={{ color: '#888', fontSize: '0.85rem' }}>25</span>
            </label>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #f0f0f0', margin: '20px 0' }} />

          <h3 style={{ fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '12px' }}>Արժեք</h3>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
            <button style={{ background: '#111', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', fontSize: '0.85rem', cursor: 'pointer' }}>֏</button>
            <button style={{ background: '#f5f5f5', color: '#333', border: 'none', padding: '5px 10px', borderRadius: '4px', fontSize: '0.85rem', cursor: 'pointer' }}>$</button>
            <button style={{ background: '#f5f5f5', color: '#333', border: 'none', padding: '5px 10px', borderRadius: '4px', fontSize: '0.85rem', cursor: 'pointer' }}>€</button>
            <button style={{ background: '#f5f5f5', color: '#333', border: 'none', padding: '5px 10px', borderRadius: '4px', fontSize: '0.85rem', cursor: 'pointer' }}>₾</button>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input type="text" placeholder="Սկսած" style={{ width: '100%', padding: '8px', border: '1px solid #ddd', background: "white", borderRadius: '6px', fontSize: '0.85rem' }} />
            <input type="text" placeholder="Մինչև" style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '6px', background: "white", fontSize: '0.85rem' }} />
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #f0f0f0', margin: '20px 0' }} />

          <h3 style={{ fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '10px' }}>Մարդկանց թույլատրելի քանակ</h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #ddd', borderRadius: '6px', padding: '6px 12px' }}>
            <button style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer', color: '#888' }}>-</button>
            <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>1</span>
            <button style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer', color: '#333' }}>+</button>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #f0f0f0', margin: '20px 0' }} />

          <h3 style={{ fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '10px' }}>Գիշերակացի առկայություն</h3>
          <div style={{ display: 'flex', background: '#f5f5f5', borderRadius: '20px', padding: '3px' }}>
            <button style={{ flex: 1, background: '#111', color: '#fff', border: 'none', padding: '6px', borderRadius: '15px', fontSize: '0.8rem', cursor: 'pointer' }}>Բոլորը</button>
            <button style={{ flex: 1, background: 'transparent', color: '#555', border: 'none', padding: '6px', borderRadius: '15px', fontSize: '0.8rem', cursor: 'pointer' }}>Այո</button>
            <button style={{ flex: 1, background: 'transparent', color: '#555', border: 'none', padding: '6px', borderRadius: '15px', fontSize: '0.8rem', cursor: 'pointer' }}>Ոչ</button>
          </div>

        </aside>

        {}
        <main style={{ flex: 1 }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '10px', flex: 1, overflowX: 'hidden' }}>
              {categories.map((cat, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', border: '1px solid #eaeaea', padding: '8px 10px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.75rem', color: '#444', flex: 1, minWidth: '70px', textAlign: 'center' }}>
                  <span style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{cat.icon}</span>
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#222', margin: 0 }}>Լավագույն առաջարկներ</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {houses.map(house => (
              <div key={house.id} style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
                <div style={{ position: 'relative' }}>
                  <img src={house.image} alt={house.region} style={{ width: '100%', height: '170px', objectFit: 'cover' }} />
                  {house.badge && (
                    <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#ff9800', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                      {house.badge}
                    </span>
                  )}
                  <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', opacity: 0.9 }}></span>
                    <span style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', opacity: 0.5 }}></span>
                    <span style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', opacity: 0.5 }}></span>
                  </div>
                  <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.3)', color: '#fff', padding: '4px 8px', borderRadius: '50%', fontSize: '0.8rem', cursor: 'pointer' }}>🤍</span>
                </div>
                
                <div style={{ padding: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#222' }}>{house.region}</span>
                    <span style={{ fontSize: '0.85rem', color: '#666', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      👤 {house.guests}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f5f5f5', paddingTop: '10px' }}>
                    <span style={{ fontWeight: 'bold', color: '#000', fontSize: '1.05rem' }}>{house.price}</span>
                    <span style={{ fontSize: '0.85rem', color: '#888' }}>օրական</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </main>

      </div>

      {}
      <div style={{
        backgroundImage: "url('./forest.jfif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40px'
      }}>
        <div style={{
          backgroundColor: 'rgba(26, 38, 34, 0.75)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '20px',
          padding: '40px 30px',
          maxWidth: '1000px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          
          {}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.4)' }}></div>
            <h2 style={{ fontSize: '1.8rem', letterSpacing: '1px', margin: 0, fontWeight: 'bold', textTransform: 'uppercase',color:"white" }}>
              ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ
            </h2>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255, 0.4)' }}></div>
          </div>

          <p style={{ color: '#d0d8d5', fontSize: '0.9rem', marginBottom: '30px' }}>
            Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապվենք Ձեզ հետ
          </p>

          {}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Անուն Ազգանուն" 
              style={{ flex: '1 1 200px', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', color: '#fff', outline: 'none' }} 
            />
            <input 
              type="text" 
              placeholder="Հեռախոսահամար" 
              style={{ flex: '1 1 200px', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', color: '#fff', outline: 'none' }} 
            />
            <input 
              type="email" 
              placeholder="Էլ․ հասցե" 
              style={{ flex: '1 1 200px', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '8px', color: '#fff', outline: 'none' }} 
            />
            <button style={{ backgroundColor: '#ff9800', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '25px', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 4px 10px rgba(255, 152, 0, 0.3)' }}>
              Ուղարկել
            </button>
          </div>

        </div>
      </div>

      {}
      <footer style={{
        backgroundColor: '#0c121c',
        color: '#ffffff',
        padding: '50px 20px 30px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h2 style={{ fontSize: '2rem', letterSpacing: '2px', marginBottom: '30px', fontWeight: 'bold',color:"white"}}>
          ԿՈՆՏԱԿՏՆԵՐ
        </h2>

        {}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '30px' }}>
          <span> 041-611-611</span>
          <span> AMARANOC.INFO@GMAIL.COM</span>
          <span> AMARANOC.AM</span>
          <span> AMARANOC.AM</span>
          <span> ԹՈՒՄԱՆՅԱՆ 5</span>
        </div>

        {}
        <div style={{ marginBottom: '15px' }}>
          <a href="#privacy" style={{ color: '#ffffff', textDecoration: 'underline', fontSize: '0.85rem' }}>
            Գաղտնիության քաղաքականություն
          </a>
        </div>

        <div style={{ fontSize: '0.85rem', color: '#cccccc', marginBottom: '10px' }}>
          Ամառանոց ՍՊԸ  |  Amaranoc LLC  |  Амараноц ООО
        </div>

        {}
        <div style={{
          height: '100px',
          backgroundImage: 'linear-gradient(to top, rgba(255,255,255,0.1), transparent)',
          opacity: 0.3,
          margin: '0 -20px -30px -20px'
        }}></div>
      </footer>

    </div>
  );
}