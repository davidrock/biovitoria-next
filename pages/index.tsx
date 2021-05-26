import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Header from "../components/header";
import { OurServices } from "../components/our-services";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <main>
        <div className="bg-biovitoria text-white">
          <div className="container mx-auto px-4 py-16">
            <OurServices />
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
