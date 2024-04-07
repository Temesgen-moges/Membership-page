import React from 'react';
import card1 from '../asset/img/1.jpg'; 
import card2 from '../asset/img/2.jpg'; 
import card3 from '../asset/img/3.jpg'; 

const Card = () => {
  return (
    <div>
      <div className="pt-[3rem] rounded-t-[5rem] bg-[#081730] headline mt-7 flex flex-col items-center text-[2rem]">
        <span className='text-white'>
          <b>Our Categories</b>
        </span>
      </div>
      <section className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[40rem] relative ">
        <div className="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img src={card1} className="w-full h-full" alt="Card 1" />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">category one</h1>
                <p>"Join us in making your day happier and earning money at the same time. Discover the joy of
                   music and the excitement of earning rewards as you immerse yourself in our vibrant community."</p>
                <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                  Get Start now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img src={card2} className="w-full h-full" alt="Card 2" />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">category two</h1>
                <p>"Join us in making your day happier and earning money at the same time. Discover the joy of music and 
                  the excitement of earning rewards as you immerse yourself in our vibrant community."</p>
                <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                  Get Start now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] h-[350px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img src={card3} className="w-full h-full" alt="Card 3" />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">category three</h1>
                <p>"Join us in making your day happier and earning money at the same time. Discover the joy of music and the excitement of 
                  earning rewards as you immerse yourself in our vibrant community."</p>
                <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                  Get Start now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center pt-[2rem] pb-[4rem]">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-300 ease-in-out hover:scale-110">
        Start now
        </button>
      </div>
    </div>
  );
};

export default Card;
