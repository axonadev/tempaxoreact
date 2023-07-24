import React, { useState } from "react";
import { Header, SideMenu, ContentForm, ProjectMenu } from "axonaui";
import Project from "../Pages/Project";
import useProjectMenu from "../hooks/useProjectMenu";

const Layout = () => {
  const [styleMenu, setStyleMenu] = useState(
    localStorage.getItem("axn_sidemenuswitch") === "true" ? true : false
  );
  const [formPj, setFormPj] = useState(null);

  const { items: pjItems } = useProjectMenu();

  const onSideMenuChangeHandler = (stmenu) => {
    setStyleMenu(stmenu);
  };
  const projectMenuClickHandler = (idProject) => {
    setFormPj(getFormMenuPj(idProject));
  };

  const projectMenuRequestSubmitHandler = (evt) => {
    processRequest(evt);
  };
  return (
    <>
      <Header
        titolo={"titolo"}
        logo={
          process.env.REACT_APP_IMGFOLDER +
          "/" +
          localStorage.getItem("axn_piva") +
          "/logo.png"
        }
      />
      <SideMenu
        onSideMenuChange={onSideMenuChangeHandler}
        pathImg={process.env.REACT_APP_IMGFOLDER}
      />
      <ContentForm sidemenuopen={styleMenu}>
        <Project />
      </ContentForm>
      <ProjectMenu
        items={pjItems}
        onClick={projectMenuClickHandler}
        pathImg={process.env.REACT_APP_IMGFOLDER}
        onRequestSubmit={projectMenuRequestSubmitHandler}
      >
        {formPj}
      </ProjectMenu>
    </>
  );
};
export default Layout;
