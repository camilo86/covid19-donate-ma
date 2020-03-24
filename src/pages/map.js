import React, { useState } from "react"
import ReactMapGL from "react-map-gl"
import Marker from "../components/marker"

const mapStyle = "mapbox://styles/milomilo86/ck83uyrnc2n4l1imsjgjwmghu"

const MapPage = () => {
  const { GATSBY_MABOX_API_ACCESS_TOKEN } = process.env
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: 42.2373,
    longitude: -71.5314,
    zoom: 8,
  })

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={GATSBY_MABOX_API_ACCESS_TOKEN}
      mapStyle={mapStyle}
      onViewportChange={setViewport}
    >
      <Marker latitude={42.408428} longitude={-71.011993} />
    </ReactMapGL>
  )
}

export default MapPage
