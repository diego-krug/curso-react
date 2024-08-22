import React from "react";

export default (props) => {
    return (
        <>
            <button className='Inc' onClick={props.setInc}>Incremento</button>
            <button className='Dec' onClick={props.setDec}>Decremento</button>
        </>
    )
}