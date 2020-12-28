import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

//fetch random user data with an API
const fetchRandomData = () => {
  return axios
    .get(`https://randomuser.me/api/?results=100`)
    .then(({ data }) => {
      console.log("userInfoData", data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const UserList = () => {
  const [userInfos, setUserInfos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [localVar, setlocalVar] = useState([]);

  useEffect(() => {
    fetchRandomData().then((data) => {
      if (data === undefined) return;
      setUserInfos(data.results);
      localStorage.setItem("userInfo", JSON.stringify(data.results));
    });
  }, []);

  useEffect(() => {
    let filterData = userInfos.filter(
      (data) => !data.name.first.toLowerCase().search(searchValue)
    );
    setlocalVar(filterData);
    localStorage.setItem("searchValue", JSON.stringify(filterData));
    console.log("filterdata", filterData);
  }, [searchValue]);
  return (
    <>
      {/* header */}
      <div className="nav">
        <a href="./" className="brand">
          RandomUser_Details
        </a>
        <form>
          <input
            type="text"
            value={searchValue}
            className="search"
            placeholder="Search Random User"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>

      <div style={{ textAlign: "center" }}>
        <h1>
          <i>User Details Zone</i>
        </h1>
      </div>
      {/* main body with logic */}
      <div className="container_">
        {searchValue.length > 0
          ? localVar.map((data, idx) => {
              return <UserCard {...data} key={idx} />;
            })
          : userInfos.map((userInfo, idx) => {
              // console.log(userInfo);
              return <UserCard {...userInfo} key={idx} />;
            })}
      </div>
      {/* footer */}
      <footer className="footer">
        <p>
          Created by &nbsp;
          <b>
            <a href="_target" target="_">
              aravindhalahalli
            </a>
          </b>
          &nbsp; powered by &nbsp;
          <a href="https://randomuser.me/" target="_">
            <img
              className="randomuser"
              src="data:image/png;base64,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"
              alt="randomuser"
            />
          </a>
        </p>{" "}
      </footer>
    </>
  );
};

export default UserList;
