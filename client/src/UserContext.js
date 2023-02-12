import { createContext } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = UseState(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = {
  children: PropTypes.element
};
