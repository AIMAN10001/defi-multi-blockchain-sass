import React, { useState, useEffect } from "react";
import { BiSolidCopyAlt } from "react-icons/bi";

//INTERNAL IMPORT
import { shortenAddress } from "../utils/shortaddress";
import { Promo } from "../components/index";

const PoolHistory = ({ setActiveComponent }) => {
  const [poolDetails, setPoolDetails] = useState([]);

  useEffect(() => {
    const pools = JSON.parse(localStorage.getItem("poolHistory"));

    setPoolDetails(pools?.reverse());
  }, []);
  return (
    <section id="price" className="pt-32">
      <div className=" container">
        {poolDetails ? (
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {poolDetails?.map((pool, index) => (
              <div>
                <div className=" bg-slate-950/40 rounded-xl hover:-translate-y-2 hover:bg-primary/40 transition-all duration-500">
                  <div className="border border-white/10 rounded-xl">
                    <div className=" p-6">
                      <a className=" flex items-center justify-center gap-2 border border-white/10 text-default-200 py-2 mt-6 px-6 rounded-lg hover:bg-primary-hover hover:text-blue-950 font-semibold transition-all duration-300">
                        {pool.network}
                      </a>
                      <hr className=" my-5 border-dashed border-white/10" />
                      <ul
                        className=" mt-3 text-sm text-default-700"
                        roll="list"
                      >
                        <li className=" flex items-center gap-2 py-2">
                          <i
                            onClick={() =>
                              navigator.clipboard.writeText(pool.token_A)
                            }
                            className=" inline-block w-5 text-default-100"
                          >
                            <BiSolidCopyAlt />
                          </i>
                          <span className=" text-default-200">
                            Token A: {shortenAddress(pool.token_A)}
                          </span>
                        </li>
                        <li className=" flex items-center gap-2 py-2">
                          <i
                            onClick={() =>
                              navigator.clipboard.writeText(pool.token_B)
                            }
                            className=" inline-block w-5 text-default-100"
                          >
                            <BiSolidCopyAlt />
                          </i>
                          <span className=" text-default-200">
                            Token B: {shortenAddress(pool.token_B)}
                          </span>
                        </li>
                        <li className=" flex items-center gap-2 py-2">
                          <i
                            onClick={() =>
                              navigator.clipboard.writeText(pool.fee)
                            }
                            className=" inline-block w-5 text-default-100"
                          >
                            <BiSolidCopyAlt />
                          </i>
                          <span className=" text-default-200">
                            Fee: {shortenAddress(pool.fee)}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Promo setActiveComponent={setActiveComponent} />
        )}
      </div>
    </section>
  );
};

export default PoolHistory;
