import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import {FreeMode, Pagination} from 'swiper/modules'

import { RxArrowTopRight } from 'react-icons/rx'
import { ServiceData } from '../../constants'
const ActiveSlider = () => {
  return (
    <div className='flex items-center flex-col bg-white p-4 mb-8 mx-4 drop-shadow-xl'>
      <Swiper
      breakpoints={{
        360: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 5
        },

        1800:{
            slidesPerView:3,
            spaceBetween:5
        }
      }}
      spaceBetween={30} 
      preventInteractionOnTransition={true}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='max-w-[90%] lg:max-w-[80%]'
      >
        {ServiceData.map((item: any) => (
            <SwiperSlide key = {item.backgroundImage}>
                <div className="flex flex-col gap-6 mb-20 group relative shadow-lg m-auto text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]">
                    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${item.backgroundImage})`}}/>
                </div>
                <div className="mb-12 flex flex-col text-center">
                {item.content}
                <button className="bg-amber-400 hover:bg-amber-500 text-white p-4 rounded-lg m-auto my-4 w-1/2 max-w-[300px] drop-shadow-xl">
                    VER TODOS
                </button>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default ActiveSlider
