import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../atoms/Logo/Logo';
import { IconFav } from '../../atoms/Icon/Icon';
import NavButton from '../../atoms/NavButton/NavButton';
import { SignInButton } from '../../atoms/Button/Button';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>

      <Navbar>
        <Link to="/">
          <NavButton title="home" />
        </Link>
        <NavButton title="tours" />
        <NavButton title="about" />
        <NavButton title="help" />
      </Navbar>

      <ActionsContainer>
        <Link to="/fav">
          <IconFav />
        </Link>
        <SignInButton text="Sign In" />
      </ActionsContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 13px 80px;
  background: rgba(30, 30, 30, 0.48);
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export default Header;
