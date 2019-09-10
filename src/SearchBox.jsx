import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchBox = ({ handleSearchChange }) => {
  return (
    <div className='text-field'>
    <TextField
           id="outlined-search"
           label="Search Animals"
           type="search"
           className="search"
           margin="normal"
           variant="outlined"
           onChange={handleSearchChange}

         />
         </div>
  )

}

export default SearchBox;
