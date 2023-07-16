import React from 'react'
import "./HomePage2.css";
import Logo1 from "../Images/Logo1.png";
import Logo2 from "../Images/Logo2.png";
import Logo3 from "../Images/Logo3.png";
import Logo4 from "../Images/Logo4.png";
import Logo5 from "../Images/Logo5.png";
import Logo6 from "../Images/Logo6.png";

const HomePage2 = () => {
  return (
    <div>
      <section id="main2">
        <div className='firstPart'>
            <h1>Objectives Of CSI</h1>
            <h2>Excited! Below mentioned Objectives play intangible motivation role for you throughout your CSI journey.</h2>
        </div>
        <div className='secondPart'>
            {/* <div className='secondPart-div'>
                <div className='card-box'>
                    <img src="../Images/Logo1.png" alt="Logo-1"></img>
                    <h4>Explore career alternatives prior to graduation.</h4>
                </div>
            </div> */}
            <div className="logo-grid">
              <div className="row">
                <div className="logo-item">
                  <img src={Logo1} alt="Logo 1" />
                  <h1>Content 1</h1>
                  <p>Explore career alternatives prior to graduation.</p>
                </div>
                <div className="logo-item">
                  <img src={Logo2} alt="Logo 2" />
                  <h1>Content 2</h1>
                  <p>Integrate theory and practice.</p>
                </div>
                <div className="logo-item">
                  <img src={Logo3} alt="Logo 3" />
                  <h1>Content 3</h1>
                  <p>Assess interests and abilities in their field of study.</p>
                </div>
              </div>
              <div className="row">
                <div className="logo-item">
                  <img src={Logo4} alt="Logo 4" />
                  <h1>Content 4</h1>
                  <p>Learn to appreciate work and its function in the economy.</p>
                </div>
                <div className="logo-item">
                  <img src={Logo5} alt="Logo 5" />
                  <h1>Content 5</h1>
                  <p>Develop communication, interpersonal and other critical skills in the job interview process</p>
                </div>
                <div className="logo-item">
                  <img src={Logo6} alt="Logo 6" />
                  <h1>Content 6</h1>
                  <p>Develop work habits and attitudes necessary for job success.</p>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage2
