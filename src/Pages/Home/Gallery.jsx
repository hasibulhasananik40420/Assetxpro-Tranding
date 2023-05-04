import image1 from "../../assets/box1 1.png";
import image2 from "../../assets/box2 1.png";
import image3 from "../../assets/box3 1.png";
import image4 from "../../assets/box4 1.png";
import image5 from "../../assets/box5 1.png";
import image6 from "../../assets/box6 1.png";
const Gallery = () => {
  return (
    <div className="max-w-container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative flex items-center justify-center">
          <img src={image1} alt="" />
          <h1 className="text-white font-semibold font-Inter text-base absolute ">
            EXPERTS BY YOUR SIDE
          </h1>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={image2} alt="" />
          <h1 className="text-white font-semibold font-Inter text-base absolute ">
            COMMITED TO OUR CLIENTS
          </h1>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={image3} alt="" />
          <h1 className="text-white font-semibold font-Inter text-base absolute ">
            EASY ACCOUNTS OPENING
          </h1>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={image4} alt="" />
          <h1 className="text-white font-semibold font-Inter text-base absolute ">
            SUPPORTS{" "}
          </h1>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={image5} alt="" />
          <h1 className="text-white font-semibold font-Inter text-base absolute ">
            BONUS
          </h1>
        </div>

        <div className="relative flex items-center justify-center">
  <img src={image6} alt="" />
  <h1 className="text-white font-semibold font-Inter text-base absolute">
    RISK MANAGEMENT
  </h1>
</div>

       
      </div>
    </div>
  );
};

export default Gallery;
