import React from 'react'
import styled from 'styled-components'
import { InputWrapper, Input, Button } from './Form'

const Form = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

const Subscribe = () => {
  return (
    <Form id="mc_embed_signup">
      <form
        action="https://yld.us16.list-manage.com/subscribe/post?u=d159c019fc10dc08b3914ac05&amp;id=9d56206115"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
      >
        <Wrapper id="mc_embed_signup_scroll">
          <InputWrapper>
            <Input
              className="no-right"
              required
              type="text"
              name="FNAME"
              id="mce-FNAME"
            />
            <label htmlFor="mce-FNAME">Name </label>
          </InputWrapper>
          <InputWrapper>
            <Input type="email" required name="EMAIL" id="mce-EMAIL" />
            <label htmlFor="mce-EMAIL">Email</label>
          </InputWrapper>
          <div id="mce-responses">
            <div id="mce-error-response" style={{ display: 'none' }} />
            <div id="mce-success-response" style={{ display: 'none' }} />
          </div>
          <div style={{ position: 'absolute', left: -5000 }} aria-hidden="true">
            <Input
              type="text"
              name="b_d159c019fc10dc08b3914ac05_9d56206115"
              tabIndex="-1"
            />
          </div>
          <Button type="submit" name="subscribe" id="mc-embedded-subscribe">
            <span
              css={`
                position: relative;
                z-index: 1;
              `}
            >
              Subscribe
            </span>
          </Button>
        </Wrapper>
      </form>
    </Form>
  )
}

export default Subscribe
