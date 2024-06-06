import { Project } from "@/app/models/project";
import { ChevronDoubleUp } from "@styled-icons/heroicons-outline/ChevronDoubleUp";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { LinksSection } from "../../LinksSection";
import Modal from "../../Modal";
import Video from "../../Video";
import styles from "./detailed-project-modal.module.css";

interface Props {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const STRIP_HTML_TAG = /^(!html)(\n|\s)*/;

const isHtml = (content: string) => {
  return content.startsWith("!html");
};

const stripHtmlTag = (content: string) => {
  return content.replace(STRIP_HTML_TAG, "");
};

const ProjectDescription = ({ content }: { content: string }) => {
  if (isHtml(content)) {
    return <div dangerouslySetInnerHTML={{ __html: stripHtmlTag(content) }}></div>;
  }

  return <p>{content}</p>;
};

const DetailedProjectModal: React.FC<Props> = (props) => {
  const { isOpen, onClose, project } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsSectionRef = useRef<HTMLElement>(null);
  const [hasDragged, setHasDragged] = useState(false);

  useEffect(() => {
    if (isOpen) setHasDragged(false);
  }, [isOpen]);

  const handleScrollHandleDrag = useCallback((e: MouseEvent) => {
    const cursorY = e.clientY;
    const containerY = containerRef.current!.getBoundingClientRect().top;
    const diff = cursorY - containerY;

    detailsSectionRef.current!.style.overflowY = "hidden";
    detailsSectionRef.current!.style.height = `min(calc(100% - ${diff}px), 100%)`;
    setHasDragged(true);
  }, []);

  const handleScrollHandleDragEnd = useCallback(
    (e: MouseEvent) => {
      const { height: drawerHeight } =
        containerRef.current!.getBoundingClientRect();
      const { height: contaienerHeight } =
        detailsSectionRef.current!.getBoundingClientRect();
      const fraction = contaienerHeight / drawerHeight;

      if (fraction > 0.5) {
        detailsSectionRef.current!.style.height = "100%";
      } else {
        detailsSectionRef.current!.style.height = "0%";
      }

      window.removeEventListener("mousemove", handleScrollHandleDrag);
      window.removeEventListener("mouseup", handleScrollHandleDragEnd);
    },
    [handleScrollHandleDrag]
  );

  const handleHandleMouseDown = () => {
    window.addEventListener("mousemove", handleScrollHandleDrag);
    window.addEventListener("mouseup", handleScrollHandleDragEnd);
  };

  const mainVideoUrl = project.videos[0]!.url;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        ref={containerRef}
        className={styles.container}
        data-img={project.img_url}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, transform: "translateX(-10px)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
        >
          {project.title}
        </motion.h1>
        <Video
          src={mainVideoUrl}
          poster={project.img_url}
          className={styles.backdrop_video}
          loop
          autoPlay
          width="85vw"
          height="auto"
        />
        {!hasDragged && (
          <motion.span
            initial={{ opacity: 0, transform: "translate(50%, 10px)" }}
            animate={{ opacity: 0.8, transform: "translateY(50%, 0)" }}
            className={styles.drag_hint}
          >
            <ChevronDoubleUp
              color="var(--bg-color)"
              height="3rem"
              width="3rem"
            />
            <span>Drag</span>
          </motion.span>
        )}
        <motion.footer
          initial={{ opacity: 0, transform: "translateY(10px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          ref={detailsSectionRef}
          className={styles.details_container}
        >
          <header>
            <span
              onMouseDown={handleHandleMouseDown}
              className={styles.details_scroll_handle}
            ></span>
            <h1>{project.title}</h1>
          </header>
          <article>
            {project.videos.length === 1 ? (
              <Video
                key={project.videos[0].url}
                src={project.videos[0].url}
                poster={project.videos[0].poster_url}
                className={styles.content_video}
                preload="metadata"
                controls
                width="80%"
                height="auto"
              />
            ) : (
              project.videos.map((video) => (
                <article className={styles.video_section} key={video.url}>
                  <h2>{video.title}</h2>
                  <Video
                    src={video.url}
                    poster={video.poster_url}
                    className={styles.content_video}
                    preload="metadata"
                    controls
                    width="80%"
                    height="auto"
                  />
                </article>
              ))
            )}
            <ProjectDescription content={project.description} />
            <LinksSection.Root title="More details:">
              <LinksSection.OrdinaryList list={project.details_links} />
            </LinksSection.Root>
            <LinksSection.Root title="Tech stack:">
              <LinksSection.TechList list={project.tech_stack_links} />
            </LinksSection.Root>
          </article>
        </motion.footer>
      </div>
    </Modal>
  );
};

export default DetailedProjectModal;
