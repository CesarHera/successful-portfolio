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
}

const ProjectCard: React.FC<Props> = ({ id, currentSlide, desktop, mobile }) => {
  return (
    <div
      className={`projectCard ${id === currentSlide && "currentSlide"}`}
      id={"" + id}
    >
      <div className="projectCard__content">
        <div className="projectCard__desk">
          <img src={desktop} />
        </div>

        <div className="projectCard__mobile">
          <img src={mobile} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
