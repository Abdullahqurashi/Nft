import React from 'react'

const Footer = () => {
  return (
   <>
    <div style={{background:'black'}} className='footer'>
      <center>  <h1 className='footer-text'>Stay Connected, Join The Community</h1></center>
      <div className='footer-parent'>
        <div>
            <button className='footer-button'><a href="#"  className='footer-button'>Discord</a></button>
        </div>
        <div>
            <button className='footer-button'><a href="#" className='footer-button'>Twitter</a></button>
        </div>
      </div>
      <div className='copy-right'>
        <div>
            <h5 style={{marginLeft:'40px',fontFamily:'Poppins, sans-serif'}}className= 'privacy'>Clueless Cheetah</h5>
        </div>
        <div>
            <h5 style={{marginRight:'40px', fontFamily:'Poppins, sans-serif'}} className= 'privacy'>All Rights Reserved</h5>
        </div>
    </div>
    </div>
   
   </>
  )
}

export default Footer