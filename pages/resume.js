import React from "react";
import { Section } from "../src/styles/GlobalComponents/";

const MyResume = () => {
  return (
    <Section
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        src="/resume.pdf"
        style={{ width: "90%", height: "100%", border: "none" }}
      />
    </Section>
  );
};

export default MyResume;
