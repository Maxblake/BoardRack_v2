/*
Avatar component
    userId: used to generate avatar picture color scheme
    username: displays first letter of username as default
    size: height and width of avatar in px
    isEditable: displays edit button onHover
*/

import React from "react";
import { PlusOutlined } from "@ant-design/icons";

import { Container, EditButton } from "./style";
import colorCodes from "../../constants/colorCodes";

const index = ({ userId, username, size, isEditable }) => {
  const colorInt = userId.charCodeAt(userId.length - 1) % 20;

  return (
    <Container
      primary={colorCodes[colorInt].primary}
      secondary={colorCodes[colorInt].secondary}
      size={size}
    >
      {isEditable && (
        <EditButton size={size}>
          <PlusOutlined />
        </EditButton>
      )}
      {username.charAt(0)}
    </Container>
  );
};

export default index;