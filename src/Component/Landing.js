import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div>
            <ul>
                {/* befor using Link tag import the Link from react-router-dom */}
                {/* to refere the path we create in the App.js component routing area */}
                {/* notes "/" refre to home Screen very  important  routing topic */}
                <li><Link to='/'>Home</Link></li>

                

            </ul>
        </div>
    )
}

export default Landing
