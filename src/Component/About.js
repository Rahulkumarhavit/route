import React from 'react';

function About() {
  return (
    
    <div>
      <div className = "mainSection">
      <div className = "contentBox">
      <h2>About Us</h2>
      <h3>Our Story</h3>
      <p>We aim to make data simple for enterprises across the globe and propel them in their innovation journeys. We help Fortune 1000 companies leverage their data by combining modern analytics with traditional enterprise.</p>
    
     <h3>Company Profile</h3>
     <p>Celebal Technologies is a premier software services company in the field of Data Science, Big Data, and Enterprise Cloud. We help you achieve a competitive advantage with intelligent data solutions, built using cutting-edge technology. Our core offerings are around Cloud Innovation, Supply Chain Analytics, Chat Bots, Power Platforms, and Data Analytics. Our solutions can help you accelerate decision-making and take giants leaps in your digital transformation journeys.</p>
    
    <h3>Our Founders</h3>
    <div className = "imgContainer">
        <img src={require('../Images/Anirudh.png')} alt="About" />
        <p>Anirudh Kala</p>
        <p>Co-Founder, Director</p>
        </div>
        <div className = "imgContainer">
        <img src={require('../Images/AnupamGupta.png')} alt="About" />
        <p>Anupam Gupta</p>
        <p>Co-Founder, Head Of US Operations</p>
        </div>
      <h3>Our Partners</h3>
      <div className = "imgContainer">
        <img src={require('../Images/GoldBadge.jpg')} alt="About" />
     </div>
     <h3>Our Mission</h3>
     <p>Our mission is to make data simple and easy to understand for all organizations. We are committed to providing solutions powered by modern cloud and artificial intelligence that integrate with traditional enterprise software. Our tailor-made solutions help enterprises maximise productivity, improve speed and accuracy.</p>
     <div className = "imgContainer">
        <img src={require('../Images/MissonV.jpg')} alt="About" />
     </div>
     <h3>Our Team</h3>
     <p>Our Team is made up of highly motivated and talented professionals, who understand the core value of modern analytics over traditional enterprise. We follow the concept of non-hierarchical work culture, empowering every individual in the organization to do their best. We are always on the lookout for skilled professionals who believe in integrity and respect, and enjoy working in a fast-paced and autonomous environment.</p>
     <div className = "imgContainer">
        <img src={require('../Images/OurTeam.jpg')} alt="About" />
     </div>
     </div>
     </div>
     </div>
     );
}


export default About;
