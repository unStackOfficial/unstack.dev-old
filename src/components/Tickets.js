import React from 'react'
import styled from 'styled-components'
import PageTitle from './PageTitle'
import Page from './Page'

const Wrapper = styled.section`
  background: #f3f4f9;
  padding: 50px 0;
  padding-bottom: 100px;
`

const TicketsPage = styled(Page)`
  overflow: auto;
`

const Tickets = ({ headline, text, history }) => (
  <Wrapper>
    <TicketsPage fancy>
      <PageTitle>Tickets</PageTitle>
      <tito-widget event="reactjs-girls-conference/reactjs-girls-conference" />
    </TicketsPage>
  </Wrapper>
)

export default Tickets
