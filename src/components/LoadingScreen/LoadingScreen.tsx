// react
import React, { useEffect } from "react";

// styles
import "../../scss/components/__loadingScreen.scss";

// components
import BarField from "../BarField/BarField";

interface props {
  progress: number;
}

const LoadingScreen: React.FC<props> = ({ progress }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {document.body.style.overflow = "auto"}
  }, [])
  
  return (
    <div className="loadingScreen">
      <h1>I'm thinking...</h1>

      <div className="loadingScreen_bar">
        <BarField progress={progress} label="" />
      </div>
    </div>
  );
};

export default LoadingScreen;
