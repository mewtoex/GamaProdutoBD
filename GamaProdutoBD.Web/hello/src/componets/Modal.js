import React, { useState } from "react";
import { CModalBody, CFormSelect, CModalHeader, CFormInput, CForm, CModal, CModalFooter, CButton, CModalTitle } from '@coreui/react'
import useNotification from '../hooks/useNotification';

const Modal = ({ isOpen, setIsOpen, action, persistirDados, objEdit, setObjEdit, list, get }) => {
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
      case ("nome"): objEdit.nome = param;
        break;
      case ("precoVenda"): objEdit.precoVenda = objEdit.precoCompra + ((objEdit.precoCompra*(objEdit.precoLucro /100))  );
        break;
      case ("unid"): objEdit.unid = param;
        break;
      case ("statusProduto"): objEdit.statusProduto = param;
        break;
      case ("quantidade"): objEdit.quantidade = param;
        break;
      case ("armazenagem"): objEdit.armazenagem = param;
        break;
      case ("precoCompra"): objEdit.precoCompra = param;
        break;
      case ("precoLucro"): objEdit.precoLucro = param;
        break;
    }
    //objEdit.id
    setObjEdit(objEdit);
    if (type)
      return param
    else
      return 0;

  };

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
          <label>Nome</label>
          <CFormInput min="0" defaultValue={objEdit.nome} onChange={(e) => objEditChange(e.target.value, "nome")} readOnly={false} id="nome" name="name" type="text" />
          <label>Unidade</label>
          <CFormInput min="0" defaultValue={objEdit.unid} onChange={(e) => objEditChange(e.target.value, "unid")} readOnly={false} id="unid" name="unid" type="text" />
          <label>Status Produto</label>
          <CFormInput min="0" defaultValue={objEdit.statusProduto} onChange={(e) => objEditChange(e.target.value, "statusProduto")} readOnly={false} id="statusProduto" name="name" type="text" />
          <label>Quantidade</label>
          <CFormInput min="0" defaultValue={objEdit.quantidade} onChange={(e) => objEditChange(e.target.value, "quantidade")} readOnly={false} id="quantidade" name="quantidade" type="number" />
          <label>armazenagem</label>
          <CFormInput min="0" defaultValue={objEdit.armazenagem} onChange={(e) => objEditChange(e.target.value, "armazenagem")} readOnly={false} id="armazenagem" name="armazenagem" type="text" />
          <label>Preco de Compra</label>
          <CFormInput min="0" defaultValue={objEdit.precoCompra} onChange={(e) => objEditChange(e.target.value, "precoCompra")} readOnly={false} id="precoCompra" name="precoCompra" type="number" />
          <label>Valor do  Lucro</label>
          <CFormInput min="0" defaultValue={objEdit.precoLucro} onChange={(e) => objEditChange(e.target.value, "precoLucro")} readOnly={false} id="precoLucro" name="precoLucro" type="number" />
          <label>Preco de Venda</label>
          <CFormInput min="0" defaultValue={objEdit.precoVenda} onChange={(e) => objEditChange(e.target.value, "precoVenda")} readOnly={false} id="precoVenda" name="precoVenda" type="number" />

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