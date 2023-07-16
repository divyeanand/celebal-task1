import React, { useState } from 'react'
import "./Home.css"

const Home = () => {
  const [activeButton, setActiveButton] = useState(5);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const isButtonActive = (buttonId) => {
    return activeButton === buttonId;
  };
  return (
    <div>
      <section id="main">
        <div className='nav-container'>
          <button
          className={`Button ${isButtonActive(1) ? 'active' : ''}`}
          onClick={() => handleClick(1)}
          >Home</button>
          <button
            className={`Button ${isButtonActive(2) ? 'active' : ''}`}
            onClick={() => handleClick(2)}
          >About</button>
          <button
            className={`Button ${isButtonActive(3) ? 'active' : ''}`}
            onClick={() => handleClick(3)}
          >Contact</button>
          <button
            className={`Button ${isButtonActive(4) ? 'active' : ''}`}
            onClick={() => handleClick(4)}
          >Register</button>
          <button
            className={`Button ${isButtonActive(5) ? 'active' : ''}`}
            onClick={() => handleClick(5)}
          >Login</button>
        </div>
        <div className = "main-container">
          <h1>Well Come to <br/> celebel technologies<br/> Summer Internship</h1>
          <h2>Learning, experiences, networking, and who knows maybe even a job afterward!
                Networking plays a vital role in freshers lives in your initial stage of careers
                  thus never forget "Your Network is Your Networth". You will intake from the program
                   with a much better understanding of what it takes to be successful in the corporate world.</h2>
          <div className='SearchBar'>
            <div className='SearchInputWrapper'>
              <input className='SearchInput' type="text" placeholder="Search..."></input>
              <button class="SearchButton">Search</button>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home
