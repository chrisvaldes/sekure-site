import React, { useEffect, useState, useRef } from 'react';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav id="navbar" className="fixed top-0 z-40 flex w-full flex-row justify-end bg-gray-700 px-4 sm:justify-between">
        <button 
          id="btnSidebarToggler" 
          type="button" 
          className="py-4 text-2xl text-white hover:text-gray-200"
          onClick={toggleSidebar}
        >
          <svg id="navClosed" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`h-8 w-8 ${isSidebarOpen ? 'hidden' : 'block'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg id="navOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`h-8 w-8 ${isSidebarOpen ? 'block' : 'hidden'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      {/* Sidebar */}
      <div id="containerSidebar" className="z-40">
        <nav 
          id="sidebar" 
          ref={sidebarRef}
          className={`fixed left-0 bottom-0 flex w-100 transform flex-col overflow-y-auto bg-gray-700 pt-20 pb-8 h-full transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="px-4 pb-6"> 
            <ul className="mb-8 text-sm font-medium">
              <li>
                <a className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#homepage">
                  <span className="select-none">Homepage</span>
                </a>
              </li>
              <li>
                <a className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600" href="#link1">
                  <span className="select-none">link1</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Accordéon pour les Termes et Conditions */}
          <div className="px-4 pb-6">
            <button onClick={() => toggleAccordion(0)} className="flex justify-between items-center w-full text-gray-50 rounded py-3 pl-3 pr-4 hover:bg-gray-600">
              <span>Legal</span>
              <span>{openAccordion === 0 ? '-' : '+'}</span>
            </button>
            {openAccordion === 0 && (
              <ul className="pl-6">
                <li>
                  <a className="block text-gray-50 hover:bg-gray-600 rounded py-2" href="#tc">Terms and Conditions</a>
                </li>
                <li>
                  <a className="block text-gray-50 hover:bg-gray-600 rounded py-2" href="#privacy">Privacy Policy</a>
                </li>
                <li>
                  <a className="block text-gray-50 hover:bg-gray-600 rounded py-2" href="#imprint">Imprint</a>
                </li>
              </ul>
            )}
          </div>

          {/* Accordéon pour d'autres liens */}
          <div className="px-4 pb-6">
            <button onClick={() => toggleAccordion(1)} className="flex justify-between items-center w-full text-gray-50 rounded py-3 pl-3 pr-4 hover:bg-gray-600">
              <span>More Links</span>
              <span>{openAccordion === 1 ? '-' : '+'}</span>
            </button>
            {openAccordion === 1 && (
              <ul className="pl-6">
                <li>
                  <a className="block text-gray-50 hover:bg-gray-600 rounded py-2" href="#ex1">...</a>
                </li>
                <li>
                  <a className="block text-gray-50 hover:bg-gray-600 rounded py-2" href="#ex2">...</a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>

      <main>
        {/* Your content goes here */}
      </main>
    </div>
  );
}

export default SideBar;