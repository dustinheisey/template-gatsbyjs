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
    // h2: {
    //   fontSize: '300%'
    // },
    // h3: {
    //   fontSize: '150%'
    // },
    p: {
      maxWidth: '70ch'
    }
  })
})
