import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import fichier from '../../images/fichier.png'

export default function About() {
    return (
        <>
            <div>
                <section>
                    <NavBar />
                </section>

                <section className='bg-white'>
                    <div className='pt-20'>
                        <a href="" class=" text-white text-content font-family-content leading-normal-1 bg-cyan-deep rounded-full px-3 py-1">A propos de nous</a>
                        <h2 className=' text-title font-weight-title font-family-title leading-normal font-bold text-cyan-deep py-5'>
                            Nous vous aidons à batir des solutions aussi <br />
                            <span class="text-cyan-color">crédibles</span> que <span class="text-cyan-color">faciles à utiliser</span>
                        </h2>
                        <p className='title-content text-cyan-deep text-content font-weight-content font-family-content leading-normal-1 pb-10'>
                            Know Your Costomer (KYC) procedures are essential to any business that wants to accurately verify customers ans assess potential risk. <br />
                            Veriff helps businesses meet regulatory requirements and realize additional benefits
                        </p>
                    </div>
                </section>

                <section>
                    <div>
                        <h2 className='text-gray-400  font-semibold text-title-3 font-weight-title-3 font-family-title-2 leading-normal mb-5 font-bold py-10'>
                            Our approch is to break user identity into atomic attributes called 'merits'. <br />
                            A merit is an individual piece of information about a user that can be used <br />
                            to improve a prediction of their future behavior
                        </h2>
                        <div>
                            <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                                <div className="flex flex-wrap items-center justify-around  gap-y-8">
                                    <div class=" mx-10">
                                        <h2 class="text-cyan-deep text-left  font-semibold text-title-3 font-weight-title-3 font-family-title-2 leading-normal mb-5 font-bold w-full">
                                            Prendre des selfies pour vérifier <br /> l'authenticité</h2>
                                        <div class="text-left text-content font-weight-content font-family-content leading-loose font-semibold mb-10">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>
                                    </div>

                                    <div className=" flex flex-col md:flex-col lg:flex-col items-center justify-center gap-10 sm:flex-col">
                                        <a
                                            className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color w-width-card-vert h-height-card-vert"
                                            href="#"
                                        >

                                        </a>

                                        <a
                                            className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color  w-width-card-vert h-height-card-vert"
                                            href="#"
                                        >

                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                                <div className="flex flex-wrap items-center justify-around  gap-y-8">
                                    <div className=" flex flex-col md:flex-col lg:flex-col items-center justify-center gap-10 sm:flex-col">
                                        <a
                                            className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color w-width-card-vert h-height-card-vert"
                                            href="#"
                                        >

                                        </a>

                                        <a
                                            className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color  w-width-card-vert h-height-card-vert"
                                            href="#"
                                        >

                                        </a>
                                    </div>
                                    <div class=" mx-10">
                                        <h2 class="text-cyan-deep text-left  font-semibold text-title-3 font-weight-title-3 font-family-title-2 leading-normal mb-5 font-bold w-full">
                                            Prendre des selfies pour vérifier <br /> l'authenticité</h2>
                                        <div class="text-left text-content font-weight-content font-family-content leading-loose font-semibold mb-10">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                                <div className="flex flex-wrap items-center justify-around  gap-y-8">
                                    <div class=" mx-10">
                                        <h2 class="text-cyan-deep text-left  font-semibold text-title-3 font-weight-title-3 font-family-title-2 leading-normal mb-5 font-bold w-full">
                                            Prendre des selfies pour vérifier <br /> l'authenticité</h2>
                                        <div class="text-left text-content font-weight-content font-family-content leading-loose font-semibold mb-10">
                                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                                            avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                                            vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                                            inexistants et des frais de
                                        </div>
                                    </div>

                                    <div className=" flex flex-col md:flex-col lg:flex-col items-center justify-center gap-10 sm:flex-col">
                                        <a
                                            className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color w-width-card-vert h-height-card-vert"
                                            href="#"
                                        >

                                        </a>

                                        <a
                                            className="  rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring bg-cyan-color  w-width-card-vert h-height-card-vert"
                                            href="#"
                                        >

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pb-20'>
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
                    </div>
                </section>

                <section className='bg-cyan-color px-20 pb-20'>
                    <div>
                        <div className='text-left grid items-center justify-around sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 pt-10'>
                            <div className='align-start justify-center items-center'>
                                Our approach is to <br />
                                break user identity <br />
                                into atomic <br />
                                attributes called <br />
                                "merits". <br />
                                A merit is an <br />
                                individual piece of <br />
                                information
                            </div>
                            <div className='rounded-2xl p-10 bg-white mt-10'>
                                <img src={fichier} alt="" className='pb-5' />
                                <a href="" class=" text-white text-content font-family-content leading-normal-1 bg-cyan-color rounded-full px-3 py-1">Disponible par pays</a>
                                <h4 class="text-cyan-deep  font-semibold text-lg font-weight-title-3 font-family-title-2 leading-normal my-5 font-bold w-full">
                                    Albiometrics pour les fintech <br />
                                    et structures financieres
                                </h4>
                                <p className='title-content text-cyan-deep text-content font-weight-content font-family-content leading-normal-1 pb-10'>
                                    Localement ou internationalement, vous achats <br />
                                    en ligne ne connaissent plus de limite avec les <br />
                                    cartes virtuelles Visa
                                </p>
                            </div>
                            <div className='rounded-2xl p-10 bg-white mt-10'>
                                <img src={fichier} alt="" className='pb-5' />
                                <a href="" class=" text-white text-content font-family-content leading-normal-1 bg-cyan-color rounded-full px-3 py-1">Disponible par pays</a>
                                <h4 class="text-cyan-deep  font-semibold text-lg font-weight-title-3 font-family-title-2 leading-normal my-5 font-bold w-full">
                                    Albiometrics pour les fintech <br />
                                    et structures financieres
                                </h4>
                                <p className='title-content text-cyan-deep text-content font-weight-content font-family-content leading-normal-1 pb-10'>
                                    Localement ou internationalement, vous achats <br />
                                    en ligne ne connaissent plus de limite avec les <br />
                                    cartes virtuelles Visa
                                </p>
                            </div>
                        </div>
                        <div className='text-left grid items-end justify-end sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10'>
                            <div className='md:hidden lg:block'>

                            </div>
                            <div className='rounded-2xl p-10 bg-white'>
                                <img src={fichier} alt="" className='pb-5' />
                                <a href="" class=" text-white text-content font-family-content leading-normal-1 bg-cyan-color rounded-full px-3 py-1">Disponible par pays</a>
                                <h4 class="text-cyan-deep  font-semibold text-lg font-weight-title-3 font-family-title-2 leading-normal my-5 font-bold w-full">
                                    Albiometrics pour les fintech <br />
                                    et structures financieres
                                </h4>
                                <p className='title-content text-cyan-deep text-content font-weight-content font-family-content leading-normal-1 pb-10'>
                                    Localement ou internationalement, vous achats <br />
                                    en ligne ne connaissent plus de limite avec les <br />
                                    cartes virtuelles Visa
                                </p>
                            </div>
                            <div className='rounded-2xl p-10 bg-white'>
                                <img src={fichier} alt="" className='pb-5' />
                                <a href="" class=" text-white text-content font-family-content leading-normal-1 bg-cyan-color rounded-full px-3 py-1">Disponible par pays</a>
                                <h4 class="text-cyan-deep  font-semibold text-lg font-weight-title-3 font-family-title-2 leading-normal my-5 font-bold w-full">
                                    Albiometrics pour les fintech <br />
                                    et structures financieres
                                </h4>
                                <p className='title-content text-cyan-deep text-content font-weight-content font-family-content leading-normal-1 pb-10'>
                                    Localement ou internationalement, vous achats <br />
                                    en ligne ne connaissent plus de limite avec les <br />
                                    cartes virtuelles Visa
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='h-screen'>

                </section>

                <section>
                    <Footer />
                </section>
            </div>
        </>
    )
}
