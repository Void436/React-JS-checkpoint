import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Reactfrag from '.';
import "./styles.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

function App(){
    return (
        <>
            <div className='App'>
                <Reactfrag/>
                <Navbar bg="primary" data-bs-theme="dark">
                    <Container>
                      <Navbar.Brand href="#home">UNO Cards</Navbar.Brand>
                      <Nav className="me-auto">
                        <Nav.Link href="#home">List of uno cards</Nav.Link>
                        <Nav.Link href="#features">Rules of uno</Nav.Link>
                        <Nav.Link href="#pricing">Extra</Nav.Link>
                      </Nav>
                    </Container>
                </Navbar>
              <div>
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>Displaying here 3 cards.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    Dunno <cite titleName="Source Title">idk</cite>
                  </figcaption>
                </figure>
              </div>
              <div className="uno">
                <Card>
                <Card.Img variant="top" src="https://wallpapers.com/images/hd/minimalist-uno-card-ufmk9qis7rfqsv7j.jpg" />
                  <Card.Body>
                    <Card.Text>
                      The famous +4
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://wallpapers.com/images/hd/rainbow-uno-card-megj6bowa3c1lfes.jpg" />
                  <Card.Body>
                    <Card.Text>
                      The uno reverse
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="https://i.redd.it/tpcb4dqfwz851.jpg" />
                  <Card.Body>
                    <Card.Text>
                      The no no you infinity card
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
        </>
    );
};
//just for the "use of comments"
export default App;