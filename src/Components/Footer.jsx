import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from "../images/logo-white.png";
// import women from "../images/women-picture.png"
import women from "../images/femme-footer.png";

export default function Footer() {
    return (
        <>
            <section class="section-footer bg-cyan-color pt-5 " >
                <div>
                    <div class="flex flex-wrap-reverse items-center justify-center footer-text gap-10">
                        <div class="flex flex-col">
                            <div class=" text-cyan-deep font-bold text-left footer-title">
                                Notre API Robuste supportera <br />
                                votre business et son <br />
                                expansion sans problèmes
                            </div>
                            <div class="text-white text-left  my-10">
                                We are equipped to help you level up your KYC/AML compliance stack. Our team is ready to <br />
                                understand your needs, answer questions, and set up your account.  We are equipped to help you <br />
                                level up your KYC/AML compliance stack. Our team is ready to <br />
                                understand your needs, answer <br />
                                questions, and set up your account
                            </div>
                            <div class="">
                                <div class="flex items-center gap-10 ">
                                    <button class="bg-cyan-deep px-5 py-3 rounded-lg text-white flex items-center justify-center gap-5">
                                        <span class="text-nowrap" >Commencer Gratuitement</span>
                                        <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                            <span class="icon text-cyan-deep">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </span>
                                        </div>
                                    </button>
                                    <button class=" bg-white  px-10 py-3 rounded-lg text-white flex items-center justify-between gap-5">
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
                        <div>
                            <img src={women} alt="" class="object-cover card-footer-logo" />
                        </div>
                    </div>
                    <div class="grid-footer mx-10 mt-10 pb-10">
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
