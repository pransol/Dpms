// import { Link } from 'react-router-dom';
import React, { useState} from 'react';
import './add.css';

// import { Button } from '@material-ui/core'


function Add({add,refresh}) {
 
  const [state, setState] = useState({
    entity:"",
    user: "",
    pass: ""
  })



  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  

  return (

    <div className='outer' id='addId'>
      <div id='add'>
        <h4>Add New Credentials</h4>
      <input  placeholder='Entity' type="text" name='entity' value={state.entity} onChange={handleChange} />
        <input placeholder='Username' type="text" name='user' value={state.user} onChange={handleChange} />
        <input placeholder='Password' type="text" name='pass' value={state.pass} onChange={handleChange} />
        <button onClick={(e)=>{
            add(state.user,state.entity,state.pass)
            // refresh()
        }}>ADD</button>
      </div>
    </div>
  )
}

export default Add;
