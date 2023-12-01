import "./Category.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { useGetCategoryFoodsQuery } from "../../api/apiSlice";

const Category = () => {

    const { data } = useGetCategoryFoodsQuery()
    console.log(data);
    return (
        <div className="category-wrapper">
            <p className='categ-top'>TOP FOODS</p>
            <h2 className='category-title'>Our Categories</h2>
            <div className="category__card-container">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        data?.map(food =>
                            <SwiperSlide className="swiper-slide">
                                <img src={food.image} alt="Food" />
                                <p>{food.name}</p>
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            </div>

        </div>
    )
}

export default Category