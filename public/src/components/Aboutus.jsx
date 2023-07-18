import React from "react";
import Header from "./Header";
import "./Aboutus.css";
import libimg from "./libimg.png"
function Aboutus() {
  return (
    <>
      <Header />
      <h2>About our website</h2>
      <div className="mainallcontainerdiv">
        <div className="leftcontainerdiv">
          <div className="contentcontainer">
            <p>
              Welcome, your ultimate destination for literary exploration and
              inspiration. Our bookstore is more than just a place to purchase
              books; it is a haven for book lovers, a sanctuary where
              imagination and knowledge intertwine.We believe in the power of
              books to educate, entertain, and inspire. Whether you're a
              lifelong bookworm or just embarking on your reading journey, This
              website is here to accompany you every step of the way. Join us in
              celebrating the written word and let us be your guide in
              discovering new worlds, expanding your horizons, and embracing the
              magic of literature.
            </p>
          </div>
        </div>
        <div className="rightcontainerdiv">
        <img src={libimg} alt="" srcset="" />
      </div>
      </div>
     
    </>
  );
}

export default Aboutus;
