import React from 'react'
import PageTitle from './PageTitle'
import Page from './Page'
import styled from 'styled-components'
import Speaker from './Speaker'

const Speakers = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 255px);
  grid-gap: 40px;
  justify-content: center;

  @media screen and (max-width: 986px) {
    grid-template-columns: repeat(2, 255px);
  }

  @media screen and (max-width: 580px) {
    grid-template-columns: repeat(1, 255px);
  }
`

export default ({ speakers: { edges: speakers }, mc }) => (
  <div
    css={`
      background: white;
    `}
  >
    <Page>
      <PageTitle>Speakers</PageTitle>
      <Speakers>
        {speakers.map(({ node: speaker }) => (
          <Speaker key={speaker.id} speaker={speaker} />
        ))}
      </Speakers>

      <PageTitle
        css={`
          margin-top: 40px;
        `}
      >
        MC
      </PageTitle>
      <Speakers>
        <Speaker speaker={mc} />
      </Speakers>
    </Page>
  </div>
)
