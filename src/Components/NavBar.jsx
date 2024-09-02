import React from "react";
import { Link } from 'react-router-dom';
import logo from "../images/logo-cyan.png";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar() {

  return (
    // <nav
    //   class="fixed top-0 z-10 fixed w-full max-w-full bg-white border rounded-none h-max border-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
    //   <div class="flex items-center justify-between ">

    //     <div class="flex items-center justify-center gap-5">
    //       <div class="fa-bars">
    //         <span class="text-3xl icon-bars">
    //           <FontAwesomeIcon icon={faBars} />
    //         </span>
    //       </div>

    //       <div class="flex items-center justify-center">
    //         <Link href="#"
    //           class="logo-title cursor-pointer py-1.5 text-cyan-deep">
    //           AIBIOMETRICS
    //         </Link>
    //         <div class="logo flex items-center justify-center">
    //           <img src={logo} alt="" class="object-cover pt-2" />
    //         </div>
    //       </div>
    //     </div>

    //     <div class="flex items-center gap-4">
    //       <div class='nav-items'>
    //         <ul class="flex gap-3 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
    //           <li class="nav-item flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 cursor-pointer relative" >
    //             <Link to="/" class="flex items-center text-lg">
    //               Accueil
    //             </Link>

    //             <span class="text-emerald-300">
    //               <FontAwesomeIcon icon={faChevronDown} />
    //             </span>

    //           </li>
    //           <li class="nav-item flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 relative">
    //             <Link to="/consumer" class="flex items-center text-lg text-nowrap">
    //               Know your customer
    //             </Link>
    //             <span class="text-emerald-300">
    //               <FontAwesomeIcon icon={faChevronDown} />
    //             </span>

    //           </li>
    //           <li class="nav-item  flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
    //             <Link href="#" class="flex items-center text-lg text-nowrap">
    //               AML Screenning
    //             </Link>
    //             <span class="text-emerald-300">
    //               <FontAwesomeIcon icon={faChevronDown} />
    //             </span>
    //           </li>
    //           <li class="nav-item flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
    //             <Link href="#" class="flex items-center text-lg">
    //               Pricing
    //             </Link>
    //             <span class="text-emerald-300">
    //               <FontAwesomeIcon icon={faChevronDown} />
    //             </span>
    //           </li>
    //           <li class="nav-item flex items-center justify-center gap-2 block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
    //             <Link href="#" class="flex items-center text-lg  text-nowrap">
    //               About Us
    //             </Link>
    //             <span class="text-emerald-300">
    //               <FontAwesomeIcon icon={faChevronDown} />
    //             </span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div class="">
    //       <div class=" flex items-center justify-center gap-x-1">
    //         <li class="flex items-center justify-center gap-2 block p-1 mr-2 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
    //           <span class=" text-2xl">
    //             <FontAwesomeIcon icon={faEarthAfrica} />
    //           </span>
    //           <Link href="#" class="flex items-center text-lg">
    //             FR
    //           </Link>
    //           <span class="text-emerald-300">
    //             <FontAwesomeIcon icon={faChevronDown} />
    //           </span>
    //         </li>
    //         <button
    //           class="rounded-lg bg-cyan-color  text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block nav-button"
    //           type="button">
    //           <span class="text-neutral-50">Demo</span>
    //         </button>
    //         <button
    //           class="rounded-lg bg-cyan-color text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block nav-button"
    //           type="button">
    //           <span class="text-neutral-50">Demo</span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    // <nav class="fixed top-0 z-10 fixed w-full max-w-full bg-white border rounded-none h-max border-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
    <nav className="bg-white fixed top-0 z-10 fixed w-full bg-white border rounded-none  border-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 ">
      <div className="mx-auto sm:px-6 lg:px-8 w-full">
        <div className="flex h-16 items-center justify-between w-full">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <div class="flex items-center justify-center">
                <Link href="#"
                  class="logo-title cursor-pointer py-1.5 text-cyan-deep">
                  AIBIOMETRICS
                </Link>
                <div class="logo flex items-center justify-center">
                  <img src={logo} alt="" class="object-cover pt-2" />
                </div>
              </div>
            </a>
          </div>

          <div class="nav-items">
            <nav aria-label="Global" class="">
              <ul className="flex items-center gap-6 text-sm">
                <li class="flex items-center justify-center gap-2">
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    Accueil
                  </a>
                  <span class="text-emerald-300">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </li>

                <li class="flex items-center justify-center gap-2">
                  <a className="text-gray-500 transition hover:text-gray-500/75 text-nowrap" href="#">
                    Know your customer
                  </a>
                  <span class="text-emerald-300">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </li>

                <li class="flex items-center justify-center gap-2">
                  <a className="text-gray-500 transition hover:text-gray-500/75 text-nowrap" href="#">
                    AML Screening
                  </a>
                  <span class="text-emerald-300">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </li>

                <li class="flex items-center justify-center gap-2">
                  <a className="text-gray-500 transition hover:text-gray-500/75 text-nowrap" href="#">
                    Pricing
                  </a>
                  <span class="text-emerald-300">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </li>

                <li class="flex items-center justify-center gap-2">
                  <a className="text-gray-500 transition hover:text-gray-500/75 text-nowrap" href="#">
                    About us
                  </a>
                  <span class="text-emerald-300">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-cyan-color px-5 py-2.5 text-sm font-medium text-white shadow"
                href="#"
              >
                Demo
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-cyan-color px-5 py-2.5 text-sm font-medium text-white"
                  href="#"
                >
                  Demo
                </a>
              </div>
            </div>

            <div className="menu-bars">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // </nav>
  );
}