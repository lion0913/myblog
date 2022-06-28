import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

// markup

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Mountain⛰</h1>
      <StaticImage alt="구름이 보이는 아름다운 산" src="../images/mountain.jpeg"/> 
      <p>산</p>
      
    </Layout>
  );
};

export default IndexPage;