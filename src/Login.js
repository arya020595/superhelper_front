import {Container, Row, Form, Button} from 'react-bootstrap'
import { Link } from "react-router-dom"

function Login() {
  return (
    <Container style={{padding: '100px 0px 0'}}>
      <Row style={{marginBottom: '20px'}}>
        <h1>Login</h1>
      </Row>
      <Row>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="secondary" size="sm" style={{width: '100%'}}>
            Login
          </Button>
        </Form>
      </Row>
      <Row>
        <div style={{ marginTop: '20px' }}>Don't have account? <Link to="/register">Regiter here</Link></div>
      </Row>
    </Container>
  )
}

export default Login