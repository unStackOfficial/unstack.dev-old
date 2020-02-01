import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Subscribe from './subscribe'
import PageTitle from './PageTitle'

const FooterStyled = styled.footer`
  background-color: #222f60;
  color: #fff;
  margin-top: 109px;
  padding-bottom: 60px;

  :before {
    width: 100vw;
    top: -109px;
    background-color: #f3f4f9;
    height: 109px;
    background-image: url("data:image/svg+xml,%0A%3Csvg width='768px' height='107px' viewBox='0 0 768 107' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Tablet-Copy' transform='translate(0.000000, -2373.000000)' fill='%23222F60' fill-rule='nonzero'%3E%3Cpolygon id='Rectangle' points='0 2373 769 2448.20312 769 2480 0 2480'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-size: cover;
    display: block;
    position: relative;
    content: '';
    left: -3px;
  }
`

const Links = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  a {
    color: white;
  }

  a:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`

const Footer = () => (
  <FooterStyled>
    <PageTitle
      css={`
        color: white;
      `}
    >
      Signup for news
    </PageTitle>
    <Subscribe />
    <Links>
      <Link to="/code-of-conduct">Code of Conduct</Link>
      <a
        href="mailto:hey@reactjsgirls.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Contact
      </a>
    </Links>
  </FooterStyled>
)

export default Footer
