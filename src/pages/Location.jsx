import React, { useEffect, useRef } from 'react';
import '../index.css';
import '../App.css';
import '../components/css/location.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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
     <main>

    
            <h2 className='titulo'>📍 Venha nos visitar!</h2>
            <p>Veja abaixo o mapa com a localização da <strong>Igreja Novo Tempo</strong>. Estamos de portas abertas para recebê-lo!</p>

      {/* <div className="container my-4">
        <h2>Localização do Endereço</h2> */}
        {/* <div
          ref={mapRef}
          style={{ height: '400px', width: '100%' }}
        ></div> */}

<div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.6227920323136!2d-46.7061001!3d-23.329440999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee5b4774b492b%3A0xf56f15ce3cf2758b!2sR.%20Jaime%20Duprat%2C%20530%20-%20Parque%20Vitoria%2C%20Franco%20da%20Rocha%20-%20SP%2C%2007857-080!5e0!3m2!1spt-BR!2sbr!4v1742171048935!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização no Google Maps"
        ></iframe>
      </div>

      <div className="button-container">
        <a
          href="https://www.google.com/maps/dir//R.+Jaime+Duprat,+530+-+Parque+Vitoria+Franco+da+Rocha+-+SP+07857-080/@-23.329441,-46.7061001,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cee5b4774b492b:0xf56f15ce3cf2758b!2m2!1d-46.7061001!2d-23.329441?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="map-button"
        >
          Abrir no Google Maps
        </a>
      </div>
    </div>
    </main>
    </>
  );
};

export default Location;
