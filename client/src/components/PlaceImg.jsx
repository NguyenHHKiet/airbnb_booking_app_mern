import React from "react";
import PropTypes from "prop-types";

const PlaceImg = ({ place, index = 0, className = null }) => {
  if (!place.addedPhotos?.length) return "";

  if (!className) className = "object-cover";

  return (
    <img
      className={className}
      src={"http://localhost:5000/uploads/" + place.addedPhotos[index]}
      alt=""
    />
  );
};

export default PlaceImg;
PlaceImg.propTypes = {
  place: PropTypes.array,
  index: PropTypes.number,
  className: PropTypes.string
};
