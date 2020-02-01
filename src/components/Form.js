import styled from 'styled-components'

export const Input = styled.input`
  height: 44px;
  padding: 10px;
  font-size: 16px;
  border: 3px solid #fb8e82;
  color: #333;
  background: #fff;
  min-width: 150px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  &.no-right {
    border-right: none;
    @media screen and (max-width: 600px) {
      border-right: 3px solid #fb8e82;
    }
  }
`

export const InputWrapper = styled.div`
  position: relative;

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
    width: 100%;
  }

  input:invalid + label {
    opacity: 0.8;
  }

  input:focus + label {
    opacity: 0;
  }

  label {
    transition: all 200ms ease;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    color: #333;
    font-size: 20px;
    opacity: 0;
  }
`

export const Button = styled.button`
  font-size: 16px;
  appearance: none;
  text-decoration: none;
  background: transparent;
  border: 3px solid #fb8e82;
  padding: 7px 15px;
  position: relative;
  transition: all 200ms ease;
  color: white;
  font-size: 100%;
  border-left: none;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    border-left: 3px solid #fb8e82;
    width: 100%;
  }

  &:hover {
    color: #313131;

    &:after,
    &:before {
      width: 51%;
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
    background: #fb8e82;
    z-index: 0;
  }

  &:before {
    right: 0;
    left: auto;
  }
`
