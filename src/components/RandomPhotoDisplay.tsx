import React, { useState, useEffect } from "react";

interface RandomPhotoDisplayProps {
  imageUrls: string[];
}

function RandomPhotoDisplay({ imageUrls }: RandomPhotoDisplayProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 10000); // Change photo every 10 seconds

    return () => clearInterval(interval);
  }, [imageUrls]);

  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "top",
      }}
    >
      <img
        src={imageUrls[currentPhotoIndex]}
        alt="Random Photo"
        style={{ marginTop: 10 }}
      />
    </div>
  );
}

export default RandomPhotoDisplay;
