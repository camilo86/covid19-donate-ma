import React, { useState } from "react"
import ReactMapGL, { Popup } from "react-map-gl"
import { Navbar, Button } from "react-bootstrap"
import { FaGithub } from "react-icons/fa"
import useWindowDimensions from "../utils/useWindowDimensions"
import Marker from "../components/marker"
import InfoBox from "../components/InfoBox"

const mapStyle = "mapbox://styles/milomilo86/ck83uyrnc2n4l1imsjgjwmghu"

const MapPage = () => {
  const { GATSBY_MABOX_API_ACCESS_TOKEN } = process.env

  const { width, height } = useWindowDimensions()
  const [location, setLocation] = useState(null)
  const [viewport, setViewport] = useState({
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
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          Covid19 PPE donations - Massachusetts
        </Navbar.Brand>
        <Navbar.Collapse></Navbar.Collapse>
        <Button
          style={{ display: "flex", alignItems: "center" }}
          href="https://github.com/camilo86/covid19-donate-ma"
        >
          <FaGithub style={{ marginRight: 5 }} /> View on GitHub
        </Button>
      </Navbar>
      <ReactMapGL
        {...viewport}
        width={width}
        height={height - 56}
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
    </div>
  )
}

export default MapPage
