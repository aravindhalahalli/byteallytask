import React from "react";

const UserCard = (props) => {
  return (
    <div className="user_component">
      <img
        src={props.picture.large}
        alt={props.name.first}
        className="poster"
      />
      <div className="user-info">
        <h2>{`${props.name.title}  ${props.name.first}`}</h2>
      </div>
      <div className="hover-info">
        <h4>{`FullName : ${props.name.first} ${props.name.last}`}</h4>
        <h4>{`Gender : ${props.gender}`}</h4>
        <h4>{`Email : ${props.email} `}</h4>
        <button
          className="getinfobtn"
          onClick={() => {
            localStorage.setItem("SpecificuserInfo",JSON.stringify(props));
            alert(`${JSON.stringify(props)}`);
          }}
        >
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default UserCard;
