import { Project } from "@/app/models/project";
import { motion } from "framer-motion";
import { LinksSection } from "../../LinksSection";
import Modal from "../../Modal";
import styles from "./detailed-project-modal.module.css";
import Video from "../../Video";
import {
  DragEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChevronDoubleUp } from "@styled-icons/heroicons-outline/ChevronDoubleUp";

interface Props {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const DetailedProjectModal: React.FC<Props> = (props) => {
  const { isOpen, onClose, project } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsSectionRef = useRef<HTMLElement>(null);
  const [hasDragged, setHasDragged] = useState(false);

  useEffect(() => {
    if (isOpen) setHasDragged(false);
  }, [isOpen]);

  const handleScrollHandleDrag: DragEventHandler<HTMLSpanElement> = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (e.screenY === 0) return;
      const cursorY = e.clientY;
      const containerY = containerRef.current!.getBoundingClientRect().top;
      const diff = cursorY - containerY;

      detailsSectionRef.current!.style.overflowY = "hidden";
      detailsSectionRef.current!.style.height = `min(calc(100% - ${diff}px), 100%)`;
      setHasDragged(true);
    },
    []
  );

  const handleScrollHandleDragEnd: DragEventHandler<HTMLSpanElement> =
    useCallback((e) => {
      e.stopPropagation();
      e.preventDefault();
      const { height: drawerHeight } =
        containerRef.current!.getBoundingClientRect();
      const { height: contaienerHeight } =
        detailsSectionRef.current!.getBoundingClientRect();
      const fraction = contaienerHeight / drawerHeight;

      if (fraction > 0.5) {
        detailsSectionRef.current!.style.height = "100%";
        detailsSectionRef.current!.style.overflowY = "auto";
      } else {
        detailsSectionRef.current!.style.height = "0%";
        detailsSectionRef.current!.style.overflowY = "hidden";
      }
    }, []);

  const mainVideoUrl = project.videos_url[0]!;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        ref={containerRef}
        className={styles.container}
        data-img={project.img_url}
      >
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          ref={detailsSectionRef}
          className={styles.details_container}
        >
          <span
            onDrag={handleScrollHandleDrag}
            onDragEnd={handleScrollHandleDragEnd}
            className={styles.details_scroll_handle}
          ></span>
          <article>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {project.videos_url.map((video_url) => (
              <Video
                key={video_url}
                src={video_url}
                className={styles.content_video}
                preload="metadata"
                controls
                width="80%"
                height="auto"
              />
            ))}
            <LinksSection.Root title="More details:">
              <LinksSection.OrdinaryList list={project.details_links} />
            </LinksSection.Root>
            <LinksSection.Root title="Tech stack:">
              <LinksSection.TechList list={project.tech_stack_links} />
            </LinksSection.Root>
          </article>
        </motion.footer>
        {!hasDragged && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
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
        <Video
          src={mainVideoUrl}
          poster={project.img_url}
          className={styles.backdrop_video}
          loop
          autoPlay
          width="85vw"
          height="auto"
        />
      </div>
    </Modal>
  );
};

export default DetailedProjectModal;
