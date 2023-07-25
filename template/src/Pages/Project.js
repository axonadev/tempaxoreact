import React, { useState } from "react";
import { useForm, Input, Form, Frame, FrameInRow, Grid } from "axonaui";
const Project = () => {
  const nameView = "v_soggetti";
  const nameTable = "soggetti";
  const cmd_getForm = "/soggetti/soggettisel/getrow/";
  const cmd_getGrid = "/soggetti/soggettisel/leggisoggetti";
  const moduloForm = "soggetti";

  const [idobj_T, setIdobj_T] = useState(0);
  const { onChangeSelected } = useForm();

  return (
    <>
      <label>form progetto</label>

      <Frame label="TESTATA" type="form_t">
        <Grid
          id="maint_t"
          loadGrid={
            process.env.REACT_APP_SERVERAPI +
            "api/axo_sel/" +
            localStorage.getItem("axn_token") +
            cmd_getGrid
          }
          nameView={nameView}
          onClickRow={(IDOBJ) => {
            setIdobj_T(IDOBJ);
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
        />
      </Frame>
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
    </>
  );
};
export default Project;
