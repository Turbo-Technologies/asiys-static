import React from 'react'
import heroimage from '../images/anandimage.jpg';
import ashramboys from '../images/anandashram.jpg';

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={ashramboys} class="d-block w-100" alt="..." style={{height:"50vh"}}/>
                    </div>
                    <div class="carousel-item">
                    <img src={heroimage} class="d-block w-100" alt="..." style={{height:"50vh"}}/>
                    </div>
                    <div class="carousel-item">
                    <img src={ashramboys} class="d-block w-100" alt="..." style={{height:"50vh"}}/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    )
}
