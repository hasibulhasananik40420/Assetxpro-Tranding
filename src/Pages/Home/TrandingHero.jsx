
import heroimg from "../../assets/desktop 1.png";
import { RxDotFilled } from "react-icons/rx";

const TrandingHero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-container mx-auto  w-full  font-Inter ">
        <div className="lg:flex lg:max-w-containerSmall lg:mx-auto w-full items-center flex-wrap py-6">
          {/******************************* Hero Image *******************************/}
         
          {/******************************* Hero Text *******************************/}
          <div className="lg:w-2/4 flex flex-col md:flex md:flex-col md:justify-center md:items-center lg:items-center mt-12 lg:mt-0">
            <h1 className="lg:text-5xl lg:text-left text-3xl  xl:text-left  text-black font-Inter font-bold">
            TRADING PLATFORM
            </h1>
           
            <h2 className="text-lg  text-black font-Inter md:text-xl lg:max-w-2xl lg:text-left lg:text-xl  md:text-center mt-3">
            Experience The Latest Technology<br/>
            In Forex Trading 
            </h2>
            <ul className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-3 ml-4">
              <li className="flex items-center gap-3 text-lg text-white">
                <span className="">
                  <RxDotFilled className="text-xl text-black"/>
                </span>
              <span className="text-base font-Inter text-black"> Trading directly online, no download required</span>
              </li>
               <li className="flex items-center gap-3 text-lg text-white">
                <span className="">
                  <RxDotFilled className="text-xl text-black"/>
                </span>
              <span className="text-base font-Inter text-black"> Trading directly online, no download required</span>
              </li>
               <li className="flex items-center gap-3 text-lg text-white">
                <span className="">
                  <RxDotFilled className="text-xl text-black"/>
                </span>
              <span className="text-base font-Inter text-black"> Trading directly online, no download required</span>
              </li>
               <li className="flex items-center gap-3 text-lg text-white">
                <span className="">
                  <RxDotFilled className="text-xl text-black"/>
                </span>
              <span className="text-base font-Inter text-black"> Trading directly online, no download required</span>
              </li>
               <li className="flex items-center gap-3 text-lg text-white">
                <span className="">
                  <RxDotFilled className="text-xl text-black"/>
                </span>
              <span className="text-base font-Inter text-black"> Trading directly online, no download required</span>
              </li>
              
            </ul>
           
          </div>

          <div className="lg:w-2/4 flex items-center justify-center mb-4 ">
            <img className="lg:w-[90%] w-4/5" src={heroimg} alt="" />
          </div>



        </div>
      </div>
    </div>
  )
}

export default TrandingHero