 
 function Job(props) {
  return (
    <div>
      <p><span className="first-text">Company:</span> {props.company}</p>
      <p><span className="first-text">Position:</span> {props.position}</p>
      <p><span className="first-text">Role:</span> {props.role}</p>
      <p><span className="first-text">Level:</span>{props.level}</p>
      <p><span className="first-text">Contract:</span> {props.contract}</p>
      <p><span className="first-text">Languages:</span> {props.languages.join(', ')}</p>
    </div>
  )
}