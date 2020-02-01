import React, { Fragment } from 'react'
import styled from 'styled-components'
import PageTitle from './PageTitle'
import Page from './Page'
import ReactMarkdown from 'react-markdown'
import Button from './Button'

const Communities = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  a:not(:last-child) {
    margin-right: 30px;
  }
`

const Wrapper = styled.section`
  background: #f3f4f9;
  padding: 50px 0;
  padding-bottom: 100px;
  padding-top: 0;
`

const SubSection = styled.section`
  padding-bottom: 40px;
`

const About = ({
  intro: { intro },
  partners,
  diversityText: { diversityText },
  joinConversation: { joinConversation },
  sponsorsThankYou: { sponsorsThankYou }
}) => {
  const partnerSponsors = partners.filter(s => s.sponsorType === 'Partner')
  const diversitySponsors = partners.filter(s => s.sponsorType === 'Diversity')
  const communitySponsors = partners.filter(s => !s.sponsorType)

  return (
    <Wrapper>
      <Page fancy>
        <PageTitle>Sponsors & Community</PageTitle>

        <SubSection>
          <PageTitle
            css={`
              font-size: 28px;
              padding-bottom: 30px;
            `}
          >
            Sponsors
          </PageTitle>
          <ReactMarkdown source={sponsorsThankYou} />
          <h4
            css={`
              margin-top: 40px;
            `}
          >
            Organiser
          </h4>
          <a rel="noopener noreferrer" href="https://yld.io" target="_blank">
            {' '}
            <img
              width="130"
              src="https://uploads-ssl.webflow.com/5b3dfe51f5523c976ad4b12b/5b436659d4f8bb51f436538a_*YLD%20logo%20-%20main-p-500.jpeg"
            />
          </a>

          {partnerSponsors.length ? (
            <Fragment>
              <h4
                css={`
                  margin-top: 40px;
                `}
              >
                {partnerSponsors.length === 1 ? 'Partner Sponsor' : 'Partner Sponsor'}
              </h4>

              <Communities styles={{ width: '50px'}}>
                {partnerSponsors.map(partner => (
                  <a
                    key={partner.id}
                    rel="noopener noreferrer"
                    href={partner.link}
                    target="_blank"
                  >
                    {' '}
                    <img width="200" src={partner.logo.file.url}/>
                  </a>
                ))}
              </Communities>
            </Fragment>
          ) : null}

          {diversitySponsors.length ? (
            <Fragment>
              <h4
                css={`
                  margin-top: 40px;
                `}
              >
                Diversity Sponsors
              </h4>

              <Communities>
                {diversitySponsors.map(partner => (
                  <a
                    key={partner.id}
                    rel="noopener noreferrer"
                    href={partner.link}
                    target="_blank"
                  >
                    {' '}
                    <img height="95" src={partner.logo.file.url} />
                  </a>
                ))}
              </Communities>
            </Fragment>
          ) : null}

          <ReactMarkdown
            css={`
              margin: 40px 0;
            `}
            source={joinConversation}
          />
          <Button
            rel="noopener noreferrer"
            href="https://yld.typeform.com/to/xz4xYb"
            target="_blank"
            alternative
            css={`
              margin-top: 40px;
            `}
          >
            <span>Sponsor the event</span>
          </Button>

          <p
            css={`
              margin-top: 40px;
            `}
          >
            <ReactMarkdown source={diversityText} />
          </p>
        </SubSection>

        <SubSection>
          <PageTitle
            css={`
              font-size: 28px;
              margin-top: 40px;
              padding-bottom: 30px;
            `}
          >
            Community
          </PageTitle>
          <ReactMarkdown
            css={`
              margin-bottom: 40px;
            `}
            source={intro}
          />
          <Communities>
            {communitySponsors.map(partner => (
              <a
                key={partner.id}
                rel="noopener noreferrer"
                href={partner.link}
                target="_blank"
              >
                {' '}
                <img height="95" src={partner.logo.file.url} />
              </a>
            ))}
          </Communities>
        </SubSection>
      </Page>
    </Wrapper>
  )
}

export default About
