import { Button, Card, Collapse, Container } from "react-bootstrap"

import Breadcrumbs from "../components/Breadcrumbs"
import PageHeader from "../components/PageHeader"
import { DataTable } from "simple-datatables"

import data from "../data/tables-datatable.json"
import Link from "next/link"
import { useEffect, useRef } from "react"
import ExampleCode from "../components/ExampleCode"
export async function getStaticProps() {
  return {
    props: {
      title: "Data Tables",
    },
  }
}
export default function tablesDatatale(props) {
  // Ref for first table
  const dataTableRef = useRef(false)

  // Ref for second table
  const dataTableRef2 = useRef(false)

  const adjustTableColumns = (dataTable) => {
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

  const bootstrapizeHeader = (dataTable) => {
    const tableWrapper = dataTable.table.closest(".dataTable-wrapper")

    const input = tableWrapper.querySelector(".dataTable-input")
    if (input) {
      input.classList.add("form-control", "form-control-sm")
    }

    const dataTableSelect = tableWrapper.querySelector(".dataTable-selector")
    if (dataTableSelect) {
      dataTableSelect.classList.add("form-select", "form-select-sm")
    }

    const dataTableContainer = tableWrapper.querySelector(
      ".dataTable-container"
    )
    if (dataTableContainer) {
      dataTableContainer.classList.add("border-0")
    }
  }

  // Init first table
  useEffect(() => {
    const dataTable = new DataTable(dataTableRef.current, {
      searchable: false,
    })

    adjustTableColumns(dataTable)

    window.addEventListener("resize", adjustTableColumns(dataTable))
    dataTable.on("datatable.init", function () {
      bootstrapizeHeader(dataTable)
    })
  }, [])

  // Init second table
  useEffect(() => {
    const dataTable = new DataTable(dataTableRef2.current, {
      searchable: false,
    })

    adjustTableColumns(dataTable)
    window.addEventListener("resize", adjustTableColumns(dataTable))

    dataTable.on("datatable.init", function () {
      bootstrapizeHeader(dataTable)
    })
  }, [])
  return (
    <Container fluid className="px-lg-4 px-xl-5">
      <Breadcrumbs title={props.title} />
      <PageHeader title={props.title} />
      <section>
        <Card className="mb-4">
          <Card.Header>
            <h4 className="card-heading">Data Table - Classic</h4>
          </Card.Header>
          <Card.Body className="text-muted">
            <p>
              A lightweight, extendable, dependency-free javascript HTML table
              plugin. Similar to jQuery DataTables for use in modern browsers,
              but without the jQuery dependency.
            </p>
            <p>
              Check out more at{" "}
              <a href="https://github.com/fiduswriter/Simple-DataTables">
                Project's GitHub
              </a>
              .
            </p>
            <p>
              How easy is it to use DataTables? Take a peek at the code below: a
              single function call to initialise the table is all it takes!
            </p>
            <ExampleCode highlightCode={highlightCode} />
            <table
              className="table table-hover align-middle"
              ref={dataTableRef}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Orders</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Link href="#">
                        <a className="text-muted">{item.person}</a>
                      </Link>
                    </td>
                    <td>{item.company}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.city}</td>
                    <td>{item.orders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card.Body>
        </Card>
        <Card className="card-table mb-4">
          <Card.Header>
            <h4 className="card-heading">Data Table - Card Table</h4>
          </Card.Header>
          <table className="table table-hover align-middle" ref={dataTableRef2}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Orders</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Link href="#">
                      <a className="text-muted">{item.person}</a>
                    </Link>
                  </td>
                  <td>{item.company}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.city}</td>
                  <td>{item.orders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>
    </Container>
  )
}

const highlightCode = `import { DataTable } from "simple-datatables"

export default function page(props) {
  const dataTableRef = useRef(false)
  useEffect(() => {
    const dataTable = new DataTable(dataTableRef.current, {})
  }, [])

  return(
    <table
        ref={dataTableRef}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <Link href="#">
                  <a className="text-muted">{item.person}</a>
                </Link>
              </td>
              <td>{item.company}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.city}</td>
              <td>{item.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}
`
