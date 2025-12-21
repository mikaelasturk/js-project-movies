# Planning

## Links
### Project description
https://technigo.disco.co/p/react-and-global-state-management/dashboard?u=d5de9654-859d-452b-b9b2-d7b101407292

### Demo example
https://technigo-movies-project.netlify.app/movies/1084242

### Link to Figma
//add here

## Hints and tips to complete the project
As always, start by sketching out your application - not just thinking about design, but how should it be split into components, and how should your routes look? In the example application we've linked to for you to follow the design from, it's built using two routes which each has one component as a child (it's up to you if you want to use this approach!)

Example route: 
  - Route: /, component: PopularList  
  This route is responsible for the home page. It uses useEffect to run an API request to themoviedb.org and fetch popular films in the US, puts them into state using useState, and then renders them wrapped in a Link from react-router-dom to link to the detail page.
  - Route: /movies/:id, component: Detail  
    This route expects a movie ID in the URL and is responsible for showing more details about a movie after you click on it. It uses useParams from react-router-dom to get the id from the URL and then passes that into an API call (within useEffect) to themoviedb.org to fetch details about a single movie, then puts the response into state using useState and finally renders it onto the page.


## Conditions
### Requirements
- Have at least two pages: one listing movies, one showing details.
- Use React Router.
- Follow or improve the example design.
- Make the app responsive (320 – 1600 px wide).
- Your project should follow accessibility guidelines to ensure your website is usable by a diverse range of users:
  - You should have a score of at least 95 in Lighthouse
  - All images should have alt attributes and proper sizes
  - All contrasts should be OK
- Follow the guidelines on how to write clean code

### Stretch goals (optional)
- Add a “Not Found” page for invalid movie IDs; catch 404 errors and toggle an error state.
- Manage loading states: show a spinner while data loads; consider lazy‑loading images or overlaying them on text.
- Add a dropdown to toggle between popular, upcoming and new releases.
- Use extra API data (collections, genres, companies) to create links to more details.

## Map out components
Home page:
Svart bakgrund
Grid med
MovieCards med omslag av film
Moviecard är länk till movie page ()

On hover: 
Skugga över bildern
H1 med titel
P med Releasedatum

Moviepage:
Bakgrund med affish (från API)
Button - SVG pil, tillbaka till home
IMG med omslag
H1 titel 
P - Rating
P - beskrivning

##  TODO -----------> <a href="TODO.md">here</a>
