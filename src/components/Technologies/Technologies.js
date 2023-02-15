import React from "react";
import {
  DiPython,
  DiAws,
  DiDocker,
  DiGit,
  DiMongodb,
  DiMysql,
  DiNpm,
  DiReact,
  DiPostgresql,
  DiNodejsSmall,
  DiGoogleCloudPlatform,
  DiDigitalOcean,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import {ExternalLinks} from "../Cards/CardStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with the following technologies in the web development world.
      Now I'm focused towards Web3 & Blockchain Tech.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiNodejsSmall size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Node-Js</ListTitle>
          <ListParagraph>
            Experience with <br />
            ExpressJS, Middlewear & other npm packages
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMongodb size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mongodb</ListTitle>
          <ListParagraph>
            Experience with <br />
            Mongodb, Mongo-Compass & its queries including aggregations
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPostgresql size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>PostgreSQL</ListTitle>
          <ListParagraph>
            Experience with <br />
            PostgreSQL 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDocker size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Docker</ListTitle>
          <ListParagraph>
            Experience with <br />
            Containers and it's Images
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPython size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python programming language
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMysql size="5.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>MySql</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySql Database and its queries
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiReact size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JavaScript, React, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNpm size="5.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Npm</ListTitle>
          <ListParagraph>
            Experience with <br />
            Npm package manager and its libraries
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGit size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git and other tools Trello, Assana, Jira  
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAws size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>AWS</ListTitle>
          <ListParagraph>
            Experience with <br />
            EC2, S3 Bucket, server deployements
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiDigitalOcean size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Digital Ocean</ListTitle>
          <ListParagraph>
            Experience with <br />
            Digital Ocean 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGoogleCloudPlatform size="5.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Google Cloud Platform</ListTitle>
          <ListParagraph>
            Experience with <br />
            Google Cloud platform and its tools
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <ExternalLinks href='/resume' className="link-to" title="view Resume">view Resume</ExternalLinks>
  </Section>
);

export default Technologies;
