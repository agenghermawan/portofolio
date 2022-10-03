import React from 'react'
import '../styles/about-me.css'

export default function AboutMe() {
  return (
    <div className='container mx-auto mt-44'>
       <div className='title-about'>
            <h3 className='text-3xl font-semibold'>
              About Me
            </h3>
        </div> 
        <div className='desc-about grid grid-cols-1 md:grid-cols-2 mt-5'>
          <div className='grid gap-5'>
            <p>
              Hello! Interestingly, I got introduced to programming in my freshman year at Birla Institute Of Technology, Mesra where I completed my Bachelors in Computer Science and Engineering (2016-2020) with 86.3% aggregate.
            </p>
            <p>
              I'm currently working as a developer for Bell Canada in the Amdocs Digital Delivery unit. My responsibilty includes Java/Spring based microservices development & testing.
            </p>
            <p>
              I have been awarded as Winner in Innovation Nugget, Creativity Jam, Design Thinking Hackathon and Runners-Up in Project ICE Fair by Amdocs.
            </p>
            <p>
            Here is a list of the technologies that I'm familiar with!
            </p>
          </div>
          <div className=' flex justify-center h-64'>
            <img src='images/image.jpg' width={300} alt="" className='rounded-full bg-cover shadow-2xl' height={300}/>
          </div>
        </div>
    </div>
  )
}
