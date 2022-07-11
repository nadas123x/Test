import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import { NavBar } from "./NavBar";

import "./Search.css";

export default function Search() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(" http://localhost:8080/offre")
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  const handleSearchTerm = (e) => {
    setSearchTerm("");
    let value = e.target.value;
    value.length > 2 && setSearchTerm(e.target.value);
  };

  return (
    <>
    <NavBar/>
      <div className="searchBar">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Rechercher"
          onChange={handleSearchTerm}
        />
      </div>
      <div className="search__results">
        {datas
          .filter((val) => {
            return val.name.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((val) => {
            return (
              <NavLink to="/">  <div className="search__result" key={val.id}> 
             {val.name}
              </div>
              </NavLink>  
            );
          })}
      </div>
    </>
  );
}