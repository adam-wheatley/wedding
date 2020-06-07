import React from 'react';
import Grid from 'styled-components-grid';
import { withRouter } from 'react-router-dom';
import Menu from './Menu';
import Burger from './Burger';
import { Navbar, List } from './styles';
import { publicLinks as links, comingSoonLinks } from './navLinks';

const Nav = ({ history: { push } }) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef(null);

  return (
    <Grid>
      <Navbar>
        <List>
          <Grid.Unit>
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu
                open={open}
                links={links}
                comingSoon={comingSoonLinks}
                setOpen={setOpen}
              />
            </div>
          </Grid.Unit>
        </List>
      </Navbar>
    </Grid>
  );
};

export default withRouter(Nav);
