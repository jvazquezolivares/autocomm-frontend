import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { getResults } from '../lib/RequestApi';

const SearchResults = ({ data }) => {
  console.log("SearchResults ", data);
  return(
     <ul className="list-group">
        { data?.length > 0 && data.map((item) => 
           
           <li key={item.id} className="list-group-item" > { item.id } </li>
        ) }
     </ul>
  )
}

const Searcher = () => {
  const [ params, setParams ] = useState("");
  const [ criteria, setCriteria ] = useState("");
  const [ results, setResults ] = useState([]);

  const handleButton = () => {
     getResults(params, criteria).then( (response) => {
       if (response.data){
         setResults(response.data);
       } else {
         console.log(response.message);
       }
     } );
  }

  return(
    <div className="col-md-6">
      <br/>
      <div className="row g-3">
        <div className="col-auto">
          <input type="text" className="form-control" id="criteria" placeholder= "search criteria..." value={params} onChange={ (event) => setParams(event.target.value) } />
        </div>
        <div className="col-auto">
        <select className="form-control" aria-label=".form-select-md example" value={criteria} onChange={ (event) => setCriteria(event.target.value) } >
          <option value="vehicle_model">Model</option>
          <option value="vehicle_rand">Brand</option>
          <option value="year">Year</option>
          <option value="mileage">Mileage</option>
          <option value="price">Price</option>
        </select>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary mb-3" onClick={ handleButton } >Search</button>
        </div>
      </div>
      <div className="row">

      <SearchResults 
         data = { results }
      />
      </div>
    </div>
  )
}

export default Searcher