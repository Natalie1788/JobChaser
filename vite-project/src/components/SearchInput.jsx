import searchImage from  "../images/search1.png"



function SearchInput({ searchTerm, onSearchChange }) {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  

    return (
      <div style={{ display: "flex" }}>
      <div style={{ position: 'relative' }}>
        <label htmlFor="input" className='visually-hidden'></label>
        <input 
        id='input' 
        className="input-field" 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleInputChange}
        />

        <img src= { searchImage } alt="Search" className="search-image" />
      </div>

      <button onClick={performSearch}>Search</button>
      </div>
      );
}
  
  export default SearchInput;