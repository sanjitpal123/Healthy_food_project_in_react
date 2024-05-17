import React from 'react';
import Heading from './Heading';
import './App.css';
import ItemBox from './Itembox';
import { Container } from 'react-dom';

function App() {
  return ( 
    <> 
      <Container>
        <Heading />
        <ItemBox />
      </Container>
    </>
  );
}

export default App;
