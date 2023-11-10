import React from 'react'

import "./App.css";



function GifSearch({submitSearchHandler}) {
  return (
    <div className='searchBar'>
        
        <form onSubmit={submitSearchHandler}>
           <label>Enter a Search Term:</label><br/>
           <input type='text' name='search'/><br/>
           <input className='searchSubmit'  type='Submit'/>
  
        </form>

    </div>
  )
}

export default GifSearch