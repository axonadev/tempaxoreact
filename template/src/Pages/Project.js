import React, { useState } from "react";
import { useForm, Input, Form, Frame, FrameInRow, Grid } from "axonaui";
const Project = () => {
  const nameView = "v_soggetti";
  const nameTable = "soggetti";
  const cmd_getForm = "/soggetti/soggettisel/getrow/";
  const cmd_getGrid = "/soggetti/soggettisel/leggisoggetti";
  const moduloForm = "soggetti";

  const [focusForm, setFocusForm] = useState("");
  const [statoGriglia, setStatoGriglia] = useState("");
  const [idobj_T, setIdobj_T] = useState(0);
  const { onChangeSelected, onReset } = useForm();

  const insertClickHandler = (idGriglia) => {
    const idform = "form_" + idGriglia.split("_")[1];
    onReset();
    setFocusForm(idform);
    setStatoGriglia("INSERIMENTO");
    setIdobj_T(0);
  };

  return (
    <>
      <Frame label="TESTATA" type="form_t">
        <Grid
          id="maint_t"
          stato={statoGriglia}
          loadGrid={
            process.env.REACT_APP_SERVERAPI +
            "api/axo_sel/" +
            localStorage.getItem("axn_token") +
            cmd_getGrid
          }
          nameView={nameView}
          onClickRow={(IDOBJ) => {
            setIdobj_T(IDOBJ);
            setFocusForm("form_t");
            setStatoGriglia("");
            onChangeSelected(
              process.env.REACT_APP_SERVERAPI +
                "api/axo_sel/" +
                localStorage.getItem("axn_token") +
                cmd_getForm +
                IDOBJ,
              nameTable
            );
          }}
          btn_insert={true}
          onDoubleClickRow={() => {
            console.log("click");
          }}
          onBtnInsert={insertClickHandler}
        />
      </Frame>
      {focusForm === "form_t" && (
        <Form
          id="form_t"
          idobj={idobj_T}
          modulo={moduloForm}
          db={nameTable}
          serverApi={process.env.REACT_APP_SERVERAPI}
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
