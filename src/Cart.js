import React from 'react';
//.import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function  Cartcard(props){
    return (
        <div>
        <ol class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{props.items.name} - ${props.items.newprice} &nbsp;</div>
      
    </div>
    {/* <button onClick={() => {
        props.Removecart(props.items,props.index)
    }} class="badge bg-primary rounded-pill" type="button"> Remove</button> */}
  </li>
</ol>
    </div>
  )
}

export default Cartcard;