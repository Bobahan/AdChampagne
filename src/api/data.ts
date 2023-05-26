import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';

export type DataType = {
  id: number;
  title: string;
  path: string;
  discount: number;
};

export const data: Array<DataType> = [
  {
    id: 1,
    title: 'XIAOMI Poco M4 Pro, 6.42 AMOLED Screen, 6GB/128GB Memory, 64MP Triple Camera',
    path: img1,
    discount: 8,
  },
  {
    id: 2,
    title: 'Echo Dot (4th Gen) - Smart Speaker With Alexa - Twilight Blue',
    path: img2,
    discount: 27,
  },
  {
    id: 3,
    title: 'PondS Lasting Oil Control Vanishing Face Primer- For Oily Skin50ML',
    path: img3,
    discount: 40,
  },
  {
    id: 4,
    title: 'LG 82 Inches UHD, 4 K,AI THINQ, SMART, MAGIC REMOTE',
    path: img4,
    discount: 47,
  },
  {
    id: 5,
    title: 'Adidas CORE SNEAKERS KIDS GRAND COURT K',
    path: img5,
    discount: 37,
  },
  {
    id: 6,
    title: 'Defacto Woman Oversize Fit Regular Neck Long Sleeve Blazer - Beige',
    path: img6,
    discount: 57,
  },
  {
    id: 7,
    title: 'Hugo Boss Smart Collection Hugo Boss EDP(100ml)',
    path: img7,
    discount: 50,
  },
  {
    id: 8,
    title: 'Jbl Tune 510BT Wireless On-Ear Headphone - Black',
    path: img8,
    discount: 32,
  },
  {
    id: 9,
    title: 'Samsung Galaxy A03 - 6.5" (4GB RAM, 64GB ROM) Android 11',
    path: img9,
    discount: 61,
  },
  {
    id: 10,
    title:
      'Ordro AC3 3.1 Inch IPS Screen 4K Full HD 13MP Night Vision WiFi Live Camcorder DV Digital',
    path: img10,
    discount: 30,
  },
];
