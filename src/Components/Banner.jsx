import img from "../../public/images/logos/main-camera.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className=" flex flex-col-reverse  mt-10 lg:flex lg:flex-row   lg:gap-64  lg:mt-14">
            <div className=" space-y-4 ml-6 mt-10">
                <h1 className=" md:text-center  text-4xl md:text-5xl font-bold ">Start your Journey as</h1>
                <h1 className="  ml-24 md:ml-56 lg:ml-0 text-4xl md:text-5xl font-bold ">Influencer</h1>

                <p className=" w-72 text-center mx-auto lg:ml-0  text-sm font-semibold lg:text-left   md:w-96 pb-2 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem vestibulum sed scelerisque eros. Lectus faucibus.</p>

                <button className="ml-28 md:ml-[39%] lg:ml-0 text-white text-xs bg-[#E02C6D] px-5 py-2 rounded-full flex items-center gap-3">
                    Preebook now <FaArrowRightLong></FaArrowRightLong> </button>
            </div>


            <div className=" md:ml-32 lg:ml-0">
                <img className="border-4 border-purple-100  rounded-full p-5 " src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;