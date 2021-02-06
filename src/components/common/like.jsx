import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Like = ({ liked, onLike }) => {
  let icon = liked === false ? farHeart : faHeart;
  return (
    <FontAwesomeIcon
      icon={icon}
      style={{ cursor: "pointer" }}
      onClick={onLike}
    />
  );
};

export default Like;
