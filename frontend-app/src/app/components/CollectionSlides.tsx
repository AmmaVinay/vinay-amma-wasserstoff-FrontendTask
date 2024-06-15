import React, { useState, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Fade } from 'react-reveal';

interface CollectionSlidesProps {
  // Define props interface if needed
}

const CollectionSlides: React.FC<CollectionSlidesProps> = () => {
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
      head: 'Lunar Palace:',
      para: '(ft. Kanye West)',
      image: "https://s3-alpha-sig.figma.com/img/a915/2b99/f3b1d5c5a3d9ca34145cba9ad898fa50?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h-EeVRgB~oQLL7LLFa-kZr-3oLvuRVsCpN8G-Lav1DYfeXszia3cKzKuC17xaj0puauPsYbwi5MwnTqwZQ0z4cvEkxcAuAdfvtNA73G300yxddrax8MLn9ilCzLpoeasVrJQC9zvm4HXxseqoNLzA4gTRjt-SD5c3Fi0TXIIKMvBhOce9BaegYR9Cu9cmu8N6u9ziIkqJWP1TSs3SlDr9eQq1Toyox7ViStc4yjrTk7a6hXSqCcdAooxOu6vO9bQyXb6WLgv3aVejyvyNxa3cd9GedYxIHwJ32WoNBh62rKiD5le1f8M~bWuh90QMSEFCaKasLloX7lsI7SSh-UaoQ__"
    },
    {
      head: 'Lunar Palace:',
      para: '(ft. Kanye West)',
      image: "https://s3-alpha-sig.figma.com/img/11ff/a468/17a9a8d438bc26d999399303984cfe8f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WMekd~2plojizQcmW-Ag28bnEGcLhYrbik9WUpC5tDfhg2-7jtak1W0iNm85pzqeWT1nGPXP44PKELUx2LdeYZeKMd940E3mVMHGQVaTS8tvsCFPncapChUZwn0awybA8qSH~QA90SZHI~Ab6UquoknDICYhjAFrNtQBVVJZ3fuAg0yPC~Y5ZD9m6536hJCy1efvWtO5WIVrj768FkLfmmgGQq6-FO6J-kooDZAlSmC0y9lruFkwO9wjPciTNEiag8130bqjXDs7gQKrMEBJUKrEydDeuqz0OHB4GA1COdk63Z8K3J4agGJ5twjNrpsqM4wg6b6FgBfXYdzgviVXLQ__"
    },
    {
      head: 'Lunar Palace:',
      para: '(ft. Kanye West)',
      image: "https://s3-alpha-sig.figma.com/img/7530/a73c/a76d3c01ae0aa065ff590a38a6599180?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Usif-0STscUpXsfwxWOtOV6Zfrdx~GzM-4MnmG~gaUCmAVRkJeYs3WJvV0c9CFmFtXbE5lUKFiQHm~OMpeGYJqsVbf05Vrnys8iIbRhk9ic1OtPuEq6s396Pu51AS-fpTYBGBd0121s4gyskGkwOH0N~gBXs49zqeqg~UX7a8o0FR2U2NEQFTGjkBUwyC0Bq9i~fiwnmPsgXgHgCIbDLh0TUj84yJgZwoC97WyXeMtikOd3dL~RPawPgH2xnSpN392sq0MbM3WJQYkDdFjXB8JjnUVZ8RwwvZlBRjGfW4CQqwMm4Hgdj4nLSSqGEpKahS7kXEQG5CMKgP7DH54slYw__"
    }
  ];

  return (
    <div>
      <div className="slider-container ml-24 mr-3 relative">
        <Slider {...settings} ref={sliderRef} >
          {imageUrls.map((item, index) => (
            <Fade right>
              <motion.div
                key={index}
                initial="enter"
                animate="center"
                exit="exit"
                variants={imageVariants}
                transition={transition}
                className="transform-preserve-3d px-3"  
              >
                <div className=" rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-2">{item.head}</h2>
                  <p className="text-sm mb-4">{item.para}</p>
                  <img src={item.image} alt={item.head} className="w-full h-[630px] object-cover rounded-lg" />
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

export default CollectionSlides;
