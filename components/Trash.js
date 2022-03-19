
import React, { useState } from 'react';


// import { Button } from '@material-ui/core'

function Trash({myTrash , deletePermanently,refresh,loggedInUser}) {

  let trash = myTrash.filter(item=>{
    return item.user === loggedInUser
 })


  return (

    <div className='outer'>
     
     <div id='content'>
     
     <h2>Trash</h2>
    <table className="table " >
  <thead className="thead" id='thead'>
  <tr>
          <th> Sr.no.</th>
          <th>Id</th>
          <th>Entity</th>
          <th>UserName</th>
          <th>Password</th>
          <th>Delete Permanently</th>
        </tr>
  </thead>
  <tbody className="tbody table-borderless" id='tbody'>
  {
      trash.map((item,i) =>{
         return <tr key={i}>
             <td>{i}</td>
             <td>{item.id.toNumber()}</td>
             <td>{item.entity}</td>
             <td>{item.username}</td>
             <td>{item.password}</td>
             <td><button type="button" onClick={()=>{
                  deletePermanently(item.id.toNumber())
                  refresh()
              }} >Delete</button></td>
           </tr> 
         })  
       }
  </tbody>
</table>

    
     </div>
    </div>
  )
}

export default Trash;
