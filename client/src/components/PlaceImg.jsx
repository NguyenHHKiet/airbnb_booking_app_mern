import React from "react";

const PlaceImg = ({ place, index = 0, className = null }) => {
  if (!place.addedPhotos?.length) return "";

  if (!className) className = "object-cover";

  console.log(place);
  return (
    <img
      className={className}
      src={"http://localhost:5000/uploads/" + place.addedPhotos[index]}
      alt=""
    />
  );
};

export default PlaceImg;
