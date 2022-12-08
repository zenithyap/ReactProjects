import './bg.css';
import NavigationBar from './NavigationBar';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './text.css'

export default function home() {
    return (
        <div className='bg'>
            <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Zenith</Navbar.Brand>
                <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link>About Me</Nav.Link>
                </LinkContainer>
                </Nav>
            </Container>
            </Navbar>  
            <div className='title'>Welcome</div>
            <div className='title'>Home</div>
        </div>
    )
}