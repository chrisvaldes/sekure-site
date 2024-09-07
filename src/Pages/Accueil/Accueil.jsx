import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import arrow from "../../images/arrow.png";
import femme2 from "../../images/femme2.png";
import world from "../../images/world-bg.png";
import cniPassport from "../../images/cni-passport.png"
import grandMere from "../../images/grand-mère.png";
import groupGirl from "../../images/group-girl.png"

export default function Accueil() {
  return (
    <div className='flex w-full'>
      <div className='main-Contain'>

        <section>
          <NavBar />
        </section>

        <section class="main-section pt-20 w-full">
          <div class="section-faster " >
            <div class="pt-10 pl-12 md:pl-20 lg:pl-24">
              <div class="flex identity-button">
                <button class="text-nowrap h-button-first w-button-first rounded-md bg-white text-cyan-deep py-3 px-5 text-sub-content font-weight-nav font-family-nav my-2 flex items-center justify-center">
                  THE IDENTITY VERIFICATION PLATFORM
                </button>
              </div>
              <div class="title text-title font-weight-title font-satoshi leading-normal text-center sm:text-left md:text-left lg:text-left font-bold text-cyan-color">
                <span class="text-cyan-deep">Faster, more accurate, and <br /> built for you :</span>
                <span>fraud prevention <br /> done right</span>
              </div>
              <div class="title-content text-cyan-deep text-left text-content font-weight-content font-family-content leading-normal-1 mt-5">
                The only AI-powered identity verification platform form fraud prevention, compliance, and <br />
                safeguarding your customers. Build trusted digital communities, improve UX, and drive <br />
                growth for your business with Veriff.
              </div>
              <div class="flex group-button mt-5 gap-10 ">
                <button class="text-nowrap rounded-md bg-cyan-deep py-4 px-5 rounded-md text-white  h-button-height w-button-width text-sm flex items-center justify-center">Commencer gratuitement</button>
                <button class="text-nowrap rounded-md bg-white py-4 px-20 rounded-md text-cyan-deep font-semibold  text-sm">Contacter</button>
              </div>
              <div >
                <h2 class="title-1 text-cyan-deep text-title-1 font-medium font-satoshi leading-normal text-left font-bold py-20 ">
                  Make identity verification quick and easy by <br />
                  helping genuine users get verified the first time, <br />
                  while keeping fraudsters out
                </h2>
              </div>
            </div>
          </div>

          {/* Grid section */}
          <div class='content-grid px-20'>
            <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 rounded-2xl bg-white items-center justify-center gap-y-5 py-10 px-5">
              <div class="flex items-center justify-center gap-x-5  ">
                <div class="flex items-center justify-center bg-gray-200 p-3 sm:p-3 lg:p-5 rounded-full">
                  <div class="rounded-full bg-cyan-color px-1 sm:px-1 md:px-1 lg:px-2 lg:py-1 flex items-center justify-center">
                    <span class="icon text-white">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                </div>
                <div class="text-left">
                  <div class="title-4 font-semibold text-title-4 font-weight-title-4 font-satoshi-4">Large Couverture en Afrique</div>
                  <div class="title-content text-content-title-4"> The only AI-powered identity verification</div>
                </div>
              </div>
              <div class="flex items-center justify-center gap-x-5   ">
                <div class="flex items-center justify-center bg-gray-200 p-3 sm:p-3 lg:p-5 rounded-full">
                  <div class="  rounded-full bg-cyan-color px-1 sm:px-1 md:px-1 lg:px-2 lg:py-1 bg-cyan-color flex items-center justify-center">
                    <span class="icon text-white">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                </div>
                <div class="text-left">
                  <div class="font-semibold title-4 text-title-4 font-weight-title-4 font-satoshi-4">Adverse media screening</div>
                  <div class="title-content text-content-title-4">The only AI-powered identity verification</div>
                </div>
              </div>
              <div class="flex items-center justify-center gap-x-5  ">
                <div class="flex items-center justify-center bg-gray-200 p-3 sm:p-3 lg:p-5 rounded-full">
                  <div class="  rounded-full bg-cyan-color px-1 sm:px-1 md:px-1 lg:px-2 lg:py-1 bg-cyan-color flex items-center justify-center">
                    <span class="icon text-white">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                </div>
                <div class="text-left">
                  <div class="font-semibold title-4 text-title-4 font-weight-title-4 font-satoshi-4">Enhanced due diligence (EDD) : </div>
                  <div class="title-content text-content-title-4">The only AI-powered identity verification</div>
                </div>
              </div>
              <div class="flex items-center justify-center gap-x-5  ">
                <div class="flex items-center justify-center bg-gray-200 p-3 sm:p-3 lg:p-5 rounded-full">
                  <div class="  rounded-full bg-cyan-color px-1 sm:px-1 md:px-1 lg:px-2 lg:py-1 bg-cyan-color flex items-center justify-center">
                    <span class="icon text-white">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                </div>
                <div class="text-left">
                  <div class="font-semibold title-4 text-title-4 font-weight-title-4 font-satoshi-4">PEP Screening</div>
                  <div class="title-content text-content-title-4">The only AI-powered identity verification</div>
                </div>
              </div>
              <div class="flex items-center justify-center gap-x-5  ">
                <div class="flex items-center justify-center bg-gray-200 p-3 sm:p-3 lg:p-5 rounded-full">
                  <div class="  rounded-full bg-cyan-color px-1 sm:px-1 md:px-1 lg:px-2 lg:py-1 bg-cyan-color flex items-center justify-center">
                    <span class="icon text-white">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                </div>
                <div class="text-left">
                  <div class="font-semibold title-4 text-title-4 font-weight-title-4 font-satoshi-4">Ongoing monitoring</div>
                  <div class="title-content text-content-title-4">The only AI-powered identity verification</div>
                </div>
              </div>
              <div class="flex items-center justify-center gap-x-5  ">
                <div class="flex items-center justify-center bg-gray-200 p-3 sm:p-3 lg:p-5 rounded-full">
                  <div class="  rounded-full bg-cyan-color px-1 sm:px-1 md:px-1 lg:px-2 lg:py-1 bg-cyan-color flex items-center justify-center">
                    <span class="icon text-white">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                </div>
                <div class="text-left">
                  <div class="font-semibold title-4 text-title-4 font-weight-title-4 font-satoshi-4">Sanction screening</div>
                  <div class="title-content text-content-title-4">The only AI-powered identity verification</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*
          Heads up! 👋

          This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
        */}

        <section class="">
          <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="make-selfie flex flex-wrap items-center justify-around  gap-y-8">
              <div class=" mx-10">
                <h2 class="text-cyan-deep text-left  font-semibold text-title-3 font-weight-title-3 font-satoshi-2 leading-normal mb-5 font-bold w-full">
                  Acceptez un maximum de docuements <br />
                  pour vérifier les identité de vos utilisateurs dans leur region
                 </h2>
                <div class="text-left text-content font-weight-content font-family-content leading-loose font-semibold mb-10">
                  Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                  avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                  vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                  inexistants et des frais de
                </div>
                <div class="grid grid-cols-2 items-center justify-center gap-10">
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                </div>
              </div>

              <div className=" relative flex flex-col items-center justify-center md:flex-col lg:flex-col items-center justify-center gap-10 sm:flex-col">
                <div
                  className="rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color w-width-card-vert h-height-card-vert"
                  href="#"
                >

                </div>

                <div
                  className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color  w-width-card-vert h-height-card-vert"
                  href="#"
                >
                  <img src={cniPassport} alt="" className='absolute -top-12 right-0'/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*
          Heads up! 👋

          This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
        */}

        <section class="">
          <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="flex flex-wrap-reverse items-center justify-around  gap-y-8 gap-x-8">
              <div className=" relative flex items-center justify-center gap-10">
                <div
                  className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color w-width-card-horiz h-height-card-horiz"
                  href="#"
                >

                </div>

                <div
                  className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color  w-width-card-horiz h-height-card-horiz"
                  href="#"
                >

                </div>
                <img src={grandMere} alt="" className='absolute -top-28 left-10 grandMere'/>
              </div>
              <div >
                <h2 class="text-cyan-deep text-left  font-semibold text-title-3 font-weight-title-3 font-satoshi-2 leading-normal mb-5 font-bold w-full">
                  Prendre des selfies pour vérifier <br /> l'authenticité</h2>
                <div class="text-left text-content font-weight-content font-family-content leading-loose font-semibold mb-10">
                  Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                  avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                  vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                  inexistants et des frais de
                </div>
                <div class="grid grid-cols-2 items-center justify-center gap-10">
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/*
          Heads up! 👋

          This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
        */}

        <section class="">
          <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="flex flex-wrap items-center justify-around  gap-y-8  ">
              <div class=" mx-10">
                <h2 class="text-cyan-deep text-left  font-semibold text-title-3 font-weight-title-3 font-satoshi-2 leading-normal mb-5 font-bold w-full">
                  Prendre des selfies pour vérifier <br /> l'authenticité</h2>
                <div class="text-left text-content font-weight-content font-family-content leading-loose font-semibold mb-10">
                  Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                  avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                  vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                  inexistants et des frais de
                </div>
                <div class="grid grid-cols-2 items-center justify-center gap-10">
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-content-title-3 font-semibold">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-col lg:flex-col items-center justify-center gap-10 sm:flex-col">
                <div
                  className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color w-width-card-vert h-height-card-vert"
                  href="#"
                >

                </div>

                <div
                  className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color  w-width-card-vert h-height-card-vert"
                  href="#"
                >
                  <img src={groupGirl} alt="" className='absolute -top-5 -left-5 groupGirl'/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* Grid section */}
          <div class="bg-cyan-deep rounded-3xl py-10 px-5 mx-20">

            <div class="title-1 text-title-1 font-weight-title font-satoshi leading-normal font-bold text-cyan-color">
              With Aibiometrics, anonymous strangers easyli <br />
              become your trustworthy users
            </div>

            <div class="text-content-title-3  text-white py-5">
              Orchestrate identity verification checks, code-free. Place checks at any stage customer journey for top anti-fraud protection and pass rates
              worldwide. Orgestrate identity verification
            </div>

            <div class="card-anonymously gap-y-10 flex items-center justify-center">
              <div class="sub-card-anonymously flex flex-col items-center justify-center bg-cyan-color rounded-2xl ">
                <div class=" text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-emerald-800 pb-2">
                  6 secs
                </div>
                <div class=" text-sm sm:text-sm md:text-md lg:text-lg font-semibold">
                  temps moyen de <br /> validation
                </div>
              </div>

              <div class="sub-card-anonymously flex flex-col items-center justify-center bg-cyan-color rounded-2xl ">
                <div class=" text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-cyan-deep pb-2">
                  95%
                </div>
                <div class=" text-sm sm:text-sm md:text-md lg:text-lg font-semibold">
                  Verified on the first try
                </div>
              </div>

              <div class="sub-card-anonymously flex flex-col items-center justify-center bg-cyan-color rounded-2xl ">
                <div class=" text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-cyan-deep pb-2">
                  11.5K+
                </div>
                <div class=" text-sm sm:text-sm md:text-md lg:text-lg font-semibold">
                  Documents covered
                </div>
              </div>

              <div class="sub-card-anonymously flex flex-col items-center justify-center bg-cyan-color rounded-2xl ">
                <div class=" text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-cyan-deep pb-2">
                  200 +
                </div>
                <div class=" text-sm sm:text-sm md:text-md lg:text-lg font-semibold">
                  pays couverts
                </div>
              </div>

              <div class="sub-card-anonymously flex flex-col items-center justify-center bg-cyan-color rounded-2xl ">
                <div class=" text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-cyan-deep pb-2">
                  95%
                </div>
                <div class=" text-sm sm:text-sm md:text-md lg:text-lg font-semibold">
                  Verified on the first try
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white">
          <div class="text-left text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-deep ml-20 sm:ml-20 md:ml-20 lg:ml-40  pt-10">
            <span class="">
              Tous les outils qu'il vous faut pour proteger <br />
              votre plateforme de la fraude
            </span>
          </div>
          <div>
            <ul class="flex mini-nav-items items-center justify-around bg-emerald-100 rounded-full my-10">
              <li class="text-xl py-5 mini-nav-item">
                <a href="">Identity Verification</a>
              </li>
              <li class="text-xl py-5">
                <a href="">Know Your Customer</a>
              </li>
              <li class="text-xl py-5">
                <a href="">Biometric Verification</a>
              </li>
              <li class="text-xl py-5">
                <a href="">Fraud Mitigation</a>
              </li>
            </ul>


            <div class="flex flex-wrap items-center justify-center gap-16 pb-10 lg:pb-16 px-10">
              <div class="flex items-center justiy-around gap-10">
                <div class="">
                  <img src={femme2} alt="" />
                </div>
              </div>
              <div class=" ">
                <h2 class="text-cyan-deep text-left  text-2xl sm:text-2xl md:text-3xl mb-5 font-semibold">
                  Tous les outils qu'il vous faut pour proteger <br /> votre plateforme de la fraude</h2>
                <div class="text-left mb-10">
                  Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                  avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                  vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                  inexistants et des frais de
                </div>
                <div class="grid grid-cols-2 gap-5 items-center justify-center">
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left text-xm">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="flex items-center justify-center small-circle-check rounded-full bg-cyan-color z-100">
                      <span class="icon text-white p-2">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </div>
                    <div class="text-left">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap items-center justify-center mt-10 mb-20 gap-10">
                  <button class="text-nowrap rounded-md bg-cyan-color py-4 px-10 rounded-md text-white font-semibold">Commencer</button>
                  <button class="text-nowrap rounded-md bg-cyan-color py-4 px-10 rounded-md text-white font-semibold">Commencer</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="world-section px-20   " style={{ backgroundImage: `url(${world})`, backgroundPosition: "top right", backgroundRepeat: "no-repeat" }}>

          <div class="">
            <div class=" flex pt-40 sm:pt-40 md:pt-40 lg:pt-80">
              <button class="text-nowrap h-button-first w-button-first rounded-md bg-white text-cyan-deep py-3 px-5 text-sub-content font-weight-nav font-family-nav my-2 flex items-center justify-center">THE IDENTITY VERIFICATION PLATFORM</button>
            </div>
            <div class="world-title text-title-3 font-weight-title-3 font-satoshi-3 leading-normal text-left font-bold text-cyan-color mt-5 mb-10">
              <span class="text-cyan-deep">Des </span>
              <span>méthodes </span><span class="text-cyan-deep">De </span>
              <span>vérification </span>
              <span class="text-cyan-deep">d'identité <br /> adaptées à </span>
              <span> l'Afrique</span>
              <span class="text-cyan-deep"> et du monde entier</span>

            </div>
            <div className='text-content text-left font-weight-content font-family-content leading-loose'>
              Orchestration identity checks, code-free. Place checks at any stage of the <br />
              customer journey for top anti-fraud protection and pass rates worldwide. Orgestration
            </div>
          </div>

          <div class="world-group">
            <div class="text-cyan-deep text-title-3 font-weight-title-3 font-satoshi-3 leading-normal font-bold text-left my-10">
              <span>Tous les outils qu'il vous faut pour </span> <span class="text-cyan-color" > proteger <br /> votre plateforme de la fraude</span>
            </div>
            <div className='text-content text-left font-weight-content font-family-content leading-loose pb-20'>
              Ochestration identity verification checks, code-free. Place checks at any stage of the customer journey for top anti-fraud protection and pass rates worldwide. Orchestrate <br />
              Ochestration identity verification checks, code-free. Place checks at any stage of the customer journey for top anti-fraud protection and pass rates worldwide.
            </div>
          </div>
          <div class="big-circles gap-y-10 pb-10">
            <div class="flex flex-col items-center justify-center relative">
              <div class="group">
                <div class="flex items-center justify-center rounded-full big-circle group-hover:bg-cyan-color group-hover:text-white">
                  <span class=" text-sm sm:text-sm md:text-md lg:text-lg">
                    Sign Up
                  </span>
                </div>
                <div class="big-circle-detail opacity-0 group-hover:opacity-100">
                  Ochestration identity verification <br />
                  checks, code-free. Place checks at <br />
                  any stage of the customer journey for <br /> top anti-
                </div>
              </div>
              <div class="absolute arrow-circle">
                <img src={arrow} alt="" />
              </div>
            </div>

            <div class="flex flex-col items-center justify-center relative">
              <div class="group">
                <div class="flex items-center justify-center rounded-full big-circle group-hover:bg-cyan-color group-hover:text-white">
                  <span class=" text-sm sm:text-sm md:text-md lg:text-lg">
                    Vérification <br />
                    de l'utilisateur
                  </span>
                </div>
                <div class="big-circle-detail opacity-0 group-hover:opacity-100">
                  Ochestration identity verification <br />
                  checks, code-free. Place checks at <br />
                  any stage of the customer journey for <br /> top anti-
                </div>
              </div>
              <div class="absolute arrow-circle">
                <img src={arrow} alt="" />
              </div>
            </div>

            <div class="flex flex-col items-center justify-center relative">
              <div class="group">
                <div class="flex items-center justify-center rounded-full big-circle group-hover:bg-cyan-color group-hover:text-white">
                  <span class=" text-sm sm:text-sm md:text-md lg:text-lg">
                    Vérification <br />
                    AML
                  </span>
                </div>
                <div class="big-circle-detail opacity-0 group-hover:opacity-100">
                  Ochestration identity verification <br />
                  checks, code-free. Place checks at <br />
                  any stage of the customer journey for <br /> top anti-
                </div>
              </div>
              <div class="absolute arrow-circle">
                <img src={arrow} alt="" />
              </div>
            </div>

            <div class="flex flex-col items-center justify-center relative">
              <div class="group">
                <div class="flex items-center justify-center rounded-full big-circle group-hover:bg-cyan-color group-hover:text-white">
                  <span class=" text-sm sm:text-sm md:text-md lg:text-lg">
                    Connexion
                  </span>
                </div>
                <div class="big-circle-detail opacity-0 group-hover:opacity-100">
                  Ochestration identity verification <br />
                  checks, code-free. Place checks at <br />
                  any stage of the customer journey for <br /> top anti-
                </div>
              </div>
              <div class="absolute arrow-circle">
                <img src={arrow} alt="" />
              </div>
            </div>

            <div class="flex flex-col items-center justify-center relative">
              <div class="group">
                <div class="flex items-center justify-center rounded-full big-circle group-hover:bg-cyan-color group-hover:text-white">
                  <span class=" text-sm sm:text-sm md:text-md lg:text-lg">
                    Detection <br /> de fraudes
                  </span>
                </div>
                <div class="big-circle-detail opacity-0 group-hover:opacity-100">
                  Ochestration identity verification <br />
                  checks, code-free. Place checks at <br />
                  any stage of the customer journey for <br /> top anti-
                </div>
              </div>
              <div class="absolute arrow-circle">
                <img src={arrow} alt="" />
              </div>
            </div>

            <div class="flex flex-col items-center justify-center relative group">
              <div class="flex items-center justify-center rounded-full big-circle group-hover:bg-cyan-color group-hover:text-white">
                <span class=" text-sm sm:text-sm md:text-md lg:text-lg">
                  Transactions
                </span>
              </div>
              <div class="big-circle-detail opacity-0 group-hover:opacity-100">
                Ochestration identity verification <br />
                checks, code-free. Place checks at <br />
                any stage of the customer journey for <br /> top anti-
              </div>
            </div>
          </div>
        </section>

        {/* style={{ backgroundImage: `url(${phones})`, backgroundPosition: "bottom right", backgroundRepeat: "no-repeat" }} */}
        <section class="bg-white phone-section pt-20 pl-20  pb-16" >

          <div class=" text-left" >
            <div class=" flex pt-10 ">
              <button class="text-nowrap h-button-first w-button-first rounded-md bg-white text-cyan-deep py-3 px-5 text-sub-content font-weight-nav font-family-nav my-2 flex items-center justify-center">THE IDENTITY VERIFICATION PLATFORM</button>
            </div>
            <div class="text-cyan-deep left w-full font-bold text-title-3 font-weight-title-3 font-satoshi-3 leading-normal mb-5">
              <span>Des interfaces intuitifves et <br /> orientées objectifs pour </span>
              <span class="text-cyan-color">tester </span> <span>, <br /></span>
              <span class="text-cyan-color">vérifier </span> <span>et </span>
              <span class="text-cyan-color">analyser </span>
            </div>
            <div className='text-content font-weight-content font-family-content leading-loose'>
              Orchestration identity verification checks, code-free. Place checks at any <br />
              stage of the customer journey for top anti-fraud protection and pass <br />
              rates wordwide. Orchestrate identity verification checks, code-free. Place <br />
              checks at any stage of the customer journey for top anti-fraud rates <br />
              worldwide
            </div>
            <div class="phones">
              <div class="active-card flex flex-col p-5 rounded-2xl" style={{ backgroundColor: "#E8FFF9" }}>
                <div class="flex items-center">
                  <span></span>
                  <span class="text-cyan-color"> Real-time funnel metrics</span>
                </div>
                <div class="ml-10 font-weight-content font-family-content leading-loose">
                  Get immediate insights, Track completion status, manual <br />
                  reviews, and final accecptance rates.
                </div>
              </div>

              <div class="active-card flex flex-col bg-gray-100 p-3 mt-5 rounded-2xl">
                <div class="flex items-center">
                  <span></span>
                  <span class="text-cyan-deep font-bold title-4 text-title-4 font-weight-title-4 font-satoshi-4"> Funnel Optimisation</span>
                </div>
              </div>

              <div class="active-card flex flex-col bg-gray-100   p-3 mt-5 rounded-2xl">
                <div class="flex items-center">
                  <span></span>
                  <span class="text-cyan-deep font-bold title-4 text-title-4 font-weight-title-4 font-satoshi-4">Error analysis</span>
                </div>
              </div>

              <div class="active-card flex flex-col bg-gray-100 p-3 mt-5 rounded-2xl">
                <div class="flex items-center">
                  <span></span>
                  <span class="text-cyan-deep font-bold font-boldtitle-4 text-title-4 font-weight-title-4 font-satoshi-4"> Transparent Billing</span>
                </div>
              </div>

              <div class="flex items-center justify-start gap-10 mt-10 pl-5">
                <button class="text-nowrap rounded-md bg-cyan-color py-4 px-5 rounded-md text-white  h-button-height w-button-width text-sm flex items-center justify-center">Commencer</button>
                <button class="text-nowrap rounded-md bg-cyan-color py-4 px-5 rounded-md text-white  h-button-height w-button-width text-sm flex items-center justify-center">Commencer</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </div>
  )
}