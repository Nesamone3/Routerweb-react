// App.js

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './views/Home';
import Blogs from './views/Blogs';
import Contact from './views/Contacts';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css'; // Make sure to import your CSS file

function App() {
  return (
    <Router>
      <Navbar expand="lg" className="custom-navbar justify-content-center">
        <Container>
          <Nav>
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/blogs" className="nav-link-custom">Blogs</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
