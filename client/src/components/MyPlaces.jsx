import React from "react";
import { Link, useParams } from "react-router-dom";

const MyPlaces = () => {
  const { action } = useParams();

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }
  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)} {inputDescription(description)}
      </>
    );
  }
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            to={"/account/places/new"}
            className="inline-flex gap-1 bg-primary text-white py-2 px-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6">
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
            Add new places
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            {preInput(
              "Title",
              "Title for your place. should be short and catchy as in advertisement"
            )}
            <input
              type="text"
              name="title"
              value=""
              placeholder="title, for example: My lovely apt"
            />
            {preInput("Address", "Address to this place")}
            <input type="text" name="address" value="" placeholder="address" />
            {preInput("Photos", "more = better")}
            <div className="flex gap-2">
              <input type="text" placeholder="Add using a link ...jpg" />
              <button type="submit" className="bg-gray-200 px-4 rounded-2xl">
                Add&nbsp;photo
              </button>
            </div>
            <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:gird-cols-6">
              <button
                type="submit"
                className="flex items-center justify-center border bg-transparent rounded-2xl p-8 text-gray-600">
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
            {preInput("Description", "description of the place")}
            <textarea />
            {preInput("Perks", "select all the perks of your place")}
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">Perks</div>
            {preInput("Extra info", "house rules, etc")}
            <textarea />
            {preInput(
              "Check in&out times",
              "add check in and out times, remember to have some time window for cleaning the room between guests"
            )}
            <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input type="text" placeholder="14" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input type="text" placeholder="11" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                <input type="number" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Price per night</h3>
                <input type="number" />
              </div>
            </div>
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyPlaces;
