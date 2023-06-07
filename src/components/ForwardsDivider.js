import React from "react";

export default function ForwardsDivider(props) {
  const {
    thickness = 10,
    height = 10,
    vertical = false,
    spacing = 1,
    flipped = false,
    className,
  } = props;

  return (
    <div className={className}>
      <style jsx>
        {`
          .divider {
            height: ${vertical ? "100%" : height + "px"};
            width: ${vertical ? height + "px" : "100%"};
            background-image: repeating-linear-gradient(
              ${flipped ? "45deg" : "-45deg"},
              #ffffff,
              #ffffff ${thickness}px,
              transparent ${thickness}px,
              transparent ${2 * thickness * spacing}px
            );
          }
        `}
      </style>
      <div className="divider w-0" />
    </div>
  );
}
