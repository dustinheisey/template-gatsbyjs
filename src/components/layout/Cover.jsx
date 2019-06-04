import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import {
  React,
  styled,
  GlobalStyle,
  Section
} from '../../../config/imports'

import Header from './header/Header'
import Footer from './footer/Footer'
import Call from './footer/Call'
import SEO from './header/SEO'

const StyledHeader = styled(Header)`
  width: 100%;
`
const StyledSection = styled(Section)`
  background: transparent;
  min-height: 100vh;
  color: #fff;
  padding: 0;
  margin: 0;
`

const StyledCall = styled.div`
  padding: var(--xxl);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--text-lighter);
`

const Heading = styled.h1`
  color: var(--text-lighter);
`

// const imageData = []
// imageData[0] = Index
// imageData[1] = About
// imageData[2] = Process
// imageData[3] = Services
// imageData[4] = Design
// imageData[5] = PWA
// imageData[6] = Optimize

const StyledContainer = styled.section`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: var(--md);
`
const Test = ({
  className,
  heading,
  children,
  text,
  img,
  btn,
  title,
  description
}) => (
  <StaticQuery
    query={graphql`
      query {
        index: file(relativePath: { eq: "cafe.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        about: file(relativePath: { eq: "forest.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        process: file(relativePath: { eq: "tables.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        services: file(
          relativePath: { eq: "waterfall.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        design: file(
          relativePath: { eq: "misty-forest.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        pwa: file(relativePath: { eq: "hearts.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        optimize: file(
          relativePath: { eq: "mountain.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        coffee: file(relativePath: { eq: "coffee.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        gradient: file(
          relativePath: { eq: "gradient.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <GlobalStyle />
          <SEO title={title} description={description} />
          <StyledContainer img={img}>
            <StyledHeader light />
            <StyledSection xxl>
              <StyledCall>
                <Heading
                  style={{ color: 'var(--text-lighter)' }}
                >
                  {heading}
                </Heading>
                <p style={{ color: 'var(--text-lighter)' }}>
                  {text}
                </p>
                {btn}
              </StyledCall>
            </StyledSection>
          </StyledContainer>
          <main style={{ width: '100%' }}>{children}</main>
          <Call />
          <Footer />
        </>
      )
    }}
  />
)

const StyledTest = styled(Test)`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: var(--md);
`

export default StyledTest
