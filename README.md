# 🎬 Movies App

A responsive multi-page React application built with React Router and The Movie Database (TMDB) API.
The app allows users to browse popular movies and view detailed information for each title via dynamic routes.

## 📋 Table of Contents
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [About Project](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Objectives](#objectives)
- [Accessibility](#accessibility)
- [Architecture](#architecture)
  - [Folder Structure](#folder-structure)
  - [Pages & Routes](#pages--routes)
  - [Data Flow Overview](#data-flow-overview)
- [Run Locally](#run)
- [Roadmap](#roadmap)
- [Authors](#authors)
- [License](#license)

## <a id="live-demo"></a> 🚀Live demo
[Demo link](https://emil-mikaela-js-project-movies.netlify.app/)

## <a id="screenshots"></a>📷 Screenshots
### Screenshot 1 name

<img src="./path-to-image-" alt="screenshot of project" />  

Caption Screenshot 1 description.

## <a id="about"></a>🔎 About Project
This project is a movie browsing application built with React and React Router.
It fetches data from the TMDB API and displays a list of popular movies on the home page.
Each movie links to a dedicated detail page using a dynamic route.

The application handles loading states, API errors, and invalid movie IDs by displaying a custom Not Found page.

## <a id="tech-stack"></a>📦 Tech Stack
- React
- React Router
- JavaScript (ES6+)
- Vite
- Styled Components
- TMDB API

## <a id="features"></a> 🧠 Features
Add features here in list form.

## <a id="objectives"></a> 🎯 Project Objectives
- Build a **multi-page** React application
- Practice **React Router** with dynamic routes
- Fetch and render data from an external API
- Combine `useState` and `useEffect`
- Follow accessibility and clean code guidelines

### Required conditions
- Minimum 2 pages
- Dynamic routing with React Router
- Responsive design (320px → 1600px)
- Accessible UI (Lighthouse score ≥ 95)
- Clean, readable, and maintainable code

### Stretch Goals (optional)
- Not Found page for invalid movie IDs (API 404 handling)
- Loading states (spinners / placeholders)
- Image loading fallbacks
- Dropdown to switch movie categories (popular, upcoming, now playing)
- Additional linked pages (genres, collections, production companies)

## ♿ Accessibility
The project follows accessibility best practices:
- Semantic HTML
- Proper alt text for all images
- Sufficient color contrast
- Keyboard navigable UI
- Lighthouse score ≥ 95

## <a id="architecture"></a> Architecture
### <a id="folder-structure"></a> 🛠 Folder Structure
```text
src/
├── components/
│   ├── cards/
│   │   ├── MovieCard.jsx
│   │   └── MovieInfo.jsx
│   ├── layout/
│   │   └── Layout.jsx
│   ├── typography/
│   │   ├── BodyText.jsx
│   │   └── MovieTitle.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Image.jsx
│       ├── SpinnerLoader.jsx
│       ├── Svg.jsx
│       ├── Tag.jsx
│       └── ui.js
├── pages/
│   ├── Home.jsx
│   ├── Movie.jsx
│   └── NotFound.jsx
├── styles/
│   ├── GlobalStyle.jsx
│   └── theme.jsx
├── App.jsx
└── main.jsx
```

### <a id="pages--routes"></a> 🧭 Pages & Routes
| Route        | Description                                          |
| ------------ | ---------------------------------------------------- |
| `/`          | Displays a grid of popular movies                    |
| `/movie/:id` | Displays detailed information about a selected movie |
| `/notfound`  | Custom Not Found page                                |
| `*`          | Catch-all route for unknown URLs                     |

### <a id="data-flow-overview"></a> 🔄 Data Flow Overview
#### Home Page
- Fetches popular movies from TMDB using useEffect
- Stores results in local state with useState
- Renders a grid of MovieCard components
- Each card links to /movie/:id

#### Movie Detail Page
- Reads id from the URL using useParams
- Fetches movie details from TMDB
- Handles:
- Loading state:
  - API errors
  - 404 responses (redirects to /notfound)
  - Renders movie details via MovieInfo

### 🔑 API Usage
The application uses The Movie Database (TMDB) API to fetch movie data.

| Purpose              | Endpoint                                        |
| -------------------- | ----------------------------------------------- |
| Fetch popular movies | `https://api.themoviedb.org/3/movie/popular`    |
| Fetch movie details  | `https://api.themoviedb.org/3/movie/{movie_id}` |

#### Authentication

#### Image handling

TMDB returns partial image paths (e.g. poster_path, backdrop_path).
To render images, URLs are constructed using the TMDB image base URL and a chosen size:

``` text
https://image.tmdb.org/t/p/original${image_path}
```


## <a id="run"></a> ▶️ Run Locally
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev
```

## <a id="roadmap"></a> 🚗 Roadmap
### Planning stage
The planning phase focused on understanding the project brief, API structure, and routing strategy.

- Reviewed Technigo project requirements
- Explored the TMDB API and available endpoints
- Planned application routes (/, /movie/:id, /notfound)
- Sketched component structure and data flow
- Identified required and stretch goals

📄 Planning documentation:
<a href="/PLANNING.md">PLANNING.md</a>

### Excecution 
Här kan du beskriva hur projektet genomfördes: designbeslut, kodstruktur, state‑hantering och eventuella utmaningar.

### Retrospect
WIP

## <a id="authors"></a> 🧑‍💻 Authors
### Mikaela Sturk
-  [GitHub](https://www.github.com/mikaelasturk) 
-  [LinkedIn](https://www.linkedin.com/mikaelasturk)

### Emil Florén
-  [GitHub](https://www.github.com/) 

## <a id="license"></a> 📄 License
This project was created as part of a Technigo course assignment.  
For educational purposes only.