import React from 'react';
import styled from 'styled-components';
import Img from './img/ash-adam.jpg';
import Love from './img/love.png';
import Header from './Header';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles/PageStyles';

const Subheading = styled.h2`
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
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
    width: 160px;
    margin: 0 auto 35px;
    padding-top: 35px;
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

const Button = styled(Link)`
  display: inline-block;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  border: none;
  font-family: 'Champagne & Limousines';
  padding: 15px;
  margin: 5px 25px;
  font-weight: 800;
  background: #626267;
  color: white;
  text-decoration: none;
  min-width: 150px;
`;

const Otherbtn = styled(Link)`
  font-family: 'Champagne & Limousines';
`;

const App = () => {
  return (
    <Wrapper>
      <div>
        <Header />
        <StyledImg src={Img} />
        <Subheading fontSize='30px'>SAVE THE DATE</Subheading>
        <Subheading fontSize='30px'>25. 06. 2021</Subheading>
        <img src={Love} width='25' alt='Love Heart' />
        <Subheading fontSize='25px'>GG's YARD</Subheading>
        <Subheading fontSize='25px'>GATEHOUSE OF FLEET</Subheading>
        <Otherbtn to='/venue'>Find out more</Otherbtn>
        <Subheading fontSize='20px' ul>
          RECOMMENDATIONS
        </Subheading>
        <Button to='/accomodation'>ACCOMODATION</Button>
        <Button>HAIR & MAKEUP</Button>
      </div>
    </Wrapper>
  );
};

export default App;
