'use client';


import CodeArea from "./component/CodeArea";
import SocialMedia from "./component/SocialMedia";
import TypewriterEffect from "./component/TypeWriterEffect";
import Layout from "./layout";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Layout title="Portfolio" description={"My Portfolio"}>
      <motion.img
        className="max-md:hidden md:w-32 absolute h-auto top-24 left-16 z-[1]"
        src="/ballon-3.png"
        alt="ballon-3"

        animate={{
          y: [0, -32, 0], // Yukarı ve aşağı hareket etmek için
        }}
        transition={{
          duration: 7,     // Animasyonun süresi
          repeat: Infinity, // Sonsuz döngü
          repeatType: "loop", // Döngü tipi (başladığı yere dönecek)
          ease: "easeInOut",  // Hareket yumuşaklığı
        }}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0, }}

      />
      <motion.img
        className="max-md:hidden w-48 absolute h-auto top-48 right-10 z-[1]"
        src="/ballon-1.png"
        alt="ballon-1"

        animate={{
          y: [0, -36, 0], // Yukarı ve aşağı hareket etmek için
        }}
        transition={{
          duration: 9,     // Animasyonun süresi
          repeat: Infinity, // Sonsuz döngü
          repeatType: "loop", // Döngü tipi (başladığı yere dönecek)
          ease: "easeInOut",  // Hareket yumuşaklığı
        }}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0, }}

      />
      <motion.img
        className="max-md:hidden md:w-40 absolute h-auto bottom-36 left-24 z-[1]"
        src="/ballon-2.png"
        alt="ballon-2"

        animate={{
          y: [0, -40, 0], // Yukarı ve aşağı hareket etmek için
        }}
        transition={{
          duration: 8,     // Animasyonun süresi
          repeat: Infinity, // Sonsuz döngü
          repeatType: "loop", // Döngü tipi (başladığı yere dönecek)
          ease: "easeInOut",  // Hareket yumuşaklığı
        }}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0, }}

      />


      <div className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 max-md:pt-8">
          <div className="mt-2 md:mt-5 flex max-md:flex-col max-md:mx-auto md:justify-start justify-between items-start">
            <div className="mt-2 md:mt-5 max-md:mb-5"><SocialMedia /></div>
            <div >
              <div>
                <div className="flex flex-col justify-start "><h4 className="text-lg text-gray-800 dark:text-primary-light">
                  <span className="text-xl font-normal">Merhaba, </span>Ben
                </h4>
                  <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-primary-light">Cengiz AYDEMİR</h1>
                </div>
                <div className="h-20 md:h-32 md:w-[620px]"><TypewriterEffect /></div>
              </div>
              <article className=" md:w-[720px]"><CodeArea /></article>
            </div>
            <span></span>
          </div>

        </section>
      </div>

    </Layout>
  );
};

export default Home;
