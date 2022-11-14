import React from 'react'

const Roadmap = () => {
  return (
    <div style={{ backgroundImage: `url(images/4.jpg)` }} className='road-parent'>
      <div className='road-text'>
        <h1>Road Map</h1>
      </div>
      <div className='road-box-parent'>
        <div className='road-box'>
          <h1>NFT AND MARKETING PHASE </h1>
          <ul>
            <li>Project Contents</li>
            <li>Contents Social</li>
            <li>Media Setup </li>
            <li>Team Recruitement</li>
            <li>Website Development</li>
            <li>NFT Creation </li>
            <li>KYC Verification</li>
            <li>Whitepaper Release </li>
            <li>Collabs and Partnership</li>
            <li> Growth and Management</li>
          </ul>
        </div>
        <div className='road-box box2'>
          <h1>UTILITY PHASE <br></br> </h1>
          <ul style={{paddingTop:'90px '}}>
            <li>Mint Page Release</li>
            <li>Smart Contract</li>
            <li>NFT Staking</li>
            <li>Weekly Airdrop</li>
            <li>Airdrop Exclusive Access to Holders</li>
            <li>Weekly NFT GIveaways  </li>
            <li>Task-to-earn</li>
            <li>Access to Cheetah Room </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Roadmap