import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NavBar from '../../Components/NavBar';
import femme from "../../images/femme.png";
import Footer from '../../Components/Footer';

export default function Customer() {
    return (
        <>
            <div>
                <section>
                    <NavBar />
                </section>

                <section>
                    <div class="flex flex-wrap-reverse items-center justify-around  px-20 medium-screen pt-24">
                        <div class="">
                            <div class="flex mt-10">
                                <button class="text-nowrap rounded-md bg-white py-4 px-5 rounded-md">THE IDENTITY VERIFICATION PLATFORM</button>
                            </div>
                            <div class=" text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-left font-bold mt-5">
                                <span class="uppercase text-cyan-deep">KYC </span>Rapide <span class="text-cyan-deep">et</span> <span>flexible</span> <span class="text-cyan-deep">pour</span> <br />
                                <span>+200 pays </span> <span class="text-cyan-deep">d'Afrique et du</span> <br />
                                <span class="text-cyan-deep">monde</span>
                            </div>
                            <div class="text-cyan-deep text-left text-sm sm:text-sm md:text-md lg:text-lg my-10">
                                Know Your Customer (KYC) procedures are essential to any business that wants to accurately <br />
                                verify customers ans assess potential risk. Verif helps businesses meet  regulatory <br />
                                requirements and realize additional benefits.
                            </div>
                        </div>
                        <div class="">
                            <img src={femme} alt="" class="object-cover w-full h-full" />
                        </div>
                    </div>

                    {/* Grid section */}
                    <div class="card-grid bg-cyan-color gap-y-5 mx-20 py-5">
                        <div class="flex items-center justify-center gap-10 grid-width">
                            <div class=" rounded-full bg-white flex items-center justify-center px-4 py-2 text-cyan-color">
                                <span class="icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                            <div class="text-left text-white">
                                <h4 class="font-semibold text-md lg:text-lg">Customer du diligence (CDD):</h4>
                                <h6 class="text-sm sm:text-sm md:text-sm lg:text-md">The only AI-powered identity verification</h6>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-10 grid-width ">
                            <div class=" rounded-full bg-white flex items-center justify-center px-4 py-2 text-cyan-color">
                                <span class="icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                            <div class="text-left text-white">
                                <h4 class="font-semibold text-md lg:text-lg">Adverse media screening</h4>
                                <h6 class="text-sm sm:text-sm md:text-sm lg:text-md">The only AI-powered identity verification</h6>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-10 grid-width">
                            <div class=" rounded-full bg-white flex items-center justify-center px-4 py-2 text-cyan-color">
                                <span class="icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                            <div class="text-left text-white">
                                <h4 class="font-semibold text-md lg:text-lg">Enhanced due diligence (EDD) : </h4>
                                <h6 class="text-sm sm:text-sm md:text-sm lg:text-md">The only AI-powered identity verification</h6>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-10 grid-width">
                            <div class=" rounded-full bg-white flex items-center justify-center px-4 py-2 text-cyan-color">
                                <span class="icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                            <div class="text-left text-white">
                                <h4 class="font-semibold text-md lg:text-lg">PEP Screening</h4>
                                <h6 class="text-sm sm:text-sm md:text-sm lg:text-md">The only AI-powered identity verification</h6>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-10 grid-width">
                            <div class=" rounded-full bg-white flex items-center justify-center px-4 py-2 text-cyan-color">
                                <span class="icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                            <div class="text-left text-white">
                                <h4 class="font-semibold text-md lg:text-lg">Ongoing monitoring</h4>
                                <h6 class="text-sm sm:text-sm md:text-sm lg:text-md">The only AI-powered identity verification</h6>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-10 grid-width">
                            <div class=" rounded-full bg-white flex items-center justify-center px-4 py-2 text-cyan-color">
                                <span class="icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                            </div>
                            <div class="text-left text-white">
                                <h4 class="font-semibold text-md lg:text-lg">Sanction screening</h4>
                                <h6 class="text-sm sm:text-sm md:text-sm lg:text-md">The only AI-powered identity verification</h6>
                            </div>
                        </div>
                    </div>
                </section>


                <div class="text-left mx-20">
                    <h2 class="text-cyan-deep text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold pt-20 pb-10">
                        Make identity verification quick and easy by <br />
                        helping genuine users get verified the  first time, <br />
                        while keeping fraudsters out
                    </h2>
                </div>

                <section class="">
                    <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                        <div className="flex flex-wrap-reverse items-center justify-around  gap-y-8 gap-x-8 mx-10">
                            <div className=" flex flex-row md:flex-row lg:flex-row items-center justify-center gap-10 sm:flex-row">
                                <a
                                    className="rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color card-horiz"
                                    href="#"
                                >

                                </a>

                                <a
                                    className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color card-horiz"
                                    href="#"
                                >

                                </a>
                            </div>
                            <div >
                                <h2 class="text-cyan-deep text-left text-xl sm:text-sm md:text-md lg:text-lg mb-5 font-bold w-full">
                                    Prendre des selfies pour vérifier <br /> l'authenticité</h2>
                                <div class="text-left  text-sm sm:text-sm md:text-md lg:text-lg mb-10">
                                    Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                    avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                    vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                    inexistants et des frais de
                                </div>
                                <div class="grid grid-cols-2 items-center justify-center gap-10">
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
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
                        <div className="flex flex-wrap items-center justify-around  gap-y-8">
                            <div class=" mx-10">
                                <h2 class="text-cyan-deep text-left text-xl sm:text-sm md:text-md lg:text-lg mb-5 font-bold w-full">
                                    Prendre des selfies pour vérifier <br /> l'authenticité</h2>
                                <div class="text-left  text-sm sm:text-sm md:text-md lg:text-lg mb-10">
                                    Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                    avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                    vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                    inexistants et des frais de
                                </div>
                                <div class="grid grid-cols-2 items-center justify-center gap-10">
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" flex flex-col md:flex-col lg:flex-col items-center justify-center gap-10 sm:flex-col">
                                <a
                                    className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color card-vert"
                                    href="#"
                                >

                                </a>

                                <a
                                    className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color card-vert"
                                    href="#"
                                >

                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="">
                    <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                        <div className="flex flex-wrap-reverse items-center justify-around  gap-y-8 gap-x-8 mx-10">
                            <div className=" flex flex-row md:flex-row lg:flex-row items-center justify-center gap-10 sm:flex-row">
                                <a
                                    className="rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color card-horiz"
                                    href="#"
                                >

                                </a>

                                <a
                                    className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color card-horiz"
                                    href="#"
                                >

                                </a>
                            </div>
                            <div >
                                <h2 class="text-cyan-deep text-left text-xl sm:text-sm md:text-md lg:text-lg mb-5 font-bold w-full">
                                    Prendre des selfies pour vérifier <br /> l'authenticité</h2>
                                <div class="text-left  text-sm sm:text-sm md:text-md lg:text-lg mb-10">
                                    Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                    avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                    vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                    inexistants et des frais de
                                </div>
                                <div class="grid grid-cols-2 items-center justify-center gap-10">
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-center gap-5">
                                        <div class="flex items-center justify-center small-circle-check rounded-full bg-emerald-300 z-100">
                                            <span class="icon text-white p-2">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </div>
                                        <div class="text-left text-sm sm:text-sm md:text-md lg:text-lg">
                                            Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section class="bg-white py-10">
                    <div className='mx-10'>
                        <div class=" mx-20">
                            <h2 class="text-cyan-deep text-2xl sm:text-2xl md:text-3xl lg:text-4xl  font-semibold pt-20 pb-10">
                                Comply with regulations and onboard more <br />
                                customer
                            </h2>
                        </div>
                        < div class="text-cyan-deep text-lg sm:text-sm md:text-md lg:text-lg">
                            Orchestrate identity verification checks, code-free. Place checks at any stage of the customers journey for top anti-fraud protection and pass rates worldwide. Orchestrate identity verification <br />
                            checks, code-free. Place checks at any stage of the customers journey for top anti-fraud protection and pass rates worldwide. Orchestrate identity verification
                        </div>
                    </div>
                    <div class=" gap-5 mt-10 relation-onboard">
                        <div class="flex flex-col items-center mb-10">
                            <div class="flex items-center justify-center circle-orange-100 rounded-full">
                                <div class="circle-amber-100 rounded-full bg-cyan-color flex items-center justify-center px-4 py-3">
                                    <span class="icon text-white text-3xl font-bold">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                </div>
                            </div>
                            <div class="text-cyan-deep font-bold text-2xl">Comply wity evolving <br /> regulation </div>
                            <div>Know that customers are genuine, ensure <br /> that the proper checks are carried out, <br /> and stay compliant</div>
                        </div>
                        <div class="flex flex-col items-center mb-10">
                            <div class="flex items-center justify-center circle-orange-100 rounded-full">
                                <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center px-4 py-3">
                                    <span class="icon text-white text-3xl font-bold">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                </div>
                            </div>
                            <div class="text-cyan-deep font-bold text-2xl">Comply wity evolving <br /> regulation </div>
                            <div>Know that customers are genuine, ensure <br /> that the proper checks are carried out, <br /> and stay compliant</div>
                        </div>
                        <div class="flex flex-col items-center mb-10">
                            <div class="flex items-center justify-center circle-orange-100 rounded-full">
                                <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center px-4 py-3">
                                    <span class="icon text-white text-3xl font-bold">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                </div>
                            </div>
                            <div class="text-cyan-deep font-bold text-2xl">Comply wity evolving <br /> regulation </div>
                            <div>Know that customers are genuine, ensure <br /> that the proper checks are carried out, <br /> and stay compliant</div>
                        </div>
                        <div class="flex flex-col items-center mb-10">
                            <div class="flex items-center justify-center circle-orange-100 rounded-full">
                                <div class="circle-amber-100 rounded-full bg-emerald-300 flex items-center justify-center px-4 py-3">
                                    <span class="icon text-white text-3xl font-bold">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                </div>
                            </div>
                            <div class="text-cyan-deep font-bold text-2xl">Comply wity evolving <br /> regulation </div>
                            <div>Know that customers are genuine, ensure <br /> that the proper checks are carried out, <br /> and stay compliant</div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 class="mt-20 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-deep mx-20">Our approach is to break user identity into  atomic attributes called 'merits". <br />
                        A merit is and individual piece of information about a user that cant be used <br />
                        to improve a prediction of their future behavior.
                    </h2>
                    <div class="flex items-center gap-20 justify-center overflow-x-auto py-20">
                        <div class="flex flex-col text-left whitespace-nowrap scroll-disponibility">
                            <div class="flex mt-20">
                                <button class="text-nowrap rounded-md bg-emerald-200 p-1 rounded-md">Disponibilité par pays</button>
                            </div>
                            <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                            <span class="mt-2">
                                Localement ou internationalement, vos achats en <br />
                                ligne ne connaissent plus de limite aves les <br />
                                carte virtuelles Visa et Mastercard de chez <br />
                                SEKURE. En 2 minutes, créez et vérifiez votre <br />
                                compte Sekure pour obtenire votre carte virtuelle. <br />
                                Entre des frais d'entretien inexistants et des frais <br />
                                de transaction amoindris, Sekure vous offre les <br />
                                meilleurs Avantages du marché bancaire africain <br />
                                sur jusqu'a 06 cartes que vous pouvez suivre <br />
                                individuellement dans via l'application
                            </span>
                        </div>
                        <div class="flex flex-col text-left whitespace-nowrap">
                            <div class="flex mt-20">
                                <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                            </div>
                            <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                            <span class="mt-2">
                                Localement ou internationalement, vos achats en <br />
                                ligne ne connaissent plus de limite aves les <br />
                                carte virtuelles Visa et Mastercard de chez <br />
                                SEKURE. En 2 minutes, créez et vérifiez votre <br />
                                compte Sekure pour obtenire votre carte virtuelle. <br />
                                Entre des frais d'entretien inexistants et des frais <br />
                                de transaction amoindris, Sekure vous offre les <br />
                                meilleurs Avantages du marché bancaire africain <br />
                                sur jusqu'a 06 cartes que vous pouvez suivre <br />
                                individuellement dans via l'application
                            </span>
                        </div>
                        <div class="flex flex-col text-left whitespace-nowrap">
                            <div class="flex mt-20">
                                <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                            </div>
                            <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                            <span class="mt-2">
                                Localement ou internationalement, vos achats en <br />
                                ligne ne connaissent plus de limite aves les <br />
                                carte virtuelles Visa et Mastercard de chez <br />
                                SEKURE. En 2 minutes, créez et vérifiez votre <br />
                                compte Sekure pour obtenire votre carte virtuelle. <br />
                                Entre des frais d'entretien inexistants et des frais <br />
                                de transaction amoindris, Sekure vous offre les <br />
                                meilleurs Avantages du marché bancaire africain <br />
                                sur jusqu'a 06 cartes que vous pouvez suivre <br />
                                individuellement dans via l'application
                            </span>
                        </div>
                        <div class="flex flex-col text-left whitespace-nowrap">
                            <div class="flex mt-20">
                                <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                            </div>
                            <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                            <span class="mt-2">
                                Localement ou internationalement, vos achats en <br />
                                ligne ne connaissent plus de limite aves les <br />
                                carte virtuelles Visa et Mastercard de chez <br />
                                SEKURE. En 2 minutes, créez et vérifiez votre <br />
                                compte Sekure pour obtenire votre carte virtuelle. <br />
                                Entre des frais d'entretien inexistants et des frais <br />
                                de transaction amoindris, Sekure vous offre les <br />
                                meilleurs Avantages du marché bancaire africain <br />
                                sur jusqu'a 06 cartes que vous pouvez suivre <br />
                                individuellement dans via l'application
                            </span>
                        </div>
                        <div class="flex flex-col text-left whitespace-nowrap">
                            <div class="flex mt-20">
                                <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                            </div>
                            <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                            <span class="mt-2">
                                Localement ou internationalement, vos achats en <br />
                                ligne ne connaissent plus de limite aves les <br />
                                carte virtuelles Visa et Mastercard de chez <br />
                                SEKURE. En 2 minutes, créez et vérifiez votre <br />
                                compte Sekure pour obtenire votre carte virtuelle. <br />
                                Entre des frais d'entretien inexistants et des frais <br />
                                de transaction amoindris, Sekure vous offre les <br />
                                meilleurs Avantages du marché bancaire africain <br />
                                sur jusqu'a 06 cartes que vous pouvez suivre <br />
                                individuellement dans via l'application
                            </span>
                        </div>
                        <div class="flex flex-col text-left whitespace-nowrap">
                            <div class="flex mt-20">
                                <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                            </div>
                            <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                            <span class="mt-2">
                                Localement ou internationalement, vos achats en <br />
                                ligne ne connaissent plus de limite aves les <br />
                                carte virtuelles Visa et Mastercard de chez <br />
                                SEKURE. En 2 minutes, créez et vérifiez votre <br />
                                compte Sekure pour obtenire votre carte virtuelle. <br />
                                Entre des frais d'entretien inexistants et des frais <br />
                                de transaction amoindris, Sekure vous offre les <br />
                                meilleurs Avantages du marché bancaire africain <br />
                                sur jusqu'a 06 cartes que vous pouvez suivre <br />
                                individuellement dans via l'application
                            </span>
                        </div>
                        <div class="flex flex-col text-left whitespace-nowrap">
                            <div class="flex mt-20">
                                <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                            </div>
                            <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                            <span class="mt-2">
                                Localement ou internationalement, vos achats en <br />
                                ligne ne connaissent plus de limite aves les <br />
                                carte virtuelles Visa et Mastercard de chez <br />
                                SEKURE. En 2 minutes, créez et vérifiez votre <br />
                                compte Sekure pour obtenire votre carte virtuelle. <br />
                                Entre des frais d'entretien inexistants et des frais <br />
                                de transaction amoindris, Sekure vous offre les <br />
                                meilleurs Avantages du marché bancaire africain <br />
                                sur jusqu'a 06 cartes que vous pouvez suivre <br />
                                individuellement dans via l'application
                            </span>
                        </div>
                        <div class="flex flex-col text-left whitespace-nowrap">
                            <div class="flex mt-20">
                                <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                            </div>
                            <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                            <span class="mt-2">
                                Localement ou internationalement, vos achats en <br />
                                ligne ne connaissent plus de limite aves les <br />
                                carte virtuelles Visa et Mastercard de chez <br />
                                SEKURE. En 2 minutes, créez et vérifiez votre <br />
                                compte Sekure pour obtenire votre carte virtuelle. <br />
                                Entre des frais d'entretien inexistants et des frais <br />
                                de transaction amoindris, Sekure vous offre les <br />
                                meilleurs Avantages du marché bancaire africain <br />
                                sur jusqu'a 06 cartes que vous pouvez suivre <br />
                                individuellement dans via l'application
                            </span>
                        </div>
                        <div class="flex flex-col text-left whitespace-nowrap">
                            <div class="flex mt-20">
                                <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                            </div>
                            <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                            <span class="mt-2">
                                Localement ou internationalement, vos achats en <br />
                                ligne ne connaissent plus de limite aves les <br />
                                carte virtuelles Visa et Mastercard de chez <br />
                                SEKURE. En 2 minutes, créez et vérifiez votre <br />
                                compte Sekure pour obtenire votre carte virtuelle. <br />
                                Entre des frais d'entretien inexistants et des frais <br />
                                de transaction amoindris, Sekure vous offre les <br />
                                meilleurs Avantages du marché bancaire africain <br />
                                sur jusqu'a 06 cartes que vous pouvez suivre <br />
                                individuellement dans via l'application
                            </span>
                        </div>
                        <div class="flex flex-col text-left whitespace-nowrap mr-10">
                            <div class="flex mt-20">
                                <button class="text-nowrap rounded-md bg-emerald-300 p-1 rounded-md">Disponibilité par pays</button>
                            </div>
                            <span class="text-xl font-bold pt-2 pb-5">Est-ce que je peux payer <br /> depuis mon pays en Afrique?</span>
                            <span class="mt-2">
                                Localement ou internationalement, vos achats en <br />
                                ligne ne connaissent plus de limite aves les <br />
                                carte virtuelles Visa et Mastercard de chez <br />
                                SEKURE. En 2 minutes, créez et vérifiez votre <br />
                                compte Sekure pour obtenire votre carte virtuelle. <br />
                                Entre des frais d'entretien inexistants et des frais <br />
                                de transaction amoindris, Sekure vous offre les <br />
                                meilleurs Avantages du marché bancaire africain <br />
                                sur jusqu'a 06 cartes que vous pouvez suivre <br />
                                individuellement dans via l'application
                            </span>
                        </div>
                    </div>
                </section>

                <section>
                    <Footer />
                </section>

            </div>
        </>
    )
}
