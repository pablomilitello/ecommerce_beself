import { createContext } from "react";

export const userContext = createContext();

function UserProvider(props) {
  const user = "Pablo";
  const logidin = "true";

  function test() {
    console.log("---> Haciendo un Test con Context");
  }
  return <userContext.Provider value={{ user, logidin, test }}>{props.children}</userContext.Provider>;
}

export { UserProvider };
