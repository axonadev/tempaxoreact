import React, { useState } from "react";
import { Header, SideMenu, ContentForm, ProjectMenu } from "axonaui";
import Project from "../Pages/Project";
import { useProjectMenu } from "../hooks/useProjectMenu";

const Layout = ({ piva }) => {
  const [styleMenu, setStyleMenu] = useState(
    localStorage.getItem("axn_sidemenuswitch") === "true" ? true : false
  );

  const { items: pjItems } = useProjectMenu();

  const onSideMenuChangeHandler = (stmenu) => {
    setStyleMenu(stmenu);
  };
  const projectMenuClickHandler = (idProjectItem) => {};
  return (
    <>
      <Header titolo={"titolo"} />
      <SideMenu onSideMenuChange={onSideMenuChangeHandler} />
      <ContentForm sidemenuopen={styleMenu}>
        <Project />
      </ContentForm>
      <ProjectMenu items={pjItems} onClick={projectMenuClickHandler} />
    </>
  );
};
export default Layout;
