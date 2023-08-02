import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

const App = () => {
    const [sehir, setSehir] = useState('');
    const [havaData, setHavaData] = useState(null);

    const apiKey = 'YRE0Ou5X1GL8Cb7oO7DqL8GfBE53ryrD';
    const apiUrl = 'https://api.tomorrow.io/v4/timelines';

    const getHavaData = async () => {
        try {
            const response = await axios.get(apiUrl, {
                params: {
                    location: sehir,
                    fields: 'temperature',
                    timesteps: '1h',
                    units: 'metric',
                    apikey: apiKey,
                },
            });
            setHavaData(response.data);
        } catch (err) {
            console.error('Hava durumu verileri alınırken hata oluştu:', err);
            setHavaData(null);
        }
    };

    const sehirChange = (event) => {
        setSehir(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getHavaData();
    };

    const handleReset = () => {
        setSehir('');
        setHavaData(null);
    };

    return (
        <div className='mainDiv'>
            <img src='resimler/weather.jpg' alt="" className='resim' />
            <h1 className='baslik'>Hava Durumu</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input className='inputAlanı'
                    type="text"
                    value={sehir}
                    onChange={sehirChange}
                    placeholder="Şehir Adı Giriniz..."
                />
                <button className='buttonGonder' type="submit">Hava Durumu Al</button>
                <button className='buttonGonder' onClick={handleReset}>Sıfırla</button>
            </form>
            {havaData && (
                <div>
                    <h2 style={{ color: "#d1e9eb" }}>{sehir} Hava Durumu Verileri</h2>
                    <p className='lastDeger'>
                        Sıcaklık: {havaData.data.timelines[0].intervals[0].values.temperature} °C
                    </p>
                </div>
            )}
        </div>
    );
};

export default App;