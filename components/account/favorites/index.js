import React from "react";
import { Divider } from "antd";

import { headerStyle } from "../style";
import MyFavorites from "../../displayPosts/myFavorites";

const index = () => {
  return (
    <div>
      <Divider orientation="left" style={headerStyle}>
        My Favorites
      </Divider>
      <MyFavorites />
    </div>
  );
};

export default index;
