"use client"; // Add this line at the top
import CollectionSlides from "./CollectionSlides";
import Collections from "./Collections";
import EventSlides from "./EventSlides";
import Events from "./Events";
import Marquee from "./Marquee";
import React, { useState } from 'react';

const MainHome = () => {
  const [activeTab, setActiveTab] = useState('events');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="grid grid-cols-12 gap-4 flex-grow">
        {/* Carousel Section */}
        <div className="col-span-12 lg:col-span-6 flex flex-col">
      <div className="flex items-center">
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.3649 33.7239C33.4538 34.0144 37.5722 32.3153 37.7488 27.8702C37.8296 23.7136 37.7018 16.8084 37.9155 9.75066C37.9158 9.74965 37.9155 9.75066 37.9155 9.75066C33.9518 9.29839 29.129 9.82067 29.0939 17.1305C29.0838 19.1534 29.6068 20.1799 29.3649 33.7239Z" fill="#FFCA5F" />
          <path d="M29.365 33.724C16.3769 29.5393 11.9628 18.2152 14.0418 11.1629C14.0418 11.1629 11.6617 16.3791 10.9786 21.8455C10.5679 25.129 13.839 30.8041 18.0845 32.1409C23.6302 33.8875 29.365 33.724 29.365 33.724Z" stroke="#FFCA5F" stroke-width="0.318521" stroke-miterlimit="10" />
          <path d="M29.0018 33.6197C18.2676 27.6279 15.0706 18.2809 13.6786 11.0586" stroke="#FFCA5F" stroke-width="0.318521" stroke-miterlimit="10"/>
          <path d="M29.0018 33.6198C18.2615 33.3157 8.50915 25.302 13.6786 11.0586" stroke="#FFCA5F" stroke-width="0.318521" stroke-miterlimit="10"/>
          <path d="M35.4651 45.9178C35.727 41.8823 33.9737 37.8021 29.4706 37.5926C25.2604 37.4801 18.2682 11.1189 37.2851C11.1179 37.2848 11.1189 37.2851 11.1189 37.2851C10.6922 41.1956 11.2592 45.9621 18.6624 46.0544C20.7112 46.0804 21.7466 45.572 35.4651 45.9178Z" fill="#FFCA5F"/>
          <path d="M46.4664 36.7823C42.3775 36.4918 38.2591 38.191 38.0825 42.6361C38.0018 46.7927 38.1295 53.6979 37.9158 60.7556C37.9158 60.7556 37.9156 60.7566 37.9158 60.7556C41.8795 61.2079 46.7023 60.6856 46.7374 53.3757C46.7475 51.3529 46.2245 50.3263 46.4664 36.7823Z" fill="#FFCA5F"/>
          <path d="M46.4663 36.7823C59.4544 40.967 63.8684 52.2911 61.7895 59.3434C61.7895 59.3434 64.1696 54.1271 64.8527 48.6608C65.2633 45.3773 61.9923 39.7022 57.7468 38.3653C52.2014 36.6177 46.4663 36.7823 46.4663 36.7823Z" stroke="#FFCA5F" stroke-width="0.318521" stroke-miterlimit="10"/>
          <path d="M46.4662 36.7823C57.2005 42.7742 60.3975 52.1212 61.7895 59.3435" stroke="#FFCA5F" stroke-width="0.318521" stroke-miterlimit="10"/>
          <path d="M37.3228 27.7478C37.0609 31.7833 38.8142 35.8636 43.3173 36.073C47.5275 36.1855 54.5197 36.1139 61.669 36.3806C61.669 36.3806 61.67 36.3809 61.669 36.3806C62.0957 32.4701 61.5287 27.7035 54.1255 27.6112C52.0767 27.5853 51.0413 28.0936 37.3228 27.7478Z" fill="#FFCA5F"/>
        </svg>
        <h1 className="font-legend w-[131px] text-[#FFCA5F] font-extrabold text-5xl">Astrix.</h1>
          </div>
          <div>
            <div className="absolute  text-[#FFFFFF33]  left-[34px] w-[361px] h-[650px] font-lexend text-[128px] break-words font-bold leading-[118px] text-left">
              ASTRIX COLLECTIBLE
            </div>
              {activeTab === 'events' ? (
                <div className="relative">
                  <EventSlides />
                </div>
              ) : (
              <div className="relative">
                  <CollectionSlides />
                </div>
              )}
        </div>

           
          <div className="flex flex-col  h-32">
            <div className="mt-auto flex w-full ml-12 mb-4">
              <div className="h-[52px] w-[250px] rounded-full bg-stone-800">
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => handleTabClick('events')}
                    className={`tab-button rounded-full h-[52px] px-6 text-white font-semibold border-1 ${
                      activeTab === 'events'
                        ? 'border-1 bg-[#484E56]'
                        : 'hover:border-1 hover:border-white'
                    } focus:outline-none`}
                  >
                    Events
                  </button>
                  <button
                    onClick={() => handleTabClick('collections')}
                    className={`tab-button rounded-full px-6 h-[52px] font-semibold text-white border-1 ${
                      activeTab === 'collections'
                        ? 'border-1 bg-[#484E56]'
                        : 'hover:border-1 hover:border-white'
                    } focus:outline-none`}
                  >
                    Collections
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-1">
          <Marquee />
        </div>

        <div className="col-span-12 lg:col-span-4">
          {activeTab === 'collections' ? <Events /> : <Collections />}
        </div>
      </div>
    </div>
  );
};

// Arrow components for Slider navigation
 
export default MainHome;
