import React from 'react';

const SellerDetail = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Seller Details</h1>
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="w-full flex flex text-[#d0d2d6]">
          <div className="w-3/12 flex justify-center items-center py-3">
            <div>
              <img
                className="w-full h-[230px] "
                src="http://localhost:5173/images/demo.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Basic Info</h2>
              </div>
              <div className="flex justify-between flex-col text-sm gap-2 p-4 bg-[#9e97e9] rounded-md">
                <div className="flex gap-2 text-black font-bold">
                  <span>Name : </span>
                  <span>Danny</span>
                </div>
                <div className="flex gap-2 text-black font-bold">
                  <span>Email : </span>
                  <span>cso3592@gmail.com</span>
                </div>
                <div className="flex gap-2 text-black font-bold">
                  <span>Role : </span>
                  <span>Seller</span>
                </div>
                <div className="flex gap-2 text-black font-bold">
                  <span>Status : </span>
                  <span>Active</span>
                </div>
                <div className="flex gap-2 text-black font-bold">
                  <span>Payment Status : </span>
                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Address</h2>
              </div>
              <div className="flex justify-between flex-col text-sm gap-2 p-4 bg-[#9e97e9] rounded-md">
                <div className="flex gap-2 text-black font-bold">
                  <span>Shop Name : </span>
                  <span>Easy Shop</span>
                </div>
                <div className="flex gap-2 text-black font-bold">
                  <span>Divission : </span>
                  <span>Dhaka</span>
                </div>
                <div className="flex gap-2 text-black font-bold">
                  <span>District : </span>
                  <span>Dhaka</span>
                </div>
                <div className="flex gap-2 text-black font-bold">
                  <span>State : </span>
                  <span>Palton</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <form>
            <div className="flex gap-4 py-3">
              <select
                className="px-4 py-2 hover:border-indigo-500 outline-none
               bg-[#6a5fdf] border-slate-700 border 
               rounded-md text-[#d0d2d6]"
              >
                <option value="">--Select Status</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
              </select>
              <button className="bg-red-500 w-[170px]  hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerDetail;
