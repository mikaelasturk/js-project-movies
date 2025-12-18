import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { MovieInfo } from "../components/cards/cards"
import { BodyText } from "../components/typography/typography";
import { Svg } from "../components/ui/ui";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
const PLACEHOLDER_IMAGE = ''
const getImageUrl = (path) => path ? `${IMAGE_BASE_URL}${path}` : PLACEHOLDER_IMAGE

const FlexWrapperSpaceBetween = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  min-height: 100vh;
  padding: 44px;
  padding-top: 12px;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%),${({ $bg }) => `url(${$bg})`};
  background-size: cover;
  background-position: center;
  position: relative;
`
const FlexWrapperRow = styled.div`
  display: flex;
  flex-direction: row; 
  gap: 4px;
  align-items: center;
  font-weight: 600;
  margin-bottom: 24px;

  &:hover {
    gap: 14px;
    transition: 0.3s ease-in-out;
  }
`

export const Movie = () => {
  const [movieDetails, setMovieDetails] = useState(null)
  const { id } = useParams()
  
  useEffect(() => {
    if (!id) return
    const API_URL_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=a58868b333ba608ab720ea1d3cd907f2&language=en-US"`
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(API_URL_DETAILS)
        const data = await response.json()
        setMovieDetails(data)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }
    
    fetchMovieDetails()
  }, [id])

 
  return (
    <FlexWrapperSpaceBetween $bg={getImageUrl(movieDetails?.backdrop_path)}>
      <Link to="/">
      <FlexWrapperRow>
        <Svg />
        <BodyText text="Movies" />
        </FlexWrapperRow>
      </Link>
      {!movieDetails && <p>Loading...</p>}
      {movieDetails && <MovieInfo movie={movieDetails} />}
    </FlexWrapperSpaceBetween>
  )
}

