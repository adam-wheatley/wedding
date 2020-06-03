import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Img from './gg.jpg';

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
  &:hover {
    cursor: pointer;
  }
`;

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

const Main = ({ history }) => {
  const onClick = () => history.push('/');

  return (
    <Wrapper>
      <div>
        <Title onClick={onClick}>Adam + Ashley</Title>
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
};

export default withRouter(Main);
