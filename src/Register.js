import {Container, Row, Form, Button, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import React, { useState } from "react"

function Register() {

  const [startDate, setStartDate] = useState(new Date())

  return (
    <Container style={{padding: '100px 0px 0'}}>
      <Row style={{marginBottom: '20px'}}>
        <h1>Register</h1>
      </Row>
      <Row>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" placeholder="Enter phone" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>City</Form.Label>
              <Form.Control as="select" defaultValue="Select City">
                <option>Select City</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridBirthday">
              <Form.Label style={{display: 'block'}}>Birthday</Form.Label>
              <DatePicker className="form-control" selected={startDate} onChange={date => setStartDate(date)} />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="by signing up your agree to privacy & term service" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  )
}

export default Register