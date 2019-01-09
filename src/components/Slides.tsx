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
        <Item key={i} onClick={() => onSelect(i)}>
          <Line active={selected === i} />
        </Item>
      )
    }

    return slides;
  }

  return (
    <Container>
      <Arrow onClick={() => onPrev()} prev>
        <img src="/icons/right-arrow.svg" alt="Prev" />
      </Arrow>
      {renderSlides()}
      <Arrow onClick={() => onNext()}>
        <img src="/icons/right-arrow.svg" alt="Next" />
      </Arrow>
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
    height: 3px;
  `}
`;

const Item = styled.span`
  height: 2rem;
  width: 2.5rem;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${Line} {
      background-color: ${props => props.theme.colors.fg0};
    }
  }
`;

interface ArrowProps {
  prev?: boolean
}

const Arrow = styled(Item)`
  img {
    width: 100%;
    transform: scale(0.9);
    transition: all .2s ease;
  }

  margin-left: 1.5rem;

  ${(props: ArrowProps) => props.prev && css`
    transform: rotate(180deg);

    margin: 0 1.5rem 0 0;
  `}

  &:hover {
    img {
      transform: scale(1.1)
    }
  }

  &:active {
    img {
      transform: scale(0.9);
    }
  }
`;

export { Slides };
