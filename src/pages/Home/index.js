import React from 'react';
import { makeStyles } from '@material-ui/styles';
//import './style.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Feed from './components/Feed';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    height: '100vh',
    display: 'flex',
    width: '1200',
    margin: '0 auto',
  },
  navbar: {
    backgroundColor: 'blue',
    width: '350px',
    padding: '0 24px',
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>
        <Navbar />
        <Feed />
      </main>
    </div>
  );
}

export default Home;
