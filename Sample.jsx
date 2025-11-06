import React from 'react'

const Sample = () => {
  return (
  
<div>
    <h1 style={{textAlign:'center'}}>Application form</h1>
    <br />
    <div className="apply">
        <div className="name">
            <label >Name:</label>
            <input type="text" placeholder="Enter your name" />
        </div>
        <div className="email">
            <label >Email:</label>
            <input type="email" placeholder="Enter your email" />
            </div>
        <div className="phone">
            <label >Phone:</label>
            <input type="number" placeholder="Enter your phone number" />
        </div>
        <div className="address">
            <label >Address:</label>
            <input type="text" placeholder="Enter your address" />
        </div>
        <div className="options">
            <label >Position:</label>
            <select>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Fullstack Developer</option>
                <option>Data Scientist</option>
              </select>
        </div>
         <div className="state">
            <label >State:</label>
            <select>
                <option>Telanagana</option>
                <option>Andhara pradesh</option>
                <option>chenai</option>
                <option>uttarkhand</option>
              </select>
        </div>
    </div>
   
</div>
  )
}

export default Sample