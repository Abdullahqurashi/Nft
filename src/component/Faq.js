import React from 'react'

const Faq = () => {
    return (
        <div style={{ backgroundImage: `url(images/5.jpg)` }} className='faq-parent'>
            <div className='faq-text'>
                <h1>Faqs</h1>
            </div>



            {/* ACCORDIDAN */}

            <div className='faq-acc'>
                <div class="accordion" id="accordionPanelsStayOpenExample">




                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                What is Clueless Cheetah’s Mission
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                Our Project actually focuses on the Community,the entire NFT community
                                We are building a community where their actions to support the project, makes everybody win generally. Our token will be used to connect the Community with the Physical world, to make impact.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingfour">
                            <button class="accordion-button acc3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false" aria-controls="panelsStayOpen-collapsefour">
                                What is Clueless Cheetah’s Utility?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapsefour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                Our team has been collectively working on our utility, and the ways to not only limit it to online only, but the physical world at large. We want to under-promise and over-deliver. Follow us or Join our Community to get updates about our utility.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button acc2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Who is the team behind this project?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                The team consists of like-minded inviduals well experienced in Web 3.0
                                The team consists of highly experienced Managers,Mods, Developers and many more.
                            </div>
                        </div>
                    </div>



                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button acc3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                How do i stay updated and safe?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                Follow the official Twitter and Discord account. Make sure it is the official account and be careful of scammers and spam messages.
                            </div>
                        </div>
                    </div>
                </div>






            </div>








        </div>
    )
}

export default Faq