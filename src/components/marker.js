import React from "react"
import PropTypes from "prop-types"
import { Marker } from "react-map-gl"
import Icon from "../assets/map-marker-solid.svg"

const style = {
  width: "30px",
  height: "50px",
  color: "#2c3e50",
  cursor: "pointer",
}

const MapMarker = ({ location, onClick }) => {
  const { latitude, longitude } = location.geo

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      offsetLeft={-15}
      offsetTop={-50}
    >
      <Icon style={style} onClick={() => onClick(location)} />
    </Marker>
  )
}

MapMarker.propTypes = {
  location: PropTypes.shape({
    geo: PropTypes.shape({
      longitude: PropTypes.number.isRequired,
      latitude: PropTypes.number.isRequired,
    }),
  }),
  onClick: PropTypes.func.isRequired,
}

export default MapMarker
