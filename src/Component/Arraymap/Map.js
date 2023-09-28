import React from 'react'
import indianFlagImage from '../Arraymap/assets/india12.png';
import usaFlagImage from '../Arraymap/assets/usa2.jpeg';
import chinaFlagImage from '../Arraymap/assets/china.png';
import brazilFlagImage from '../Arraymap/assets/brz.png';
import russiaFlagImage from '../Arraymap/assets/russia.png';
function Map() {
    const details=[
        {id:1,name:"india",country:"india",img:indianFlagImage},
        {id:2,name:"usa",country:"usa",img:usaFlagImage},
        {id:3,name:"china",country:"china",img:chinaFlagImage},
        {id:4,name:"brazil",country:"brazil",img:brazilFlagImage},
        {id:5,name:"russia",country:"russia",img:russiaFlagImage}
    ]
    return (
        <div>
          <div>
            {
                details.map(
                    (value)=>{
                        return(
                            <div key={value.id}>
                                <p>{value.id}</p>
                                <h1>{value.name}</h1>
                                <p>{value.country}</p>
                                <img src={value.img} alt='flag images'/>
                            </div>
                        )
                    }
                )
            }
          </div>
            
        </div>
    )
}

export default Map
