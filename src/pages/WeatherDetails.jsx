// src/pages/WeatherDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;
const BackButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  background-color: #1e90ff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0077cc;
  }
`;


const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const Info = styled.p`
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;

function WeatherDetails() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!res.ok) throw new Error('City not found');
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <Container><Card>Loading...</Card></Container>;
  if (error) return <Container><Card>Error: {error}</Card></Container>;


  return (
    <Container>
      <Card>
        <h2>{weather.name}</h2>
        <WeatherIcon
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <Info>{weather.weather[0].main} — {weather.weather[0].description}</Info>
        <Info>Temperature: {weather.main.temp} °C</Info>
        <Info>Humidity: {weather.main.humidity}%</Info>
        <Info>Wind Speed: {weather.wind.speed} m/s</Info>
        <BackButton onClick={() => navigate('/')}>← Back to Search</BackButton>
      </Card>
     

    </Container>
  );
}

export default WeatherDetails;
