import React from 'react'
import './App.css'

const Hero = () => {
  return (
    <>
<main className='hero d-flex flex-row mb-3 pk'>
    <div className='hero-content'>
        <h1>
            YOUR FEET DESERVE THE BEST
        </h1>
        <p> 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo consequatur enim repudiandae omnis autem est ad, in officiis esse cupiditate error mollitia quod aperiam voluptates magni quia nemo harum temporibus?
        </p>
        <div className='hero-btn'>
          
            <button type="button" class="btn btn-danger">Shop Now</button>
           
            <button type="button" class="btn btn-danger">    Category</button>
        </div>

        <div className='shopping'>
            <p>Also Available On</p>
            <div className='brand-icons'>
                <img src="public\amazon.png" alt="" />
                <img src="public\flipkart.png" alt="" />
            </div>
        </div>


    </div>
    <div className='hero-image'> <img src="public\hero-image.png" alt="" /></div>
</main>
    </>
  )
}

export default Hero
