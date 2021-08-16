import { useEffect, useRef, useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import PageHeader from "../components/PageHeader"
import { DataTable } from "simple-datatables"

import data from "../data/cms-category.json"
import Link from "next/link"

export async function getStaticProps() {
  return {
    props: {
      title: "Categories",
    },
  }
}
export default function cmsCategory(props) {
  const dataTableRef = useRef(false)
  const categoryBulkActionRef = useRef(false)
  const [tableLoaded, setTableLoaded] = useState(false)
  useEffect(() => {
    const dataTable = new DataTable(dataTableRef.current, {
      columns: [
        // Disable sorting on the first column
        { select: [0], sortable: false },
      ],
    })
    function adjustTableColumns() {
      let columns = dataTable.columns()

      if (window.innerWidth > 900) {
        columns.show([2, 3, 4, 5])
      } else if (window.innerWidth > 600) {
        columns.hide([4, 5])
        columns.show([2, 3])
      } else {
        columns.hide([2, 3, 4, 5])
      }
    }

    adjustTableColumns()
    window.addEventListener("resize", adjustTableColumns)

    dataTable.on("datatable.init", function () {
      const header = document.querySelector(
        ".dataTable-top .dataTable-dropdown"
      )
      header.prepend(categoryBulkActionRef.current)

      const input = document.querySelector(".dataTable-input")
      input.classList.add("form-control", "form-control-sm")

      const dataTableSelect = document.querySelector(".dataTable-selector")
      dataTableSelect.classList.add("form-select", "form-select-sm")

      const dataTableContainer = document.querySelector(".dataTable-container")
      dataTableContainer.classList.add("border-0")

      setTableLoaded(true)
    })
  }, [])
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <PageHeader title={props.title} />
      <section>
        <Row className="mb-5">
          <Col lg={4}>
            <Card className="mb-4 mb-lg-0">
              <Card.Body>
                <div className="mb-4">
                  <Form.Label htmlFor="categoryName">Name</Form.Label>
                  <Form.Control
                    id="categoryName"
                    type="text"
                    className="mb-2"
                  />
                  <Form.Text>
                    The name is how it appears on your site.
                  </Form.Text>
                </div>
                <div className="mb-4">
                  <Form.Label htmlFor="categorySlug">Slug</Form.Label>
                  <Form.Control
                    id="categorySlug"
                    type="text"
                    className="mb-2"
                  />
                  <Form.Text>
                    The “slug” is the URL-friendly version of the name. It is
                    usually all lowercase and contains only letters, numbers,
                    and hyphens.
                  </Form.Text>
                </div>
                <div className="mb-4">
                  <Form.Label htmlFor="categoryParent">Parent</Form.Label>
                  <Form.Select
                    id="categoryParent"
                    name="categoryParent"
                    className="mb-2"
                  >
                    <option value="0">None</option>
                    <option value="0">Gear</option>
                    <option value="1">Stories</option>
                    <option value="2">Tips &amp; Tricks</option>
                    <option value="3">Trips</option>
                    <option value="4">Gear</option>
                    <option value="5">Stories</option>
                    <option value="6">Tips &amp; Tricks</option>
                    <option value="7">Trips</option>
                    <option value="8">Uncategorized</option>
                  </Form.Select>
                  <Form.Text>
                    Categories, unlike tags, can have a hierarchy. You might
                    have a Jazz category, and under that have children
                    categories for Bebop and Big Band. Totally optional.
                  </Form.Text>
                </div>
                <div className="mb-4">
                  <Form.Label htmlFor="categoryDescription">
                    Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    id="categoryDescription"
                    name="categoryDescription"
                    className="mb-2"
                  />
                  <Form.Text>
                    The description is not prominent by default; however, some
                    themes may show it.
                  </Form.Text>
                </div>
                <Button variant="primary" className="mb-4">
                  Add New Category
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="card-table">
              <div
                className={`preload-wrapper  ${
                  tableLoaded ? "opacity-10" : ""
                }`}
              >
                <table
                  className="table table-hover align-middle mb-0"
                  ref={dataTableRef}
                >
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Slug</th>
                      <th>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.categories.map((category, index) => (
                      <tr key={index}>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>
                          <Link href="/cms-post">
                            <a className="text-decoration-none text-reset fw-bolder">
                              {category.name}
                            </a>
                          </Link>
                        </td>
                        <td>-</td>
                        <td>{category.slug}</td>
                        <td className="text-end">
                          <Link href="/cms-post">
                            <a className="text-decoration-none">
                              {category.count}
                            </a>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <span className="me-2" ref={categoryBulkActionRef}>
                  <Form.Select
                    size="sm"
                    className="d-inline w-auto me-1 mb-1 mb-lg-0"
                    name="categoryBulkAction"
                  >
                    <option>Bulk Actions</option>
                    <option>Delete</option>
                  </Form.Select>
                  <Button
                    size="sm"
                    variant="outline-primary"
                    className="align-top mb-1 mb-lg-0"
                  >
                    Apply
                  </Button>
                </span>
              </div>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  )
}
