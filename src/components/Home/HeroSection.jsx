import React from 'react'
import { HerosectionData } from '../../assets/Data'
const HeroSection = () => {
  return (
    <div className='heroSection'>
      <div className='container'>
        <div className='title'>
          <h1>Find a job that suits</h1>
          <h1>your intrest and skills</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum consequatur, et laboriosam non illo, unde voluptatem consectetur aspernatur sint commodi facilis repudiandae debitis deleniti eveniet? Mollitia error temporibus molestiae maxime?</p>
        </div>
        <div className='image'>
          <img src='/gotojob.jpg' alt='hero'/>
        </div>
      </div>
      <div className='details'>
       {
           HerosectionData.map((item)=>{
            return(
                <div className='card' key={item.id}>
               <div className='icon'>{item.icon}</div>
               <div className='content'>
                  <p>{item.title}</p>
                  <p>{item.subTitle}</p>
               </div>
              </div>
            )
           
           })
       } 
      </div>
    </div>
  )
}

export default HeroSection