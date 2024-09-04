import React from 'react'
import Footer from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import women from "../../images/women-pricing.png"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pricing() {
    return (
        <>
            <div>
                <section>
                    <NavBar />
                </section>
                <section className='bg-white pricing-section' style={{ backgroundImage: `url(${women})`, backgroundPosition: "bottom left", backgroundRepeat: "no-repeat" }} >
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  pt-28'>
                        <div className='flex flex-col text-left px-10'>
                            <button className='flex items-center justify-center text-white text-sm py-1 bg-cyan-deep rounded-full w-36'>
                                Contactez nous
                            </button>
                            <h2 className='font-bold text-cyan-deep text-title-2 font-weight-title-1 font-family-title-2 leading-normal pt-5'>
                                Parlez à un responsable <br />
                                chez Albiometrics
                            </h2>
                            <p class="title-4 text-title-4 font-weight-title-4 font-family-title-4 pt-7">
                                Let's connect to explore the possibilites and find the right solution that fit your <br />
                                business needs. Fill out the form and one of our expert will be in touch.
                            </p>
                            <p class="title-4 text-title-4 font-weight-title-4 font-family-title-4 pt-7">
                                You'll learn how our solutions can spécifically address your challenges, streamline your <br />
                                operations, and amplify your growth.
                            </p>
                        </div>
                        <div className='px-10 sm:px-20 md:px-20 lg:px-8'>
                            <form action="" className=''>
                                <div className='flex items-center justify-center  gap-x-7'>
                                    <div className='flex flex-col text-left w-full'>
                                        <label htmlFor="name">Nom</label>
                                        <input type="text" name="" id="" placeholder='Your company' className='bg-gray-100 py-2 px-3 rounded-lg' />
                                    </div>
                                    <div className='flex flex-col text-left w-full'>
                                        <label htmlFor="name">Prenom</label>
                                        <input type="text" name="" id="" placeholder='Your company' className='bg-gray-100 py-2 px-3 rounded-lg' />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-x-7 pt-5'>
                                    <div className='flex flex-col text-left w-full'>
                                        <label htmlFor="name">Company name*</label>
                                        <input type="text" name="" id="" placeholder='Your company' className='bg-gray-100 py-2 px-3 rounded-lg' />
                                    </div>
                                    <div className='flex flex-col text-left w-full'>
                                        <label htmlFor="name">Job Title Options*</label>
                                        <input type="text" name="" id="" placeholder='Your company' className='bg-gray-100 py-2 px-3 rounded-lg' />
                                    </div>
                                </div>
                                <div className='flex flex-col text-left w-full pt-5'>
                                    <label htmlFor="">Adresse Mail</label>
                                    <input type="mail" name="" id="" placeholder='Your company' className='bg-gray-100 py-2 px-3 rounded-lg' />
                                </div>
                                <div className='flex flex-col text-left w-full pt-5'>
                                    <label htmlFor="">Numéro de téléphone</label>
                                    <div className='flex items-center justify-center'>
                                        <select name="" id="" value="">
                                            <option value="+ 237">+ 237</option>
                                        </select>
                                        <input type="text" name="" id="" placeholder='Your company' className='bg-gray-100 py-2 px-3 rounded-lg w-full' />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-x-7 pt-5'>
                                    <div className='flex flex-col text-left w-full'>
                                        <label htmlFor="name">Secteur d'activité</label>
                                        <input type="text" name="" id="" placeholder='Your company' className='bg-gray-100 py-2 px-3 rounded-lg' />
                                    </div>
                                    <div className='flex flex-col text-left w-full'>
                                        <label htmlFor="name">Pays</label>
                                        <input type="text" name="" id="" placeholder='Your company' className='bg-gray-100 py-2 px-3 rounded-lg' />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-x-7 pt-5'>
                                    <div className='flex flex-col text-left w-full'>
                                        <label htmlFor="name"> J'utiliser AIBIOMETRICS pour : </label>
                                        <select name="" id="" className='bg-gray-100 py-2 px-3 rounded-lg w-full'>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col text-left w-full' >
                                        <label htmlFor="name"> Volume annuel de transactions </label>
                                        <select name="" id="" className='bg-gray-100 py-2 px-3 rounded-lg w-full'>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex flex-col text-left pt-5'>
                                    <label htmlFor="">Ajouter un message</label>
                                    <textarea name="" id="" rows={4} className='bg-gray-100 py-2 px-3 rounded-lg w-full'>

                                    </textarea>
                                </div>
                                <div class="pt-8">
                                    <div class="flex items-center justify-center gap-5 ">
                                        <button class="bg-cyan-deep  px-5 py-2 rounded-xl text-white flex items-center justify-between gap-5">
                                            <span class="text-nowrap pr-5" >Envoyez</span>
                                            <div class="btn-circle rounded-full bg-white flex items-center justify-center">
                                                <span class="icon text-cyan-deep">
                                                    <FontAwesomeIcon icon={faArrowRight} />
                                                </span>
                                            </div>
                                        </button>
                                        <button class=" bg-gray-100  px-5 py-3.5 rounded-xl flex items-center justify-between gap-5 w-full">
                                            <span class="text-cyan-deep text-sm color-gray-300">Pas encore de compte? <a href="" className='text-cyan-deep font-semibold'>Inscrivez vous par la même occasion</a></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
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
