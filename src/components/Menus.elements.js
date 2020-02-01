import styled, { css } from 'styled-components'

export const HeaderStyled = styled.header`
  padding-top: 20px;
  margin: auto;
  background: #232c3d;
`

export const Li = styled.li`
  color: white;
  font-size: 18px;

  a {
    color: white;
    text-decoration: none;

    @media screen and (max-width: 1023px) {
      color: #41495d;
    }
  }

  &:not(:last-child) {
    margin-right: 40px;
  }

  ${props =>
    props.dark &&
    css`
      color: #41495d;
      a {
        color: #41495d;
      }
    `}
`

export const MobileNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 9;
  align-items: center;
  display: flex;
  left: 0;
  top: 0;
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
  transform: scale(0.7);
  visibility: hidden;

  ${props =>
    props.open &&
    css`
      transform: scale(1);
      opacity: 1;
      visibility: visible;
      z-index: 99;
    `}

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;

    li {
      text-align: center;
      width: 100%;
      font-size: 36px;

      &:not(:last-child) {
        margin: 0;
        margin-bottom: 40px;
      }
    }
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`

const Transform = css`
  &:after {
    transform: rotate(-45deg) translateY(-50%) translateX(42%);
  }

  &:before {
    transform: rotate(45deg) translateY(-50%) translateX(30%);
  }
`

export const MobileMenuOpen = styled.button`
  border: none;
  background: transparent;
  position: relative;
  z-index: 11;
  height: 20px;
  cursor: pointer;
  outline: none;
  z-index: 100;

  &:before,
  &:after {
    content: '';
    display: block;
    width: 24px;
    height: 4px;
    background: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &:after {
    top: 8px;
  }

  ${props =>
    props.open &&
    css`
      ${Transform}

      &:before,
      &:after {
        background: #41495d;
      }
    `}

  @media screen and (min-width: 769px) {
    display: none;
  }
`
