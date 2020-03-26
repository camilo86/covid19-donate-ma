import React from "react"
import { FaMapMarkedAlt } from "react-icons/fa"
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  ButtonGroup,
  Button,
} from "react-bootstrap"

const smallHeadingStyle = {
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: 12,
}

const InfoBox = () => (
  <Container style={{ width: "25rem" }}>
    <Row>
      <Col>
        <h5 style={{ marginTop: 10 }}>Massachussets General Hospital</h5>
      </Col>
    </Row>
    <Row style={{ paddingTop: 30 }}>
      <Col>
        <p style={smallHeadingStyle}>Address</p>
        <address>
          1355 Market Street, Suite 900
          <br />
          San Francisco, CA 94103
          <br />
          <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>
      </Col>
    </Row>
    <Row style={{ paddingTop: 30 }}>
      <Col>
        <p style={smallHeadingStyle}>Looking for</p>
        <ListGroup variant="flush">
          <ListGroupItem>N95 Masks</ListGroupItem>
          <ListGroupItem>Paper masks</ListGroupItem>
          <ListGroupItem>Paper protective gowns</ListGroupItem>
          <ListGroupItem>Tochless digital thermometers</ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
    <Row style={{ paddingTop: 30 }}>
      <Col>
        <p style={smallHeadingStyle}>Sources</p>
        <ul style={{ wordWrap: "break-word" }}>
          <li>
            <a href="https://www.challiance.org/about/newsroom/personal_protective_equipment_ppe_donations_1179">
              https://www.challiance.org/about/newsroom/personal_protective_equipment_ppe_donations_1179
            </a>
          </li>
          <li>
            <a href="https://www.challiance.org/about/newsroom/personal_protective_equipment_ppe_donations_1179">
              https://www.challiance.org/about/newsroom/personal_protective_equipment_ppe_donations_1179
            </a>
          </li>
        </ul>
      </Col>
    </Row>
    <Row style={{ paddingTop: 30 }}>
      <Col>
        <ButtonGroup style={{ width: "100%" }}>
          <Button variant="secondary">Learn more</Button>
          <Button>View in Google Maps</Button>
        </ButtonGroup>
      </Col>
    </Row>
  </Container>
)

export default InfoBox
