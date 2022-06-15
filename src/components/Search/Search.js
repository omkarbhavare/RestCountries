import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";
import { Link } from "react-router-dom";



export const Search = (props) => {
  const [countryName, setCountryName] = useState();
  const [region, setRegion] = useState([]);
  const [defaultRegion, setDefaultRegion] = useState();
  const [myRegion, setMyRegion] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [passDetail,setPassDetail]=useState([])
  


  const regionHandler = (e) => {
    if(e!="Select"){
    console.log(e.target.value.toLowerCase());
    setDefaultRegion(e.target.value.toLowerCase());
    }
  };

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://restcountries.com/v3.1/region/` + defaultRegion).then(
      (response) => {
        setMyRegion(response.data);
        console.log(response.data)
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

  

  

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://restcountries.com/v3.1/all`).then(
      (response) => {
        setMyRegion(response.data);
        setIsLoading(false)
      }
    );
  },[]);

  const handlePassDetail=(val)=>{
    console.log("handlePassDetail22" + val +"scene")
    setPassDetail(val)
  }
  console.log("handlePassDetail" + passDetail)

  return (
    
    <div className="mainSection" style={{backgroundColor: !props.dark ? '#2B3945' : '#fafafa',color:!props.dark ? 'white':''}}>
    
      <div className="filterSection">
      
        <div className="container searchBar">
          <form className="searchInput" onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Search Country"
              onChange={(e) => submitForm(e.target.value)}
            />
          </form>
        </div>
        <div className="selectRegion" >
          <select onChange={regionHandler}>
            <option>Select</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Americas</option>
            <option>Africa</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      <div id="region">
        {myRegion.map((val, index) => {
          return (
            <div className="regionCard" style={{ width: "22rem" }} key={index} onClick={()=>handlePassDetail(...val)}>
              <img src={val.flags.png}  alt={val.name.common +' flag'} />
              <div className="countryDetails">
                <h1>{val.name.common.length >13 ? val.name.common.substring(0,13)+'...' :val.name.common}</h1>
                <h3>Population:{val.population}</h3>
                <h3>Region:{val.region}</h3>
                <h3>Capital:{val.capital}</h3>
                <Link to={`/country/${val.name.common}`} >Know More</Link>
                
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};
