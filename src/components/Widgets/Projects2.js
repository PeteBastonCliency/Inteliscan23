import React from "react"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, Button, InputGroup, FormControl } from "react-bootstrap"
import CardHeaderMore from "../CardHeaderMore"
import Avatar from "../Avatar"
export default function Projects2({ data }) {
  return (
    <Card className="h-100">
      <Card.Header>
        <h5 className="card-heading">Projects</h5>
        <CardHeaderMore />
      </Card.Header>
      <Card.Body>
        <div className="mb-5">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <p className="mb-2">
                {item.name} <span className="float-end">{item.date}</span>
              </p>
              <div className="mb-3">
                {item.participants.map((participant, index) => (
                  <Avatar
                    key={index}
                    image={participant.img}
                    alt={participant.name}
                    border
                    size="sm"
                    className="avatar-stacked"
                  />
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Quickly Add New Project"
            autoComplete="off"
          />
          <Button type="submit">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  )
}
