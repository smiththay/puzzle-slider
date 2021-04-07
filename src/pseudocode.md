# app component 
constructor() {
    super();

    this.state = {
        board: []
    

    }

create board()

   for loop to create 16 squares
   create the state of tile
   push tile into board array 
   //possibly column row ?

   row is = math floor i/4
   col is i % 4


swap/move tiles()

   // When a tile button is clicked, it checks the left, right, top, or bottom button for an empty value. This is also why every puzzle/solution has a single null value. If an empty value is found, then the values are swapped. 
    
    The puzzle is considered solved when it matches the solution array.

    //




randomize board()
 generate multiple clicks to create random




checkWin()

if all tiles are in the correct win position than win will be true

if id === index then win is true


render()

use jsx to render header
use jsx to render < Tile />
use jsx to render the shuffle button


---------------------------------------------------------

# tile component 
//functional component if not using props or binding functions else use class component

make every tile have an onclick function defined in parent that call the swap function have

also render the tile number (id)