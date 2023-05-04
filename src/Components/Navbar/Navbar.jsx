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
  <div>
     <div>
     <nav className={`bg-[#055726] z-50 w-full px-3 lg:relative ${scrollPosition > 0 ? 'navbar-bg' : 'primary-navbar'}`}>
      <div className=" font-Cuprum py-3  text-white   max-w-screen   max-w-container mx-auto">
        {sidebar && <DesktopSidebar setSidebar={setSidebar} />}
        <div className="flex justify-between items-center">
          {/* Logo Here */}
          <div>
            <h1>logo</h1>
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
  </div>
  );
};

export default Navbar;