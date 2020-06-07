import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

import styled from 'styled-components';
import Img from './img/gg.jpg';
import { Wrapper } from './styles/PageStyles';
import Navbar from './Navbar';

const Subheading = styled.h2`
  font-family: 'Champagne & Limousines';
  font-size: ${(p) => (p.fontSize ? p.fontSize : '35px')};
  font-weight: unset;
  line-height: 1;

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
    margin: 0 auto 35px;
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
  max-width: 350px;
  width: 90%;
  margin: 25px 10px;
`;

const Address = styled.p`
  font-family: 'Champagne & Limousines';
`;

const Venue = () => (
  <Wrapper>
    <Navbar />
    <div>
      <Header />
      <Subheading fontSize='25px' ul>
        GG's Yard
      </Subheading>
      <StyledImg src={Img} />

      <Address>
        GG's Yard is around 2 hour's from Glasgow, and 3 hours from Perth.{' '}
        <br />
        The venue itself is beautiful converted farm with views of the ocean.{' '}
        <br />
        It has unique snugs to stay, but unfortunately only enough for the
        wedding party. <br />
        For other accomodation please see <Link to='/accomodation'>here</Link>
        . <br />
      </Address>
      <Subheading fontSize='25px'>Where?</Subheading>
      <Address>
        GG’s Yard <br />
        Laggan <br /> Gatehouse of Fleet <br />
        Dumfries & Galloway <br />
        DG7 2ES <br />
        Scotland <br />
        <a href='https://ggsyard.co.uk/'>https://ggsyard.co.uk/</a>
      </Address>
    </div>
  </Wrapper>
);

export default Venue;
