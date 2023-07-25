import React, { useState } from "react";
import { useForm, Input, Form, Frame, FrameInRow, Grid } from "axonaui";
const Project = () => {
  const nameView = "soggetti";
  const getRow = "/soggetti/soggettisel/getrow/";
  const moduloForm = "soggetti";
  const dbForm = "soggetti";

  const [idobj_T, setIdobj_T] = useState(0);
  const { onChangeSelected } = useForm();

  const columns = [{ dbField: "IDOBJ", label: "IDOBJ", order: 0 }];
  const items = [
    {
      IDOBJ: 1.0,
      AZIENDA: "00000000000",
      Soggetti_Nome1: "Emanuele",
      Soggetti_Nome2: "Croce",
      Soggetti_Indirizzo: "via da qui",
    },
  ];
  const itemsSearch = ["Soggetti_Nome1", "Soggetti_Nome2"];

  return (
    <>
      <label>form progetto</label>

      <Frame label="TESTATA" type="form_t">
        <Grid
          id="idGriglia"
          columns={columns}
          items={items}
          itemSearch={itemsSearch}
          onClickRow={(IDOBJ) => {
            setIdobj_T(IDOBJ);
            onChangeSelected(
              process.env.REACT_APP_SERVERAPI +
                "api/axo_sel/" +
                localStorage.getItem("axn_token") +
                getRow +
                IDOBJ,
              nameView
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
        db={dbForm}
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
