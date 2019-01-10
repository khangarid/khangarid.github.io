import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";

import styled, { Theme } from "../styles/theme";
import Link from "./Link";
import animation from '../animations/page';

interface PropsFromState {
  navVisible: boolean;
}

type AllProps = PropsFromState & RouteComponentProps<any>;

class Nav extends React.Component<AllProps> {
  menuLinks = ["about", "portfolio"];
  ref: HTMLElement | null = null;

  componentDidUpdate() {
    const { navVisible } = this.props;

    if (this.ref && navVisible) {
      animation.show(this.ref);
    }

    if (this.ref && !navVisible) {
      animation.hide(this.ref);
    }
  }

  render () {
    return (
      <Container ref={el => this.ref = el}>
        <Left>
          <MenuLink to="/">Khangarid</MenuLink>
        </Left>
        <Right>
          {this.menuLinks.map(link => (
            <MenuLink
              key={link}
              active={location.pathname === `/${link}` ? 1 : 0}
              to={`/${link}`}
            >
              {link}
            </MenuLink>
          ))}
        </Right>
      </Container>
    );
  }
};

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  line-height: 64px;
  padding: 0 2.5rem;
  z-index: 2;
`;

interface MenuLinkProps {
  active?: any
  theme: Theme
}

const MenuLink = styled(Link.Router)`
  color: ${(props: MenuLinkProps) => props.active ? props.theme.colors.fg0 : props.theme.colors.fg3 }
`;

const Left = styled.div`
  font-family: ${props => props.theme.fonts.cursive};
  font-size: 1.2rem;
  float: left;

  ${MenuLink} {
    color: ${props => props.theme.colors.fg0}
  }
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
});

export default withRouter(connect(mapStateToProps)(Nav));
