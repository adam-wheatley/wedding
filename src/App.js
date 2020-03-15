import React from 'react';
import styled from 'styled-components';
import Img from './ash-adam.jpg';

const PageWrapper = styled.main`
  text-align: center;
  padding-top: 100px;
`;

const StyledImg = styled.img`
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  max-width: 500px;
  width: 95%;
`;

export const App = () => {
  return (
    <PageWrapper>
      <StyledImg src={Img} width='500' />
    </PageWrapper>
  );
};

export default App;
