import { useEffect, useState } from "react";
import bgImg from "../assets/bg.jpg";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import Footer from "./Footer";

const Home = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/shoes").then((res) => {
      setShoes(res.data);
    });
  }, []);

  return (
    <div className="">
      <header
        className="flex items-center justify-center w-full min-h-[60vh] mb-12 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <span className="absolute top-0 left-0 w-full min-h-[60vh] bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-50"></span>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="p-5 z-10 text-2xl text-white">
          <p className="text-center">Your Journey in Style Begins Here</p>
          <h1 className="text-5xl text-center mx-auto font-bold mb-5 leading-tight w-3/4">
            Discover the World of Exceptional
            <span className="text-6xl text-yellow-300"> Footwear</span>
          </h1>
        </div>
      </header>
      <div className="max-w-[1680px] mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-7 gap-y-16">
        {shoes?.map((shoe) => (
          <ProductCard key={shoe._id} shoe={shoe}></ProductCard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
