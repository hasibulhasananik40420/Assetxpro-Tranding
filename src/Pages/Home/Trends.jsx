const Trends = () => {
  return (
    <div className="grid grid-cols-1 bg-[#e6f8f8] gap-4 sm:grid-cols-2 md:grid-cols-3 justify-center">
      <div className=" overflow-hidden  border border-black ">
        <div className="">
          <div className="text-xl mb-2 bg-gray-900 text-center text-gray-100 py-2">
            TOP TRENDS
          </div>

          {/* trends table */}
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#e6f8f8]">
                      <tr>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          User
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Asset
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Profit
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Direction
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#e6f8f8] divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <img
                            className="w-[30px] h-[20px]"
                            src="https://i.ibb.co/KyTwTw2/download.png"
                            alt="download"
                            border="0"
                          />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          Bitcoin
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          $10,000
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-sm leading-5 font-semibold ">
                            Call
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <img
                            className="w-[30px] h-[20px]"
                            src="https://i.ibb.co/82vH5vX/images.png"
                            alt="images"
                            border="0"
                          />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          Ethereum
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          $5,000
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-sm leading-5 font-semibold ">
                            Put
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <img
                            className="w-[30px] h-[20px]"
                            src="https://i.ibb.co/RyMSSKd/images.jpg/"
                            alt="images"
                            border="0"
                          />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          Ethereum
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          $5,000
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-sm leading-5 font-semibold ">
                            Put
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <img
                            className="w-[30px] h-[20px]"
                            src="https://i.ibb.co/M8ZGv1M/images-1.png"
                            alt="images-1"
                            border="0"
                          />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          Ethereum
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          $5,000
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-sm leading-5 font-semibold ">
                            Put
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden  border border-black">
        <div className="">
          <div className="text-xl mb-2 bg-gray-900 text-center text-gray-100 py-2">
            PUPOPLAR TRENDS
          </div>

          {/* trends table */}
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#e6f8f8]">
                      <tr>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Asset
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Cell (%)
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Asset Percentage
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Put (%)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#e6f8f8] divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          AUD/USD
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          52%
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img
                            className="w-[60px] h-[20px]"
                            src="https://i.ibb.co/DY0gdTk/Screenshot-1.png"
                            alt="Screenshot-1"
                            border="0"
                          />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-sm leading-5 font-semibold ">
                            48%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          AUD/USD
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          52%
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img
                            className="w-[60px] h-[20px]"
                            src="https://i.ibb.co/DY0gdTk/Screenshot-1.png"
                            alt="Screenshot-1"
                            border="0"
                          />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-sm leading-5 font-semibold ">
                            48%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          AUD/USD
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          52%
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img
                            className="w-[60px] h-[20px]"
                            src="https://i.ibb.co/DY0gdTk/Screenshot-1.png"
                            alt="Screenshot-1"
                            border="0"
                          />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-sm leading-5 font-semibold ">
                            48%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          AUD/USD
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          52%
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <img
                            className="w-[60px] h-[20px]"
                            src="https://i.ibb.co/DY0gdTk/Screenshot-1.png"
                            alt="Screenshot-1"
                            border="0"
                          />
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 inline-flex text-sm leading-5 font-semibold ">
                            48%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden  border border-black ">
        <div className="">
          <div className="text-xl mb-2 bg-gray-900 text-center text-gray-100 py-2">
            FINANCIAL NEWS
          </div>

          {/* trends table */}
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b px-4 border-gray-200 sm:rounded-lg">
                  
                  <div className="my-2  ">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <p className=" fond-bold text-lg">20 April 2023</p>
                    <p>Lorem ipsum dolor, sit amet.</p>
                  </div>
                  <div className="my-2  ">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <p className=" fond-bold text-lg">20 April 2023</p>
                    <p>Lorem ipsum dolor, sit amet.</p>
                  </div>
                  <div className="my-2  ">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <p className=" fond-bold text-lg">20 April 2023</p>
                    <p>Lorem ipsum dolor, sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
