import React from "react"
import { Card, Col, ProgressBar, Row } from "react-bootstrap"
import Icon from "../Icon"
export default function Stats11(props) {
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column justify-content-between">
        <Row className="gx-1">
          <Col>
            <Icon
              icon={props.icon}
              className={`mb-3 ${
                props.color ? "text-" + props.color : "text-primary"
              }`}
            />
            <p className="subtitle text-gray-600">{props.name}</p>
          </Col>
          <Col className="text-end">
            <h4
              className={props.color ? "text-" + props.color : "text-primary"}
            >
              {props.number}
            </h4>
          </Col>
        </Row>
        <ProgressBar now={props.progress} variant={props.color} />
      </Card.Body>
    </Card>
  )
}
