import { Layout } from "../src/layout/Layout";
import { Section } from "../src/styles/GlobalComponents/";
import BgAnimation from "../src/components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../src/components/Hero/Hero";
import React from "react";
export default function Home() {

  return (
    <Layout>
      <Section grid center>
        <Hero />
        <BgAnimation />
      </Section>
      

    </Layout>
  );
}
