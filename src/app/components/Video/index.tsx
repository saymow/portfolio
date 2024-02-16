interface Props {
  src: string;
  width: string;
  height: string;
  className?: string;
  loop?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  preload?: string;
}

const Video: React.FC<Props> = (props) => {
  const { src, height, width, loop, autoPlay, controls, preload, className } =
    props;

  return (
    <video
      className={className}
      style={{
        width,
        height,
      }}
      loop={loop}
      autoPlay={autoPlay}
      controls={controls}
      preload={preload}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
