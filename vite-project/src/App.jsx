import Job from './components/Jobs'
import './App.css'
import { jobs } from "./components/JobArray"
import SearchInput from './components/SearchInput'



function App() {
  return (
    <>
      <h2>Job list</h2>
      <SearchInput />
      {jobs.length === 0 ? (
        <p>No jobs available</p>      
        ) : (
        jobs.map((job) => ( 
          <div className='job-card'>
          <Job
            key={job.id}
            company={job.company}
            position={job.position}
            role={job.role}
            level={job.level}
            contract={job.contract}
            languages={job.languages}
          />
            </div>
        ))
      )}
    </>
  )
}

export default App
