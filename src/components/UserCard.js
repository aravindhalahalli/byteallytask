import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Col, Row, Container } from "react-bootstrap";

const UserCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="user_component">
      <img
        src={props.picture.large}
        alt={props.name.first}
        className="poster"
      />
      <div className="user-info">
        <h2>{`${props.name.title}  ${props.name.first}`}</h2>
      </div>
      <div className="hover-info">
        <h4>{`FullName : ${props.name.first} ${props.name.last}`}</h4>
        <h4>{`Gender : ${props.gender}`}</h4>
        <h4>{`Email : ${props.email} `}</h4>
        <button className="getinfobtn" onClick={handleShow}>
          Get More Info
        </button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>User Detailed Info</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Row>
                <Col xs={12} md={8}>
                  <h5>
                    Full_Name: {props.name.first} {props.name.last}
                  </h5>
                </Col>
                <Col xs={6} md={4}>
                  <h5>Gender: {props.gender}</h5>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col xs={12} md={8}>
                  <h5>
                    Location: {props.location.state}, {props.location.country}
                  </h5>
                </Col>
                <Col xs={6} md={4}>
                  <h5>Pin_Code: {props.location.postcode}</h5>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col xs={12} md={12}>
                  <h5>Email: {props.email}</h5>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col xs={12} md={6}>
                  <h5>Phone: {props.phone}</h5>
                </Col>
                <Col xs={12} md={6}>
                  <h5>Cell: {props.cell}</h5>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col>
                  <img src={props.picture.thumbnail} alt="img" />
                </Col>
              </Row>
            </Container>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default UserCard;
