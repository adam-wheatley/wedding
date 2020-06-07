import React, { useRef } from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';
import Burger from '../Burger';
import Grid from 'styled-components-grid';
import { useClickAway } from 'react-use';

const Subheading = styled.h2`
  font-family: 'Champagne & Limousines';
  font-size: ${(p) => (p.fontSize ? p.fontSize : '35px')};
  font-weight: unset;
  line-height: 0.7;

  ${(p) =>
    p.pt &&
    `
    padding-top: 25px
  `}

  ${(p) =>
    p.ul &&
    `
    border-top: 1px solid #FFF;
    border-bottom: 1px solid #FFF;
    padding-bottom: 10px;
    max-width: 400px;
    margin: 35px auto;
    padding-top: 10px;
  `}
`;

const StyledMenu = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  background: ${(p) => p.theme.secondaryColor};
  transform: ${({ open }) => (open ? 'translateX(50px)' : 'translateX(-100%)')};
  height: 100vh;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  border-right: solid 1px ${(p) => p.theme.white};
  padding: 5rem 5rem;
  position: fixed;
  top: 0;
  left: -50px;
  transition: transform 0.3s ease-in-out;
  font-family: 'Champagne & Limousines';

  @media (max-width: 576px) {
    width: 100%;
    border-right: none;
    padding: 5rem 3rem;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 10px;
  margin: 0 auto;
`;

export const ListItem = styled.li`
  width: 100%;
  margin-bottom: 25px;
`;

export const Link = styled(NavLink)`
  color: ${(p) => p.theme.white};
  text-decoration: none;
  ${(p) =>
    p.disabled &&
    `
    pointer-events: none;
    color: #EEE;
    font-size: 1.25rem;
  `}
`;

export const MenuHeader = styled.h2`
  font-family: TomatoSoup;
  font-size: 80px;
  font-weight: 500;
  line-height: 0.3;
  margin-top: 0;
`;

const Menu = ({ open, links, comingSoon, setOpen, history: { push } }) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    if (open) setOpen(false);
  });

  const onLinkClick = () => setOpen(false);
  return (
    <StyledMenu open={open} ref={ref}>
      <Grid>
        <Grid.Unit visible={{ xs: true, sm: false }}>
          <Burger open={open} setOpen={setOpen} />
        </Grid.Unit>
        <List>
          <MenuHeader>25.06.2020</MenuHeader>
          {links.map(({ text, path }) => (
            <ListItem key={path}>
              <Link to={path} onClick={onLinkClick}>
                {text}
              </Link>
            </ListItem>
          ))}
          <Subheading fontSize='20px' ul>
            COMING SOON
          </Subheading>
          {comingSoon.map(({ text, path }) => (
            <ListItem key={path}>
              <Link to={path} onClick={onLinkClick} disabled>
                {text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
    </StyledMenu>
  );
};

export default withRouter(Menu);
