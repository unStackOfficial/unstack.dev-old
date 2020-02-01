import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import PageTitle from './PageTitle'
import Page from './Page'

const Wrapper = styled.section`
  background: #f3f4f9;
  padding: 50px 0;
  padding-bottom: 100px;
`

const Title = styled.h5`
  font-size: 24px;
  color: #7a7f8d;
  padding-bottom: 5px;
`

const WorkshopPage = styled(Page)`
  overflow: auto;
`

const Instructor = styled.h6`
  font-size: 18px;
  font-weight: normal;
  color: #232c3d;
  padding: 0;
  margin-bottom: 10px;
`

const At = styled.h6`
  font-size: 16px;
  font-weight: normal;
  color: #232c3d;
  padding: 0;
  margin-bottom: 20px;
  text-decoration: underline;
`

const Workshops = ({ workshops: { edges } }) => (
  <Wrapper>
    <WorkshopPage fancy>
      <PageTitle>Workshops</PageTitle>
      {edges.map(({ node: workshop }) => (
        <div
          key={workshop.id}
          css={`
            margin-bottom: 20px;
          `}
        >
          <Title>{workshop.title}</Title>
          <Instructor>By {workshop.instructor}</Instructor>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${
              workshop.location
            } `}
          >
            <At>At {workshop.location}</At>
          </a>

          <ReactMarkdown
            css={`
              line-height: 1.5;
              ul {
                list-style: inherit;
                padding-left: 20px;
                margin: 10px 0;
              }
            `}
            source={workshop.description.description}
          />
        </div>
      ))}
    </WorkshopPage>
  </Wrapper>
)

export default Workshops
