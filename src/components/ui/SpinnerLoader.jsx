import styled from 'styled-components'
import { BodyText } from '../typography/BodyText'

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: #000;
`

const LoadingDots = styled.div`
  width: 9ch; /* fast bredd: "Loading..." = 9 tecken */
  text-align: left;
  /* font-variant-numeric: tabular-nums; */
  color: inherit;
  font-size: 24px;

  &::after {
    content: 'Loading';
    animation: dots 3.2s steps(4, end) infinite;
  }

  @keyframes dots {
    0%   { content: 'Loading'; }
    25%  { content: 'Loading.'; }
    50%  { content: 'Loading..'; }
    75%  { content: 'Loading...'; }
    100% { content: 'Loading'; }
  }
`


export const SpinnerLoader = () => {
  return (
    <SpinnerWrap>
      <Spinner />
      <LoadingDots aria-label="Loading" />
    </SpinnerWrap>
     
  )
}