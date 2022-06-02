import Sidebar from '@portal/components/Sidebar';
import mapboxgl from 'mapbox-gl';
import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken =
  'pk.eyJ1IjoicmVuYXRvYmFyYmFzYW50b3MiLCJhIjoiY2wzdzA2NmhwMDFuNTNjbjFvamQ0Y2xtaSJ9.dcZxm0l1Qe3_Cqzx9haXkw';

const Mapa: NextPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-47.05265);
  const [lat, setLat] = useState(-22.83438);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  return (
    <div className="container-sidebar">
      <Sidebar />
      <div className="container-middle">
        <div className="map-info">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </div>
  );
};

export default Mapa;
