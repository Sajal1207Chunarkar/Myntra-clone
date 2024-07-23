
import { AiOutlineUser } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsBagFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const numberOfItemsInBag = useSelector(state=>state.bag.noOfItemsInBag)
  return (
    <div className="w-screen flex flex-row items-center xl:justify-between shadow-md px-10">
      {/* left */}
      <div className="flex flex-row items-center">
        <Link to={'/home'}>
          <img src="Images/Myntra-icon-logo.png" alt="" className="w-12" />
        </Link>
        <div className="flex flex-row items-center w-[680px] ml-5">
          <p className="text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white  hover:cursor-pointer hover:border-b-red-700 transiton duration-100  ">MEN</p>
          <p className="text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white  hover:cursor-pointer hover:border-b-yellow-700 transiton duration-100   ">WOMEN</p>
          <p className="text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white  hover:cursor-pointer hover:border-b-blue-700 transiton duration-100  " >KIDS</p>
          <p className="text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white  hover:cursor-pointer hover:border-b-green-700 transiton duration-100  ">HOME & LIVING</p>
          <p className="text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white  hover:cursor-pointer hover:border-b-pink-700 transiton duration-100  ">BEAUTY</p>
          <p className="text-xs font-bold text-slate-700 p-6 py-8 border-b-4 border-white  hover:cursor-pointer hover:border-b-orange-700 transiton duration-100  "><sup>NeW</sup>STUDIO</p>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center border-4 w-96 ml-3 p-2.5 " >
          <CiSearch />
          <input type="text" placeholder="Search for profucts.....  " />
        </div>
        <div className="flex flex-row items-center">
          <div className=" flex flex-col items-center pl-10 text-sm">
            <AiOutlineUser />
            <p>PROFILE</p>
          </div>
          <div className="flex flex-col items-center pl-8 mr-4 text-sm">
            <CiHeart />
            <p>WISHLIST</p>
          </div>
          <Link to={'/cart'}>
            <div className="flex flex-col items-center m-4  relative  text-sm">
              <BsBagFill />
              <div className=''>
                <p>BAG</p>
                {numberOfItemsInBag === 0 ||
                  <p className="bg-red-700 text-sm font-bold p-1 rounded-full
             text-white absolute left-4 top-[-15px]">
                    {numberOfItemsInBag}</p>
                }
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
