import React from 'react'

export default function tile(props) {
    return (
        <div className="col-3 border" onClick={() => props.tileClicked(props.index)}>
          {props.tile.id}  
        </div>
    )
}
