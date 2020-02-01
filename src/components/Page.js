import styled, { css } from 'styled-components'

export default styled.div`
  width: 1160px;
  max-width: 90%;
  margin: 0 auto;
  padding: 50px;

  ${props =>
    props.fancy &&
    css`
      background: #ffffff;
      box-shadow: 0 72px 80px 0 rgba(45, 54, 95, 0.05);

      border-radius: 20px;

      @media screen and (max-width: 767px) {
        max-width: 100%;
        box-shadow: none;
        border-radius: 0;
      }
    `}
`
