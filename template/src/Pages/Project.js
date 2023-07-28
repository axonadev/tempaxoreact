import React, { useState } from "react";
import { useForm, Input, Form, Frame, FrameInRow, Grid } from "axonaui";
import { useEnv } from "axonalib";

const Project = () => {
  const { REACT_APP_SERVERAPI } = useEnv();

  const moduloForm = "soggetti";
  const nameView = "v_" + moduloForm;
  const nameTable = moduloForm;
  const cmd_getForm = "/" + moduloForm + "/" + moduloForm + "sel/getrow/";
  const cmd_getGrid = "/" + moduloForm + "/" + moduloForm + "sel/leggi";

  const [focusForm, setFocusForm] = useState("");
  const [statoGriglia, setStatoGriglia] = useState("");
  const [reloadGriglia, setReloadGriglia] = useState(0);
  const [idobj_T, setIdobj_T] = useState(0);
  const { onChangeSelected, onReset } = useForm();

  const insertClickHandler = (idGriglia) => {
    const idform = "form_" + idGriglia.split("_")[1];
    onReset();
    setFocusForm(idform);
    setStatoGriglia("INSERIMENTO");
    setIdobj_T(0);
  };

  const onLoadRow = () => {
    setReloadGriglia((item) => {
      return item + 1;
    });

    setStatoGriglia("");
    onChangeSelected(
      REACT_APP_SERVERAPI +
        "api/axo_sel/" +
        localStorage.getItem("axn_token") +
        cmd_getForm +
        idobj_T,
      nameTable
    );
  };
  const onChangeRow = (idobj) => {
    setIdobj_T(idobj);
    setFocusForm("form_t");
    setStatoGriglia("");
    onChangeSelected(
      REACT_APP_SERVERAPI +
        "api/axo_sel/" +
        localStorage.getItem("axn_token") +
        cmd_getForm +
        idobj,
      nameTable
    );
  };

  const itemFolders = [{ key: 1, label: 2, img: "image", target: "idTarget" }];

  return (
    <>
      <Frame label="TESTATA" type="form_t">
        <Grid
          id="maint_t"
          stato={statoGriglia}
          loadGrid={
            REACT_APP_SERVERAPI +
            "api/axo_sel/" +
            localStorage.getItem("axn_token") +
            cmd_getGrid
          }
          nameView={nameView}
          onAnnulla={onLoadRow()}
          onClickRow={(IDOBJ) => {
            onChangeRow(IDOBJ);
          }}
          btn_insert={true}
          onDoubleClickRow={() => {
            console.log("click");
          }}
          onBtnInsert={insertClickHandler}
          reload={reloadGriglia}
        />
      </Frame>
      {focusForm === "form_t" && (
        <Form
          id="form_t"
          idobj={idobj_T}
          modulo={moduloForm}
          db={nameTable}
          serverApi={REACT_APP_SERVERAPI}
          folders={itemFolders}
          afterSubmit={onLoadRow}
        >
          <Frame label="DATI DI PROVA">
            <FrameInRow width={[80, 10, 10]}>
              <Input label="prova" id="Soggetti_Nome1"></Input>
              <Input label="prova" id="Soggetti_Nome2"></Input>
              <Input label="prova"></Input>
            </FrameInRow>
            <FrameInRow width={[30, 30, 40]}>
              <Input label="prova"></Input>
              <Input label="prova"></Input>
              <Input label="prova"></Input>
            </FrameInRow>
            <FrameInRow width={[20, 20]}>
              <Input label="prova"></Input>
              <Input label="prova"></Input>
            </FrameInRow>
          </Frame>
        </Form>
      )}
    </>
  );
};
export default Project;
