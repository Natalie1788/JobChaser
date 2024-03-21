import React, { useState } from 'react';
import search from "../images/search1.png"

function SearchInput({ jobs }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
  };


    const handleSearchClick = () => {
      const filteredJobs = jobs.filter(job =>
        job.employer.name.toLowerCase().includes(searchTerm) ||
        job.workplace_address.municipality.toLowerCase().includes(searchTerm)
      );
      setFilteredJobs(filteredJobs);
      console.log(filteredJobs)
    };

  return (
    <>
      <div className="input-div">
        <input className="input-field"
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleInputChange} 
        />
        <img src={search} alt='search' className="search-image" />
      </div>
      <button onClick={handleSearchClick}>Search</button>
    </>
  );
}

export default SearchInput;