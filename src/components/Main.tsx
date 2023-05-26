import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Button from '../generic/button/Button';
import Card from './Card';
import { data } from '../api/data';
import { DataType } from '../api/data';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Main.css';
import '../styles/Swiper.css';

const Main = () => {
  const [items, setItems] = useState<Array<DataType>>([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          <Button className="buyBtn">Buy now</Button>
          <Swiper modules={[Pagination]} className="swiper">
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <Card {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Main;
