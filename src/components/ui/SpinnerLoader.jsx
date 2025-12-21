import styled from 'styled-components'
import { BodyText } from '../typography/BodyText'

//TODO add text "Loading..." below the spinner with animation on dots

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

const SpinnerWrap = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #000;
`
export const SpinnerLoader = () => {
  return (
    <SpinnerWrap>
      <Spinner />
      {/* <BodyText text="Loading..." /> */}
    </SpinnerWrap>
  )
}