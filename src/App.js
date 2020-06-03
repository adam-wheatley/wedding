import React from 'react';
import styled from 'styled-components';
import Img from './ash-adam.jpg';

// const PageWrapper = styled.main`
//   text-align: center;
//   padding-top: 25px;
// `;

// const StyledImg = styled.img`
//   border-top-left-radius: 255px 15px;
//   border-top-right-radius: 15px 225px;
//   border-bottom-right-radius: 225px 15px;
//   border-bottom-left-radius: 15px 255px;
//   -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
//   filter: grayscale(100%);
//   max-width: 300px;
//   width: 90%;
//   margin-top: -35px;
// `;

// const VisuallyTitle = styled.h1`
//   font-family: visually;
//   font-size: ${(p) => (p.size ? p.size : '100px')};
//   font-weight: 100;
//   @media only screen and (max-width: 600px) {
//     font-size: 50px;
//   }
// `;

// const Thino = styled.h1`
//   font-family: thinoothin;
//   font-size: ${(p) => (p.size ? p.size : '125px')};
// `;

// const Test = styled.h1`
//   font-size: 70px;
//   font-family: Belgiansignature;
//   font-weight: 100;
// `;

export const App = () => {
  return (
    <PageWrapper>
      {/* <VisuallyTitle>Save The Date</VisuallyTitle>
      <StyledImg src={Img} width='500' />
      <Test>Adam Wheatley & Ashley Fairbairn</Test> */}
    </PageWrapper>
  );
};

export default App;
