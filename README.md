# README template
Template to use for school projects

# Project Name 
Short, clear description of what the project does and why it exists.

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
Detailed project description.

## <a id="tech-stack"></a>📦 Tech Stack
- React
- React Router
- JavaScript (ES6+)
- Vite
- TMDB API
- CSS / Styled Components (or describe what you use)

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
│   ├── MovieCard.jsx
│   ├── Loader.jsx
│   └── NotFound.jsx
├── pages/
│   ├── MovieList.jsx
│   └── MovieDetail.jsx
├── services/
│   └── tmdb.js
├── App.jsx
├── main.jsx
└── styles/
```
### <a id="pages--routes"></a> 🧭 Pages & Routes
| Route | Description |

### <a id="data-flow-overview"></a> 🔄 Data Flow Overview
#### Movie List Page
- Fetches a list of movies from TMDB
- Stores data in state
- Renders movie cards
- Each card links to `/movies/:id`

#### Movie Detail Page
- Reads `id` from URL using `useParams`
- Fetches detailed movie data from TMDB
- Handles loading and error states
- Renders movie information

### 🔑 API Usage
Tabell här

## <a id="run"></a> ▶️ Run Locally
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev
```

## <a id="roadmap"></a> 🚗 Roadmap
### Planning stage
Berätta kort om planeringen  
<a href="/PLANNING.md">📄PLANNING.md</a>

### Excecution 
Här kan du beskriva hur projektet genomfördes: designbeslut, kodstruktur, state‑hantering och eventuella utmaningar.

### Retrospect
Samla retrospektiva reflektioner, lärdomar, tekniska insikter och förbättringsidéer.

## <a id="authors"></a> 🧑‍💻 Authors
### Your Name
-  [GitHub](https://www.github.com/) 
-  [LinkedIn](https://www.linkedin.com/)

### Pair Programmer Name
-  [GitHub](https://www.github.com/) 
-  [LinkedIn](https://www.linkedin.com/)

## <a id="license"></a> 📄 License
This project was created as part of a Technigo course assignment.  
For educational purposes only.