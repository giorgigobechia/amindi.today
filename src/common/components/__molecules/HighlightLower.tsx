import DropIcon from "@/common/icons/dropIcon";
import EyeIcon from "@/common/icons/eyeIcon";
import TempIcon from "@/common/icons/tempIcon";
import React from "react";

interface HighlightLowerProps {
  dataType: string;
  number: number;
  title: string;
}

interface Props {
  props: HighlightLowerProps;
  type: string;
}

const HighlightLower = ({ props, type }: Props) => {
  return (
    <article className="rounded-[18px] bg-[#ffffff4d] p-5 flex justify-between">
      <div className="flex flex-col gap-5">
        <h6 className="text-[#000000CC] text-sm">{props.dataType}</h6>
        <div
          className={`${type === "feelsLike" ? "flex items-center gap-1" : ""}`}
        >
          {type === "feelsLike" ? <TempIcon width={15} height={29} /> : ""}
          <p
            className={`text-[40px] font-medium flex ${
              type === "feelsLike" ? "" : "items-end"
            } leading-10`}
          >
            {props.number}{" "}
            {type === "humidity" ? (
              <span className="text-base">%</span>
            ) : type === "visibility" ? (
              <span className="text-base">km</span>
            ) : (
              <span className="text-sm">o</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[38%] pt-5 flex flex-col justify-between">
        {type === "humidity" ? (
          <DropIcon width={27} height={27} />
        ) : type === "visibility" ? (
          <EyeIcon width={27} height={27} />
        ) : (
          <div className="w-[27px] h-[27px]"></div>
        )}

        <p className="text-xs text-[#00000099]">{props.title}</p>
      </div>
    </article>
  );
};

export default HighlightLower;
