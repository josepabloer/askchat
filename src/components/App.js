//Dependencies
import React, { Component } from 'react';
import './global/css/App.css';

//Component
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

//Data
import items from '../data/menu';
import asks from '../data/preguntas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title='JPCode' items={items}/>
        <Content title='Preguntas' asks={asks}/>
        <Footer />
      </div>
    );
  }
}

export default App;
