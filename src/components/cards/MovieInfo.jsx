import { Image, Tag } from '../ui/ui';
import { MovieTitle, BodyText } from '../typography/typography';
import styled from 'styled-components';




const InfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 570px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 16px;
    }
`

const FlexWrapperRow = styled.div`
  display: flex;
  flex-direction: row; 
  gap: 8px;
  align-items: center;
  font-weight: bold;

  &:hover {
    gap: 14px;
    transition: 0.3s ease-in-out;
  }
`

const StyledBodyText = styled(BodyText)`
 margin-top: 8px;   
 max-width: 400px; 
`

const FlexWrapperColumn = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  
`

export const MovieInfo = ({ movie }) => {
    return (
    <>
    <InfoLayout>
      <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`Movie poster of: "${movie.title}"`}/>
      <FlexWrapperColumn>
          <MovieTitle 
            title={movie.title} 
            children={
              <Tag 
                text={`⭐️${movie.vote_average.toFixed(1)}`}
              />
            } 
          />
          <StyledBodyText text={movie.overview} />
      </FlexWrapperColumn>
    </InfoLayout>
    </>
  ) 
}