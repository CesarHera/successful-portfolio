// react
import React, { useEffect } from "react";

// styles
import "../../scss/components/_barField.scss";

import ProgressBar from "@ramonak/react-progress-bar";

import $ from "jquery";

// interface
interface Props {
  progress: number;
  label: string;
}

const BarField: React.FC<Props> = ({ progress, label }) => {
  const PROGRESS_BAR_CLASSNAMES = {
    className: "progressBar__barWrapper",
    labelClassName: "progressBar__label",
    barContainerClassName: "progressBar__barContainer",
  };

  useEffect(() => {
    $(".progressBar__barContainer").each((idx, element) => {
      element.children[0]!.className = "progressBar__progress";
    });
  }, []);

  return (
    <div className="progressBar">
      <p className="progressBar__title">{label}</p>
      <ProgressBar {...PROGRESS_BAR_CLASSNAMES} completed={progress} />
    </div>
  );
};

export default BarField;
