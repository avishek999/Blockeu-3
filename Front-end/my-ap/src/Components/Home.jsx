import React from 'react';
import './App.css'; // Link to the external CSS file
import VideoSlideshow from '../video';
import Chatbot from './Chatbot';

const Home = () => {
  const cardStyle = {
    flex: 1,
    backgroundColor: '#2d2f3dff',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease, background 0.5s ease',
  };

  const headingStyle = {
    fontSize: '24px',
    color: '#ADFF2F',
    marginBottom: '5px',
  };

  const paragraphStyle = {
    color: '#ffffff',
    marginTop: '0px',
    lineHeight: '1.5',
    textAlign: 'left',
    fontFamily: 'Times New Roman',
    fontSize: '18px',
  };

  const imgStyle = {
    maxWidth: '80px',
    margin: '50 auto 15px',
  };

  return (
    <div>
      {/* Main Section */}
      <div className="container container-main">
        <h1>Blockchain Demystified: Your Gateway to Future Technology,<br /> Where Curiosity Meets Blockchain Mastery</h1>
        <p>Discover, Understand, Innovate: The World of Blockchain Awaits!</p>
      </div>

      <div className="flex-container">
        <div className="left-container">
          {/* Chat Box */}
          <div className="chat-box">
            <h5>Curious About Blockchain? Ask Us at Blockedu!</h5>
            <div className="input-group">
            <Chatbot/>
            </div>
          </div>
        </div>
        <div className="kenburns-bg">
          <h1></h1>
        </div>
      </div>

      <div className="container featured-section">
        <h2 className="text-center">Develop your first smart contract</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '20px',
        }}>
          {/* First Card: Basic DAO */}
          <div style={cardStyle}>
            <img src={require('../images/basicdao.png')} alt="Basic DAO" style={imgStyle} />
            <h5 style={headingStyle}>
            <a href="https://www.cookbook.dev/contracts/basic-dao" class="popframe" target="_blank" rel="noopener noreferrer"> Basic DAO </a>
              </h5>
            <p style={paragraphStyle}>A very simple and easy implementation of a DAO. Voting period is locked in at 1 week, 
               and the voting delay is 1 block. There is no delay on approved proposals.</p>
          </div>
          
          {/* Second Card: Pudgy Penguins */}
          <div style={cardStyle}>
            <img src={require('../images/pudgy.png')} alt="Pudgy Penguins" style={imgStyle} />
            <h5 style={headingStyle}>
            <a href="https://www.cookbook.dev/contracts/PudgyPenguins" class="popframe" target="_blank" rel="noopener noreferrer"> Pudgy Penguins </a>
            </h5>
            <p style={paragraphStyle}>The Pudgy Penguins contract is an ERC721 token contract that allows users to mint penguin NFTs.
               The contract supports pausing and resuming the sale, and allows the owner to withdraw funds.</p>
          </div>
          
          {/* Third Card: Vesting Wallet */}
          <div style={cardStyle}>
            <img src={require('../images/vesting.png')} alt="Vesting Wallet" style={imgStyle} />
            <h5 style={headingStyle}> 
            <a href="https://www.cookbook.dev/contracts/OpenZeppelin-VestingWallet" class="popframe" target="_blank" rel="noopener noreferrer"> Vesting Wallet </a>
            </h5> 
            <p style={paragraphStyle}>This contract is a vesting wallet that allows for the gradual release of native tokens
               (ether) and ERC20 tokens to a beneficiary over a specified duration.</p>
          </div>
        </div>
      </div>

<div className="container popular-frameworks-section">
  <h2 style={{ textAlign: 'center', marginRight: '20px' }}>Popular Ethereum Frameworks</h2>
  <div className="row justify-content-center">
    <div className="col-md-3">
        <div className="framework-card">
          <img src={require('../images/metamask.png')} alt="MetaMask" />
          <h5>
            <a href="https://metamask.io/" class="popframe" target="_blank" rel="noopener noreferrer">MetaMask</a>
          </h5>
          <p>A crypto wallet and gateway to blockchain apps.</p>
        </div>
    </div>
    <div className="col-md-3">

        <div className="framework-card">
          <img src={require('../images/alchemy.png')} alt="Alchemy" />
          <h5>
            <a href="https://www.alchemy.com/" class="popframe" target="_blank" rel="noopener noreferrer">Alchemy</a>
          </h5>
          <p>The platform for blockchain developers to build apps.</p>
        </div>
    </div>
    <div className="col-md-3">
        <div className="framework-card">
          <img src={require('../images/polygon.png')} alt="Polygon" />
          <h5>
            <a href="https://infura.io/" class="popframe" target="_blank" rel="noopener noreferrer"> Infura </a>
          </h5>
          <p>A suite of tools for building on Ethereum.</p>
        </div>
    </div>
    <div className="col-md-3">
        <div className="framework-card">
          <img src={require('../images/hardhat.png')} alt="Hardhat" />
          <h5>
            <a href="https://hardhat.org/" class="popframe" target="_blank" rel="noopener noreferrer"> Hardhat </a>
          </h5>
          <p>A development environment for Ethereum.</p>
        </div>
    </div>
  </div>
</div>

      <div>
        {/* Other sections */}
        <VideoSlideshow />
        {/* More sections */}
      </div>

      {/* Footer */}
      <footer>
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={require('../images/logo.png')} alt="Logo" />
          <h4>Blockedu.dev</h4>
        </div>

        {/* Documentation Section */}
        <div className="footer-docs">
          <DocumentationSection />
        </div>

        {/* Navigation and Social Links */}
        <div className="footer-links">
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

// Separate Documentation Section
const DocumentationSection = () => {
  const docs = [
    { name: "Ethereum Documentation", url: "https://ethereum.org/en/developers/docs/" },
    { name: "Solidity Documentation", url: "https://docs.soliditylang.org/en/v0.8.19/" },
    { name: "Web3.js Documentation", url: "https://web3js.readthedocs.io/en/v1.7.3/" },
    { name: "MetaMask Documentation", url: "https://docs.metamask.io/guide/" },
    { name: "Alchemy Documentation", url: "https://docs.alchemy.com/alchemy/" },
  ];

  return (
    <div className="documentation-section">
      <h2 className="text-left">Documentation</h2>
      <ul className="documentation-list">
        {docs.map((doc, index) => (
          <li key={index}>
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;