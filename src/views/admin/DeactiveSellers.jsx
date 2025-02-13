import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';

const DeactiveSellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const [parPage, setParpage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Deactive Seller</h1>

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
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Email
                </th>
                <th scope="col" className="py-3 px-4">
                  Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => {
                return (
                  <tr key={i}>
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
                      Danny Xiao
                    </td>

                    <td
                      scope="row"
                      className="py-1 px-4 font-medium whitespace-nowrap"
                    >
                      Pending
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-4 font-medium whitespace-nowrap"
                    >
                      cso35922gmail.com
                    </td>
                    <td
                      scope="row"
                      className="py-1 px-4 font-medium whitespace-nowrap"
                    >
                      <span>Deactive</span>
                    </td>

                    <td
                      scope="row"
                      className="py-1 px-4 font-medium whitespace-nowrap"
                    >
                      <div className="flex justify-start items-center gap-4 ">
                        <Link className="px-[6px] py-[6px] bg-green-600 rounded hover:shadow-lg hover:shadow-green-500/50">
                          <GrView />
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
  );
};

export default DeactiveSellers;
