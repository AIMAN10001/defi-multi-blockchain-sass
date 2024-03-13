import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const GetPool = ({ GET_POOL_ADDRESS }) => {
  const [selectedNetwork, setSelectedNetwork] = useState({});
  const [poolAddress, setPoolAddress] = useState([]);

  //NOTIFICATION
  const notifyError = (msg) => toast.error(msg, { duration: 4000 });

  useEffect(() => {
    const network = JSON.parse(localStorage.getItem("activeNetwork"));
    setSelectedNetwork(network);
  }, []);

  const [liquidity, setLiquidity] = useState({
    token_A: "",
    token_B: "",
    fee: "",
  });

  const handleFormFieldChange = (fileName, e) => {
    setLiquidity({ ...liquidity, [fileName]: e.target.value });
  };

  const CALL_POOP_ADDRESS = async () => {
    const { token_A, token_B, fee } = liquidity;
    const { rpcUrl } = selectedNetwork;

    if (!token_A || !token_B || !fee) {
      return notifyError("Provide all the details");
    }

    const poolAddress = await GET_POOL_ADDRESS(liquidity, selectedNetwork);
    setPoolAddress(poolAddress);
  };

  return (
    <section className=" flex items-center py-6 px-0 lg:p-10 w-full lg:h-screen">
      <div className="container">
        <div className=" backdrop-blur-2xl bg-default-950/40 rounded-2xl overflow-hidden max-w-5xl mx-auto">
          <div className=" grid lg:grid-cols-2 gap-10">
            {/* LEFT  */}
            <div className=" hidden lg:block ps-4 py-4">
              <div className=" relative rounded-xl overflow-hidden h-full w-full">
                <img
                  src="assets/images/ai/auth-img.jpg"
                  className="w-full h-full transform -scale-x-100"
                  alt=""
                />

                <div className=" absolute inset-0 bg-default-950/40">
                  <div className=" flex items-end justify-center h-full">
                    <div className=" p-6 text-start">
                      <h5>
                        Is the best way, <br /> to find any network liquidity
                        pool address
                      </h5>
                      <p className=" text-base font-medium text-default-500 text-white">
                        Find a User-Friendly Marketplace & start exploring and
                        maximizing your DeFi opportunities!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT  */}
            <div className=" flex flex-col h-full p-10 lg:ps-0">
              <div className=" pb6 pt-10 my-auto">
                <h4 className=" text-3xl font-bold text-default-200 mb-4">
                  Check Liquidity Pool Address
                </h4>
                <p className=" text-default-300 mb-8 text-w-sm">
                  Enter details of the 2 token and pool fee
                </p>

                <div className=" text-start">
                  <div className=" mb-4">
                    <label className=" block text-base/normal font-semibold text-default-200 mb-2">
                      Token A
                    </label>
                    <input
                      type="text"
                      onChange={(e) => handleFormFieldChange("token_A", e)}
                      className=" block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                      placeholder="Enter your token A"
                    />
                  </div>
                  <div className=" mb-4">
                    <label className=" block text-base/normal font-semibold text-default-200 mb-2">
                      Token B
                    </label>
                    <input
                      type="text"
                      onChange={(e) => handleFormFieldChange("token_B", e)}
                      className=" block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                      placeholder="Enter your token B"
                    />
                  </div>
                  <div className=" mb-4">
                    <label className=" block text-base/normal font-semibold text-default-200 mb-2">
                      Fee
                    </label>
                    <input
                      type="text"
                      onChange={(e) => handleFormFieldChange("fee", e)}
                      className=" block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                      placeholder="Enter pool fee"
                    />
                  </div>

                  <div className=" mb-6 text-center">
                    <button
                      onClick={() => CALL_POOP_ADDRESS()}
                      className=" w-full inline-flex items-center justify-center px-6 py-6 backdrop-blur-2xl bg-primary-600/90 text-default-200 rounded-lg transition-all duration-500 group hover:bg-primary hover:text-blue-950 mt-5"
                    >
                      <span className="fw-bold">Get Pool Address</span>
                    </button>
                  </div>

                  {poolAddress && (
                    <>
                      {poolAddress.map((pool, index) => (
                        <div className="mb-4">
                          <input
                            key={index + 2}
                            type="text"
                            onClick={(e) => navigator.clipboard.writeText(pool)}
                            value={`${index + 1}: ${pool}`}
                            className=" block w-full rounded py-1.5 px-3 bg-transparent border-white/10 border-default-200 text-white/80 focus:border-white/25 focus:ring-transparent"
                          />
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetPool;
