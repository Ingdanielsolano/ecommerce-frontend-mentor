import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>e-commerce landing</title>
        <meta name="description" content="e-commerce " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home">
        <h1 className="home__title">
          This project is done for this{" "}
          <a href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6">
            Frontend Mentor Challenge
          </a>
        </h1>
        <p className="home__subtitle">
          <Link href="/product">This</Link> is the route of the challenge solved
        </p>
      </main>
    </div>
  );
};

export default Home;
