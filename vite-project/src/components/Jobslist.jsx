/*import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJob, setKeywordFilter, setCategoryFilter, resetFilter } from '../slice/jobSlice';
import search from "../images/search1.png"
import { useTheme } from './ThemeContext';

function JobList() {
  const {isDark} = useTheme()
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job.job);
  const loading = useSelector((state) => state.job.loading);
  const error = useSelector((state) => state.job.error);
  const keywordFilter = useSelector((state) => state.job.filter.keyword);
  const categoryFilter = useSelector((state) => state.job.filter.category);

  useEffect(() => {
    dispatch(fetchJob());
  }, [dispatch]);

  const filteredJob = job.filter((job) => {
    const keywordMatch = job.headline.toLowerCase().includes(keywordFilter.toLowerCase())
      || job.employer.name.toLowerCase().includes(keywordFilter.toLowerCase())
      || job.workplace_address.municipality.toLowerCase().includes(keywordFilter.toLowerCase());

    const categoryMatch = categoryFilter === '' || job.category.toLowerCase() === categoryFilter.toLowerCase();

    return keywordMatch && categoryMatch;
  });

  const handleCategory = (category) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <div className={`job-container ${isDark ? "dark" : "light"}`}>
    <div className="input-div">
    <input className={`input-field ${isDark ? "dark" : "light"}`}
      type="text" 
      placeholder="Search..." 
      value={keywordFilter}
      onChange={(e) => dispatch(setKeywordFilter(e.target.value))}
    />
    <img src={search} alt='search' className="search-image" />
  </div>
  
  <div className='categories'>
  <button onClick={() => handleCategory('frontend')}>Front End</button>
  <button onClick={() => handleCategory('backend')}>Back End</button>
  <button onClick={() => handleCategory('fullstack')}>Full Stack</button>
  </div>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
          
          <ul>
            {filteredJob

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

export default JobList;*/

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJob, setKeywordFilter, setCategoryFilter} from '../slice/jobSlice';
import search from "../images/search1.png"
import { useTheme } from './ThemeContext';

function JobList() {
  const {isDark} = useTheme()
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job.job);
  const loading = useSelector((state) => state.job.loading);
  const error = useSelector((state) => state.job.error);
  const keywordFilter = useSelector((state) => state.job.filter.keyword);
  const categoryFilter = useSelector((state) => state.job.filter.category);

  useEffect(() => {
    dispatch(fetchJob());
  }, [dispatch]);

  const filteredJob = job.filter((job) => {
    const keywordMatch = job.headline.toLowerCase().includes(keywordFilter.toLowerCase())
      || job.employer.name.toLowerCase().includes(keywordFilter.toLowerCase());

      const categoryMatch = categoryFilter === '' || job.occupation_field.label.toLowerCase() === categoryFilter.toLowerCase();
      return keywordMatch && categoryMatch;
  });

  const handleKeywordChange = (e) => {
    dispatch(setKeywordFilter(e.target.value));
  };
  const handleCategoryChange = (category) => {
    dispatch(setCategoryFilter(category));
  };

  return (
    <div className={`job-container ${isDark ? "dark" : "light"}`}>
    <div className="input-div">
    <input className={`input-field ${isDark ? "dark" : "light"}`}
      type="text" 
      placeholder="Search..." 
      value={keywordFilter}
      onChange={handleKeywordChange}
    />
    <img src={search} alt='search' className="search-image" />
  </div>
  
<div className='categories'>
  <button onClick={() => handleCategoryChange('Data/IT')}>Data/IT</button>
  <button onClick={() => handleCategoryChange('Hälso- och sjukvård')}>Hälso- och sjukvård</button>
  <button onClick={() => handleCategoryChange('Transport, distribution, lager')}>Transport, distribution, lager</button>
  <button onClick={() => handleCategoryChange('Pedagogik')}>Pedagogik</button>
  <button onClick={() => handleCategoryChange('Industriell tillverkning')}>Industriell tillverkning</button>
</div>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
          
          <ul>
            {filteredJob

            .map((job, index) => (
              <li key={index} className={`job-item ${isDark ? "dark" : "light"}`}>
                <span><strong>Title:</strong> {job.headline}</span><br />
                <span><strong>Company:</strong> {job.employer.name}</span><br />
                <div className='description'><strong>Description:</strong> {job.description.text}
                </div>
                <span>...</span>
                <a className='more-info' href={job.webpage_url}>more info</a>
                <p><strong>Category:</strong> {job.occupation_field.label}</p>
                <p><strong>Heltid/Deltid:</strong> {job.working_hours_type.label}</p>
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












