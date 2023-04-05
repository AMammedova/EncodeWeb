import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import  './slider.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {EffectCoverflow,Pagination,Navigation} from 'swiper'

const Slider = () => {
    const imageArray = [
        { id: 1, url: '/images/image1.svg' },
        { id: 2, url: '/images/image2.svg' },
        { id: 3, url: '/images/image2.svg' },
        { id: 4, url: '/images/image1.svg' },
        { id: 5, url: '/images/image2.svg' },
        { id: 6, url: '/images/image2.svg' },
      ];
  return (
    <div className='container'>
        <h1 className='heading'>Qalereya</h1>
<Swiper
 effect={'coverflow'}
 grabCursor={true}
 centeredSlides={true}
 slidesPerView={3} 
 spaceBetween={10}
 loop={true}
 coverflowEffect={{
   rotate: 0,
   stretch: 0,
   depth: 100,
   modifier: 3.5,
 }}
 
 pagination={{ el: '.swiper-pagination', clickable: true }}
 navigation={{
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
   clickable: true,
 }}
 modules={[EffectCoverflow,Navigation]}
 className="swiper_container">
{imageArray.map((image) => (
     <SwiperSlide>
           <img className='Img' key={image.id} src={image.url} alt={`Image ${image.id}`} />
           
     </SwiperSlide>
         
    
        ))}
         
         <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          <img src="/images/leftarrow.svg" alt="" />
          </div>
          <div className="swiper-button-next slider-arrow">
          <img src="/images/rightarrow.svg" alt="" />
          </div>
          <div className="swiper-pagination"></div>
          <p className="text">Dövriyyə cədvəli</p>
        </div>
</Swiper>
        
    </div>
  )
}

export default Slider