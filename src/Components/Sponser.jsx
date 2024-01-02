import icon from "../../public/images/logos/Walmart.svg"
import icon1 from "../../public/images/logos/Amazon.svg"
import icon2 from "../../public/images/logos/Daraz.pk Logo.svg"
import icon3 from "../../public/images/logos/Ebay.svg"
import icon4 from "../../public/images/logos/Rakuten.svg"
import icon5 from "../../public/images/logos/Alibaba.svg"
import icon6 from "../../public/images/logos/Target.svg"

const Sponser = () => {
    return (
        <div className="flex flex-wrap gap-9 lg:gap-16 px-1  justify-center items-center  mt-6 pt-5 pb-2   lg:border-b-2 lg:border-t-2 lg:w-[85%] mx-auto">
            <img className="w-[18%] md:w-[16%] lg:w-[7%] " src={icon} alt="" />
            <img className="w-[18%] md:w-[16%] lg:w-[7%] " src={icon1} alt="" />
            <img className="w-[18%] md:w-[16%] lg:w-[7%] " src={icon2} alt="" />
            <img className="w-[18%] md:w-[16%] lg:w-[7%] " src={icon5} alt="" />
            <img className="w-[18%] md:w-[16%] lg:w-[7%] " src={icon3} alt="" />
            <img className="w-[18%] md:w-[16%] lg:w-[7%] " src={icon4} alt="" />
            <img className="w-[18%] md:w-[16%] lg:w-[7%] " src={icon6} alt="" />
        </div>
    );
};

export default Sponser;