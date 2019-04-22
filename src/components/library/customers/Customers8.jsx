import React from 'react'
import styled from 'styled-components'
import Grid3 from '../grids/Grid3'

const StyledContainer = styled(Grid3)``
const StyledSection = styled.div``
const StyledSocial = styled.div``
const StyledPerson = styled.div``
const StyledTitle = styled.div``
const StyledName = styled.h3``
const StyledDescription = styled.h4``
const StyledText = styled.p``

const Customers8 = ({
  image1,
  image2,
  image3,
  icon1,
  icon2,
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
      <StyledText>{text1}</StyledText>
      <StyledPerson>
        <StyledSocial>
          {icon1}
          {icon2}
        </StyledSocial>
        <StyledTitle>
          {image1}
          <StyledName>{name1}</StyledName>
          <StyledDescription>
            {description1}
          </StyledDescription>
        </StyledTitle>
      </StyledPerson>
    </StyledSection>
    <StyledSection>
      <StyledText>{text2}</StyledText>
      <StyledPerson>
        <StyledSocial>
          {icon1}
          {icon2}
        </StyledSocial>
        <StyledTitle>
          {image2}
          <StyledName>{name2}</StyledName>
          <StyledDescription>
            {description2}
          </StyledDescription>
        </StyledTitle>
      </StyledPerson>
    </StyledSection>
    <StyledSection>
      <StyledText>{text3}</StyledText>
      <StyledPerson>
        <StyledSocial>
          {icon1}
          {icon2}
        </StyledSocial>
        <StyledTitle>
          {image3}
          <StyledName>{name3}</StyledName>
          <StyledDescription>
            {description3}
          </StyledDescription>
        </StyledTitle>
      </StyledPerson>
    </StyledSection>
  </StyledContainer>
)

export default Customers8
