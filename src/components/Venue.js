import React from 'react'
import styled from 'styled-components'
import PageTitle from './PageTitle'
import Page from './Page'
import Map from './Map'

const Wrapper = styled.section`
  background: white;
`

const VenueGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Directions = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`

const P = styled.p`
  margin-bottom: 20px;
`

const Venue = ({
  name,
  address,
  accessibility,
  coordinates,
  closestStations
}) => (
  <Wrapper>
    <Page>
      <PageTitle>Venue</PageTitle>

      <VenueGrid>
        <Directions>
          <h3>{name}</h3>
          <h4>Address</h4>
          <P>{address}</P>
          <h4>Closest Stations</h4>
          <P>{closestStations}</P>
          <h4>Accessibility</h4>
          {accessibility.accessibility.split('\n').map((a, i) => (
            <p key={i}>{a}</p>
          ))}
        </Directions>
        <Map coordinates={{ ...coordinates, lng: coordinates.lon }} />
      </VenueGrid>
    </Page>
  </Wrapper>
)

export default Venue
