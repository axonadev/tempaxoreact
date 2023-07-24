import React, { useState, useEffect } from "react";
const useProjectMenu = () => {
  const [items, setItems] = useState([]);
  const [answerReq, setAnserReq] = useState([]);

  const calendario = () => {
    console.log("funzione esterna");
  };

  useEffect(() => {
    const itemspj = [
      {
        id: 0,
        label: "Anni",
        img: "calendar",
        function: () => {
          calendario();
        },
      },
      {
        id: 1,
        label: "Contabilizzazione",
        img: "print",
        function: () => {
          console.log("click stampa");
        },
      },
    ];

    setItems(itemspj);
  }, []);
  const getFormMenuPj = (idItem) => {
    return <input type="date" />;
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
