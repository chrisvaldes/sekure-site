import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../images/logo-cyan.png";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null); // Référence pour le bouton de menu

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleAccordion(null)

  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleClickOutside = (event) => {
    // Vérifie si le clic provient de la sidebar ou du bouton de menu
    if (
      sidebarRef.current && !sidebarRef.current.contains(event.target) &&
      menuButtonRef.current && !menuButtonRef.current.contains(event.target)
    ) {
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
      <nav className="bg-white fixed top-0 z-10 w-full border rounded-none border-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 ">
        <div className="mx-auto sm:px-6 lg:px-8 w-full">
          <div className="flex h-16 items-center justify-between w-full">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <div className="nav-logo flex items-center justify-center">
                  <Link to="#" className="logo-title cursor-pointer py-1.5 text-cyan-deep">
                    AIBIOMETRICS
                  </Link>
                  <div className="logo flex items-center justify-center">
                    <img src={logo} alt="" className="object-cover pt-2" />
                  </div>
                </div>
              </a>
            </div>

            <div className="nav-items">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li class="flex items-center justify-center gap-2">
                    <Link className="text-nav-color text-nav font-weight-nav font-family-nav transition hover:text-gray-500/75" to="/">
                      Accueil
                    </Link>
                    <span class="text-emerald-300">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </li>

                  <li class="flex items-center justify-center gap-2">
                    <Link className="text-nav-color text-nav font-weight-nav font-family-nav  transition hover:text-gray-500/75 text-nowrap" to="/customer">
                      Know your customer
                    </Link>
                    <span class="text-emerald-300">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </li>

                  <li class="flex items-center justify-center gap-2">
                    <a className="text-nav-color text-nav font-weight-nav font-family-nav  transition hover:text-gray-500/75 text-nowrap" href="/screening">
                      AML Screening
                    </a>
                    <span class="text-emerald-300">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </li>

                  <li class="flex items-center justify-center gap-2">
                    <Link className="text-nav-color text-nav font-weight-nav font-family-nav  transition hover:text-gray-500/75 text-nowrap" to="/pricing">
                      Pricing
                    </Link>
                    <span class="text-emerald-300">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </li>

                  <li class="flex items-center justify-center gap-2">
                    <Link className="text-nav-color text-nav font-weight-nav font-family-nav  transition hover:text-gray-500/75 text-nowrap" to="/about">
                      About us
                    </Link>
                    <span class="text-emerald-300">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="nav-demo-button hidden sm:flex sm:gap-4">
                <a className="rounded-md bg-cyan-color px-5 py-2.5 text-sm font-medium text-white shadow" href="#">
                  Demo
                </a>
              </div>

              <div className="menu-bars" ref={menuButtonRef} onClick={toggleSidebar}>
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div>
        <nav
          id="sidebar"
          ref={sidebarRef}
          className={`fixed containerSidebarNav left-0 bottom-0 flex w-5/12 sm:w-4/12 md:w-3/12 px-2 transform flex-col overflow-y-auto   pt-20 pb-8 h-full transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >

          {/* <div className="px-4 pb-6">
            <button onClick={() => toggleAccordion(0)} className="flex justify-between items-center w-full text-gray-50 rounded py-3 pl-3 pr-4 hover:bg-gray-600">
              <span>Accueil</span>
              <span>{openAccordion === 0 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
            </button>
            {openAccordion === 0 && (
              <ul className="pl-6 text-left">
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

          <div className="px-4 pb-6">
            <button onClick={() => toggleAccordion(1)} className="flex justify-between items-center w-full text-gray-50 rounded py-3 pl-3 pr-4 hover:bg-gray-600">
              <span>Know your customer</span>
              <span>{openAccordion === 1 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
            </button>
            {openAccordion === 1 && (
              <ul className="pl-6 text-left">
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

          <div className="px-4 pb-6">
            <button onClick={() => toggleAccordion(2)} className="flex justify-between items-center w-full text-gray-50 rounded py-3 pl-3 pr-4 hover:bg-gray-600">
              <span>AML Screening</span>
              <span>{openAccordion === 2 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
            </button>
            {openAccordion === 2 && (
              <ul className="pl-6 text-left">
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

          <div className="px-4 pb-6">
            <button onClick={() => toggleAccordion(3)} className="flex justify-between items-center w-full text-gray-50 rounded py-3 pl-3 pr-4 hover:bg-gray-600">
              <span>Pricing</span>
              <span>{openAccordion === 3 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
            </button>
            {openAccordion === 3 && (
              <ul className="pl-6 text-left">
                <li>
                  <a className="block text-gray-50 hover:bg-gray-600 rounded py-2" href="#ex1">...</a>
                </li>
                <li>
                  <a className="block text-gray-50 hover:bg-gray-600 rounded py-2" href="#ex2">...</a>
                </li>
              </ul>
            )}
          </div>

          <div className="px-4 pb-6">
            <button onClick={() => toggleAccordion(4)} className="flex justify-between items-center w-full text-gray-50 rounded py-3 pl-3 pr-4 hover:bg-gray-600">
              <span>About Us</span>
              <span>{openAccordion === 4 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
            </button>
            {openAccordion === 4 && (
              <ul className="pl-6 text-left">
                <li>
                  <a className="block text-gray-50 hover:bg-gray-600 rounded py-2" href="#ex1">...</a>
                </li>
                <li>
                  <a className="block text-gray-50 hover:bg-gray-600 rounded py-2" href="#ex2">...</a>
                </li>
              </ul>
            )}
          </div> */}
          <li class="flex items-center justify-between gap-2 py-2 px-3 rounded-lg hover:bg-cyan-200">
            <Link className="flex items-center justify-between w-full text-nav-color text-nav font-weight-nav font-family-nav transition hover:text-gray-500/75" to="/">
              <span>Accueil</span>
              <span class="text-emerald-300">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </Link>
          </li>
          <li class="flex items-center justify-between gap-2 py-2 px-3 rounded-lg hover:bg-cyan-200">
            <Link className="flex items-center justify-between w-full text-nav-color text-nav font-weight-nav font-family-nav transition hover:text-gray-500/75" to="/customer">
              <span>Know your customer</span>
              <span class="text-emerald-300">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </Link>
          </li>
          <li class="flex items-center justify-between gap-2 py-2 px-3 rounded-lg hover:bg-cyan-200">
            <Link className="flex items-center justify-between w-full text-nav-color text-nav font-weight-nav font-family-nav transition hover:text-gray-500/75" to="/screening">
              <span>AML Screening</span>
              <span class="text-emerald-300">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </Link>
          </li>
          <li class="flex items-center justify-between gap-2 py-2 px-3 rounded-lg hover:bg-cyan-200">
            <Link className="flex items-center justify-between w-full text-nav-color text-nav font-weight-nav font-family-nav transition hover:text-gray-500/75" to="/pricing">
              <span>Pricing</span>
              <span class="text-emerald-300">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </Link>
          </li>
          <li class="flex items-center justify-between gap-2 py-2 px-3 rounded-lg hover:bg-cyan-200">
            <Link className="flex items-center justify-between w-full text-nav-color text-nav font-weight-nav font-family-nav transition hover:text-gray-500/75" to="/about">
              <span>About Us</span>
              <span class="text-emerald-300">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </Link>
          </li>
        </nav>
      </div>

      <main>
        {/* Your content goes here */}
      </main>
    </div>
  );
}