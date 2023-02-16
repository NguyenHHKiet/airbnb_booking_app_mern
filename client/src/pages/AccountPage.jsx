import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import MyPlaces from "../components/MyPlaces";
import AccountNav from "../components/AccountNav";

const AccountPage = () => {
  const { user, ready, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  let { subpage } = useParams();

  if (!ready) return "Loading...";
  // haven't used yet
  if (!user && ready && !redirect) return <Navigate to={"/login"} />;
  if (subpage === undefined) subpage = "profile";
  if (redirect) return <Navigate to={"/"} />;

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setRedirect("/");
  }

  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center mx-auto max-w-lg mt-5">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && (
        <div className=" mx-auto mt-5">
          <MyPlaces />
        </div>
      )}
    </div>
  );
};

export default AccountPage;
