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
        //giving them an id 
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
    //we deconstruct state of board with [ ] to pass in two variables...
    // and have both defined as tileClicked function which we pass in clicked index, state of emptyIndex and state of board
    let [newBoard, emptyIndex]= this.tileClicked(clickedIndex, this.state.emptyIndex, this.state.board)
    //mutate state of board to be newBoard and emptyIndex
    this.setState({ board: newBoard, emptyIndex})
    //this.winCondition()
  }

  tileClicked(clickedIndex, emptyIndex, currentBoard) {
   //defining rows and columns
   // define the blank row as rounding down the index of the empty tile divided by 4
    let blankRow = Math.floor(emptyIndex / 4);
   // define the blank row as rounding down the index of the clicked tile divided by 4
    let rowClicked = Math.floor(clickedIndex / 4);
    // define blank column as the index of the empty tile modulo 4
    let blankCol = emptyIndex % 4;
    // define column clicked as the index of the clicked Index modulo 4
    let colClicked = clickedIndex % 4;
    // if the row the was clicked is equal to the blank row and...
    // the absolute value of clicked column minus blank column is equal to 1
    if ((rowClicked === blankRow && Math.abs(colClicked - blankCol) === 1)
    // or if the column clicked is equal to the blank col and...
    // the absolute value of the row clicked minus blank row is equal to 1
      || (colClicked === blankCol && Math.abs(rowClicked - blankRow) === 1)) {
      //we then return the tile swap 
      return this.tileSwap(clickedIndex, emptyIndex, currentBoard)
    }
    //we deconstruct and return currentBoard and emptyIndex
    return [currentBoard, emptyIndex]
  }

  tileSwap(clickedIndex, emptyIndex, newBoard) {
    //we create a temp variable make it equal to newBoards empty index
    let temp = newBoard[emptyIndex]
    //make newBoards empty index equal to newBoards clicked index
    newBoard[emptyIndex] = newBoard[clickedIndex]
    //make newBoards clicked index qual to temporary var
    newBoard[clickedIndex] = temp;
    //emptyIndex is equal to clickedIndex
    emptyIndex = clickedIndex;
    //return deconstructed array to newBoard and emptyIndex
    return [newBoard, emptyIndex];
    
  }

//    winCondition() {
//     let winner = false
//     for (let j = 0; j < this.state.board.length; j++) {
//       if (this.state.board[j].id !== j) {
//         winner = false
//        break; 
//        }else{
//         winner = true
//        }
//     this.setState({winner})
//     if (this.state.winner) {
//       alert("winner")
//     }
//   }
// }

  shuffleBoard() {
    //create shuffle board var to equal board in state
    let shuffleBoard = this.state.board;
    //create empty index var to equal emptyIndex in state
    let emptyIndex = this.state.emptyIndex;
    //loop through 100x
    for (let i = 0; i < 500; i++) {
      //create a random var to be a random number
      let random = Math.floor(Math.random() * 16);
      //shuffleBoard and emptyIndex is equal to tile clicked function in random, emptyIndex, and shuffleBoard
      [shuffleBoard, emptyIndex ] = this.tileClicked(random, emptyIndex, shuffleBoard)
    }
    //set state of board to mutate to shuffleBoard, emptyIndex
    this.setState({ board: shuffleBoard, emptyIndex})
  }

  render() {
    return (
      <div className="App">
        <h1> Puzzle Slider </h1>
        {/* if winner?  is true than display winner  */}
        <div className='container'>
          <div className="row">
          {/* map through the board in state making many tiles */}
          {/* passing on properties to our child component  */}
            {this.state.board.map((tile, index) => <Tile tileClicked={this.clickHelper} key={tile.id} tile={tile} index={index} />)}
          </div>
        </div>
        <br></br>
        {/* creating an onclick button for our shuffleboard */}
        <div className="btn btn-primary" onClick={this.shuffleBoard} >Every Day Im Shuffling</div>

      </div>
    )
  }
}

export default App


