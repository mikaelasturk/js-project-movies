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

const SpinnerWrap = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #000;
`

const Spinner = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.25);
  border-top-color: rgba(255, 255, 255, 0.95);
  animation: spin 0.9s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const loaderTime = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const Home = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const API_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=a58868b333ba608ab720ea1d3cd907f2&language=en-US&page=1`

    const fetchMovies = async () => {
      try {
        setLoading(true)

        const response = await fetch(API_URL_POPULAR)

       if (!response.ok) {
          throw new Error('Failed to fetch movies')
       }
        const data = await response.json()
        await loaderTime(2000)
        setMovies(data.results)

      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchMovies()
  }, [])

  if (loading) return (
    <SpinnerWrap>
      <Spinner />
    </SpinnerWrap>
  )                   
  if (error) return <p>{error}</p>

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