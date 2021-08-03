import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { getEmailList } from "../../services/api";

function Schedule() {
  const [tableRows, setTableRows] = useState();

  useEffect(() => {
    getEmailList()
      .then((response) => response.json())
      .then((data) => {
        const rows = data.map((obj, index) => (
          <tr key={index}>
            <td>{obj.customer_id}</td>
            <td>{obj.product_name}</td>
            <td>{obj.domain}</td>
            <td>{obj.email_date}</td>
          </tr>
        ));
        setTableRows(rows);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>CustomerID</th>
                <th>Product Name</th>
                <th>Domain</th>
                <th>Email Date</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Schedule;
