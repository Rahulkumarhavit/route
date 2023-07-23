import React from 'react';
import '../Css/HomeAbout.css';

function Home() {
  return (
    <>
      <div className = "mainSection">
      <div className = "contentBox">
        <h1>Celebal Technologies</h1>
      <p>Celebal Technologies is a premier software services company in the field of Data Science, Big Data and Enterprise Cloud</p>
    </div>
    </div>
    <div className = "imgContainer">
        <img src={require('../Images/Home.png')} alt="Home" />
        </div>
        <div className = "imgContainer">
        <img src={require('../Images/img.jpg')} alt="Home" />
        </div>
    </>
  );
}

export default Home;
