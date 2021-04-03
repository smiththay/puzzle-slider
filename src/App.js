import './App.css';

import React, { Component } from 'react'
import Tile from './Tile'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state ={ 
      board: [],
      winner: false,
    }
  }

  componentDidMount(){

    let newBoard = [];
    for(let i = 0; i < 16; i++ ){
      newBoard.push({
        id : i,
        clicked: false,
        number: i
      })
   
  }
    this.setState({ board: newBoard});
    console.log(this.state.board)
  } 


  render() {
    return (

     <div className = "App">
     <h1> Puzzle Slider </h1>
     <div className='container'>
     <div className="row">
     {this.state.board.map ((tile, index) => <Tile  index={index} id={tile.id} /> )}
     </div>
      </div>
      </div>
    )
  }
}

export default App


