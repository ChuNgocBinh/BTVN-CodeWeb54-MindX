import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header';
import QuoteBox from './components/QuoteBox/QuoteBox';
import ColorBox from './components/ColorBox/ColorBox';
import TagBox from './components/TagBox/TagBox';


const colors = [
  "cornflowerblue",
  "blueviolet",
  "indianred",
  "deeppink",
  "forestgreen",
];

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeColor: colors[0],
      // tagAction: '',
    }
  }

  handeActiveColor = (newColor) => {
    this.setState({ activeColor: newColor })
  }

  // handeTagAction = (tagAction) => {
  //   this.setState({ tagAction })
  // }


  render() {
    const { activeColor } = this.state
    return (
      <div className="App" style={{ backgroundColor: activeColor }} >
        <Header />
        <QuoteBox
          activeColor={activeColor}
          // tagAction={tagAction}
        />
        <ColorBox
          colors={colors}
          activeColor={activeColor}
          handeActiveColor={this.handeActiveColor}
        />
        <TagBox
          handeTagAction={this.handeTagAction}
        />
      </div>
    );
  }

}

