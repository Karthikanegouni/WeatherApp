// src/components/SearchBar.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  margin: 2rem auto;
  max-width: 500px;
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const Button = styled.button`
  padding: 0.75rem 1.2rem;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0077cc;
  }
`;

function SearchBar() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${city.trim()}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}

export default SearchBar;
