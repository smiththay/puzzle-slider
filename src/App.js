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
    this.shuffleBoard = this.shuffleBoard.bind(this);
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
        newBoard[15].id = ''
      }
    }
    this.setState({ emptyIndex: 15 })
    this.setState({ board: newBoard });
  }


  tileClicked(clickedIndex) {
    let emptyIndex = this.state.emptyIndex;
    let blankRow = Math.floor(emptyIndex / 4);
    let rowClicked = Math.floor(clickedIndex / 4);
    let blankCol = emptyIndex % 4;
    let colClicked = clickedIndex % 4;
   

      if (rowClicked === blankRow && Math.abs(colClicked - blankCol) === 1) {
        this.tileSwap(clickedIndex, emptyIndex)
      } else if (colClicked === blankCol && Math.abs(rowClicked - blankRow) === 1) {
        this.tileSwap(clickedIndex, emptyIndex)
    }
  }

  tileSwap(clickedIndex) {

    let newBoard = this.state.board;
    let temp = newBoard[this.state.emptyIndex]
    newBoard[this.state.emptyIndex] = newBoard[clickedIndex]
    newBoard[clickedIndex] = temp;
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
    // let shuffleBoard = this.state.board
    // //this.tileClicked(clickedIndex)
    // this.setState({ board: shuffleBoard})
   alert("hello");
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

        <div className="btn btn-primary" onClick={this.shuffleBoard} >Every Day Im Shuffling</div>

      </div>
    )
  }
}

export default App


