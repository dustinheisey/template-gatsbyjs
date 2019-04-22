import React from 'react'
import styled from 'styled-components'
import External from '../../../elements/links/External'

const StyledContainer = styled.section``
const StyledHeading = styled.h1``
const StyledText = styled.p``

const Contents5 = ({
  icon1,
  icon2,
  icon3,
  heading,
  facebook,
  twitter,
  url
}) => (
  <StyledContainer>
    <StyledHeading>{heading}</StyledHeading>
    <StyledText>Share: </StyledText>
    <External link={facebook}>{icon1}</External>
    <External link={twitter}>{icon2}</External>
    <External link={url}>{icon3}</External>
  </StyledContainer>
)

export default Contents5
