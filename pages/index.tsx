import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Banner from "../components/banner";
import Header from "../components/header";
import { OurServices } from "../components/our-services";
import Places from "../components/places";
import { WhatWeDo } from "../components/what-we-do";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <Banner />
      <main>
        <div className="bg-biovitoria text-white">
          <div className="container mx-auto px-4 py-16 h-full">
            <WhatWeDo />
          </div>
        </div>
        <div className="bg-gray-50 text-white">
          <div className="container mx-auto px-4 py-16">
            <OurServices />
          </div>
        </div>
        <div className="bg-pink-100 text-white">
          <div className="container mx-auto px-4 py-16">
            <Places />
          </div>
        </div>
        <div className="bg-gray-400 text-white">
          <div className="container mx-auto px-4 py-16">
            <About />
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
