import React from 'react'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import styles from '../utils/mapStyles'

const MapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDMpDkPdvwEG9mxQ3sA6vaKrq64V7trj_4',
    loadingElement: <div style={{ height: 400 }} />,
    containerElement: (
      <div
        style={{
          height: 400,
          borderRadius: 4,
          overflow: 'hidden',
          width: '100%'
        }}
      />
    ),
    mapElement: <div style={{ height: 400 }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ coordinates }) => (
  <GoogleMap
    defaultOptions={{ styles }}
    defaultZoom={15}
    defaultCenter={coordinates}
  >
    <Marker position={coordinates} />
  </GoogleMap>
))

export default MapComponent
