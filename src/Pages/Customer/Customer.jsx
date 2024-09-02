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

                <section class="bg-white">

                    <div class="text-left mx-20">
                        <h2 class="text-cyan-deep text-2xl sm:text-2xl md:text-3xl lg:text-5xl  font-semibold pt-20 pb-10">
                            Make identity verification quick and easy by <br />
                            helping genuine users get verified the  first time, <br />
                            while keeping fraudsters out
                        </h2>
                    </div>

                    <div class=" gap-5 mt-20 relation-onboard">
                        <div class="flex flex-col items-center mb-20">
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
                        <div class="flex flex-col items-center mb-20">
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
                        <div class="flex flex-col items-center mb-20">
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
                        <div class="flex flex-col items-center mb-20">
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
                    <h2 class="mt-20 text-4xl font-bold text-emerald-800">Our approach is to break user identity into  atomic attributes called 'merits". <br />
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
