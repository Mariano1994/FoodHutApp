import { createContext, useState } from "react";
import { toast } from "sonner";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userName, setuserName] = useState("");
  const [loginStatusUser, setLoginStatusUser] = useState(false);
  const [userPassWord, setuserPassword] = useState("react2024");
  const [showLogout, setShowLogout] = useState(false);

  const handlerLogin = () => {
    if (userPassWord !== "react2024") return;
    setLoginStatusUser((log) => !log);
    setShowLogout(false);

    if (loginStatusUser === false) {
      toast.success(`Welcome, ${userName}`);
    } else {
      toast.error(`Thanks to visit us, ${userName}`);
    }
  };

  const onSetUserName = (event) => {
    setuserName(event.target.value);
  };

  const onSetUserPassword = (event) => {
    setuserPassword(event.target.value);
  };

  const handlerLogout = () => {
    setShowLogout(true);
  };

  return (
    <UserContext.Provider
      value={{
        userName,
        setuserName,
        loginStatusUser,
        setLoginStatusUser,
        handlerLogin,
        handlerLogout,
        showLogout,
        userPassWord,
        onSetUserName,
        onSetUserPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
