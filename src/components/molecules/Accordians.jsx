import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'

const StyledAccordion = styled(Accordion)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`
const StyledAccordionItem = styled(AccordionItem)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`
const StyledAccordionItemHeading = styled(
  AccordionItemHeading
)``
const StyledAccordionItemButton = styled(
  AccordionItemButton
)`
  background-color: #f4f4f4;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;

  &:hover {
    background-color: #ddd;
  }

  &:before {
    display: inline-block;
    content: '';
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
  }

  &[aria-expanded='true']::before,
  [aria-selected='true']::before {
    transform: rotate(45deg);
  }
`

const fadein = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  padding: 20px;
  animation: ${fadein} 0.35s ease-in;
`

export default () => (
  <StyledAccordion>
    <StyledAccordionItem>
      <StyledAccordionItemHeading>
        <StyledAccordionItemButton>
          What harsh truths do you prefer to ignore?
        </StyledAccordionItemButton>
      </StyledAccordionItemHeading>
      <StyledAccordionItemPanel>
        <p>
          Exercitation in fugiat est ut ad ea cupidatat ut
          in cupidatat occaecat ut occaecat consequat est
          minim minim esse tempor laborum consequat esse
          adipisicing eu reprehenderit enim.
        </p>
      </StyledAccordionItemPanel>
    </StyledAccordionItem>
    <StyledAccordionItem>
      <StyledAccordionItemHeading>
        <StyledAccordionItemButton>
          Is free will real or just an illusion?
        </StyledAccordionItemButton>
      </StyledAccordionItemHeading>
      <StyledAccordionItemPanel>
        <p>
          In ad velit in ex nostrud dolore cupidatat
          consectetur ea in ut nostrud velit in irure cillum
          tempor laboris sed adipisicing eu esse duis nulla
          non.
        </p>
      </StyledAccordionItemPanel>
    </StyledAccordionItem>
  </StyledAccordion>
)
