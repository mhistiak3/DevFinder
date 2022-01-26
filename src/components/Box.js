import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import SearchBox from "./SearchBox";
import UserBox from "./UserBox";

const Box = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseURL = "https://api.github.com/users/";
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkTheme]);
  const handleSubmit = (e) => {
    e.preventDefault();
    userHandleFunction();
  };
  const userHandleFunction = async () => {
    try {
      setLoading(true);
      const userInfo = await fetch(baseURL + searchTerm);
      const user = await userInfo.json();
      setUser(user);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="box">
      <div className="header">
        <h2>DevFinder</h2>
        <span onClick={() => setDarkTheme(!darkTheme)}>
          <b>Light</b> <MdOutlineLightMode />
        </span>
      </div>
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
      />

      {user ? (
        <UserBox user={user} />
      ) : (
        <h3>Search a Developer and Get Quick Info.</h3>
      )}
    </div>
  );
};

export default Box;
