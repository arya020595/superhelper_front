import {Container, Row, Form, Button, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

function AccountEdit() {
  
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container style={{padding: '100px 0px 0'}}>
      <h1 style={{marginBottom: '20px'}}>Account Detail</h1>
      
      <Row>
        <Col md={3} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ccc'}}>
          <div>
            <img className={'img-fluid rounded d-block'} src={'https://cdn.logo.com/hotlink-ok/logo-social.png'} alt="asdasd" />
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Button variant="secondary">
                Upload
              </Button>
            </div>
          </div>
        </Col>
        <Col md={9} style={{border: '1px solid #ccc'}}>
          <Form style={{padding: '20px'}}>
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
              <Form.Group as={Col} controlId="formGridBirthday">
                <Form.Label style={{display: 'block'}}>Birthday</Form.Label>
                  <DatePicker className="form-control" selected={startDate} onChange={date => setStartDate(date)} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" placeholder="Enter phone" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Select City">
                  <option>Select City</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Administrator" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountEdit;