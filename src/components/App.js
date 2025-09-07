import React, { useState } from 'react'
import '../styles/App.css';
import Menu from './Menu';
import Menucard from './Menucard';

const App = () => {
  const[category,setCategory]=useState("All");
  
  const filteredItems = Menu.filter(
    (item) => category === "All" || item.category === category
  );

  return (
    <div id="main">
        <h1 style={{marginLeft:"600px"}}>Our Menu</h1>

        {/* <button onClick={(e)=>{
          setCategory("All")
        }} style={{color:'orange', border:"none", padding:"20px",marginLeft:"520px"}}>All</button> */}

        
         <div className="buttons" style={{color:'orange', border:"none", padding:"20px",marginLeft:"520px"}}>
        <button id="filter-btn-1" onClick={() => setCategory("Breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => setCategory("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => setCategory("Shakes")}>
          Shakes
        </button>
      </div>

        <div className="menu-container">
        {filteredItems.map((item) => (
          <Menucard
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </div>
    
  )
}

export default App

