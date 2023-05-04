import image1 from '../../assets/MIT-Algorand-01 1.png'
import image2 from '../../assets/409613848-transformed 1.png'
const Hero = () => {
  return (
  <div className='bg-white py-6'>
      <div className="max-w-container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center">
      <div className="relative flex items-center justify-center">
          <img src={image2} alt="" />
          <h1 className="text-white font-semibold font-Inter text-base absolute ">
          TRADE CANNABIS
          </h1>
        </div>
        <div className="relative flex items-center justify-center">
          <img src={image1} alt="" />
          <h1 className="text-white font-semibold font-Inter text-base absolute ">
          BLOCKCHAIN TECH
          </h1>
        </div>
      
       

       
      </div>
    </div>
  </div>
  )
}

export default Hero