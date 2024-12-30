# Celebration Web App

A React-based celebration web application with interactive video playback and animations.

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Add your videos:
   - Place your background video at `public/videos/background.mp4`
   - Place your celebration video at `public/videos/celebration.mp4`
   - Place your candle image at `public/images/candle.jpg`

4. Start the development server:
```bash
npm start
```

## Features

- Interactive celebration experience
- Video background
- Celebration video playback
- Candle blowing animation

## Project Structure

```
project/
├── public/
│   ├── videos/
│   │   ├── background.mp4    # Background video for start page
│   │   └── celebration.mp4   # Main celebration video
│   ├── images/
│   │   └── candle.jpg       # Candle image
│   └── index.html
└── src/
    ├── pages/
    │   ├── StartPage.tsx    # Landing page with background video
    │   ├── VideoPage.tsx    # Celebration video page
    │   └── CandlePage.tsx   # Interactive candle page
    ├── styles/
    │   ├── StartPage.css
    │   ├── VideoPage.css
    │   └── CandlePage.css
    └── App.tsx
```
