import { Component } from "react";

import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <nav className="ultimate-background">
          <div className="nav-background">
            <div className="logo-container">
              <button type="button" style={{ background: "transparent" }}>
                <img
                  src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1728975846/Group_20_1_hkshms.png"
                  alt="logo"
                />
              </button>
              <h2
                style={{
                  color: "#fff",
                  paddingLeft: "4px",
                  fontWeight: "bolder",
                }}
              >
                EthAi
              </h2>
            </div>
            <ul className="nav-pane">
              <li className="nav-pane-items">Features</li>
              <li className="nav-pane-items">Why Us</li>
              <li className="nav-pane-items">Tokenomics</li>
              <li className="nav-pane-items">Roadmap</li>
            </ul>
            <div className="">
              <button type="button" className="login-button">
                Log in
              </button>
              <button type="button" className="white-paper">
                Whitepaper
              </button>
            </div>
          </div>
          <div className="home-container">
            <h2 className="home-title">
              When Innovation <br />
              Meets <span className="investment-span">Investment</span>
            </h2>
            <p className="home-description">
              Empowering Trading Through Advanced Technology{" "}
            </p>
            <button type="button" className="home-button">
              Open dApp
            </button>
          </div>
        </nav>
        <div className="feature-container">
          <img
            src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1728994125/Property_1_Hover_z0rtce.png"
            alt="first-features"
            className="first-features"
          />
          <img
            src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1728994185/Property_1_Hover_1_oyxpyc.png"
            alt="remaining-features"
            className="first-features"
          />
        </div>
        <div className="about-container">
          <h2 className="about-title">About EthAi</h2>
          <p className="about-description">
            At EthAi, we’re all about making crypto trading easier and more
            intuitive. <br /> We provide tools that help traders keep up with
            all new market trends, track top traders’ movements.
          </p>
          <button type="button" className="about-button">
            Read more
          </button>
          <img
            src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1728993326/Overlay_tvzasy.png"
            alt="about-image"
            className="about-image"
          />
        </div>
        <div className="tokenomics-container"></div>
        <div className="roadmap-container">
          <h2 className="roadmap-title">Roadmap</h2>
          <img
            src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729013135/Frame_17_ktmy8c.png"
            alt="roadmap-image-1"
            className="roadmap-image"
          />
          <img
            src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729013449/Frame_25_pnwbyf.png"
            alt="roadmap-image-2"
            className="roadmap-image"
          />
          <img
            src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729013562/Frame_33_ceozke.png"
            alt="roadmap-image-2"
            className="roadmap-image"
          />
          <img
            src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729013682/Background_dvnul2.png"
            alt="faq"
            className="faq-image"
          />
          <img
            src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729013787/Background_Shadow_u0wpmw.png"
            alt="explore-dapp"
            className="explore-dapp"
          />
        </div>
        <img
          src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1729013878/Section_ddxvtz.png"
          alt="footer"
          className="footer"
        />
      </>
    );
  }
}

export default App;
