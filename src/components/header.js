import React, { useState, Fragment } from 'react'

import { css, createGlobalStyle } from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Page from './Page'

import { HeaderStyled, Li, MobileNav, MobileMenuOpen } from './Menus.elements'

const OverlayStyles = createGlobalStyle`
  ${props =>
    props.open &&
    css`
      body {
        height: 100vh;
        overflow: hidden;
      }
    `}
`

const query = graphql`
  query details {
    contentfulWebsiteData {
      conferenceName
      tagline
      dateAndLocation
    }
  }
`

const ListItems = ({ closeMenu, darkMenu }) => (
  <Fragment>
    <Li onClick={closeMenu} dark={darkMenu}>
      <a href="#about">About</a>
    </Li>
    <Li onClick={closeMenu} dark={darkMenu}>
      <a href="#speakers">Speakers</a>
    </Li>
    <Li onClick={closeMenu} dark={darkMenu}>
      <a href="#workshops">Workshops</a>
    </Li>
    <Li onClick={closeMenu} dark={darkMenu}>
      <a href="#venue">Venue</a>
    </Li>
  </Fragment>
)

const Header = ({ darkMenu }) => {
  const [menuOpen, setMenu] = useState(false)
  return (
    <StaticQuery
      query={query}
      render={({
        contentfulWebsiteData: { conferenceName, tagline, dateAndLocation }
      }) => (
        <HeaderStyled>
          <Page
            css={`
              display: flex;
              padding-top: 0;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <Link to="/">
              <section
                css={`
                  display: flex;
                  align-items: center;
                `}
              >
                <p
                  css={`
                    font-weight: 600;
                    font-size: 16px;
                    color: white;
                    @media screen and (max-width: 767px) {
                      display: none;
                    }
                  `}
                >
                  <span
                    css={`
                      color: #fb8e82;
                      margin-right: 5px;
                    `}
                  >
                    ReactJS Girls{' '}
                  </span>
                  {conferenceName.split('ReactJS Girls')}
                </p>
              </section>{' '}
            </Link>
            <OverlayStyles open={menuOpen} />
            <MobileMenuOpen
              onClick={() => setMenu(!menuOpen)}
              open={menuOpen}
              aria-label="Toggle Menu"
            />
            <nav
              css={`
                z-index: 1;
                position: relative;
                @media screen and (max-width: 768px) {
                  display: none;
                }
              `}
            >
              <ul
                css={`
                  display: flex;
                `}
              >
                <ListItems
                  darkMenu={darkMenu}
                  closeMenu={() => setMenu(false)}
                />
              </ul>
            </nav>
            <MobileNav open={menuOpen}>
              <ul
                css={`
                  display: flex;
                `}
              >
                <ListItems
                  darkMenu={darkMenu}
                  closeMenu={() => setMenu(false)}
                />
              </ul>
            </MobileNav>
          </Page>
        </HeaderStyled>
      )}
    />
  )
}
export default Header
