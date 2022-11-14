import React from 'react'

const Faq = () => {
    return (
        <div style={{ backgroundImage: `url(images/5.jpg)` }} className='faq-parent'>
            <div className='faq-text'>
                <h1>Faqs</h1>
            </div>



            {/* ACCORDIDAN */}

            <div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                What is Clueless Cheetah’s Mission
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Our Project actually focuses on the Community,the entire NFT community
                                We are building a community where their actions to support the project, makes everybody win generally. Our token will be used to connect the Community with the Physical world, to make impact.</div>
                        </div>
                    </div>



                    
                </div>





            
            </div>








        </div>
    )
}

export default Faq