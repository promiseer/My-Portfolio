import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  CardInfo,
  HeaderThree,
  PictureImg,
  Picture,
  Hr,
  ImgContainer,
  Tag,
  TagList,
  TitleContent,
  ProjectPlaceholder,
  ExternalLinks,
} from "./CardStyles";
import { BsPlusCircleFill } from "react-icons/bs";
import ProjectModal from "../Modal/ProjectModal";

const variants = {
  pageInitial: {
    opacity: 0,
    scale: 0.5,
  },
  pageAnimate: {
    opacity: 1,
    scale: 1,
  },
  pageExit: {
    opacity: 0,
    scale: 0.5,
  },
};

const ProjectCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const toggleModal = () => setIsOpen(!isOpen);

  const { title, description, tags, image, imageWebp, images, liveUrl } = item;

  return (
    <motion.div
      key={title}
      className="project-card"
      layout
      initial="pageInitial"
      animate="pageAnimate"
      variants={variants}
      transition={{ type: "tween" }}
    >
      <ImgContainer>
        {image ? (
          <Picture>
            {imageWebp && <source srcSet={imageWebp} type="image/webp" />}
            <PictureImg src={image} alt={title} />
          </Picture>
        ) : (
          <ProjectPlaceholder>{title}</ProjectPlaceholder>
        )}

        <Button
          type="button"
          aria-label="Open Project Gallery in a modal window"
          onClick={openModal}
        >
          <BsPlusCircleFill />
        </Button>
        <ProjectModal
          isOpen={isOpen}
          toggleModal={toggleModal}
          title={title}
          images={images}
        />
      </ImgContainer>
      <TitleContent>
        <HeaderThree title>{title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo className="card-info">{description}</CardInfo>
      {liveUrl && (
        <ExternalLinks href={liveUrl} target="_blank" rel="noreferrer">
          View project
        </ExternalLinks>
      )}
      <div className="card-footer">
        <TitleContent style={{ marginTop: "20px" }}>
          <b>Stack</b>
        </TitleContent>
        <TagList>
          {tags.map((t, i) => {
            return <Tag key={i}>{t}</Tag>;
          })}
        </TagList>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
