import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
  const [index, setIndex] = useState(0);
  const params = useParams();
  const [shoe, setShoe] = useState({});
  const { user } = useContext(AuthContext);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const location = useLocation();
  const isProductDetailsPage = location.pathname.includes("/product-details");
  useEffect(() => {
    axios.get(`http://localhost:5000/shoe/${params?.id}`).then((res) => {
      setShoe(res.data);
    });
  }, [params?.id]);
  const { productName, colors, images, price } = shoe;
  const [quantity, setQuantity] = useState(1);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleAddToCart = () => {
    const cartInfo = {
      user: user?.email,
      name: productName,
      shoeId: params?.id,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    };
    console.log(cartInfo);
    axios
      .post("http://localhost:5000/cart/add", cartInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
      });
  };
  return (
    <div>
      <Navbar bgBlack={isProductDetailsPage}></Navbar>
      <section className="text-gray-700 w-full body-font overflow-hidden bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="w-full mx-auto flex flex-col lg:flex-row gap-10">
            <div className="bg-gray-300 flex items-center rounded-2xl">
              <img
                alt="Shoe Image"
                className="p-5 w-full lg:p-10 mx-auto object-cover object-center rounded-2xl border border-gray-200"
                src={images ? images[index] : ""}
              />
            </div>
            <div className="w-full flex-1 lg:pl-10  p-6 lg:mt-0 bg-white rounded-2xl">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productName}
                <span className="bg-red-600 px-3 py-1 ml-5 text-white rounded-full text-lg">
                  <FaBangladeshiTakaSign className="inline-block" />
                  {price}
                </span>
              </h1>

              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-[#F48724]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-[#F48724]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-[#F48724]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-[#F48724]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-[#F48724]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div className="bg-gray-100 p-5 border rounded-lg ">
                <p className="text-xl font-semibold text-black mb-3">
                  Product Highlights
                </p>
                <ul className="list-disc pl-8">
                  <li>Durable material, made for all terrains.</li>
                  <li>24 months warranty period.</li>
                  <li>Loved by thousands.</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-5 border rounded-lg mt-5">
                <p className="text-xl font-semibold text-black mb-3">Details</p>
                <p className=" pl-8">
                  The new and updated version of this sneaker is a remarkable
                  addition to your sneaker arsenal!
                </p>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5 ">
                <div className="flex-1 inline-flex items-center mb-3">
                  <div className="w-full text-sm flex items-center justify-between text-gray-600  ">
                    <div className="flex items-center ">
                      <span className="mr-3 text-lg font-semibold">Color:</span>
                      <ul className="flex flex-row justify-center items-center space-x-2">
                        {colors?.map((color, index) => (
                          <li key={index}>
                            <span
                              className={`block p-1 border-2 border-gray-900 rounded-full transition ease-in duration-300`}
                              onMouseOver={(e) => {
                                e.currentTarget.style.border = `2px solid ${color}`;
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.border = "2px solid #000";
                              }}
                              onClick={() => handleColorClick(color)}
                            >
                              <button
                                onClick={() => setIndex(index)}
                                className={`block w-4 h-4 rounded-full`}
                                style={{ backgroundColor: `${color}` }}
                              ></button>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center ">
                      <div className="flex ml-2">
                        <button
                          onClick={handleDecrement}
                          className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-l-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600"
                        >
                          -
                        </button>
                        <span className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4">
                          {quantity}
                        </span>
                        <button
                          onClick={handleIncrement}
                          className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-r-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8 ">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Size:
                </span>

                <div className="flex items-center mt-2">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      className={`bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 ${
                        selectedSize === size ? "bg-[#F48724] text-white" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex ">
                <button
                  onClick={handleAddToCart}
                  className="w-full text-white bg-[#F48724] border-0 py-2 px-6 focus:outline-none hover:bg-[#d36e10] rounded-lg text-center"
                >
                  Add to Cart
                </button>
              </div>
              <p className="mt-2 text-center">
                Free and quick shipping all over Dhaka city.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
