import React, { useState, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Fade } from 'react-reveal';

interface EventSlidesProps {
  // Define props interface if needed
}

const EventSlides: React.FC<EventSlidesProps> = () => {
  const [activeTab, setActiveTab] = useState('events');
  const sliderRef = useRef<Slider>(null); // Define sliderRef using useRef

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        },
      },
    ],
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.9 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  };

  const transition = {
    duration: 0.5,
    ease: 'easeInOut',
  };

  const imageUrls = [
    {
      head: 'Event Name',
      para: 'location',
      image: "https://s3-alpha-sig.figma.com/img/8c5a/a2af/5b3287578d92581af9cf3e53d33ce032?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JT6S00UsCuXW5SZ3KInS2tiqp21~Y5ZG~r3hwxcsBBmeLL8FIL1~7Y2uls97Ur9l5qO~A0Howxt8MeDOmyCeJ4wbs5VRSQRg1cm9EYofiTruV4ByOvXAiSf2RaHCEvLVUZU8MpeJxy-RsbXRCLHg-E0pDCP1RN9e8d-XwxQoCXQolZk7rdHWwBQrckJYlvUv44kHNiuk4PupRvtgYIecw~yvCs0qB8h9TEstHrBSe4gTgYWkJRNS6Zf4WK9f7vymQLYuw55sq1b2rFe49rU-iTwKaW5rDhLq6G~98N3Tsp3zzO4D~Dib8B-EWoazEfzKHpSGLJL9dT21CaWQ~2uHpg__"
    },
    {
      head: 'Event Name',
      para: 'location',
      image: "https://s3-alpha-sig.figma.com/img/11ff/a468/17a9a8d438bc26d999399303984cfe8f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WMekd~2plojizQcmW-Ag28bnEGcLhYrbik9WUpC5tDfhg2-7jtak1W0iNm85pzqeWT1nGPXP44PKELUx2LdeYZeKMd940E3mVMHGQVaTS8tvsCFPncapChUZwn0awybA8qSH~QA90SZHI~Ab6UquoknDICYhjAFrNtQBVVJZ3fuAg0yPC~Y5ZD9m6536hJCy1efvWtO5WIVrj768FkLfmmgGQq6-FO6J-kooDZAlSmC0y9lruFkwO9wjPciTNEiag8130bqjXDs7gQKrMEBJUKrEydDeuqz0OHB4GA1COdk63Z8K3J4agGJ5twjNrpsqM4wg6b6FgBfXYdzgviVXLQ__"
    },
    {
      head: 'Event Name',
      para: 'location',
      image: "https://s3-alpha-sig.figma.com/img/fb8b/2fd2/623295a745f3ba3642df99e02acf9e5e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EoaBeruVvR36Rl0Cjgqa3eDMB3GLaOVKI0eXZa~RtmLA9BhrAQN4YKd0Y2ywMNnU3M5jv2F5MtlgUK5ICGjATe93ibqs~d1ApX05h8vYITty-cM-NgeYFvfKuoYfofLHxNIW6oA6SZmItuMNtt9UN2B1h6d6RTcymovC1Le0E82wDxR7ilH2Ega~QeecwlAY7pO583ADYYVtPnCPRZ2aDS~LF87GlUgXr6vQMS-CJiQ9EbfdzltZ9UT2pmvb6vd9n3GkjurvRU0Zw2gtiuUJRKx7-zJut5D3yXyjcs-5jK44FjvgF5lao0UhepJrkfxuKnGxacVHInmRb8mycy4mFQ__"
    },
    {
      head: 'Event Name',
      para: 'location',
      image: "https://s3-alpha-sig.figma.com/img/162c/fe4e/e0e893f3f2438ff89d9770ba7e1099a6?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IzYT53uLgU~0RirtoZjLAvydErBC5NH1dREqrNxLTqROY5lD4x8nb2qVYYuUZsKrzwMADDorf0k0KNdtvzoSEg1V4r~IjM7LgIDcchlKSVSDrG6KKBIU10hmZb7FoxamBw8bWe1EYzQyKcAZZEvla30EtaC35ZsCHSa8RDainX1NnISMMVM~uBSyNItue6nYgdz4csG8e-z2Oze7BgL3khIUhmX9tccq6lkkzwK80DwLoRK2Fu4MC2NQC5oGTR~GyEAGHd5K190X2QqI46nn3nlxQ2w07djyEe9pr8nV9xNaHeaxSttoK2DAbeMkkVxzmfF2ttvQlQg3NKdRXHoaDg__"
    }

  ];

  return (
    <div>
      <div className="slider-container ml-24 mr-3 relative">
        <Slider {...settings} ref={sliderRef} >
          {imageUrls.map((item, index) => (
              <Fade right >
                  <motion.div
                    key={index}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={imageVariants}
                    transition={transition}
                    className="transform-preserve-3d px-3"
                  >
                              <div className="relative rounded-lg shadow-lg">
                              <img
                                  src={item.image}
                                  alt={item.head}
                                  className="w-full h-[630px] object-cover rounded-lg"
                              />
                              <div className="absolute bottom-5 left-0 right-0 px-4 py-6">
                                  <h2 className="text-xl font-extrabold mb-2">{item.head}</h2>
                                  <p className="text-sm flex gap-2">
                                  <svg
                                      width="20"
                                      height="21"
                                      viewBox="0 0 20 21"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="text-gray-500"
                                  >
                                      <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.99992 10.5C10.4583 10.5 10.8506 10.3368 11.177 10.0104C11.5034 9.68399 11.6666 9.29163 11.6666 8.83329C11.6666 8.37496 11.5034 7.9826 11.177 7.65621C10.8506 7.32982 10.4583 7.16663 9.99992 7.16663C9.54158 7.16663 9.14922 7.32982 8.82284 7.65621C8.49645 7.9826 8.33325 8.37496 8.33325 8.83329C8.33325 9.29163 8.49645 9.68399 8.82284 10.0104C9.14922 10.3368 9.54158 10.5 9.99992 10.5ZM9.99992 16.625C11.6944 15.0694 12.9513 13.6562 13.7708 12.3854C14.5902 11.1145 14.9999 9.98607 14.9999 8.99996C14.9999 7.48607 14.5173 6.24649 13.552 5.28121C12.5867 4.31593 11.4027 3.83329 9.99992 3.83329C8.59714 3.83329 7.41311 4.31593 6.44784 5.28121C5.48256 6.24649 4.99992 7.48607 4.99992 8.99996C4.99992 9.98607 5.40964 11.1145 6.22909 12.3854C7.04853 13.6562 8.30547 15.0694 9.99992 16.625ZM9.99992 18.8333C7.76381 16.9305 6.09367 15.1632 4.9895 13.5312C3.88534 11.8993 3.33325 10.3888 3.33325 8.99996C3.33325 6.91663 4.00339 5.2569 5.34367 4.02079C6.68395 2.78468 8.23603 2.16663 9.99992 2.16663C11.7638 2.16663 13.3159 2.78468 14.6562 4.02079C15.9964 5.2569 16.6666 6.91663 16.6666 8.99996C16.6666 10.3888 16.1145 11.8993 15.0103 13.5312C13.9062 15.1632 12.236 16.9305 9.99992 18.8333Z"
                                      fill="#E8E9E9"
                                      />
                                  </svg>
                                  <span className="text-white font-bold">{item.para}</span>
                                  </p>
                              </div>
                              </div>
                  </motion.div>
              </Fade>
          ))}
        </Slider>
        <div className="absolute -bottom-4 w-full flex justify-center gap-3 px-5 pb-5">
          <button onClick={() => sliderRef.current?.slickPrev()} className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none">
            <FaArrowLeft />
          </button>
          <button onClick={() => sliderRef.current?.slickNext()} className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

const CustomPrevArrow: React.FC = (props) => {
  return <div style={{ display: 'none' }} />;
};

const CustomNextArrow: React.FC = (props) => {
  return <div style={{ display: 'none' }} />;
};

export default EventSlides;
