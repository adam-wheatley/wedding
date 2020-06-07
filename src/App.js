import React from 'react';
import styled from 'styled-components';
import Img from './img/ash-adam.jpg';
import Love from './img/love.png';
import Header from './Header';
import { Wrapper } from './styles/PageStyles';
import Navbar from './Navbar';

export const Subheading = styled.h2`
  font-family: 'Champagne & Limousines';
  font-size: ${(p) => (p.fontSize ? p.fontSize : '35px')};
  font-weight: unset;
  line-height: 0.7;

  ${(p) =>
    p.pt &&
    `
    padding-top: ${p.pt}
  `}

  ${(p) =>
    p.ul &&
    `
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
    max-width: 400px;
    margin: 35px auto;
    padding-top: 10px;
  `}
`;

const StyledImg = styled.img`
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  width: 90%;
  max-width: 250px;
  margin-bottom: 25px;
`;

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <div>
        <Header />
        <StyledImg src={Img} />
        <Subheading fontSize='30px'>ASHLEY + ADAM</Subheading>
        <Subheading fontSize='25px'>SAVE THE DATE</Subheading>
        <Subheading fontSize='20px'>25. 06. 2021</Subheading>
        <img src={Love} width='25' alt='Love Heart' />
        <Subheading fontSize='25px'>GG's YARD</Subheading>
        <Subheading fontSize='25px'>GATEHOUSE OF FLEET</Subheading>
      </div>
    </Wrapper>
  );
};

export default App;
