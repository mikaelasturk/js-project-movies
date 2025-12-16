import { BodyText } from "../typography/BodyText"

export const MovieCard = ({ releaseDate }) => {
  return (
    <>
     <BodyText text={`Release date: ${releaseDate}`} />
    </>
  )
}