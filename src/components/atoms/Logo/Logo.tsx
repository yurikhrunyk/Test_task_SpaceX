import React from 'react';
import styled from 'styled-components';

//@ts-ignore
import logoSvg from '../../../assets/images/SpaceX-White-Logo.svg';

const LogoImage = styled.img`
  width: 249px;
  height: 52px;
`;

const Logo = () => {
  return (
    <div>
      <LogoImage src={logoSvg} alt="logo" />
    </div>
  );
};

export default Logo;
