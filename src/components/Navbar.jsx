// src/components/Navbar.jsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #1e90ff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Title = styled(Link)`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
`;

function Navbar() {
  return (
    <Nav>
      <Title to="/">🌤️ Weather Dashboard</Title>
    </Nav>
  );
}

export default Navbar;
