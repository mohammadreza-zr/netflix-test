import { FC, MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";

import "./UnBoard.styles.scss";

import { icons } from "../..";

interface steps {
  title: string;
  description: string;
  video: boolean;
  videoSrc?: string;
  buttonLink?: string;
  background?: string;
}

interface unBoardProps {
  steps: steps[];
  length: number;
  setOpenPopup: MouseEventHandler<HTMLDivElement>;
}

export const UnBoard: FC<unBoardProps> = ({ steps, length, setOpenPopup }) => {
  const [stepNumber, setStepNumber] = useState<number>(0);

  return (
    <div className="un-board">
      <div className="un-board__background" onClick={setOpenPopup}></div>
      <div
        className="un-board__container"
        style={stepNumber === length ? { width: "40%" } : {}}
      >
        {stepNumber > 0 && (
          <button
            onClick={() => {
              if (stepNumber !== 0) {
                setStepNumber(stepNumber - 1);
              }
            }}
            className="un-board__container_back pointer"
          >
            <img
              src={icons.ArrowUp}
              alt=""
              className="un-board__container_back_img"
            />
          </button>
        )}
        <div
          className="un-board__container_content"
          style={
            steps[stepNumber]?.background
              ? { backgroundColor: steps[stepNumber]?.background }
              : {}
          }
        >
          <h2>{steps[stepNumber]?.title}</h2>
          <p>{steps[stepNumber]?.description}</p>
          {stepNumber !== length ? (
            <button
              onClick={() => setStepNumber(stepNumber + 1)}
              className="un-board__container_content_btn pointer"
            >
              next
            </button>
          ) : (
            <Link
              to={`${steps[length]?.buttonLink}`}
              className="un-board__container_content_btn"
            >
              start writing
            </Link>
          )}
        </div>
        {steps[stepNumber]?.video &&
          (steps[stepNumber]?.videoSrc?.split(".")?.pop() === "gif" ? (
            <img
              src={require(`../../assets/${steps[stepNumber]?.videoSrc}`)}
              alt=""
              className="un-board__container_file"
            />
          ) : (
            <video
              controls={false}
              autoPlay
              className="un-board__container_file"
            >
              <source
                src={require(`../../assets/${steps[stepNumber]?.videoSrc}`)}
                type={`video/${
                  steps[stepNumber]?.videoSrc?.split(".")?.pop() || "mp4"
                }`}
              />
              Your browser does not support the video tag.
            </video>
          ))}
        {stepNumber !== length && (
          <button
            onClick={() => {
              if (stepNumber < length) {
                setStepNumber(stepNumber + 1);
              }
            }}
            className="un-board__container_next pointer"
          >
            <img
              src={icons.ArrowUp}
              alt=""
              className="un-board__container_next_img"
            />
          </button>
        )}
      </div>
    </div>
  );
};
