import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import data from './accomodation-data';
import { Wrapper } from './styles/PageStyles';

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

const TileWrapper = styled.div`
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  background: #eee;
  color: #626267;
  text-align: left;
  padding: 10px 20px;
  margin: 25px auto;
  max-width: 800px;
  text-align: center;
  box-shadow: 2.5px 5px;
  @media only screen and (min-width: 600px) {
    line-height: 0.7;
  }
`;

const Msg = styled.p`
  font-family: 'Champagne & Limousines';
  max-width: 500px;
  margin: 0 auto;
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

const Accomodation = ({ history }) => {
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
    setTiles(tileData);
  }, []);
  return (
    <Wrapper>
      <div>
        <Header />
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

export default Accomodation;
