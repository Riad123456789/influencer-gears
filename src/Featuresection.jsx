import img from "../public/images/logos/gear.png"
import { FaArrowRightLong } from "react-icons/fa6";
const Featuresection = () => {
    return (
        <div className="flex flex-col-reverse md:mt-20 mb-5 w-[85%] mx-auto items-center gap-9 md:gap-16 lg:gap-32 md:flex-col-reverse lg:flex-row ">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="space-y-4  w-[100%] md:w-[100%]  lg:w-[50%] text-center md:text-center lg:text-left ">
                <h1 className="text-xl  md:text-4xl font-bold">Featured products at one place</h1>
                <p className=" text-xs md:text-sm w-[75%] mx-auto lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <button className="ml-28 md:ml-[39%] lg:ml-0 text-white text-xs bg-[#E02C6D] px-5 py-2  flex items-center gap-3 font-bold">
                    join now <FaArrowRightLong></FaArrowRightLong> </button>
            </div>
        </div>
    );
};

export default Featuresection;