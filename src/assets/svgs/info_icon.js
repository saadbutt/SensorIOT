import React from "react";

const InfoIcon = ({ popular }) => {
  const strokeColor = popular ? "#000000" : "#FFFFFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <g id="Outlined">
        <path
          d="M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"
          style={{ fill: strokeColor }}
        />
        <circle
          style={{
            fill: "none",
            stroke: strokeColor,
            strokeWidth: 2,
            strokeMiterlimit: 10,
          }}
          cx="12"
          cy="12"
          r="9"
        />
      </g>
    </svg>
  );
};

export default InfoIcon;
