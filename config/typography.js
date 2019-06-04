import Typography from 'typography'

export default new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  bodyFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  scaleRatio: 4.5,
  overrideStyles: () => ({
    p: {
      maxWidth: '70ch'
    }
  }),
  '@media only screen and (max-width:599px)': {
    h1: {}
  }
})
