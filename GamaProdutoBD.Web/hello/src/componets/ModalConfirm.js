import React, { useState } from "react";
import { CModalBody, CFormSelect, CModalHeader, CFormInput, CForm, CModal, CModalFooter, CButton, CModalTitle } from '@coreui/react'
import useNotification from '../hooks/useNotification';

const Modal = ({ isOpenC, setIsOpenC, action, delteDados, objEdit, setObjEdit, list, get }) => {
  const [listTorneio, setlistTorneio] = useState([]);
  const [listTecnico, setlistTecnico] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const { notifications } = useNotification();

  const openModal = () => {
    delteDados(objEdit.idProduto);
    setIsOpenC(false);
  };




  console.log(objEdit)
  return (<>
    <div> { }</div>
    <CModal
      onClose={() => setIsOpenC(false)}
      backdrop={true}
      keyboard={false}
      portal={true}
      visible={isOpenC}
    >
      <CModalHeader>
        <CModalTitle>{action}</CModalTitle>
      </CModalHeader>
      <CForm >
          <label>Realmente deseja Apagar o  Produto </label>
        </CForm>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setIsOpenC(false)}>Sair</CButton>
        <CButton onClick={() => openModal()} color="primary">Confimar</CButton>
      </CModalFooter>
    </CModal>
  </>);


};
export default Modal;