import { createGlobalStyle } from 'styled-components'
import styledBreakpoint from '@humblebee/styled-components-breakpoint'

export default createGlobalStyle`
  :root {
    /* Primary Colors */
    --primary-darker: ;
    --primary-dark: ;
    --primary: ;
    --primary-light: ;
    --primary-lighter: ;

    /* Secondary Colors */
    --secondary-darker: ;
    --secondary-dark: ;
    --secondary: ;
    --secondary-light: ;
    --secondary-lighter: ;

    /* Accent Colors */
    --accent-darker: ;
    --accent-dark: ;
    --accent: ;
    --accent-light: ;
    --accent-lighter: ;

    /* Text Colors */
    --text-darker: ;
    --text-dark: ;
    --text: ;
    --text-light: ;
    --text-lighter: ;

    /* Tag Colors */
    --tag1: ;
    --tag2: ;
    --tag3: ;
    --tag4: ;
    --tag5: ;

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

  html {
    scroll-behavior: smooth;
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

  * {
    margin: 0;
  }
`

export const media = styledBreakpoint({
  phone: 599,
  tabletPortrait: 600,
  tabletLandscape: 900,
  desktop: 1200,
  bigDesktop: 1800
})
