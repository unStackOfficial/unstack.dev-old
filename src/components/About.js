import React from 'react'
import styled from 'styled-components'
import PageTitle from './PageTitle'
import Page from './Page'
import ReactMarkdown from 'react-markdown'

const Wrapper = styled.section`
  background: #f3f4f9;
  padding: 50px 0;
  padding-bottom: 100px;
`

const Title = styled(PageTitle)`
  font-size: 28px;
  margin-top: 40px;
  padding-bottom: 30px;
`

const List = styled.ul`
  margin-top: 60px;
  li {
    margin-top: 20px;
    line-height: 36px;
    font-size: 20px;
  }
`

const About = ({ headline, text, history }) => (
  <Wrapper>
    <Page
      fancy
      css={`
        overflow: auto;
      `}
    >
      <PageTitle>About</PageTitle>
      <h3>{headline}</h3>
      <List>
        {text.split('\n').map((reason, i) => (
          <li key={i}>{reason}</li>
        ))}
      </List>
      <Title>History</Title>

      <ReactMarkdown
        className="markdown"
        source={history}
        renderers={{
          text: props => (
            <span
              {...props}
              css={`
                line-height: 36px;
                font-size: 20px;

                + em {
                  margin-top: 20px;
                }
              `}
            />
          )
        }}
      />
    </Page>
  </Wrapper>
)

export default About
