# AirSensor AI Dashboard

A React frontend dashboard for monitoring air sensor data (temperature and humidity) from IoT devices.

## Project Overview

- **Type**: React SPA (Single Page Application)
- **Build Tool**: Vite
- **Language**: JavaScript/JSX
- **Port**: 5000 (dev server)

## Architecture

- Frontend only — no backend in this repo
- API calls are proxied via Vite's dev server to an external backend: `AIR_SENSOR_API`
- Data fetched from `/api/DHT` endpoint (Firebase-backed)

## Key Files

- `src/App.jsx` — main app component with data fetching and layout
- `src/api.js` — API utility functions
- `src/components/` — SensorChart, SensorTable, StatusBadge, SensorTableFilters
- `vite.config.js` — Vite config with proxy and port 5000

## Running the App

```bash
npm run dev
```

Starts dev server on `0.0.0.0:5000`.

## Deployment

Configured as a static site deployment:
- Build: `npm run build`
- Public dir: `dist`
