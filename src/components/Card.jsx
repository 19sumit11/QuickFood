import React from "react";

const Card = () => {
  const navbarStyle = {
    backgroundColor: '#247e54', 
  };


return (
  <div>
   <div>
    <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
  <img src="https://th.bing.com/th/id/OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8?rs=1&pid=ImgDetMain" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is important text.</p>
    <div className="container w-100">
      <select className="m-2 h-100  bg-success rounded "style={navbarStyle}>
        {Array.from(Array(6), (e,i)=>{
          return(
            <option key={i+1} value={i+1}>{i}</option>
          )
        })}
      </select>
      <select className="m-2 h-100  bg-success rounded "style={navbarStyle}>
        <option value="half">Half</option>
        <option value="half">Full</option>
      </select>
      <div className="d-inline h-100 fs-5">
        Total Price
      </div>
    </div>
    
  </div>
</div>

    </div>
  </div>
)}

export default Card