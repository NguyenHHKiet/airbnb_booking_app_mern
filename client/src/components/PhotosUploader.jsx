import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const PhotosUploader = ({ addedPhotos, onChange }) => {
  const [photoLink, setPhotoLink] = useState("");
  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", { link: photoLink });
    onChange((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add using a link ...jpg"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <button className="bg-gray-200 px-4 rounded-2xl" onClick={addPhotoByLink}>
          Add&nbsp;photo
        </button>
      </div>
      <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:gird-cols-6">
        {addedPhotos.length > 0 && addedPhotos.map((link, index) => <div key={index}>{link}</div>)}
        <button className="flex items-center justify-center border bg-transparent rounded-2xl p-8 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          UPLOAD
        </button>
      </div>
    </>
  );
};

export default PhotosUploader;

PhotosUploader.propTypes = {
  addedPhotos: PropTypes.array,
  onChange: PropTypes.func
};
