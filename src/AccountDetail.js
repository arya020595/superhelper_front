import {Container, Row, Form, Button, Col} from 'react-bootstrap'

function AccountDetail() {
  return (
    <Container style={{padding: '100px 0px 0'}}>
      <h1 style={{marginBottom: '20px'}}>Account Detail</h1>
      
      <Row>
        <Col md={3} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ccc'}}>
          <div style={{display: 'flex'}}>
            <img className={'img-fluid rounded mx-auto d-block'} src={'https://cdn.logo.com/hotlink-ok/logo-social.png'} alt="asdasd" />
          </div>
        </Col>
        <Col md={9} style={{border: '1px solid #ccc'}}>
          <Row style={{padding: '20px'}}>
            <Col md={6} className={'d-flex'}>
              <div>
                <div>
                  <div>John Doe</div>
                  <div>john@email.com</div>
                </div>

                <div className={'mt-4'}>
                  <div>PHONE</div>
                  <div>085230894687</div>
                </div>

                <Form.Group id="formGridCheckbox" className={'mt-4'}>
                  <Form.Check type="checkbox" label="Administrator" />
                </Form.Group>
              </div>

              <div className={'ml-5'}>
                <div>
                  <div>BIRTHDAY:</div>
                  <div>01/01/1990</div>
                </div>

                <div className={'mt-4'}>
                  <div>CITY</div>
                  <div>Jakarta</div>
                </div>
              </div>
            </Col>

            <Col md={6} className={'align-self-end'}>
              <Row className={"float-right"}>
                  <Button variant="secondary" size="sm">
                    Edit
                  </Button>
                  &nbsp;
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountDetail;