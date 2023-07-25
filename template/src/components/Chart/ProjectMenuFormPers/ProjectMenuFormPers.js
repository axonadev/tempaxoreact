import React from "react";
const ProjectMenuFormPers = ({ idItem }) => {
  return <>{idItem === "PjPers" && <label>del progetto</label>}</>;
};
export default ProjectMenuFormPers;

export const getProjectMenuItemPers = () => {
  const itemspj = [
    {
      id: "PjPers",
      label: "PjPers",
      img: "calendar",
      function: () => {},
    },
  ];

  return itemspj;
};
