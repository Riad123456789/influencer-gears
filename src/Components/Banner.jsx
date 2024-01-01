import img from "../../public/images/logos/main-camera.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="flex gap-64 mt-20">
            <div className=" space-y-4 ml-6 mt-20">
                <h1 className="text-5xl font-bold">Start your Journey as <br />
                    Influencer</h1>
                <p className="text-sm font-semibold w-96 pb-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem vestibulum sed scelerisque eros. Lectus faucibus.</p>
                <button className=" text-white text-xs bg-[#E02C6D] px-5 py-2 rounded-full flex items-center gap-3">
                    Preebook now <FaArrowRightLong></FaArrowRightLong> </button>
            </div>
            <div className="border rounded-full p-3">
                <img className="  " src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;