import { Layout } from "../src/layout/Layout";
import { Section } from "../src/styles/GlobalComponents/";

import BgAnimation from "../src/components/BackgrooundAnimation/BackgroundAnimation";
import Projects from "../src/components/Projects/Projects";
export default function Home() {

  return (
    <Layout>
        <Projects />
    </Layout>
  );
}
