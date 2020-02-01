import React from 'react'
import Img from 'gatsby-image'
import Twitter from '../assets/twitter.svg'
import Github from '../assets/github.svg'
import Website from '../assets/website.svg'
import styled from 'styled-components'

const Social = styled.ul`
  display: flex;
  margin-top: 20px;

  li {
    margin-right: 10px;
    transition: all 200ms ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const Talk = styled.span`
  padding-top: 20px;
  display: block;
  font-size: 16px;
  color: #232c3d;
`

const Avatar = styled(Img)`
  width: 255px;
  height: 255px;
  background-image: url(${props => props.photo});
  background-size: cover;
  background-position: 50% 50%;
  filter: grayscale(0.3);
  margin-bottom: 20px;
  transition: all 200ms ease;
  border-radius: 3px;

  &:hover {
    filter: grayscale(0);
  }
`

const Name = styled.h5`
  font-size: 24px;
  color: #7a7f8d;
  padding-bottom: 5px;
`

const Job = styled.span`
  font-size: 18px;
  color: #232c3d;
`

export default ({ speaker }) => (
  <div>
    <Avatar fixed={speaker.photo.fixed} />
    <Name>{speaker.name}</Name>
    <Job>{speaker.job}</Job>

    {speaker.talk && <Talk>{speaker.talk.title}</Talk>}
    <Social>
      {speaker.twitter ? (
        <li>
          <a href={speaker.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
        </li>
      ) : null}
      {speaker.github ? (
        <li>
          <a href={speaker.github} target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </li>
      ) : null}
      {speaker.website ? (
        <li>
          <a href={speaker.website} target="_blank" rel="noopener noreferrer">
            <Website />
          </a>
        </li>
      ) : null}
    </Social>
  </div>
)
