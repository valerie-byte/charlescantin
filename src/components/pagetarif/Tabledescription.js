import '../../styles/tabledescription.css'
import React from 'react'
import tableprestations from './data'
// import styled from 'styled-components'

export default function TableDescription () {

    const table = tableprestations.map(table => 
    
        <li key={table.id} id="titletableprestation">
        "{table.title}"
        ......................
        {table.price}
        <p>      
        <b id="descriptiontableprestation">{table.description}</b>
        </p>
        </li>
    
    ) 
    
   
   
    return (
        <div>
            {table}                    
       
        </div>

      );
          
}