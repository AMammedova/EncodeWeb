import React, { useRef ,useState} from "react";
import Slider from "react-slick";
import CustomSlider from "../CustomSlider/CustomSlider";
import "./galeria.css";
const settings = {
  className: 'slider',
  centerMode: true,
  infinite: true,
  centerPadding: '100px',
  slidesToShow: 2,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerPadding: '80px',
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerPadding: '40px',
      },
    },
  ],
};

const comments = [
  {
    id: 1,
    text: 'This is a great carousel!',
    author: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    text: 'I love React Slick!',
    author: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    text: 'Amazing work, keep it up!',
    author: 'Bob Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    text: 'Amazing work, keep it up!',
    author: 'Bob Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },{
    id: 5,
    text: 'Amazing work, keep it up!',
    author: 'Bob Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },{
    id: 6,
    text: 'Amazing work, keep it up!',
    author: 'Bob Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];
const Galeria = () => {
  const arrowRef = useRef(null);

//   return (
//     <div className="GaleriaSlider">
//       <h2>Qalereya</h2>
//       <Slider centerMode={true} ref={arrowRef} {...settings}>
//         {imageArray.map((image,id) => (
//           <div className="ImgContainer">
//             <div className="comment-text">
//               <img key={id} src={image.url} alt=''/>

//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
//                 necessitatibus illum distinctio voluptas fuga rem numquam sequi
//                 maxime excepturi perspiciatis?
//               </p> <p>Ad Soyad</p>
//               <span>Şirkət</span>
//             </div>
//           </div>
//         ))}
//       </Slider>

      // <div className="ButtonContainer">
      //   <button
      //     onClick={() => arrowRef.current.slickPrev()}
      //     className="BackBtn"
      //   >
      //     <img src="/images/leftarrow.svg" alt="" />
      //   </button>
      //   <button
      //     onClick={() => arrowRef.current.slickNext()}
      //     className="NextBtn"
      //   >
      //     <img src="/images/rightarrow.svg" alt="" />
      //   </button>
      // </div>
//     </div>
//   );

const items = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=2",
  "https://picsum.photos/800/400?random=3",
  "https://picsum.photos/800/400?random=4",
  "https://picsum.photos/800/400?random=5",
];


const [currentIndex, setCurrentIndex] = useState(0);

const handleBeforeChange = (current, next) => {
  setCurrentIndex(next);
};
return (
  <React.Fragment>

<div className="ButtonContainer">
  <button
    onClick={() => arrowRef.current.slickPrev()}
    className="BackBtn"
  >
    <img src="/images/leftbtn.svg" alt="" />
  </button>
  <button
    onClick={() => arrowRef.current.slickNext()}
    className="NextBtn"
  >
    <img src="/images/rightbtn.svg" alt="" />
  </button>
</div>

  <Slider {...settings}  ref={arrowRef} beforeChange={handleBeforeChange}>
      {comments.map((comment) => (
        <div key={comment.id} className="slider-item">
          <img
            src={comment.avatar}
            alt={comment.author}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              position: 'absolute',
              top: '10px',
              
            }}
          />
          <p style={{ padding: '20px' }}>{comment.text}</p>
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {comment.author}
          </p>
        </div>
      ))}
    </Slider>
  
  </React.Fragment>

  
);

   
};

export default Galeria;
