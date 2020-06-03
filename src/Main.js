import React from 'react';
import styled from 'styled-components';
import Img from './ash-adam.jpg';
import Love from './love.png';
import { Link } from 'react-router-dom';

const Wrapper = styled.main`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 50px;
`;

const Title = styled.h1`
  font-family: TomatoSoup;
  font-size: 150px;
  font-weight: 500;
  line-height: 0.3;

  @media only screen and (max-width: 600px) {
    font-size: 120px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 80px;
  }
`;

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
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  border: none;
  font-family: 'Champagne & Limousines';
  padding: 15px;
  margin: 0 15px;
  font-weight: 800;
  background: #626267;
  color: white;
`;

const Main = () => {
  return (
    <Wrapper>
      <div>
        <Title>Adam + Ashley</Title>
        <StyledImg src={Img} />

        <Subheading fontSize='30px'>SAVE THE DATE</Subheading>
        <Subheading fontSize='30px'>25. 06. 2021</Subheading>
        <img src={Love} width='25' />
        <Subheading fontSize='25px'>GG's YARD</Subheading>
        <Subheading fontSize='25px'>GATEHOUSE OF FLEET</Subheading>
        <Subheading fontSize='20px' ul>
          RECOMMENDATIONS
        </Subheading>
        <Button to='/accomodation'>ACCOMODATION</Button>
        <Button>HAIR & MAKEUP</Button>

        {/* <Subheading>Friday, 25th of June, 2021</Subheading> */}
      </div>
    </Wrapper>
  );
};

export default Main;
