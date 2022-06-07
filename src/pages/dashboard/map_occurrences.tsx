import Sidebar from '@portal/components/Sidebar';
import { NextPage } from 'next';
import React, { useMemo, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import CITIES from '../../../CITIES.json';
import Pin from './pin';
const TOKEN =
  'pk.eyJ1IjoicmVuYXRvYmFyYmFzYW50b3MiLCJhIjoiY2wzdzA2NmhwMDFuNTNjbjFvamQ0Y2xtaSJ9.dcZxm0l1Qe3_Cqzx9haXkw';

const Mapa: NextPage = () => {
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      CITIES.features.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.geometry.coordinates[0]}
          latitude={city.geometry.coordinates[1]}
          anchor="bottom"
          style={{
            width: '20px',
            height: '20px',
            bottom: '600px',
            position: 'fixed',
          }}
          onClick={(e) => {
            console.log(city);
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  return (
    <div className="container-sidebar">
      <Sidebar />

      <div className="container-middle">
        <Map
          initialViewState={{
            latitude: -22.83,
            longitude: -47.05,
            zoom: 13,
            bearing: 0,
            pitch: 0,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={TOKEN}
          style={{ width: '100%', height: '100%' }}
          attributionControl={false}
        >
          {pins}

          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.geometry.coordinates[0])}
              latitude={Number(popupInfo.geometry.coordinates[1])}
              onClose={() => setPopupInfo(null)}
              style={{ bottom: '600px', position: 'fixed' }}
            >
              <div
                style={{
                  width: '250px',
                  height: '100px',
                  backgroundColor: 'white',
                  borderRadius: 16,
                }}
              >
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <h4 style={{ fontWeight: 'bold' }}>Nome Ocorrencia</h4>
                </div>

                <div style={{ marginLeft: '5px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    Tipo:
                    <span style={{ fontWeight: 'normal' }}> Crime</span>
                  </p>
                  <p style={{ fontWeight: 'bold' }}>
                    Subtipo:
                    <span style={{ fontWeight: 'normal' }}> Muito Crime</span>
                  </p>
                </div>

                <img width="100%" src={popupInfo.image} />
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
};

export default Mapa;
