import React, { useEffect, useState } from "react";
import useRequest from '../hooks/useRequest';
import useNotification from '../hooks/useNotification';
import { CFormInput, CForm, CButton, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react'
import Modal from './Modal'
import Menu from "./Menu";
import Pages from "./Pages";

import { Route } from "react-router-dom";


const Grid = ({ api, routes, lHeader, bodyJson }) => {
  const [list, setlist] = useState([]);
  const [action, setAction] = useState([]);
  const [objEdit, setObjEdit] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isPartida, setIsPartida] = useState(false);
  const { notifications } = useNotification();
  const { post, get } = useRequest();

  useEffect(() => {
    getDados();
  }, [])

  const sendRequestPost = () => {

    post(api, bodyJson,
      (response) => {
        notifications(response, "")
        if (routes != "Partida")
          api = "api/" + routes + "/get" + routes + "s";
        else
          api = "api/" + routes + "/get" + routes;
        getDados(true)
      }, (error) => {
        notifications(error, "")
      })

  }

  const getDados = (param) => {
    get(api,
      (response) => {
        setlist(response)
      })
  };

  const persistirDados = (param) => {
    if (routes != "Partida") {
      var er = /[^a-zA-Z0-9]/;
      var name = document.getElementById('namePersistir').value.replace(er, "");
      api = "api/" + routes + "/persistir" + routes;
      bodyJson = {
        "id": 0,
        "name": name
      };
      list.forEach(obj => {
        if (obj.id == objEdit)
          bodyJson.id = obj.id
      });
    }
    else
      bodyJson = objEdit;
    api = "api/" + routes + "/persistir" + routes;
    sendRequestPost();

  };

  const delteDados = (param) => {
    api = "api/" + routes + "/delete" + routes;

    bodyJson = {
      "id": param
    };
    sendRequestPost();

  };

  const getDadosForm = () => {
    var er = /[^a-zA-Z0-9]/;
    var name = document.getElementById('name').value.replace(er, "");
    if (name == "") {
      var send = Object;
      send.statusCode = 600;
      send.texto = "Nome não pode ser vazio";

      notifications(send, 'warning')
    }
    else {
      api = "api/" + routes + "/get" + routes + "s?name=" + name;
      bodyJson = {
        "id": 0,
        "name": name
      };
      getDados();
    }
  };

  return (
    <> <Menu />
      <div className="w3-row" ><br /><br /></div>

      <div >
        <div className="w3-row w3-right  w3-quarter" >
          <div className="w3-row  w3-right  w3-half " >
            <div className="w3-container w3-center" >
              <CButton color="success" className="w3-center  w3-container" onClick={() => [
                setIsOpen(true), setAction("Adicionar"), setObjEdit(new Object),
                setIsPartida(routes == "Partida" ? true : false)]}>Adicionar novo  </CButton>
            </div>
          </div>


        </div>
        <div className="w3-row" ><br /><br /></div>
        <div className=" "   >
          <div color="w3-black" id="tableDiv">
            <CTable color="dark" id="table" className="table table-sm table-bordered table-striped table-hover m-0">
              <thead>
                <CTableRow>
                  {lHeader?.map((header, headerIndex) => {
                    return (<CTableHeaderCell key={headerIndex}>
                      {header.label}
                    </CTableHeaderCell >)
                  })}
                </CTableRow>
              </thead>
              <CTableBody >

                {list?.map((obj, key) => {
                  return (<tr key={key}>
                    {lHeader?.map((header, headerIndex) => {
                      if (header.prop == "Editar") {
                        return (<CTableDataCell className="acaoColumn" key="acao">
                          <CButton color="warning" onClick={() => [setIsOpen(true), setAction("Editar"), setIsPartida(routes == "Partida" ? true : false), setObjEdit(obj.id)]}>Editar</CButton > &ensp;
                          <CButton color="danger" onClick={() => delteDados(obj.id)}>Excluir</CButton >
                        </CTableDataCell  >)
                      } else
                        return (<CTableDataCell key={headerIndex}>
                          {obj[header.prop]}
                        </CTableDataCell  >)
                    }
                    )}
                  </tr>)
                })}
              </CTableBody >
            </CTable >
          </div>
          <div className=" w3-half w3-row" ><br /><br /></div>
        </div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} action={action} persistirDados={() => persistirDados()} objEdit={objEdit} setObjEdit={setObjEdit} list={list} get={get}></Modal>

      </div>
    </>
  )
};
export default Grid;