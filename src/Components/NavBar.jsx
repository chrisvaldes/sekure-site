import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from 'react-router-dom';
import logo from "../images/logo-cyan.png";

export default function NavBar() {

  return (

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
                  <a className="text-nav-color text-nav font-weight-nav font-family-nav  transition hover:text-gray-500/75 text-nowrap" href="#">
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
                  <a className="text-nav-color text-nav font-weight-nav font-family-nav  transition hover:text-gray-500/75 text-nowrap" href="#">
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