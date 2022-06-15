import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'
import './Country.css'

export const Country = (props) => {
  const countryName=useParams()
  console.log(countryName.name)
  const [myRegion,setMyRegion]=useState([])

  useEffect(() => {
    
    axios.get(`https://restcountries.com/v3.1/name/` + countryName.name).then(
      (response) => {
        setMyRegion(response.data);
      },
      [countryName]
    );
  });
  
  return (
    <div>
      
      Country :
      <div id="countryCard">
        {myRegion.map((val, index) => {
          return (
            <div className="countryCard"  key={index} >
              <h1>{val.name.common }</h1>
              <img className='flag' src={val.flags.png}  alt={val.name.common +' flag'} />
              <div className="rightSide">
                <h3>Capital:{val.capital}</h3>
                <h3>Region:{val.region}</h3>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  )
}
