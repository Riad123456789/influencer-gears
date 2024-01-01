import icon from "../../public/images/logos/Walmart.svg"
import icon1 from "../../public/images/logos/Amazon.svg"
import icon2 from "../../public/images/logos/Daraz.pk Logo.svg"
import icon3 from "../../public/images/logos/Ebay.svg"
import icon4 from "../../public/images/logos/Rakuten.svg"
import icon5 from "../../public/images/logos/Alibaba.svg"
import icon6 from "../../public/images/logos/Target.svg"

const Sponser = () => {
    return (
        <div className="grid lg:grid-cols-7 mt-6 pt-5 pb-1   border-b-2 border-t-2 w-[85%] mx-auto">


            <img src={icon} alt="" />
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon5} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
            <img src={icon6} alt="" />
        </div>
    );
};

export default Sponser;