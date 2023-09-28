import React from 'react'
import Multiform from '../Form/Multiform'
import CompA from '../props/CompA'
// import UserList from '../Hooks/Useeffect2'
// import Map from '../Arraymap/Map'

function Home() {
    return (
        <div>
            <h1>Home Screen Is Create for Routing</h1>
            <p>When "/" it the HomeScreen function Componet will be Called </p>
            <Multiform/>
            {/* <Map/> */}
            {/* <UserList/> */}
            <CompA/>
        </div>
    )
}

export default Home
