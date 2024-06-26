import React from 'react'
import "./OffCanvas.css"
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";

const OffCanvas = () => {
    return (
        <><div className="offcanvas-box">
            <ul>
                <li><a href="">Post Property</a></li>
                <li><a href="">Explore our Services</a></li>
                <li>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    For Buyers
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Residential</div>
                                <div class="accordion-body">Commercial</div>
                                <div class="accordion-body">Insights</div>
                                <div class="accordion-body">Articles & News</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    For Tenants
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Residential Rent</div>
                                <div class="accordion-body">PG/Co-living</div>
                                <div class="accordion-body">Commercial</div>
                                <div class="accordion-body">Insights</div>
                                <div class="accordion-body">Articles & News</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    For Owners
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Property Servces</div>
                                <div class="accordion-body">Insights</div>
                                <div class="accordion-body">Articles & News</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    For Dealers / Builders
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Property Services</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}

export default OffCanvas
