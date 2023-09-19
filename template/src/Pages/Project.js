import React, { useState, useEffect } from "react";
import {
  useForm,
  Input,
  InputCheckBox,
  InputData,
  InputList,
  Form,
  FormButton,
  FrameContainer,
  Frame,
  FrameInRow,
  Grid,
} from "axonaui";
import { useEnv } from "axonalib";

const Project = ({ request, list }) => {
  const { REACT_APP_SERVERAPI } = useEnv();

  const numberGrid = 1;
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

  const { onChangeSelected, onReset, onChangeForm } = useForm(
    "form_t",
    REACT_APP_SERVERAPI +
      "api/axo_sel/" +
      localStorage.getItem("axn_token") +
      cmd_getForm,
    nameTable
  );

  const listTipiArticolo = list.filter(
    (item) => item.nameView === "v_tipiarticolo"
  );

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
    onChangeSelected(idobj_T);
  };
  const onChangeRow = (idobj) => {
    setIdobj_T(idobj);
    setFocusForm("form_t");
    setStatoGriglia("");
    onChangeSelected(idobj);
  };
  const onChangeInput = () => {};

  useEffect(() => {
    const loadRequest = () => {};

    loadRequest();
  }, [request]);
  return (
    <>
      <Frame
        label="TESTATA"
        type="form_t"
        stato={statoGriglia}
        selezionato={focusForm === "form_t" ? true : false}
        onActive={() => {
          setFocusForm("form_t");
        }}
      >
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
          onDoubleClickRow={() => {}}
          onBtnInsert={insertClickHandler}
          onBtnDelete={deleteClickHandler}
          btn_insert={true}
          nameView={nameView}
          reload={reloadGriglia}
          itemSearch={itemsSearch}
          selezionato={focusForm === "form_t" ? true : false}
        />
      </Frame>
      <FormButton onAnnulla={onLoadRow} id_submit="form_t" />
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
          onChangeValue={onChangeForm}
        >
          <FrameContainer id="terget_folder">
            <Frame label="DATI DI PROVA">
              <FrameInRow width={[80, 10, 10]}>
                <Input label="prova" id="Soggetti_Nome1"></Input>
                <Input label="prova" id="Soggetti_Nome2"></Input>
                <InputData label="Scadenza" id="Soggetti_ScadenzaOBJ" />
              </FrameInRow>
              <FrameInRow width={[5, 30, 40]}>
                <InputCheckBox label="checkbox" />
                <InputList
                  label="lista"
                  id=""
                  url=""
                  nameList=""
                  field_id=""
                  field_description={[""]}
                  numerocaratteri={3}
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
