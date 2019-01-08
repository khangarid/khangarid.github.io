import React from 'react';

import styled, { css } from '../styles/theme';

interface OwnProps {
  length: number,
  selected: number,
  onSelect: Function,
  onNext: Function,
  onPrev: Function
}

const Slides = ({ length, selected, onSelect, onNext, onPrev }: OwnProps) => {

  const renderSlides = () => {
    const slides = [];

    for (let i = 0; i < length; i++) {
      slides.push(
        <Slide key={i} onClick={() => onSelect(i)}>
          <Line active={selected === i} />
        </Slide>
      )
    }

    return slides;
  }

  return (
    <Container>
      {renderSlides()}
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

interface LineProps {
  active: boolean
}

const Line = styled.span`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.colors.fg3};
  display: inline-block;
  transition: all .2s ease;

  ${(props: LineProps) => props.active && css`
    background-color: ${props => props.theme.colors.fg1};
    height: 2px;
  `}
`;

const Slide = styled.span`
  height: 2rem;
  width: 2.5rem;
  padding: 0 0.5rem;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    ${Line} {
      background-color: ${props => props.theme.colors.fg0};
    }
  }
`;

export { Slides };
