# 🌤️ Weather Dashboard

A modern and responsive Weather Dashboard built with **React** and the **OpenWeatherMap API**. This app allows users to search for any city and view real-time weather data in a sleek, dynamic interface.

## 🔗 Live Demo

Check out the live version here: [WeatherApp on Netlify](https://your-deployed-url.netlify.app)

> *(Replace the link above with your actual deployed site)*

---

## ✨ Features

- 🌍 Search weather by city name
- 🌡️ Displays temperature, weather conditions, humidity, wind speed, and more
- 🔄 Dynamic routing with React Router (`/weather/:city`)
- 🎨 Styled with `styled-components` for a modern UI
- 🧭 Responsive design for all screen sizes
- 🖼️ Weather icons powered by OpenWeatherMap
- ⚠️ Error handling for invalid cities or failed API calls
- ⏳ Loading state while fetching data

---

## 🔧 Tech Stack

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Styled-Components](https://styled-components.com/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [OpenWeatherMap API](https://openweathermap.org/current)
- [Vite](https://vitejs.dev/) for fast development and build

---

## 📦 Installation

```bash
git clone https://github.com/Karthikanegouni/WeatherApp.git
cd WeatherApp
npm install
```

### 🔑 Setup .env

Create a `.env` file in the root folder:

```
VITE_WEATHER_API_KEY=your_openweather_api_key
```

### 🚀 Run the App

```bash
npm run dev
```

---

## 🛠️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## 🌐 Deployment

Deployed on **Netlify** with environment variables:

- Go to [Netlify](https://netlify.com)
- Connect GitHub repo
- Add `VITE_WEATHER_API_KEY` in Environment Variables
- Set:
  - Build command: `npm run build`
  - Publish directory: `dist`

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for the weather data and icons
- [Vite](https://vitejs.dev/) for the blazing fast dev server
