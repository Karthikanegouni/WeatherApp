// src/pages/Home.jsx
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem;
`;

function Home() {
  return (
    <Wrapper>
      <h2>Search for a city to view its weather</h2>
      <SearchBar />
    </Wrapper>
  );
}

export default Home;
