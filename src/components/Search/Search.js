import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";


export const Search = () => {
  const [countryName, setCountryName] = useState();
  const [region, setRegion] = useState([]);
  const [defaultRegion, setDefaultRegion] = useState();
  const [myRegion, setMyRegion] = useState([]);
  const [allCountries,setAllCountries]=useState()
  const [isLoading,setIsLoading]=useState(false)
  


  const regionHandler = (x) => {
    console.log("a");
    setDefaultRegion(x);
  };

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://restcountries.com/v3.1/region/` + defaultRegion).then(
      (response) => {
        setMyRegion(response.data);
        setIsLoading(false)
      },
      [defaultRegion]
    );
  });

  const submitForm = (value) => {
    setCountryName(value);
    console.log(value);
  };

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://restcountries.com/v3.1/name/` + countryName).then(
      (response) => {
        setMyRegion(response.data);
        setIsLoading(false)
      },
      [countryName]
    );
  });

  const homepage=(x)=>{
    setAllCountries(x);
  }

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://restcountries.com/v3.1/`+allCountries).then(
      (response) => {
        setMyRegion(response.data);
        setIsLoading(false)
      }
    );
  },[allCountries]);
  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://restcountries.com/v3.1/all`).then(
      (response) => {
        setMyRegion(response.data);
        setIsLoading(false)
      }
    );
  },[]);
  

  return (
    
    <>
    
      <div className="filterSection">
      <button onClick={()=>homepage('all')}><i class="fa-solid fa-house"></i></button>
        <div className="container searchBar">
          <form className="searchInput" onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Search Country"
              onChange={(e) => submitForm(e.target.value)}
            />
          </form>
        </div>
        <div className="selectRegion">
          <select>
            <option>Select</option>
            <option onClick={() => regionHandler("europe")}>Europe</option>
            <option onClick={() => regionHandler("asia")}>Asia</option>
            <option onClick={() => regionHandler("americas")}>Americas</option>
            <option onClick={() => regionHandler("oceania")}>Oceania</option>
            <option onClick={() => regionHandler("africa")}>Africa</option>
          </select>
        </div>
      </div>
      <div id="region">
        {myRegion.map((val, index) => {
          return (
            <div className="regionCard" style={{ width: "22rem" }} key={index}>
              <img src={val.flags.png} className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">{val.name.common}</h1>
                <h5>Population:{val.population}</h5>
                <h5>Region:{val.region}</h5>
                <h5>Capital:{val.capital}</h5>
                
              </div>
            </div>
          );
        })}
        
      </div>
    </>
  );
};
