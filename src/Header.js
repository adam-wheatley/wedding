import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-family: TomatoSoup;
  font-size: 120px;
  font-weight: 500;
  line-height: 0.3;
  margin-top: 0;

  @media only screen and (max-width: 600px) {
    font-size: 80px;
    margin-top: 25px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 70px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ history }) => (
  <StyledHeader onClick={() => history.push('/')}>
    The Wheatley Wedding
  </StyledHeader>
);

export default withRouter(Header);
