import React from "react"
import PropTypes from "prop-types"
import { parsePhoneNumberFromString } from "libphonenumber-js"
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap"

const smallHeadingStyle = {
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: 12,
}

const InfoBox = ({ location }) => {
  return (
    <Container style={{ width: "25rem" }}>
      <Row>
        <Col>
          <h5 style={{ marginTop: 10 }}>{location.name}</h5>
        </Col>
      </Row>
      <Row style={{ paddingTop: 30 }}>
        <Col>
          <p style={smallHeadingStyle}>Address</p>
          <address>
            {location.address.line1}
            <br />
            {location.address.city}, {location.address.state.toUpperCase()}{" "}
            {location.address.zipcode}
            <br />
            <abbr title="Phone">P:</abbr>{" "}
            {parsePhoneNumberFromString(
              location.contact.phone
            ).formatInternational()}
          </address>
        </Col>
      </Row>
      <Row style={{ paddingTop: 30 }}>
        <Col>
          <p style={smallHeadingStyle}>Looking for</p>
          <ListGroup variant="flush">
            {location.needs.map((need, index) => (
              <ListGroupItem key={`location.${location.id}.need.${index}`}>
                {need}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row style={{ paddingTop: 30 }}>
        <Col>
          <p style={smallHeadingStyle}>Sources</p>
          <ul style={{ wordWrap: "break-word" }}>
            {location.sources.map((source, index) => (
              <li key={`location.${location.id}.source.${index}`}>
                <a href={source}>{source}</a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row style={{ paddingTop: 30 }}>
        <Col>
          <a
            className="btn btn-primary"
            style={{ width: "100%", color: "white" }}
            href={`https://maps.google.com/?ll=${location.geo.latitude},${location.geo.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View in Google Maps
          </a>
        </Col>
      </Row>
    </Container>
  )
}

InfoBox.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      line1: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }),
    geo: PropTypes.shape({
      longitude: PropTypes.number.isRequired,
      latitude: PropTypes.number.isRequired,
    }),
    contact: PropTypes.shape({
      phone: PropTypes.string.isRequired,
    }),
    needs: PropTypes.arrayOf(PropTypes.string),
    sources: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default InfoBox
