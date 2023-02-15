import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const PhotosUploader = ({ addedPhotos, onChange }) => {
  const [photoLink, setPhotoLink] = useState("");
  const [button, setButton] = useState(false);
  const data = new FormData();

  async function addPhotoByLink(ev) {
    ev.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", { link: photoLink });
    onChange((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  function uploadPhotos(e) {
    const files = e.target.files;
    for (const file of files) {
      data.append("photos", file);
    }
    axios
      .post("/upload", data, { headers: { "Content-type": "multipart/form-data" } })
      .then((response) => {
        const { data: filenames } = response;
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  }

  useEffect(() => {
    photoLink ? setButton(false) : setButton(true);
  }, [photoLink]);

  console.log(addedPhotos);

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add using a link ...jpg"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <button
          className={"bg-gray-200 px-4 rounded-2xl " + (!button ? "bg-green-400" : "bg-primary")}
          onClick={addPhotoByLink}
          disabled={button}>
          Add&nbsp;photo
        </button>
      </div>
      <div className="mt-2 gap-2 grid grid-cols-3 md:grid-cols-4 lg:gird-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div className="h-32 md:h-48 flex relative" key={link}>
              <img
                src={`http://localhost:5000/uploads/${link}`}
                className="rounded-2xl w-full object-cover"
                alt="upload-photos"
              />
            </div>
          ))}
        <label className="flex gap-1 h-32 md:h-48 cursor-pointer items-center justify-center border bg-transparent rounded-2xl text-gray-600">
          <input type="file" multiple className="hidden" onChange={uploadPhotos} />
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
        </label>
      </div>
    </>
  );
};

export default PhotosUploader;

PhotosUploader.propTypes = {
  addedPhotos: PropTypes.array,
  onChange: PropTypes.func
};
