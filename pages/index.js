import Head from "next/head";
import Header from "../components/helpers/Header";
import Bottom from "../components/home/Bottom";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Southern Glazer</title>
        <link rel="icon" href="http://ifewl.com/logo.png" />
      </Head>
      <Header />
      <Hero />
      <Bottom />
    </div>
  );
}
