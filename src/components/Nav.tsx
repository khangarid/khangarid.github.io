import React from 'react';
import { connect } from 'react-redux';

import styled from '../styles/theme';
import Link from './Link';

interface PropsFromState {
  navVisible: boolean
}

type AllProps = PropsFromState;

const Nav = ({ navVisible }: AllProps) => {
  return (
    <Container>
      <Left>
        <MenuLink to="/">Khangarid</MenuLink>
      </Left>
      <Right>
        <MenuLink to="/about">about</MenuLink>
        <MenuLink to="/portfolio">portfolio</MenuLink>
      </Right>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  line-height: 64px;
  padding: 0 3rem;
`;

const MenuLink = styled(Link.Router)`
  color: ${props => props.theme.colors.fg0};
`;

const Left = styled.div`
  font-family: ${props => props.theme.fonts.cursive};
  font-size: 1.2rem;
  float: left;
`;

const Right = styled.div`
  float: right;
  ${MenuLink} {
    font-size: 0.8rem;
    margin-left: 1.5rem;
    text-transform: uppercase;
  }
`;


const mapStateToProps = (state: any) => ({
  navVisible: state.layout.navVisible
})

export default connect(mapStateToProps)(Nav);
