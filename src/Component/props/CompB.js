import React from 'react'
import Comp1 from '../Statemanagement/Comp1'

function CompB(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.country}</p>
            <Comp1/>
        </div>
    )
}

export default CompB
