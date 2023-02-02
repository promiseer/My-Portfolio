import { Layout } from "../src/layout/Layout";
import { Section } from "../src/styles/GlobalComponents/";
import BgAnimation from "../src/components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../src/components/Hero/Hero";
import Projects from "../src/components/Projects/Projects";
import Technologies from "../src/components/Technologies/Technologies";
import Timeline from "../src/components/TimeLine/TimeLine";

import React from "react";
export default function Home() {

  return (
    <Layout>
      <Section grid center>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Projects/>
      <Technologies/>
    </Layout>
  );
}
