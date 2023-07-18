import axios from "axios";
import React from "react";
import "./Book.css"
import { Link } from "react-router-dom";
function Books(props) {
  const { author, namep, price, _id, image } = props.details;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(window.location.reload());
  };
 
 
  const linkStyle = {
    textDecoration: "none",
    color:"white"
  };
  return (
    <>
      <div className="mainbookcardcontainer">
        <div className="cardimgcontainerdiv">
          <img src={image} alt="bookimage" width="200px" />
           {
            console.log(image)
           }
        </div>
    
        <div className="cardcontentcontainer">
          <div className="pricecontainerdiv">
          <h3>{namep}</h3>  
        <span>{price}rs</span>
          </div>
          <article>{author}</article>
          <div className="bookcardbuttonscontainerdiv">
          <button>
            <Link to={`/update/${_id}`} style={linkStyle}>Update</Link>
          </button>
          <button onClick={deleteHandler}> Delete </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
