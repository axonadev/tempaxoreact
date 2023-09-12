import React, { useState, useEffect } from "react";
import { Header, SideMenu, ContentForm, ProjectMenu, useList } from "axonaui";
import { useEnv } from "axonalib";
import Project from "../Pages/Project";
import useProjectMenu from "../hooks/useProjectMenu";

const Layout = () => {
  const { REACT_APP_IMGFOLDER } = useEnv();
  const [styleMenu, setStyleMenu] = useState(
    localStorage.getItem("axn_sidemenuswitch") === "true" ? true : false
  );
  const [formPj, setFormPj] = useState(null);

  const { list } = useList(
    [
      {
        command: "articoli/articolisel/leggicombotipi",
        nameView: "v_tipiarticolo",
      },
    ],
    localStorage.getItem("axn_token"),
    REACT_APP_SERVERAPI
  );

  const {
    items: pjItems,
    getFormMenuPj,
    processRequest,
    answerReq,
  } = useProjectMenu();

  const onSideMenuChangeHandler = (stmenu) => {
    setStyleMenu(stmenu);
  };
  const projectMenuClickHandler = (idProject) => {
    setFormPj(getFormMenuPj(idProject));
  };

  const projectMenuRequestSubmitHandler = (evt) => {
    processRequest(evt);
  };

  useEffect(() => {
    var key;
    for (var i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i);
      if (key.indexOf("axn_list_") > -1 || key.indexOf("axn_record_") > -1) {
        localStorage.removeItem(key);
      }
    }
  }, []);

  return (
    <>
      <Header
        titolo={"titolo"}
        logo={
          REACT_APP_IMGFOLDER +
          "/" +
          localStorage.getItem("axn_piva") +
          "/logo.png"
        }
      />
      <SideMenu
        onSideMenuChange={onSideMenuChangeHandler}
        pathImg={REACT_APP_IMGFOLDER}
      />
      <ContentForm sidemenuopen={styleMenu}>
        <Project request={answerReq} list={list} />
      </ContentForm>
      <ProjectMenu
        items={pjItems}
        onClick={projectMenuClickHandler}
        pathImg={REACT_APP_IMGFOLDER}
        onRequestSubmit={projectMenuRequestSubmitHandler}
      >
        {formPj}
      </ProjectMenu>
    </>
  );
};
export default Layout;
