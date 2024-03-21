import React, { useState, useEffect } from 'react';


function JobList() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, []);

  

 
    return (
        <div>
            

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ul>
              {searchResults.map((job, index) => (
                <li key={index} className='job-item'>
                  <span><strong>Title:</strong> {job.headline}</span><br />
                  <span><strong>Company:</strong> {job.employer.name}</span><br />
                  <span><strong>Description:</strong> {job.description.text}</span><br />
                  <span><strong>Location:</strong> {job.workplace_address.municipality}</span><br />
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

export default JobList;












