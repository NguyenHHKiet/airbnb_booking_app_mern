import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.get("/profile");
    }
    console.log(user);
  }, []);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};
