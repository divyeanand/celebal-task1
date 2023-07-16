import React from 'react'
import "./HomePage4.css";
import Illustration1 from "../Images/Illustration1.png";
import Illustration2 from "../Images/Illustration2.png";

const Homepage4 = () => {
  return (
    <div>
      <section id= "main4">
        <div className='container'>
            <div>
              <h1>Testnomial 1</h1>
              <h4>I have developed my career and my knowledge through my internship with Celebal Technologies.
                  It was a wonderful experience to be mentored by people who are passionate about sharing their
                  knowledge and helping you achieve your full potential.I am grateful for the opportunity to
                  intern at Celebal Technologies and am excited to continue working with the team as a full-time
                  employee.</h4>
              <button href="">Know More</button>
            </div>
            <div>
              <img src={Illustration1} alt="illustration-1"></img>
            </div>
        </div>
        <div className='container'>
            <div>
              <img src={Illustration2} alt="illustration-2"></img>
            </div>
            <div >
              <h1>Testnomial 2</h1>
              <h4>During my internship at Celebal technologies, I was able to gain hands-on experience in my
                  field of interest and was given the opportunity to work on challenging tasks. The company
                  provided me with the resources and mentorship I needed to develop my skills and knowledge,
                  and I learned a great deal about the industry. The best part of my internship experience was
                  receiving a pre-placement offer from the company. This offer was a testament to the hard work
                  I had put in during my time there and gave me a sense of validation and accomplishment.</h4>
              <button href="">Know More</button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage4
