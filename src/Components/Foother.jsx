import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
const Foother = () => {
    return (
        <div className="mt-20 text-center bg-[#0A0826] py-16 text-white space-y-1">
            <h1 className="text-xl font-bold">Influencer products</h1>
            <p className="text-xs">Copyright © 2020  influencer products</p>
            <p className="text-xs">All rights reserved</p>
            <div className="text-white flex gap-4 w-[24%] md:w-[15%] lg:w-[8%]  pt-3 mx-auto" >
                <FaInstagram></FaInstagram>
                <FaDribbble></FaDribbble>
                <FaTwitter></FaTwitter>
                <FaYoutube></FaYoutube>
            </div>
        </div>
    );
};

export default Foother;