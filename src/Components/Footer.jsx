import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from "../images/logo-white.png";
// import women from "../images/women-picture.png"

export default function Footer() {
    return (
        <>
            <section class="section-footer" >
                <div className='section-footer-element bg-cyan-color px-10'>
                    <div class="footer-section-background  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-between">
                        <div class="flex flex-col items-center justify-center pt-10">
                            <h2 class=" text-cyan-deep font-bold text-left title text-title font-weight-title font-family-title leading-normal footer-title">
                                Notre API Robuste supportera <br />
                                votre business <br />
                                <span className='text-white'>Acceptez plus facilement vos utilisateurs</span>
                            </h2>
                            <p class="text-white text-left w-full  my-10">
                                We are equipped to help you level up your KYC/AML compliance stack. Our team is ready to <br />
                                understand your needs, answer questions, and set up your account.  We are equipped to help you <br />
                                level up your KYC/AML compliance stack. Our team is ready to <br />
                                understand your needs, answer <br />
                                questions, and set up your account
                            </p>
                            <div class="w-full">
                                <div class="flex items-center justify-start gap-5 w-full">
                                    <button class="bg-cyan-deep px-5 h-button-footer w-button-footer  rounded-lg text-white flex items-center justify-center gap-5">
                                        <span class="text-nowrap" >Commencer Gratuitement</span>
                                        <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                            <span class="icon text-cyan-deep">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </span>
                                        </div>
                                    </button>
                                    <button class=" bg-white px-5 h-button-footer w-button-footer  rounded-lg text-white flex items-center justify-between gap-5">
                                        <span class="text-cyan-deep text-nowrap">Nous Contacter</span>
                                        <div class="btn-circle rounded-full bg-cyan-deep flex items-center justify-center">
                                            <span class="icon text-white">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <img src={women} alt="" class="object-cover md:h-full card-footer-logo" />
                        </div> */}
                    </div>
                    <div class="grid-footer mt-10 pb-10 gap-y-10">
                        <div class="flex flex-col text-left">
                            <span class="text-xl font-bold">Explorer</span>
                            <span class="mt-2">Documentation</span>
                            <span class="mt-2">Dashboard</span>
                            <span class="mt-2">Confidentialité</span>
                            <span class="mt-2">Termes</span>
                        </div>
                        <div class="flex flex-col text-left">
                            <span class="text-xl font-bold">Explorer</span>
                            <span class="mt-2">Accueil</span>
                            <span class="mt-2">A Propos</span>
                            <span class="mt-2">Contact</span>
                            <span class="mt-2">FAQ</span>
                        </div>
                        <div class="flex flex-col text-left">
                            <span class="text-xl font-bold">KYC</span>
                            <span class="mt-2">Comment ça marche</span>
                            <span class="mt-2">Interface KYC</span>
                            <span class="mt-2">Options KYC</span>
                            <span class="mt-2">Avantages</span>
                        </div>
                        <div class="flex flex-col text-left">
                            <span class="text-xl font-bold">AML</span>
                            <span class="mt-2">Comment ça marche</span>
                            <span class="mt-2">Process AML</span>
                            <span class="mt-2">Requis</span>
                            <span class="mt-2">Avantages</span>
                        </div>
                        <div class="flex flex-col text-left">
                            <span class="text-xl font-bold">Commencer</span>
                            <span class="mt-2">Pricing</span>
                            <span class="mt-2">Se Connecter</span>
                            <span class="mt-2">Voir Demo</span>
                        </div>
                        <div>
                            <form action="" class="flex flex-col">
                                <div class="flex items-center justify-center logo-footer">
                                    <div class="text-2xl font-bold text-left cursor-pointer text-cyan-deep">
                                        AIBIOMETRICS
                                    </div>
                                    <img src={logo} alt="" class="object-cover pt-2" />
                                </div>
                                <textarea name="" id="" placeholder='Recevoir Newsletter' class="p-2 rounded-lg"></textarea>
                                <button class=" bg-cyan-deep  px-10 py-3 my-5 rounded-lg text-white flex items-center justify-center gap-5">
                                    <span class=" tex-white text-nowrap">Nous Contacter</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
