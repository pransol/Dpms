import React from 'react'

import {Link} from 'react-router-dom'

function Nav({setData}) {
    return (
        <div id='nav'>
         <Link to='/' ><h5>Home</h5></Link>   
         <Link to='/add' >  <h5>Add New</h5></Link> 
         <Link to='/edit' >  <h5>Update</h5></Link> 
         <Link to='/trash' >  <h5>Trash</h5></Link> 
        </div>
    )
}

export default Nav
