import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 10px;
  color: white;

  @media screen and (max-width: 321px) {
    font-size: 24px;
    padding-bottom: 10px;
    margin-bottom: 0;
  }
`

export const Tagline = styled.p`
  font-size: 24px;
  color: white;
  padding-bottom: 20px;
  max-width: 500px;
  margin: auto;
`

export const Date = styled.span`
  font-size: 33px;
  color: white;
  font-weight: 600;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
