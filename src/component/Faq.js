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





                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                What is Clueless Cheetah’s Utility?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Our Our team has been collectively working on our utility, and the ways to not only limit it to online only, but the physical world at large. We want to under-promise and over-deliver. Follow us or Join our Community to get updates about our utility.</div>
                        </div>
                    </div>
                </div>



                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                How do i stay updated and safe?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Our The team consists of like-minded inviduals well experienced in Web 3.0
                                The team consists of highly experienced Managers,Mods, Developers and many more.</div>
                        </div>
                    </div>
                </div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Who is the team behind this project?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Our Follow the official Twitter and Discord account. Make sure it is the official account and be careful of scammers and spam messages.</div>
                        </div>
                    </div>
                </div>
            </div>








        </div>
    )
}

export default Faq