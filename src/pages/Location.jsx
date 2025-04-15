import React, { useEffect, useRef } from 'react';
import '../index.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Location = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_REAL&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = function () {
      const endereco = { lat: -23.3239659, lng: -46.7312825 };

      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 16,
        center: endereco,
      });

      new window.google.maps.Marker({
        position: endereco,
        map,
        title: 'Rua Jaime Duprat, 530, Franco da Rocha - SP',
      });
    };

    document.body.appendChild(script);

    return () => {
      delete window.initMap;
    };
  }, []);

  return (
    <>
     

      <div className="container my-4">
        <h2>Localização do Endereço</h2>
        <div
          ref={mapRef}
          style={{ height: '400px', width: '100%' }}
        ></div>

        <iframe
          title="Google Maps Embed"
          width="100%"
          height="400"
          style={{ border: 0, marginTop: '20px' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=SUA_CHAVE_REAL&q=Rua+Jaime+Duprat,530,Parque+Vitoria,Franco+da+Rocha,SP"
        ></iframe>
      </div>

    
    </>
  );
};

export default Location;
