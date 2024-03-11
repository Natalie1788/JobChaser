import search from  "../images/search1.png"

function SearchInput() {
    return (
      <div style={{ position: 'relative' }}>
        <label htmlFor="input" className='visually-hidden'></label>
        <input id='input' className="input-field" type="text" placeholder="Search..." />
        <img src= { search } alt="Search" className="search-image" />
      </div>
    );
  }
  
  export default SearchInput; 