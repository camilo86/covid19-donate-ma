import React from "react"
import PropTypes from "prop-types"
import { Marker } from "react-map-gl"

const style = {
  width: "10px",
  height: "10px",
  backgroundColor: "red",
}

const MapMarker = ({ latitude, longitude }) => (
  <Marker latitude={latitude} longitude={longitude}>
    <div style={style}></div>
  </Marker>
)

MapMarker.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
}

export default MapMarker
