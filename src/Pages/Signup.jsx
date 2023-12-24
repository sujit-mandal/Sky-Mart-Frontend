import { updateProfile } from "firebase/auth";
import Navbar from "../components/Navbar";
import SocialLogin from "../components/SocialLogin";
import auth from "../Firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Footer from "./Footer";
const Signup = () => {
  const navigate = useNavigate();
  const { createUser, logOut } = useContext(AuthContext);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // if (password.length < 6) {
    //   toast.error("Password must be at least 6 characters long");
    //   return;
    // } else if (
    //   !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/.test(password)
    // ) {
    //   toast.error(
    //     "Password should be contain at least a Capital letter & Special character."
    //   );
    //   return;
    // } else {
    // }

    createUser(email, password)
      .then((res) => {})
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <>
      <Navbar></Navbar>
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
                  Welcome!
                </h1>
                <p className="text-white text-xl w-[90%] mb-5 mx-auto">
                  Use these awesome forms to login or create new account in Sky
                  Mart for free.
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
                  <h5 className="text-2xl font-medium">Sign Up with</h5>
                </div>
                <SocialLogin></SocialLogin>
                <div className="flex-auto p-6">
                  <form onSubmit={handleCreateUser} role="form text-left">
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        className="text-sm focus:shadow leading-5 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-2 focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                        placeholder="Name"
                      />
                    </div>
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
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="remember_me"
                        id="remember_me"
                        className="mr-2 focus:ring-0 rounded"
                      />
                      <label className="text-gray-700">
                        I accept the
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                        >
                          Terms
                        </a>
                        and
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                        >
                          Privacy policy
                        </a>
                      </label>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-md bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
                      >
                        Sign up
                      </button>
                    </div>
                    <p className="mt-4 mb-0 leading-normal text-sm">
                      Already have an account?
                      <a className="font-bold text-slate-700 ml-2">Sign in</a>
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

export default Signup;
