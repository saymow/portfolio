"use client";

import React, { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import { Projects } from "@/data/projects";
import { motion } from "framer-motion";
import styles from "./projects.module.css";
import Video from "@/app/projects/[slug]/Video";
import { LinksSection } from "@/components/LinksSection";
import Contact from "@/components/Contact";
import { ArrowLeftLong } from "@styled-icons/fa-solid/ArrowLeftLong";

const STRIP_HTML_TAG = /^(!html)(\n|\s)*/;

const isHtml = (content: string) => {
  return content.startsWith("!html");
};

const stripHtmlTag = (content: string) => {
  return content.replace(STRIP_HTML_TAG, "");
};

const ProjectDescription = ({ content }: { content: string }) => {
  if (isHtml(content)) {
    return (
      <div
        className={styles.project_description}
        dangerouslySetInnerHTML={{ __html: stripHtmlTag(content) }}
      ></div>
    );
  }

  return (
    <div className={styles.project_description}>
      <p>{content}</p>
    </div>
  );
};

const Project = () => {
  const { slug } = useParams();
  const { back } = useRouter();
  const project = useMemo(
    () => Projects.find((item) => item.slug === slug),
    [slug]
  )!;
  const mainVideoUrl = project.videos[0]!.url;

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, transform: "translateY(1rem)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        className={styles.container}
      >
        <span onClick={back} className={styles.navigate_button}>
          <ArrowLeftLong size="2rem" />
          go back
        </span>
        <h1 className={styles.title}>{project.title}</h1>
        <Video
          src={mainVideoUrl}
          poster={project.img_url}
          className={styles.backdrop_video}
          controls
          autoPlay
          width="100%"
          height="auto"
        />
        <article className={styles.additional_details}>
          <ProjectDescription content={project.description} />
          <LinksSection.Root title="More details">
            <LinksSection.OrdinaryList list={project.details_links} />
          </LinksSection.Root>
          <LinksSection.Root title="Tech stack">
            <LinksSection.TechList list={project.tech_stack_links} />
          </LinksSection.Root>
        </article>
      </motion.section>
      <Contact />
    </Layout>
  );
};

export default Project;
