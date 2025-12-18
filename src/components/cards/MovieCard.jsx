import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MovieTitle, BodyText } from '../typography/typography'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
const PLACEHOLDER_IMAGE = ''
const getImageUrl = (path) => path ? `${IMAGE_BASE_URL}${path}` : PLACEHOLDER_IMAGE

const StyledMovieCard = styled.article`
  width: 100%;
  aspect-ratio: 2 / 3; 
  overflow: hidden;
`
const TextOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: auto;
  padding: 16px;
  
  background-color: rgba(0, 0, 0, 0.7); 
  opacity: 0; 
  transition: opacity 0.3s ease;
`

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  height: 100%;
  background-image: ${({ $bg }) => `url(${$bg})`};
  background-size: cover;
  background-position: center;
  position: relative;

  &:hover ${TextOverlay} {
    opacity: 1;
  } 
`

export const MovieCard = ({ movie }) => {
  const imageUrl = getImageUrl(movie.poster_path)

  return (
    <StyledMovieCard>
      <StyledLink to={`/movie/${movie.id}`} $bg={imageUrl}>
        <TextOverlay>
          <MovieTitle title={movie.title} />
          <BodyText text={`Released ${movie.release_date}`} />
        </TextOverlay>
      </StyledLink>
    </StyledMovieCard>
  )
}