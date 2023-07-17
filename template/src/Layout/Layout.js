import React, { useState } from "react";
import { Header, SideMenu, ContentForm } from "axonaui";
import Project from "../Pages/Project";
const Layout = ({ piva }) => {
  const [styleMenu, setStyleMenu] = useState(
    localStorage.getItem("axn_sidemenuswitch") === "true" ? true : false
  );
  const onSideMenuChangeHandler = (stmenu) => {
    setStyleMenu(stmenu);
  };
  return (
    <>
      <Header titolo={"titolo"} />
      <SideMenu onSideMenuChange={onSideMenuChangeHandler} />
      <ContentForm sidemenuopen={styleMenu}>
        <Project />
      </ContentForm>
    </>
  );
};
export default Layout;
