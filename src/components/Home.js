import React from "react";
import image from "../Breakthrough.png";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <img
        src={image}
        alt="Breakthrough"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-4xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hello, I am Vaibhav.
        </h1>
      </section>
    </main>
  );
};

export default Home;
