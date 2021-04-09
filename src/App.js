import './App.css';

import React, { Component } from 'react'
import Tile from './Tile'

export class App extends Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      board: [],
      winner: false,
      emptyIndex: 15
    }
    //bind our click handlers
    this.shuffleBoard = this.shuffleBoard.bind(this);
    this.tileClicked = this.tileClicked.bind(this);
    this.clickHelper = this.clickHelper.bind(this);

  }

  componentDidMount() {
    //define a new variable as an empty array
    let newBoard = [];
    //we iterate 16 times to create puzzle pieces
    for (let i = 0; i < 16; i++) {
      // push our new objects into newBoard array
      newBoard.push({
        //giving them an id and a boolean
        id: i
      })
      if (i === 15) {
        //we make index 15 of newBoard to have id be empty string
        newBoard[15].id = ''
      }
    }
    //this.setState({ emptyIndex: 15 })
    //we then mutate state of board to newBoard variable
    this.setState({ board: newBoard });
  }

  clickHelper(clickedIndex) {

    let [newBoard, emptyIndex]= this.tileClicked(clickedIndex, this.state.emptyIndex, this.state.board)
    this.setState({ board: newBoard, emptyIndex})

  }

  tileClicked(clickedIndex, emptyIndex, currentBoard) {
   
    let blankRow = Math.floor(emptyIndex / 4);
    let rowClicked = Math.floor(clickedIndex / 4);
    let blankCol = emptyIndex % 4;
    let colClicked = clickedIndex % 4;

    if ((rowClicked === blankRow && Math.abs(colClicked - blankCol) === 1)
      || (colClicked === blankCol && Math.abs(rowClicked - blankRow) === 1)) {
      return this.tileSwap(clickedIndex, emptyIndex, currentBoard)
    }
    return [currentBoard, emptyIndex]
  }

  tileSwap(clickedIndex, emptyIndex, newBoard) {

    //let newBoard = this.state.board;
    let temp = newBoard[emptyIndex]
    newBoard[emptyIndex] = newBoard[clickedIndex]
    newBoard[clickedIndex] = temp;
    emptyIndex = clickedIndex;
    return [newBoard, emptyIndex];
    // this.setState({ emptyIndex: clickedIndex });
    // this.setState({ board: newBoard });
  }

  winCondition() {

    for (let i = 0; i < this.state.board.length; i++) {
      if (this.state.board[i].id === i) {
        this.state.winner = true
      }
    }
    alert("winner")
  }

  shuffleBoard() {
    // alert("hello");
    let shuffleBoard = this.state.board;
    let emptyIndex = this.state.emptyIndex;
    for (let i = 0; i < 100; i++) {
      let randomIndex = Math.floor(Math.random() * 16);
      [shuffleBoard, emptyIndex ] = this.tileClicked(randomIndex, emptyIndex, shuffleBoard)
    }
    this.setState({ board: shuffleBoard, emptyIndex})
  }

  render() {
    return (
      <div className="App">
        <h1> Puzzle Slider </h1>
        {/* if winner?  is true than display winner  */}
        <div className='container'>
          <div className="row">

            {this.state.board.map((tile, index) => <Tile tileClicked={this.clickHelper} key={tile.id} tile={tile} index={index} />)}
          </div>
        </div>
        <br></br>
        <div className="btn btn-primary" onClick={this.shuffleBoard} >Every Day Im Shuffling</div>

      </div>
    )
  }
}

export default App


