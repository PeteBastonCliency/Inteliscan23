import { useState } from "react"
import {
  Row,
  Col,
  Card,
  Container,
  Form,
  Button,
  Collapse,
} from "react-bootstrap"
import Datepicker from "../components/Datepicker"

import PageHeader from "../components/PageHeader"
import Editor from "../components/Editor"
import { Choices } from "../components/Choices"
import data from "../data/cms-post-new.json"

export async function getStaticProps() {
  return {
    props: {
      title: "Add new post",
    },
  }
}
export default function cmsPost(props) {
  const [statusOpen, setStatusOpen] = useState(false)
  const [visibilityOpen, setVisibilityOpen] = useState(false)
  const [publishOpen, setPublishOpen] = useState(false)

  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <PageHeader title={props.title} />
      <section>
        <Row className="mb-5">
          <Col lg={8} xxl={9} className="mb-4 mb-lg-0">
            <Card>
              <Card.Body>
                <Form.Label htmlFor="postTitle">Title</Form.Label>
                <Form.Control id="postTitle" type="text" className="mb-4" />
                <Button variant="outline-primary" className="mb-4">
                  Add Media
                </Button>
                <Editor withEditor text={data.text} />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} xxl={3}>
            <Card className="shadow-sm mb-4">
              <Card.Header>
                <h4 className="card-heading">Publish</h4>
              </Card.Header>
              <Card.Body className="text-gray-700">
                <div className="d-flex mb-4 justify-content-between">
                  <Button size="sm" variant="outline-secondary">
                    Save Draft
                  </Button>
                  <Button size="sm" variant="outline-secondary">
                    Preview
                  </Button>
                </div>
                <hr className="bg-gray-500" />
                <div className="mb-3">
                  Status: <strong>Draft </strong>
                  <a
                    className="ms-2 text-sm"
                    role="button"
                    aria-expanded={statusOpen}
                    aria-controls="collapseStatus"
                    onClick={() => setStatusOpen(!statusOpen)}
                  >
                    Edit
                  </a>
                  <Collapse in={statusOpen}>
                    <div className="py-2">
                      <Form.Select
                        aria-label="Default select example"
                        size="sm"
                      >
                        <option>Draft</option>
                        <option>Pending Review</option>
                      </Form.Select>
                    </div>
                  </Collapse>
                </div>
                <div className="mb-3">
                  Visibility: <strong>Public </strong>
                  <a
                    className="ms-2 text-sm"
                    role="button"
                    aria-expanded={visibilityOpen}
                    aria-controls="collapseVisibility"
                    onClick={() => setVisibilityOpen(!visibilityOpen)}
                  >
                    Edit
                  </a>
                  <Collapse in={visibilityOpen}>
                    <div className="py-2">
                      <Form.Check
                        type="radio"
                        name="visibility"
                        id="visibility1"
                        label="Public"
                        defaultChecked
                      />
                      <Form.Check
                        type="radio"
                        name="visibility"
                        id="visibility2"
                        label="Password protected"
                      />
                      <Form.Check
                        type="radio"
                        name="visibility"
                        id="visibility3"
                        label="Private"
                      />
                    </div>
                  </Collapse>
                </div>
                <div className="mb-3">
                  Publish: <strong>immediately </strong>
                  <a
                    className="ms-2 text-sm"
                    role="button"
                    aria-expanded={publishOpen}
                    aria-controls="collapseVisibility"
                    onClick={() => setPublishOpen(!publishOpen)}
                  >
                    Edit
                  </a>
                  <Collapse in={publishOpen}>
                    <div className="py-3">
                      <Row className="g-2">
                        <Col lg={6}>
                          <Datepicker
                            size="sm"
                            id="datePublished"
                            defaultValue="10/20/2017"
                          />
                        </Col>
                        <Col lg={6}>
                          <div className="d-flex align-items-center text-sm">
                            <span className="me-1">at</span>
                            <Form.Control
                              size="sm"
                              id="hoursPublished"
                              type="text"
                              defaultValue="8"
                              className="text-center"
                            />
                            <span className="mx-1">:</span>
                            <Form.Control
                              size="sm"
                              id="minutesPublished"
                              type="text"
                              defaultValue="00"
                              className="text-center"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Collapse>
                </div>
              </Card.Body>
              <Card.Footer className="text-end">
                <Button variant="primary">Publish</Button>
              </Card.Footer>
            </Card>
            {data.formatBlock && (
              <Card className="shadow-sm mb-4">
                <Card.Header>
                  <h4 className="card-heading">{data.formatBlock.name}</h4>
                </Card.Header>
                <Card.Body>
                  {data.formatBlock.items.map((item) => (
                    <Form.Check {...item} type="radio" key={item.id} />
                  ))}
                </Card.Body>
              </Card>
            )}
            {data.categoriesBlock && (
              <Card className="shadow-sm mb-4">
                <Card.Header>
                  <h4 className="card-heading">{data.categoriesBlock.name}</h4>
                </Card.Header>
                <Card.Body>
                  <div className="mb-4">
                    {data.categoriesBlock.items.map((item) => (
                      <Form.Check {...item} type="checkbox" key={item.id} />
                    ))}
                  </div>
                  <Button variant="link" href="#">
                    + Add New Category
                  </Button>
                </Card.Body>
              </Card>
            )}
            {data.tags && (
              <Card className="shadow-sm mb-4">
                <Card.Header>
                  <h4 className="card-heading">{data.tags.name}</h4>
                </Card.Header>
                <Card.Body>
                  <Choices
                    defaultValue={data.tags.items}
                    placeholder="Enter something"
                    id="tags"
                  />
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </section>
    </Container>
  )
}
