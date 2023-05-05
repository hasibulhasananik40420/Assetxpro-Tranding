import { useEffect, useState } from "react";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import DesktopSidebar from "./DesktopSidebar";
const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
    <div className="w-full justify-end flex bg-black py-2">
      <button className="bg-[#0000FF] px-6 rounded-[20px] border border-white mr-20 py-2 text-white font-Inter font-medium ">LOGIN</button>
    </div>
      <div className="">
        <nav className={`bg-[#055726] mt-[60px] z-50 w-full px-3 lg:relative ${scrollPosition > 0 ? 'navbar-bg' : 'primary-navbar'}`}>
          <div className=" font-Cuprum py-3  text-white   max-w-screen   max-w-container mx-auto">
            {sidebar && <DesktopSidebar setSidebar={setSidebar} />}
            <div className="flex justify-between items-center">
              {/* Logo Here */}
              <div className="flex items-center">
                <img src="https://i.ibb.co/HDSzxxT/Screenshot-5-removebg-preview.png" alt="logo" />
                <h1 className="text-[#FFFFFF] text-[40px]">ASSETXPRO</h1>
              </div>

              <div>
                {/* Desktop Menu */}
                <DesktopMenu setSidebar={setSidebar} />

                {/* MobileMenu */}
                <div className="transition-transform duration-1000 ease-in">
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;