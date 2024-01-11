import React from 'react';
import styled from 'styled-components';

interface NavButtonProps {
  title: string;
}

const NavButton: React.FC<NavButtonProps> = ({ title }) => {
  return <NavButtonElement>{title}</NavButtonElement>;
};

const NavButtonElement = styled.button`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: Lato;
  font-weight: 400;
  text-transform: uppercase;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0 0 4px 0;

  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

export default NavButton;
