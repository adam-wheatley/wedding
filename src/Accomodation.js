import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import data from './accomodation-data';
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

const TileWrapper = styled.div`
  background: #eee;
  color: #626267;
  text-align: left;
  padding: 10px 20px;
  margin: 25px auto;
  max-width: 800px;
  text-align: center;
  border-radius: 5px;
  @media only screen and (min-width: 600px) {
    line-height: 0.7;
  }
`;

const Msg = styled.p`
  font-family: 'Champagne & Limousines';
  max-width: 500px;
  margin: 0 auto;
`;

const Accomodation = ({ history }) => {
  const [tiles, setTiles] = React.useState([]);

  React.useEffect(() => {
    const tileData = [];
    for (let [key] of Object.entries(data)) {
      tileData.push({
        name: key,
        type: data[key].classification,
        url: data[key].url,
        number: data[key].phone,
        onenight: data[key].onenight,
        rooms: data[key].Rooms,
        distance: data[key].distance,
      });
    }
    setTiles(tileData);
  }, []);
  return (
    <Wrapper>
      <Navbar />
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
        {tiles.map(({ name, type, url, number, rooms, onenight, distance }) => (
          <div style={{ margin: '0 10px' }}>
            <TileWrapper>
              <p>
                Name: <b>{name}</b>
              </p>
              <p>Type: {type}</p>
              <p>
                Website: <a href={url}>{url} </a>
              </p>
              <p>Telephone: {number}</p>
              <p>Distance from Venue: {distance}</p>
              <p>Rooms: {rooms}</p>
              <p>1 Night Stay: {onenight}</p>
            </TileWrapper>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Accomodation;
