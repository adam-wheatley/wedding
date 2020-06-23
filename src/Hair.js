import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import data from './hair-data';
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
        email: data[key].email,
        location: data[key].location,
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
          HAIR & MAKEUP RECOMENDATIONS
        </Subheading>
        <h5>Provided by GG's Yard</h5>
        {tiles.map(({ name, url, number, description, location, email }) => (
          <div style={{ margin: '0 10px' }}>
            <TileWrapper>
              <p>
                Name: <b>{name}</b>
              </p>
              <p>
                Website: <a href={url}>{url} </a>
              </p>
              <p>Location: {location}</p>
              <p>Telephone: {number}</p>
              <p>Email: {email}</p>
              <p>{description}</p>
            </TileWrapper>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Accomodation;
