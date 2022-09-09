import React, { useEffect, useState } from "react";
import { CPagination, CPaginationItem } from '@coreui/react'
import useRequest from '../hooks/useRequest';

const Pages = (routes) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [listPG, setlistPG] = useState([]);
  const { get } = useRequest();

  const getSize = (size) => {
    for (let index = 0; index < size; index++) {
      return (<CPaginationItem key={size}>
        </CPaginationItem >)
    }
  };

  const getDados = (api) => {
    get(api,
      (response) => {
        setlistPG(parseInt(response.value / 12).toString())
      })
  };
  getDados("api/" + "Tecnico" + "/getLast");

  return (
    <div className={'mt-2 w3-right w3-row'} >
      <CPagination aria-label="Page navigation example">
        <CPaginationItem aria-label="Previous" disabled>
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        <CPaginationItem active>1</CPaginationItem>
        {}
        <CPaginationItem aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
    </div>
  )
}; export default Pages;
