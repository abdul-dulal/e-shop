import React from "react";

const Address = () => {
  return (
    <div className="ml-8 lg:mt-0 md:mt-0 mt-14">
      <div className="flex lg:gap-10 md:gap-3 gap-4 ">
        <div>
          <label className="font-semibold uppercase">Zip Code</label> <br />
          <input
            type="text"
            class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
          />
        </div>
        <div>
          <label className="font-semibold uppercase">City</label> <br />
          <input
            type="text"
            class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
          />
        </div>
      </div>
      <div className="flex lg:gap-10 md:gap-3 gap-4 mt-5">
        <div>
          <label className="font-semibold uppercase">State</label> <br />
          <input
            type="text"
            class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
          />
        </div>
        <div>
          <label className="font-semibold uppercase">Country</label> <br />
          <input
            type="text"
            class=" lg:w-[230px] md:w-40 w-36 px-2 h-10 mt-3 focus:outline rounded-md  "
          />
        </div>
      </div>
      <div className="mt-5">
        <label className="font-semibold uppercase">state address</label> <br />
        <input
          type="text"
          class=" lg:w-[500px] md:w-[330px] w-[300px] px-2 h-10 mt-3 focus:outline rounded-md  "
        />
      </div>
      <button className="bg-purple-600 hover:bg-gray-600 text-white px-6 py-2 rounded-sm mt-5 font-semibold">
        Save Change
      </button>
    </div>
  );
};

export default Address;
