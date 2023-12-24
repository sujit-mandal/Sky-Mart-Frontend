import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ shoe }) => {
  const { productName, colors, images, price } = shoe;
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white shadow-lg shadow-slate-300 rounded-xl p-6">
      <div className="flex flex-col">
        <div className="">
          <div className="relative h-62 w-full mb-3">
            <div className="absolute flex flex-col top-0 right-0 p-3">
              <button className="transition ease-in duration-300 bg-gray-800  hover:text-[#F48724] shadow hover:shadow-md text-gray-300 rounded-full w-8 h-8 text-center p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
            <img
              src={images[0]}
              alt="Just a flower"
              className=" w-full   object-fill  rounded-2xl"
            />
          </div>
          <div className="flex-auto justify-evenly">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-sm flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-500 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-800 whitespace-nowrap mr-3">
                  4.60
                </span>
              </div>
              <div className="flex items-center w-full justify-between min-w-0 ">
                <h2 className="text-lg font-semibold mr-auto cursor-pointer hover:text-[#F48724] truncate ">
                  {productName}
                </h2>
                <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                  INSTOCK
                </div>
              </div>
            </div>
            <div className="text-xl font-semibold mt-1">
              <FaBangladeshiTakaSign className="inline-block" />
              {price}
            </div>
            <div className="lg:flex py-4  text-sm text-gray-600">
              <div className="flex-1 inline-flex items-center  mb-3">
                <div className="w-full flex-none text-sm flex items-center text-gray-600 mr-5">
                  <ul className="flex flex-row justify-center items-center space-x-2">
                    <li className="">
                      <span
                        className={`block p-1 border-2 border-gray-900 rounded-full transition ease-in duration-300`}
                        onMouseOver={(e) => {
                          e.currentTarget.style.border = `2px solid ${colors[0]}`;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.border = "2px solid #000";
                        }}
                      >
                        <button
                          className={`block w-4 h-4 rounded-full`}
                          style={{ backgroundColor: `${colors[0]}` }}
                        ></button>
                      </span>
                    </li>
                    <li className="">
                      <span
                        className={`block p-1 border-2 border-gray-900 rounded-full transition ease-in duration-300`}
                        onMouseOver={(e) => {
                          e.currentTarget.style.border = `2px solid ${colors[1]}`;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.border = "2px solid #000";
                        }}
                      >
                        <button
                          className={`block w-4 h-4 rounded-full`}
                          style={{ backgroundColor: `${colors[1]}` }}
                        ></button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 inline-flex items-center mb-3">
                <span className="text-secondary whitespace-nowrap mr-3">
                  Size:
                </span>
                <div className="cursor-pointer text-gray-600 ">
                  <span className="hover:text-[#F48724] p-1 py-0">25</span>
                  <span className="hover:text-[#F48724] p-1 py-0">36</span>
                  <span className="hover:text-[#F48724] p-1 py-0">37</span>
                  <span className="hover:text-[#F48724] p-1 py-0">38</span>
                  <span className="hover:text-[#F48724] p-1 py-0">39</span>
                  <span className="hover:text-[#F48724] p-1 py-0">40</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 text-sm font-medium justify-start">
              <button
                onClick={() => {
                  navigate(`/product-details/${shoe._id}`);
                }}
                className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-[#F48724] px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:scale-110"
              >
                <span>Add Cart</span>
              </button>
              <Link
                to={`/product-details/${shoe._id}`}
                className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
