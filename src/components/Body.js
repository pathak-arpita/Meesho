import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { dataURL } from "../Constant";
import { NavLink } from "react-router-dom";
function Body() {

  const[data , setData] = useState([]);
  const[filter , setFilter] = useState(data);
  
   let component = true;

    useEffect(() =>{
        const productData = async () =>{
            const data = await fetch(dataURL);
            
            if(component){
                setData(await data.clone().json());
                setFilter(await data.json());
                console.log(filter);
            }

            return () => {
              component = false
            }
        }

        productData();
    } ,[])

    const filterProduct = (category) =>{
      const updatedList = data.filter((x) => x.category === category);
      setFilter(updatedList);
   } 
  
  return (data.length === 0)?<Shimmer/>:(
    <>
      <div className="outer">
          <div className="right"></div>
          <div className="left"></div>
          <span>PRODUCTS</span>
      </div>
      <div className="btns">
        <button className="search-btn" onClick={()=>setFilter(data)}>All Products</button>
        <button className="search-btn" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
        <button className="search-btn" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
        <button className="search-btn" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
        <button className="search-btn" onClick={()=>filterProduct("electronics")}> Electronic</button>
      </div>

      <div className="cards">
        {filter.map((data) => {
          return (
            <>
              <div className="cardInfo" key={data.id}>
                <img src={data.image} alt="image is not found" />
                <h2>{data.title.substring(0, 25)}...</h2>
                <p><b>{data.price} ₹</b></p>
                <p><b>{data.rating.rate} ⭐</b></p>
                <NavLink to={`/product/${data.id}`}><button className="cardBtn">Add To Cart</button></NavLink>
              </div>
            </>
          );
        })}
      </div>

      
    </>
  );
}

export default Body;
