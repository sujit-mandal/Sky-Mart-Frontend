import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SocialLogin from "../components/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Footer from "./Footer";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser } = useContext(AuthContext);

  const handleLoginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Logged in successfully.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar></Navbar>
      </div>
      <section className="min-h-screen">
        <div
          className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
          style={{
            backgroundImage:
              "url('https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/curved-images/curved14.jpg')",
          }}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
          <div className=" container mx-auto z-10">
            <div className="flex flex-wrap justify-center -mx-3">
              <div className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 md:4/12 lg:w-5/12">
                <h1 className="mt-12 mb-4 text-5xl font-bold text-white">
                  Welcome Back!
                </h1>
                <p className="text-white text-xl w-[90%] mb-5 mx-auto">
                  Enter your email and password to sign in.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap mx-3 -mt-48 md:-mt-56 lg:-mt-48">
            <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-6/12 lg:w-4/12 xl:w-4/12">
              <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
                <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                  <h5 className="text-2xl font-medium">Sign in with</h5>
                </div>
                <SocialLogin></SocialLogin>
                <div className="flex-auto p-6">
                  <form onSubmit={handleLoginUser} role="form text-left">
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        className="text-sm focus:shadow leading-5 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-2 focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        name="password"
                        className="text-sm focus:shadow leading-5 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-2 focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Password"
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-md bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                      >
                        Sign In
                      </button>
                    </div>
                    <p className="mt-4 mb-0 leading-normal text-sm">
                      Don't have an account yet?
                      <a className="font-bold text-slate-700 ml-2">Sign Up</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Login;
