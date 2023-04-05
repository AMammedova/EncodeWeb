import React ,{useState,useEffect}from 'react'
import './custom.css'
const images = [
    "https://picsum.photos/id/1015/1000/600",
    "https://picsum.photos/id/1018/1000/600",
    "https://picsum.photos/id/1019/1000/600",
    "https://picsum.photos/id/1020/1000/600",
    "https://picsum.photos/id/1021/1000/600"
  ];
const CustomSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
    
      
  return (
    <div className="carousel">
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item${index === activeIndex ? ' active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
    <button className="carousel-prev" onClick={handlePrevClick}>
      &#10094;
    </button>
    <button className="carousel-next" onClick={handleNextClick}>
      &#10095;
    </button>
  </div>
  )
}

export default CustomSlider