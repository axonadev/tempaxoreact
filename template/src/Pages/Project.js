import React, { useState } from "react";
import {
  useForm,
  Input,
  InputCheckBox,
  InputData,
  InputList,
  Form,
  FrameContainer,
  Frame,
  FrameInRow,
  Grid,
} from "axonaui";
import { useEnv } from "axonalib";

const Project = () => {
  const { REACT_APP_SERVERAPI } = useEnv();

  const moduloForm = "soggetti";
  const nameView = "v_" + moduloForm;
  const nameTable = moduloForm;
  const cmd_getForm = "/" + moduloForm + "/" + moduloForm + "sel/getrow/";
  const cmd_getGrid = "/" + moduloForm + "/" + moduloForm + "sel/leggi";

  const itemFolders = [
    { key: 1, label: "label", img: "image", target: "terget_folder" },
  ];
  const idFolder1 = "terget_folder";
  const itemsSearch = ["Soggetti_Nome1", "Soggetti_Nome2"];

  const [focusForm, setFocusForm] = useState("");
  const [statoGriglia, setStatoGriglia] = useState("");
  const [reloadGriglia, setReloadGriglia] = useState(0);
  const [idobj_T, setIdobj_T] = useState(0);
  const { onChangeSelected, onReset, formValue } = useForm();

  const insertClickHandler = (idGriglia) => {
    const idform = "form_" + idGriglia.split("_")[1];
    onReset();
    setFocusForm(idform);
    setStatoGriglia("INSERIMENTO");
    setIdobj_T(0);
  };
  const deleteClickHandler = (idGriglia) => {
    console.log(idGriglia);
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

  return (
    <>
      <Frame label="TESTATA" type="form_t" stato={statoGriglia}>
        <Grid
          id="maint_t"
          loadGrid={
            REACT_APP_SERVERAPI +
            "api/axo_sel/" +
            localStorage.getItem("axn_token") +
            cmd_getGrid
          }
          onClickRow={(IDOBJ) => {
            onChangeRow(IDOBJ);
          }}
          onDoubleClickRow={() => {
            console.log("click");
          }}
          onBtnInsert={insertClickHandler}
          onBtnDelete={deleteClickHandler}
          btn_insert={true}
          nameView={nameView}
          reload={reloadGriglia}
          itemSearch={itemsSearch}
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
          onAnnulla={onLoadRow}
        >
          <FrameContainer id="terget_folder">
            <Frame label="DATI DI PROVA">
              <FrameInRow width={[80, 10, 10]}>
                <Input
                  label="prova"
                  id="Soggetti_Nome1"
                  val={formValue}
                ></Input>
                <Input
                  label="prova"
                  id="Soggetti_Nome2"
                  val={formValue}
                ></Input>
                <InputData
                  label="Scadenza"
                  id="Soggetti_ScadenzaOBJ"
                  val={formValue}
                />
              </FrameInRow>
              <FrameInRow width={[30, 30, 40]}>
                <InputCheckBox label="checkbox" val={formValue} />
                <InputList
                  label="lista"
                  id=""
                  url=""
                  nameList=""
                  field_id=""
                  field_description={[""]}
                  val={formValue}
                />
              </FrameInRow>
            </Frame>
          </FrameContainer>
        </Form>
      )}
    </>
  );
};
export default Project;
