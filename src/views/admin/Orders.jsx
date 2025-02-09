import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Pagination from '../seller/Pagination';

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [parPage, setParpage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5 ">
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
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left [#d0d2d6]">
            <div className="text-sm text-[#d  0d2d6] uppercase border-b border border-slate-700">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Order id</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
                <div className="py-3 w-[8%] font-bold">
                  <FaDownload />
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#d0d2d6]">
            <div className="flex justify-between items-center border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                #334343
              </div>
              <div className="py-3 w-[13%] font-medium">$556</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">
                <Link>View</Link>
              </div>
              <div
                className="py-3 w-[8%] font-medium"
                onClick={(e) => setShow(!show)}
              >
                <FaDownload />
              </div>
            </div>
            <div
              className={
                show ? 'block border-b border-slate-700 bg-[#8288ed]' : 'hidden'
              }
            >
              <div className="flex justify-start items-center border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #3434
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium"></div>
              </div>
              <div className="flex justify-start items-center border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #3434
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium"></div>
              </div>
              <div className="flex justify-start items-center border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #3434
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium"></div>
              </div>
            </div>
          </div>
          <div className="text-[#d0d2d6]">
            <div className="flex justify-between items-center border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                #334343
              </div>
              <div className="py-3 w-[13%] font-medium">$556</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">
                <Link>View</Link>
              </div>
              <div
                className="py-3 w-[8%] font-medium"
                onClick={(e) => setShow(!show)}
              >
                <FaDownload />
              </div>
            </div>
            <div
              className={
                show ? 'block border-b border-slate-700 bg-[#8288ed]' : 'hidden'
              }
            >
              <div className="flex justify-start items-center border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #3434
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium"></div>
              </div>
              <div className="flex justify-start items-center border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #3434
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium"></div>
              </div>
              <div className="flex justify-start items-center border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #3434
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium"></div>
              </div>
            </div>
          </div>
          <div className="text-[#d0d2d6]">
            <div className="flex justify-between items-center border-b border-slate-700">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                #334343
              </div>
              <div className="py-3 w-[13%] font-medium">$556</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">
                <Link>View</Link>
              </div>
              <div
                className="py-3 w-[8%] font-medium"
                onClick={(e) => setShow(!show)}
              >
                <FaDownload />
              </div>
            </div>
            <div
              className={
                show ? 'block border-b border-slate-700 bg-[#8288ed]' : 'hidden'
              }
            >
              <div className="flex justify-start items-center border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #3434
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium"></div>
              </div>
              <div className="flex justify-start items-center border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #3434
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium"></div>
              </div>
              <div className="flex justify-start items-center border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #3434
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium"></div>
              </div>
            </div>
          </div>
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
  );
};

export default Orders;
