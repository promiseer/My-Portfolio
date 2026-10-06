import React, { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../src/constants/constants";
import styled from "styled-components";

const Page = styled.main`
  --bg: ${props => (props.dark ? "#1c1a17" : "#ece8dd")};
  --paper: ${props => (props.dark ? "#2a2723" : "#f7f3ea")};
  --ink: ${props => (props.dark ? "#f1ebe0" : "#2a2622")};
  --muted: ${props => (props.dark ? "#b8afa1" : "#5d564d")};
  --accent: ${props => (props.dark ? "#d9917a" : "#b2674f")};
  --chip: ${props => (props.dark ? "#383329" : "#e9dfd0")};
  min-height: 100vh;
  padding: 5.5rem 2.4rem 6rem;
  color: var(--ink);
  background-color: var(--bg);
  background-image: repeating-linear-gradient(0deg, rgba(120, 100, 70, .05) 0 1px, transparent 1px 3px);
  transition: background-color .25s ease, color .25s ease;
  font-family: Outfit, sans-serif;

  @media (max-width: 520px) {
    padding: 4rem 1.5rem 4.5rem;
  }
`;

const Inner = styled.div`
  max-width: 112rem;
  margin: 0 auto;
`;

const ThemeButton = styled.button`
  position: fixed;
  top: 1.8rem;
  right: 1.8rem;
  z-index: 5;
  border: 0;
  border-radius: 999px;
  padding: .9rem 1.6rem;
  color: var(--ink);
  background: var(--paper);
  box-shadow: 0 1.8rem 3rem -1.2rem rgba(60, 45, 30, .35), 0 2px 4px rgba(60, 45, 30, .12);
  font: 600 1.5rem Outfit, sans-serif;
  cursor: pointer;
`;

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 4.8rem;
  align-items: start;

  @media (max-width: 860px) { grid-template-columns: 1fr; }
`;

const Paper = styled.div`
  position: relative;
  background: var(--paper);
  box-shadow: 0 1.8rem 3rem -1.2rem rgba(60, 45, 30, .35), 0 2px 4px rgba(60, 45, 30, .12);
`;

const Intro = styled(Paper)`
  padding: 5.6rem 4.8rem 4rem;
  transform: rotate(-1deg);
  @media (max-width: 520px) { padding: 4.4rem 2.6rem 3rem; }
`;

const Tape = styled.span`
  position: absolute;
  top: -2.6rem;
  left: 46%;
  width: 13rem;
  height: 4rem;
  background: repeating-linear-gradient(-60deg, #d6cf93 0 7px, #e3ddb0 7px 14px);
  opacity: .9;
  transform: rotate(-2deg);
`;

const Eyebrow = styled.p`
  margin: 0 0 1.4rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: .2em;
  text-transform: uppercase;
`;

const Heading = styled.h1`
  max-width: 8em;
  margin: 0 0 2.4rem;
  color: var(--ink);
  font: 800 clamp(4rem, 6vw, 6.8rem)/1.05 Outfit, sans-serif;
  letter-spacing: -.03em;
  em { color: var(--accent); font-style: normal; }
`;

const Lede = styled.p`
  max-width: 34em;
  margin: 0 0 2.6rem;
  color: var(--muted);
  font-size: 2.1rem;
`;

const Chips = styled.div`display: flex; flex-wrap: wrap; gap: 1.2rem;`;
const Chip = styled.span`
  padding: .7rem 1.6rem;
  border-radius: 999px;
  background: var(--chip);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .06);
  font-size: 1.7rem;
  font-weight: 500;
  &::before { content: ""; display: inline-block; width: 8px; height: 8px; margin-right: 9px; border-radius: 50%; background: var(--accent); }
`;

const Polaroid = styled(Paper)`
  padding: 1.4rem 1.4rem 1.8rem;
  background: #fdfbf6;
  color: #2a2622;
  transform: rotate(3deg);
  margin-top: 3.4rem;
  @media (max-width: 860px) { max-width: 26rem; margin: 1rem auto 0; }
`;

const Portrait = styled.div`
  aspect-ratio: 1 / 1.05;
  overflow: hidden;
  background: #d7c6a1;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

const Hand = styled.p`
  margin: 1.2rem 0 0;
  color: ${props => props.color || "var(--accent)"};
  font: 500 2.5rem/1.5 Caveat, cursive;
  text-align: center;
`;

const Search = styled.label`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  max-width: 62rem;
  margin: 6.4rem auto 0;
  padding: .6rem 1.4rem;
  border: 1px solid rgba(0, 0, 0, .05);
  border-radius: 1.2rem;
  background: var(--paper);
  box-shadow: 0 6px 16px -8px rgba(60, 45, 30, .35);
  &:focus-within { box-shadow: 0 0 0 2px var(--accent); }
  input { flex: 1; min-width: 0; padding: 1.4rem .4rem; border: 0; outline: 0; background: none; color: var(--ink); font: 500 1.9rem Outfit, sans-serif; }
`;

const BoardLabel = styled.h2`
  margin: 9rem 0 3.4rem;
  color: ${props => (props.dark ? "#9db6d8" : "#3f5879")};
  font: 500 3rem/1.2 Caveat, cursive;
  text-align: left;
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.8rem;
  @media (max-width: 860px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

const PinCard = styled.a`
  display: block;
  min-height: 24rem;
  padding: 4.2rem 2.4rem 2.4rem;
  color: var(--ink);
  background: var(--paper);
  box-shadow: 0 1.8rem 3rem -1.2rem rgba(60, 45, 30, .35), 0 2px 4px rgba(60, 45, 30, .12);
  text-decoration: none;
  transition: transform .2s ease;
  transform: rotate(${props => props.rotation}deg);
  &:hover, &:focus-visible { transform: rotate(0) translateY(-6px); outline: 0; }
  &:focus-visible { box-shadow: 0 0 0 2px var(--accent), 0 1.8rem 3rem -1.2rem rgba(60, 45, 30, .35); }
`;

const Pin = styled.i`
  position: absolute; top: -1rem; left: 2.8rem; width: 2.2rem; height: 2.2rem; border-radius: 50%; background: ${props => props.color};
  box-shadow: inset -3px -3px 5px rgba(0, 0, 0, .25), 0 4px 5px rgba(0, 0, 0, .25);
`;

const Kicker = styled.span`
  color: var(--muted); font-size: 1.4rem; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
`;

const CardTitle = styled.h3`margin: 2rem 0 .6rem; color: var(--ink); font: 600 2.7rem Outfit, sans-serif;`;
const CardText = styled.p`margin: 0 0 2rem; color: var(--muted); font-size: 1.8rem;`;
const CardLink = styled.span`font-weight: 600;`;
const Empty = styled.p`margin-top: 3rem; color: var(--muted); font-size: 2rem; text-align: center;`;
const Footer = styled.footer`margin-top: 9rem; color: var(--accent); font: 500 2.6rem Caveat, cursive; text-align: center; a { color: inherit; margin: 0 1rem; }`;

const ContentSection = styled.section`
  margin-top: 9rem;
  scroll-margin-top: 3rem;
`;

const SectionHeading = styled.h2`
  margin: 0 0 2.8rem;
  color: ${props => (props.dark ? "#9db6d8" : "#3f5879")};
  font: 500 3.4rem/1.2 Caveat, cursive;
`;

const PaperSection = styled(Paper)`
  padding: 3.6rem;
  @media (max-width: 520px) { padding: 2.4rem; }
`;

const AboutText = styled.p`
  max-width: 75rem;
  margin: 0 0 1.8rem;
  color: var(--muted);
  font-size: 1.8rem;
`;

const ExperienceList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media (max-width: 620px) { grid-template-columns: 1fr; }
`;

const ExperienceItem = styled.div`
  padding: 2rem;
  border-left: 4px solid ${props => props.color};
  background: var(--chip);
  transform: rotate(${props => props.rotation}deg);
  h3 { margin: 0 0 .6rem; color: var(--accent); font-size: 2.8rem; }
  p { margin: 0; color: var(--muted); font-size: 1.7rem; }
`;

const ProjectShelf = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  @media (max-width: 860px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const ProjectPaper = styled(Paper)`
  overflow: hidden;
  transform: rotate(${props => props.rotation}deg);
  transition: transform .2s ease;
  &:hover { transform: rotate(0) translateY(-5px); }
`;

const ProjectImage = styled.div`
  aspect-ratio: 16 / 10;
  background: var(--chip);
  img { width: 100%; height: 100%; object-fit: cover; }
  span { display: grid; height: 100%; place-items: center; color: var(--muted); font: 500 2.6rem Caveat, cursive; }
`;

const ProjectBody = styled.div`
  padding: 2rem;
  h3 { margin: 0 0 .8rem; color: var(--ink); font-size: 2.2rem; }
  p { margin: 0 0 1.4rem; color: var(--muted); font-size: 1.5rem; }
`;

const Tags = styled.div`display: flex; flex-wrap: wrap; gap: .6rem; span { padding: .4rem .8rem; border-radius: 999px; background: var(--chip); color: var(--muted); font-size: 1.2rem; }`;
const TechList = styled.div`display: flex; flex-wrap: wrap; gap: 1rem;`;
const TechChip = styled.span`padding: .8rem 1.3rem; border: 1px solid rgba(178, 103, 79, .25); border-radius: 999px; color: var(--ink); font-size: 1.6rem;`;
const InlineLink = styled.a`display: inline-block; margin-top: 2rem; color: var(--accent); font-weight: 600; text-decoration: underline;`;

export default function Home() {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    setDark(savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    const focusSearch = event => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  const cards = useMemo(() => [
    { label: "Projects", title: "Projects", text: `${projects.length} things I have built, open source and otherwise.`, link: "/all-projects", color: "#b2674f", rotation: -1 },
    { label: "Notes", title: "Notes", text: "Weekly write-ups on what I am building and learning.", link: "https://blog.parmeshwar.me/", color: "#5b6b4a", rotation: .6 },
    { label: "Skills", title: "Toolbox", text: "The languages, frameworks and tools I use daily.", link: "#toolbox", color: "#3f5879", rotation: -.4 },
    { label: "Contact", title: "Say hello", text: "Open to work, collabs and good conversations.", link: "mailto:parmeshwar@example.com", color: "#d9c98a", rotation: .9 },
  ], []);

  const visibleCards = cards.filter(card => `${card.label} ${card.title} ${card.text}`.toLowerCase().includes(query.toLowerCase().trim()));
  const toggleTheme = () => { const next = !dark; setDark(next); window.localStorage.setItem("portfolio-theme", next ? "dark" : "light"); };

  return (
    <Page dark={dark}>
      <ThemeButton onClick={toggleTheme} aria-label="Toggle color theme">{dark ? "light" : "dark"}</ThemeButton>
      <Inner>
        <Hero>
          <Intro>
            <Tape />
            <Eyebrow>Parmeshwar</Eyebrow>
            <Heading>Developer, <em>building in public.</em></Heading>
            <Lede>This is my desk on the internet: the things I am making, the notes I keep, and what I am learning along the way.</Lede>
            <Chips><Chip>Shipping a project</Chip><Chip>Writing weekly notes</Chip><Chip>Learning in public</Chip></Chips>
          </Intro>
          <Polaroid>
            <Tape />
            <Portrait><img src="/images/jpgs/ReactLibraryHomeDark.jpg" alt="A preview from Parmeshwar's project work" /></Portrait>
            <Hand color="#3d3a35">that is me - parmeshwar</Hand>
          </Polaroid>
        </Hero>
        <Search>
          <span aria-hidden="true">/</span>
          <input ref={searchRef} value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Search projects, notes and more..." aria-label="Search portfolio" />
          <span aria-hidden="true">cmd K</span>
        </Search>
        <BoardLabel dark={dark}>- pinned to the board -</BoardLabel>
        <Board id="toolbox">
          {visibleCards.map(card => <PinCard key={card.title} href={card.link} rotation={card.rotation} target={card.link.startsWith("http") ? "_blank" : undefined} rel={card.link.startsWith("http") ? "noreferrer" : undefined}>
            <Pin color={card.color} /><Kicker>{card.label}</Kicker><CardTitle>{card.title}</CardTitle><CardText>{card.text}</CardText><CardLink>Open it -&gt;</CardLink>
          </PinCard>)}
        </Board>
        {!visibleCards.length && <Empty>Nothing matches that search. Try a different word.</Empty>}
        <ContentSection id="about">
          <SectionHeading dark={dark}>- about me -</SectionHeading>
          <PaperSection>
            <AboutText>Hi there! My name is Parmeshwar, and I am a passionate backend developer with 1.5 years of experience in creating robust and efficient web applications. I specialize in Javascript, and I love working on complex backend architectures that help businesses grow and thrive.</AboutText>
            <AboutText>In my free time, I love to go for treks and spend some time with nature. I am dedicated to staying up to date with the latest technologies and trends, and I am always looking for new challenges and opportunities to expand my skills.</AboutText>
            <ExperienceList>
              <ExperienceItem color="#b2674f" rotation={-1}><h3>2021</h3><p>Started my journey as a Jr Backend Developer.</p></ExperienceItem>
              <ExperienceItem color="#5b6b4a" rotation={.8}><h3>2022</h3><p>Working as a Backend Developer at Schbang.</p></ExperienceItem>
            </ExperienceList>
          </PaperSection>
        </ContentSection>
        <ContentSection id="projects">
          <SectionHeading dark={dark}>- things I have built -</SectionHeading>
          <ProjectShelf>
            {projects.map((project, index) => <ProjectPaper key={project.id} rotation={index % 2 ? .5 : -.6}>
              <ProjectImage>{project.image ? <img src={`/${project.image}`} alt={`${project.title} preview`} /> : <span>work in progress</span>}</ProjectImage>
              <ProjectBody><h3>{project.title}</h3><p>{project.description}</p><Tags>{project.tags.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</Tags></ProjectBody>
            </ProjectPaper>)}
          </ProjectShelf>
          <InlineLink href="/all-projects">See all projects -&gt;</InlineLink>
        </ContentSection>
        <ContentSection id="tech">
          <SectionHeading dark={dark}>- the toolbox -</SectionHeading>
          <PaperSection>
            <AboutText>I have worked with these technologies in the web development world, with a current focus towards Web3 and blockchain tech.</AboutText>
            <TechList>{["Node.js", "ExpressJS", "MongoDB", "PostgreSQL", "Docker", "Python", "MySQL", "React", "Next.js", "Npm", "Git", "AWS", "Digital Ocean", "Google Cloud Platform"].map(technology => <TechChip key={technology}>{technology}</TechChip>)}</TechList>
            <InlineLink href="/resume.pdf">View resume -&gt;</InlineLink>
          </PaperSection>
        </ContentSection>
        <Footer><a href="https://github.com/" target="_blank" rel="noreferrer">github</a>·<a href="https://linkedin.com/" target="_blank" rel="noreferrer">linkedin</a>·<a href="mailto:parmeshwar@example.com">email</a></Footer>
      </Inner>
    </Page>
  );
}
