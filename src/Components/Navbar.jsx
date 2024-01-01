import { LuSearch } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home </a></li>
                            <li><a>Products </a></li>
                            <li><a>Sign up </a></li>
                            <li><a>Log In </a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">Influencer products</a>
                </div>

                <div className="navbar-end">
                    <ul className="menu menu-horizontal hidden font-semibold  px-1  lg:flex  ">
                        <li><a>Home </a></li>
                        <li><a>Products </a></li>
                        <li><a>Sign up </a></li>
                        <li><a>Log In </a></li>
                    </ul>
                    <div className="pr-3 hidden lg:flex "><LuSearch></LuSearch></div>
                <div><AiOutlineShoppingCart size={20}></AiOutlineShoppingCart></div>
                </div>
              
            </div>
        </div>
    );
};

export default Navbar;