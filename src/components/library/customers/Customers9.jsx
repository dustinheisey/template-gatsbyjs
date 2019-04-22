import React from 'react'
import styled from 'styled-components'
import Grid4 from '../grids/Grid4'

const StyledContainer = styled(Grid4)``
const StyledSection = styled.div``
const StyledPerson = styled.div``
const StyledTitle = styled.div``
const StyledName = styled.h3``
const StyledDescription = styled.h4``
const StyledText = styled.p``

const Customers9 = ({
  image1,
  image2,
  image3,
  image4,
  name1,
  name2,
  name3,
  name4,
  description1,
  description2,
  description3,
  description4,
  text1,
  text2,
  text3,
  text4
}) => (
  <StyledContainer>
    <StyledSection>
      <StyledText>{text1}</StyledText>
      <StyledPerson>
        {image1}
        <StyledTitle>
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
        {image2}
        <StyledTitle>
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
        {image3}
        <StyledTitle>
          <StyledName>{name3}</StyledName>
          <StyledDescription>
            {description3}
          </StyledDescription>
        </StyledTitle>
      </StyledPerson>
    </StyledSection>
    <StyledSection>
      <StyledText>{text4}</StyledText>
      <StyledPerson>
        {image4}
        <StyledTitle>
          <StyledName>{name4}</StyledName>
          <StyledDescription>
            {description4}
          </StyledDescription>
        </StyledTitle>
      </StyledPerson>
    </StyledSection>
  </StyledContainer>
)

export default Customers9
