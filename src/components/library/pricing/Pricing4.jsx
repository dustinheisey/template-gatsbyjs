import React from 'react'
import styled from 'styled-components'
import Grid2 from '../grids/Grid2'
import BtnPrimary from '../../elements/buttons/Primary'

const StyledContainer = styled(Grid2)``
const StyledSection = styled.div``
const StyledText = styled.p``
const StyledPrice = styled.p``
const StyledCaption = styled.caption``
const StyledFeatures = styled.div``
const StyledFeature = styled.p``
const StyledFeatureTitle = styled.h3``

const Pricing4 = ({
  icon1,
  icon2,
  caption1,
  caption2,
  price1,
  price2,
  text1,
  text2,
  featureTitle1,
  featureTitle2,
  feature11,
  feature12,
  feature13,
  feature21,
  feature22,
  feature23,
  link1,
  link2,
  btnText1,
  btnText2
}) => (
  <StyledContainer>
    <StyledSection>
      {icon1}
      <StyledPrice>{price1}</StyledPrice>
      <StyledText>{text1}</StyledText>
      <StyledFeatures>
        <StyledFeatureTitle>
          {featureTitle1}
        </StyledFeatureTitle>
        <ul>
          <li>
            <StyledFeature>{feature11}</StyledFeature>
          </li>
          <li>
            <StyledFeature>{feature12}</StyledFeature>
          </li>
          <li>
            <StyledFeature>{feature13}</StyledFeature>
          </li>
        </ul>
      </StyledFeatures>
      <BtnPrimary link={link1} text={btnText1} />
      <StyledCaption>{caption1}</StyledCaption>
    </StyledSection>
    <StyledSection>
      {icon2}
      <StyledPrice>{price2}</StyledPrice>
      <StyledText>{text2}</StyledText>
      <StyledFeatures>
        <StyledFeatureTitle>
          {featureTitle2}
        </StyledFeatureTitle>
        <ul>
          <li>
            <StyledFeature>{feature21}</StyledFeature>
          </li>
          <li>
            <StyledFeature>{feature22}</StyledFeature>
          </li>
          <li>
            <StyledFeature>{feature23}</StyledFeature>
          </li>
        </ul>
      </StyledFeatures>
      <BtnPrimary link={link2} text={btnText2} />
      <StyledCaption>{caption2}</StyledCaption>
    </StyledSection>
  </StyledContainer>
)

export default Pricing4
