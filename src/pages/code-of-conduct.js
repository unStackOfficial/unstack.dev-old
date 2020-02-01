import React from 'react'
import Layout from '../layout/index'
import styled from 'styled-components'

import Page from '../components/Page'
import { Title } from '../components/Type'

const Main = styled.main`
  display: grid;
  grid-template-columns: 400px 1fr;
  min-height: 100%;

  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`

const CodeOfConduct = () => {
  return (
    <Layout darkMenu>
      <Page>
        <Main>
          <Title>Code of Conduct</Title>
          <div
            css={`
              padding-bottom: 70px;
              p {
                padding-bottom: 10px;
              }
            `}
          >
            <p>
              All attendees, speakers, sponsors and volunteers at ReactJS Girls
              conference are required to agree with the following code of
              conduct.
            </p>
            <p>
              Organisers will enforce this code throughout the event. We are
              expecting cooperation from all participants to help ensuring a
              safe environment for everybody.
            </p>{' '}
            <p>
              Need Help? Contact Raquel{' '}
              <a href="tel:+442038686307">+44 20 3868 6307</a>
            </p>
            <h3
              css={`
                padding-top: 20px;
              `}
            >
              The Quick Version
            </h3>
            <p>
              Here at ReactJS Girls conference, we are dedicated to providing a
              harassment-free conference experience for everyone, regardless of
              gender, sexual orientation, disability, physical appearance, body
              size, race, or religion (or lack thereof).
            </p>
            <p>
              We do not tolerate harassment of conference participants in any
              form. We ask that all attendees are mindful of their surroundings
              and of their fellow participants.
            </p>
            <p>
              Conference attendees violating these rules may be sanctioned or
              expelled from the conference without a refund at the discretion of
              the conference organisers.
            </p>
            <h3
              css={`
                padding-top: 20px;
              `}
            >
              The Less Quick Version
            </h3>
            <p>
              Harassment includes, but is not limited to, offensive verbal
              comments related to gender, age, sexual orientation, disability,
              physical appearance, body size, race, religion, sexual images in
              public spaces, deliberate intimidation, stalking, following,
              harassing photography or recording, sustained disruption of talks
              or other events, inappropriate physical contact, and unwelcome
              sexual attention.
            </p>{' '}
            <p>
              Participants asked to stop any harassing behaviour are expected to
              comply immediately.
            </p>{' '}
            <p>
              Sponsors are also subject to the anti-harassment policy. In
              particular, sponsors should not use sexualised images, activities,
              or other material.
            </p>{' '}
            <p>
              If a participant engages in harassing behaviour, the conference
              organisers may take any action they deem appropriate, including
              warning the offender or expulsion from the conference with no
              refund.
            </p>{' '}
            <p>
              If you are subject to or witness unacceptable behavior, or have
              any other concerns, please notify a ReactJS Girls organiser as
              soon as possible. They will be recognised by ReactJS Girls t-shirt
              and organiser badge.{' '}
            </p>
            <p>
              If you can’t find the organiser, reach out to Raquel at{' '}
              <a href="mailto:raquel@reactjsgirls.com">
                raquel@reactjsgirls.com
              </a>{' '}
              / <a href="tel:+442038686307">+44 20 3868 6307</a> /
              <a href="https://twitter.com/raquelcandeias">@raquelcandeias</a>{' '}
            </p>
            <p>
              Conference staff will be happy to help participants and assist
              those experiencing harassment by providing safe environment,
              arranging needed transport, accommodation or otherwise assist in
              the situation.
            </p>{' '}
            <p>
              We expect all community participants (contributors, paid or
              otherwise; sponsors; and other guests) to abide by this Code of
              Conduct in all community venues—online and in-person—as well as in
              all one-on-one communications pertaining to community business.
            </p>
          </div>
        </Main>
      </Page>
    </Layout>
  )
}

export default CodeOfConduct
