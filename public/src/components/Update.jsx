import React from "react";
import { useState } from "react";
import Header from "./Header";
import "./Update.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  useLocation } from 'react-router-dom';
function Update() {
  const history = useNavigate()
  const [inputs,setinputs] = useState({
    name:'',
    price:'',
    author:'',
    available:'',
    image:''
  })
  const onhandle = (e) =>{
    setinputs((prev)=>({
     ...prev,[e.target.name]: e.target.value
    }))
  }

  const location = useLocation();
  console.log(location.pathname)  
  let id = location.pathname.split("/")[2];
  const sendRequest = async()=> {
  await axios.put(`http://localhost:5000/books/${id}`,{
      namep : String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image)
    }).then(res=>res.data);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('/'))
  }
  return (
    <>
     <Header />
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
       
       <div className="mainallcontainer">






       
        <div className="formcontentcontainer">
          <h2>Add a new book</h2>
          <div className="formcardcontainer">
            {/* <label>Name</label> */}
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={onhandle}
              placeholder="Book Name"
            />
          </div>

          <div className="formcardcontainer">
            {/* <label>Author</label> */}
            <input
              type="text"
              name="author"
              value={inputs.author}
              onChange={onhandle}
              placeholder="Author Name"
            />
          </div>

          <div className="formcardcontainer">
            {/* <label>Price</label> */}
            <input
              type="number"
              name="price"
              value={inputs.price}
              onChange={onhandle}
              placeholder="Price"
            />
          </div>

          <div className="formcardcontainer">
            {/* <label>Image</label> */}
            <input
              type="text"
              name="image"
              value={inputs.image}
              onChange={onhandle}
              placeholder="Image Url"
            />
          </div>

          <div className="formcardcontainer">
            <button type="submit">UPDATE BOOK</button>
          </div>
        </div>
        <div className="seconbackground">
          <h2>Update Here</h2>
          <span>Want to update the content of the book <br /> enter the details in the and click update </span>
        </div>
        </div>
      </form>
    </>
  );
}

export default Update;
