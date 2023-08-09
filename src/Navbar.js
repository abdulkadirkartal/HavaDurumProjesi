import React, { useState, useEffect } from 'react';

const Navbar = ({ onSelectCity }) => {
  const [currentCity, setCurrentCity] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleCityClick = (sehirAdi) => {
    setCurrentCity(sehirAdi);
    onSelectCity(sehirAdi);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className="iller">
      <a href="#" onClick={() => handleCityClick('İstanbul')}>
        İstanbul
      </a>
      <a href="#" onClick={() => handleCityClick('Ankara')}>
        Ankara
      </a>
      <a href="#" onClick={() => handleCityClick('İzmir')}>
        İzmir
      </a>
      <a href="#" onClick={() => handleCityClick('Antalya')}>
        Antalya
      </a>
      <a href="#" onClick={() => handleCityClick('Muğla')}>
        Muğla
      </a>
      <a href="#" onClick={() => handleCityClick('Konya')}>
        Konya
      </a>
      <a href="#" onClick={() => handleCityClick('Adana')}>
        Adana
      </a>
      <a href="#" onClick={() => handleCityClick('Trabzon')}>
        Trabzon
      </a>
      <a href="#" onClick={() => handleCityClick('Malatya')}>
        Malatya
      </a>
      <a href="#" onClick={() => handleCityClick('Diyarbakır')}>
        Diyarbakır
      </a>
      <a href="#" onClick={() => handleCityClick('Erzurum')}>
        Erzurum
      </a>
      <a href="#" onClick={() => handleCityClick('Sivas')}>
        Sivas
      </a>
      <a href="#" onClick={() => handleCityClick('Hatay')}>
        Hatay
      </a>
      <span className="saat">Saat: {currentTime.toLocaleTimeString()}</span>
    </nav>
  );
};

export default Navbar;
