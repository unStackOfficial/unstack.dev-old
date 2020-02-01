import { createGlobalStyle } from 'styled-components'
import typography from './css/type.js'
import reset from './css/reset.js'
import font from 'circular-std'

export default createGlobalStyle`
${font}
${reset}
${typography}

html, body {
    width: 100vw;
    overflow-x: hidden;
}

body {
  font-family: 'CircularStd', 'Roboto', sans-serif;
  background: #FFFFFF;
  color: #41495D;

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    line-height: 1.5;
  }
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.markdown em {
  display: flex;
  align-items: center;
  justify-content: center;
}

.markdown img {
  width: 100px;
  margin-right: 40px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'CircularStd', sans-serif;
  font-weight: 600;
  line-height: 1.2;
  padding-bottom: 20px;

  span {
      line-height: 1.2;
  }

}

.gm-style-mtc, .gm-svpc, .gmnoprint, .gm-fullscreen-control {
  display: none;
}

body {
  .tito-wrapper  {
    border: none;
    background: inherit;
    font-family: 'CircularStd','Roboto',sans-serif;
    color: #41495D;
  }

  .tito-discount-code {
    margin-left: 13px;
  }

  .tito-submit {
    border: none !important;
    background: #fb8e82 !important;
    font-size: 16px !important;
    height: auto !important;
    font-weight: bold !important;
            height: 44px !important;
  }

  .tito-submit:hover {
    border-color: #c9645d !important;
    background: #bd6a61 !important;
}

input.form-control.tito-discount-code-field.discount-code-field  {
        height: 44px !important;
    padding: 10px !important;
    font-size: 16px !important;
    border: 3px solid #fb8e82 !important;
    color: #333 !important;
    background: #fff !important;
        box-shadow: none !important;
    border-radius: 0 !important;
  }
}


`
