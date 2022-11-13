import React from 'react'
import './Style.css'
import './Responsive.css'

const Nav = () => {
    return (
        <div>
            <header className='header-parent' style={{
                backgroundImage: `url("images/1.jpg") `
            }}>
                <nav>
                    <input type="checkbox" id="check" style={{ display: 'none' }} />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fa fa-bars toogle"  />
                    </label>
                    <label htmlFor className="logo">Clueless  <br /> Cheetah</label>
                    <ul>
                        <li>
                            <a href="#" className="home" style={{color:'white'}}>Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Roadmap</a>
                        </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Feqs</a>
                        </li>
                        <li>
                        <i className='fa fa-twitter  icon'></i>
                        </li>
                        <li><i className='fa fa-twitter  icon ii'></i></li>
                    </ul>
                </nav>


                {/* HEROSECTION START <HERE></HERE> */}

                <div>
                    <div className='hero-parent'>
                        {/* <h1 className='hero-text'><span className='hero-welcome'>Welcome To</span> <span className='hero-linear'> Clueless Cheetah</span><span className='hero-nft'> Nft Collection</span></h1> */}
                        <center><img src={'./images/hero.png'} alt="" width='80%' /></center>
                    </div>

                    <div className='hero-para'>
                        <p>A community driven NFT Project consisting of 10,000 NFT-unique digital collectibles wandering about and searching for clues...Our community is OUR FOUNDATION</p>
                    </div>
                </div>

            </header>
        </div>
    )
}

export default Nav
