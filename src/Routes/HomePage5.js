import React from 'react';
import './HomePage5.css';
import sponsors from "../Images/SponsersLogo.png"
import CompanyLogo from "../Images/CompanyLogo.png"

const HomePage5 = () => {
  return (
    <div>
      <section id='main5'>
        <div className='Main_Container1'>
            <h1>Sponsors</h1>
            <img src={sponsors} alt="sponsors"></img>
        </div>
        <div className='Main_Container2'>
            <img src={CompanyLogo} alt="CompanyLogo"></img>
            <h1>Company</h1>
            <button className='Button_5' href="">Know More</button>
        </div>
      </section>
    </div>
  )
}

export default HomePage5
