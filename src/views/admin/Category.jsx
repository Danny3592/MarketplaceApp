import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../seller/Pagination';
import { FaEdit, FaTrash, FaImages } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [parPage, setParpage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#6a5fdf] rounded-md">
        <h1 className="text-[#d0d2d6] font-semibold text-lg">Category</h1>
        <button
          onClick={() => setShow(true)}
          className=" bg-red-500 shadow-lg hover:shadow-red-500 px-4 py-2 cursor-pointer text-white rounded-sm text-sm"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12 ">
          <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
            <div className="flex justify-between items-center">
              <select
                onChange={(e) => {
                  setParpage(parseInt(e.target.value));
                }}
                className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#6a5fdf] border-slate-700 border rounded-md text-[#d0d2d6] "
              >
                <option value="5" className="">
                  5
                </option>
                <option value="10" className="">
                  10
                </option>
                <option value="20" className="">
                  20
                </option>
              </select>
              <input
                type="text"
                placeholder="search"
                className=" px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
              />
            </div>
            <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-[#d0d2d6] ">
              <thead className="text-sm text-left text-[#d0d2d6] uppercase border-b  border-slate-700">
                <tr>
                  <th scope="col" className="py-3 px-4">
                    NO
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Image
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((d, i) => {
                  return (
                    <tr key={d}>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        {d}
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <img
                          className="w-[45px] h-[45px] "
                          src={`../../../public/images/category/${d}.jpg`}
                          alt=""
                        />
                      </td>

                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        Tshirt
                      </td>
                      <td
                        scope="row"
                        className="py-1 px-4 font-medium whitespace-nowrap"
                      >
                        <div className="flex justify-start items-center gap-4 ">
                          <Link className="px-[6px] py-[6px] bg-yellow-600 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                            <FaEdit />
                          </Link>
                          <Link className="px-[6px] py-[6px] bg-red-600 rounded hover:shadow-lg hover:shadow-red-600/50">
                            <FaTrash />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex justify-end mt-3 relative w-full botton-4 right-4">
              <Pagination
                pageNumber={currentPage}
                setPageNumber={setCurrentPage}
                totalItem={50}
                parPage={parPage}
                showItem={3}
              />
            </div>
            </div>
          </div>
        </div>
        <div
          className={`w-[320px] lg:w-5/12 lg:relative lg:right-0  fixed z-20 top-0 transition-all duration-200 z-[9999] ${
            show ? 'right-0' : '-right-[340px]'
          }`}
        >
          <div className="w-full pl-5">
            <div className="bg-[#6a5fdf] h-screen lg:h-auto px-3 py-2  lg:rounded-md text-[#d0d6d2]">
              <div className='flex justify-between items-center mb-4'>
                <h1 className="text-[#d0d2d6] font-semibold text-xl mb-4 w-full text-center">
                  Add Cateory
                </h1>

                <div className="block lg:hidden" onClick={() => setShow(false)}>
                  <IoMdCloseCircle />
                </div>
              </div>

              <form>
                <div className="flex flex-col w-full gap-1 mb-3 ">
                  <label htmlFor="name">Category Name</label>
                  <input
                    className=" px-4 py-2 focus:border-indigo-500 outline-none bg-[white] border border-slate-700 rounded-md text-[black]"
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="Category Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="flex justify-center border-[#d0d2d6] items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-100 w-full"
                  >
                    <span>
                      <FaImages />
                    </span>
                    <span>select image </span>
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="hidden"
                  />

                  <button className="bg-red-500 w-full hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2">
                    Add Catrgory
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
