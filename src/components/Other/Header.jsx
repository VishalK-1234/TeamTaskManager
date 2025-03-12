import React, { useState, useEffect } from "react";
import { setLocalStorage } from "../../utils/localstorage";

const Header = (props) => {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    if (props.data) {
      setUserName(props.data.name);
    } else {
      setUserName("Admin");
    }
  }, [props.data]);

  const LogOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser(null);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="flex text-white items-end justify-between p-4 bg-black">
      <h1 className="text-4xl font-semibold">
        Hello
        <br /> <span className="text-5xl font-bold">{userName}👋</span>
      </h1>
      <button
        onClick={LogOutUser}
        className="px-4 py-3 rounded-4xl font-medium bg-red-700 hover:bg-red-800"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
