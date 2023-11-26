/* eslint-disable @next/next/no-img-element */
import React from "react";

const ImageLoading = ({ src, className = "" }) => {
  return (
    <img
      src={src}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = "/images/db_bg.jpeg";
      }}
      className={`${className}`}
      alt="img"
    />
  );
};

export default ImageLoading;
