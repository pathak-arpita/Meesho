import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {addItem} from "../redux/action" 
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Shimmer from "./Shimmer";
import { dataURL } from "../Constant";

function Product() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  const addProduct = (prod) =>{
    dispatch(addItem(prod))
  }
  
  const checkout = (e) => {
    e.preventDefault();
    const logedUser = JSON.parse(localStorage.getItem("loginDetails"));

    if(logedUser === null){
       alert("Please Login First");
    }
    else{
      navigate("/cart");
    }
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const resp = await fetch(dataURL + `/${id}`);
      setProduct(await resp.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mt-5">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
            className="productImage"
          />
        </div>

        <div className="col-md-6 mt-5">
          <h4 className="text-uppercase text-pink-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
           <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate} ⭐
           </p>
           <h3 className="display-6 fw-bold my-4">₹ {product.price}</h3>
           <p className="lead">{product.description}</p>
           <button 
           className="btn btn-outline-dark  mt-5"
           onClick={()=> addProduct(product)}>Add to Cart</button>
           <NavLink to="/cart"  className="btn btn-dark ms-3 mt-5" onClick={checkout}>Go to Cart</NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container">
        <div className="row">{loading ? <Shimmer /> : <ShowProduct />}</div>
      </div>
    </>
  );
}

export default Product;
