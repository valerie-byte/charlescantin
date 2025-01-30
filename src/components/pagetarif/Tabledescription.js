import '../../styles/tabledescription.css'
import React from 'react'
import tableprestations from './data'
// import styled from 'styled-components'

export default function TableDescription () {
    const table = tableprestations.map(table => 
    <li key={table.id} >
        {table.title}
        ........................................................
        {table.price}
        <div>
            {table.description}
        </div>
    </li>
    )  
   
    return (
        <div>
       <ul>
            <li id="titletableprestation">{table}</li>
           
            
       
        </ul>
       
        </div>

      );
          
}