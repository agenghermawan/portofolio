import React from "react";

export default function Image(props) {
  const { width, height, alt = "", src } = props;
  return (
    <img
      src={src}
      alt={alt}
      className="bg-cover drop-shadow-2xl rounded-md"
      height={height}
      width={width}
    />
  );
}
