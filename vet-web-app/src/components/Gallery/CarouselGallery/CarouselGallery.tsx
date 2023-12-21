import "./CarouselGalleryType.css";

type Props = {
  image: JSX.Element;
};

const CarouselGallery = ({ image }: Props) => {
  return <div className="carousel-gallery">{image}</div>;
};

export default CarouselGallery;
