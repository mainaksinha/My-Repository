import React from 'react';

export const Search = ({ value, onSearch, children }) =>
<div className="filterList">
<form>
<fieldset stylename='form-group'>
<input value={value}
   onChange={event => onSearch(event.target.value)} 
   className="form-control form-control-lg searchFilter" 
   placeholder="Search"/>
</fieldset>
</form>
</div>
