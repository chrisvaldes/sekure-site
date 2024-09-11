import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import cni from "../images/cni.png";

export default function MiniNavBar() {
    const [content, setContent] = useState("Vérification d'identité");

    const handleNavClick = (event, newListItem) => {
        event.preventDefault(); // Empêche le rechargement de la page
        setContent(newListItem);
    };

    return (
        <section className="bg-white">
            <div className="text-left text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-deep ml-20 sm:ml-20 md:ml-20 lg:ml-40 pt-10">
                <span>
                    Tous les outils qu'il vous faut pour protéger <br />
                    votre plateforme de la fraude
                </span>
            </div>
            <div className='mx-20'>
                <ul className="flex mini-nav-items items-center justify-around bg-gray-100 rounded-xl my-10 gap-x-5 px-5">
                    <li className={`text-sm py-5 ${content === "Vérification d'identité" ? 'mini-nav-item-active' : ''}`} onClick={(event) => handleNavClick(event, "Vérification d'identité")}>
                        <a href="#">Vérification d'identité</a>
                    </li>
                    <li className={`text-sm py-5 ${content === "Vérification biométrique" ? 'mini-nav-item-active' : ''}`} onClick={(event) => handleNavClick(event, "Vérification biométrique")}>
                        <a href="#">Vérification biométrique</a>
                    </li>
                    <li className={`text-sm py-5 ${content === "Preuve d'adresse" ? 'mini-nav-item-active' : ''}`} onClick={(event) => handleNavClick(event, "Preuve d'adresse")}>
                        <a href="#">Preuve d'adresse</a>
                    </li>
                    <li className={`text-sm py-5 ${content === "Détection d'appareil" ? 'mini-nav-item-active' : ''}`} onClick={(event) => handleNavClick(event, "Détection d'appareil")}>
                        <a href="#">Détection d'appareil</a>
                    </li>
                    <li className={`text-sm py-5 ${content === "Sanctions" ? 'mini-nav-item-active' : ''}`} onClick={(event) => handleNavClick(event, "Sanctions")}>
                        <a href="#">Sanctions</a>
                    </li>
                </ul>

                <div className="flex flex-wrap items-center justify-center gap-16 pb-10 lg:pb-16 px-10">
                    {content === "Vérification d'identité" && (
                        <div className="flex items-center justify-around gap-10">
                            <div className="flex items-center justify-center">
                                <img src={cni} alt="" className='cni' />
                            </div>
                        </div>
                    )}
                    {content === "Vérification biométrique" && (
                        <div className="flex items-center justify-around gap-10">
                            <div className="flex items-center justify-center">
                                <h4>Test de fonctionnement</h4>
                            </div>
                        </div>
                    )}
                    {content === "Preuve d'adresse" && (
                        <div className="flex items-center justify-around gap-10">
                            <div className="flex items-center justify-center">
                                <h4>Test de fonctionnement</h4>
                            </div>
                        </div>
                    )}
                    {content === "Détection d'appareil" && (
                        <div className="flex items-center justify-around gap-10">
                            <div className="flex items-center justify-center">
                                <h4>Test de fonctionnement</h4>
                            </div>
                        </div>
                    )}
                    {content === "Sanctions" && (
                        <div className="flex items-center justify-around gap-10">
                            <div className="flex items-center justify-center">
                                <h4>Test de fonctionnement</h4>
                            </div>
                        </div>
                    )}

                    {/* Ajoute d'autres conditions pour le reste du contenu ici */}
                    <div>
                        <h2 className="text-cyan-deep text-left text-title-3 font-weight-title-3 font-satoshi leading-normal mb-5 font-bold w-full">
                            Identifications et Vérifications par scan <br />
                            facial intelligent et rapide
                        </h2>
                        <div className="text-left text-content font-family-content font-normal leading-loose mb-10">
                            Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                            avec les cartes virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
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
    );
}