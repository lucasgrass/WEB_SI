import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import Sidebar from '@portal/components/Sidebar';
import { cities } from '@portal/mocks/cities';
import { MapInfoProps } from '@portal/models/module';
import { NextPage } from 'next';
import React, { useMemo, useState } from 'react';
import Map, { Layer, LayerProps, Marker, Popup, Source } from 'react-map-gl';
import Pin from './pin';

const TOKEN =
  'pk.eyJ1IjoicmVuYXRvYmFyYmFzYW50b3MiLCJhIjoiY2wzdzA2NmhwMDFuNTNjbjFvamQ0Y2xtaSJ9.dcZxm0l1Qe3_Cqzx9haXkw';

const haversine = (lng1: number, lat1: number, lng2: number, lat2: number) => {
  const R = 6371;

  let lng_diff = lng2 - lng1;
  let lat_diff = lat2 - lat1;
  let dLng = (lng_diff * Math.PI) / 180;
  let dLat = (lat_diff * Math.PI) / 180;

  let area =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  let circle = 2 * Math.atan2(Math.sqrt(area), Math.sqrt(1 - area));

  return R * circle;
};

const Mapa: NextPage = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [filterType, setfilterType] = useState<MapInfoProps | null>(null);
  const [lng, setLng] = useState(-47.05);
  const [lat, setLat] = useState(-22.83);
  const [zoom, setZoom] = useState(13);
  const [visible, setVisible] = useState(false);
  const [typeName, setTypeName] = useState('');

  const radiusStyle: LayerProps = {
    id: 'radius',
    type: 'circle',
    paint: {
      'circle-radius': 300 / (zoom / 10),
      'circle-color': 'rgba(162,0,255,0.3)',
    },
  };

  const pointerStyle: LayerProps = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': 'rgba(0,0,255,0.7)',
    },
  };

  const pins = useMemo(
    () =>
      filterType
        ? filterType.features.map((city, index) => (
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
                e.originalEvent.stopPropagation();
                setPopupInfo(city);
              }}
            >
              <Pin />
            </Marker>
          ))
        : cities.features.map((city, index) => (
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
                e.originalEvent.stopPropagation();
                setPopupInfo(city);
              }}
            >
              <Pin />
            </Marker>
          )),

    [filterType]
  );

  return (
    <div className="container-sidebar">
      <Sidebar />

      <div className="container-middle">
        <Map
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: zoom,
            bearing: 0,
            pitch: 0,
          }}
          minZoom={13}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={TOKEN}
          style={{ width: '100%', height: '100%' }}
          attributionControl={false}
          onMove={(e) => {
            let longitude = e.viewState.longitude;
            let latitude = e.viewState.latitude;
            let zoom = parseInt(e.viewState.zoom.toFixed(2));
            setLng(longitude);
            setLat(latitude);
            setZoom(zoom);

            if (visible) {
              let obj = Object.assign({}, cities);
              let filtered_arr = obj.features.filter((item) => {
                let h = haversine(
                  lng,
                  lat,
                  item.geometry.coordinates[0],
                  item.geometry.coordinates[1]
                );

                if (h <= 1.76) return item;
              });

              obj.features = filtered_arr;
              setfilterType(obj);
            } else {
              setfilterType(null);
            }
          }}
        >
          {/* <div>
            {lng} {lat} {zoom}
          </div> */}
          <div
            style={{
              position: 'fixed',
              left: '120px',
              bottom: '520px',
              flexDirection: 'row',
            }}
          >
            <Typography fontWeight={'bold'} fontSize={20}>
              Filtros
            </Typography>
            <FormControl
              style={{
                width: '200px',
                backgroundColor: 'white',
              }}
            >
              <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeName}
                label="Tipo"
                autoFocus={false}
                onSelect={(event) => {
                  event.target.addEventListener('blur', (e) => {
                    e.stopPropagation();
                  });
                }}
                onChange={(event: SelectChangeEvent) => {
                  setVisible(false);
                  setTypeName(event.target.value as string);

                  if ((event.target.value as string) !== '') {
                    let obj = Object.assign({}, cities);
                    let filtered_arr = obj.features.filter((item) => {
                      return (
                        item.properties.tipo === (event.target.value as string)
                      );
                    });

                    obj.features = filtered_arr;

                    setfilterType(obj);
                  } else {
                    setfilterType(null);
                  }
                }}
              >
                <MenuItem value={''}>Escolha um Tipo</MenuItem>
                {cities.features.map((item) => (
                  <MenuItem value={item.properties.tipo}>
                    {item.properties.tipo}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              size="large"
              variant="contained"
              style={{
                backgroundColor: '#a200ff',
                marginTop: '5px',
                marginLeft: '5px',
              }}
              onClick={() => {
                setVisible(!visible);
              }}
            >
              Raio
            </Button>
          </div>
          {pins}

          {visible && (
            <>
              <Source
                id="my-data"
                type="geojson"
                data={{
                  type: 'FeatureCollection',
                  features: [
                    {
                      type: 'Feature',
                      properties: {},
                      geometry: {
                        type: 'Point',
                        coordinates: [lng, lat],
                      },
                    },
                  ],
                }}
              >
                <Layer {...pointerStyle} />
                <Layer {...radiusStyle} />
              </Source>
            </>
          )}

          <Source
            id="my-data"
            type="geojson"
            data={{
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: [lng, lat],
                  },
                },
              ],
            }}
          >
            <Layer {...pointerStyle} />
          </Source>

          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.geometry.coordinates[0])}
              latitude={Number(popupInfo.geometry.coordinates[1])}
              onClose={() => setPopupInfo(null)}
              style={{ bottom: '615px', position: 'fixed' }}
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
                  <h4 style={{ fontWeight: 'bold' }}>
                    {popupInfo.properties.nome}
                  </h4>
                </div>

                <div style={{ marginLeft: '5px' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    Tipo:
                    <span style={{ fontWeight: 'normal' }}>
                      {' '}
                      {popupInfo.properties.tipo}
                    </span>
                  </p>
                  <p style={{ fontWeight: 'bold' }}>
                    Subtipo:
                    <span style={{ fontWeight: 'normal' }}>
                      {' '}
                      {popupInfo.properties.subtipos}
                    </span>
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
