import { CarouselGalleryType } from "./types";
import gallery_img from "../assets/carousel-img.png";
import gallery_img_1 from "../assets/carousel-img1.png";
import gallery_img_2 from "../assets/carousel-img2.png";
import gallery_img_3 from "../assets/carousel-img3.png";
import gallery_img_4 from "../assets/carousel-img4.png";
import gallery_img_5 from "../assets/carousel-img5.png";
import gallery_img_6 from "../assets/carousel-img6.png";
import gallery_img_7 from "../assets/carousel-img7.png";

export const carousel_gallery: Array<CarouselGalleryType> = [
  {
    image: <img src={gallery_img} alt="gallery one image"></img>,
    id: 0,
  },
  {
    image: <img src={gallery_img_1} alt="gallery one image"></img>,
    id: 1,
  },
  {
    image: <img src={gallery_img_2} alt="gallery one image"></img>,
    id: 2,
  },
  {
    image: <img src={gallery_img_3} alt="gallery one image"></img>,
    id: 3,
  },
  {
    image: <img src={gallery_img_4} alt="gallery one image"></img>,
    id: 4,
  },
  {
    image: <img src={gallery_img_5} alt="gallery one image"></img>,
    id: 5,
  },
  {
    image: <img src={gallery_img_6} alt="gallery one image"></img>,
    id: 6,
  },
  {
    image: <img src={gallery_img_7} alt="gallery one image"></img>,
    id: 7,
  },
];
