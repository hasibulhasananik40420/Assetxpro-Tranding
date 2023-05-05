import { useEffect, useRef } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/bundle";

SwiperCore.use([Navigation]);

export default function TradeWithAward() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new SwiperCore(".swiper", {
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      const windowWidth = window.innerWidth;
      const direction = windowWidth <= 760 ? "vertical" : "horizontal";

      return direction;
    }
  }, []);

  return (
    <div className="bg-gray-50">
      <h2 className="text-center text-[40px] font-bold">TRADE WITH AWARD-WINNING BROKER</h2>

      <div className="h-[300px] bg-gray-50">
        <Swiper className="h-full" ref={swiperRef}>
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide"  >
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="max-w-[150px] p-8 rounded overflow-hidden shadow-lg">
                <img
                  src="https://i.ibb.co/mbYw8Fs/Screenshot-2-removebg-preview.png"
                  alt="Screenshot-2-removebg-preview"
                  border="0"
                />
                <div className="text-center mt-2">
                  <div className="font-bold">Best Now</div>
                  <p className="text-gray-700 text-base">Acis-2013</p>
                </div>
              </div>
            </SwiperSlide>
            {/* {[...Array(10).keys()].map((index) => (
              
            ))} */}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
}
