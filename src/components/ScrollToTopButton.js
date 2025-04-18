import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    backgroundColor: '#418CEA',

    '&:hover': {
      transition: '0.3s',
      color: '#418CEA',
      backgroundColor: 'white',
      border: '1px solid #418CEA',
    },
  },
}));

const ScrollToTopButton = () => {
  const classes = useStyles();

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const screenScrolled = document.documentElement.scrollTop;

    //page scroll of 400px
    if (screenScrolled > 500) {
      setVisible(true);
    }
    if (screenScrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <ButtonContainer>
      {visible && (
        <IconButton onClick={scrollToTop} className={classes.root}>
          <ArrowUpwardRoundedIcon />
        </IconButton>
      )}
    </ButtonContainer>
  );
};

export default ScrollToTopButton;

const ButtonContainer = styled.div`
  z-index: 200;
  position: fixed;
  bottom: 2vh;
  right: 1vh;
`;
