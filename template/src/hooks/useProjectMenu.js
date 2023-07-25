import { ProjectMenuForm } from "axonaform";
import React, { useState, useEffect } from "react";
import ProjectMenuFormPers, {
  getProjectMenuItemPers,
} from "../components/ProjectMenuFormPers/ProjectMenuFormPers";
import { getProjectMenuItem } from "axonaform";

const useProjectMenu = () => {
  const [items, setItems] = useState([]);
  const [answerReq, setAnserReq] = useState([]);

  useEffect(() => {
    const itemspj = getProjectMenuItem();
    const itemsppers = getProjectMenuItemPers();
    setItems(itemspj.concat(itemsppers));
  }, []);

  const getFormMenuPj = (idItem) => {
    return (
      <>
        <ProjectMenuForm idItem={idItem} />
        <ProjectMenuFormPers idItem={idItem} />
      </>
    );
  };
  const processRequest = (evt) => {
    setAnserReq([
      {
        id: 0,
        data: "",
        operazione: "tra",
      },
    ]);
  };
  return {
    items,
    answerReq,
    getFormMenuPj,
    processRequest,
  };
};
export default useProjectMenu;
