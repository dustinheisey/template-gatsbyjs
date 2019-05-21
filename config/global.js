import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    /* Primary Colors */
    --primary-darker: #86BCFF;
    --primary-dark: #5792DA;
    --primary: #3071C0;
    --primary-light: #1659AB;
    --primary-lighter: #00459C;

    /* Secondary Colors */
    --secondary-darker: #222222;
    --secondary-dark: #555555;
    --secondary: #bbbbbb;
    --secondary-light: #dddddd;
    --secondary-lighter: #ffffff;

    /* Accent Colors */
    --accent-darker: #000;
    --accent-dark: #000;
    --accent: #000;
    --accent-light: #000;
    --accent-lighter: #000;

    /* Link Color */
    --link: #3071C0;
    --link-hover: #00459C;

    /* Tag Colors */
    --tag1: red;
    --tag2: orange;
    --tag3: yellow;
    --tag4: green;
    --tag5: blue;

    /* Box Shadow */
    --shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    --shadow-hover: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    /* Spacing */
    --xs: .5vmin;
    --sm: 1vmin;
    --md: 3vmin;
    --lg: 5vmin;
    --xl: 7vmin;
    --xxl: 15vmin;
  }

  .tooltip {
    border-radius: 5px;
    outline: none;
    padding: var(--sm) var(--md);
    margin: var(--sm);
    transition: all 0.5s;

    background: var(--primary);
    color: var(--secondary-lighter);
  }

  img {
    width: 100%;
  }
`
