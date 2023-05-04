const HomeFooter = () => {
  return (
    <div className="bg-[#055726]">
      {/********************** footer section start here ******************************/}
      <div className="flex flex-wrap justify-between gap-6 py-8 lg:px-8 px-4  lg:max-w-containerSmall lg:mx-auto">
        {/******************** item 1 start here ***************************/}
        <div className="flex flex-col">
          <h1 className="text-black font-bold font-Inter text-2xl	">TRADING</h1>
          <p className="text-black font-normal font-Inter text-base">
            Assets Index
          </p>{" "}
          <p className="text-black font-normal font-Inter text-base">
            Trading Platform
          </p>{" "}
          <p className="text-black font-normal font-Inter text-base">
            Account Types
          </p>
          {/**************** footer icon start here *******************/}
          {/**************** footer icon end here *******************/}
        </div>
        {/******************** item 1 end here ***************************/}

        {/******************** item 2 start here ***************************/}

        <div className="flex flex-col ">
          <h1 className="text-black font-bold font-Inter text-2xl	">PRODUCTS</h1>
          <p className="text-black font-normal font-Inter text-base">
            CFD
          </p>{" "}
          <p className="text-black font-normal font-Inter text-base">Forex</p>
          <p className="text-black font-normal font-Inter text-base">
            Forex
          </p>{" "}
          <p className="text-black font-normal font-Inter text-base">
            Residents
          </p>{" "}
          <p className="text-black font-normal font-Inter text-base">SAVING</p>{" "}
          <p className="text-black font-normal font-Inter text-base">ACCOUNT</p>
          {/**************** footer icon start here *******************/}
          {/**************** footer icon end here *******************/}
        </div>
        {/******************** item 2 end here ***************************/}

        {/******************** item 3 start here ***************************/}

        <div className="flex flex-col ">
          <h1 className="text-black font-bold font-Inter text-2xl	">ASSETXPRO</h1>
          <p className="text-black font-normal font-Inter text-base">
          About us


          </p>{" "}
          <p className="text-black font-normal font-Inter text-base">FAQ</p>
          <p className="text-black font-normal font-Inter text-base">
          Contact us
          </p>{" "}
         
        </div>

        {/******************** item 3 end here ***************************/}
        <div className="flex flex-col">
          <h1 className="text-black font-bold font-Inter text-2xl	">LEGAL</h1>
          <p className="text-black font-normal font-Inter text-base">
          Terms and conditions



          </p>
          <p className="text-black font-normal font-Inter text-base">Leverege / Bonus Policy</p>
          <p className="text-black font-normal font-Inter text-base">
          Privacy Policy
          </p> 
          <p className="text-black font-normal font-Inter text-base">
          KYC policy
          </p> <p className="text-black font-normal font-Inter text-base">
          Anti-Money Laundering Policy
          </p> <p className="text-black font-normal font-Inter text-base">
          Withdrawal of funds policy
          </p>
         
        </div>
       

        {/******************** item 4 end here ***************************/}
      </div>

      {/********************** footer section end here ******************************/}
    </div>
  );
};

export default HomeFooter;
