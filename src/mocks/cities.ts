import { MapInfoProps } from '@portal/models/module';

export const cities: MapInfoProps = {
  type: 'FeatureCollection',
  name: 'states and District of Columbia',
  crs: {
    type: 'name',
    properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
  },
  features: [
    {
      type: 'Feature',
      properties: {
        nome: 'Crime',
        tipo: 'Crime',
        subtipos: 'Muito Crime',
      },
      geometry: { type: 'Point', coordinates: [-47.05265, -22.83438] },
    },
    {
      type: 'Feature',
      properties: {
        nome: 'Crime',
        tipo: 'Buraco',
        subtipos: 'Muito Crime',
      },
      geometry: { type: 'Point', coordinates: [-47.05265, -22.85438] },
    },
  ],
};
