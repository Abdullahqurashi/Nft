import React from 'react'

const About = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url("images/3.jpg") `
            }} className='about-parent'>

                <div className='about-text-parent'>
                    <h1 className='about-text'>About Us</h1>
                    <p className='about-para'>A community driven NFT Project consisting of 10,000 NFT-unique digital collectibles
                        stored on the Polygon Blockchain. The only project that focuses more on the   Community because in Our World, We call them the FOUNDATION</p>
                </div>



                {/* BOX SECTION START FORM <HERE></HERE> */}


                <div className='box'>
                    <h1 className='box-text'>Mission</h1>
                    <p className='box-para'>Our Mission as a community-driven project is to make sure that everyone wins in our Community...whether you can hold, support or engage, you will surely be getting something in return</p>
                </div>
                <div className='box'>
                    <h1 className='box-text'>Vision</h1>
                    <p className='box-para'>Our vision as an community-driven project is to build a world where the NFT community will be considered as the Foundation and also make this Project, one, that everybody wins from.</p>
                </div>
                <div className='box'>
                    <h1 className='box-text'>Utility</h1>
                    <p className='box-para'>Access to certain drops,tokens,giveaways and even a chance to have a Say in Clueless Cheetah Future Plans</p>
                </div>

            </div>
        </div>
    )
}

export default About
