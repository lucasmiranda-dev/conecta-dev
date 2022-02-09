import React from 'react';
import { Button } from '@mui/material';
import logo from '../../../images/logo.png';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import { Bell } from 'react-feather';

const useStyles = makeStyles({
  img: {
    maxHeight: 55,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar elevation={0} position='fixed' color='inherit'>
      <Toolbar>
        <img src={logo} alt='logo' className={classes.img} />
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button variant='contained' color='primary' sx={{ marginRight: 2 }}>
            Novo Post
          </Button>
          <SvgIcon>
            <Bell></Bell>
          </SvgIcon>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
