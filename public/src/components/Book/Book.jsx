import React, { useEffect } from "react";
import Header from "../Header";
import axios from "axios";
import Books from "./Books";
import "./Book.css";
import { useState } from "react";
const fetchHandler = async () => {
  return await axios.get("http://localhost:5000/books").then((res) => res.data);
};

function Book() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.book));
  }, []);
  //  console.log(books);
  const headerstlye = {
    margin:"20px"
  }
  return (
    <>
      <Header />

      <div className="mainexclusivebookcontainer">
        <div className="cardexclusive">
          <div className="imgexclusivediv">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/685/548/desktop-wallpaper-iphonelockscreens-ikigai.jpg"
              alt="ikagaibook"
              width="210px"
            />
          </div>
          <div className="exclusivedivcontent">
            <h1>IKIGAI</h1>
            <h3>Francesc Miralles and Hector Garcia</h3>
            <p>
              The Ikigai book introduces you to various topics related to the
              art of living
            </p>
            <button>Buy now</button>
          </div>
        </div>

        <div className="cardexclusive">
          <div className="imgexclusivediv" id="imgexclusivediv2">
            <img
              src="https://static01.nyt.com/images/2014/02/05/books/05before-and-after-slide-T6H2/05before-and-after-slide-T6H2-superJumbo.jpg?quality=75&auto=webp&disable=upscale"
              alt="ikagaibook"
            />
          </div>
          <div className="exclusivedivcontent" id="contentdiv2">
            <h1>THE MARTIAN</h1>
            <h3>ANDY WEIR</h3>
            <p>
              
The story follows an American astronaut, Mark Watney, as he becomes stranded alone on Mars in 2035 and must improvise in order to survive.
            </p>
            <button>Buy now</button>
          </div>
        </div>
      </div>
   <h1 style={headerstlye}>Explore</h1>
      <section className="mainsectioncontainer">
        {books.map((elem, key) => {
          return (
            <>
              <div className="mainallbookscontainerdiv" key={key}>
                <Books details={elem} />
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default Book;
