import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from 'styled-components-grid';

export const Navbar = styled(Grid.Unit)`
  background: white;
  color: ${(p) => p.theme.white};
  padding: 20px 20px 20px 0;
  font-size: 1.5rem;
`;

export const Right = styled(Grid.Unit)`
  display: ${(props) => (props.size === 0 ? 'none' : 'auto')};
  float: right;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline;
  padding-left: 25px;
  ${(props) =>
    props.border
      ? `
        border-left: 1px solid ${props.theme.primaryColor};
        padding-left: 25px;
    `
      : ''};
  margin-right: ${({ marginRight }) => (marginRight ? '25px' : 'auto')};
  padding-top: ${({ paddingTop }) => (paddingTop ? `${paddingTop}` : '12.5px')};
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.white};
`;

export const NavLogo = styled.a`
  float: left;
`;

export const Button = styled.button`
  background: ${(p) => p.theme.primaryColor};
  color: ${(p) => p.theme.white};
  border: 0;
  font-size: 1.25rem;
  padding: 15px 25px;
  border-radius: ${(p) => p.theme.borderRadius};
  box-shadow: ${(p) => p.theme.boxShadow(p.theme.primaryColor)};
  cursor: pointer;
  transition: all 1s ease;

  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;

  &:hover {
    box-shadow: inset 0 0px 0 #a21878;
  }
`;
