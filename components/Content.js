
import React, { useState } from 'react';


function Content({con ,del,refresh,loggedInUser}) {

  let cont = con.filter(item=>{
     return item.user === loggedInUser
  })

  return (

    <div className='outer'>
     
     <div id='content'>
     
     <h2>Saved Passwords</h2>
    <table className="table " >
  <thead className="thead" id='thead'>
  <tr>
          <th> Sr.no.</th>
          <th>Id</th>
          <th>Entity</th>
          <th>UserName</th>
          <th>Password</th>
          <th>Trash</th>
        </tr>
  </thead>
  
    
    <tbody className="tbody table-borderless" id='tbody'>
  
   { cont.map((item,i) =>
      <React.Fragment key={i}>   <tr>
                 <td>{i}</td>
                 <td>{item.id.toNumber()}</td>
                 <td>{item.entity}</td>
                 <td>{item.username}</td>
                 <td>{item.password}</td>
                 <td><button type="button" onClick={()=>{
                      del(item.id.toNumber())
                      refresh()
                  }} >Move to Trash</button></td>
               </tr>
               </React.Fragment>
        )}
                        
   </tbody>
  
</table>
   
    
     </div>
    </div>
  )
}

export default Content;
