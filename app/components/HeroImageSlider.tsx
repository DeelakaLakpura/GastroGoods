"use client"
import Image from "next/image";
import React, { useState , useEffect} from 'react';
import { AiFillBackward, AiOutlineDotChart, AiOutlineInsertRowLeft, AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight, BsDot, BsDropletFill, BsFillDropletFill } from "react-icons/bs";


const HomeBanner = () => {
  const slides = [
  
    {
      url: 'https://essstr.blob.core.windows.net/uiimg/Carousel/slide1.jpg',
    },
    {
      url: 'https://essstr.blob.core.windows.net/uiimg/Carousel/DirectImportCarousel.jpg',
    },
    {
      url: 'https://i.postimg.cc/hvgFPtCV/slide3-1-1.jpg',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="max-w-[100%] h-[480px] w-full m-auto pb-16 px-4  relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-3xl bg-center bg-cover duration-300"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]  left-5 text-2xl rounded-full p-2 ml-4 bg-black/20 text-white cursor-pointer">
        <AiOutlineLeftCircle onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] m-l-2 right-5 text-2xl rounded-full mr-4 p-2 bg-black/20 text-white cursor-pointer">
        <AiOutlineRightCircle onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
          
            <BsDot />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomeBanner;
