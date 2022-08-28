// react
import React from "react";

// styles
import "../../scss/components/_projectCard.scss";

// interfaces
interface Props {
  id: Number;
  currentSlide: Number;
  desktop: string;
  mobile: string;
  slowScroll?: boolean;
}

const ProjectCard: React.FC<Props> = ({ id, currentSlide, desktop, mobile, slowScroll }) => {
  return (
    <div
      className={`projectCard ${id === currentSlide && "currentSlide"}`}
      id={"" + id}
    >
      <div className="projectCard__content">
        <div className="projectCard__desk">
          <img src={desktop} alt="Project in desktop view" />
        </div>

        <div className="projectCard__mobile">
          <img src={mobile} alt="Project in mobile view" className={`${slowScroll && "slowScroll"}`} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
