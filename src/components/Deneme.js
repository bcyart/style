import React from 'react'
//context
import {
    useGlobalDispatchContext,
    useGlobalStateContext,
  } from "../cursor/globalContext"
  
function Deneme({onCursor,dispatch}) {

    return (
        <div >
            <h2 
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}
            >dene beni abii</h2>
        </div>
    )
}

export default Deneme
