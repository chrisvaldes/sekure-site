import React from 'react';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import image1 from '../../image/page-1/image1.png';
import image2 from '../../image/page-1/image2.png';
import image3 from '../../image/page-1/image3.png';
import cniPassport from "../../images/cni-passport.png";
import grandMere from "../../images/grand-mère.png";
import groupGirl from "../../images/group-girl.png";
import groupDatabase from '../../images/groupDatabase.png';

import smallCircle from "../../image/page-1/small-circle.png";
import arrow from "../../images/arrow.png";

import MiniNavBar from '../../Components/MiniNavBar';
import world from "../../images/world-bg.png";


export default function Accueil() {
  return (
    <div className=''>
      <div className=' '>

        <section>
          <NavBar />
        </section>

        <section class="main-section pt-20 w-full mr-5">
          <div class="w-full pl-10 sm:pl-10 md:pl-20 lg:pl-20" >
            <div class="w-full">
              <div class="flex identity-button">
                <button class="text-nowrap h-button-first w-button-first rounded-md bg-white text-cyan-deep py-3 px-5 text-sub-content font-weight-nav font-family-nav my-2 flex items-center justify-center">
                  THE IDENTITY VERIFICATION PLATFORM
                </button>
              </div>
              <div class="page1-title">
                <span class="text-cyan-deep">Construisez une base <br /> d'utilisateurs fiables grâce à la <br /></span>
                <span className='text-cyan-color'>vérification d'identité facile et <br /> rapide</span>
              </div>
              <div class="page1-content">
                Votre plateforme de vérification d'identité alimentée par l'IA pour la prévention des fraudes, <br />
                la conformité et la protection de vos clients. Construisez des communautés numériques de <br />
                confiance, améliorez l'expérience utilisateur et stimulez la croissance de votre entreprise.
              </div>
              <div class="flex group-button mt-5 gap-10 ">
                <button class="btn-page1">Commencer gratuitement</button>
                <button class="btn-next-page1">Contacter</button>
              </div>
              <div >
                <h2 class="page1-title2">
                  Nous vous aidons à <span className='text-cyan-color'>facilement accepter<br />
                    des utilisateurs fiables </span>  et à repousser les <br />
                  fraudeurs pour votre entreprise.
                </h2>
              </div>
            </div>
          </div>

          {/* Grid section */}
          <div class='w-full'>
            <div class="cart-with-image w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 rounded-2xl bg-white items-center justify-center gap-5 sm:gap-x-20 py-10 px-10">
              <div class="flex items-center justify-center">
                <div class="relative text-left pl-24 flex flex-col items-center justify-center">
                  <h4 className='section-card1-title'>
                    Rendez la vérification facile et <br />rapide pour vos utilisateurs
                  </h4>
                  <p className='section-card1-content'>
                    Offrez à vos utilisateurs une expérience de <br />
                    vérification fluide et sans tracas. Grâce à<br /> notre
                    technologie de pointe, la vérification <br />d'identité
                    devient un processus simple et <br /> rapide.
                  </p>
                  <img src={image3} alt="" className='absolute top-0 left-6' />
                </div>
              </div>
              <div class="flex items-center justify-center">
                <div class="relative text-left pl-24">
                  <h4 className='section-card1-title'>
                    Decouvrez qui vous acceptez <br /> dans votre plateforme
                  </h4>
                  <p className='section-card1-content'>
                    Atteignez des utilisateurs dans toute l'Afrique <br />
                    et au-delà. Notre plateforme globale vous <br /> permet
                    d'accepter des utilisateurs de diverses  <br />régions,
                    en surmontant les obstacles<br /> géographiques et
                    linguistiques.
                  </p>
                  <img src={image2} alt="" className='absolute top-0 left-6' />
                </div>
              </div>
              <div class="relative flex items-center justify-center">
                <div class="relative text-left pl-24">
                  <h4 className='section-card1-title'>
                    Decouvrez qui vous acceptez <br />
                    dans votre plateforme
                  </h4>
                  <p className='section-card1-content'>
                    En combinant l'analyse biométrique avec des <br />
                    vérifications approfondies d'antécédents et<br /> une
                    collecte de données rigoureuse, nous vous <br /> offrons
                    une visibilité inégalée sur l'identité de <br /> ceux que
                    vous accueillez sur votre plateforme.
                  </p>
                  <img src={image1} alt="" className='absolute top-0 left-6' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*
          Heads up! 👋

          This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
        */}
        {/* problems  */}
        <section class="">
          <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="flex flex-wrap items-center justify-around  gap-y-8  ">
              <div class=" mx-10">
                <h2 class="page-title3">
                  Acceptez un maximum de documents <br />
                  pour vérifier les identité de vos <br />
                  utilisateurs dans leur region
                </h2>
                <div class="page-title3-content">
                  Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                  avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                  vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                  inexistants et des frais de
                </div>
                <div class="grid grid-cols-2 items-center justify-center gap-10">
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                </div>
              </div>

              <div className=" relative flex flex-col items-center justify-center md:flex-col lg:flex-col items-center justify-center gap-5 sm:flex-col">
                <div className="card-vert"></div>

                <div className="card-vert"> </div>
                <div className='absolute -top-16 -right-3 cniPassport'>
                  <img src={cniPassport} alt="" className='cover' />
                </div>
                {/* <img src={picture1} alt="" className='cover w-96' /> */}

              </div>
            </div>
          </div>
        </section>

        {/*
          Heads up! 👋

          This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
        */}

        {/* problems  */}
        <section class="vector-bigMother">
          <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="flex flex-wrap-reverse items-center justify-around  gap-y-32 gap-x-8">
              <div className=" relative flex items-center justify-center gap-10">
                <div className="card-horiz"> </div>

                <div className="card-horiz"></div>

                <img src={grandMere} alt="" className='absolute card-grandMere' />
                {/* <img src={picture2} alt="" className='' /> */}
              </div>
              <div class=" mx-10">
                <h2 class="page-title3">
                  Acceptez un maximum de documents <br />
                  pour vérifier les identité de vos <br />
                  utilisateurs dans leur region
                </h2>
                <div class="page-title3-content">
                  Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                  avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                  vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                  inexistants et des frais de
                </div>
                <div class="grid grid-cols-2 items-center justify-center gap-10">
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
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
        {/* problems  */}
        <section class="">
          <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="flex flex-wrap items-center justify-around  gap-y-8  ">
              <div class=" mx-10">
                <h2 class="page-title3">
                  Acceptez un maximum de documents <br />
                  pour vérifier les identité de vos <br />
                  utilisateurs dans leur region
                </h2>
                <div class="page-title3-content">
                  Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                  avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                  vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                  inexistants et des frais de
                </div>
                <div class="grid grid-cols-2 items-center justify-center gap-10">
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-col lg:flex-col items-center justify-center gap-10 sm:flex-col pt-10">
                <div className="card-vert"></div>

                <div className="card-vert" >
                  <div className='absolute top-5 -left-8 groupGirl'>
                    <img src={groupGirl} alt="" className='cover' />
                  </div>
                  {/* <img src={groupGirl} alt="" className='absolute -top-1 -left-5 groupGirl' /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*
          Heads up! 👋

          This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
        */}

        <section class="vector-dataBase">
          <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="relative flex flex-wrap-reverse items-center justify-around  gap-y-32 gap-x-8">
              <div className=" flex items-center justify-center gap-10">
                <div className="card-horiz"> </div>

                <div className="card-horiz"></div>

                <img src={groupDatabase} alt="" className='absolute card-groupDatabase' />
                {/* <img src={picture2} alt="" className='' /> */}
              </div>
              <div class=" mx-10">
                <h2 class="page-title3">
                  Acceptez un maximum de documents <br />
                  pour vérifier les identité de vos <br />
                  utilisateurs dans leur region
                </h2>
                <div class="page-title3-content">
                  Localement ou internationalement, vos achats en ligne ne connaissent plus de limite <br />
                  avec les carte virtuelles Visa MasterCard de chez SEKURE. En 2 minutes, créez et <br />
                  vérifiez votre compte Sekure pour obtenir votre carte virtuelle. Entre des frais d'entretien <br />
                  inexistants et des frais de
                </div>
                <div class="grid grid-cols-2 items-center justify-center gap-10">
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                  <div class="flex items-center justify-center gap-5">
                    <div class="">
                      <img src={smallCircle} alt="" />
                    </div>
                    <div class="small-circle-content">
                      Idéales pour sponsoriser les publicités <br /> sur facebook, LinkedIn, X, Google
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section>
          {/* Grid section */}
          <div class="frame-background  py-10 px-5">

          <a href="#" className='btn-choice-us'> Pourquoi nous choisir</a>
            <div class="page-title3-multi-card py-5">
              Avec Aibiometrics, les <span className='text-cyan-color'> étrangers</span> anonymes deviennent <br /> facilement <span className='text-cyan-color'>votre base clientèle fiable</span>
            </div>

            <div class="page1-content-multi-card text-center pb-5">
            Nos clients sont au cœur de nos préoccupations. Grâce à notre solution, 98% de nos utilisateurs ont déclaré être satisfaits <br />
            de l'expérience de vérification. De plus, nous avons réduit de 50% le taux d'abandon lors du processus d'inscription.
            </div>

            <div class="card-anonymously gap-y-10 ">
               
              <div class="bg-multi-card">
                <div class=" bg-multi-card-number">
                  6 secs
                </div>
                <div class="bg-multi-card-text">
                  temps moyen de <br /> validation
                </div>
              </div>

              <div class="bg-multi-card">
                <div class=" bg-multi-card-number">
                  95%
                </div>
                <div class="bg-multi-card-text">
                  Taux de verification <br />
                  à la premiere tentaive
                </div>
              </div>
              <div class="bg-multi-card">
                <div class=" bg-multi-card-number">
                  2000+
                </div>
                <div class="bg-multi-card-text">
                  Types de documents <br /> acceptés
                </div>
              </div>
              <div class="bg-multi-card">
                <div class=" bg-multi-card-number">
                  180+
                </div>
                <div class="bg-multi-card-text">
                  Pays couverts dans <br /> le monde
                </div>
              </div>
              <div class="bg-multi-card">
                <div class=" bg-multi-card-number">
                  +95%
                </div>
                <div class="bg-multi-card-text">
                  Taux de détection <br /> des fraudes
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* problems  */}
        <MiniNavBar/>

        <section class="world-section px-20 " style={{ backgroundImage: `url(${world})`, backgroundPosition: "top right", backgroundRepeat: "no-repeat" }}>

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


          {/* ///////////////////////////////////// */}
          {/* <div class="big-circles gap-y-10 pb-10">
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
          </div> */}

          {/* /////////////////////// */}

          <div class="big-circles grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-5 pb-10">
            <div class="group flex flex-col items-center justify-center relative">
              <div class="">
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

            <div class="group flex flex-col items-center justify-center relative">
              <div class="">
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
              <div class="absolute arrow-circle opacity-0 md:opacity-100">
                <img src={arrow} alt="" />
              </div>
            </div>

            <div class="group flex flex-col items-center justify-center relative">
              <div class="">
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
              <div class="absolute arrow-circle md:opacity-0 lg:opacity-100">
                <img src={arrow} alt="" />
              </div>
            </div>

            <div class="group flex flex-col items-center justify-center relative">
              <div class="">
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
              <div class="absolute arrow-circle opacity-0 md:opacity-100">
                <img src={arrow} alt="" />
              </div>
            </div>

            <div class="group flex flex-col items-center justify-center relative">
              <div class="">
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
              <div class="absolute arrow-circle md:opacity-0 lg:opacity-100">
                <img src={arrow} alt="" />
              </div>
            </div>

            <div class="group flex flex-col items-center justify-center relative">
              <div class="">
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
              <div class="absolute arrow-circle opacity-0 md:opacity-100">
                <img src={arrow} alt="" />
              </div>
            </div>

            {/* <div class="group flex flex-col items-center justify-center relative">
              <div class="">
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
            </div> */}

            {/* <div class="group flex flex-col items-center justify-center relative">
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
            </div> */}
          </div>
        </section>

        {/* problems */}
        {/* style={{ backgroundImage: `url(${phones})`, backgroundPosition: "bottom right", backgroundRepeat: "no-repeat" }} */}
        {/* <section class="bg-white phone-section pt-10 " >
          <div className='flex flex-wrap items-center justify-around gap-x-10 gap-y-10 groupcni px-5'>
            <div class=" text-left" >
              <div class=" flex">
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
            <div className='relative group-cni' >
              <img src={userCni} alt="" className='w-full h-full userCni' />
              <img src={userPhone} alt="" className='absolute userPhone' />
            </div>
          </div>
        </section> */}

        <section>
          <Footer />
        </section>
      </div>
    </div>
  )
}