we want to have index 0 to 14 
we want index 15 is blank
when we render if id = 15 then render empty string
array [0,1......15]
we need to be able to move a tile, be able to check if theres a win 
click + move tile/check win 
there are legal moves
shuffle calls move( )many times

check win index of tile === tile.id

all i need in state is id but index is already given

find the row col of clicked tile is floor index/ 4 of 1st row is 0....
index mod %4 = 0 ......
tile clicked () determine if legal move if so move 
    swap position in the array
given empty index get empty row/col
send index of clicked 
    

- if clicked row equals empty row && Math.abs(clicked col - empty col) === 1
    swap
- if clicked col equals empty col && Math.abs(clicked row - empty row) === 1
    swap
- else
    don't swap

shuffle ()
    generate random between 0 -15
    send that to tile clicked 
    100X\