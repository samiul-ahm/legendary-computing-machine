import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVsisitedCountries] = useState([]);
    const [visistedFlags, setVisitedFlags] = useState([]);

    const handleVisitedFlags = (flags) =>{
        // console.log('flags need to be added',flags); 
        const newVisitedFlags = [...visistedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }


  const handleVisitedCountries = (country) => {
    // console.log("visited countries clicked",country);
    const newVisitedCountries = [...visitedCountries,country];
    setVsisitedCountries(newVisitedCountries);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h1>In the Countires:{countries.length}</h1>
      <h3>Total Country visited: {visitedCountries.length} </h3>
      
        <ol>
            {
                visitedCountries.map(country => <li key={country.ccn3.ccn3}>{country.name.common}</li>)
            }
        </ol>
         
         <h3>Total visited flags: {visistedFlags.length}</h3>
            <div className="visited-flags-container">
                <ol>
                    {
                        visistedFlags.map((flag,index)=> <img key={index} src={flag} alt="" /> )
                    }
                </ol>
            </div>

      <div className="countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
