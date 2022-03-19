import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';


// componenets
import Nav from './Nav';
import Logout from './Logout';
import Add from './add';
import Content from './Content';
import Update from './Update'
import Trash from './Trash';
function Routers({con,del,add,edit,myTrash,deletePermanently,refresh,loggedInuser}) {

     

    return (
        <div>
            
     <Router>
     <Nav />
     <Logout  address={loggedInuser}/>
     <Routes>
  <Route path='/' exact element={<Content con={con}   del={del} refresh={refresh} loggedInUser={loggedInuser}   /> } /> 
  <Route path='/add' element={<Add add={add} refresh={refresh} />} />  
  <Route path='/edit' element={<Update edit={edit} data={con} refresh={refresh} loggedInUser={loggedInuser}/>} />
  <Route path='/trash' element={<Trash myTrash={myTrash} deletePermanently={deletePermanently} refresh={refresh}  loggedInUser={loggedInuser}/>}  /> 

  </Routes>
     </Router>


        </div>
    )
}

export default Routers
