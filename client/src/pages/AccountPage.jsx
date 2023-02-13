import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";

const AccountPage = () => {
  const { user, ready, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  let { subpage } = useParams();

  if (!ready) return "Loading...";
  if (!user && ready && !redirect) return <Navigate to={"/login"} />;
  if (subpage === undefined) subpage = "profile";
  if (redirect) return <Navigate to={"/"} />;

  //change current color tab
  function linkClasses(type = null) {
    let classes = "py-2 px-4 font-medium";
    if (type === subpage) {
      classes += " text-white bg-primary rounded-full ";
    }
    return classes;
  }

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setRedirect("/");
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-4">
        <Link className={linkClasses("profile")} to={"/account"}>
          My Account
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My Booking
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My Places
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center mx-auto max-w-lg">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
