import React, { useState } from 'react';
import { Container, Card, CardText, CardBody, CardTitle, Row, Col, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

function App(props) {
  const [accessToken, setaccessToken] = useState("");
  const [postID, setPostID] = useState("");

  console.log(accessToken, postID)

  const goToShow = () => {
    props.history.push(`/result?accesstoken=${accessToken}&postid=${postID}`)
  }
  return (
    <div className="App">
      <div className="App-header">
        <h1>Create Live Poll</h1>
      </div>
      <Container>
        <Card>
          <CardBody>
            <CardTitle className="left"><h4>ตั้งค่าเบื้องต้น</h4></CardTitle>
            <CardText>
              <Row>
                <Col>
                  <InputGroup>
                    <Input placeholder="กรอก Access Token ที่นี่" onChange={(e) => setaccessToken(e.target.value)} />
                    <InputGroupAddon addonType="prepend">
                      <Button color="success" onClick={() => window.open("https://developers.facebook.com/tools/explorer/", "width=200,height=100")}>Get Access Token</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup>
                    <Input placeholder="กรอก POST ID ที่นี่" onChange={(e) => setPostID(e.target.value)} />
                    <InputGroupAddon addonType="prepend">
                      <Button color="success">Get Post ID</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
              <div className="wrap-button">
                <Button color="success" onClick={() => goToShow()}> Create </Button>
              </div>
            </CardText>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default App;
