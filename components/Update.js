// import { Link } from 'react-router-dom';
import React, { useState } from 'react';

// import { Button } from '@material-ui/core'


function Update({ edit, data,refresh,loggedInUser }) {

  const [state, setState] = useState({
    id: "",
    pass: ""
  })

  const [preview, setPreview] = useState({
    id: "0",
    entity:"",
    user: "",
    pass: ""
  })
 
  data.filter(item => {
    if (item.id.toNumber() == preview.id  && item.user === loggedInUser ) {
      setPreview({ entity:item.entity, user: item.username, pass: item.password })
    }
  })


  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }


  function change(e) {
    setPreview({ id: e.target.value })
    setState({id:e.target.value})
  }

  return (

    <div className='outer' id='updateOut'>
    <div  id='update'>
      <h1>Update</h1>
    <p> <h3>Get Info By Id :</h3>  <input id='id' type="text" value={preview.id} onChange={change} /></p> 

      
         <div>
            <h3>Entity :{preview.entity}</h3>
            <h3>Username :{preview.user}</h3>
            <h3>Old-Password :{preview.pass}</h3>
          </div>
     
       <p>
       <h3>New-Password : </h3> <input id='pass' type="text" name='pass' value={state.pass} onChange={handleChange} />

       </p>

      <button id='upBtn' onClick={(e)=>{
            e.preventDefault()
            edit(state.id,state.pass)
            refresh()
        }}>UPDATE</button>
    </div>
    </div>
  )
}

export default Update;
