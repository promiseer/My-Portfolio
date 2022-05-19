import React from 'react';
import { FaLinkedin, FaYoutubeSquare, FaBehanceSquare, FaGithubSquare, FaTwitterSquare, FaInstagramSquare, FaFileDownload } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import { ImageHolder, ProfileButton } from "../../components";
import { ProfessionalHeadshot, FallbackProfessionalHeadshot, HomeBackground } from '../../assets';
import styles from "./Home.module.css";

const Home = () => {
    return (
        <Container fluid className={styles.container} style={{ background: `url(${HomeBackground})` }}>
            <Row>
                <ImageHolder
                    primarySource={ProfessionalHeadshot}
                    secondarySource={FallbackProfessionalHeadshot}
                    alt="Professional Headshot of Parmeshwar Namdeo Rathod"
                    className={styles.professionalHeadshot}
                />
            </Row>
            <Row>
                <Col><span className={`${styles.textWhite} ${styles.headingOne}`}>Parmeshwar Namdeo Rathod</span></Col>
            </Row>
            <Row>
                <Col><span className={`${styles.textWhite} ${styles.headingThree}`}>Software Engineer, Full-Stack Developer, College Student</span></Col>
            </Row>
            <Row>

                <Col><a href="https://www.linkedin.com/in/parmeshwar4321" target="_blank_"><FaLinkedin className={styles.icon} /></a></Col>
                <Col><a href="https://www.github.com/parmeshwar4321" target="_blank_"><FaGithubSquare className={styles.icon} /></a></Col>
                <Col><a href="https://twitter.com/parmeshwar4321" target="_blank_"><FaTwitterSquare className={styles.icon} /></a></Col>
                <Col><a href="https://www.instagram.com/_p_a_r_m_y_a_.007/" target="_blank_"><FaInstagramSquare className={styles.icon} /></a></Col>
            </Row>
            <Row>
                <Col><ProfileButton logo={<FaFileDownload className={styles.iconSmall} />} href="./resume.html">Résumé</ProfileButton></Col>
            </Row>
            {/* <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <ProfileCard logo={CICSLogo} logoAlt="University of Massachusetts Amherst"> Undergraduate Course Assistant at Manning CICS </ProfileCard>
                <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass"> Tech + Design Member at HackUMass Organizing Team </ProfileCard>
                <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass"> Software Developer at HackUMass Organizing Team </ProfileCard>
            </Row> */}
        </Container>
    )
}

export default Home;