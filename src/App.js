import './App.css';

import React, { Component } from 'react'
import Tile from './Tile'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      winner: false,
      emptyIndex: 0
    }
    this.tileClicked = this.tileClicked.bind(this);
  }

  componentDidMount() {

    let newBoard = [];
    for (let i = 0; i < 16; i++) {
      newBoard.push({
        id: i,
        blank: false,
      })
      if (i === 15) {
        newBoard[15].blank = true
      }
    }
    this.setState({ emptyIndex: 15 })
    this.setState({ board: newBoard });
  }


  tileClicked(clickedIndex) {
    //let row = Math.floor(i / n);
    //let col = i % n;

        // - if clicked row equals empty row && Math.abs(clicked col - empty col) === 1
    //     swap
    // - if clicked col equals empty col && Math.abs(clicked row - empty row) === 1
    //     swap
    // - else
    //     don't swap
 
    this.tileSwap(clickedIndex)
  }

  tileSwap(clickedIndex) {
    let newBoard = this.state.board;
    let temp = newBoard[this.state.emptyIndex]
    newBoard[this.state.emptyIndex] = newBoard[clickedIndex]
    newBoard[clickedIndex] = temp;
    //console.log('clicked: ', clickedIndex, 'empty: ', emptyIndex)
    this.setState({ emptyIndex: clickedIndex });
    this.setState({ board: newBoard });

  }


  winCondition() {
    for (let i = 0; i < this.state.board.length; i++) {
      if (this.state.board[i].id === i) {
        return true;
      }
    }
    alert("winner")
  }


  shuffleBoard() {
    //reuse tile click and shuffle multiply 700x

  }

  render() {
    return (

      <div className="App">
        <h1> Puzzle Slider </h1>
        <div className='container'>
          <div className="row">

            {this.state.board.map((tile, index) => <Tile tileClicked={this.tileClicked} key={tile.id} tile={tile} index={index} />)}
          </div>
        </div>
        <br></br>

        <div className="btn btn-primary">Every Day Im Shuffling</div>

      </div>
    )
  }
}

export default App


