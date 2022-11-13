import React from 'react'

const Features = () => {
  return (
    <div style={{backgroundImage:`url(images/6.jpg)`, marginTop:'-13px'}}>
        <h1 className='features-text'>Features</h1>
        <div className='features-box-parent'> 
            <div className='features-box'> 
                <center><p>Minted on Polygon Low Gas Fees</p></center>
                <center><img src={'./images/vector.png'} alt="" /></center>
            </div>
            <div className='features-box'> 
                <center><p>Minted on Polygon Low Gas Fees</p></center>
                <center><img src={'./images/vector (1).png'} alt="" /></center>
            </div>
            <div className='features-box'> 
                <center><p>Minted on Polygon Low Gas Fees</p></center>
                <center><img src={'./images/vector (2).png'} alt="" /></center>
            </div>
            <div className='features-box'> 
                <center><p>Minted on Polygon Low Gas Fees</p></center>
                <center><img src={'./images/vector (3).png'} alt="" /></center>
            </div>
        </div>
    </div>
  )
}

export default Features