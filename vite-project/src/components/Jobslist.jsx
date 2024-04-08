import React, { useState, useEffect, useCallback } from 'react';
import useInput from './useInput';
import search from "../images/search1.png"
import { useTheme } from './ThemeContext';


function JobList() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const input = useInput();
  const {isDark} = useTheme()
  
const fetchData = useCallback(
  async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://jobsearch.api.jobtechdev.se/search?q=javascript&limit=100");
      if (!response.ok) {
        throw new Error('fetch error');
      }
      const data = await response.json();
      setSearchResults(data.hits);
      console.log(data.hits);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
     }, [])



  
useEffect(() => {
  fetchData();
}, [fetchData]);

  
    return (
      <div className={`job-container ${isDark ? "dark" : "light"}`}>
      <div className="input-div">
      <input className={`input-field ${isDark ? "dark" : "light"}`}
        type="text" 
        placeholder="Search..." 
       {...input}
      />
      <img src={search} alt='search' className="search-image" />
    </div>
    

        <div>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>
            
            <ul>
              {searchResults
              
              .filter(job =>
              job.headline.toLowerCase().includes(input.value.toLowerCase()) ||
        job.employer.name.toLowerCase().includes(input.value.toLowerCase()) 
        
              )
              
              .map((job, index) => (
                <li key={index} className={`job-item ${isDark ? "dark" : "light"}`}>
                  <span><strong>Title:</strong> {job.headline}</span><br />
                  <span><strong>Company:</strong> {job.employer.name}</span><br />
                  <div className='description'><strong>Description:</strong> {job.description.text}
                  </div>
                  <span>...</span>
                  <a className='more-info' href={job.webpage_url}>more info</a>
                  <p><strong>Location:</strong> {job.workplace_address.municipality}</p><br />
                </li>
              ))}
            </ul>
            </>
          )}
        </div>
        </div>
      );
    }

export default JobList;












