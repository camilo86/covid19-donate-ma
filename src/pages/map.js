import React, { useState } from "react"
import ReactMapGL, { Popup } from "react-map-gl"
import Marker from "../components/marker"
import InfoBox from "../components/InfoBox"

const mapStyle = "mapbox://styles/milomilo86/ck83uyrnc2n4l1imsjgjwmghu"

const MapPage = () => {
  const { GATSBY_MABOX_API_ACCESS_TOKEN } = process.env
  const [location, setLocation] = useState(null)
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: 42.2373,
    longitude: -71.5314,
    zoom: 8,
  })

  const renderPopup = () => {
    if (!location) return null

    return (
      <Popup
        anchor="top"
        longitude={location.longitude}
        latitude={location.latitude}
        closeOnClick={false}
        onClose={() => setLocation(null)}
      >
        <InfoBox />
      </Popup>
    )
  }

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={GATSBY_MABOX_API_ACCESS_TOKEN}
      mapStyle={mapStyle}
      onViewportChange={setViewport}
    >
      <Marker
        latitude={42.408428}
        longitude={-71.011993}
        onClick={setLocation}
      />
      {renderPopup()}
    </ReactMapGL>
  )
}

export default MapPage
