import React from "react"
import { Card } from "react-bootstrap"

export default function CardOverlay({
  className,
  img,
  title,
  text,
  textMuted,
}) {
  return (
    <Card className={`card-inverse text-white  ${className ? className : ""}`}>
      <Card.Img src={img} />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>
          <small>{textMuted}</small>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}
