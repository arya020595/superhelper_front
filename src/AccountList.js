import {Container, Row, Form, Button, Col, Table, Pagination} from 'react-bootstrap'
import { Link } from "react-router-dom"

function AccountList() {
  
  let active = 2
  let items = []
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Container style={{paddingTop: '100px'}}>
      <Row>
        <Col md={3}>
          <Form.Row style={{marginBottom: '1rem'}}>
            <Form.Control type="text" placeholder="Search" />
          </Form.Row>
        </Col>
        <Col md={3}>
          <Form.Row style={{marginBottom: '1rem'}}>
            <Form.Control as="select" defaultValue="Filter by City">
              <option>Filter by City</option>
              <option>...</option>
            </Form.Control>
          </Form.Row>
        </Col>
        <Col md={6}>
          <Form.Row className={'d-flex flex-row-reverse'} style={{marginBottom: '1rem'}}>
            <Link to="">
              <Button variant="secondary">
                Add New Account
              </Button>
            </Link>
          </Form.Row>
        </Col>
      </Row>

      <Row className={'mt-5'} style={{padding: '0 10px'}}>
        <Table striped bordered hover>
          <thead style={{fontWeight: 'bold'}}>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Birthday</th>
              <th>City</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Image</td>
              <td>
                <div>John Doe</div>
                <div>josh@email.com</div>
              </td>
              <td>Phone Number</td>
              <td>Birtdday</td>
              <td>City</td>
              <td>
                <Link to='/account/detail/asdasdasd'>
                  <Button size="sm" variant="secondary">
                    View
                  </Button>
                </Link>
                  &nbsp;
                <Link to="/account/edit/asdasdasd">
                  <Button size="sm" variant="primary">
                    Edit
                  </Button>
                </Link>
                  &nbsp;
                <Link to="/account/detail">
                  <Button size="sm" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Image</td>
              <td>
                <div>John Doe</div>
                <div>josh@email.com</div>
              </td>
              <td>Phone Number</td>
              <td>Birtdday</td>
              <td>City</td>
              <td>
                <Link to='/account/detail/asdasdasd'>
                  <Button size="sm" variant="secondary">
                    View
                  </Button>
                </Link>
                  &nbsp;
                <Link to="/account/edit/asdasdasd">
                  <Button size="sm" variant="primary">
                    Edit
                  </Button>
                </Link>
                  &nbsp;
                <Link to="/account/detail">
                  <Button size="sm" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Image</td>
              <td>
                <div>John Doe</div>
                <div>josh@email.com</div>
              </td>
              <td>Phone Number</td>
              <td>Birtdday</td>
              <td>City</td>
              <td>
                <Link to='/account/detail/asdasdasd'>
                  <Button size="sm" variant="secondary">
                    View
                  </Button>
                </Link>
                  &nbsp;
                <Link to="/account/edit/asdasdasd">
                  <Button size="sm" variant="primary">
                    Edit
                  </Button>
                </Link>
                  &nbsp;
                <Link to="/account/detail">
                  <Button size="sm" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>

      <Row className={'mt-3 flex-row-reverse'} style={{padding: '0 10px'}}>
        <Pagination>
          <Pagination.First />
            {items}
          <Pagination.Last />
        </Pagination>
      </Row>

    </Container>
  )
}

export default AccountList