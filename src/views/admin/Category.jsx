import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { FaEdit, FaTrash, FaImages } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { overrideStyle } from '../../utils/utils';
import { PropagateLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import {
  categoryAdd,
  messageClear,
  get_category,
} from '../../store/Reducers/categoryReducer';
import toast from 'react-hot-toast';
import Search from '../components/Search';

const Category = () => {
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage,categorys,totalCategory } = useSelector(
    (state) => state.category,
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setsearchValue] = useState('');
  const [parPage, setParpage] = useState(5);
  const [show, setShow] = useState(false);

  const [imageShow, setImageShow] = useState('');
  const [state, setState] = useState({
    name: '',
    image: '',
  });

  function add_catrgory(e) {
    e.preventDefault();
    dispatch(categoryAdd(state));
  }
  function imageHandle(e) {
    let files = e.target.files;
    console.log(URL.createObjectURL(files[0]));
    if (files.length > 0) {
      setImageShow(URL.createObjectURL(files[0]));
      setState({ ...state, image: files[0] });
    }
  }

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      console.log('successMessage');
      toast.success(successMessage);
      dispatch(messageClear());
      setState({ name: '', image: '' });
      setImageShow('');
    }
  }, [successMessage, errorMessage]);

  useEffect(() => {

    // console.log(searchValue)

    const obj = {
      parPage: parseInt(parPage),
      page: parseInt(currentPage),
      searchValue: searchValue,
    };
    dispatch(get_category(obj));
  }, [searchValue, currentPage, parPage]);

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
            <Search
              setParPage={setParpage}
              setSearchValue={setsearchValue}
              searchValue={searchValue}
            />
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
                  {categorys.map((category, i) => {
                    return (
                      <tr key={category.id}>
                        <td
                          scope="row"
                          className="py-1 px-4 font-medium whitespace-nowrap"
                        >
                          {i+1}
                        </td>
                        <td
                          scope="row"
                          className="py-1 px-4 font-medium whitespace-nowrap"
                        >
                          <img
                            className="w-[45px] h-[45px] "
                            src={category.image}
                            alt=""
                          />
                        </td>

                        <td
                          scope="row"
                          className="py-1 px-4 font-medium whitespace-nowrap"
                        >
                          {category.name}
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
                  totalItem={totalCategory}
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
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-[#d0d2d6] font-semibold text-xl mb-4 w-full text-center">
                  Add Cateory
                </h1>

                <div className="block lg:hidden" onClick={() => setShow(false)}>
                  <IoMdCloseCircle />
                </div>
              </div>

              <form onSubmit={add_catrgory}>
                <div className="flex flex-col w-full gap-1 mb-3 ">
                  <label htmlFor="name">Category Name</label>
                  <input
                    className=" px-4 py-2 focus:border-indigo-500 outline-none bg-[white] border border-slate-700 rounded-md text-[black]"
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="Category Name"
                    value={state.name}
                    onChange={(e) =>
                      setState({ ...state, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="flex justify-center border-[#d0d2d6] items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-100 w-full"
                  >
                    {imageShow ? (
                      <img src={imageShow} alt="" />
                    ) : (
                      <>
                        <span>
                          <FaImages />
                        </span>
                        <span>select image </span>
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="hidden"
                    // value={state.image}
                    onChange={imageHandle}
                  />
                  <div className="mt-7">
                    <button
                      disabled={loader}
                      className="bg-red-800 w-full hover:shadow-red-300/50 hover:shadow-lg
                       text-white rounded-md px-7 py-2 mb-2"
                    >
                      {loader ? (
                        <PropagateLoader
                          cssOverride={overrideStyle}
                          color="#fff"
                        />
                      ) : (
                        ' Add Catrgory'
                      )}
                    </button>
                  </div>
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
