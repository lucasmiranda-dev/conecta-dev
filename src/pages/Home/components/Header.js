import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar';

const useStyles = makeStyles({
  root: {},
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar>
      <div className='toolbar'>
        <div className=''>
          <span>ConectaDev</span>
        </div>
        <div className=''>
          <Button color='primary' variant='contained'>
            Novo Post
          </Button>
          <span>img1</span>
          <span>img2</span>
        </div>
      </div>
    </AppBar>
  );
}

export default Header;
