import React from 'react'
import Layout from '../layout/index'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import About from '../components/About'
import Speakers from '../components/Speakers'
import Footer from '../components/Footer'
import Page from '../components/Page'
import Venue from '../components/Venue'
import Button from '../components/Button'
import Community from '../components/Community'
import Workshops from '../components/Workshops'
import { Title, Tagline, Date } from '../components/Type'
import Logo from '../assets/logo.svg'

const GirlsLogo = styled(Logo)`
  width: 140px;
  height: 140px;
  display: block;
  margin: auto;
  transform: rotate(0deg);
  transition: transform 500ms ease;
  position: relative;
  z-index: 10;
  margin-bottom: 40px;

  &:hover {
    transform: rotate(360deg);
  }
`
const Main = styled.main`
  grid-template-columns: 1fr 700px;
  min-height: 100%;
`

const InfoContainer = styled.main`
  @media screen and (max-width: 1023px) {
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const MainWrapper = styled.div`
  background: #232c3d;
  text-align: center;
  padding: 60px 0;
  min-height: 100vh;
`

const SpeakersWrapper = styled.div`
  padding-bottom: 100px;
  background: #f3f4f9;
  padding-top: 0;
`


const Watch = styled(Button)`
  display: block;
  width: 200px;
  margin-top: 50px;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`
const VenueWrapper = styled.div`
  padding-bottom: 100px;
  background: #f3f4f9;
  padding-top: 0;
`

const IndexPage = ({
  data: {
    contentfulWebsiteData: {
      conferenceName,
      aboutText,
      aboutHeadline,
      history,
      tagline,
      dateAndLocation
    },
    contentfulVenue,
    contentfulCommunity,
    allContentfulSpeaker,
    contentfulMc,
    allContentfulWorkshop
  }
}) => {
  return (
    <Layout>
      <MainWrapper>
        <Page>
          <Main>
            <InfoContainer>
              <Title>
                <GirlsLogo />
                <span
                  css={`
                    color: #fb8e82;
                  `}
                >
                  ReactJS Girls{' '}
                </span>
                {conferenceName.split('ReactJS Girls')}
              </Title>
              <Tagline>{tagline}</Tagline>
              <Date>{dateAndLocation}</Date>
              <div
                css={`
                  display: flex;
                  justify-content: center;
                `}
              >
                <Watch target="_blank" href="https://www.youtube.com/playlist?list=PLfrHCOIcmSupF372EGlyi3l4y2R7F8A3q">
                  <span>Watch the talks</span>
                </Watch>
              </div>
            </InfoContainer>
          </Main>
        </Page>
      </MainWrapper>
      <div id="about">
        <About
          headline={aboutHeadline.aboutHeadline}
          history={history.history}
          text={aboutText.aboutText}
        />
      </div>
      <div id="speakers">
        <SpeakersWrapper>
          <Speakers speakers={allContentfulSpeaker} mc={contentfulMc} />
        </SpeakersWrapper>
      </div>
      <div id="workshops">
        <SpeakersWrapper>
          <Workshops workshops={allContentfulWorkshop} />
        </SpeakersWrapper>
      </div>
      <div id="venue">
        <VenueWrapper>
          <Venue {...contentfulVenue} />
        </VenueWrapper>
      </div>
      <div id="community">
        <Community {...contentfulCommunity} />
      </div>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulSpeaker {
      edges {
        node {
          name
          id
          photo {
            fixed(width: 255, height: 255) {
              ...GatsbyContentfulFixed
            }
          }
          github
          twitter
          website
          job
          talk {
            title
          }
        }
      }
    }

    contentfulMc {
      name
      id
      photo {
        fixed(width: 255, height: 255) {
          ...GatsbyContentfulFixed
        }
      }
      github
      twitter
      job
    }

    contentfulWebsiteData {
      conferenceName
      tagline
      dateAndLocation
      aboutText {
        aboutText
      }
      history {
        history
      }
      aboutHeadline {
        aboutHeadline
      }
    }
    contentfulCommunity {
      intro {
        intro
      }
      diversityText {
        diversityText
      }
      joinConversation {
        joinConversation
      }
      sponsorsThankYou {
        sponsorsThankYou
      }
      partners {
        id
        link
        sponsorType
        logo {
          title
          file {
            url
          }
        }
      }
    }
    allContentfulWorkshop {
      edges {
        node {
          title
          id
          instructor
          location
          description {
            description
          }
        }
      }
    }
    contentfulVenue {
      address
      accessibility {
        accessibility
      }
      name
      coordinates {
        lon
        lat
      }
      closestStations
    }
  }
`

export default IndexPage
