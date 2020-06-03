import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import Img from './ash-adam.jpg';
import Love from './love.png';
import data from './data';

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

const Button = styled.button`
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

const TileWrapper = styled.div`
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  background: #eee;
  color: #626267;
  text-align: left;
  padding: 2.5px 15px;
  margin: 10px;
  @media only screen and (min-width: 600px) {
    line-height: 0.7;
  }
`;

const Msg = styled.p`
  font-family: 'Champagne & Limousines';
  max-width: 500px;
  margin: 0 auto 25px;
`;

const Tile = (props) => {
  return (
    <TileWrapper>
      <p>
        Name: <b>{props.name}</b>
      </p>
      <p>Type: {props.type}</p>
      <p>
        Website: <a href={props.url}>{props.url} </a>
      </p>
      <p>Telephone: {props.number}</p>
      <p>Rooms: {props.rooms}</p>
      <p>1 Night Stay: {props.onenight}</p>
    </TileWrapper>
  );
};

const Main = ({ history }) => {
  const onClick = () => history.push('/');

  const [tiles, setTiles] = React.useState([]);

  React.useEffect(() => {
    const tileData = [];
    for (let [key, value] of Object.entries(data)) {
      tileData.push({
        name: key,
        type: data[key].classification,
        url: data[key].url,
        number: data[key].phone,
        onenight: data[key].onenight,
        rooms: data[key].Rooms,
      });
      console.log(`${key}: ${value}`);
    }
    console.log({ tileData });
    setTiles(tileData);
  }, []);
  return (
    <Wrapper>
      <div>
        <Title onClick={onClick}>Adam + Ashley</Title>
        <Subheading fontSize='25px' ul>
          ACCOMMODATION RECOMENDATIONS
        </Subheading>
        <h5>Provided by GG's Yard</h5>
        <Msg>
          If you are having problem's finding accomodation please just get in
          touch with either of us and we will gladly help.
        </Msg>
        {tiles.map((tile) => (
          <Tile {...tile} />
        ))}
      </div>
    </Wrapper>
  );
};

export default withRouter(Main);
