//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Emoji from 'react-emoji-render';

//Assets
import './css/Content.css';

class Content extends Component {
  constructor(){
    super();
    this.state = {
      random : 0
    };
    this.handleGenerateQuestion = this.handleGenerateQuestion.bind(this);
  }

  componentDidMount(){
    this.setState({
      random:1
    });
  }

  handleGenerateQuestion(){
    this.setState({
      random : Math.floor(Math.random()*100-1)
    });
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    asks: PropTypes.array.isRequired
  };
  render() {
    const {title, asks} = this.props;


    console.log(this.state.random)

    return (
      <div className="Content">
      <h2>Mi primer aplicacion en React</h2>
        <div className="Container">
        <h3>{title}</h3>
          <p>Esto es una prueba para ver que tal se ve</p>
          <Emoji text=":+1:" onlyEmojiClassName="make-emojis-large" />

          <ul className='Question'>
          {asks && asks.filter((e) => e.id == this.state.random).map((item,e) => <h3 e={e}>{item.quest}</h3>)}
          </ul>
          <h5>{this.state.random}</h5>

          <button id="generateQuest" onClick={this.handleGenerateQuestion}>Generate Question</button>
        </div>
      </div>
    );
  }
}

export default Content;
