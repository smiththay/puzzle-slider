import React from 'react'

export default function tile(props) {
    
    
    return (
        <div className="col-3 border" onClick={() => props.tileClicked(props.index)}>

        {/* if props.tile.blank is true then render empty string */}
        
         {props.tile.id}  

        </div>
    )
}
