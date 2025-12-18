import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MovieCard } from '../components/cards/cards'

const GridWrapper = styled.div`
  display: grid;  
  row-gap: 4px;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 370px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 570px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 820px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const API_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=a58868b333ba608ab720ea1d3cd907f2&language=en-US&page=1`
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL_POPULAR)
        const data = await response.json()
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }
    
    fetchMovies()
  }, [])

  return (
    <>
      <GridWrapper>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </GridWrapper>
    </>
  )
}