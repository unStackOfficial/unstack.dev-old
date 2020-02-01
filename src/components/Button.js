import styled, { css } from 'styled-components'

export default styled.a`
  text-decoration: none;
  background: transparent;
  border: 3px solid white;
  padding: 10px 15px;
  position: relative;
  transition: all 200ms ease;
  color: #fff;

  ${props =>
    props.alternative &&
    css`
      border: 3px solid #fb8e82;
      color: inherit;
    `}

  span {
    position: relative;
    z-index: 1;
    font-weight: bold;
  }

  &:hover {
    text-decoration: none;
    color: #fb8e82;

    ${props =>
      props.alternative &&
      css`
        color: white;
      `}

    &:after,
    &:before {
      width: 50%;
    }
  }

  &:after,
  &:before {
    transition: all 200ms ease;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: white;
    z-index: 0;

    ${props =>
      props.alternative &&
      css`
        background: #fb8e82;
      `}
  }

  &:before {
    right: 0;
    left: auto;
  }

  &:first-child {
    margin-right: 20px;
  }
`
