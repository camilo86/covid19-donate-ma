import React, { useState } from "react"
import { graphql } from "gatsby"
import ReactMapGL, { Popup } from "react-map-gl"
import { Navbar, Button } from "react-bootstrap"
import { FaGithub } from "react-icons/fa"
import useWindowDimensions from "../utils/useWindowDimensions"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Marker from "../components/marker"
import InfoBox from "../components/InfoBox"

const mapStyle = "mapbox://styles/milomilo86/ck83uyrnc2n4l1imsjgjwmghu"

const MapPage = ({ data }) => {
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
        longitude={location.geo.longitude}
        latitude={location.geo.latitude}
        closeOnClick={false}
        onClose={() => setLocation(null)}
      >
        <InfoBox location={location} />
      </Popup>
    )
  }

  return (
    <Layout>
      <Seo title="MA PPE donation map" />
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
        {data.allLocationsYaml.edges.map(({ node: location }) => (
          <Marker key={location.id} location={location} onClick={setLocation} />
        ))}
        {renderPopup()}
      </ReactMapGL>
    </Layout>
  )
}

export const query = graphql`
  {
    allLocationsYaml {
      edges {
        node {
          id
          name
          address {
            line1
            city
            state
            zipcode
          }
          geo {
            longitude
            latitude
          }
          contact {
            phone
          }
          needs
          sources
        }
      }
    }
  }
`

export default MapPage
