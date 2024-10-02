

import styled from 'styled-components';
import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const StyledApp = styled.div`
  background-color: mintcream;
  font-family: "Inter", sans-serif;

  height: 100vh;
  /* grid container settings */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 'header' 'main' 'footer';
`;





function App() {

  const [section, setSection] = useState('home');

  return (
    <StyledApp>
      <Header section={section} setSection={setSection} />
      <Main section={section} />
      <Footer />
    </StyledApp>
  );
}

export default App;
