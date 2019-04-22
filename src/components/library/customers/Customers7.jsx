import React from 'react'
import styled from 'styled-components'
import Grid3 from '../grids/Grid3'

const StyledContainer = styled(Grid3)``
const StyledSection = styled.div``
const StyledPerson = styled.div``
const StyledTitle = styled.div``
const StyledName = styled.h3``
const StyledDescription = styled.h4``
const StyledText = styled.p``

const Customers7 = ({
  image1,
  image2,
  image3,
  name1,
  name2,
  name3,
  description1,
  description2,
  description3,
  text1,
  text2,
  text3
}) => (
  <StyledContainer>
    <StyledSection>
      <StyledPerson>
        {image1}
        <StyledTitle>
          <StyledName>{name1}</StyledName>
          <StyledDescription>
            {description1}
          </StyledDescription>
        </StyledTitle>
      </StyledPerson>
      <StyledText>{text1}</StyledText>
    </StyledSection>
    <StyledSection>
      <StyledPerson>
        {image2}
        <StyledTitle>
          <StyledName>{name2}</StyledName>
          <StyledDescription>
            {description2}
          </StyledDescription>
        </StyledTitle>
      </StyledPerson>
      <StyledText>{text2}</StyledText>
    </StyledSection>
    <StyledSection>
      <StyledPerson>
        {image3}
        <StyledTitle>
          <StyledName>{name3}</StyledName>
          <StyledDescription>
            {description3}
          </StyledDescription>
        </StyledTitle>
      </StyledPerson>
      <StyledText>{text3}</StyledText>
    </StyledSection>
  </StyledContainer>
)

export default Customers7
