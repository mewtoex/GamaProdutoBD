import React, { useState } from "react";
import { CModalBody, CFormSelect, CModalHeader, CFormInput, CForm, CModal, CModalFooter, CButton, CModalTitle } from '@coreui/react'
import useNotification from '../hooks/useNotification';

const Modal = ({ isOpen, setIsOpen, action, persistirDados, objEdit, setObjEdit, list,  get }) => {
  const [listTorneio, setlistTorneio] = useState([]);
  const [listTecnico, setlistTecnico] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const { notifications } = useNotification();

  const openModal = () => {
    persistirDados();
    setIsOpen(false);
  };


  const objEditChange = (param, type) => {
    console.log(objEdit)
    switch (type) {
      case ("tecA"): objEdit.idTecnicoA = param;
        break;
      case ("tecB"): objEdit.idTecnicoB = objEdit.idTecnicoA == param ? 0 : param;
        if (objEdit.idTecnicoB == 0) {
          var send = Object;
          type = false;
          send.statusCode = 600;
          send.texto = "Tecnico já escolhido";

          notifications(send, 'warning')

        }
        else
          type = true;
        break;
      case ("Tor"): objEdit.IdTorneio = param;
        break;
      case ("pontoA"): objEdit.pontosTecnicoA = param;
        break;
      case ("pontoB"): objEdit.pontosTecnicoB = param;
        break;
    }
    //objEdit.id
    setObjEdit(objEdit);
    if (type)
      return param
    else
      return 0;

  };

  const getDados = (api, type) => {
    get(api,
      (response) => {
        if ("Tecnico" == type)
          setlistTecnico(response.value)
        else
          setlistTorneio(response.value)

      })
  };
  var name = "";
  //getDados("api/Torneio/getTorneios", "Torneios")() =>{getDados("api/Tecnico/getTecnicos", "Tecnico") }
  console.log(objEdit)
  return (<>
    <div> { }</div>
    <CModal
      onClose={() => setIsOpen(false)}
      backdrop={true}
      keyboard={false}
      portal={true}
      visible={isOpen}
    >
      <CModalHeader>
        <CModalTitle>{action}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm >
          <label>Torneio</label>
          <CFormSelect value={objEdit.torneio} onChange={(e) => objEditChange(e.target.value, "tor")} id="Torneio" name="Torneio">
            <option value={objEdit.IdTorneio}  >{objEdit.torneio}</option>
            {listTorneio?.map((obj, key) => {
              return (
                <option value={obj.id} >{obj.name}</option>
              )
            })}
          </CFormSelect>
          <label>Tecnico A</label>
          <CFormSelect value={objEdit.tecnicoA} onChange={(e) => objEditChange(e.target.value, "tecA")} id="tecnicoA" name="tecnicoA" >
            <option value={objEdit.idTecnicoA} >{objEdit.tecnicoA}</option>
            {listTecnico?.map((obj, key) => {
              return (
                <option value={obj.id} >{obj.name}</option>
              )
            })}
          </CFormSelect>
          <label>Pontos A</label>
          <CFormInput min="0" defaultValue={objEdit.pontosTecnicoA} onChange={(e) => objEditChange(e.target.value, "pontoA")} readOnly={false} id="pontosA" name="name" type="number" />
          <label>Tecnico B</label>
          <CFormSelect value={objEdit.tecnicoB} onselect={(e) => alert(e)} onChange={(e) => console.log(e.target.value = objEditChange(e.target.value, "tecB"))} feedbackInvalid="Não pode repetir os tecnicos" id="tecnicoB" name="tecnicoB">
            <option value={objEdit.tecnicoB} >{objEdit.tecnicoB}</option>
            {listTecnico?.map((obj, key) => {
              return (
                <option value={obj.id} >{obj.name}</option>
              )
            })}
          </CFormSelect>
          <label>Pontos B</label>
          <CFormInput min="0" defaultValue={objEdit.pontosTecnicoB} onChange={(e) => objEditChange(e.target.value, "pontoB")} readOnly={false} id="pontosB" name="name" type="number" />

        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setIsOpen(false)}>Fechar</CButton>
        <CButton onClick={() => openModal()} color="primary">Salvar</CButton>
      </CModalFooter>
    </CModal>
  </>);


};
export default Modal;