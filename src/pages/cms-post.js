import Link from "next/link"
import { Button, Card, Container, Form } from "react-bootstrap"
import Image from "../components/CustomImage"

import data from "../data/cms-post.json"

import { DataTable } from "simple-datatables"
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export async function getStaticProps() {
  return {
    props: {
      title: "Posts",
    },
  }
}
export default function cmsPost(props) {
  const dataTableRef = useRef(false)
  const [tableLoaded, setTableLoaded] = useState(false)
  const categoryBulkActionRef = useRef(false)
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
        columns.show([1, 3, 4, 5])
      } else if (window.innerWidth > 600) {
        columns.hide([4, 5])
        columns.show([1, 3])
      } else {
        columns.hide([1, 3, 4, 5])
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
      <div className="page-header d-flex justify-content-between align-items-center">
        <h1 className="page-heading">{props.title}</h1>
        <div>
          <Link href="/cms-post-new" passHref>
            <Button variant="primary" className="text-uppercase">
              <FontAwesomeIcon icon={faPlus} /> Add new
            </Button>
          </Link>
        </div>
      </div>
      <section className="mb-5">
        <Card className="card-table">
          <div
            className={`preload-wrapper  ${tableLoaded ? "opacity-10" : ""}`}
          >
            <table
              className="table table-hover align-middle mb-0"
              ref={dataTableRef}
            >
              <thead>
                <tr>
                  <th> </th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Categories</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Form.Check type="checkbox" />
                    </td>
                    <td>
                      <Link href={item.link}>
                        <a className="text-decoration-none text-reset d-flex align-items-center">
                          <span
                            className="d-inline-block me-3"
                            style={{ width: "100px" }}
                          >
                            <Image
                              layout="responsive"
                              width={100}
                              height={66}
                              src={item.img}
                              alt={item.name}
                              loading="eager"
                              className="img-fluid rounded"
                              sizes="100px"
                            />
                          </span>
                          <strong>{item.name}</strong>
                        </a>
                      </Link>
                    </td>
                    <td>{item.author}</td>
                    <td>{item.category}</td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="me-2" ref={categoryBulkActionRef}>
              <Form.Select size="sm" className="d-inline w-auto me-1">
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
      </section>
    </Container>
  )
}
