import React from "react"
import PropTypes from "prop-types"
import { Marker } from "react-map-gl"
import Icon from "../assets/map-marker-solid.svg"

const style = {
  width: "30px",
  height: "50px",
  color: "#2c3e50",
}

const MapMarker = ({ latitude, longitude }) => (
  <Marker
    latitude={latitude}
    longitude={longitude}
    offsetLeft={-15}
    offsetTop={-50}
  >
    <Icon style={style} />
  </Marker>
)

MapMarker.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
}

export default MapMarker
